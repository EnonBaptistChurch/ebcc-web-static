<template>
  <section class="collapsible-section">
    <button class="collapsible-header" @click="isOpen = !isOpen">
      <span>{{ title }}</span>
      <span class="arrow" :class="{ open: isOpen }">▼</span>
    </button>
    <div v-show="isOpen" class="collapsible-content" v-html="content"></div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  title: String,
  content: String
})

const isOpen = ref(false)
</script>

<style scoped>
.collapsible-section {
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 1rem;
  overflow: hidden;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.1);
}

.collapsible-header {
  background: var(--nav-bar-bg-color, #f0f0f0);
  padding: 0.75rem 1rem;
  font-weight: bold;
  width: 100%;
  text-align: left;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
  outline: none;
}

.collapsible-header:hover {
  background: #eaeaea;
}

.arrow {
  transition: transform 0.3s ease;
  display: inline-block;
}

.arrow.open {
  transform: rotate(180deg);
}

.collapsible-content {
  padding: 1rem;
  background-color: white;
  border-top: 1px solid #ddd;
}
</style>
