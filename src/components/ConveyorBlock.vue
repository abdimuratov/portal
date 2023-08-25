<script setup lang="ts"></script>

<template>
  <div
    class="relative overflow-hidden group before:w-[10%] before:h-full before:bg-gradient-to-r before:from-neutral-800 before:z-10 before:absolute before:top-0 before:left-0 after:w-[10%] after:h-full after:bg-gradient-to-l after:from-neutral-800 after:z-10 after:absolute after:top-0 after:right-0"
  >
    <div class="flex whitespace-nowrap">
      <div class="space-x-6 animate-infinite-slide group-hover:animate-pause [&>*]:inline-flex">
        <slot />
      </div>

      <div class="space-x-6 animate-infinite-slide group-hover:animate-pause [&>*]:inline-flex">
        <slot />
      </div>
    </div>
  </div>
</template>
