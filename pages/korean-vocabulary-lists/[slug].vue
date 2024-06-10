<template>
    <main class="max-w-screen-xl mx-auto px-4 min-h-screen">
        <div class="mt-16 mb-6">
            <div class="flex mt-6 items-center">
                <div class="h-20 w-20">
                    <img src="/assets/images/fruit.jpg" />
                </div>
                <div class="ml-4">
                    <h1 class="text-xl">{{ data?.korean }}</h1>
                    <h2 class="text-xl">{{ data?.lao }}</h2>
                    <p>
                        {{ data?.data?.length }} 단어.
                        {{ data?.data?.length }} words.
                        {{ data?.data?.length }} ຄໍາສັບ.
                    </p>
                </div>
            </div>
            <div class="my-2 flex items-center">
                <button
                    class="border p-2 h-10 w-10"
                    :class="
                        romanization
                            ? 'bg-white'
                            : 'bg-blue-500 text-white border-blue-500'
                    "
                    @click="romanization = false"
                >
                    가
                </button>
                <button
                    class="border-t border-r border-b p-2 h-10 w-10"
                    :class="
                        romanization
                            ? 'bg-blue-500 text-white border-blue-500'
                            : 'bg-white'
                    "
                    @click="romanization = true"
                >
                    Aa
                </button>
                <div class="ml-4 items-center">
                    <input
                        v-model="englishChecked"
                        type="checkbox"
                        id="english"
                        :checked="englishChecked"
                    />
                    <label class="ml-2" for="english">English</label>
                </div>
                <div class="ml-4 items-center">
                    <input
                        v-model="laoChecked"
                        type="checkbox"
                        id="lao"
                        :checked="laoChecked"
                    />
                    <label class="ml-2" for="lao">ລາວ</label>
                </div>
            </div>
        </div>
        <div class="rounded border">
            <WordComponent
                v-for="(item, index) in data?.data"
                :key="index"
                :item="item"
                :romanization="romanization"
                :english="englishChecked"
                :lao="laoChecked"
            />
        </div>
    </main>
</template>
<script setup lang="ts">
import { VOCABULARIES } from "~/composables/vocabularies";
const route = useRoute();

const romanization = ref<boolean>(true);
const englishChecked = ref<boolean>(true);
const laoChecked = ref<boolean>(true);

const data = computed(() => {
    const data = VOCABULARIES.find((el: any) => el.slug === route.params.slug);
    return data;
});
useHead({
    title: data.value?.korean + " " + data?.value?.lao + " - " + SITE_TITLE,
    meta: [
        // Open Graph / Facebook
        {
            property: "og:title",
            content: data.value?.korean + " - " + SITE_TITLE,
        },
        {
            property: "og:description",
            content: data.value?.korean,
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
            content: data.value?.korean,
        },
        {
            property: "twitter:image",
            content: data.value?.image,
        },
    ],
});
</script>
