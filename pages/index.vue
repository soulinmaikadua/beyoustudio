<template>
    <main class="max-w-screen-xl mx-auto px-4 min-h-screen">
        <div class="rounded border">
            <WordComponent
                v-for="(item, index) in numbers"
                :key="index"
                :item="item"
            />
        </div>
    </main>
</template>
<script setup lang="ts">
const numbers: any = [
    {
        id: 1,
        korean: "영",
        read: "yeong",
        english: "zero",
        lao: "ສູນ",
        speech: "n",
        examples: [
            {
                id: 1,
                korean: "숫자 영",
                read: "sutjja yeong",
                english: "number zero",
                lao: "ເລກສູນ",
            },
        ],
    },
    {
        id: 2,
        korean: "일",
        read: "il",
        english: "one",
        lao: "ຫນຶງ",
        speech: "n",
        examples: [
            {
                id: 1,
                korean: "자정이 되기 일 분 전입니다.",
                read: "Jajeongi doegi il bun jeonimnida.",
                english: "It's one minute to midnight.",
                lao: "ເລກສູນ",
            },
        ],
    },
    {
        id: 3,
        korean: "이",
        read: "i",
        english: "two",
        lao: "ສອງ",
        speech: "n",
        examples: [
            {
                id: 1,
                korean: "표 2장",
                read: "pyo 2jang",
                english: "two tickets",
                lao: "ປີ້ສອງອັນ",
            },
        ],
    },
];
</script>
