import type { WordModel } from "~/models";

export const TRAVEL_AND_PLACES: WordModel[] = [
    {
        id: 1,
        korean: "버스",
        read: "beo-seu",
        english: "bus",
        lao: "ລົດເມ",
        speech: "n",
        emoji: "🚌",
        examples: [
            {
                id: 1,
                korean: "버스는 15분마다 정류장에 도착합니다.",
                read: "Beo-seu-neun sip-o-bun-ma-da jeong-ryu-jang-e do-chak-ham-ni-da.",
                english: "The bus arrives at the station every 15 minutes.",
                lao: "ລົດເມມາຮອດສະຖານີທຸກໆ 15 ນາທີ.",
            },
        ],
    },
    {
        id: 2,
        korean: "버스 정류장",
        read: "beo-seu jeong-ryu-jang",
        english: "bus stop",
        lao: "ບ່ອນຈອດລົດເມ",
        speech: "n",
        emoji: "🚌",
        examples: [
            {
                id: 1,
                korean: "그녀는 42번 버스를 기다리기 위해 버스 정류장에서 기다렸습니다.",
                read: "Geu-nyeo-neun sa-sip-i-beon beo-seu-reul gi-da-ri-gi wi-hae beo-seu jeong-ryu-jang-e-seo gi-da-ryeot-seum-ni-da.",
                english: "She waited at the bus stop for the number 42 bus.",
                lao: "ລາວລໍຖ້າຢູ່ບ່ອນຈອດລົດເມໝາຍເລກ 42.",
            },
        ],
    },
    {
        id: 3,
        korean: "버스 터미널",
        read: "beo-seu teo-mi-neol",
        english: "bus station",
        lao: "ສະຖານີລົດເມ",
        speech: "n",
        emoji: "🚌",
        examples: [
            {
                id: 1,
                korean: "버스 터미널은 휴가를 떠나는 사람들로 붐빕니다.",
                read: "Beo-seu teo-mi-neol-eun hyu-ga-reul tteo-na-neun sa-ram-deul-lo bum-bip-ni-da.",
                english:
                    "The bus station is crowded with people traveling for the holidays.",
                lao: "ສະຖານີລົດເມແມ່ນແອອັດໄປດ້ວຍຄົນເດີນທາງສໍາລັບວັນພັກ.",
            },
        ],
    },
    {
        id: 4,
        korean: "택시",
        read: "taek-si",
        english: "Taxi",
        lao: "ລົດຕັກຊີ",
        speech: "n",
        emoji: "🚕",
        examples: [
            {
                id: 1,
                korean: "저는 공항에 제시간에 도착하기 위해 택시를 탔습니다.",
                read: "Jeo-neun gong-hang-e je-si-gan-e do-chak-ha-gi wi-hae taek-si-reul ta-sseum-ni-da.",
                english: "I took a taxi to get to the airport on time.",
                lao: "ຂ້ອຍຂີ່ລົດແທັກຊີໄປສະຫນາມບິນໃຫ້ທັນເວລາ.",
            },
        ],
    },
    {
        id: 5,
        korean: "택시 정류장",
        read: "taek-si jeong-ryu-jang",
        english: "taxi stand",
        lao: "ລົດຕັກຊີ",
        speech: "n",
        emoji: "🚕",
        examples: [
            {
                id: 1,
                korean: "실례합니다, 택시 정류장은 어디에서 찾을 수 있나요?",
                read: "Sil-lye-ham-ni-da, taek-si jeong-ryu-jang-eun eo-di-e-seo cha-jeul su it-na-yo?",
                english: "Excuse me, where can I find a taxi stand?",
                lao: "ຂໍໂທດ, ຂ້ອຍສາມາດຊອກຫາບ່ອນຢືນຖ້າ taxi ໄດ້ຢູ່ໃສ?",
            },
        ],
    },
    {
        id: 6,
        korean: "기차",
        read: "gi-cha",
        english: "train",
        lao: "ລົດໄຟ",
        speech: "n",
        emoji: "🚆",
        examples: [
            {
                id: 1,
                korean: "우리는 집으로 돌아가는 마지막 기차를 타야 합니다.",
                read: "U-ri-neun ji-beu-ro do-ra-ga-neun ma-ji-mak gi-cha-reul ta-ya ham-ni-da.",
                english: "We need to catch the last train back home.",
                lao: "ພວກເຮົາຈໍາເປັນຕ້ອງໄດ້ຈັບລົດໄຟສຸດທ້າຍກັບບ້ານ.",
            },
        ],
    },
    {
        id: 7,
        korean: "기차역",
        read: "gi-cha-yeok",
        english: "train station",
        lao: "ສະຖານີລົດໄຟ",
        speech: "n",
        emoji: "🚆",
        examples: [
            {
                id: 1,
                korean: "기차역은 시내에 버스 터미널 옆에 있습니다.",
                read: "Gi-cha-yeok-eun si-nae-e beo-seu teo-mi-neol yeo-pe it-seum-ni-da.",
                english:
                    "The train station is located downtown, next to the bus terminal.",
                lao: "ສະຖານີລົດໄຟຕັ້ງຢູ່ໃຈກາງເມືອງ, ຕິດກັບສະຖານີລົດເມ.",
            },
        ],
    },
    {
        id: 8,
        korean: "지하철",
        read: "ji-ha-cheol",
        english: "subway",
        lao: "ລົດໄຟໃຕ້ດິນ",
        speech: "n",
        emoji: "🚇",
        examples: [
            {
                id: 1,
                korean: "지하철은 도시를 돌아다니기에 가장 빠른 방법입니다.",
                read: "Ji-ha-cheol-eun do-si-reul do-ra-da-ni-gi-e ga-jang ppa-reun bang-beop-im-ni-da.",
                english:
                    "The subway is the fastest way to get around the city.",
                lao: "ລົດໄຟໃຕ້ດິນແມ່ນວິທີທີ່ໄວທີ່ສຸດທີ່ຈະໄປທົ່ວເມືອງ.",
            },
        ],
    },
    {
        id: 9,
        korean: "지하철역",
        read: "ji-ha-cheol-yeok",
        english: "subway station",
        lao: "ສະຖານີລົດໄຟໃຕ້ດິນ",
        speech: "n",
        emoji: "🚇",
        examples: [
            {
                id: 1,
                korean: "지하철역 주변에는 많은 가게와 카페가 있습니다.",
                read: "Ji-ha-cheol-yeok ju-byeon-e-neun ma-neun ga-ge-wa ka-pe-ga it-seum-ni-da.",
                english:
                    "There are many shops and cafes around the subway station.",
                lao: "ມີຮ້ານຄ້າ ແລະ ຮ້ານກາເຟຫຼາຍແຫ່ງຢູ່ອ້ອມຮອບສະຖານີລົດໄຟໃຕ້ດິນ.",
            },
        ],
    },
    {
        id: 10,
        korean: "자전거",
        read: "ji-ha-cheol",
        english: "bicycle",
        lao: "ລົດ​ຖີບ",
        speech: "n",
        emoji: "🚲",
        examples: [
            {
                id: 1,
                korean: "근처에 자전거 대여점이 있나요?",
                read: "Geun-cheo-e ja-jeon-geo dae-yeo-jeom-i it-na-yo?",
                english: "Is there a bicycle rental shop nearby?",
                lao: "ມີຮ້ານເຊົ່າລົດຖີບຢູ່ໃກ້ໆບໍ?",
            },
            {
                id: 2,
                korean: "저는 매일 자전거를 타고 출근합니다.",
                read: "Jeo-neun mae-il ja-jeon-geo-reul ta-go chul-geun-ham-ni-da.",
                english: "I ride my bicycle to work every day.",
                lao: "ຂ້ອຍຂີ່ລົດຖີບໄປເຮັດວຽກທຸກໆມື້.",
            },
        ],
    },
    {
        id: 11,
        korean: "공항",
        read: "gong-hang",
        english: "airport",
        lao: "ສະ​ຫນາມ​ບິນ",
        speech: "n",
        emoji: "🛫",
        examples: [
            {
                id: 1,
                korean: "실례합니다, 이 공항에서 체크인 카운터는 어디에 있나요?",
                read: "Sil-lye-ham-ni-da, i gong-hang-e-seo che-keu-in ka-un-teo-neun eo-di-e it-na-yo?",
                english:
                    "Excuse me, where is the check-in counter at this airport?",
                lao: "ຂໍໂທດ, ເຄົາເຕີເຊັກອິນຢູ່ສະໜາມບິນນີ້ຢູ່ໃສ?",
            },
            {
                id: 2,
                korean: "우리는 비행기 출발 두 시간 전에 공항에 도착해야 합니다.",
                read: "U-ri-neun bi-haeng-gi chul-bal du si-gan jeon-e gong-hang-e do-chak-hae-ya ham-ni-da.",
                english:
                    "We need to arrive at the airport two hours before our flight.",
                lao: "ພວກເຮົາຕ້ອງໄປຮອດສະໜາມບິນສອງຊົ່ວໂມງກ່ອນຖ້ຽວບິນຂອງພວກເຮົາ.",
            },
        ],
    },
    {
        id: 12,
        korean: "비행기",
        read: "bi-haeng-gi",
        english: "airplane",
        lao: "ລົດ​ຖີບ",
        speech: "n",
        emoji: "🛩",
        examples: [
            {
                id: 1,
                korean: "비행기는 30분 후에 이륙할 것입니다.",
                read: "Bi-haeng-gi-neun sam-sip-bun hu-e i-ryuk-hal geo-sim-ni-da.",
                english: "The airplane will take off in 30 minutes.",
                lao: "ຍົນຈະອອກໃນ 30 ນາທີ.",
            },
        ],
    },
    {
        id: 13,
        korean: "비자",
        read: "bi-ja",
        english: "visa",
        lao: "ວີຊາ",
        speech: "n",
        emoji: "📄",
        examples: [
            {
                id: 1,
                korean: "저는 한국에 가기 위해 비자를 신청해야 합니다.",
                read: "Jeo-neun Han-guk-e ga-gi wi-hae bi-ja-reul sin-cheong-hae-ya ham-ni-da.",
                english: "I need to apply for a visa to go to Korea.",
                lao: "ຂ້ອຍຈໍາເປັນຕ້ອງຂໍວີຊາເພື່ອໄປເກົາຫລີ.",
            },
        ],
    },
    {
        id: 14,
        korean: "여권",
        read: "yeog-won",
        english: "passport",
        lao: "ໜັງສືຜ່ານແດນ",
        speech: "n",
        emoji: "🪪",
        examples: [
            {
                id: 1,
                korean: "해외여행할 때 여권을 잊지 말고 가져가세요.",
                read: "Hae-oe-yeo-haeng-hal ttae yeo-gwon-eul it-ji mal-go ga-jyeo-ga-se-yo.",
                english:
                    "Don't forget to bring your passport when you travel abroad.",
                lao: "ຢ່າລືມເອົາຫນັງສືຜ່ານແດນຂອງທ່ານໄປຕ່າງປະເທດ.",
            },
        ],
    },
    {
        id: 15,
        korean: "호텔",
        read: "ho-tel",
        english: "hotel",
        lao: "ລົດ​ຖີບ",
        speech: "n",
        emoji: "🏨",
        examples: [
            {
                id: 1,
                korean: "실례합니다, 호텔로 가는 길을 알려주시겠어요?",
                read: "Sil-lye-ham-ni-da, ho-tel-lo ga-neun gil-eul al-lyeo-ju-si-ge-seo-yo?",
                english:
                    "Excuse me, could you tell me how to get to the hotel?",
                lao: "ຂໍໂທດ, ເຈົ້າບອກຂ້ອຍໄດ້ບໍວ່າໄປໂຮງແຮມໄດ້ແນວໃດ?",
            },
            {
                id: 2,
                korean: "저는 해변 근처에 있는 호텔을 예약했습니다.",
                read: "Jeo-neun hae-byeon geun-cheo-e it-neun ho-tel-eul ye-yak-haet-seum-ni-da.",
                english: "I made a reservation at a hotel near the beach.",
                lao: "ຂ້ອຍໄດ້ສັ່ງຈອງຢູ່ໂຮງແຮມໃກ້ຫາດຊາຍ.",
            },
        ],
    },
    {
        id: 16,
        korean: "게스트하우스",
        read: "ge-seu-teu-ha-u-seu",
        english: "guesthouse",
        lao: "ເຮືອນ​ພັກ",
        speech: "n",
        emoji: "🏠",
        examples: [
            {
                id: 1,
                korean: "근처에 좋은 게스트하우스를 추천해 주시겠어요?",
                read: "Geun-cheo-e jo-eun ge-seu-teu-ha-u-seu-reul chu-cheon-hae ju-si-ge-seo-yo?",
                english: "Can you recommend a good guesthouse nearby?",
                lao: "ທ່ານສາມາດແນະນໍາເຮືອນພັກທີ່ດີຢູ່ໃກ້ໆໄດ້ບໍ?",
            },
        ],
    },
    {
        id: 17,
        korean: "대사관",
        read: "dae-sa-gwan",
        english: "embassy",
        lao: "ສະຖານທູດ",
        speech: "n",
        emoji: "🏭",
        examples: [
            {
                id: 1,
                korean: "여권을 갱신하기 위해 대사관에 가야 합니다.",
                read: "Yeo-gwon-eul gaeng-sin-ha-gi wi-hae dae-sa-gwan-e ga-ya ham-ni-da.",
                english: " I need to visit the embassy to renew my passport.",
                lao: "ຂ້ອຍຈໍາເປັນຕ້ອງໄປຢ້ຽມຢາມສະຖານທູດເພື່ອຕໍ່ອາຍຸຫນັງສືຜ່ານແດນຂອງຂ້ອຍ.",
            },
        ],
    },
    {
        id: 18,
        korean: "은행",
        read: "eun-haeng",
        english: "ATM",
        lao: "ທະນາຄານ",
        speech: "n",
        emoji: "🏦",
        examples: [
            {
                id: 1,
                korean: "실례합니다, 가장 가까운 은행은 어디에 있나요?",
                read: "Sil-lye-ham-ni-da, ga-jang ga-kka-un eun-haeng-eun eo-di-e it-na-yo?",
                english: "Excuse me, where is the nearest bank?",
                lao: "ຂໍໂທດ, ທະນາຄານທີ່ໃກ້ທີ່ສຸດຢູ່ໃສ?",
            },
        ],
    },
    {
        id: 19,
        korean: "현금 자동 인출기",
        read: "hyeon-geum ja-dong in-chul-gi",
        english: "ATM",
        lao: "ລົດ​ຖີບ",
        speech: "n",
        emoji: "🏦",
        examples: [
            {
                id: 1,
                korean: "현금을 인출하기 위해 ATM을 찾아야 해요.",
                read: "Hyeon-geum-eul in-chul-ha-gi wi-hae ATM-eul cha-ja-ya haeyo.",
                english: "I need to find an ATM to withdraw some cash.",
                lao: "ຂ້ອຍຈໍາເປັນຕ້ອງຊອກຫາຕູ້ ATM ເພື່ອຖອນເງິນສົດ.",
            },
        ],
    },
    {
        id: 20,
        korean: "약국",
        read: "yak-guk",
        english: "pharmacy",
        lao: "ຮ້ານຂາຍຢາ",
        speech: "n",
        emoji: "🏡",
        examples: [
            {
                id: 1,
                korean: "약국에서 약을 사야 해요.",
                read: "Yak-guk-e-seo yak-eul sa-ya haeyo.",
                english: "I need to buy some medicine from the pharmacy.",
                lao: "ຂ້ອຍຈໍາເປັນຕ້ອງຊື້ຢາບາງຊະນິດຈາກຮ້ານຂາຍຢາ.",
            },
        ],
    },

    {
        id: 21,
        korean: "병원",
        read: "byeong-wono",
        english: "hospital",
        lao: "ໂຮງໝໍ",
        speech: "n",
        emoji: "🏩",
        examples: [
            {
                id: 1,
                korean: " 그녀는 지역 병원에서 간호사로 일합니다.",
                read: "Geu-nyeo-neun ji-yeok byeong-won-e-seo gan-ho-sa-ro il-ham-ni-da.",
                english: "She works as a nurse at the local hospital.",
                lao: "ລາວເຮັດວຽກເປັນພະຍາບານຢູ່ໃນໂຮງຫມໍທ້ອງຖິ່ນ.",
            },
        ],
    },
    {
        id: 22,
        korean: "클리닉",
        read: "keul-li-nik",
        english: "clinic",
        lao: "ຄລີນິກ",
        speech: "n",
        emoji: "🛩",
        examples: [
            {
                id: 1,
                korean: "그녀는 정기 검진을 위해 클리닉을 방문했습니다.",
                read: "Geu-nyeo-neun jeong-gi geom-jin-eul wi-hae keul-li-nik-eul bang-mun-haet-seum-ni-da.",
                english: "She visited the clinic for her regular check-up.",
                lao: "ລາວໄດ້ໄປຢ້ຽມຢາມຄລີນິກເພື່ອກວດສຸຂະພາບຂອງນາງເປັນປົກກະຕິ.",
            },
        ],
    },
    {
        id: 23,
        korean: "경찰서",
        read: "gyeong-chal-seo",
        english: "police station",
        lao: "ສະ​ຖາ​ນີ​ຕໍາ​ຫຼວດ",
        speech: "n",
        emoji: "👮🏻‍♂️",
        examples: [
            {
                id: 1,
                korean: "실례합니다, 가장 가까운 경찰서는 어디에 있나요?",
                read: "Sil-lye-ham-ni-da, ga-jang ga-kka-un gyeong-chal-seo-neun eo-di-e it-na-yo?",
                english: "Excuse me, where is the nearest police station?",
                lao: "ຂໍໂທດ, ສະຖານີຕຳຫຼວດທີ່ໃກ້ທີ່ສຸດຢູ່ໃສ?",
            },
        ],
    },
];
