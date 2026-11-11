<script setup lang="ts">
import { RouterView } from 'vue-router'
import SiteHeader from '@/components/SiteHeader.vue'
import { profile } from '@/data/profile'
</script>

<template>
  <a class="skip-link" href="#top">Skip to content</a>
  <div class="progress" aria-hidden="true" />
  <SiteHeader :name="profile.name" />
  <RouterView />
</template>

<style scoped>
/* Page scroll progress bar (scroll-driven; hidden where unsupported). */
.progress {
  display: none;
}

@supports (animation-timeline: scroll()) {
  .progress {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    z-index: 10;
    background: var(--green);
    transform-origin: left;
    animation: grow linear both;
    animation-timeline: scroll(root);
  }
}

@keyframes grow {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}
</style>
