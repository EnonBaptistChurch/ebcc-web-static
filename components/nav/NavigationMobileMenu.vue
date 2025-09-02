<script setup lang="ts">
import type { NavItem } from '../../types/NavItem.ts'
import { computed } from 'vue'
const props = defineProps<{
  menuItems: NavItem[],
  activeDropdown: Number,
  toggleDropdown: Function,
  closeMenu: Function, // closes menu after link click
}>()
const menuItems = computed(() => props.menuItems || [])
</script>

<template>
  <div class="navmobile-menu">
    <div class="navmobile-container">
      <div v-for="(item, index) in menuItems" :key="index">
        <!-- Dropdown items -->
        <template v-if="item.submenu">
          <div
            @click="toggleDropdown(index)"
            class="navmobile-button"
          >
            {{ item.title }}
            <div class="navmobile-icon-wrapper-border">
              <div class="navmobile-icon-wrapper">
                <svg
                  class="navmobile-icon"
                  :class="{ 'rotated': activeDropdown === index }"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>
          </div>

          <div
            class="navmobile-dropdown"
            :class="{
              'dropdown-open': activeDropdown === index,
              'dropdown-closed': activeDropdown !== index,
            }"
          >
            <div class="navmobile-dropdown-links">
              <NuxtLink
                v-for="(dropItem, dropIndex) in item.submenu"
                :key="dropIndex"
                :to="dropItem.link"
                prefetch
                class="navmobile-dropdown-link"
                @click="props.closeMenu && props.closeMenu()"
              >
                {{ dropItem.title }}
              </NuxtLink>
            </div>
          </div>
        </template>

        <!-- Regular links -->
        <template v-else>
          <NuxtLink
            :to="item.link"
            class="navmobile-link"
            @click="props.closeMenu && props.closeMenu()"
          >
            {{ item.title }}
          </NuxtLink>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Wrapper (mobile only) */
.navmobile-menu {
  display: block;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  background: transparent;
  background-color: transparent;
  border-radius: 0 0 0.375rem 0.375rem;
}

@media (min-width: 1024px) {
  .navmobile-menu {
    display: none; /* md:hidden */
  }
}

/* Container background & spacing */
.navmobile-container {
  padding: 0 0.5rem 0; /* px-2 pt-2 pb-3 */
  background: white;
  border-top: 1px solid #e5e7eb; /* gray-200 */
  display: flex;
  flex-direction: column;
  gap: 0.25rem; /* space-y-1 */
  border-radius: 0 0 0.375rem 0.375rem;
}

/* Top-level button (dropdown trigger) */
.navmobile-button {
  width: 100%;
  text-align: left;
  color: #374151; /* gray-700 */
  background: transparent;
  border: none;
  padding: 0.5rem 0.75rem; /* px-3 py-2 */
  border-radius: 0.375rem;
  font-size: 1rem; /* text-base */
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: color 0.2s ease, background-color 0.2s ease;
  border-bottom: 1px solid #eee;
}

.navmobile-button:hover {
  color: #000; 
  background-color: #f9fafb; 
}

/* Chevron icon */
.navmobile-icon {
  width: 1rem; 
  height: 1rem;
  transition: transform 0.1s ease;
}

.navmobile-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  
}

.navmobile-icon-wrapper-border {
  border-left: 1px solid #bbb;
  padding-left: 1rem;
}

.navmobile-icon.rotated {
  transform: rotate(180deg);
}

/* Dropdown container */
.navmobile-dropdown {
  transition: all 0.2s ease;
  overflow: hidden;
  
}

.dropdown-open {
  opacity: 1;
}

.dropdown-closed {
  max-height: 0;
  opacity: 0;
}

/* Dropdown links wrapper */
.navmobile-dropdown-links {
  padding-left: 1.5rem; 
  display: flex;
  flex-direction: column;
  gap: 0.25rem; 
}

/* Dropdown links */
.navmobile-dropdown-link {
  display: block;
  padding: 0.5rem 0.75rem; 
  border-radius: 0.375rem;
  margin-right: 2rem;
  color: #4b5563; 
  text-decoration: none;
  transition: color 0.2s ease, background-color 0.2s ease;
  border-bottom: 1px solid #eee;
}

.navmobile-dropdown-link:hover {
  background-color: #f9fafb; 
}

/* Regular (non-dropdown) links */
.navmobile-link {
  display: block;
  padding: 0.5rem 0.75rem; 
  border-radius: 0.375rem;
  font-size: 1rem; 
  font-weight: 500;
  color: #374151; 
  text-decoration: none;
  transition: color 0.2s ease, background-color 0.2s ease;
  border-bottom: 1px solid #eee;
}
.navmobile-link a:last-child {
  border-bottom: none;
}

.navmobile-link:hover {
  background-color: #f9fafb; 
}
</style>
