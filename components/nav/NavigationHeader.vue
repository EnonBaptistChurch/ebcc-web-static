<!-- components/BurgerMenu.vue -->
<template>
  <div class="siteMaintenance">Under Construction</div>
  <header ref="header" class="header">
    <div class="header-left">
      <NuxtLink prefetch to="/" class="home-link">Enon Baptist Church</NuxtLink>
    </div>
    <div class="burger-menu">
      <button class="burger-button" @click="toggleMenu">
        <span class="burger-icon">{{ isOpen ? '✕' : '☰' }}</span>
      </button>
      
      <nav :class="{ 'menu': true, 'is-open': isOpen }" :style="{ top: headerHeight + 'px' }">
        <ul class="main-menu">
          <li v-for="(item, index) in navItems" :key="index" :class="{ 'has-submenu': item.submenu }">
            <div class="menu-item-wrapper">
              <NuxtLink prefetch :to="item.link || '#'" @click="closeMenu" class="main-link">
                {{ item.title }}
              </NuxtLink>
              <button v-if="item.submenu && !isDesktop" class="submenu-toggle" @click.prevent="toggleSubmenu(index)">
                <span class="arrow">{{ openSubmenu === index ? '▴' : '▾' }}</span>
              </button>
            </div>
            <ul v-if="item.submenu" v-show="openSubmenu === index || isDesktop" class="submenu">
              <li v-for="(subItem, subIndex) in item.submenu" :key="subIndex">
                <NuxtLink prefetch :to="subItem.link" @click="closeMenu">{{ subItem.title }}</NuxtLink>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from 'vue'
import type { NavItem } from '../../types/NavItem'
import navItems from './NavigationLinks'

export default defineComponent({
  setup() {
    const header = ref<HTMLElement | null>(null)
    const headerHeight = ref(0)

    const updateHeaderHeight = () => {
      if (header.value) {
        headerHeight.value = header.value.offsetHeight
      }
    }

    onMounted(() => {
      updateHeaderHeight()
      window.addEventListener('resize', updateHeaderHeight)
    })

    onUnmounted(() => {
      window.removeEventListener('resize', updateHeaderHeight)
    })

    return { header, headerHeight }
  },
  data() {
    return {
      isOpen: false,
      openSubmenu: null as number | null,
      isDesktop: false,
      navItems: navItems as NavItem[]
    }
  },
  mounted() {
    this.checkDesktop()
    window.addEventListener('resize', this.checkDesktop)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkDesktop)
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen
      if (!this.isOpen) {
        this.openSubmenu = null
        document.body.classList.remove('menu-open')
      } else {
        document.body.classList.add('menu-open')
      }
    },
    toggleSubmenu(index: number) {
      if (!this.isDesktop) {
        this.openSubmenu = this.openSubmenu === index ? null : index
        this.isOpen = true
      }
    },
    checkDesktop() {
      this.isDesktop = window.innerWidth >= 1024
      this.isOpen = this.isDesktop
      if (this.isDesktop) {
        this.openSubmenu = null
      }
    },
    closeMenu() {
      if (!this.isDesktop) {
        this.isOpen = false
        this.openSubmenu = null
        document.body.classList.remove('menu-open')
      }
    }
  }
})
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  background: var(--nav-bar-bg-color);
  z-index: 2000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.header-left {
  flex-shrink: 0;
  padding-left: 0.5em;
}

.home-link {
  text-decoration: none;
  color: #333;
  font-size: 1.2em;
  font-weight: bold;
}

.burger-menu {
  position: relative;
}

.burger-button {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  padding: 10px;
  display: block;
}

.menu {
  display: none;
}

.menu.is-open {
  display: block;
}

/* Mobile styles */
.main-menu {
  list-style: none;
  padding: 0;
  margin: 0;
  background: #fff;
}

.main-menu li {
  width: 100%;
}

.menu-item-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.main-link {
  display: block;
  padding: 12px 20px;
  text-decoration: none;
  color: #333;
  border-bottom: 1px solid #eee;
  box-sizing: border-box;
  flex-grow: 1;
}

.main-link:hover {
  background: #f5f5f5;
}

.submenu-toggle {
  background: none;
  border: none;
  padding: 12px 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.arrow {
  font-size: 1em;
}

.submenu {
  list-style: none;
  padding: 0;
  margin: 0;
  background: #fafafa;
}

.submenu a {
  padding: 12px 30px;
  display: block;
  text-decoration: none;
  color: #333;
  border-bottom: 1px solid #eee;
  box-sizing: border-box;
}

.submenu a:hover {
  background: #f5f5f5;
}

.siteMaintenance {
  position: static;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: navy;
  color: #ffffff;
  text-align: center;
  padding: 10px;
  font-weight: bold;
  z-index: 1;
  font-size: small;
  ;
}

/* Mobile dropdown positioning */
@media (max-width: 1023px) {
  .menu.is-open {
    position: fixed;
    left: 0;
    width: 100vw;
    margin: 0;
    padding: 0;
    background: #fff;
    z-index: 1000;
    overflow-y: auto;
  }

  .burger-menu {
    margin-right: 0;
  }

  body.menu-open {
    overflow: hidden;
  }
}

/* Desktop styles */
@media (min-width: 1024px) {
  .burger-button {
    display: none;
  }

  .menu {
    display: block;
    position: static;
  }

  .main-menu {
    display: flex;
    align-items: center;
    background: none;
    justify-content: flex-end;
  }

  .main-menu li {
    position: relative;
    width: auto;
  }

  .menu-item-wrapper {
    position: relative;
  }

  .main-link {
    padding: 15px 20px;
    border: none;
  }

  .main-link:hover {
    background: #f5f5f5;
  }

  .submenu-toggle {
    display: none;
  }

  .has-submenu > .menu-item-wrapper:after {
    content: '▾'; /* Same down arrow as before */
    position: absolute;
    right: 5px;
    top: 50%;
    transform: translateY(-50%);
  }

  .submenu {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    min-width: 200px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    background: #fff;
  }

  .has-submenu:hover .submenu {
    display: block;
  }

  .submenu a {
    padding: 10px 20px;
    border-bottom: 1px solid #eee;
  }

  .submenu a:last-child {
    border-bottom: none;
  }
}
</style>