import './assets/main.css'

import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import { routes } from './router'

// Prerendered at build time (`vite-ssg build`); hydrates in the browser.
export const createApp = ViteSSG(App, {
  routes,
  base: import.meta.env.BASE_URL,
})
