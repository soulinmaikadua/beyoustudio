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
import { ABOUT_BODY } from "./about-body";
import { ABOUT_MEATS } from "./about-meats";
import { ABOUT_SCHOOLS } from "./about-schools";
import { ABOUT_COLORS } from "./about-colors";
import { ABOUT_FOOTBALL } from "./about-football";
import { ABOUT_HOUSE } from "./about-house";
import { ABOUT_HOUSE_BEDROOM } from "./about-house-bedroom";
import { ABOUT_HOUSE_BATHROOM } from "./about-house-bathroom";
import { ABOUT_HOUSE_LIVING_DINING } from "./about-house-living-dining-room";
import { ABOUT_HOUSE_GARDEN } from "./about-house-garden";
import { ABOUT_TIMING } from "./about-timing";
import { ABOUT_FAMILY } from "./about-family";
import { ABOUT_PRONOUNS } from "./about-pronouns";
import { ABOUT_SIZE_BEAUTY } from "./about-size-beauty-and-more";
import { ABOUT_MATHS } from "./about-maths";

const URL = `https://beyoustudio.pro/vocabularies`;

export const VOCABULARIES: PageList[] = [
    {
        image: `${URL}/about-pronouns.png`,
        korean: "대명사에 관한 어휘",
        lao: "ຄຳສັບກ່ຽວກັບຄຳນາມ",
        route: "/korean-vocabulary-lists/about-pronouns",
        slug: "about-pronouns",
        data: ABOUT_PRONOUNS,
    },
    {
        image: `${URL}/numeric.png`,
        korean: "숫자에 관한 단어",
        lao: "ຄໍາສັບກ່ຽວກັບຕົວເລກ",
        route: "/korean-vocabulary-lists/numeric",
        slug: "numeric",
        data: NUMERIC,
    },
    {
        image: `${URL}/about-maths.png`,
        korean: "수학에 관한 어휘",
        lao: "ຄໍາ​ສັບ​ຕ່າງໆ​ກ່ຽວ​ກັບ​ຄະ​ນິດ​ສາດ​",
        route: "/korean-vocabulary-lists/about-maths",
        slug: "about-maths",
        data: ABOUT_MATHS,
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
        image: `${URL}/about-football.png`,
        korean: "축구에 관한 어휘",
        lao: "ຄຳສັບກ່ຽວກັບກິລາບານເຕະ​",
        route: "/korean-vocabulary-lists/about-football",
        slug: "about-football",
        data: ABOUT_FOOTBALL,
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
        image: `${URL}/about-house.png`,
        korean: "날짜에 관한 말",
        lao: "ຄໍາສັບກ່ຽວກັບເຮືອນ",
        route: "/korean-vocabulary-lists/about-house",
        slug: "about-house",
        data: ABOUT_HOUSE,
    },
    {
        image: `${URL}/about-house-bedroom.png`,
        korean: "침실에 관한 단어",
        lao: "ຄຳສັບກ່ຽວກັບຫ້ອງນອນ",
        route: "/korean-vocabulary-lists/about-house-bedroom",
        slug: "about-house-bedroom",
        data: ABOUT_HOUSE_BEDROOM,
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
        image: `${URL}/about-house-living-dining-room.png`,
        korean: "거실과 식당에 관한 어휘",
        lao: "ຄຳສັບກ່ຽວກັບຫ້ອງຮັບແຂກ ແລະ ຫ້ອງຮັບປະທານອາຫານ",
        route: "/korean-vocabulary-lists/about-house-living-dining-room",
        slug: "about-house-living-dining-room",
        data: ABOUT_HOUSE_LIVING_DINING,
    },
    {
        image: `${URL}/about-house-bathroom.png`,
        korean: "화장실에 관한 단어",
        lao: "ຄໍາສັບກ່ຽວກັບຫ້ອງນ້ໍາ",
        route: "/korean-vocabulary-lists/about-house-bathroom",
        slug: "about-house-bathroom",
        data: ABOUT_HOUSE_BATHROOM,
    },
    {
        image: `${URL}/about-house-garden.png`,
        korean: "정원에 관한 단어",
        lao: "ຄຳສັບກ່ຽວກັບສວນ",
        route: "/korean-vocabulary-lists/about-house-garden",
        slug: "about-house-garden",
        data: ABOUT_HOUSE_GARDEN,
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
        korean: "기계공의 어휘",
        lao: "ຄໍາສັບກ່ຽວກັບນາຍຊ່າງ",
        route: "/korean-vocabulary-lists/handyman",
        slug: "handyman",
        data: HANDYMAN,
    },
    {
        image: `${URL}/about-body.png`,
        korean: "신체에 관한 어휘",
        lao: "ຄໍາ​ສັບ​ຕ່າງໆ​ກ່ຽວ​ກັບ​ຮ່າງ​ກາຍ​",
        route: "/korean-vocabulary-lists/about-body",
        slug: "about-body",
        data: ABOUT_BODY,
    },
    {
        image: `${URL}/about-meats.png`,
        korean: "고기에 관한 용어",
        lao: "ຄຳສັບກ່ຽວກັບຊີ້ນ",
        route: "/korean-vocabulary-lists/about-meats",
        slug: "about-meats",
        data: ABOUT_MEATS,
    },
    {
        image: `${URL}/about-schools.png`,
        korean: "학교에 관한 어휘",
        lao: "ຄໍາ​ສັບ​ຕ່າງໆ​ກ່ຽວ​ກັບ​ໂຮງ​ຮຽນ​",
        route: "/korean-vocabulary-lists/about-schools",
        slug: "about-schools",
        data: ABOUT_SCHOOLS,
    },
    {
        image: `${URL}/about-timing.png`,
        korean: "타이밍에 관한 용어",
        lao: "ຄຳສັບກ່ຽວກັບເວລາ",
        route: "/korean-vocabulary-lists/about-timing",
        slug: "about-timing",
        data: ABOUT_TIMING,
    },
    {
        image: `${URL}/about-colors.png`,
        korean: "색상에 관한 용어",
        lao: "ຄໍາ​ສັບ​ຕ່າງໆ​ກ່ຽວ​ກັບ​ສີ​​",
        route: "/korean-vocabulary-lists/about-colors",
        slug: "about-colors",
        data: ABOUT_COLORS,
    },
    {
        image: `${URL}/about-family.png`,
        korean: "가족에 관한 용어",
        lao: "ຄໍາ​ສັບ​ຕ່າງໆ​ກ່ຽວ​ກັບ​ຄອບ​ຄົວ​",
        route: "/korean-vocabulary-lists/about-family",
        slug: "about-family",
        data: ABOUT_FAMILY,
    },
    {
        image: `${URL}/about-size-beauty-and-more.png`,
        korean: "크기, 아름다움 등에 관한 어휘",
        lao: "ຄໍາສັບກ່ຽວກັບຂະຫນາດ, ຄວາມງາມ ແລະ ອື່ນໆ",
        route: "/korean-vocabulary-lists/about-size-beauty-and-more",
        slug: "about-size-beauty-and-more",
        data: ABOUT_SIZE_BEAUTY,
    },
];
