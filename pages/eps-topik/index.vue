<template>
    <div>
        <h1 class="text-2xl font-bold">EPS TOPIK</h1>
        <h2 class="text-xl font-bold">Work Related</h2>
        <div class="my-4">
            <NuxtLink :to="`/eps-topik/reading`">Reading</NuxtLink>
        </div>
        <h2 class="text-xl font-bold">Work Related</h2>
        <div v-if="workRelated?.length > 0" class="mt-4">
            <ul>
                <li v-for="(item, index) in workRelated" :key="index">
                    <NuxtLink
                        :to="`/eps-topik/work-related/${item.slug}?korean=${item.korean}&english=${item.english}`"
                        >{{ item.korean }} - {{ item.english }}</NuxtLink
                    >
                </li>
            </ul>
        </div>
        <div v-else class="mt-4">Loading...</div>
    </div>
</template>
<script setup lang="ts">
const loading = ref(false);
const workRelated = ref([] as any);
const fetchWorkRelated = () => {
    loading.value = true;
    useAPI()
        .get("/work-related.json")
        .then((data: any) => {
            workRelated.value = data.data as any[];
        })
        .catch((err: any) => {})
        .finally(() => {
            loading.value = false;
        });
};
fetchWorkRelated();
</script>