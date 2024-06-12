interface VocabList {
    image: string;
    korean: string;
    lao: string;
    route: string;
    slug: string;
    data: any;
}
import { GREETING_CONVERSATIONS } from "./greeting-conversations";
export const CONVERSATIONS: VocabList[] = [
    {
        image: "https://dummyimage.com/400x400/000/fff",
        korean: "인사말 문구",
        lao: "ປະໂຫຍກທັກທາຍ",
        route: "/korean-phrases/greeting-conversations",
        slug: "greeting-conversations",
        data: GREETING_CONVERSATIONS,
    },
];
