<script setup lang="ts">
import { computed } from 'vue'
import type { Profile } from '@/data/types'
import ContributionGraph from './ContributionGraph.vue'

const props = defineProps<{ profile: Profile }>()

const initials = computed(() =>
  props.profile.name
    .split(/\s+/)
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase(),
)

// Respect the Vite base path for images in public/.
const photoSrc = computed(() =>
  props.profile.photo ? `${import.meta.env.BASE_URL}${props.profile.photo}` : undefined,
)
</script>

<template>
  <section class="hero" aria-labelledby="hero-title">
    <div class="hero__row">
      <img v-if="photoSrc" class="hero__photo rise" :src="photoSrc" :alt="profile.name" />
      <div v-else class="hero__photo hero__photo--initials rise" aria-hidden="true">
        {{ initials }}
      </div>
      <div class="hero__text">
        <h1 id="hero-title" class="hero__name">
          <span class="type" :style="{ '--chars': profile.name.length }">{{ profile.name }}</span>
        </h1>
        <p class="hero__headline rise" style="animation-delay: 1.3s">{{ profile.headline }}</p>
        <div class="hero__links rise" style="animation-delay: 1.5s">
          <span class="hero__location">{{ profile.location }}</span>
          <a
            v-for="link in profile.links"
            :key="link.href"
            :href="link.href"
            target="_blank"
            rel="noopener noreferrer"
            >{{ link.label }}</a
          >
          <a :href="`mailto:${profile.email}`">{{ profile.email }}</a>
        </div>
      </div>
    </div>
    <ContributionGraph :caption="profile.graphCaption" />
  </section>
</template>

<style scoped>
.hero {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.hero__row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 24px;
}

.hero__photo {
  flex: 0 0 auto;
  width: 96px;
  height: 96px;
  border-radius: 50%;
  border: 1px solid var(--border);
  object-fit: cover;
}

.hero__photo--initials {
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-subtle);
  color: var(--muted);
  font-size: 28px;
  font-weight: 600;
}

.hero__text {
  flex: 1 1 320px;
  min-width: 0;
}

.hero__name {
  font-size: 32px;
  line-height: 1.3;
  font-weight: 600;
}

/* Typewriter: reveal letter by letter, then leave a blinking caret. */
.type {
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  vertical-align: bottom;
  padding-right: 4px;
  border-right: 3px solid var(--green);
  animation:
    type 1.1s steps(var(--chars)) 0.3s backwards,
    caret 0.8s step-end infinite;
}

@keyframes type {
  from {
    width: 0;
  }
  to {
    width: calc(var(--chars) * 1ch);
  }
}

@keyframes caret {
  50% {
    border-right-color: transparent;
  }
}

.hero__headline {
  margin-top: 4px;
  font-size: 20px;
  font-weight: 300;
  color: var(--muted);
}

.hero__links {
  margin-top: 12px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  font-size: 14px;
}

.hero__location {
  color: var(--muted);
}
</style>
