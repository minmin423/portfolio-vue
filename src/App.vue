<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue';
import { Icon } from '@iconify/vue';

const navItems = ref([
  {name: 'Home', route: "/"},
  // {name: 'Skills', route: "/skills"},
  {name: 'About', route: "/about"},
  //{name: 'Contact', route: "/contact"},
]);
const isDark = ref(false);
const navItemClicked = ref(0);
const menuClosed = ref(true);
</script>

<template>
  <div class="max-w-[1440px] mx-auto px-5 font-roboto bg-gray-50 dark:bg-gray-950 dark:text-white" :class="{ 'dark' : isDark }">
    <nav class="w-full flex justify-between items-center font-semibold py-6 text-xl">
      <div class="cursor-default">{{ `<Minmin423 />` }}</div>

      <div @click="menuClosed = !menuClosed" class="flex md:hidden cursor-pointer rounded border border-gray-400/0 hover:border-gray-400/10 relative h-full">
        <Icon v-if="menuClosed" icon="mingcute:menu-fill" class="h-7 w-7" />
        <Icon v-else icon="mingcute:close-fill" class="h-7 w-7" />

        <div v-if="!menuClosed" class="absolute bg-gray-50 dark:bg-gray-950 w-[50vw] rounded p-2 text-base top-10 right-0 border dark:border-white/20 flex flex-col">
          <RouterLink 
            v-for="(navItem, index) in navItems" 
            :key="index" 
            :to="navItem.route"
            class="p-2"
            @click="navItemClicked = index">
              {{navItem.name}}
          </RouterLink>

          <br />

          <div @click="isDark = !isDark" class="rounded border w-fit aspect-square flex justify-center items-center cursor-pointer px-1 py-2 m-1">
            <Icon icon="ph:sun-fill" class="h-7 w-7" />
          </div>
        </div>
      </div>

      <div class="hidden md:flex items-center gap-2">
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

          <div @click="isDark = !isDark" class="hidden rounded-full hover:bg-gray-100 dark:hover:bg-gray-900 aspect-square md:flex justify-center items-center cursor-pointer">
            <Icon v-if="isDark" icon="ph:moon-fill" class="h-7 w-7 mx-2" />
            <Icon v-else icon="ph:sun-fill" class="h-7 w-7 mx-2" />
          </div>
      </div>
    </nav>

    <RouterView />
  </div>
</template>
