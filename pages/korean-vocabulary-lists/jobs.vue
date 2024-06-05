<template>
    <main class="max-w-screen-md mx-auto px-4 min-h-screen">
        <div class="rounded border">
            <WordComponent
                v-for="(item, index) in days"
                :key="index"
                :item="item"
            />
        </div>
    </main>
</template>
<script setup lang="ts">
const days: any = [
    {
        id: 1,
        korean: "엔지니어",
        read: "enjinieo",
        english: "engineer",
        lao: "ວິສະວະກອນ",
        speech: "n",
        examples: [
            {
                id: 1,
                korean: "저는 엔지니어입니다.",
                read: "Jeoneun enjinieoimnida.",
                english: "I am an engineer.",
                lao: "ຂ້ອຍເປັນວິສະວະກອນ.",
            },
        ],
    },
    {
        id: 2,
        korean: "간호사",
        read: "ganhosa",
        english: "nurse",
        lao: "ພະຍາບານ",
        speech: "n",
        examples: [
            {
                id: 1,
                korean: "저 여자 분은 간호사입니다.",
                read: "Jeo yeoja buneun ganhosaimnida.",
                english: "The woman is a nurse.",
                lao: "ແມ່ຍິງເປັນພະຍາບານ.",
            },
        ],
    },
    {
        id: 3,
        korean: "농부",
        read: "nongbu",
        english: "farmer",
        lao: "ຊາວນາ",
        speech: "n",
        examples: [
            {
                id: 1,
                korean: "농장에 있는 농부",
                read: "nongjange inneun nongbu",
                english: "farmer on a farm",
                lao: "ຊາວນາຢູ່ນາ",
            },
        ],
    },
    {
        id: 4,
        korean: "선생님",
        read: "seonsaengnim",
        english: "teacher",
        lao: "ຄູສອນ",
        speech: "n",
        examples: [
            {
                id: 1,
                korean: "내 아들은 선생님이야",
                read: "nae adeul-eun seonsaengnim-iya",
                english: "My son is a teacher",
                lao: "ລູກຊາຍຂອງຂ້ອຍເປັນຄູສອນ",
            },
        ],
    },
    {
        id: 5,
        korean: "경관",
        read: "gyeong-gwan",
        english: "policeman",
        lao: "ຕຳຫຼວດ",
        speech: "n",
        examples: [
            {
                id: 1,
                korean: "그의 아버지는 경찰관이다",
                read: "geuui abeojineun gyeongchalgwan-ida",
                english: "His father is a policeman",
                lao: "ພໍ່ຂອງລາວເປັນຕໍາຫຼວດ",
            },
        ],
    },
];
</script>
