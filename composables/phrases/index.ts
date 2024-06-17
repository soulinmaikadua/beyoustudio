import type { PageList } from "~/models";
import { GREETING_PHRASES } from "./greeting-phrases";
import { INTRODUCE_YOURSELF } from "./introduce-yourself";
import { INTRODUCE_SMALL_TALK } from "./small-talk";
import { INTRODUCE_DAILY_ROUTINES } from "./daily-routines";

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
    {
        image: `${URL}/small-talk.png`,
        korean: "짧은 문장",
        lao: "ປະໂຫຍກສັ້ນ",
        route: "/korean-phrases/small-talk",
        slug: "small-talk",
        data: INTRODUCE_SMALL_TALK,
    },
    {
        image: `${URL}/daily-routines.png`,
        korean: "일상에 관한 문장",
        lao: "ປະໂຫຍກກ່ຽວກັບກິດຈະວັດປະຈໍາວັນ",
        route: "/korean-phrases/daily-routines",
        slug: "daily-routines",
        data: INTRODUCE_DAILY_ROUTINES,
    },
];
