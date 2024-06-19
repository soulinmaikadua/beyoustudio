import type { PageList } from "~/models";
import { GREETING_PHRASES } from "./greeting-phrases";
import { INTRODUCE_YOURSELF } from "./introduce-yourself";
import { INTRODUCE_SMALL_TALK } from "./small-talk";
import { INTRODUCE_DAILY_ROUTINES } from "./daily-routines";
import { LEARNING_A_LANGUAGE } from "./whats-your-reason-for-learning-a-language";
import { TO_SAY_SORRY } from "./common-ways-to-say-sorry";

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
    {
        image: `${URL}/whats-your-reason-for-learning-a-language.png`,
        korean: "당신이 언어를 배우는 이유는 무엇입니까?",
        lao: "ເຫດຜົນຫຍັງທີ່ເຮັດໃຫ້ເຈົ້າຮຽນພາສາ",
        route: "/korean-phrases/whats-your-reason-for-learning-a-language",
        slug: "whats-your-reason-for-learning-a-language",
        data: LEARNING_A_LANGUAGE,
    },
    {
        image: `${URL}/to-say-sorry.png`,
        korean: "미안하다고 말하는 일반적인 방법",
        lao: "ວິທີການຄຳຂໍໂທດ",
        route: "/korean-phrases/to-say-sorry",
        slug: "to-say-sorry",
        data: TO_SAY_SORRY,
    },
];
