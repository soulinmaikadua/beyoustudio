<template>
    <div class="my-4 flex items-center">
        SHARE
        <a
            :href="`https://fb.com/sharer/sharer.php?u=${SITE_URL}${route.fullPath}`"
            target="_blank"
            class="ml-4"
        >
            <img src="/social/facebook.png" class="h-8 w-8" />
        </a>
        <button
            class="rounded-full p-2 border border-blue-200 ml-4 hover:bg-blue-100"
            type="button"
            @click="copy"
        >
            <IconShare />
        </button>
    </div>
</template>
<script setup lang="ts">
const route = useRoute();

const copy = () => {
    const url = SITE_URL + route.fullPath;
    navigator.clipboard.writeText(url);
};
</script>
