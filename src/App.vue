<script setup lang="ts">
  import Header from '@/core/components/TheHeader.vue';
  import HomePage from '@/modules/homepage/views/HomePage.vue';
  import Footer from '@/core/components/TheFooter.vue';
</script>

<template>
  <Header />
  <HomePage />
  <Footer />
</template>

<style scoped>
  .app__footer {
    background-color: var(--vt-c-dark-blue);
    padding: 20px 30px;
    text-align: center;
    font-weight: 700;
  }
</style>
