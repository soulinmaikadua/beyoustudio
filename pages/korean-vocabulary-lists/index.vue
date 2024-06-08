<template>
    <div class="min-h-screen">
        <div class="border-b my-4">
            <h1 class="text-xl font-bold my-2">어휘 ຄຳສັບ</h1>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-6 gap-4">
            <div
                v-for="(item, index) in VOCABULARIES"
                :key="index"
                class="rounded border cursor-pointer"
                @click="router.push(item.route)"
            >
                <img :src="item.image" style="width: 100%" class="rounded-t" />
                <div class="p-2 text-center">
                    <h1 class="text-xl">{{ item.korean }}</h1>
                    <p>{{ item.lao }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { VOCABULARIES } from "~/composables/vocabularies";
const router = useRouter();
useHead({
    meta: [
        // Open Graph / Facebook
        {
            property: "og:title",
            content: "어휘 ຄຳສັບ" + " - " + SITE_TITLE,
        },
        {
            property: "og:description",
            content: "어휘 ຄຳສັບ",
        },
        //  Twitter
        {
            property: "twitter:title",
            content: "어휘 ຄຳສັບ" + " - " + SITE_TITLE,
        },
        {
            property: "twitter:description",
            content: "어휘 ຄຳສັບ",
        },
    ],
});
</script>
