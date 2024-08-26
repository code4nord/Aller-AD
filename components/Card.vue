<script lang="ts" setup>
defineProps({
    options: {
        src: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        subtitle: {
            type: String,
            required: true,
        },
        customClass: {
            type: String,
            required: false,
        },
    },
});
</script>

<template>
    <div class="bg-gray-100 rounded shadow">
        <div :class="options.customClass">
            <NuxtImg
                :src="options.src"
                format="avif"
                class="h-full w-full object-cover"
                sizes="sm:100vw md:100vw lg:100vw"
                loading="lazy"
            />
        </div>
        <div class="text-center p-4">
            <h2
                class="uppercase font-bold text-red-500 flex items-center justify-center"
            >
                <span class="mr-2">
                    {{ options.title }}
                </span>
                <slot name="video"></slot>
            </h2>
            <h3 class="text-lg font-bold">
                {{ options.subtitle }}
            </h3>
        </div>
    </div>
</template>
