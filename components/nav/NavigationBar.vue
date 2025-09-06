<script setup>
import { ref } from 'vue'
import NavLogo from './NavLogo.vue'
import MenuItem from './MenuItem.vue'
import MobileMenuIcon from './MobileMenuIcon.vue'
import NavigationMobileMenu from './NavigationMobileMenu.vue'

const isOpen = ref(false)
const activeDropdown = ref(null)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const toggleDropdown = (index) => {
  activeDropdown.value = activeDropdown.value === index ? null : index
}

const setActiveDropdown = (index) => {
  activeDropdown.value = index
}

const clearActiveDropdown = (index) => {
  activeDropdown.value = null;
  closeMenu();
}

const closeMenu = () => {
  activeDropdown.value = null;
  isOpen.value = false;
}

import navItems from '../../data/NavigationLinks'
</script>

<template>
  
    <header>
    <nav class="navbar">
      <div class="navbar-container">
        <div class="navbar-inner">
          <!-- Logo -->
          <NavLogo :clearActiveDropdown="clearActiveDropdown" />

          <!-- Desktop navigation -->
          <div class="nav-desktop">
            <div class="nav-spacer"></div>

            <div class="nav-links">
              <MenuItem
                v-for="(item, index) in navItems"
                :key="index"
                :item="item"
                :index="index"
                :activeDropdown="activeDropdown"
                :setActiveDropdown="setActiveDropdown"
              />
            </div>
          </div>

          <!-- Mobile navigation -->
          <div class="nav-mobile">
            <MobileMenuIcon :isOpen="isOpen" :toggleMenu="toggleMenu" />
          </div>
        </div>
      </div>

      <!-- Mobile dropdown -->
      <NavigationMobileMenu
        v-if="isOpen"
        :menuItems="navItems"
        :activeDropdown="activeDropdown"
        :toggleDropdown="toggleDropdown"
        :closeMenu="closeMenu"
      />
    </nav>
    </header>
  
</template>

<style scoped>
/* General nav styling */
.navbar {
  color: var(--nav-bar-text-color); 
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  font-family: 'Inter';
}

.navbar-container {
  background-color: var(--nav-bar-bg-color); /* similar to bg-blue-950 */
  padding: 0 0.5rem;
}

.navbar-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Desktop nav */
.nav-desktop {
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
}

.nav-spacer {
  flex: 1;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 1.25rem;
}

/* Mobile nav (hidden on desktop) */
.nav-mobile {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.mobile-logos {
  display: flex;
  align-items: center;
  padding-right: 1.25rem;
}

/* Responsive breakpoints */
@media (min-width: 1023px) {
  .nav-desktop {
    display: flex;
  }
  .nav-mobile {
    display: none;
  }
}

@media (max-width: 1024px) {
  .nav-desktop {
    display: none;
  }
  .nav-mobile {
    display: flex;
  }
}
</style>
