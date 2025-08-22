<script setup lang="ts">
import { ref } from 'vue'
import type { NavigationMenuItem } from '@nuxt/ui'

const items = ref<NavigationMenuItem[]>([
  {
    label: 'Guide',
    icon: 'i-lucide-book-open',
    to: '/getting-started',
    children: [
      { label: 'Introduction', description: 'Fully styled and customizable components for Nuxt.', icon: 'i-lucide-house' },
      { label: 'Installation', description: 'Learn how to install and configure Nuxt UI in your application.', icon: 'i-lucide-cloud-download' },
      { label: 'Icons', icon: 'i-lucide-smile', description: 'You have nothing to do, @nuxt/icon will handle it automatically.' },
      { label: 'Colors', icon: 'i-lucide-swatch-book', description: 'Choose a primary and a neutral color from your Tailwind CSS theme.' },
      { label: 'Theme', icon: 'i-lucide-cog', description: 'You can customize components by using the `class` / `ui` props or in your app.config.ts.' }
    ]
  },
  {
    label: 'Composables',
    icon: 'i-lucide-database',
    to: '/composables',
    children: [
      { label: 'defineShortcuts', icon: 'i-lucide-file-text', description: 'Define shortcuts for your application.', to: '/composables/define-shortcuts' },
      { label: 'useOverlay', icon: 'i-lucide-file-text', description: 'Display a modal/slideover within your application.', to: '/composables/use-overlay' },
      { label: 'useToast', icon: 'i-lucide-file-text', description: 'Display a toast within your application.', to: '/composables/use-toast' }
    ]
  },
  {
    label: 'Components',
    icon: 'i-lucide-box',
    to: '/components',
    active: true,
    children: [
      { label: 'Link', icon: 'i-lucide-file-text', description: 'Use NuxtLink with superpowers.', to: '/components/link' },
      { label: 'Modal', icon: 'i-lucide-file-text', description: 'Display a modal within your application.', to: '/components/modal' },
      { label: 'NavigationMenu', icon: 'i-lucide-file-text', description: 'Display a list of links.', to: '/components/navigation-menu' },
      { label: 'Pagination', icon: 'i-lucide-file-text', description: 'Display a list of pages.', to: '/components/pagination' },
      { label: 'Popover', icon: 'i-lucide-file-text', description: 'Display a non-modal dialog that floats around a trigger element.', to: '/components/popover' },
      { label: 'Progress', icon: 'i-lucide-file-text', description: 'Show a horizontal bar to indicate task progression.', to: '/components/progress' }
    ]
  },
  { label: 'GitHub', icon: 'i-simple-icons-github', badge: '3.8k', to: 'https://github.com/nuxt/ui', target: '_blank' },
  { label: 'Help', icon: 'i-lucide-circle-help', disabled: true }
])

// Mobile menu state
const isMobileMenuOpen = ref(false)
</script>

<template>
  <!-- Desktop Menu -->
  <div class="hidden md:flex w-full justify-center">
    <UNavigationMenu orientation="horizontal" :items="items" class="w-full max-w-6xl" />
  </div>

  <!-- Mobile Menu -->
  <div class="md:hidden w-full relative">
    <!-- Hamburger button -->
    <button
      @click="isMobileMenuOpen = !isMobileMenuOpen"
      class="p-2 rounded-md bg-gray-200 dark:bg-gray-800"
    >
      <span class="block w-6 h-0.5 bg-black mb-1"></span>
      <span class="block w-6 h-0.5 bg-black mb-1"></span>
      <span class="block w-6 h-0.5 bg-black"></span>
    </button>

    <!-- Slide-over vertical menu -->
    <transition name="slide-fade">
      <div
        v-if="isMobileMenuOpen"
        class="absolute top-0 left-0 w-full h-screen bg-white dark:bg-gray-900 p-4 z-50 overflow-auto"
      >
        <button
          @click="isMobileMenuOpen = false"
          class="mb-4 text-xl font-bold"
        >
          ✕ Close
        </button>
        <UNavigationMenu orientation="vertical" :items="items" class="flex flex-col space-y-2" />
      </div>
    </transition>
  </div>
</template>

<style>
/* Smooth slide-down transition for mobile menu */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter-from {
  transform: translateY(-100%);
  opacity: 0;
}
.slide-fade-enter-to {
  transform: translateY(0);
  opacity: 1;
}
.slide-fade-leave-from {
  transform: translateY(0);
  opacity: 1;
}
.slide-fade-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}
</style>
