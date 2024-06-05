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
        korean: "월요일",
        read: "woryoil",
        english: "Monday",
        lao: "ວັນຈັນ",
        speech: "n",
        examples: [
            {
                id: 1,
                korean: "저는 월요일부터 새로운 일을 시작할 것입니다.",
                read: "Jeoneun woryoilbuteo saeroun ireul sijakhal geosimnida.",
                english: "I'll start a new job on Monday.",
                lao: "ຂ້ອຍຈະເລີ່ມວຽກໃໝ່ໃນວັນຈັນ.",
            },
        ],
    },
    {
        id: 2,
        korean: "화요일",
        read: "hwayoil",
        english: "Tuesday",
        lao: "ວັນອັງຄານ",
        speech: "n",
        examples: [
            {
                id: 1,
                korean: "평일에는 월요일, 화요일, 수요일, 목요일 그리고 금요일이 있습니다.",
                read: "Pyeongireneun woryoil, hwayoil, suyoil, mogyoil geurigo geumyoiri itsseumnida.",
                english:
                    "Monday, Tuesday, Wednesday, Thursday and Friday are weekdays.",
                lao: "ວັນຈັນ, ວັນອັງຄານ, ວັນພຸດ, ວັນພະຫັດ ແລະ ວັນສຸກ ແມ່ນມື້ເຮັດວຽກ.",
            },
        ],
    },
    {
        id: 3,
        korean: "수요일",
        read: "suyoil",
        english: "Wednesday",
        lao: "ວັນພຸດ",
        speech: "n",
        examples: [
            {
                id: 1,
                korean: "평일에는 월요일, 화요일, 수요일, 목요일 그리고 금요일이 있습니다.",
                read: "Pyeongireneun woryoil, hwayoil, suyoil, mogyoil geurigo geumyoiri itsseumnida.",
                english:
                    "Monday, Tuesday, Wednesday, Thursday and Friday are weekdays.",
                lao: "ວັນຈັນ, ວັນອັງຄານ, ວັນພຸດ, ວັນພະຫັດ ແລະ ວັນສຸກ ແມ່ນມື້ເຮັດວຽກ.",
            },
        ],
    },
    {
        id: 4,
        korean: "목요일",
        read: "mogyoil",
        english: "Thursday",
        lao: "ວັນພະຫັດ",
        speech: "n",
        examples: [
            {
                id: 1,
                korean: "평일에는 월요일, 화요일, 수요일, 목요일 그리고 금요일이 있습니다.",
                read: "Pyeongireneun woryoil, hwayoil, suyoil, mogyoil geurigo geumyoiri itsseumnida.",
                english:
                    "Monday, Tuesday, Wednesday, Thursday and Friday are weekdays.",
                lao: "ວັນຈັນ, ວັນອັງຄານ, ວັນພຸດ, ວັນພະຫັດ ແລະ ວັນສຸກ ແມ່ນມື້ເຮັດວຽກ.",
            },
        ],
    },
    {
        id: 5,
        korean: "금요일",
        read: "geumyoil",
        english: "Friday",
        lao: "ວັນ​ສຸກ",
        speech: "n",
        examples: [
            {
                id: 1,
                korean: "달력에 금요일의 계획을 적으세요.",
                read: "Dallyeoge geumyoirui gyehoegeul jeogeuseyo.",
                english: "Write the plans for Friday on the calendar.",
                lao: "ຂຽນແຜນການສໍາລັບວັນສຸກໃນປະຕິທິນ.",
            },
        ],
    },
    {
        id: 6,
        korean: "토요일",
        read: "toyoil",
        english: "Saturday",
        lao: "ວັນເສົາ",
        speech: "n",
        examples: [
            {
                id: 1,
                korean: "저는 토요일마다 다섯 시간 동안 집안일을 합니다.",
                read: "Jeoneun toyoilmada daseot sigan dongan jibanireul hamnida.",
                english: "I do housework every Saturday for five hours.",
                lao: "ຂ້ອຍເຮັດວຽກບ້ານທຸກໆວັນເສົາເປັນເວລາຫ້າຊົ່ວໂມງ.",
            },
        ],
    },
    {
        id: 7,
        korean: "일요일",
        read: "iryoil",
        english: "Sunday",
        lao: "ວັນອາທິດ",
        speech: "n",
        examples: [
            {
                id: 1,
                korean: "십칠일 일요일",
                read: "Sipchiril iryoil",
                english: "Sunday the 17th",
                lao: "ວັນອາທິດ ທີ 17",
            },
        ],
    },
    {
        id: 8,
        korean: "주",
        read: "ju",
        english: "week",
        lao: "ອາທິດ",
        speech: "n",
        examples: [
            {
                id: 1,
                korean: "이번 주 수요일",
                read: "ibeon jju suyoil",
                english: "this week on Wednesday",
                lao: "ໃນ​ອາ​ທິດ​ນີ້​ໃນ​ວັນ​ພຸດ​",
            },
        ],
    },
    {
        id: 9,
        korean: "그저께",
        read: "geujeokke",
        english: "the day before yesterday",
        lao: "ມື້​ຊືນ",
        speech: "n",
    },
    {
        id: 10,
        korean: "어제",
        read: "eoje",
        english: "yesterday",
        lao: "ມື້ວານນີ້",
        speech: "n",
        examples: [
            {
                id: 1,
                korean: "어제 쉬었습니다.",
                read: "Eoje swieotsseumnida.",
                english: "I took a day off yesterday.",
                lao: "ຂ້ອຍໄດ້ພັກມື້ນຶ່ງມື້ວານນີ້.",
            },
        ],
    },
    {
        id: 11,
        korean: "오늘",
        read: "oneul",
        english: "today",
        lao: "ມື້​ນີ້",
        speech: "n",
        examples: [
            {
                id: 1,
                korean: "오늘 여섯 시 십오 분",
                read: "oneul yeoseot ssi sibo bun",
                english: "today at 6:15",
                lao: "ມື້ນີ້ ເວລາ 6:15 ໂມງ",
            },
        ],
    },
    {
        id: 12,
        korean: "내일",
        read: "naeil",
        english: "tomorrow",
        lao: "ມື້ອື່ນ",
        speech: "n",
        examples: [
            {
                id: 1,
                korean: "내일 열시 십분",
                read: "naeil yeolssi sippun",
                english: "tomorrow at 10:10",
                lao: "ມື້ອື່ນ ເວລາ 10:10",
            },
        ],
    },
    {
        id: 12,
        korean: "모레",
        read: "more",
        english: "the day after tomorrow",
        lao: "ມື້​ຮື",
        speech: "n",
    },
];
</script>
