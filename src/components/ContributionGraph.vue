<script setup lang="ts">
import { buildContributionGraph, GRAPH_DAYS } from '@/utils/contributionGraph'

defineProps<{ caption: string }>()

const cells = buildContributionGraph()
</script>

<template>
  <div class="graph rise" style="animation-delay: 0.6s">
    <div class="graph__meta">
      <span>{{ caption }}</span>
      <span aria-hidden="true">Less · More</span>
    </div>
    <div class="graph__grid" aria-hidden="true" :style="{ '--days': GRAPH_DAYS }">
      <div
        v-for="(cell, i) in cells"
        :key="i"
        class="graph__cell"
        :class="`level-${cell.level}`"
        :style="{ animationDelay: `${cell.delay}s` }"
      />
    </div>
  </div>
</template>

<style scoped>
.graph {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 16px;
  overflow: hidden;
}

.graph__meta {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 12px;
  font-size: 13px;
  color: var(--muted);
}

.graph__grid {
  display: grid;
  grid-template-rows: repeat(var(--days), 12px);
  grid-auto-flow: column;
  grid-auto-columns: 12px;
  gap: 3px;
  justify-content: start;
  overflow: hidden;
}

.graph__cell {
  width: 12px;
  height: 12px;
  border-radius: 2px;
  animation: pop 0.45s ease-out backwards;
}

.level-0 {
  background: var(--graph-0);
}
.level-1 {
  background: var(--graph-1);
}
.level-2 {
  background: var(--graph-2);
}
.level-3 {
  background: var(--graph-3);
}
.level-4 {
  background: var(--graph-4);
}

@keyframes pop {
  from {
    opacity: 0;
    transform: scale(0.3);
  }
}
</style>
