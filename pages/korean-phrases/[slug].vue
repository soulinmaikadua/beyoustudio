<template>
    <main class="max-w-screen-xl mx-auto px-4 min-h-screen">
        <div class="mt-16 mb-6">
            <nuxt-link to="/korean-phrases/"> Back to Lists </nuxt-link>
            <div class="flex mt-6 items-center">
                <div class="h-20 w-20">
                    <img src="/assets/images/fruit.jpg" />
                </div>
                <div class="ml-4">
                    <h1 class="text-xl">{{ data?.korean }}</h1>
                    <h2 class="text-xl">{{ data?.lao }}</h2>
                    <p>
                        {{ data?.data?.length }} 실없는 말.
                        {{ data?.data?.length }} Phrases.
                        {{ data?.data?.length }} ປະໂຫຍກ.
                    </p>
                </div>
            </div>
        </div>
        <div class="rounded border">
            <PhraseComponent
                v-for="(item, index) in data?.data"
                :key="index"
                :item="item"
            />
        </div>
    </main>
</template>
<script setup lang="ts">
import { PHRASES } from "~/composables/phrases";
const route = useRoute();
const data = computed(() => {
    const data = PHRASES.find((el: any) => el.slug === route.params.slug);
    return data;
});
useHead({
    meta: [
        // Open Graph / Facebook
        {
            property: "og:title",
            content: data.value?.korean + " - " + SITE_TITLE,
        },
        {
            property: "og:description",
            content: data.value?.korean ,
        },
        {
            property: "og:image",
            content: data.value?.image,
        },
        //  Twitter
        {
            property: "twitter:title",
            content: data.value?.korean + " - " + SITE_TITLE,
        },
        {
            property: "twitter:description",
            content: data.value?.korean ,
        },
        {
            property: "twitter:image",
            content: data.value?.image,
        }
    ],
});
</script>
