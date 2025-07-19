// utils/fetchCalendar.ts
import fs from 'fs/promises'
export async function fetchCalendarEvents() {
  const feedUrl = process.env.EVENTS_ICAL_FEED
  if (!feedUrl) throw new Error("Missing EVENTS_ICAL_FEED")

  const response = await fetch(feedUrl)
  const rawICS = await response.text()
  if (typeof rawICS !== 'string') {
    throw new Error('ICS data is not a string');
  }
  const rawICSString : string = rawICS;
  await fs.writeFile('public/calendar/calendar.ics', rawICSString, 'utf-8');
  return rawICSString;
}
