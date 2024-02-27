<template>
    <div class="w-full pb-4">
        <h2 class="md:text-lg font-semibold">{{ props.title }}</h2>

        <ul class="md:text-lg flex flex-wrap gap-2">
        <SkillTile v-for="skill in skills" :key="skill.name" :name="skill.name" :icon="skill.icon" />
        </ul>
    </div>
</template>

<script setup>
import SkillTile from './SkillTile.vue';
const props = defineProps(['title', 'skills']);
</script>