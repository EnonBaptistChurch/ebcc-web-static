<template>
  <div class="event-box">
    <div class="spinner"></div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.event-box {
  padding: 5px 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 275px;
  border-radius: 18px !important;
  background-color: aliceblue;

  /* center the spinner */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px; 
}

/* Spinner styles */
.spinner {
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #333;  /* or any color you want */
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

</style>


