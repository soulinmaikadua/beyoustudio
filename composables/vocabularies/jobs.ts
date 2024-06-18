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
                korean: "내 아들은 선생님이야.",
                read: "nae adeul-eun seonsaengnim-iya.",
                english: "My son is a teacher.",
                lao: "ລູກຊາຍຂອງຂ້ອຍເປັນຄູສອນ.",
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
                korean: "그의 아버지는 경찰관이다.",
                read: "geuui abeojineun gyeongchalgwan-ida.",
                english: "His father is a policeman.",
                lao: "ພໍ່ຂອງລາວເປັນຕຳຫຼວດ.",
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
                english:
                    "My accountant understands my expenses and bills better than I do.",
                lao: "ນັກບັນຊີຂອງຂ້ອຍເຂົ້າໃຈຄ່າໃຊ້ຈ່າຍ ແລະ ໃບບິນຄ່າຂອງຂ້ອຍດີກ່ວາຂ້ອຍ.",
            },
        ],
    },
    {
        id: 10,
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
        id: 11,
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
                english:
                    "The efficiency of the plant relies on the ability of the factory worker.",
                lao: "ປະສິດທິພາບຂອງໂຮງງານແມ່ນຂຶ້ນກັບຄວາມສາມາດຂອງພະນັກງານໂຮງງານ.",
            },
        ],
    },
    {
        id: 12,
        korean: "비서",
        read: "bi-seo",
        english: "secretary",
        lao: "ເລຂານຸການ",
        speech: "n",
        emoji: "👩🏻‍💼",
        examples: [
            {
                id: 1,
                korean: "바쁜 비서",
                read: "bappeun biseo",
                english: "busy secretary",
                lao: "ເລຂານຸການທີ່ວຽກຫລາຍ",
            },
        ],
    },
    {
        id: 13,
        korean: "주부",
        read: "ju-bu",
        english: "housewife",
        lao: "ແມ່ບ້ານ",
        speech: "n",
        emoji: "👱🏼‍♀️",
        examples: [
            {
                id: 1,
                korean: "주부는 슈퍼마켓에서 장을 봅니다.",
                read: "Jubuneun syupeomakeseseo jangeul bomnida.",
                english: "The housewives are shopping at the supermarket.",
                lao: "ແມ່ບ້ານກຳລັງຊື້ເຄື່ອງຢູ່ສັບພະສິນຄ້າ.",
            },
        ],
    },
    {
        id: 14,
        korean: "변호사",
        read: "byeo-nho-sa",
        english: "lawyer",
        lao: "ທະ​ນາຍ​ຄວາມ",
        speech: "n",
        emoji: "🧑🏼‍⚖️",
        examples: [
            {
                id: 1,
                korean: "회사의 변호사",
                read: "hoesa-ui byeonhosa",
                english: "company lawyer",
                lao: "ທະນາຍຄວາມບໍລິສັດ",
            },
        ],
    },
    {
        id: 15,
        korean: "배우",
        read: "bae-u",
        english: "actor",
        lao: "ນັກສະແດງ",
        speech: "n",
        emoji: "🕺🏻",
        examples: [
            {
                id: 1,
                korean: "배우는 다양한 역할을 연기합니다.",
                read: "Baeuneun dayanghan yeoghal-eul yeonggihamnida.",
                english: "The actor plays various roles.",
                lao: "ນັກສະແດງຫຼັງຫຼາຍບົດບາດ.",
            },
        ],
    },
    {
        id: 16,
        korean: "가수",
        read: "gasu",
        english: "singer",
        lao: "ນັກຮ້ອງ",
        speech: "n",
        examples: [
            {
                id: 1,
                korean: "가수는 노래를 부릅니다.",
                read: "Gasuneun nolaereul bureumnida.",
                english: "The singer sings songs.",
                lao: "ນັກຮ້ອງຮ້ອງເພງ.",
            },
        ],
    },
    {
        id: 17,
        korean: "운전사",
        read: "unjeonsa",
        english: "driver",
        lao: "ຄົນຂັບລົດ",
        speech: "n",
        examples: [
            {
                id: 1,
                korean: "운전사는 안전하게 운전합니다.",
                read: "Unjeonsaneun anjeonhage unjeonhamnida.",
                english: "The driver drives safely.",
                lao: "ຄົນຂັບລົດຂັບໄປຢ່າງປອດໄພ.",
            },
        ],
    },
    {
        id: 18,
        korean: "작가",
        read: "jagga",
        english: "writer",
        lao: "ນັກຂຽນ",
        speech: "n",
        emoji: "✍️",
        examples: [
            {
                id: 1,
                korean: "작가는 책을 씁니다.",
                read: "Jagganeun chaekeul sseumnida.",
                english: "The writer writes books.",
                lao: "ນັກຂຽນຂຽນປື້ມ.",
            },
        ],
    },
    {
        id: 19,
        korean: "건축가",
        read: "geonchugga",
        english: "architect",
        lao: "ນັກອອກແບບອາຄານ",
        speech: "n",
        examples: [
            {
                id: 1,
                korean: "건축가는 건물을 설계합니다.",
                read: "Geonchugganeun geonmuleul seolgyehamnida.",
                english: "The architect designs buildings.",
                lao: "ນັກອອກແບບອາຄານອອກແບບອາຄານ.",
            },
        ],
    },
    {
        id: 20,
        korean: "프로그래머",
        read: "peurogeuraemeo",
        english: "programmer",
        lao: "ນັກຂຽນໂປຣແກຣມ",
        speech: "n",
        emoji: "👨‍💻",
        examples: [
            {
                id: 1,
                korean: "프로그래머는 소프트웨어를 개발합니다.",
                read: "Peurogeuraemeoneun sopeuteuweeo-reul gaebalhamnida.",
                english: "The programmer develops software.",
                lao: "ນັກຂຽນໂປຣແກຣມພັດທະນາຊອຟແວ.",
            },
        ],
    },
];
