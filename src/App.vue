<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Главная</RouterLink>
        <RouterLink to="/manual">Руководство</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
