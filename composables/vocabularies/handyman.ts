import type { WordModel } from "~/models";

export const HANDYMAN: WordModel[] = [
    {
        id: 1,
        korean: "망치",
        read: "mang-chi",
        english: "hammer",
        lao: "ຄ້ອນ​ຕີ",
        speech: "n",
        emoji: "🔨",
        examples: [
            {
                id: 1,
                korean: "그는 망치를 사용하여 부서진 의자를 고쳤습니다.",
                read: "Geu-neun mang-chi-reul sa-yong-ha-yeo bu-seo-jin ui-ja-reul go-chyeot-seum-ni-da.",
                english: "He used a hammer to fix the broken chair.",
                lao: "ລາວ​ໃຊ້​ຄ້ອນ​ຕີ​ເພື່ອແປ່ງຕັ່ງ​ທີ່​ຫັກ.",
            },
        ],
    },
    {
        id: 2,
        korean: "드라이버",
        read: "deu-ra-i-beo",
        english: "screwdriver",
        lao: "",
        speech: "n",
        emoji: "🪛",
        examples: [
            {
                id: 1,
                korean: "그녀는 드라이버를 사용하여 나사를 조였습니다.",
                read: "Geu-nyeo-neun deu-ra-i-beo-reul sa-yong-ha-yeo na-sa-reul jo-yeot-seum-ni-da.",
                english: "She used a screwdriver to tighten the screws.",
                lao: "",
            },
        ],
    },
    {
        id: 3,
        korean: "렌치",
        read: "ren-chi",
        english: "wrench",
        lao: "ກະແຈ",
        speech: "n",
        emoji: "🔧",
        examples: [
            {
                id: 1,
                korean: "그는 렌치를 사용하여 볼트를 풀었습니다.",
                read: "Geu-neun ren-chi-reul sa-yong-ha-yeo bol-teu-reul pu-reot-seum-ni-da.",
                english: "He used a wrench to loosen the bolt.",
                lao: "ລາວໃຊ້ກະແຈເພື່ອປົດກອນປະຕູ.",
            },
        ],
    },
    {
        id: 4,
        korean: "펜치",
        read: "pen-chi",
        english: "pliers",
        lao: "ຄີມ",
        speech: "n",
        emoji: "",
        examples: [
            {
                id: 1,
                korean: "그녀는 펜치를 사용하여 철사를 잘랐습니다.",
                read: "Geu-nyeo-neun pen-chi-reul sa-yong-ha-yeo cheol-sa-reul jal-lat-seum-ni-da.",
                english: "She used pliers to cut the wire.",
                lao: "ລາວໄດ້ໃຊ້ຄີມຕັດສາຍ.",
            },
        ],
    },
    {
        id: 5,
        korean: "톱",
        read: "top",
        english: "saw",
        lao: "ເລື່ອຍ",
        speech: "n",
        emoji: "🪚",
        examples: [
            {
                id: 1,
                korean: "그는 톱을 사용하여 나무를 잘랐습니다.",
                read: "Geu-neun top-eul sa-yong-ha-yeo na-mu-reul jal-lat-seum-ni-da.",
                english: "He used a saw to cut the wood.",
                lao: "ລາວໃຊ້ເລື່ອຍຕັດໄມ້.",
            },
        ],
    },
    {
        id: 6,
        korean: "드릴",
        read: "deu-ril",
        english: "drill",
        lao: "ເຄື່ອງເຈາະ",
        speech: "n",
        emoji: "🔫",
        examples: [
            {
                id: 1,
                korean: "그는 드릴을 사용하여 벽에 구멍을 뚫었습니다.",
                read: "Geu-neun deu-ril-eul sa-yong-ha-yeo byeok-e gu-meong-eul ttul-eot-seum-ni-da.",
                english: "He used a drill to make a hole in the wall.",
                lao: "ລາວໃຊ້ເຄື່ອງເຈາະເພື່ອເຮັດຮູຢູ່ໃນຝາ.",
            },
        ],
    },
    {
        id: 7,
        korean: "못",
        read: "mot",
        english: "nail",
        lao: "ຕະປູ",
        speech: "n",
        examples: [
            {
                id: 1,
                korean: "그녀는 벽에 못을 박았습니다.",
                read: "Geu-nyeo-neun byeok-e mot-eul bak-at-seum-ni-da.",
                english: "She hammered a nail into the wall.",
                lao: "",
            },
        ],
    },
    {
        id: 8,
        korean: "나사",
        read: "na-sa",
        english: "screw",
        lao: "ຕະປູກຽວ",
        speech: "n",
        examples: [
            {
                id: 1,
                korean: "그는 나사를 드라이버로 조였습니다.",
                read: "Geu-neun na-sa-reul deu-ra-i-beo-ro jo-yeot-seum-ni-da.",
                english: "He tightened the screw with a screwdriver.",
                lao: "ລາວ tightened screw ດ້ວຍ screwdriver.",
            },
        ],
    },
    {
        id: 9,
        korean: "줄자",
        read: "jul-ja",
        english: "tape measure",
        lao: "ໄມ້ແມັດ",
        speech: "n",
        examples: [
            {
                id: 1,
                korean: "그녀는 방의 길이를 확인하기 위해 줄자를 사용했습니다.",
                read: "Geu-nyeo-neun bang-ui gil-i-reul hwag-in-ha-gi wi-hae jul-ja-reul sa-yong-haet-seum-ni-da.",
                english:
                    "She used a tape measure to check the length of the room.",
                lao: "ນາງໄດ້ໃຊ້ໄມ້ແມັດວັດແທກຄວາມຍາວຂອງຫ້ອງ.",
            },
        ],
    },
    {
        id: 10,
        korean: "수평기",
        read: "su-pyeong-gi",
        english: "level",
        lao: "ເຄື່ອງວັດລະດັບ",
        speech: "n",
        examples: [
            {
                id: 1,
                korean: "그는 수평기를 사용하여 선반이 곧은지 확인했습니다.",
                read: "Geu-neun su-pyeong-gi-reul sa-yong-ha-yeo seon-ban-i go-sseun-ji hwag-in-haet-seum-ni-da.",
                english: "He used a level to make sure the shelf was straight.",
                lao: "ລາວໃຊ້ເຄື່ອງວັດລະດັບເພື່ອໃຫ້ແນ່ໃຈວ່າຊັ້ນວາງເຄື່ອງຊື່ກັນ.",
            },
        ],
    },
    {
        id: 11,
        korean: "사포",
        read: "sa-po",
        english: "sandpaper",
        lao: "ກະດາດຊາຍ",
        speech: "n",
        examples: [
            {
                id: 1,
                korean: "그는 사포를 사용하여 거친 표면을 매끄럽게 했습니다.",
                read: "Geu-neun sa-po-reul sa-yong-ha-yeo geo-chin pyo-myeon-eul mae-kkeu-reop-ge haet-seum-ni-da.",
                english: "He used sandpaper to smooth the rough surface.",
                lao: "ລາວໃຊ້ກະດາດຊາຍເພື່ອຂັດໃຫ້ງາມຂື້ນ.",
            },
        ],
    },
    {
        id: 12,
        korean: "끌",
        read: "kkeul",
        english: "chisel",
        lao: "ຊິວ",
        speech: "n",
        examples: [
            {
                id: 1,
                korean: "그는 끌을 사용하여 나무를 조각했습니다.",
                read: "Geu-neun kkeul-eul sa-yong-ha-yeo na-mu-reul jo-gak-haet-seum-ni-da.",
                english: "He used a chisel to carve the wood.",
                lao: "ລາວ​ໃຊ້​ຊິວ​ເພື່ອ​ແກະສະຫຼັກ​ໄມ້.",
            },
        ],
    },
    {
        id: 13,
        korean: "커터칼",
        read: "keo-teo-kal",
        english: "utility knife",
        lao: "",
        speech: "n",
        examples: [
            {
                id: 1,
                korean: "그녀는 유틸리티 나이프로 판지를 자르기 위해 사용했습니다.",
                read: "Geu-nyeo-neun yu-tili-ti na-i-peu-ro pan-ji-reul ja-reu-gi wi-hae sa-yong-haet-seum-ni-da.",
                english: "She used a utility knife to cut the cardboard.",
                lao: "ນາງ​ໄດ້​ໃຊ້​ມີດ​ເພື່ອ​ຕັດ​ແຜ່ນ​ແຂງ.",
            },
        ],
    },
    {
        id: 14,
        korean: "사다리",
        read: "sa-da-ri",
        english: "ladder",
        lao: "ຂັ້ນໄດ",
        speech: "n",
        emoji: "🪜",
        examples: [
            {
                id: 1,
                korean: "그는 사다리를 사용하여 맨 위 선반에 다다렸습니다.",
                read: "Geu-neun sa-da-ri-reul sa-yong-ha-yeo maen wi seon-ban-e da-da-ryeot-seum-ni-da.",
                english: "He used a ladder to reach the top shelf.",
                lao: "ລາວໃຊ້ຂັ້ນໄດເພື່ອໄປເຖິງຊັ້ນວາງເທິງ.",
            },
        ],
    },
    {
        id: 15,
        korean: "공구 상자",
        read: "gong-gu sang-ja",
        english: "toolbox",
        lao: "ກ່ອງ​ເຄື່ອງ​ມື",
        speech: "n",
        examples: [
            {
                id: 1,
                korean: "그녀는 공구 상자에 도구들을 정리해 두었습니다.",
                read: "Geu-nyeo-neun gong-gu sang-ja-e do-gu-deul-eul jeong-ri-hae du-eo-seum-ni-da.",
                english: "She keeps her tools organized in the toolbox.",
                lao: "ລາວເກັບເຄື່ອງມືຂອງລາວເປັນລະບຽບຢູ່ໃນກ່ອງເຄື່ອງມື.",
            },
        ],
    },
    {
        id: 16,
        korean: "접착제",
        read: "jeop-chak-je",
        english: "glue",
        lao: "ກາວ",
        speech: "n",
        examples: [
            {
                id: 1,
                korean: "그는 접착제를 사용하여 깨진 꽃병을 고쳤습니다.",
                read: "Geu-neun jeop-chak-je-reul sa-yong-ha-yeo kkae-jin kkot-byeong-eul go-chyeot-seum-ni-da.",
                english: "He used glue to fix the broken vase.",
                lao: "ລາວໃຊ້ກາວເພື່ອຕິດໂຖທີ່ແຕກຫັກ.",
            },
        ],
    },
    {
        id: 17,
        korean: "페인트붓",
        read: "pe-in-teu-but",
        english: "paintbrush",
        lao: "ແປງທາສີ",
        speech: "n",
        examples: [
            {
                id: 1,
                korean: "그녀는 페인트붓을 사용하여 아름다운 예술 작품을 만들었습니다.",
                read: "Geu-nyeo-neun pe-in-teu-but-eul sa-yong-ha-yeo a-reum-da-un ye-sul jak-pum-eul man-deu-reot-seum-ni-da.",
                english: "She used a paintbrush to create a beautiful artwork.",
                lao: "ລາວໄດ້ໃຊ້ແປງສີເພື່ອສ້າງເປັນສິລະປະທີ່ສວຍງາມ.",
            },
        ],
    },
    {
        id: 18,
        korean: "작업대",
        read: "ja-geop-dae",
        english: "workbench",
        lao: "",
        speech: "n",
        examples: [
            {
                id: 1,
                korean: "그는 창고에 튼튼한 작업대를 만들었습니다.",
                read: "Geu-neun chang-go-e teun-teun-han ja-geop-dae-reul man-deu-reot-seum-ni-da.",
                english: "He built a sturdy workbench in his garage.",
                lao: "ລາວສ້າງບ່ອນເຮັດວຽກທີ່ແຂງແຮງຢູ່ໃນບ່ອນຈອດລົດຂອງລາວ.",
            },
        ],
    },
    {
        id: 19,
        korean: "안전 안경",
        read: "an-jeon an-gyeong",
        english: "safety glasses",
        lao: "ແວ່ນ​ຕາ​ຄວາມ​ປອດ​ໄພ​",
        speech: "n",
        examples: [
            {
                id: 1,
                korean: "그는 전기 도구를 사용할 때 안전 안경을 착용합니다.",
                read: "Geu-neun jeon-gi do-gu-reul sa-yong-hal ttae an-jeon an-gyeong-eul chak-yong-ham-ni-da.",
                english:
                    "He wears safety glasses when working with power tools.",
                lao: "",
            },
        ],
    },
    {
        id: 20,
        korean: "작업용 장갑",
        read: "ja-geop-yong jang-gap",
        english: "work gloves",
        lao: "ຖົງມືເຮັດວຽກ",
        speech: "n",
        examples: [
            {
                id: 1,
                korean: "그녀는 정원 일을 할 때 손을 보호하기 위해 작업용 장갑을 착용합니다.",
                read: "Geu-nyeo-neun jeong-won il-eul hal ttae son-eul bo-ho-ha-gi wi-hae ja-geop-yong jang-gap-eul chak-yong-ham-ni-da.",
                english:
                    "She wears work gloves to protect her hands while gardening.",
                lao: "ນາງໃສ່ຖົງມືເຮັດວຽກເພື່ອປ້ອງກັນມືຂອງນາງໃນເວລາເຮັດສວນ.",
            },
        ],
    },
    {
        id: 21,
        korean: "손전등",
        read: "son-jeon-deung",
        english: "flashlight",
        lao: "ໄຟສາຍ",
        speech: "n",
        examples: [
            {
                id: 1,
                korean: "그녀는 어두운 곳에서 길을 찾기 위해 손전등을 사용했습니다.",
                read: "Geu-nyeo-neun eo-du-un got-es-eo gil-eul chajgi wi-hae son-jeon-deung-eul sa-yong-haet-seum-ni-da.",
                english: "She used a flashlight to find her way in the dark.",
                lao: "ນາງໄດ້ໃຊ້ໄຟສາຍເພື່ອຊອກຫາທາງຂອງນາງໃນຄວາມມືດ.",
            },
        ],
    },
];
