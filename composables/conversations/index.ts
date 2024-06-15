interface VocabList {
    image: string;
    korean: string;
    lao: string;
    route: string;
    slug: string;
    data: any;
}
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
];
