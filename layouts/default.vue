<template>
  <div>
       <NavigationBar />
        <!-- <NavigationHeader /> -->
      <main>
        <div class="content">
        <slot />
        </div>
      </main>
      <Footer />
  </div>
</template>

<script setup lang="ts">
import NavigationBar from '../components/nav/NavigationBar.vue';
import Footer from '../components/Footer.vue'
</script>

