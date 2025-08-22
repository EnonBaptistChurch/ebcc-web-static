<script setup>
import { onMounted, ref } from 'vue';
import '@/public/css/site.css';

const loaded = ref(false);
onMounted(() => {
  loaded.value = true;
});
useHead({
  title: 'Enon Baptist Church',
  meta: [
    
    { name: 'description', content: 'We are an Independent Evangelical Reformed Baptist church in Chatham, Medway, Kent, seeking to glorify God and share the gospel of Christ. ' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ]
})

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
