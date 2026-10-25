/**
 * Tallinn — Narva, английская версия. Текст написан с нуля: не перевод
 * русской страницы и не пересказ estoniatransfer.ee/en/transfer-tallinn-narva/.
 * Своя тема этой версии — планирование от часов работы перехода (раздел
 * «timing»), такого блока нет ни на одной из тех страниц.
 *
 * ПРОВЕРЬ перед публикацией:
 *  - водитель говорит по-английски: на русской странице ridego написано
 *    «говорит по-русски», на estoniatransfer — «по-русски и по-английски»;
 *  - цены Lux Express и Elron — на август 2026;
 *  - часы перехода 7:00–19:00 по эстонскому времени — на октябрь 2026.
 */
import { facts, pathFor } from "../../i18n/ui";
import type { Landing } from "../landing";

const n = facts.narva;
const eur = (v: number) => `€${v}`;

export const en: Landing = {
  meta: {
    title: `Tallinn to Narva Transfer: ${eur(n.price)} per Car | RideGo`,
    description: `Private car from Tallinn or the airport to the Narva border crossing: ${eur(n.price)} for the whole car, about 2.5 hours. Night departures, no prepayment.`,
    ogTitle: `Tallinn — Narva border transfer, ${eur(n.price)} for the whole car`,
    ogDescription: `${n.km} km from your door to the Narva-1 checkpoint. One fixed fare for up to four passengers, airport pickup included.`,
  },
  crumb: "Tallinn — Narva transfer",
  hero: {
    eyebrow: `Border run · ${eur(n.price)} per car`,
    h1: ["Tallinn to Narva", "by private car"],
    lead: `You give us an address in Tallinn — a flat, a hotel, the airport, the cruise terminal — and we drive you to the foot of the Narva border crossing. It is a ${n.km} km run east along Route 1, and the fare is agreed in writing before you set off.`,
    answer: [
      `<strong>In short:</strong> a private transfer from Tallinn to Narva costs <strong>${eur(n.price)} for the car</strong>, not per seat, and takes about <strong>2 hours 30 minutes</strong>. Up to four passengers with luggage. We drive at any hour, including pre-dawn starts for the morning opening. Airport pickup with flight tracking, a child seat and luggage are part of the fare.`,
      `Need someone to hold a place in the border queue for you? That is ${eur(n.queueSlot)} extra. The Narva crossing is for pedestrians only and is open 7:00–19:00 Estonian time, so we work out your departure from those hours.`,
    ],
    stats: [
      [eur(n.price), "for the whole car"],
      ["≈ 2 h 30 min", "on the road"],
      [`${n.km} km`, "door to checkpoint"],
    ],
    perks: [
      "One fixed fare per car",
      "Airport and port pickup",
      "Free waiting for late flights",
      "Child seat on request",
      "Cash or bank transfer",
    ],
    waText: "Hello! I'd like to book a transfer Tallinn — Narva.",
  },
  sections: [
    {
      id: "price",
      alt: true,
      eyebrow: "Fare",
      title: `One fare for the whole car: ${eur(n.price)}`,
      lead: "The price belongs to the journey, not to the headcount. Travelling solo or as a family of four, with a backpack or with five suitcases, at noon or at 4 a.m. — the number stays the same.",
      blocks: [
        {
          type: "table",
          caption: "Tallinn — Narva transfer: fare and optional extras",
          cols: ["Item", "Price", "What it means"],
          rows: [
            [`Tallinn → Narva border`, eur(n.price), "the whole car, up to 4 passengers and their luggage"],
            [`Narva → Tallinn`, eur(n.price), `same fare in the opposite direction — <a href="${pathFor("narva-tallinn", "en")}">the return route</a>`],
            ["Held place in the border queue", `+${eur(n.queueSlot)}`, "someone keeps your spot so you are not standing in line for hours"],
            ["Pickup at the airport or port", "€0", "name board at arrivals, waiting for a delayed flight is not charged"],
            ["Night start, child seat, bags", "€0", "no surcharges for the hour, for luggage or for a child seat"],
          ],
        },
        {
          type: "tip",
          html: "<strong>Paying.</strong> Cash to the driver or a bank transfer, in euros, after the trip — we never ask for a deposit. Before the day you get the fare and pickup time in a message, so the agreement is in writing.",
        },
        {
          type: "text",
          h3: "Who the per-car fare works out best for",
          html: `Couples, families and anyone travelling with heavy bags. A coach ticket is cheap for one person, but three adults pay three times, then still have to get from Narva bus station to the border with their luggage. With a private car the ${eur(n.price)} is split however you like, and the car stops at the checkpoint itself.`,
        },
      ],
    },
    {
      id: "timing",
      eyebrow: "Planning",
      title: "Work backwards from the border's opening hours",
      lead: "The road is predictable; the crossing is not. Narva-1 opens at 7:00 and closes at 19:00 Estonian time, and the queue on foot can take anything from half an hour to several hours. That is why we pick your departure time from the border end, not from Tallinn.",
      narrow: true,
      blocks: [
        {
          type: "table",
          caption: "Suggested departure times from Tallinn (Estonian time)",
          cols: ["Your plan", "Leave Tallinn", "Why"],
          rows: [
            ["Be at the gate when it opens", "about 4:15", "you arrive just before 7:00, ahead of the coaches and the morning crowd"],
            ["Cross during the day", "8:00–11:00", "the easiest window: no pre-dawn start and plenty of time before closing"],
            ["Latest sensible start", "about 14:00", "leaves a margin of a few hours for the queue before 19:00"],
          ],
        },
        {
          type: "text",
          h3: "Winter time: the clocks on the two banks differ",
          html: "From 25 October 2026 Estonia is one hour behind Moscow. The crossing keeps its 7:00–19:00 Estonian hours, which on the Ivangorod side reads as 8:00–20:00. If a train or a bus is waiting for you in Russia, check which clock its timetable uses — this catches people out every autumn.",
        },
        {
          type: "text",
          h3: "If something runs late",
          html: "A flight lands late, a ferry is delayed, the queue is longer than expected — tell us, and we move the pickup. If it becomes clear you will not make it across before closing, we say so honestly and help you decide between a night in Narva and a crossing at Koidula, which you can cross by car.",
        },
      ],
    },
    {
      id: "airport",
      alt: true,
      eyebrow: "Airport",
      title: "Straight from Tallinn airport to the Narva border",
      lead: "Landing at Lennart Meri and heading east the same day is the single most common request we get on this route. The airport sits about 4 km from the city centre, so the drive to Narva starts at the terminal door.",
      narrow: true,
      blocks: [
        {
          type: "text",
          h3: "Send the flight number, the rest is on us",
          html: "Include your flight number in the booking message. The driver follows the arrival himself and waits past baggage reclaim with a <strong>RideGo</strong> sign — you do not need to message when you land or explain where you are standing.",
        },
        {
          type: "text",
          h3: "A delayed flight costs you nothing",
          html: "The meeting time shifts with the actual landing, and the fare does not change. This is the main reason to book in advance rather than look for a car outside: late at night there are few drivers at the rank, and fewer still who want a 220 km trip.",
        },
        {
          type: "text",
          h3: "Cruise terminal, stations or any address",
          html: "Same fare and same arrangement if you arrive by ship at the Old City Harbour, by train at Balti jaam or at the coach station. Give us the ship's name or the train time. We also collect from home addresses anywhere in Tallinn.",
        },
        { type: "button", label: "Book an airport pickup", waText: "Hello! I need a transfer from Tallinn airport to Narva. Flight number: " },
      ],
    },
    {
      eyebrow: "How it works",
      title: "From first message to the checkpoint",
      blocks: [
        {
          type: "steps",
          items: [
            {
              title: "Write to us",
              text: "Date, time, pickup address and number of passengers. Flying in? Add the flight number. The driver himself replies, usually within minutes.",
            },
            {
              title: "Get it in writing",
              text: "We confirm the fare, the car and the pickup time in one message. Nothing to pay in advance, nothing to sign.",
            },
            {
              title: "The drive east",
              text: "Route 1 through Rakvere and Jõhvi, about two and a half hours. Want a coffee stop or a stretch on the way? Just say — it is built into the timing.",
            },
            {
              title: "Drop-off at Narva-1",
              text: "We stop by the pedestrian checkpoint at the bridge to Ivangorod. From here you cross on foot; how long it takes depends on the queue that day.",
            },
          ],
        },
      ],
    },
    {
      eyebrow: "The car",
      title: "Your car and your driver",
      alt: true,
      narrow: true,
      blocks: [
        {
          type: "photo",
          src: "/images/car-1.jpg",
          alt: "RideGo Toyota Corolla used for the Tallinn to Narva transfer, front view",
          caption: `${facts.car} — this is the actual car that comes to pick you up.`,
          width: 1200,
          height: 675,
        },
        {
          type: "text",
          html: `A ${facts.car} with a leather interior, climate control and four passenger seats; the boot takes two large suitcases plus cabin bags. It is the driver's own car rather than a rotating fleet vehicle, and it is kept that way. Winter tyres from the first frost, working air conditioning in summer — on a two-and-a-half-hour drive you notice both.`,
        },
        {
          type: "text",
          html: `${facts.driver} drives and also answers WhatsApp and Telegram, so you speak directly to the person who will take you — no dispatcher in between. He speaks Russian and English.`,
        },
      ],
    },
    {
      eyebrow: "Alternatives",
      title: "Coach, train, taxi or a private car to Narva",
      lead: "A fair comparison: if you travel alone with a light bag, the coach is far cheaper and we will tell you so. A private car wins on early starts, on door-to-checkpoint convenience and on groups.",
      blocks: [
        {
          type: "table",
          caption: "Ways to get from Tallinn to the Narva border: price, time and the catch",
          cols: ["Option", "Price", "Time", "Worth knowing"],
          rows: [
            ["RideGo private transfer", `${eur(n.price)} per car`, "≈ 2 h 30 min", "from your door to the checkpoint, any hour, fare fixed in advance"],
            ["Metered taxi", "unknown until you arrive", "≈ 2 h 30 min", "many drivers refuse long trips; the empty return leg ends up on your bill"],
            ["Lux Express coach", "from €9 per person", "≈ 3 h", "cheapest option, but fixed times and coach station to coach station"],
            ["Elron train", "€13–23 per person", "≈ 2 h 50 min", "a few departures a day, then a walk across Narva to the border"],
          ],
        },
        {
          type: "tip",
          html: "<strong>When a car is worth it.</strong> You want to be at the border for the 7:00 opening, before the first coach arrives. You land at night. You travel with a child, a pushchair or four suitcases. Or you are coming back — at the Narva crossing there is almost never a taxi waiting.",
        },
      ],
    },
    {
      eyebrow: "The crossing",
      title: "Narva-1 checkpoint in brief",
      narrow: true,
      blocks: [
        {
          type: "details",
          items: [
            {
              open: true,
              title: "Pedestrians only",
              html: "Cars are not let through at Narva: you walk over the bridge across the Narva river into Ivangorod. That is why we take you to the checkpoint and you go on from there. To cross with a vehicle, the options are Koidula or Luhamaa further south.",
            },
            {
              title: "Hours and the queue",
              html: "7:00 to 19:00 Estonian time; the crossing is closed overnight. Pedestrians do not book a slot in GoSwift, but at weekends and around holidays a queue builds up — allow for it. Current rules are published by the Police and Border Guard Board at <a href=\"https://www.politsei.ee/en\" target=\"_blank\" rel=\"noopener\">politsei.ee</a>.",
            },
            {
              title: "Missed the closing time?",
              html: "Then it is a night in Narva and a crossing in the morning. There are hotels within walking distance of the bridge, including budget ones; before holidays they fill up early, so book ahead.",
            },
            {
              title: "Useful phone numbers",
              html: "Narva-1 checkpoint: <a href=\"tel:+3723331600\">+372 333 1600</a>. Ivangorod, Russian side: <a href=\"tel:+78137552978\">+7 81375 5-29-78</a>. Police and Border Guard Board general line: <a href=\"tel:+3726123000\">+372 612 3000</a>.",
            },
          ],
        },
      ],
    },
  ],
  faq: {
    eyebrow: "Questions",
    title: "Tallinn to Narva transfer: questions we get asked",
    items: [
      {
        q: "How much is a transfer from Tallinn to Narva?",
        a: `${eur(n.price)} for the whole car, whatever the number of passengers, bags or the time of day — nights and holidays included. The only optional extra is a held place in the border queue at ${eur(n.queueSlot)}. You pay after the trip, in cash or by bank transfer.`,
      },
      {
        q: "How long is the drive from Tallinn to the Narva border?",
        a: `Roughly 2 hours 30 minutes for the ${n.km} km along Route 1 via Rakvere and Jõhvi. Heavy snow or traffic can add time. If you have a connection on the Russian side, leave a margin — no car can make the border queue shorter.`,
      },
      {
        q: "Can you pick me up at Tallinn airport and drive straight to Narva?",
        a: "Yes. Send your flight number and the driver will track it and meet you at arrivals with a sign. Waiting after landing is free, and a delay does not change the fare. The same goes for the cruise terminal, Balti jaam station and the coach station.",
      },
      {
        q: "Is a private transfer better than a taxi from Tallinn to Narva?",
        a: "The fare is fixed before you leave and does not grow with traffic, the car is reserved for you, and the driver knows you are going to the border checkpoint, not to the town centre. City taxis rarely want an out-of-town fare, and when they take it, the empty drive back is in the price.",
      },
      {
        q: "Do you also drive from Narva back to Tallinn?",
        a: `Yes, for the same ${eur(n.price)} — see <a href="${pathFor("narva-tallinn", "en")}">Narva to Tallinn</a>. Arrange it in advance: taxis hardly ever wait at the crossing, especially in the evening. You can book both directions in a single message.`,
      },
    ],
  },
  links: {
    eyebrow: "More routes",
    title: "Other routes we drive",
    note: "Routes without an English page yet open WhatsApp with the route already filled in.",
    items: [
      { label: "Narva — Tallinn", price: eur(n.price), page: "narva-tallinn", waText: "Hello! I'd like to book a transfer Narva — Tallinn." },
      { label: "Tallinn — Koidula", price: eur(facts.koidula.price), page: "tallinn-koidula", waText: "Hello! I'd like to book a transfer Tallinn — Koidula." },
      { label: "Tallinn — Luhamaa", price: eur(facts.luhamaa.price), page: "tallinn-luhamaa", waText: "Hello! I'd like to book a transfer Tallinn — Luhamaa." },
      { label: "Tartu — Koidula or Luhamaa", price: eur(facts.tartu.price), page: "tartu-koidula-luhamaa", waText: "Hello! I'd like to book a transfer from Tartu to the border." },
    ],
  },
  cta: {
    title: "Heading for Narva?",
    text: "Send the date, time and pickup address — we reply with the car, the fare and the exact departure time in one message.",
    call: "Call us",
  },
  schema: {
    name: "Tallinn — Narva transfer",
    alternateName: ["Taxi Tallinn to Narva", "Tallinn airport to Narva transfer", "Narva border transfer"],
    serviceType: "Private transfer to a border crossing",
    description: `Private transfer from Tallinn to the Narva border crossing: ${n.km} km, about 2 h 30 min, ${eur(n.price)} for the whole car. Pickup at Tallinn airport and the cruise terminal, available around the clock.`,
    areaServed: ["Tallinn", "Narva"],
    offers: [
      { name: "Transfer Tallinn — Narva, car for up to 4 passengers", price: n.price },
      { name: "Held place in the border queue", price: n.queueSlot },
    ],
    breadcrumbHome: "RideGo",
  },
};
