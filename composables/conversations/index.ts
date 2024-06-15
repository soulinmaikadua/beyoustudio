interface VocabList {
    image: string;
    korean: string;
    lao: string;
    route: string;
    slug: string;
    data: any;
}
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
];
