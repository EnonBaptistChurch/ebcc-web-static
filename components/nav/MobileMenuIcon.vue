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
</script>

<template> 
  <div class="mobile-menu-toggle">
    <div
      @click="(e: any) => toggleMenu(e)"
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
        <svg
    class="icon-menu"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M4 6h16M4 12h16M4 18h16"
    ></path>
  </svg>
      </template>
    </div>
  </div>
</template>

<style scoped>

.icon-menu {
  width: 1.5rem;   /* same as Tailwind w-6 */
  height: 1.5rem;  /* same as Tailwind h-6 */
  margin-top: 0.25rem; /* same as Tailwind mt-1 */
  
}
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
