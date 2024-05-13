<template>
  <div class="w-full min-h-screen text-black/90 dark:text-white">
    <!-- INTRO SECTION -->
    <div class="flex flex-col gap-4 pb-8 text-lg md:text-xl">
      <h2>Hello, this section provides details <span class="font-medium">about me</span> and lists down <span class="font-medium">my skills.</span></h2>
      <p class="text-black/60 dark:text-gray-200 md:text-lg">I like to play video games. 🎮</p>

      <ContactLinks />
    </div>

    <!-- ABOUT SECTION -->
    <div class="pb-4">
      <h2 class="font-semibold text-xl md:text-2xl pb-2">About</h2>

      <div class="text-sm md:text-base">

        <AboutCard title="whoami" :details="[
          '- I am a passionate programmer who always strives to be a better problem solver.',
          '- I acquired software development experience during my internship in 2023.',
          '- I also acquired knowledge about concepts such as REST API, GraphQL, and MVC during my internship and study.',
        ]" />

        <AboutCard title="education" :details="[
          '- I pursued a BS in Information Technology degree at Baliuag University in Baliuag, Bulacan, Philippines.',
          '- My major is Web and Mobile Application Development.',
          '- I graduated in December 2023.',
          '- Our capstone project won the Best Capstone Award.',
        ]" />

      </div>
    </div>

    <!-- SKILLS SECTION -->
    <div>
      <h2 class="font-semibold text-xl md:text-2xl pb-2">Skills</h2>

      <div class="text-sm md:text-base">

        <SkillCard title="Front-End Development" :skills="frontEndSkills" />
        <SkillCard title="Back-End Development" :skills="backEndSkills" />
        <SkillCard title="Development Tools" :skills="devTools" />

      </div>
    </div>

  </div>
</template>

<script setup>
import ContactLinks from '../components/ContactLinks.vue';
import SkillCard from '../components/About/SkillCard.vue';
import AboutCard from '../components/About/AboutCard.vue';

const frontEndSkills = [
  { name: "Vue.js", icon: "carbon:logo-vue" },
  { name: "Nuxt.js", icon: "file-icons:nuxt" },
  { name: "React.js", icon: "mdi:react" },
  { name: "Next.js", icon: "ri:nextjs-fill" },
  { name: "Javascript", icon: "ri:javascript-fill" },
  { name: "Tailwind CSS", icon: "simple-icons:tailwindcss" },
  { name: "CSS", icon: "flowbite:css-solid" },
  { name: "HTML", icon: "flowbite:html-solid" },
  { name: "Flutter", icon: "ri:flutter-fill" }
];

const backEndSkills = [
  { name: 'Express.js', icon: 'simple-icons:express' },
  { name: 'Javascript', icon: 'ri:javascript-fill' },
  { name: 'Laravel', icon: 'tabler:brand-laravel' },
  { name: 'PHP', icon: 'akar-icons:php-fill' },
  { name: 'Firebase', icon: 'mdi:firebase' },
  { name: 'MongoDB', icon: 'simple-icons:mongodb' },
  { name: 'MySQL', icon: 'grommet-icons:mysql' }
];

const devTools = [
  { name: "GitHub", icon: "mdi:github" },
  { name: "VS Code", icon: "akar-icons:vscode-fill" },
  { name: "Postman", icon: "simple-icons:postman" },
  { name: "Linux", icon: "uiw:linux" }
];
</script>

