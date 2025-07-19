<template>
    <div class="bible-study">
        <NuxtLink prefetch to="/whats-on/bible-study/" class="bible-study box-title">
    <EventsCalendarEventComponent :event="event" :has-page="true" />
        </NuxtLink>
    </div>
</template>
<script setup lang="ts">
import type { CalendarEvent } from '../../../types/CalendarEvent';
const props = defineProps<{ event: CalendarEvent }>();
</script>

<style>
.bible-study {
  background-color: #FFF3CD;
  margin-bottom: 1rem;
  overflow: hidden;
  text-decoration: none;
  color: #000;
  border-radius: 18px;
}
.bible-study:hover {
  background-color:  #F0DFA7;
  
  text-decoration: none;
}

</style>