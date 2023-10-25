<script setup>
import { Icon } from '@iconify/vue';
import { ref } from 'vue';
</script>

<template>
  <div class="px-20 bg-[#2E3440] h-[90vh] font-semibold text-white flex justify-center items-center">

    <!-- <div class="w-1/2 h-5/6 flex justify-center items-center">
      <img src="/src/assets/images/cy.png" alt="hero" class="h-full">
    </div>

    <div class="flex flex-col w-1/2">
      <h1 class="text-4xl font-bold text-[#779ecb]">Michael Angelo Dela Cruz</h1>
      <p class="text-2xl">Web Developer</p>
    </div> -->

    <div class="flex flex-col justify-center items-center font-bold text-2xl gap-2">
      <h1 class="text-6xl">Michael Angelo Dela Cruz</h1>
      <h2 class="text-primary">Web Developer</h2>

      <button class="flex justify-center items-center gap-2 hover:scale-105 hover:bg-primary/75 transition-all duration-200 ease-in text-xl rounded px-4 py-4 mt-5 bg-primary leading-3">Learn More<Icon icon="mingcute:down-fill" class="pt-1" /></button>
    </div>

  </div>

  <div class="px-20 bg-[#2E3440] h-[90vh] font-semibold text-white flex justify-center items-center">

    <div class="w-1/2 h-5/6 flex justify-center items-center">
      <img src="/src/assets/images/cy.png" alt="hero" class="h-full">
    </div>

    <div class="flex flex-col w-1/2">
      <h1 class="text-4xl font-bold text-[#779ecb]">Michael Angelo Dela Cruz</h1>
      <p class="text-2xl">Web Developer</p>
    </div>

  </div>
</template>
