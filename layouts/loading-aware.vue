<template>
  <div>
    <div v-if="!pageReady" class="loader-container">
      <span class="loader-text">Loading...</span>
    </div>
    <div v-else>
      <NavigationBar />
      <main>
        <div class="content">
        <slot />
        </div>
      </main>
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePageReady }  from '../composables/usePageReady'
import NavigationBar from '../components/nav/NavigationBar.vue';
import Footer from '../components/Footer.vue'

const { pageReady } = usePageReady()
console.log(pageReady.value)
</script>

<style scoped>
.loader-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.loader-text {
  font-size: 1.2rem;
  color: #777;
}
</style>
