<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>
<script setup lang="ts">
const route = useRoute();

useHead({
    meta: [
        // Open Graph / Facebook
        { property: "og:url", content: "https://beyoustudio.pro" + route.path },
        //  Twitter
        { property: "twitter:card", content: "summary_large_image" },
        {
            property: "twitter:url",
            content: "https://beyoustudio.pro" + route.path,
        },
    ],
    link: [{ rel: "canonical", href: "https://beyoustudio.pro" + route.path }],
});
</script>
