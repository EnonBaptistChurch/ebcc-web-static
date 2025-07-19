<template>
    <div class="sunday-evening">
      <NuxtLink to="/whats-on/sunday-evening" class="sunday-evening box-title">
        <EventsCalendarEventComponent :event="event" :has-page="true" />
      </NuxtLink>
    </div>
</template>
<script setup lang="ts">

import type { CalendarEvent } from '@/types/CalendarEvent';
const props = defineProps<{ event: CalendarEvent }>();
</script>

<style>
.sunday-evening {
  background-color: #A1F0D6;
  overflow: hidden;
  margin-bottom: 1rem;
  text-decoration: none; 
  border-radius: 18px;
}
.sunday-evening:hover {
  background-color:  #7AD1B6;
  text-decoration: none; 
}




</style>