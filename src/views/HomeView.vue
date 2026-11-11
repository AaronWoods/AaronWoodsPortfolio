<script setup lang="ts">
import ContactCard from '@/components/ContactCard.vue'
import EducationSection from '@/components/EducationSection.vue'
import ExperienceTimeline from '@/components/ExperienceTimeline.vue'
import ProfileHero from '@/components/ProfileHero.vue'
import ReadmeCard from '@/components/ReadmeCard.vue'
import { education } from '@/data/education'
import { experience } from '@/data/experience'
import { profile } from '@/data/profile'
</script>

<template>
  <main id="top" class="page">
    <ProfileHero :profile="profile" />
    <ReadmeCard :paragraphs="profile.about" />
    <ExperienceTimeline :roles="experience" />
    <EducationSection :entries="education" />
    <ContactCard :profile="profile" />
  </main>
</template>

<style scoped>
.page {
  max-width: var(--content-width);
  margin: 0 auto;
  padding: 32px 24px 64px;
  display: flex;
  flex-direction: column;
  gap: 40px;
}
</style>
