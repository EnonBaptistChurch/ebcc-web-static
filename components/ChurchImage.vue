<template>
  <!-- <NuxtImg
  ref="imageRef"
  src="/images/enonChurch.webp"
  alt="Enon Baptist Church"
  class="responsive-image"
  preload
  loading="eager"
/> -->
  <img fetchpriority="high" src="/images/enonChurch.webp" alt="Enon Baptist Church"  @load="notifyParent" class="responsive-image" width="1487" height="600" />
  
  
</template>

<script setup>
import { ref, nextTick, onMounted } from 'vue';
const imageRef = ref(null);
const emit = defineEmits(['imageRendered']); // Define the custom event

const notifyParent = async () => {
  await nextTick(); // Ensures Vue updates the DOM before emitting
  emit('imageRendered'); // Notify the parent
};

onMounted(async () => {
  await nextTick(); // Ensure the component is fully mounted
  notifyParent();
});
</script>
