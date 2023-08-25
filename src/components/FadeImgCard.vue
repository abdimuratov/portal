<script setup lang="ts">
defineProps({
  imgUrl: String,
  animation: {
    default: false,
    type: Boolean,
  },
})
</script>

<template>
  <div class="relative group fade-card">
    <img class="max-h-96 h-full fade-card-front-image" :src="imgUrl" />

    <div v-if="animation" class="fade-card-faders">
      <img v-for="(n, index) in 8" :key="index" class="max-h-96 h-full fade-card-fader" :src="imgUrl" />
    </div>
  </div>
</template>
