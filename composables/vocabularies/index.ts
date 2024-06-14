import type { PageList } from "~/models";

import { NUMERIC } from "./numeric";
import { JOBS } from "./jobs";
import { DAYS } from "./days";
import { MONTHS } from "./months";
import { FRUIT } from "./fruit";
import { ANIMALS } from "./animals";
import { SPORTS } from "./sports";
import { VEGETABLES } from "./vegetables";
import { DATES } from "./dates";
import { KITCHEN } from "./kitchen";
import { CLOTHING } from "./clothing";
import { TRAVEL_AND_PLACES } from "./travel-places";
import { HANDYMAN } from "./handyman";
const URL = `https://beyoustudio.pro/vocabularies`;
export const VOCABULARIES: PageList[] = [
    {
        image: `${URL}/numeric.png`,
        korean: "숫자에 관한 단어",
        lao: "ຄໍາສັບກ່ຽວກັບຕົວເລກ",
        route: "/korean-vocabulary-lists/numeric",
        slug: "numeric",
        data: NUMERIC,
    },
    {
        image: `${URL}/days.png`,
        korean: "일에 관한 말",
        lao: "ຄໍາ​ສັບ​ຕ່າງໆ​ກ່ຽວ​ກັບ​ວັນ​",
        route: "/korean-vocabulary-lists/days",
        slug: "days",
        data: DAYS,
    },
    {
        image: `${URL}/dates.png`,
        korean: "날짜에 관한 말",
        lao: "ຄໍາສັບກ່ຽວກັບວັນທີ",
        route: "/korean-vocabulary-lists/dates",
        slug: "dates",
        data: DATES,
    },
    {
        image: `${URL}/months.png`,
        korean: "개월에 관한 단어",
        lao: "ຄໍາ​ສັບ​ຕ່າງໆ​ກ່ຽວ​ກັບ​ເດືອນ​",
        route: "/korean-vocabulary-lists/months",
        slug: "months",
        data: MONTHS,
    },
    {
        image: `${URL}/jobs.png`,
        korean: "직업에 관한 말",
        lao: "ຄໍາສັບກ່ຽວກັບອາຊີບ",
        route: "/korean-vocabulary-lists/jobs",
        slug: "jobs",
        data: JOBS,
    },
    {
        image: `${URL}/fruits.png`,
        korean: "과일에 관한 말",
        lao: "ຄໍາ​ສັບ​ຕ່າງໆ​ກ່ຽວ​ກັບ​ຫມາກ​ໄມ້​",
        route: "/korean-vocabulary-lists/fruit",
        slug: "fruit",
        data: FRUIT,
    },
    {
        image: `${URL}/animals.png`,
        korean: "동물에 관한 말",
        lao: "ຄໍາ​ສັບ​ຕ່າງໆ​ກ່ຽວ​ກັບ​ປະເພດສັດ",
        route: "/korean-vocabulary-lists/animals",
        slug: "animals",
        data: ANIMALS,
    },
    {
        image: `${URL}/sports.png`,
        korean: "스포츠에 관한 말",
        lao: "ຄໍາ​ສັບ​ຕ່າງໆ​ກ່ຽວ​ກັບ​ການ​ກິ​ລາ​",
        route: "/korean-vocabulary-lists/sports",
        slug: "sports",
        data: SPORTS,
    },
    {
        image: `${URL}/vegetables.png`,
        korean: "야채에 관한 말",
        lao: "ຄໍາ​ສັບ​ຕ່າງໆ​ກ່ຽວ​ກັບ​ຜັກ​",
        route: "/korean-vocabulary-lists/vegetables",
        slug: "vegetables",
        data: VEGETABLES,
    },
    {
        image: `${URL}/kitchen.png`,
        korean: "날짜에 관한 말",
        lao: "ຄໍາສັບກ່ຽວກັບເຮືອນຄົວ",
        route: "/korean-vocabulary-lists/kitchen",
        slug: "kitchen",
        data: KITCHEN,
    },
    {
        image: `${URL}/clothing.png`,
        korean: "날짜에 관한 말",
        lao: "ຄໍາສັບກ່ຽວກັບເຄື່ອງນຸ່ງຫົ່ມ",
        route: "/korean-vocabulary-lists/clothing",
        slug: "clothing",
        data: CLOTHING,
    },
    {
        image: `${URL}/travel-places.png`,
        korean: "날짜에 관한 말",
        lao: "ຄໍາສັບກ່ຽວກັບພາຫະນະ ແລະ ສະຖານທີ",
        route: "/korean-vocabulary-lists/travel-and-places",
        slug: "travel-and-places",
        data: TRAVEL_AND_PLACES,
    },
    {
        image: `${URL}/handyman.png`,
        korean: "날짜에 관한 말",
        lao: "ຄໍາສັບກ່ຽວກັບພາຫະນະ ແລະ ສະຖານທີ",
        route: "/korean-vocabulary-lists/handyman",
        slug: "handyman",
        data: HANDYMAN,
    },
];
