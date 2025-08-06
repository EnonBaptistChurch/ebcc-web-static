<template>
    <div class ="chevron-icon-wrapper">
  <svg
    class="chevron-icon"
    :class="{ flipped }"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill= "none"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
  </div>
</template>

<script setup lang="ts">
defineProps<{ flipped: boolean }>()
</script>

<style scoped>
.chevron-icon {
  width: 16px;
  height: 16px;
  stroke: #999; /* Smooth grey */
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  transition: transform 0.2s ease, stroke 0.2s ease;
  transform-origin: center;
  display: inline-block;
   z-index: 1000;
  

}

.chevron-icon-wrapper {
  z-index: 1000;
}

/* Rotate if flipped */
.chevron-icon.flipped {
  transform: scale(-1);
}

/* Optional: darken on hover via parent wrapper */
.chevron-icon:hover {
  stroke: #666;
}
</style>