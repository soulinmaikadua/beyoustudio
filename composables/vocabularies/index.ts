interface VocabList {
    image: string;
    korean: string;
    lao: string;
    route: string;
    slug: string;
    data: any;
}
import { NUMERIC } from "./numeric";
import { JOBS } from "./jobs";
import { DAYS } from "./days";
import { MONTHS } from "./months";
import { FRUIT } from "./fruit";
export const VOCABULARIES: VocabList[] = [
    {
        image: "https://dummyimage.com/400x400/000/fff",
        korean: "숫자",
        lao: "ຕົວເລກ",
        route: "/korean-vocabulary-lists/numeric",
        slug: "numeric",
        data: NUMERIC,
    },
    {
        image: "https://dummyimage.com/400x400/000/fff",
        korean: "직업",
        lao: "ອາຊີບ",
        route: "/korean-vocabulary-lists/jobs",
        slug: "jobs",
        data: JOBS,
    },
    {
        image: "https://dummyimage.com/400x400/000/fff",
        korean: "날",
        lao: "ມື້",
        route: "/korean-vocabulary-lists/talking-about-days",
        slug: "days",
        data: DAYS,
    },
    {
        image: "https://dummyimage.com/400x400/000/fff",
        korean: "날",
        lao: "ເດືອນ",
        route: "/korean-vocabulary-lists/months",
        slug: "months",
        data: MONTHS,
    },
    {
        image: "/assets/images/fruit.jpg",
        korean: "날",
        lao: "ເດືອນ",
        route: "/korean-vocabulary-lists/fruit",
        slug: "fruit",
        data: FRUIT,
    },
];
