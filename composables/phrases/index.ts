interface VocabList {
    image: string;
    korean: string;
    lao: string;
    route: string;
    slug: string;
    data: any;
}
import { GREETING_PHRASES } from "./greeting-phrases";
import { INTRODUCE_YOURSELF } from "./introduce-yourself";
export const PHRASES: VocabList[] = [
    {
        image: "https://dummyimage.com/400x400/000/fff",
        korean: "인사말 문구",
        lao: "ປະໂຫຍກທັກທາຍ",
        route: "/korean-phrases/greeting-phrases",
        slug: "greeting-phrases",
        data: GREETING_PHRASES,
    },
    {
        image: "https://dummyimage.com/400x400/000/fff",
        korean: "인사말 문구",
        lao: "ປະໂຫຍກທັກທາຍ",
        route: "/korean-phrases/introduce-yourself",
        slug: "introduce-yourself",
        data: INTRODUCE_YOURSELF,
    },
];
