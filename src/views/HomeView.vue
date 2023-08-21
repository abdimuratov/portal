<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import ImageGrid from '@/components/ImageGrid.vue'
import ExploreBlock from '@/components/ExploreBlock.vue'
import HeroCard from '@/components/HeroCard.vue'
</script>

<template>
  <MainLayout>
    <main class="home">
      <ExploreBlock />

      <div class="relative max-h-96 h-full max-w-xl w-fit mx-auto">
        <HeroCard />
      </div>

      <ImageGrid />
    </main>
  </MainLayout>
</template>
