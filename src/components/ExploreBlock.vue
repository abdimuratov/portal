<script setup lang="ts">
import { useCategoryStore } from '@/stores/CategoryStore'
import { onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'

defineProps({
  colored: {
    default: true,
    type: Boolean,
  },
})

const categories = useCategoryStore()

const container = ref<HTMLDivElement>()

onMounted(() => {
  container.value?.addEventListener('wheel', (event) => {
    event.preventDefault()

    container.value?.scrollBy({
      left: event.deltaY < 0 ? -200 : 200,
      behavior: 'smooth',
    })
  })
})
</script>

<template>
  <div class="flex flex-col gap-4 mt-5">
    <h1 class="text-4xl">Explore</h1>

    <div ref="container" class="flex gap-5 w-full scroll-inline">
      <RouterLink to="/" v-for="(category, index) in categories.list" :key="index" class="min-w-max relative overflow-hidden group">
        <img
          class="h-60 group-hover:scale-110 transition"
          :class="{ 'grayscale-0 group-hover:grayscale': !colored }"
          :src="category.imgUrl"
          :alt="category.altText"
        />

        <div
          class="transition-colors absolute inset-0 md:bg-neutral-900/40 group-hover:bg-neutral-900/40"
          :class="{ 'group-hover:backdrop-blur-sm md:backdrop-blur-sm': colored }"
        >
          <p
            class="transition absolute bottom-0 w-full text-center text-xl md:opacity-100 md:translate-y-0 font-semibold opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0"
          >
            {{ category.title }}
          </p>
        </div>
      </RouterLink>
    </div>
  </div>
</template>
