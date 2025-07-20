import { defineNuxtConfig } from 'nuxt/config';
import tsconfigPaths from 'vite-tsconfig-paths'
import { fetchCalendarEvents } from './utils/fetchCalendar'
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: ['@nuxt/image-edge'],
  css: ['~/assets/css/site.css'], // Adjust to match your actual path
  alias: {
    '@': './',
  },
  image: {
    provider: 'vercel',
    screens: {
      sm: 320,
      md: 640,
      lg: 1024,
      xl: 1280,
    },
    domains: [
      'enonbaptistchatham.org.uk',        // if pulling images from external sites
    ]
  },
  app: {
    head: {
      title: 'Enon Baptist Church',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        { rel: 'icon',type: 'image/x-icon', href: '/ebc-logo.ico' },  // For higher resolution displays
        { rel: 'preload', href: '/_nuxt/assets/css/site.css', as: 'style' },  // adjust if using hashed filenames
        { rel: 'stylesheet', href: '/_nuxt/assets/css/site.css' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter&display=swap' }
      ],
      htmlAttrs: {
        lang: 'en'
      }
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  runtimeConfig: {
    googleCalendarApiKey: process.env.GOOGLE_CALENDAR_API_KEY,
    googleCalendarId: process.env.GOOGLE_CALENDARID,
    formspreeFormId: process.env.FORMSPREE_FORM_ID,
    
  },
  typescript: {
    shim: false,
    tsConfig: {
      compilerOptions: {
        lib: ['esnext', 'dom'],  // Adding 'dom' here enables DOM-related types like window, document, etc.
      }
    }
  },
  vite: {
    build: {
      minify: 'esbuild',  // Minify JavaScript using esbuild
      terserOptions: {
        compress: {
          drop_console: true,  // Remove console.log and other debug output
        },
        mangle: {
          toplevel: true,  // Enable mangling of top-level variable names
        },
      },
    },
    server: {
      allowedHosts: ['dev-church.david-p-mitchell.uk', 'localhost']
    },
    plugins: [tsconfigPaths()]
  },
  // hooks: {
  //   async 'build:before'() {
  //     fetchCalendarEvents();
  //   }
  // },
  // ssr: true, // SSR must be true for SSG to work
  // nitro: {
  //   preset: 'static',
  // },
})
