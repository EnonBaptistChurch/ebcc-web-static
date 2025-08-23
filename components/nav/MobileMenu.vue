<script setup lang="ts">
defineProps({
  isOpen: {
    type: Boolean,
    default: false
  },
  toggleMenu: {
    type: Function,
    required: true
  }
})
import MenuIcon from './MenuIcon.vue'
</script>

<template> 
  <div class="mobile-menu-toggle">
    <div
      @click="(e) => toggleMenu(e)"
      class="menu-button"
      aria-label="Toggle menu"
    >
      <template v-if="isOpen">
        <!-- X icon -->
        <svg
          class="menu-icon"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </template>
      <template v-else>
        <!-- Menu icon -->
        <MenuIcon />
      </template>
    </div>
  </div>
</template>

<style scoped>
/* Wrapper: hidden on desktop */
.mobile-menu-toggle {
  display: block;
}

@media (min-width: 1024px) {
  .mobile-menu-toggle {
    display: none; /* equivalent to md:hidden */
  }
}

/* Button styles */
.menu-button {
  color: var(--nav-bar-text-color); /* similar to text-white */
  background: transparent;
  border: none;
  cursor: pointer;
  transition: color 0.1s ease;
}

.menu-button:hover,
.menu-button:focus {
  color: var(--nav-bar-text-color); /* Tailwind blue-300 */
  outline: none;
}

/* Icon sizing */
.menu-icon {
  width: 1.5rem;  /* w-6 */
  height: 1.5rem; /* h-6 */
  padding: 0.25rem 0; /* p-1 */
}
</style>
