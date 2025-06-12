<template>
  
  <div>
    <PageMeta
      :title="'Home - Enon Baptist Church'"
      :description="'Welcome to Enon Baptist Church. We are a community of believers committed to worship and service.'"
    />
    <ChurchImage @imageRendered="onImageRendered" />
      
        <div class="home-page">
          <h1 class="welcome">Welcome to Enon Baptist Church</h1>
          <p class="home-description">
            We are a group of people who meet together to worship God. We are concerned for one another and those who live around us. We believe the Bible to be God’s Word that is relevant to all areas of our life. In particular, we have a personal belief in Jesus Christ and through him have a real relationship with God.
          </p>
        </div>
        <CalendarEventsComponent :events="events" />  
        <Contact />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import CalendarEventsComponent from '../components/events/CalendarEventsComponent.vue';
import ChurchImage from '../components/ChurchImage.vue';
import Contact from '../components/Contact.vue';
import { fetchGoogleEvents, useGoogleEvents } from '../composables/useGoogleEvents';
import { usePageReady } from '../composables/usePageReady'

const { markPageReady } = usePageReady()
const imageRendered = ref(false);

const { events } = useGoogleEvents();

const isReady = computed(() => {
  const ready = events.value
  return ready
})



onMounted(async () => {
  await fetchGoogleEvents();
});

watch(isReady, (ready) => {
  console.log('isReady watcher triggered:', ready)
  if (ready) markPageReady()
})

const onImageRendered = () => {
  imageRendered.value = true;
};


</script>

<style scoped>
.welcome {
  margin-top: 0;
  margin-bottom: 0;
}
</style>
