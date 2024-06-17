interface VocabList {
    image: string;
    korean: string;
    lao: string;
    route: string;
    slug: string;
    data: any;
}
import { ASKING_BUS_STATION } from "./asking-bus-station";
import { ASKING_DIRECTION_AT_AIRPORT } from "./asking-direction-and-check-in-at-the-airport";
import { A_TIME_TO_MEET } from "./choosing-a-time-to-meet";
import { GREETING_CONVERSATIONS } from "./greeting-conversations";

const URL = `https://beyoustudio.pro/conversations`;

export const CONVERSATIONS: VocabList[] = [
    {
        image: `${URL}/where-you-from.png`,
        korean: "어디서 오셨나요",
        lao: "ເຈົ້າ​ມາ​ຈາກ​ໃສ",
        route: "/korean-conversations/greeting-conversations",
        slug: "greeting-conversations",
        data: GREETING_CONVERSATIONS,
    },
    {
        image: `${URL}/a-time-to-meet.png`,
        korean: "만날 시간을 선택하다",
        lao: "ເລືອກເວລາທີ່ຈະພົບ",
        route: "/korean-conversations/choosing-a-time-to-meet",
        slug: "choosing-a-time-to-meet",
        data: A_TIME_TO_MEET,
    },
    {
        image: `${URL}/asking-direction-at-airport.png`,
        korean: "공항에서",
        lao: "ຢູ່ສະໜາມບິນ",
        route: "/korean-conversations/asking-direction-at-airport",
        slug: "asking-direction-at-airport",
        data: ASKING_DIRECTION_AT_AIRPORT,
    },
    {
        image: `${URL}/asking-bus-station.png`,
        korean: "버스 정류장이 어디에 있습니까",
        lao: "ສະຖານີລົດເມຢູ່ໃສ",
        route: "/korean-conversations/asking-bus-station",
        slug: "asking-bus-station",
        data: ASKING_BUS_STATION,
    },
];
