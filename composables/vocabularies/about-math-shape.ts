import type { WordModel } from "~/models";

export const ABOUT_MATH_SHAPE: WordModel[] = [
    {
        id: 1,
        korean: "정사각형",
        read: "jeong-sa-gak-hyeong",
        english: "Square",
        lao: "ຮູບຈັດຕຸລັດ",
        speech: "n",
        examples: [
            {
                id: 1,
                korean: "정사각형의 모든 변은 같습니다.",
                read: "jeong-sa-gak-hyeong-ui mo-deun byeon-eun gat-seum-ni-da.",
                english: "All sides of a square are equal.",
                lao: "ທຸກດ້ານຂອງສີ່ຫລ່ຽມຈັດເທົ່າກັນ.",
            },
        ],
    },
    {
        id: 2,
        korean: "직사각형",
        read: "jik-sa-gak-hyeong",
        english: "Rectangle",
        lao: "ຮູບສີ່ຫລ່ຽມ",
        speech: "n",
        examples: [
            {
                id: 1,
                korean: "직사각형은 두 쌍의 평행한 변을 가지고 있습니다.",
                read: "jik-sa-gak-hyeong-eun du ssang-ui pyeong-haeng-han byeon-eul ga-ji-go it-seum-ni-da.",
                english: "A rectangle has two pairs of parallel sides.",
                lao: "ສີ່ຫລ່ຽມຜືນຜ້າມີສອງຄູ່ຂອງດ້ານທີ່ຂະໜານຂະຫຍາງ.",
            },
        ],
    },
    {
        id: 3,
        korean: "삼각형",
        read: "sam-gak-hyeong",
        english: "Triangle",
        lao: "ຮູບສາມແຈ່",
        speech: "n",
        examples: [
            {
                id: 1,
                korean: "삼각형의 세 변은 모두 다릅니다.",
                read: "sam-gak-hyeong-ui se byeon-eun mo-du da-reum-ni-da.",
                english: "The three sides of a triangle are all different.",
                lao: "ສາມຫລ່ຽມມີສາມດ້ານທີ່ແຕກຕ່າງ.",
            },
        ],
    },
    {
        id: 4,
        korean: "원",
        read: "won",
        english: "Circle",
        lao: "ຮູບວົງມົນ",
        speech: "n",
        examples: [
            {
                id: 1,
                korean: "원의 둘레는 반지름에 비례합니다.",
                read: "won-ui dul-le-neun ban-ji-reum-e bi-rye-ham-ni-da.",
                english:
                    "The circumference of a circle is proportional to its radius.",
                lao: "ວົງມົນມີລັດສະໜີເຂົ້າສູ່ຂະໜານຂອງມັນ.",
            },
        ],
    },
    {
        id: 5,
        korean: "오각형",
        read: "o-gak-hyeong",
        english: "Pentagon",
        lao: "ຮູບຫ້າຫລ່ຽມ",
        speech: "n",
        examples: [
            {
                id: 1,
                korean: "오각형은 다섯 개의 변을 가지고 있습니다.",
                read: "o-gak-hyeong-eun da-seot gae-ui byeon-eul ga-ji-go it-seum-ni-da.",
                english: "A pentagon has five sides.",
                lao: "ຫ້າຫລ່ຽມມີຫ້າດ້ານ.",
            },
        ],
    },
    {
        id: 6,
        korean: "육각형",
        read: "yuk-gak-hyeong",
        english: "Hexagon",
        lao: "ຮູບຫົກຫລ່ຽມ",
        speech: "n",
        examples: [
            {
                id: 1,
                korean: "벌집은 육각형 모양입니다.",
                read: "beol-jip-eun yuk-gak-hyeong mo-yang-im-ni-da.",
                english: "A beehive is hexagonal in shape.",
                lao: "ລັງເຜິ້ງມີຮູປແບບຫົກຫລ່ຽມ.",
            },
        ],
    },
    {
        id: 7,
        korean: "팔각형",
        read: "pal-gak-hyeong",
        english: "Octagon",
        lao: "ຮູບແປດຫລ່ຽມ",
        speech: "n",
        examples: [
            {
                id: 1,
                korean: "팔각형은 여덟 개의 변을 가지고 있습니다.",
                read: "pal-gak-hyeong-eun yeo-deol gae-ui byeon-eul ga-ji-go it-seum-ni-da.",
                english: "An octagon has eight sides.",
                lao: "ແປດຫລ່ຽມມີສອງຄູ່ຂອງດ້ານທີ່ຂະໜານຂະຫຍາງ.",
            },
        ],
    },
    {
        id: 8,
        korean: "타원",
        read: "ta-won",
        english: "Oval",
        lao: "ຮູບວົງລົມ",
        speech: "n",
        examples: [
            {
                id: 1,
                korean: "타원은 길쭉한 원의 형태입니다.",
                read: "ta-won-eun gil-jjuk-han won-ui hyeong-tae-im-ni-da.",
                english: "An oval is an elongated circle.",
                lao: "ຮູບວົງລົມແມ່ນຮູບເວົ້າຂອງວົງມົນ.",
            },
        ],
    },
    {
        id: 9,
        korean: "직각 삼각형",
        read: "jik-gak sam-gak-hyeong",
        english: "Right triangle",
        lao: "ສາມຫລ່ຽມມຸມສອງ",
        speech: "n",
        examples: [
            {
                id: 1,
                korean: "직각 삼각형의 한 각은 90도입니다.",
                read: "jik-gak sam-gak-hyeong-ui han gak-eun 90-do-im-ni-da.",
                english: "A right triangle has one angle of 90 degrees.",
                lao: "ສາມຫລ່ຽມມຸມສອງມີມຸມດຽວ 90 ອົງສາ.",
            },
        ],
    },
    {
        id: 10,
        korean: "다이아몬드",
        read: "da-i-a-mon-deu",
        english: "Diamond",
        lao: "ເພັດ",
        speech: "n",
        examples: [
            {
                id: 1,
                korean: "다이아몬드는 보석의 일종입니다.",
                read: "da-i-a-mon-deu-neun bo-seog-ui il-jong-im-ni-da.",
                english: "A diamond is a type of gemstone.",
                lao: "ເພັດແມ່ນຫີນທີ່ມີຄຸນຄ່າ.",
            },
        ],
    },
];
