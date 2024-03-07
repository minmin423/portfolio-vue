<template>
    <div class="border dark:border-white/10 rounded-xl w-full p-6 flex flex-col gap-4">
        <div class="flex justify-between items-center">
            <h2 class="font-bold md:text-lg">{{ props.title }}</h2>
            <div class="flex gap-2">
                <a v-if="props.live" :href="props.live" target="_blank" class="hover:text-gray-600">
                    <Icon icon="mdi:web" class="h-6 w-6" />
                </a>
                <a :href="props.link" target="_blank" class="hover:text-gray-600">
                    <Icon icon="fluent:open-16-filled" class="h-6 w-6" />
                </a>
        </div>
        </div>

        <p class="text-sm md:text-base h-10 md:h-12 text-ellipsis overflow-hidden line-clamp-2">{{ props.desc }}</p>

        <div class="flex gap-2">
            <slot />
        </div>
    </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
const props = defineProps(['title', 'desc', 'link', 'live']);
</script>