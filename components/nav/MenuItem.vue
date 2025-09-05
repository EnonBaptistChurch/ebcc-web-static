<script setup lang="ts">
import type { NavItem } from '../../types/NavItem.ts'
import NavDropdown from './NavDropdown.vue'

const props = defineProps<{
  item: NavItem
  index: number
  activeDropdown: number | null
  setActiveDropdown: (index: number | null) => void
}>()

const onMouseEnter = () => {
  props.setActiveDropdown(props.index)
}

const onMouseLeave = () => {
  props.setActiveDropdown(null)
}
</script>

<template>
  <div
    class="navitem"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <template v-if="item.submenu">
      <template v-if="item.link">
        <NuxtLink
          :to="item.link"
          class="navitem-dropdown-link"
          @click="props.setActiveDropdown(null)"
        >
          {{ item.title }}
          <svg
            class="navitem-icon"
            :class="{ 'rotated': props.activeDropdown === props.index }"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </NuxtLink>

        <NavDropdown
          :dropdownItems="item.submenu"
          :isActive="props.activeDropdown === props.index"
        />
      </template>

      <template v-else>
        <div
          class="navitem-button"
          @click.prevent
        >
          {{ item.title }}
          <svg
            class="navitem-icon"
            :class="{ 'rotated': props.activeDropdown === props.index }"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        <NavDropdown
          :dropdownItems="item.submenu"
          :isActive="props.activeDropdown === props.index"
        />
      </template>
    </template>

    <template v-else>
      <NuxtLink
        :to="item.link"
        class="navitem-link"
        @click="props.setActiveDropdown(null)"
      >
        {{ item.title }}
      </NuxtLink>
    </template>
  </div>
</template>

<style scoped>
/* Wrapper for each nav item */
.navitem {
  position: relative;
}

/* Shared link + button styles */
.navitem-link,
.navitem-button {
  color: var(--nav-bar-text-color); 
  border-radius: 0.375rem; 
  transition: color 0.2s ease;
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  text-decoration: none;
}

.navitem-dropdown-link {
  color: var(--nav-bar-text-color); 
  border-radius: 0.375rem; 
  transition: color 0.2s ease;
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  text-decoration: none;
}

.navitem-link:hover,
.navitem-button:hover {
  color: var(--nav-bar-hover-color); 
}

/* Dropdown arrow icon */
.navitem-icon {
  margin-left: 0.25rem; 
  width: 1rem; 
  height: 1rem; 
  vertical-align: middle;
  transition: transform 0.25s ease;
}

.navitem-icon.rotated {
  transform: rotate(180deg);
}
</style>
