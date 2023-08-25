<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import ImageGrid from '@/components/ImageGrid.vue'
import ExploreBlock from '@/components/ExploreBlock.vue'
import FadeImgCard from '@/components/FadeImgCard.vue'
import ConveyorBlock from '@/components/ConveyorBlock.vue'
import { useSponsorStore } from '@/stores/SponsorStore'

const sponsors = useSponsorStore()
</script>

<template>
  <MainLayout>
    <main class="space-y-10">
      <ExploreBlock />

      <div class="space-y-40">
        <div class="flex justify-between items-center md:block">
          <svg width="357" height="264" viewBox="0 0 357 264" class="md:hidden ml-[10%]" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_129_45" style="mask-type: alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="357" height="264">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.8807 0L72.0576 131.53L10.8807 263.061L0 258L58.8231 131.53L0 5.06077L10.8807 0Z"
                fill="#F5F5F5"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M240.33 1.724L276.555 131.53L240.33 261.337L234.551 259.724L270.326 131.53L234.551 3.33679L240.33 1.724Z"
                fill="#F5F5F5"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M287.381 2.04883L319.501 131.53L287.381 261.012L283.499 260.049L315.38 131.53L283.499 3.01189L287.381 2.04883Z"
                fill="#F5F5F5"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M326.414 2.30383L356.467 131.53L326.414 260.757L324.466 260.304L354.414 131.53L324.466 2.75686L326.414 2.30383Z"
                fill="#F5F5F5"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M181.244 1.29199L223.647 131.53L181.244 261.769L173.637 259.292L215.234 131.53L173.637 3.76868L181.244 1.29199Z"
                fill="#F5F5F5"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M106.102 0.723389L156.803 131.53L106.102 262.337L96.7783 258.723L146.078 131.53L96.7783 4.33738L106.102 0.723389Z"
                fill="#F5F5F5"
              />
            </mask>
            <g mask="url(#mask0_129_45)">
              <rect y="-1" width="357" height="265" fill="url(#paint0_linear_129_45)" />
            </g>
            <defs>
              <linearGradient id="paint0_linear_129_45" x1="0" y1="131.5" x2="357.501" y2="131.5" gradientUnits="userSpaceOnUse">
                <stop stop-color="#F5F5F5" />
                <stop offset="1" stop-color="#262626" />
              </linearGradient>
            </defs>
          </svg>

          <div
            class="shrink-0 max-h-96 h-full max-w-xl w-fit md:mx-auto mr-[20%] ml-[5%] hover:-rotate-6 hover:scale-105 transition-transform duration-200"
          >
            <img class="max-h-96 h-full fade-card-front-image" src="https://strongte.am/junior-game.5fbc2ab4.gif" />
          </div>
        </div>

        <div class="relative max-h-96 h-full max-w-xl w-fit mr-auto mx-auto">
          <FadeImgCard
            animation
            imgUrl="https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
          />
        </div>

        <div
          class="max-h-96 h-full max-w-xl w-fit mr-auto ml-[20%] md:mx-auto hover:rotate-6 hover:scale-105 transition-transform duration-200"
        >
          <img class="max-h-96 h-full fade-card-front-image" src="https://strongte.am/dna-approved.0e623599.gif" />
        </div>
      </div>

      <ImageGrid />

      <ConveyorBlock>
        <div v-for="(sponsor, index) in sponsors.list" :key="index" class="w-80 h-12 items-center justify-center">
          <img :src="sponsor.imgUrl" :alt="sponsor.altText" class="max-h-12 max-w-xs" />
        </div>
      </ConveyorBlock>
    </main>
  </MainLayout>
</template>
