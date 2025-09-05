<template>
  <div class="navlogo">
    <div class="navlogo-text">
      <NuxtLink to="/" @click="props.clearActiveDropdown">Enon Baptist Church</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  clearActiveDropdown: () => void
}>()
</script>

<style scoped>
.navlogo {
  flex-shrink: 0;
  display: flex;
  align-items: center;
}

.navlogo-text {
  font-size: 1.25rem; /* text-xl */
  font-weight: 700;   /* font-bold */
  color:var(--nav-bar-text-color); /* similar to text-white */
}

.navlogo-text a {
  text-decoration: none;
  color: inherit;
}
</style>
