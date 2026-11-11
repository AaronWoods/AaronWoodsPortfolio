<script setup lang="ts">
import type { Role } from '@/data/types'

defineProps<{ roles: Role[] }>()
</script>

<template>
  <section id="experience" aria-labelledby="experience-title">
    <h2 id="experience-title" class="section-title reveal">Experience</h2>
    <ol class="timeline">
      <span class="timeline__line" aria-hidden="true" />
      <li v-for="(role, i) in roles" :key="`${role.company}-${i}`" class="timeline__item reveal">
        <template v-if="role.end === null">
          <span class="timeline__dot timeline__dot--current timeline__ping" aria-hidden="true" />
          <span class="timeline__dot timeline__dot--current" aria-hidden="true" />
        </template>
        <span v-else class="timeline__dot" aria-hidden="true" />
        <div class="timeline__head">
          <h3>
            {{ role.title }} · <span class="timeline__company">{{ role.company }}</span>
          </h3>
          <span class="timeline__dates">{{ role.start }} – {{ role.end ?? 'Present' }}</span>
        </div>
        <p class="timeline__summary">{{ role.summary }}</p>
      </li>
    </ol>
  </section>
</template>

<style scoped>
.timeline {
  position: relative;
  margin: 20px 0 0 7px;
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.timeline__line {
  position: absolute;
  left: -1px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--border);
  transform-origin: top;
}

.timeline__item {
  position: relative;
  padding-left: 28px;
}

.timeline__dot {
  position: absolute;
  left: -8px;
  top: 6px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--border);
  border: 2px solid var(--border);
}

.timeline__dot--current {
  background: var(--bg);
  border-color: var(--green);
}

.timeline__ping {
  background: transparent;
  animation: ping 2.2s ease-out infinite;
}

.timeline__head {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: baseline;
  gap: 8px;
}

.timeline__head h3 {
  font-size: 16px;
  font-weight: 600;
}

.timeline__company {
  color: var(--accent);
}

.timeline__dates {
  font-size: 14px;
  color: var(--muted);
  font-family: var(--font-mono);
}

.timeline__summary {
  margin-top: 6px;
  font-size: 14px;
  color: var(--muted);
}

@keyframes ping {
  from {
    transform: scale(1);
    opacity: 0.7;
  }
  to {
    transform: scale(2.6);
    opacity: 0;
  }
}

/* The line draws as the section scrolls into view (where supported). */
@supports (animation-timeline: view()) {
  .timeline__line {
    animation: draw linear both;
    animation-timeline: view();
    animation-range: entry 10% cover 60%;
  }
}

@keyframes draw {
  from {
    transform: scaleY(0);
  }
  to {
    transform: scaleY(1);
  }
}
</style>
