import type { CalendarEvent } from "../types/CalendarEvent";

export class GoogleCalendar {
    private cacheDuration: number = 3600000; // 1 hour
    private cacheKey: string = "googleCalendarEvents";
    private cacheTimestampKey: string = "googleCalendarCacheTimestamp";
    private calendarId: string;
    private apiKey: string;
    

    constructor(config: ReturnType<typeof useRuntimeConfig>) {
        this.calendarId = config.public.googleCalendarId + "@group.calendar.google.com";
        this.apiKey = config.public.googleCalendarApiKey as string;
    }

    async getEvents(number : number): Promise<CalendarEvent[]> {
        const cachedEvents = this.getCachedEvents();
        
        if (cachedEvents) {
            console.log("Using cached events");
            return cachedEvents;
          }

        return this.getGoogleEvents(number);
    }

    private async getGoogleEvents(number : number) {
      const today = new Date().toISOString();
      const url = `https://www.googleapis.com/calendar/v3/calendars/${this.calendarId}/events?key=${this.apiKey}&maxResults=${number}&orderBy=startTime&singleEvents=true&timeMin=${encodeURIComponent(today)}`;
      

        try {
            const response = await fetch(url);
            const data = await response.json();
            const fetchedNonCancelledEvents = data.items.filter((item: any) => item.status !== 'cancelled');
            const fetchedEvents = fetchedNonCancelledEvents.filter((currentEvent: CalendarEvent, _: number, allEvents: CalendarEvent[]) => {
              return allEvents.every(existingEvent => {
                if (existingEvent === currentEvent) return true;

                const [existingRootId] = existingEvent.id.split('_');
                const [currentRootId] = currentEvent.id.split('_');

                // Keep events from different groups
                if (existingRootId !== currentRootId) return true;

                // Check if all fields (except description) are the same
                const isOtherwiseIdentical =
                  currentEvent.summary === existingEvent.summary &&
                  currentEvent.start === existingEvent.start &&
                  currentEvent.end === existingEvent.end &&
                  currentEvent.location === existingEvent.location;

                // If they're identical but one has a description, prefer the one with a description
                if (isOtherwiseIdentical) {
                  return existingEvent.description || !currentEvent.description;
                }

                // If they're not identical, keep both
                return true;
              });
            }).map((item: any) => ({
                id: item.id,
                summary: item.summary,
                start: item.start,
                end: item.end,
                location: item.location,
                description: item.description

              }));

              fetchedEvents.sort((a:CalendarEvent, b:CalendarEvent) => {
                const startA = a.start.dateTime ? new Date(a.start.dateTime) : a.start.date ? new Date(a.start.date) : new Date(0);
                const startB = b.start.dateTime ? new Date(b.start.dateTime) : b.start.date ? new Date(b.start.date) : new Date(0);
              
                return startA.getTime() - startB.getTime();  // Compare the two Date objects
              });
              

            this.cacheEvents(fetchedEvents);

            return fetchedEvents;
        } catch (error) {
            console.error("Error fetching Google Calendar events:", error);
            return [];
        }
    }
    private cacheEvents(events: CalendarEvent[]): void {
        localStorage.setItem(this.cacheKey, JSON.stringify(events));
        localStorage.setItem(this.cacheTimestampKey, Date.now().toString());
    }

    private getCachedEvents(): CalendarEvent[] | null {
        const cached = localStorage.getItem(this.cacheKey);
        const cachedTimestamp = localStorage.getItem(this.cacheTimestampKey);
        if(cached == null || cachedTimestamp == null) return null;

        const pastTimeFrame = Date.now() - Number(cachedTimestamp) < this.cacheDuration;
        if (pastTimeFrame) {
          return JSON.parse(cached);
        }
        return null;
      }
    
      // Optional: Clear cache if needed
      clearCache(): void {
        localStorage.removeItem(this.cacheKey);
      }
}
