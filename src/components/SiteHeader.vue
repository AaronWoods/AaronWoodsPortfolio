<script setup lang="ts">
defineProps<{ name: string }>()

const sections = [
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]
</script>

<template>
  <header class="header">
    <div class="header__inner">
      <div class="header__top">
        <a class="header__brand" href="#top">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="M4 4h12a4 4 0 0 1 4 4v12H8a4 4 0 0 1-4-4z" />
          </svg>
          <span>{{ name }}</span>
          <span class="header__slash" aria-hidden="true">/</span>
          <strong>portfolio</strong>
        </a>
        <a class="btn" href="#contact">Get in touch</a>
      </div>
      <nav class="header__nav" aria-label="Sections">
        <a v-for="s in sections" :key="s.href" :href="s.href">{{ s.label }}</a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  background: var(--bg-inset);
  border-bottom: 1px solid var(--border);
}

.header__inner {
  max-width: var(--content-width);
  margin: 0 auto;
  padding: 24px 24px 0;
}

.header__top {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 16px;
}

.header__brand {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 20px;
  color: var(--accent);
}

.header__brand svg {
  color: var(--muted);
}

.header__brand strong {
  font-weight: 600;
}

.header__slash {
  color: var(--muted);
}

.header__nav {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  font-size: 14px;
}

.header__nav a {
  padding: 8px 12px;
  border-radius: var(--radius) var(--radius) 0 0;
  color: var(--muted);
  transition:
    color 0.15s,
    background 0.15s;
}

.header__nav a:hover {
  color: var(--text);
  background: var(--bg-hover);
  text-decoration: none;
}
</style>
