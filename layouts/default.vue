
<template>
    <div class="max-w-screen-xl mx-auto">
        <Navbar />
        <div class="px-4">
            <slot />
        </div>
        <Footer />
    </div>
</template>
<script setup lang="ts">
const route = useRoute();

useHead({
    title: SITE_TITLE + " - A learning platform",
    meta: [
        // Open Graph / Facebook
        {
            property: "og:title",
            content: SITE_TITLE + " - A learning platform",
        },
        { property: "og:url", content: "https://beyoustudio.pro" + route.path },
        {
            property: "og:image",
            content: "https://beyoustudio.pro/logo.png",
        },
        //  Twitter
        {
            property: "twitter:title",
            content: SITE_TITLE + " - A learning platform",
        },
        { property: "twitter:card", content: "summary_large_image" },
        {
            property: "twitter:url",
            content: "https://beyoustudio.pro" + route.path,
        },
        {
            property: "twitter:image",
            content: "https://beyoustudio.pro/logo.png",
        },
    ],
    link: [{ rel: "canonical", href: "https://beyoustudio.pro" + route.path }],
});
useSeoMeta({
    ogType: "website",
    ogImage: () => "https://beyoustudio.pro/logo.png",
    ogImageAlt: () => "BeYou Studio Logo",
    ogSiteName: "BeYou Studio",
    ogImageWidth: () => 300,
    ogImageHeight: () => 300,
    ogImageType: () => "image/png",
});
</script>
