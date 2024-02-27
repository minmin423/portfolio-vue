<template>
  <div class="w-full min-h-screen text-black/90 dark:text-white">
    <!-- INTRO SECTION -->
    <div class="flex flex-col gap-4 pb-8 text-lg md:text-xl">
      <h2>Hi, I'm <span class="font-medium">Michael Angelo Dela Cruz,</span> a Full stack web developer.</h2>
      <p class="text-black/60 dark:text-gray-200 md:text-lg">I previously worked as a Full Stack Web Developer Intern. I'm a degree holder in BSIT major in Web and Mobile Application Development. 🎓</p>

      <ContactLinks />
    </div>

    <!-- PROJECTS SECTION -->
    <div class="pb-10">
      <h2 class="font-semibold text-xl md:text-2xl pb-4">Projects</h2>

      <div class="grid md:grid-cols-2 gap-4">

        <ProjectCard title="portfolio-vue" desc="Portfolio developed using Vue.js, Tailwind CSS, and Vite."
        link="https://github.com/minmin423/portfolio-vue">
          <Icon icon="carbon:logo-vue" class="h-8 w-8 p-0.5" />
          <Icon icon="simple-icons:tailwindcss" class="h-8 w-8" />
        </ProjectCard>

        <ProjectCard title="toolbox-nuxt" desc="Website with various tools developed using Nuxt.js, Vue.js, and Tailwind CSS."
        link="https://github.com/minmin423/toolbox">
          <Icon icon="file-icons:nuxt" class="h-8 w-8 p-0.5" />
          <Icon icon="carbon:logo-vue" class="h-8 w-8 p-0.5" />
          <Icon icon="simple-icons:tailwindcss" class="h-8 w-8" />
        </ProjectCard>

        <ProjectCard title="rentap-flutter" desc="A cross-platform rental space finder mobile application for our capstone thesis, developed using Flutter and Firebase."
        link="https://www.youtube.com/watch?v=imz6BtvERJY">
          <Icon icon="ri:flutter-fill" class="h-8 w-8 p-0.5" />
          <Icon icon="mdi:firebase" class="h-8 w-8 p-0.5" />
        </ProjectCard>

        <ProjectCard title="portfolio-react" desc="Portfolio developed using React.js, Tailwind CSS, and Vite."
        link="https://github.com/minmin423/portfolio">
          <Icon icon="mdi:react" class="h-8 w-8" />
            <Icon icon="simple-icons:tailwindcss" class="h-8 w-8" />
        </ProjectCard>

        <ProjectCard title="items-crud-api" desc="Simple website developed using Laravel, and MongoDB, developed to showcase my backend skills. Has functional create, read, update, and delete of items and categories."
        link="https://github.com/minmin423/jbe-laravel">
            <Icon icon="mdi:laravel" class="h-8 w-8 p-0.5" />
            <Icon icon="simple-icons:mongodb" class="h-8 w-8 p-0.5" />
        </ProjectCard>

        <ProjectCard title="posts-crud" desc="Simple website developed using Laravel, SQLite, React.js, and Tailwind CSS. Has authentication and functional create, read, update, and delete of posts."
        link="https://github.com/minmin423/laravel-react-auth-post">
            <Icon icon="mdi:laravel" class="h-8 w-8 p-0.5" />
            <Icon icon="file-icons:sqlite" class="h-8 w-8 p-0.5" />
            <Icon icon="mdi:react" class="h-8 w-8" />
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
import ContactLinks from '../components/ContactLinks.vue';
import ProjectCard from '../components/ProjectCard.vue';
</script>
