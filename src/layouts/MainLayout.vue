<script setup lang="ts">
import { ref } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import { RouterLink } from 'vue-router'

const navigation = [
  { name: 'Product', route: 'home' },
  { name: 'How to use', route: 'manual' },
]

const mobileMenuOpen = ref(false)
</script>

<template>
  <header class="bg-white">
    <nav class="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8" aria-label="Global">
      <div class="flex lg:flex-1">
        <RouterLink :to="{ name: 'home' }" class="-m-1.5 p-1.5 font-semibold text-2xl text-emerald-700">BABONYA</RouterLink>
      </div>

      <div class="hidden lg:flex lg:gap-x-12">
        <RouterLink
          v-for="item in navigation"
          :key="item.name"
          :to="{ name: item.route }"
          class="text-sm font-semibold leading-6 text-gray-900"
        >
          {{ item.name }}
        </RouterLink>
      </div>

      <div class="flex flex-1 items-center justify-end gap-x-6">
        <RouterLink :to="{ name: 'login' }" class="hidden lg:block lg:text-sm lg:font-semibold lg:leading-6 lg:text-gray-900">
          Log in
        </RouterLink>

        <RouterLink
          :to="{ name: 'register' }"
          class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Sign up
        </RouterLink>
      </div>
      <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open main menu</span>

          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
    </nav>
    <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-10" />

      <DialogPanel class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div class="flex items-center gap-x-6">
          <RouterLink :to="{ name: 'home' }" class="-m-1.5 p-1.5 font-semibold text-2xl text-emerald-700"> BABONYA </RouterLink>

          <RouterLink
            :to="{ name: 'register' }"
            class="ml-auto rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign up
          </RouterLink>

          <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
            <span class="sr-only">Close menu</span>

            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <RouterLink
                v-for="item in navigation"
                :key="item.name"
                :to="{ name: item.route }"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                {{ item.name }}
              </RouterLink>
            </div>

            <div class="py-6">
              <RouterLink
                :to="{ name: 'login' }"
                class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                Log in
              </RouterLink>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>

  <div class="px-6 lg:px-8 max-w-7xl mx-auto">
    <slot />
  </div>
</template>
