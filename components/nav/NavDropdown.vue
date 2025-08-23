<script setup lang="ts">
import type { NavItem } from '../../types/NavItem.ts'
const props = defineProps<{
  dropdownItems: NavItem[]
  isActive: boolean
}>()
</script>

<template>
  <div
    class="dropdown-menu"
    :class="{
      'dropdown-open': isActive,
      'dropdown-closed': !isActive,
    }"
  >
    <NuxtLink
      v-for="(dropItem, idx) in dropdownItems"
      :key="idx"
      :to="dropItem.link"
      class="dropdown-menu-link"
    >
      {{ dropItem.title }}
    </NuxtLink>
  </div>
</template>

<style scoped>
/* Dropdown container */
.dropdown-menu {
  position: absolute;
  left: 0;
  margin-top: 0.25rem;
  width: 11rem; 
  background: white;
  border-radius: 0.375rem; /* rounded-md */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* shadow-lg */
  padding: 0.25rem 0; /* py-1 */
  z-index: 10;
  transition: opacity 0.2s ease, visibility 0.2s ease;
}

/* Visible vs hidden states */
.dropdown-open {
  opacity: 1;
  visibility: visible;
}

.dropdown-closed {
  opacity: 0;
  visibility: hidden;
}

/* Dropdown links */
.dropdown-menu-link {
  display: block;
  padding: 0.5rem 1rem; /* px-4 py-2 */
  color: #374151; /* gray-700 */
  transition: background-color 0.2s ease, color 0.2s ease;
  text-decoration: none;
}

.dropdown-menu-link:hover {
  background-color: #f3f4f6; /* gray-100 */
  color: var(--nav-bar-hover-color); /* blue-600 */
}
</style>
