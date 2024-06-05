<template>
    <main class="max-w-screen-md mx-auto px-4 min-h-screen">
        <div class="rounded border">
            <WordComponent
                v-for="(item, index) in months"
                :key="index"
                :item="item"
            />
        </div>
    </main>
</template>
<script setup lang="ts">
const months: any = [
    {
        id: 1,
        korean: "일월",
        read: "il-wol",
        english: "January",
        lao: "ເດືອນມັງກອນ",
        speech: "n",
    },
    {
        id: 2,
        korean: "이월",
        read: "iwol",
        english: "February",
        lao: "ເດືອນກຸມພາ",
        speech: "n",
    },
    {
        id: 3,
        korean: "삼월",
        read: "sam-wol",
        english: "March",
        lao: "ເດືອນມີນາ",
        speech: "n",
    },
    {
        id: 4,
        korean: "사월",
        read: "sawol",
        english: "April",
        lao: "ເດືອນເມສາ",
        speech: "n",
    },
    {
        id: 5,
        korean: "오월",
        read: "owol",
        english: "May",
        lao: "ພຶດສະພາ",
        speech: "n",
    },
    {
        id: 6,
        korean: "유월",
        read: "yuwol",
        english: "June",
        lao: "ເດືອນມິຖຸນາ",
        speech: "n",
    },
    {
        id: 7,
        korean: "칠월",
        read: "chil-wol",
        english: "July",
        lao: "ເດືອນກໍລະກົດ",
        speech: "n",
    },
    {
        id: 8,
        korean: "팔월",
        read: "pal-wol",
        english: "August",
        lao: "ເດືອນສິງຫາ",
        speech: "n",
    },
    {
        id: 9,
        korean: "구월",
        read: "guwol",
        english: "September",
        lao: "ເດືອນກັນຍາ",
        speech: "n",
    },
    {
        id: 10,
        korean: "십월",
        read: "sib-wol",
        english: "October",
        lao: "ເດືອນຕຸລາ",
        speech: "n",
    },
    {
        id: 11,
        korean: "십일월",
        read: "sib-il-wol",
        english: "November",
        lao: "ເດືອນພະຈິກ",
        speech: "n",
    },
    {
        id: 12,
        korean: "십이 월",
        read: "sib-i wol",
        english: "December",
        lao: "ເດືອນທັນວາ",
        speech: "n",
    },
];
</script>
