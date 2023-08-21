<script setup lang="ts">
import { ref } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import { RouterLink } from 'vue-router'

const navigation = [
  { name: 'Home', route: 'home' },
  { name: 'How to use', route: 'manual' },
]

const mobileMenuOpen = ref(false)
</script>

<template>
  <header class="bg-neutral-800 sticky top-0 z-[999999]">
    <nav class="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 px-8 lg:px-6" aria-label="Global">
      <div class="flex flex-1 lg:flex-initial">
        <RouterLink :to="{ name: 'home' }" class="-m-1.5 p-1.5 font-semibold text-2xl text-violet-400">
          <svg width="34" height="34" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M84.0976 112H8V248H248V112H171.902V172H84.0976V112Z" fill="#f5f5f5" />
            <rect x="102" y="8" width="52" height="40" fill="#f5f5f5" />
          </svg>
        </RouterLink>
      </div>

      <div class="flex gap-x-12 lg:hidden">
        <RouterLink v-for="item in navigation" :key="item.route" :to="{ name: item.route }" class="text-base font-semibold leading-6">
          {{ item.name }}
        </RouterLink>
      </div>

      <div class="flex flex-1 items-center justify-end gap-x-6">
        <RouterLink :to="{ name: 'login' }" class="lg:hidden">Log in</RouterLink>

        <RouterLink
          :to="{ name: 'register' }"
          class="rounded-md bg-violet-600 px-3 py-2 text-sm font-semibold shadow-sm hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600"
        >
          Sign up
        </RouterLink>
      </div>
      <div class="lg:flex hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-neutral-100"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open main menu</span>

          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
    </nav>

    <Dialog as="div" class="hidden lg:block" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-10" />

      <DialogPanel
        class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-neutral-800 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
      >
        <div class="flex items-center gap-x-6">
          <RouterLink :to="{ name: 'home' }" class="-m-1.5 p-1.5 font-semibold text-2xl text-violet-400">
            <svg width="34" height="34" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M84.0976 112H8V248H248V112H171.902V172H84.0976V112Z" fill="#f5f5f5" />
              <rect x="102" y="8" width="52" height="40" fill="#f5f5f5" />
            </svg>
          </RouterLink>

          <RouterLink
            :to="{ name: 'register' }"
            class="ml-auto rounded-md bg-violet-600 px-3 py-2 text-sm font-semibold shadow-sm hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600"
          >
            Sign up
          </RouterLink>

          <button type="button" class="-m-2.5 rounded-md p-2.5 text-neutral-100" @click="mobileMenuOpen = false">
            <span class="sr-only">Close menu</span>

            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <RouterLink
                v-for="item in navigation"
                :key="item.route"
                :to="{ name: item.route }"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7"
              >
                {{ item.name }}
              </RouterLink>
            </div>

            <div class="py-6">
              <RouterLink :to="{ name: 'login' }" class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7">
                Log in
              </RouterLink>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>

  <div class="lg:px-6 px-8 max-w-7xl mx-auto">
    <slot />
  </div>
</template>
