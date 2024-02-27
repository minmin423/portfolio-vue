<template>
    <div class="w-full pb-4">
        <h2 class="md:text-lg font-semibold">{{ props.title }}</h2>

        <ul class="md:text-lg flex flex-col gap-2">
            <li v-for="detail in details" :key="detail" class="leading-4">{{ detail }}</li>
        </ul>
    </div>
</template>

<script setup>
const props = defineProps(['title', 'details']);
</script>