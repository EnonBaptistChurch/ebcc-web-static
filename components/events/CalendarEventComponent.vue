<template>
  <div class="event-box">
    <h3 class="event-title">{{ event.summary }}</h3>
    <div class="event-time-display">
      <p class="italic-text date"> {{ getDateDayMonth(event.start.dateTime || event.start.date) }} </p>
      <p class="event-time time">{{ getTime(event.start.dateTime || event.start.date) }} - {{ getTime(event.end.dateTime || event.end.date) }}</p>
    </div>
    <p class="event-description" v-if="event.description">{{ event.description }}</p>
    
  </div>
</template>

<script setup lang="ts">
import type { CalendarEvent } from '@/types/CalendarEvent';

const props = defineProps<{ event: CalendarEvent }>();
const text: string = "";

function getDateDayMonth(dateString?: string): string {
  if (!dateString) return 'Unknown date';
  const date = new Date(dateString);
  const dayOfWeekString = date.toLocaleString('en-GB', { weekday: 'short' })
  const dayNum: number = date.getDate();
  const suffix: string = getOrdinalSuffix(dayNum);
  const month = date.toLocaleString('default', { month: 'long' });
  return `${dayOfWeekString} ${dayNum}${suffix} ${month}`;
}

function getOrdinalSuffix(day: number) {
  if (day >= 11 && day <= 13) return 'th'; 
  switch (day % 10) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default: return 'th';
  }
}

function getTime(dateString?: string): string {
  if (!dateString) return 'Unknown Time';
  const date = new Date(dateString);
  return date.toLocaleString('en-GB', { hour: 'numeric', minute: '2-digit' });
}

</script>

<style scoped>
.event-box {
  padding: 5px 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 275px;
  border-radius: 18px !important;
}
.date {
  justify-content: flex-start;
}

.time {
  justify-content: flex-end;
}
.event-box a {
  border-radius: 18px
}

.event-box:hover {
  cursor: pointer;
}

.event-title {
  font-size: 1.2em;
  font-weight: bold;
  margin: 0.25rem 0rem;
}

.event-title a {
  text-decoration: none;
  color: #000;
}

.event-time {
  font-size: 1em;
  color: initial;
  margin: 0.25rem 0rem;
}
.event-time-display {
  display: flex;
  color: initial;
  margin: 0rem;
  font-size: 1em;
  justify-content: space-between;
  width: 100%;

}

.more-info {
  color: initial;
  font-size: 0.9em;
  text-decoration: underline;
}

.event-description {
  font-size: 0.9em;
  color: #333;
  margin: 0.25rem 0rem;
}

.location-link a {
  text-decoration: none;
}

.map-link {
  display: flex;
  align-items: center;
}

.map-icon {
  width: 20px;
  height: 20px;
  margin-right: 8px;
}

.italic-text {
  font-style: italic;
  font-size: 1em;
  color: initial;
  margin: 0.25rem 0rem;
}

.box-title .event-box .event-title a {
  text-decoration: none; 
}
</style>


