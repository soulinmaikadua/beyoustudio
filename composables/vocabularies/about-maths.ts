import type { WordModel } from "~/models";

export const ABOUT_MATHS: WordModel[] = [
    {
        id: 1,
        korean: "수학",
        read: "suhak",
        english: "math",
        lao: "ຄະນິດສາດ",
        speech: "n",
        examples: [
            {
                id: 1,
                korean: "수학은 많은 학생들에게 어려운 과목입니다.",
                read: "Suhak-eun maneun hagsaengdeurege eoryeoun gwamogimnida.",
                english: "Math is a difficult subject for many students.",
                lao: "ຄະນິດສາດເປັນວິຊາທີ່ຢາກສຳລັບນັກຮຽນຫລາຍຄົນ.",
            },
        ],
    },
    {
        id: 2,
        korean: "숫자",
        read: "sutja",
        english: "number",
        lao: "ເລກ",
        speech: "n",
        examples: [
            {
                id: 1,
                korean: "아이들은 숫자를 세는 것을 좋아합니다.",
                read: "Aideul-eun sutjareul seneun geoseul joahamnida.",
                english: "Children like to count numbers.",
                lao: "ເດັກໆມັກນັບເລກ.",
            },
        ],
    },
    {
        id: 3,
        korean: "홀수",
        read: "holsu",
        english: "odd",
        lao: "ຈຳນວນຄີ",
        speech: "n",
        examples: [
            {
                id: 1,
                korean: "홀수는 1, 3, 5처럼 나눌 수 없는 숫자입니다.",
                read: "Holsu-neun 1, 3, 5cheoreom nanul su eomneun sutjaimnida.",
                english:
                    "Odd numbers are those that cannot be divided, like 1, 3, 5.",
                lao: "ຈຳນວນຄີແມ່ນຕົວເລກທີ່ບໍ່ສາມາດແບ່ງໄດ້, ເຊັ່ນ 1, 3, 5.",
            },
        ],
    },
    {
        id: 4,
        korean: "짝수",
        read: "jjaksu",
        english: "even",
        lao: "ຈຳນວນຄູ່",
        speech: "n",
        examples: [
            {
                id: 1,
                korean: "짝수는 2, 4, 6처럼 나눌 수 있는 숫자입니다.",
                read: "Jjaksu-neun 2, 4, 6cheoreom nanul su itneun sutjaimnida.",
                english:
                    "Even numbers are those that can be divided, like 2, 4, 6.",
                lao: "ຈຳນວນຄູ່ແມ່ນຕົວເລກທີ່ສາມາດແບ່ງໄດ້, ເຊັ່ນ 2, 4, 6.",
            },
        ],
    },
    {
        id: 5,
        korean: "더하기",
        read: "deohagi",
        english: "plus",
        lao: "ບວກ",
        speech: "n",
        examples: [
            {
                id: 1,
                korean: "더하기는 두 숫자를 합하는 것입니다.",
                read: "Deohagi-neun du sutjareul habhaneun geosimnida.",
                english: "Plus means adding two numbers together.",
                lao: "ບວກແມ່ນການລວມສອງຕົວເລກຂຶ້ນໃຫ້ເປັນຫນຶ່ງ.",
            },
        ],
    },
    {
        id: 6,
        korean: "빼기",
        read: "ppaegi",
        english: "minus",
        lao: "ລົບ",
        speech: "n",
        examples: [
            {
                id: 1,
                korean: "빼기는 두 숫자에서 하나를 빼는 것입니다.",
                read: "Ppaegi-neun du sutjaeseo hanareul ppaeneun geosimnida.",
                english: "Minus means subtracting one number from another.",
                lao: "ລົບແມ່ນການລົບຕົວເລກຫນຶ່ງອອກຈາກອີກຕົວເລກຫນຶ່ງ.",
            },
        ],
    },
    {
        id: 7,
        korean: "곱하기",
        read: "gophagi",
        english: "times",
        lao: "ຄູນ",
        speech: "n",
        examples: [
            {
                id: 1,
                korean: "곱하기는 두 숫자를 곱하는 것입니다.",
                read: "Gophagi-neun du sutjareul gophaneun geosimnida.",
                english: "Times means multiplying two numbers.",
                lao: "ຄູນແມ່ນການຄູນສອງຕົວເລກ.",
            },
        ],
    },
    {
        id: 8,
        korean: "나누기",
        read: "nanugi",
        english: "divide",
        lao: "ຫານ",
        speech: "n",
        examples: [
            {
                id: 1,
                korean: "나누기는 한 숫자를 다른 숫자로 나누는 것입니다.",
                read: "Nanugi-neun han sutjareul dareun sutjaro nanuneun geosimnida.",
                english: "Divide means dividing one number by another.",
                lao: "ຫານແມ່ນການຫານຕົວເລກຫນຶ່ງໂດຍຕົວເລກອື່ນ.",
            },
        ],
    },
    {
        id: 9,
        korean: "이다",
        read: "ida",
        english: "equal",
        lao: "ເທົ່າກັນ",
        speech: "p",
        examples: [
            {
                id: 1,
                korean: "양쪽이 같으면 이다라고 합니다.",
                read: "Yangjjogi gateumyeon ida-rago hamnida.",
                english: "When both sides are the same, it's called equal.",
                lao: "ເມື່ອທັງສອງດ້ານເທົ່າກັນ, ມັນຖືກເອີ້ນວ່າເທົ່າກັນ.",
            },
        ],
    },
    {
        id: 10,
        korean: "소수점",
        read: "sosujeom",
        english: "point",
        lao: "ຈຸດທົດສະນິຍົມ",
        speech: "n",
        examples: [
            {
                id: 1,
                korean: "소수점은 소수를 표시하는 데 사용됩니다.",
                read: "Sosujeom-eun sosureul pyosihaneun de sayongdoemnida.",
                english: "Point is used to indicate decimals.",
                lao: "ຈຸດທົດສະນິຍົມຖືກນຳໃຊ້ເພື່ອສະແດງທົດສະນິຍົມ.",
            },
        ],
    },
    {
        id: 11,
        korean: "백분율",
        read: "baekbunyul",
        english: "percent",
        lao: "ເປີເຊັນ",
        speech: "n",
        examples: [
            {
                id: 1,
                korean: "백분율은 백분의 일로 표현됩니다.",
                read: "Baekbunyureun baekbune illo pyohyeondoemnida.",
                english:
                    "A percentage is expressed as a fraction of one hundred.",
                lao: "ເປີເຊັນແມ່ນຖືກສະແດງອອກເປັນສ່ວນໜຶ່ງຂອງໜຶ່ງຮ້ອຍ.",
            },
        ],
    },
    {
        id: 12,
        korean: "나머지",
        read: "nameoji",
        english: "remainder",
        lao: "ສ່ວນທີ່ເຫຼືອ",
        speech: "n",
        examples: [
            {
                id: 1,
                korean: "나머지는 나눗셈 후에 남는 부분입니다.",
                read: "Nameojineun nanutsem hue namneun bubunimnida.",
                english: "The remainder is the part left after division.",
                lao: "ສ່ວນທີ່ເຫຼືອແມ່ນພາກສ່ວນທີ່ເຫຼືອຫລັງຈາກການແບ່ງ.",
            },
        ],
    },
    {
        id: 13,
        korean: "공식",
        read: "gongsik",
        english: "formula",
        lao: "ສູດ",
        speech: "n",
        examples: [
            {
                id: 1,
                korean: "공식은 수학 문제를 푸는 데 사용됩니다.",
                read: "Gongsig-eun suhag munjereul puneun de sayongdoemnida.",
                english: "A formula is used to solve math problems.",
                lao: "ສູດຖືກນຳໃຊ້ເພື່ອແກ້ໄຂບັນຫາຄະນິດສາດ.",
            },
        ],
    },
    {
        id: 14,
        korean: "방정식",
        read: "bangjeongsik",
        english: "equation",
        lao: "ສົມການ",
        speech: "n",
        examples: [
            {
                id: 1,
                korean: "방정식은 미지수를 포함하는 수학 문장입니다.",
                read: "Bangjeongsig-eun mijisuleul poham haneun suhag munjang-imnida.",
                english:
                    "An equation is a mathematical sentence containing an unknown.",
                lao: "ສົມການແມ່ນປະໂຫຍກຄະນິດສາດທີ່ມີບຸກຄະລາຄົບເປັນປະກອບ.",
            },
        ],
    },
    {
        id: 15,
        korean: "변수",
        read: "byunsu",
        english: "variable",
        lao: "ຕົວແປ",
        speech: "n",
        examples: [
            {
                id: 1,
                korean: "변수는 방정식에서 미지의 값을 나타냅니다.",
                read: "Byunsu-neun bangjeongsig-eseo mijie gabs-eul natanaemnida.",
                english:
                    "A variable represents an unknown value in an equation.",
                lao: "ຕົວແປແມ່ນລະບຸຄ່າທີ່ບໍ່ຮູ້ຈັກໃນສົມການ.",
            },
        ],
    },
    {
        id: 16,
        korean: "해",
        read: "hae",
        english: "solution",
        lao: "ຄໍາຕອບ",
        speech: "n",
        examples: [
            {
                id: 1,
                korean: "해는 방정식의 답입니다.",
                read: "Hae-neun bangjeongsig-ui dab-imnida.",
                english: "The solution is the answer to an equation.",
                lao: "ຄໍາຕອບແມ່ນຄໍາຕອບຂອງສົມການ.",
            },
        ],
    },
    {
        id: 17,
        korean: "함수",
        read: "hamsu",
        english: "function",
        lao: "ຟັງຊັນ",
        speech: "n",
        examples: [
            {
                id: 1,
                korean: "함수는 하나 이상의 변수에 의존하는 관계입니다.",
                read: "Hamsu-neun hana isang-ui byunsu-e uijon haneun gwan-gye-imnida.",
                english:
                    "A function is a relationship dependent on one or more variables.",
                lao: "ຟັງຊັນແມ່ນຄວາມສຳພັນທີ່ຂຶ້ນຢູ່ກັບຕົວແປຫຼາຍກວ່າຫນຶ່ງ.",
            },
        ],
    },
    {
        id: 18,
        korean: "계산하다",
        read: "gyesanhada",
        english: "calculate",
        lao: "ຄໍານວນ",
        speech: "v",
        examples: [
            {
                id: 1,
                korean: "나는 이 문제를 계산할 수 있습니다.",
                read: "Naneun i munjereul gyesanhalsu issseumnida.",
                english: "I can calculate this problem.",
                lao: "ຂ້ອຍສາມາດຄໍານວນບັນຫານີ້ໄດ້.",
            },
        ],
    },
    {
        id: 19,
        korean: "사분의",
        read: "sabunui",
        english: "fourth",
        lao: "ສີ່ສ່ວນ",
        speech: "p",
        examples: [
            {
                id: 1,
                korean: "이 값은 사분의 일입니다.",
                read: "I gabs-eun sabun-ui il-imnida.",
                english: "This value is a fourth.",
                lao: "ຄ່ານີ້ແມ່ນສີ່ສ່ວນໜຶ່ງ.",
            },
        ],
    },
    {
        id: 20,
        korean: "반",
        read: "ban",
        english: "half",
        lao: "ຄຶ່ງ",
        speech: "n",
        examples: [
            {
                id: 1,
                korean: "사과의 반을 나누었습니다.",
                read: "Sagwa-ui ban-eul nanu-otseumnida.",
                english: "I divided the apple in half.",
                lao: "ຂ້ອຍແບ່ງໝາກໂປ້ນອອກເປັນສອງຄື່ງ.",
            },
        ],
    },
];
