import type { WordModel } from "~/models";

export const JOBS: WordModel[] = [
    {
        id: 1,
        korean: "엔지니어",
        read: "enjinieo",
        english: "engineer",
        lao: "ວິສະວະກອນ",
        speech: "n",
        emoji: "👷🏻‍♂️",
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
        emoji: "👩🏻‍⚕️",
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
        korean: "의사",
        read: "uisa",
        english: "doctor",
        lao: "ທ່ານໝໍ",
        speech: "n",
        emoji: "👨🏻‍⚕️",
        examples: [
            {
                id: 1,
                korean: "내 아들은 의사예요.",
                read: "nae adeul-eun uisayeyo.",
                english: "My son is a doctor.",
                lao: "ລູກຊາຍຂອງຂ້ອຍເປັນທ່ານຫມໍ.",
            },
        ],
    },
    {
        id: 4,
        korean: "농부",
        read: "nongbu",
        english: "farmer",
        lao: "ຊາວນາ",
        speech: "n",
        emoji: "👨🏻‍🌾",
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
        id: 5,
        korean: "선생님",
        read: "seonsaengnim",
        english: "teacher",
        lao: "ຄູສອນ",
        speech: "n",
        emoji: "👨🏻‍🏫",
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
        id: 6,
        korean: "경관",
        read: "gyeong-gwan",
        english: "policeman",
        lao: "ຕຳຫຼວດ",
        speech: "n",
        emoji: "👮🏻‍♂️",
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
