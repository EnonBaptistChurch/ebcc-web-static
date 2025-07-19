// types/Event.ts
export interface GoogleCalendarEvent {
    id: string;
    summary: string;
    start: {
      dateTime?: string;
      date?: string;
    };
    end: {
      dateTime?:string;
      date?:string;
    }
    location: string;
    description?: string
    isRecurring: boolean
    recurrence?: string[]; // Array of recurrence rules

  }
  