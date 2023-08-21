<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'

const categories = ref([
  {
    title: 'Mountains',
    searchTerm: 'mountains',
    imgUrl:
      'https://images.unsplash.com/photo-1682685795557-976f03aca7b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80',
    altText: 'Mountains',
  },
  {
    title: 'Beach',
    searchTerm: 'beach',
    imgUrl:
      'https://images.unsplash.com/photo-1692394950102-34e14fafa12d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=327&q=80',
    altText: 'Beach',
  },
  {
    title: 'Space',
    searchTerm: 'space',
    imgUrl:
      'https://images.unsplash.com/photo-1691951171253-128bde131aaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80',
    altText: 'Space',
  },
  {
    title: 'City',
    searchTerm: 'city',
    imgUrl:
      'https://images.unsplash.com/photo-1692387673579-7c5e6d8bfd2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
    altText: 'City',
  },
  {
    title: '3D',
    searchTerm: '3d',
    imgUrl:
      'https://images.unsplash.com/photo-1684144820756-d6cafa65247b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80',
    altText: '3D',
  },
])
</script>

<template>
  <div class="flex flex-col gap-4 mt-5">
    <h1 class="text-4xl">Explore</h1>

    <div class="flex gap-5 w-full scroll-inline">
      <RouterLink to="/" v-for="(category, index) in categories" :key="index" class="min-w-max relative overflow-hidden group">
        <img class="h-60 group-hover:scale-110 transition-transform" :src="category.imgUrl" :alt="category.altText" />

        <div class="transition-colors absolute inset-0 group-hover:backdrop-blur-sm group-hover:bg-neutral-900/40">
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
