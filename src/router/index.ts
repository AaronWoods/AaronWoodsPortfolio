import type { RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

// vite-ssg creates the router (history mode, using BASE_URL) and prerenders
// one HTML file per route listed here.
export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
]
