interface VocabList {
    image: string;
    korean: string;
    lao: string;
    route: string;
    slug: string;
    data: any;
}
import { GREETING_PHRASES } from "./greeting-phrases";
export const PHRASES: VocabList[] = [
    {
        image: "https://dummyimage.com/400x400/000/fff",
        korean: "숫자",
        lao: "ຕົວເລກ",
        route: "/phrases/greeting-phrases",
        slug: "greeting-phrases",
        data: GREETING_PHRASES,
    },
];
