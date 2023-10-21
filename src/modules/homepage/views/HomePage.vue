<template>
  <HeroSection />
  <FeaturesSection />
</template>

<script lang="ts">
import HeroSection from '@/modules/homepage/components/HeroSection.vue';
import FeaturesSection from '@/modules/homepage/components/FeaturesSection.vue';

export default {
  name: 'HomePage',
  components: {
    HeroSection,
    FeaturesSection
  }
}

</script>

<style scoped>

</style>