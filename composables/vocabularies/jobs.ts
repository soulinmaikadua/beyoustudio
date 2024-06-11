import type { WordModel } from "~/models";

export const JOBS: WordModel[] = [
    {
        id: 1,
        korean: "엔지니어",
        read: "en-ji-ni-eo",
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
        read: "gan-ho-sa",
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
        read: "ui-sa",
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
        read: "nong-bu",
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
        read: "seon-saeng-nim",
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
        korean: "학생",
        read: "hag-saeng",
        english: "student",
        lao: "ນັກ​ຮຽນ",
        speech: "n",
        emoji: "👨🏻‍🎓",
        examples: [
            {
                id: 1,
                korean: "저는 수학을 전공하는 학생입니다.",
                read: "jeoneun suhag-eul jeongonghaneun hagsaeng-ibnida.",
                english: "I am a math student.",
                lao: "ຂ້ອຍເປັນນັກຮຽນຄະນິດສາດ.",
            },
        ],
    },
    {
        id: 7,
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
    {
        id: 8,
        korean: "기업인",
        read: "gieo-bin",
        english: "businessman",
        lao: "ນັກທຸລະກິດ",
        speech: "n",
        emoji: "👨🏻‍💼",
        examples: [
            {
                id: 1,
                korean: "두 명의 사업가는 거래를 협상하고 있습니다.",
                read: "Du myeongui saeopgganeun georaereul hyeopssanghago itsseumnida.",
                english: "The two businessmen are negotiating a deal.",
                lao: "ນັກທຸລະກິດທັງສອງກໍາລັງເຈລະຈາຂໍ້ຕົກລົງ.",
            },
        ],
    },
    {
        id: 9,
        korean: "회계사",
        read: "hoe-gye-sa",
        english: "accountant",
        lao: "ນັກບັນຊີ",
        speech: "n",
        emoji: "👨🏻‍💼",
        examples: [
            {
                id: 1,
                korean: "제 회계사는 제 지출과 청구서를 저보다 더 잘 압니다.",
                read: "Je hoegyesaneun je jichulgwa cheongguseoreul jeoboda deo jal amnida.",
                english: "My accountant understands my expenses and bills better than I do.",
                lao: "ນັກບັນຊີຂອງຂ້ອຍເຂົ້າໃຈຄ່າໃຊ້ຈ່າຍ ແລະ ໃບບິນຄ່າຂອງຂ້ອຍດີກ່ວາຂ້ອຍ.",
            },
        ],
    },
    {
        id: 9,
        korean: "요리사",
        read: "yo-li-sa",
        english: "chef",
        lao: "ພໍ່ຄົວ",
        speech: "n",
        emoji: "👨🏻‍🍳",
        examples: [
            {
                id: 1,
                korean: "요리사가 부엌에서 요리를 하고 있어요.",
                read: "Yolisaga bueok-eseo yolileul hago iss-eoyo.",
                english: "The chef is cooking in the kitchen.",
                lao: "ພໍ່ຄົວກຳລັງແຕ່ງກິນຢູ່ໃນເຮືອນຄົວ.",
            },
        ],
    },
    {
        id: 10,
        korean: "공장 노동자",
        read: "gong-jang no-dong-ja",
        english: "factory worker",
        lao: "ພະນັກງານໂຮງງານ",
        speech: "n",
        emoji: "👷🏻‍♂️",
        examples: [
            {
                id: 1,
                korean: "공장의 효율성은 공장 노동자의 능력에 달려 있습니다.",
                read: "Gongjangui hyoyulseongeun gongjang nodongjaui neungnyeoge dallyeo itseumnida.",
                english: "The efficiency of the plant relies on the ability of the factory worker.",
                lao: "ປະສິດທິພາບຂອງໂຮງງານແມ່ນຂຶ້ນກັບຄວາມສາມາດຂອງພະນັກງານໂຮງງານ.",
            },
        ],
    },
];
