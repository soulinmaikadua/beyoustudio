interface VocabList {
    image: string;
    korean: string;
    lao: string;
    route: string;
    slug: string;
    data: any;
}
import { ASKING_BUS_STATION } from "./asking-bus-station";
import { ASKING_DIRECTION_AT_AIRPORT } from "./asking-direction-and-check-in-at-the-airport";
import { BOOKING_A_RESTAURANT } from "./booking-a-restaurant";
import { A_TIME_TO_MEET } from "./choosing-a-time-to-meet";
import { GREETING_CONVERSATIONS } from "./greeting-conversations";
import { ORDERING_FOOD } from "./ordering-food-at-restaurant";

const URL = `https://beyoustudio.pro/conversations`;

export const CONVERSATIONS: VocabList[] = [
    {
        image: `${URL}/where-you-from.png`,
        korean: "어디서 오셨나요",
        lao: "ເຈົ້າ​ມາ​ຈາກ​ໃສ",
        route: "/korean-conversations/greeting-conversations",
        slug: "greeting-conversations",
        data: GREETING_CONVERSATIONS,
    },
    {
        image: `${URL}/a-time-to-meet.png`,
        korean: "만날 시간을 선택하다",
        lao: "ເລືອກເວລາທີ່ຈະພົບ",
        route: "/korean-conversations/choosing-a-time-to-meet",
        slug: "choosing-a-time-to-meet",
        data: A_TIME_TO_MEET,
    },
    {
        image: `${URL}/asking-direction-at-airport.png`,
        korean: "공항에서",
        lao: "ຢູ່ສະໜາມບິນ",
        route: "/korean-conversations/asking-direction-at-airport",
        slug: "asking-direction-at-airport",
        data: ASKING_DIRECTION_AT_AIRPORT,
    },
    {
        image: `${URL}/asking-bus-station.png`,
        korean: "버스 정류장이 어디에 있습니까",
        lao: "ສະຖານີລົດເມຢູ່ໃສ",
        route: "/korean-conversations/asking-bus-station",
        slug: "asking-bus-station",
        data: ASKING_BUS_STATION,
    },
    {
        image: `${URL}/booking-a-restaurant.png`,
        korean: "레스토랑 예약",
        lao: "ຈອງຮ້ານອາຫານ",
        route: "/korean-conversations/booking-a-restaurant",
        slug: "booking-a-restaurant",
        data: BOOKING_A_RESTAURANT,
    },
    {
        image: `${URL}/ordering-food-at-restaurant.png`,
        korean: "레스토랑에서 음식 주문하기",
        lao: "ສັ່ງອາຫານຢູ່ຮ້ານອາຫານ",
        route: "/korean-conversations/ordering-food-at-restaurant",
        slug: "ordering-food-at-restaurant",
        data: ORDERING_FOOD,
    },
];
