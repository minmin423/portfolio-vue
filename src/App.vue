<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue';
import { Icon } from '@iconify/vue';

const navItems = ref([
  {name: 'Home', route: "/"},
  {name: 'About', route: "/about"},
  //{name: 'Contact', route: "/contact"},
]);
const isDark = ref(false);

const navItemClicked = ref(0);
</script>

<template>
  <div class="max-w-[1440px] mx-auto px-5 font-roboto dark:bg-black/95 dark:text-white" :class="{ 'dark' : isDark }">
    <nav class="w-full flex justify-between items-center font-semibold py-6 text-xl">
      <div>@minmin423</div>

      <div class="flex items-center gap-2">
          <RouterLink 
            v-for="(navItem, index) in navItems" 
            :key="index" 
            :to="navItem.route"
            class="px-2 hover:underline"
            :class="{'underline' : navItemClicked === index}"
            @click="navItemClicked = index">
              {{navItem.name}}
          </RouterLink>

          <div class="h-8 w-0.5 bg-gray-500"></div>

          <div @click="isDark = !isDark" class="rounded-full hover:bg-gray-100 dark:hover:bg-gray-900 aspect-square flex justify-center items-center cursor-pointer">
            <Icon icon="ph:sun-fill" class="h-7 w-7 mx-2" />
          </div>
      </div>
    </nav>

    <RouterView />
  </div>
</template>
