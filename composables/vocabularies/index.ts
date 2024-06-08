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
import { ANIMALS } from "./animals";
import { SPORTS } from "./sports";
import { VEGETABLES } from "./vegetables";
import { DATES } from "./dates";

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
        route: "/korean-vocabulary-lists/days",
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
        image: "https://dummyimage.com/400x400/000/fff",
        korean: "과일",
        lao: "ໝາກໄມ້",
        route: "/korean-vocabulary-lists/fruit",
        slug: "fruit",
        data: FRUIT,
    },
    {
        image: "https://dummyimage.com/400x400/000/fff",
        korean: "동물의 종류",
        lao: "ປະເພດສັດ",
        route: "/korean-vocabulary-lists/animals",
        slug: "animals",
        data: ANIMALS,
    },
    {
        image: "https://dummyimage.com/400x400/000/fff",
        korean: "스포츠",
        lao: "ກິລາ",
        route: "/korean-vocabulary-lists/sports",
        slug: "sports",
        data: SPORTS,
    },
    {
        image: "https://dummyimage.com/400x400/000/fff",
        korean: "스포츠",
        lao: "ກິລາ",
        route: "/korean-vocabulary-lists/vegetables",
        slug: "vegetables",
        data: VEGETABLES,
    },
    {
        image: "https://dummyimage.com/400x400/000/fff",
        korean: "스포츠",
        lao: "ກິລາ",
        route: "/korean-vocabulary-lists/dates",
        slug: "dates",
        data: DATES,
    },
];
