<template>
  
  <div>
    
    <ChurchImage @imageRendered="onImageRendered" />
      
        <div class="home-page">
          <h1 class="welcome text-content">Welcome to Enon Baptist Church</h1>
          <p class="home-description text-content">
            We are a group of people who meet together to worship God. We are concerned for one another and those who live around us. We believe the Bible to be God’s Word that is relevant to all areas of our life. In particular, we have a personal belief in Jesus Christ and through him have a real relationship with God.
          </p>
        </div>
        
        <BibleVerseOverlay
      image="https://enonbaptistchatham.org.uk/wp-content/uploads/2017/02/field-175959_1920.jpg"
      verseText="For God so loved the world that He gave His only begotten Son, that whoever believes in Him should not perish but have everlasting life."
      reference="John 3:16"
      version="NKJV"
    />
    <!-- <CalendarEventsComponent @eventsLoaded="handleEventsLoaded" />   -->
    <!-- <Contact /> -->
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import CalendarEventsComponent from '../components/events/CalendarEventsComponent.vue';
import ChurchImage from '../components/ChurchImage.vue';
import Contact from '../components/Contact.vue';
import { usePageReady } from '../composables/usePageReady'

const { markPageReady } = usePageReady()
const imageRendered = ref(false);
const eventsLoaded = ref(false);

const isReady = computed(() => {
  const ready = eventsLoaded.value && imageRendered.value;
  return ready
})
const handleEventsLoaded = () => {
  eventsLoaded.value = true;
};

watch(isReady, (ready) => {
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
