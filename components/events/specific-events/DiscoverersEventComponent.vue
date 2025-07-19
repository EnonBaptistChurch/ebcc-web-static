<template>
    <div class="discoverers">
        <NuxtLink prefetch to="/whats-on/youth/" class="discoverers box-title">
    <EventsCalendarEventComponent :event="event" :has-page="true" />
        </NuxtLink>
    </div>
</template>
<script setup lang="ts">
import type { CalendarEvent } from '@/types/CalendarEvent';
const props = defineProps<{ event: CalendarEvent }>();
</script>

<style>
.discoverers {
  background-color: #A8DADC;
  margin-bottom: 1rem;
  overflow: hidden;
  text-decoration: none;
  color: #000;
  border-radius: 18px !important;
}



.discoverers :hover {
  background-color:  #7AA8B8 !important;
  text-decoration: none;
}

</style>