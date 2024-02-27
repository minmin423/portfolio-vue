<template>
    <li class="flex items-center justify-start gap-0.5 border dark:border-gray-600 rounded py-1 px-2 cursor-default">
        <Icon :icon="props.icon" class="h-6 w-6 md:h-8 md:w-8" />
        <h3>{{ props.name }}</h3>
    </li>
</template>

<script setup>
import { Icon } from '@iconify/vue';
const props = defineProps(['name', 'icon']);
</script>