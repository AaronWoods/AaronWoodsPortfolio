<script setup lang="ts">
import type { Education } from '@/data/types'

defineProps<{ entries: Education[] }>()
</script>

<template>
  <section id="education" class="reveal" aria-labelledby="education-title">
    <h2 id="education-title" class="section-title">Education</h2>
    <ul class="education">
      <li v-for="(entry, i) in entries" :key="`${entry.institution}-${i}`" class="education__item">
        <h3>
          {{ entry.qualification }} ·
          <span class="education__institution">{{ entry.institution }}</span>
        </h3>
        <span class="education__dates">{{ entry.start }} – {{ entry.end }}</span>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.education {
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.education__item {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: baseline;
  gap: 8px;
}

.education__item h3 {
  font-size: 16px;
  font-weight: 600;
}

.education__institution {
  color: var(--accent);
}

.education__dates {
  font-size: 14px;
  color: var(--muted);
  font-family: var(--font-mono);
}
</style>
