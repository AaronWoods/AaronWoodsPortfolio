<script setup lang="ts">
defineProps<{ paragraphs: string[] }>()
</script>

<template>
  <section class="readme reveal lift" aria-labelledby="about-title">
    <div class="readme__file">README.md</div>
    <div class="readme__body">
      <h2 id="about-title" class="section-title">About</h2>
      <p v-for="(text, i) in paragraphs" :key="i">{{ text }}</p>
    </div>
  </section>
</template>

<style scoped>
.readme {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
}

.readme__file {
  padding: 10px 16px;
  font-size: 14px;
  font-family: var(--font-mono);
  background: var(--bg-subtle);
  border-bottom: 1px solid var(--border);
}

.readme__body {
  padding: 24px 32px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
</style>
