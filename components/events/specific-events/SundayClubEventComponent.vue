<template>
    <div class="sunday-club">
      <NuxtLink to="/whats-on/children" class="sunday-club">
        <EventsCalendarEventComponent :event="event" :has-page="true" />
      </NuxtLink>
    </div>
</template>
<script setup lang="ts">
import type { CalendarEvent } from '@/types/CalendarEvent';
const props = defineProps<{ event: CalendarEvent }>();
</script>

<style>
.sunday-club {
    background-color: #e2e2cd;
  margin-bottom: 1rem;
  overflow: hidden;
  color: #777;
  text-decoration: none; 
  border-radius: 18px;
}
.sunday-club a {
  text-decoration: none; 
}

.sunday-club .more-info a:hover {
  text-decoration: none; 
}

.sunday-club:hover {
    background-color:  #e2e2dd;
}

.sunday-club:hover div {
  text-decoration: none; 
}
.sunday-club:hover a {
  text-decoration: none; 
}


</style>