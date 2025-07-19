import ical from 'node-ical'
import type { GoogleCalendarEvent } from '@/types/GoogleCalendarEvent'
import dayjs from 'dayjs';
import fs from 'fs/promises'
export default function parseCalendar(rawICS: string): GoogleCalendarEvent[] {
    
    const parsed = ical.parseICS(rawICS)
    const now = dayjs();
    
    const events = Object.values(parsed)
    .filter(e => (e && typeof e === 'object' && 'type' in e && (e as any).type === 'VEVENT'))
    .map(event => {
        const vevent = event as ical.VEvent;
        return {
        uid: vevent.uid,
        title: vevent.summary,
        start: vevent.start,
        end: vevent.end,
        location: vevent.location,
        description: vevent.description,
        rrule: vevent.rrule // add rrule property
        };
    })
    .filter(event => dayjs(event.end).isAfter(now)) // keep only events that haven't ended yet
    .map(event => {
        // event is already a plain object, so no need to cast
        const googleEvent: GoogleCalendarEvent = {
        id: event.uid || '',
        summary: event.title || '',
        start: { dateTime: event.start ? event.start.toISOString() : '' },
        end: { dateTime: event.end ? event.end.toISOString() : '' },
        location: event.location || '',
        description: event.description || '',
        isRecurring: !!event.rrule, // true if rrule exists
        type: 'VEVENT' // or use event.type if available
        };
        return googleEvent;
    })
    return events;
}

export async function parseCalendarEvents(): Promise<GoogleCalendarEvent[]> {
    const rawICS = await fs.readFile('public/calendar/calendar.ics', 'utf-8');
    return parseCalendar(rawICS);
}