<template>
  <div class="event-wrapper">
  <h2 class="event-underline">Upcoming Events</h2>

  <div class="event-container">
    <!-- Show 4 placeholders if no events yet -->
    <template v-if="events.length === 0">
      <LoadingCalendarEventComponent 
        v-for="n in 4"
        :key="'placeholder-' + n"
        
      ></LoadingCalendarEventComponent>
    </template>
    <!-- Show actual events when loaded -->
    <template v-else>
      <div class="loading-grid">
        <div
          v-for="event in events"
          :key="event.id"
          class="event-box-container"
        >
          <div v-if="event.summary === 'Sunday Club'"> <SundayClubEventComponent :event="event" /> </div>
          <div v-else-if="event.summary === 'Morning Service'"> <SundayMorningComponent :event="event" /> </div>
          <div v-else-if="event.summary === 'Prayer Meeting'"> <SundayPrayerEventComponent :event="event" /> </div>
          <div v-else-if="event.summary === 'Evening Service'"> <SundayEveningComponent :event="event" /> </div>
          <div v-else-if="event.summary === 'Bible Study & Prayer Meeting'"> <BibleStudyEventComponent :event="event" /> </div>
          <div v-else-if="event.summary === 'Discoverers'"> <DiscoverersEventComponent :event="event" /> </div>
          <div v-else > <CalendarEventComponent :event="event" :has-page="false" /> </div>
        </div>
      </div>
    </template>
  </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { GoogleCalendarEvent } from '../../types/GoogleCalendarEvent';

import SundayMorningComponent from './specific-events/SundayMorningEventComponent.vue';
import SundayEveningComponent from './specific-events/SundayEveningEventComponent.vue';
import BibleStudyEventComponent from './specific-events/BibleStudyEventComponent.vue';
import CalendarEventComponent from './CalendarEventComponent.vue';
import SundayPrayerEventComponent from './specific-events/SundayPrayerEventComponent.vue';
import SundayClubEventComponent from './specific-events/SundayClubEventComponent.vue';
import DiscoverersEventComponent from './specific-events/DiscoverersEventComponent.vue';
import LoadingCalendarEventComponent from './LoadingCalendarEventComponent.vue';

import { parseCalendarEvents } from '../../utils/parseCalendar';

const events = ref<GoogleCalendarEvent[]>([]);
const emit = defineEmits(['eventsLoaded']);

async function loadGoogle() {
  try {
    const data = await parseCalendarEvents(4);
    events.value = data;
  } catch (error) {
    console.error('Failed to fetch events:', error);
    events.value = [];
  }
}

onMounted(async () => {
  await loadGoogle();
  emit('eventsLoaded');
});
</script>

<style scoped>
.event-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: flex-start;
}

.event-underline {
  border-bottom: 1px solid var(--nav-bar-bg-color);
  max-width: 1250px;
  width:95%;
}

@media (min-width: 1024px) {
  .event-container {
    min-height: 128px;
  }
}

/* Placeholder styling for empty event boxes */
.event-box-container.event-placeholder {
  width: 180px;        /* Adjust width to your actual event box */
  height: 120px;       /* Adjust height similarly */
  background-color: #ccc;
  border-radius: 6px;
  display:block;
}


.event-box {
  padding: 5px 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 275px;
  border-radius: 18px !important;
}

.event-box a {
  border-radius: 18px
}

.event-box:hover {
  cursor: pointer;
}

.loading-grid {
  display: grid;
  gap: 1rem;
  justify-content: center;
  grid-template-columns: repeat(4, 315px);
}

@media (max-width: 1300px) {
  .loading-grid {
    grid-template-columns: repeat(2, 315px);
  }
}

@media (max-width: 600px) {
  .loading-grid {
    grid-template-columns: 100%;
  }
  .event-box {
    width: 100%;
    min-width: 100%;
  }
}
</style>
