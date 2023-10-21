<template>
  <HeroSection />
  <FeaturesSection />
  <ArticlesSection />
</template>

<script lang="ts">
import HeroSection from '@/modules/homepage/components/HeroSection.vue';
import FeaturesSection from '@/modules/homepage/components/FeaturesSection.vue';
import ArticlesSection from '../components/ArticlesSection.vue';

export default {
  name: 'HomePage',
  components: {
    HeroSection,
    FeaturesSection,
    ArticlesSection
  }
}

</script>

<style scoped>

</style>