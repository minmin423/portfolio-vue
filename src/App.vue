<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue';

const navItems = ref([
  {name: 'Home', route: "/"},
  {name: 'About', route: "/about"},
  //{name: 'Contact', route: "/contact"},
]);

const navItemClicked = ref(0);
</script>

<template>
  <nav class="h-[10vh] flex justify-between items-center bg-[#779ecb] text-gray-200 font-semibold px-20 py-2">
    <img alt="logo" class="w-10" src="./assets/images/cy.png" width="125" height="125" />

    <div class="flex gap-2">
        <RouterLink 
          v-for="(navItem, index) in navItems" 
          :key="index" 
          :to="navItem.route"
          class="rounded py-1 px-2 hover:bg-[#5E81AC] transition-colors duration-200 ease-in-out"
          :class="{'bg-[#5E81AC]' : navItemClicked === index}"
          @click="navItemClicked = index">
            {{navItem.name}}
        </RouterLink>
    </div>
  </nav>

  <RouterView />
</template>

<style scoped>

</style>
