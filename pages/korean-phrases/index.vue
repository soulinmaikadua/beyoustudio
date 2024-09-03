<template>
    <div class="min-h-screen">
        <div class="flex justify-between items-center border-b my-4">
            <h1 class="text-xl font-bold my-2">Phrases / Sentences</h1>
            <div>
                <button
                    class="border p-2 h-10 w-10"
                    :class="
                        viewGrid
                            ? 'bg-blue-500 text-white border-blue-500'
                            : 'bg-white'
                    "
                    aria-label="block grid"
                    @click="viewGrid = true"
                >
                    <IconSquare />
                </button>
                <button
                    class="border-t border-r border-b p-2 h-10 w-10"
                    :class="
                        viewGrid
                            ? 'bg-white'
                            : 'bg-blue-500 text-white border-blue-500'
                    "
                    aria-label="list grid"
                    @click="viewGrid = false"
                >
                    <IconListBullet />
                </button>
            </div>
        </div>
        <div v-if="viewGrid" class="grid grid-cols-2 md:grid-cols-6 gap-4">
            <div
                v-for="(item, index) in PHRASES"
                :key="index"
                class="rounded border hover:shadow"
            >
                <nuxt-link :to="item.route">
                    <img
                        :src="item?.image"
                        style="width: 100%"
                        class="rounded-t"
                        :alt="item?.lao"
                    />
                </nuxt-link>
                <div class="p-2 text-center">
                    <nuxt-link :to="item.route">
                        <h1 class="text-xl">{{ item.korean }}</h1>
                        <p>{{ item.lao }}</p>
                    </nuxt-link>
                </div>
            </div>
        </div>
        <div v-else>
            <div
                v-for="(item, index) in PHRASES"
                :key="index"
                class="flex items-center"
            >
                <div class="w-16 h-16 my-1">
                    <nuxt-link :to="item.route">
                        <img
                            :src="item?.image"
                            style="width: 100%"
                            class="rounded"
                            :alt="item?.lao"
                        />
                    </nuxt-link>
                </div>
                <div class="ml-4 border-b w-full">
                    <nuxt-link :to="item.route">
                        <h1 class="text-xl">{{ item.korean }}</h1>
                        <p>{{ item.lao }}</p>
                    </nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { PHRASES } from "~/composables/phrases";
const viewGrid = ref<boolean>(true);
useHead({
    title: "구절 Phrases" + " - " + SITE_TITLE,
    meta: [
        // Open Graph / Facebook
        {
            property: "og:title",
            content: "구절 Phrases" + " - " + SITE_TITLE,
        },
        {
            property: "og:description",
            content: "구절 Phrases",
        },
        //  Twitter
        {
            property: "twitter:title",
            content: "구절 Phrases" + " - " + SITE_TITLE,
        },
        {
            property: "twitter:description",
            content: "구절 Phrases",
        },
    ],
});
</script>
