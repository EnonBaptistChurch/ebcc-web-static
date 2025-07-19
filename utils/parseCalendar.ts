import ical from 'node-ical';
import type { GoogleCalendarEvent } from '@/types/GoogleCalendarEvent';

export default function parseCalendar(rawICS: string): GoogleCalendarEvent[] {
  const parsed = ical.parseICS(rawICS);

  const now = new Date();
  const rangeStart = new Date(now.getFullYear(), now.getMonth(), now.getDate()); // today at 00:00
  const rangeEnd = new Date(now.getFullYear(), now.getMonth() + 4 + 1, 0, 23, 59, 59, 999); // end of day, 4 months later

  const events: GoogleCalendarEvent[] = [];

  for (const key in parsed) {
    const event = parsed[key];
    if (event.type !== 'VEVENT') continue;

    if (!event.rrule) {
      // Non-recurring event: only keep if it ends after now
      if (event.end instanceof Date && event.end > rangeStart) {
        events.push(convertToGoogleCalendarEvent(event));
      }
    } else {
      // Recurring event: expand occurrences within the range
      const dates = event.rrule.between(rangeStart, rangeEnd, true);

      dates.forEach(date => {
        const dateKey = date.toISOString().substring(0, 10);
        if (event.exdate && event.exdate[dateKey]) return; // skip excluded dates

        const duration = event.end.getTime() - event.start.getTime();

        const start = new Date(date);
        const end = new Date(start.getTime() + duration);

        if (end > rangeStart) {
          events.push(convertToGoogleCalendarEvent(event, start, end));
        }
      });
    }
  }

  return events.sort((a, b) => {
    const aTime = a.start.dateTime
      ? new Date(a.start.dateTime).getTime()
      : new Date(a.start.date ?? '').getTime();
    const bTime = b.start.dateTime
      ? new Date(b.start.dateTime).getTime()
      : new Date(b.start.date ?? '').getTime();
    return aTime - bTime;
  });
}

function convertToGoogleCalendarEvent(
  event: ical.VEvent,
  start?: Date,
  end?: Date
): GoogleCalendarEvent {
  // Helper to get ISO string or fallback string representation
  function formatDate(date: unknown): { dateTime?: string; date?: string } {
    if (date instanceof Date) {
      return { dateTime: date.toISOString(), date: undefined };
    }
    if (typeof date === 'string' || date != null) {
      return { dateTime: undefined, date: String(date) };
    }
    return { dateTime: undefined, date: undefined };
  }

  // Use passed start/end if provided (for recurring), else fallback to event.start/end
  const startValue = start ?? event.start;
  const endValue = end ?? event.end;

  return {
    id: event.uid || '',
    summary: event.summary || '',

    start: formatDate(startValue),
    end: formatDate(endValue),

    location: event.location || '',
    description: event.description,

    isRecurring: !!event.rrule,
    recurrence: event.rrule ? [event.rrule.toString()] : undefined,
  };
}

// Example: fetch the .ics file in the browser
export async function parseCalendarEvents(numOfEvents?: number): Promise<GoogleCalendarEvent[]> {
  const response = await fetch('/calendar/calendar.ics');
  const rawICS = await response.text();
  return parseCalendar(rawICS).slice(0, numOfEvents ? numOfEvents : 4);
}
