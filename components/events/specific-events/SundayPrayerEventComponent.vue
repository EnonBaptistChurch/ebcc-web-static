<template>
    <div class="sunday-prayer">
      <NuxtLink to="/whats-on/sunday-prayer" class="sunday-prayer">
        <EventsCalendarEventComponent :event="event" :has-page="true" />
      </NuxtLink>
    </div>
</template>
<script setup lang="ts">
import type { CalendarEvent } from '@/types/CalendarEvent';
const props = defineProps<{ event: CalendarEvent }>();
</script>

<style>
.sunday-prayer {
    background-color: #e2e2cd;
  margin-bottom: 1rem;
  overflow: hidden;
  color: #777;
  text-decoration: none; 
  border-radius: 18px;
}
.sunday-prayer a {
  text-decoration: none; 
}

.sunday-prayer .more-info a:hover {
  text-decoration: none; 
}
.sunday-prayer:hover {
    background-color:  #e2e2dd;
}

.sunday-prayer:hover div {
  text-decoration: none; 
}
.sunday-prayer:hover a {
  text-decoration: none; 
}


</style>