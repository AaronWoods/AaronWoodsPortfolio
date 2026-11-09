/// <reference types="vite-ssg" />

import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  ssgOptions: {
    // /about -> about/index.html, which GitHub Pages serves for /about/
    dirStyle: 'nested',
  },
  // GitHub Pages serves the site from /<repo-name>/
  base: '/AaronWoodsPortfolio/',
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
