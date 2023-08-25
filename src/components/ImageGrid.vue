<script setup lang="ts"></script>

<template>
  <div ref="gridBlock" class="grid grid-cols-[repeat(3,minmax(0,1fr))] gap-x-5 lg:grid-cols-[repeat(2,minmax(0,1fr))] xs:grid-cols-[repeat(1,minmax(0,1fr))]">
    <div class="grid grid-cols-[minmax(0,1fr)] gap-y-5">
      <div class="bg-slate-500">
        <img
          class="w-full"
          src="https://images.unsplash.com/photo-1682685795557-976f03aca7b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80"
          alt=""
        />
      </div>

      <div class="bg-slate-500">
        <img
          class="w-full"
          src="https://images.unsplash.com/photo-1691727478684-6062c7dfd67f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
