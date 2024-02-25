<template>
  <div class="w-full min-h-screen text-black/90 dark:text-white">
    <div class="flex flex-col gap-4 pb-10 text-xl">
      <h2>Hi, I'm minmin423, a Full stack web developer.</h2>
      <p class="text-black/60 dark:text-gray-200">I'm a degree holder in BSIT major in Web and Mobile Application Development.</p>

      <div class="flex">
        <a href="https://github.com/minmin423" target="_blank" title="Github"><Icon icon="prime:github" class="h-10 w-10" /></a>
        <a href="https://github.com/minmin423" target="_blank" title="LinkedIn"><Icon icon="prime:linkedin" class="h-10 w-10" /></a>
        <a href="https://github.com/minmin423" target="_blank" title="Email"><Icon icon="bxs:envelope-open" class="h-10 w-10 p-1" /></a>
      </div>
    </div>

    <div>
      <h2 class="font-semibold text-xl pb-4">Projects</h2>

      <div class="grid md:grid-cols-2 gap-4">

        <ProjectCard title="portfolio-vue" desc="Portfolio developed using Vue.js, Tailwind CSS, and Vite."
        link="https://github.com/minmin423/portfolio-vue">
          <Icon icon="carbon:logo-vue" class="h-8 w-8 p-0.5" />
          <Icon icon="simple-icons:tailwindcss" class="h-8 w-8" />
        </ProjectCard>

        <ProjectCard title="portfolio-react" desc="Portfolio developed using React.js, Tailwind CSS, and Vite."
        link="https://github.com/minmin423/portfolio">
          <Icon icon="carbon:logo-react" class="h-8 w-8 p-0.5" />
            <Icon icon="simple-icons:tailwindcss" class="h-8 w-8" />
        </ProjectCard>

        <ProjectCard title="posts-crud" desc="Simple website developed using Laravel, SQLite, React.js, and Tailwind CSS. Has authentication and functional create, read, update, and delete of posts."
        link="https://github.com/minmin423/laravel-react-auth-post">
            <Icon icon="mdi:laravel" class="h-8 w-8 p-0.5" />
            <Icon icon="file-icons:sqlite" class="h-8 w-8 p-0.5" />
            <Icon icon="carbon:logo-react" class="h-8 w-8 p-0.5" />
            <Icon icon="simple-icons:tailwindcss" class="h-8 w-8" />
        </ProjectCard>

        <ProjectCard title="landing-page" desc="Simple website developed using React.js and Tailwind CSS while taking The Odin Project course."
        link="https://github.com/minmin423/landing-page">
          <Icon icon="flowbite:css-solid" class="h-8 w-8 p-0.5" />
          <Icon icon="ri:javascript-fill" class="h-8 w-8" />
        </ProjectCard>

      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import { ref } from 'vue';
import ProjectCard from '../components/ProjectCard.vue';
</script>
