<script setup lang="ts">
import type { Profile } from '@/data/types'

defineProps<{ profile: Pick<Profile, 'email' | 'links' | 'contactMessage'> }>()
</script>

<template>
  <section id="contact" class="contact reveal lift" aria-labelledby="contact-title">
    <div>
      <h2 id="contact-title" class="contact__title">Let's talk</h2>
      <p class="contact__message">{{ profile.contactMessage }}</p>
    </div>
    <div class="contact__actions">
      <a class="btn btn--primary" :href="`mailto:${profile.email}`">Email me</a>
      <a
        v-for="link in profile.links"
        :key="link.href"
        class="btn"
        :href="link.href"
        target="_blank"
        rel="noopener noreferrer"
        >{{ link.label }}</a
      >
    </div>
  </section>
</template>

<style scoped>
.contact {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  padding: 24px;
  background: var(--bg-subtle);
  border: 1px solid var(--border);
  border-radius: var(--radius);
}

.contact__title {
  font-size: 20px;
  font-weight: 600;
}

.contact__message {
  margin-top: 4px;
  font-size: 14px;
  color: var(--muted);
}

.contact__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
</style>
