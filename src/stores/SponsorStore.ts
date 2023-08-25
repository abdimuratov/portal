import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSponsorStore = defineStore('sponsor', () => {
  const list = ref([
    { altText: 'dna payments', imgUrl: 'https://strongte.am/dna.b18568a7.png' },
    { altText: 'halyk bank', imgUrl: 'https://strongte.am/halyk.ecaeb3b2.png' },
    { altText: 'jusan bank', imgUrl: 'https://strongte.am/jusan.846e0b2e.png' },
    { altText: 'alfa bank', imgUrl: 'https://strongte.am/alfa.aeb79d96.png' },
    { altText: 'bcc', imgUrl: 'https://strongte.am/bcc.462a3f04.png' },
    { altText: 'qazkom', imgUrl: 'https://strongte.am/qazkom.416894e9.png' },
  ])

  // const count = ref(0)
  // const doubleCount = computed(() => count.value * 2)

  // function increment() {
  //   count.value++
  // }

  return { list }
})
