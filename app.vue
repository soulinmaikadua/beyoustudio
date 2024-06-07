<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>
<script setup lang="ts">
const route = useRoute();

useHead({
    link: [{ rel: "canonical", href: "https://beyoustudio.pro" + route.path }],
});
</script>