<template>
    <div class="sunday-morn">
        <NuxtLink to="/whats-on/sunday-morning" class="sunday-morn">
    <div class="event-box">
    <h3 class="event-title">{{ event.summary }}</h3>
    <div class="event-time-display">
      <p class="italic-text date"> {{ getDateDayMonth(event.start.dateTime || event.start.date) }} </p>
      <p class="event-time time">{{ getTime(event.start.dateTime || event.start.date) }}</p>
    </div>
    <p class="event-description" v-if="event.description">{{ event.description }}</p>
    
  </div>
        </NuxtLink>
    </div>
</template>
<script setup lang="ts">
import type { CalendarEvent } from '../../../types/CalendarEvent';
const props = defineProps<{ event: CalendarEvent }>();


</script>

<style scoped>
.sunday-morn {
  background-color: #e2e2cd;
  margin-bottom: 1rem;
  overflow: hidden;
  color: #777;
  text-decoration: none; 
  border-radius: 18px;
}
.sunday-morn:hover {
  background-color:  #e2e2dd;
  
}
.sunday-morn:hover div {
  text-decoration: none; 
}
.sunday-morn:hover a {
  text-decoration: none; 
}

.sunday-morn .more-info:hover a {
  text-decoration: none; 
}

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