import type { WordModel } from "~/models";

export const FRUIT: WordModel[] = [
    {
        id: 1,
        korean: "과일",
        read: "gwail",
        english: "fruit",
        lao: "ຫມາກໄມ້",
        speech: "n",
        examples: [
            {
                id: 1,
                korean: "과일 한 조각",
                read: "gwail han jogak",
                english: "piece of fruit.",
                lao: "ຕ່ອນຂອງຫມາກໄມ້.",
            },
        ],
    },
    {
        id: 2,
        korean: "오렌지",
        read: "orenji",
        english: "orange",
        lao: "ໝາກກ້ຽງ",
        speech: "n",
        examples: [
            {
                id: 1,
                korean: "잘 익은 오렌지",
                read: "jal igeun orenji",
                english: "ripe orange",
                lao: "ສີສົ້ມສຸກ",
            },
        ],
    },
    {
        id: 3,
        korean: "바나나",
        read: "banana",
        english: "banana",
        lao: "ໝາກກ້ວຍ",
        speech: "n",
        examples: [
            {
                id: 1,
                korean: "잘 익은 바나나와 썩은 바나나",
                read: "jal igeun bananawa sseogeun banana",
                english: "a ripe banana and a rotten banana",
                lao: "ໝາກກ້ວຍສຸກ ແລະ ກ້ວຍເໝັນ",
            },
        ],
    },
    {
        id: 4,
        korean: "사과",
        read: "sagwa",
        english: "apple",
        lao: "ໝາກໂປມ",
        speech: "n",
        examples: [
            {
                id: 1,
                korean: "사과 주스, 오렌지 주스 그리고 포도 주스",
                read: "sagwa juseu, orenji juseu geurigo podo juseu",
                english: "apple juice, orange juice, and grape juice",
                lao: "ນໍ້​ໍ​າ​ຫມາກ​ໂປ້ມ, ນໍ້​ໍ​າໝາກກ້ຽງ, ແລະ ນໍ້​ໍ​າໝາກອະງຸ່ນ",
            },
        ],
    },
    {
        id: 5,
        korean: "복숭아",
        read: "Boksunga",
        english: "peach",
        lao: "ໝາກຄາຢ",
        speech: "n",
        examples: [
            {
                id: 1,
                korean: "복숭아와 자른 복숭아",
                read: "bokssungawa jareun bokssunga",
                english: "peach and a sliced peach",
                lao: "ໝາກຄາຢ ແລະ ໝາກຄາຢຊອຍໃຫ້ບາງໆ",
            },
        ],
    },
    {
        id: 6,
        korean: "토마토",
        read: "tomato",
        english: "tomato",
        lao: "ຫມາກ​ເລັ່ນ",
        speech: "n",
        examples: [
            {
                id: 1,
                korean: "토마토는 과일입니다.",
                read: "Tomatoneun gwairimnida.",
                english: "Tomatoes are fruit.",
                lao: "ໝາກເລັ່ນ ແມ່ນໝາກໄມ້.",
            },
        ],
    },
    {
        id: 7,
        korean: "수박",
        read: "subak",
        english: "watermelon",
        lao: "ຫມາກ​ເລັ່ນ",
        speech: "n",
        examples: [
            {
                id: 1,
                korean: "수박 한 통과 수박 한 조각",
                read: "subak han tonggwa subak han jogak",
                english: "whole watermelon and a slice of watermelon",
                lao: "ໝາກໂມທັງໝົດ ແລະໝາກໂມບາງໜ່ວຍ",
            },
        ],
    },
    {
        id: 8,
        korean: "딸기",
        read: "ttalgi",
        english: "strawberry",
        lao: "ສະຕໍເບີຣີ",
        speech: "n",
        examples: [
            {
                id: 1,
                korean: "딸기는 맛있고 몸에도 좋습니다.",
                read: "Ttalgineun masikko momedo jolsseumnida.",
                english: "Strawberries are delicious and good for the body.",
                lao: "ສະຕໍເບີຣີມີລົດຊາດແຊບ ແລະດີຕໍ່ຮ່າງກາຍ.",
            },
        ],
    },
    {
        id: 9,
        korean: "체리",
        read: "cheri",
        english: "cherry",
        lao: "ໝາກເຜັດ",
        speech: "n",
        examples: [
            {
                id: 1,
                korean: "두 개의 체리",
                read: "du gaeui cheri",
                english: "two cherries",
                lao: "ໝາກເຜັດສອງໜ່ວຍ",
            },
        ],
    },
    {
        id: 10,
        korean: "포도",
        read: "podo",
        english: "grape",
        lao: "ໝາກອະງຸ່ນ",
        speech: "n",
        examples: [
            {
                id: 1,
                korean: "한 송이의 포도와 한 송이의 청포도",
                read: "han songiui podowa han songiui cheongpodo",
                english: "a bunch of red grapes and a bunch of white grapes",
                lao: "ຫນຶ່ງພວນອະງຸ່ມສີແດງ ແລະ ຫນຶ່ງພວນອະງຸ່ມສີແດງສີຂາວ",
            },
        ],
    },
];
