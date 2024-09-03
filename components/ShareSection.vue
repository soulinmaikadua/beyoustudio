<template>
    <div class="my-4">
        SHARE
        <div class="flex items-center">
            <a
                :href="`https://fb.com/sharer/sharer.php?u=${SITE_URL}${route.fullPath}`"
                target="_blank"
            >
                <img
                    src="/social/facebook.png"
                    alt="Facebook Logo"
                    class="h-8 w-8"
                />
            </a>
            <button
                class="rounded-full p-2 border border-blue-200 ml-4 hover:bg-blue-100"
                type="button"
                @click="copy"
            >
                <IconShare />
            </button>
        </div>
    </div>
</template>
<script setup lang="ts">
const route = useRoute();

const copy = () => {
    const url = SITE_URL + route.fullPath;
    navigator.clipboard.writeText(url);
};
</script>
