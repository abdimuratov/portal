<script setup lang="ts">
import { ref } from 'vue'

const imgUrl = ref(
  'https://images.unsplash.com/photo-1691951171253-128bde131aaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80'
)
</script>

<template>
  <div class="relative mt-5 group fade-card">
    <img class="max-h-96 h-full fade-card-front-image" :src="imgUrl" />

    <div class="fade-card-faders">
      <img v-for="(n, index) in 8" :key="index" class="max-h-96 h-full fade-card-fader" :src="imgUrl" />
    </div>
  </div>
</template>
