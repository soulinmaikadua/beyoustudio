<template>
    <main class="max-w-screen-xl mx-auto px-4 min-h-screen">
        <div class="mt-16 mb-6 flex items-center">
            <div class="h-32 w-32">
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
        <div class="rounded border">
            <WordComponent
                v-for="(item, index) in data?.data"
                :key="index"
                :item="item"
            />
        </div>
    </main>
</template>
<script setup lang="ts">
import { VOCABULARIES } from "~/composables/vocabularies";
const route = useRoute();
const data = computed(() => {
    const data = VOCABULARIES.find((el: any) => el.slug === route.params.slug);
    return data;
});
</script>
