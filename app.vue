<script setup>
import { onMounted, ref } from 'vue';
import '@/public/css/site.css';

const loaded = ref(false);
onMounted(() => {
  loaded.value = true;
});
</script>

<template>
  <div :class="{ 'is-loaded': loaded }" class="app-container">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s ease;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

.app-container:not(.is-loaded) {
  visibility: hidden;
}
.app-container.is-loaded {
  visibility: visible;
  transition: visibility 0s linear 0s;
}
</style>
