import type { PageList } from "~/models";
import { GREETING_PHRASES } from "./greeting-phrases";
import { INTRODUCE_YOURSELF } from "./introduce-yourself";

const URL = `https://beyoustudio.pro/phrases`;

export const PHRASES: PageList[] = [
    {
        image: `${URL}/greeting-phrases.png`,
        korean: "인사말 문구",
        lao: "ປະໂຫຍກທັກທາຍ",
        route: "/korean-phrases/greeting-phrases",
        slug: "greeting-phrases",
        data: GREETING_PHRASES,
    },
    {
        image: `${URL}/introduce-yourself.png`,
        korean: "인사말 문구",
        lao: "ປະໂຫຍກທັກທາຍ",
        route: "/korean-phrases/introduce-yourself",
        slug: "introduce-yourself",
        data: INTRODUCE_YOURSELF,
    },
];
