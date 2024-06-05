<template>
    <div>
        <h1>Hello World</h1>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div
                v-for="(item, index) in vocabs"
                :key="index"
                class="rounded border cursor-pointer"
                @click="router.push(item.route)"
            >
                <img :src="item.image" class="rounded-t" />
                <div class="p-2 text-center">
                    <h1 class="text-xl">{{ item.korean }}</h1>
                    <p>{{ item.lao }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
const router = useRouter();
const vocabs = ref([
    {
        image: "https://dummyimage.com/400x400/000/fff",
        korean: "숫자",
        lao: "ຕົວເລກ",
        route:"/korean-vocabulary-lists/numeric"
    },
    {
        image: "https://dummyimage.com/400x400/000/fff",
        korean: "직업",
        lao: "ອາຊີບ",
        route:"/korean-vocabulary-lists/jobs"
    },
    {
        image: "https://dummyimage.com/400x400/000/fff",
        korean: "날",
        lao: "ມື້",
        route:"/korean-vocabulary-lists/talking-about-days"
    },
    {
        image: "https://dummyimage.com/400x400/000/fff",
        korean: "날",
        lao: "ມື້",
        route:"/korean-vocabulary-lists/months"
    },
]);
</script>
