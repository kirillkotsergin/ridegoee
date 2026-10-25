/**
 * Tallinn — Luhamaa, английская версия. Написана с нуля. Своя тема — «до
 * перехода не идёт никакой транспорт»: честный разбор вариантов, включая
 * совет ехать автобусом в Нарву, если вы один и налегке (раздел «no-bus»).
 * Сравнение Narva/Koidula уже есть на английской Койдуле, здесь — только
 * короткое «Luhamaa or Koidula».
 *
 * ПРОВЕРЬ перед публикацией:
 *  - пропускают ли в Лухамаа пешеходов (как и в Койдуле, см. tallinn-koidula/en.ts);
 *  - Выру — Лухамаа ~30 км и отсутствие рейсов до Люты — из гида, август 2026;
 *  - часы 7:00–19:00 с февраля 2026 — на октябрь 2026;
 *  - водитель говорит по-английски.
 */
import { facts, pathFor } from "../../i18n/ui";
import type { Landing } from "../landing";

const l = facts.luhamaa;
const eur = (v: number) => `€${v}`;
const back = pathFor("luhamaa-tallinn", "en");
const koidula = pathFor("tallinn-koidula", "en");
const narva = pathFor("tallinn-narva", "en");

export const en: Landing = {
  meta: {
    title: `Tallinn to Luhamaa Transfer: ${eur(l.price)} per Car | RideGo`,
    description: `Private car from Tallinn to the Luhamaa border crossing on the Riga–Pskov road: ${eur(l.price)} for the whole car, about 3 h 10 min. No bus goes there.`,
    ogTitle: `Tallinn — Luhamaa border transfer, ${eur(l.price)} for the whole car`,
    ogDescription: `${l.km} km from your door to Estonia's southernmost road crossing. One fixed fare for up to four passengers.`,
  },
  crumb: "Tallinn — Luhamaa transfer",
  hero: {
    eyebrow: `Southernmost crossing · ${eur(l.price)} per car`,
    h1: ["Tallinn to Luhamaa", "where no bus goes"],
    lead: `Luhamaa is Estonia's southernmost road crossing into Russia, on the Riga–Pskov highway. From Tallinn it is ${l.km} km via Tartu and Võru — and no scheduled transport stops at the checkpoint at all, so it is your own car or a transfer.`,
    answer: [
      `<strong>In short:</strong> a private transfer from Tallinn to Luhamaa costs <strong>${eur(l.price)} for the car</strong>, up to four passengers with luggage, and takes about <strong>3 hours 10 minutes</strong>. Pickup at home, a hotel, the airport or the harbour, a child seat and bags are included, and there is no surcharge for a night start.`,
      `The checkpoint is open 7:00–19:00 Estonian time and shut overnight. The nearest town, Võru, is about 30 km away. Starting from Tartu instead? That leg costs ${eur(facts.tartu.price)}.`,
    ],
    stats: [
      [eur(l.price), "for the whole car"],
      ["≈ 3 h 10 min", "on the road"],
      [`${l.km} km`, "via Tartu and Võru"],
    ],
    perks: [
      "One fixed fare per car",
      "Airport and port pickup",
      "Free waiting for late flights",
      "Child seat on request",
      "Cash or bank transfer",
    ],
    waText: "Hello! I'd like to book a transfer Tallinn — Luhamaa.",
  },
  sections: [
    {
      id: "price",
      alt: true,
      eyebrow: "Fare",
      title: `The longest of our routes, the same ${eur(l.price)} as Koidula`,
      lead: "The fare covers the car, not the seats, and it does not change with the time of day — a 3 a.m. start for the morning opening costs the same as a noon one.",
      blocks: [
        {
          type: "table",
          caption: "Tallinn — Luhamaa transfer: fare and what is included",
          cols: ["Item", "Price", "What it means"],
          rows: [
            ["Tallinn → Luhamaa border", eur(l.price), `${l.km} km, about 3 h 10 min, up to 4 passengers with luggage`],
            ["Luhamaa → Tallinn", eur(l.price), `same fare back — <a href="${back}">the return route</a>`],
            ["Tartu → Luhamaa", eur(facts.tartu.price), "if you start from Tartu: about 1 h 20 min"],
            ["Pickup at the airport or harbour", "€0", "name board at arrivals, a late flight or ferry is not charged"],
            ["Night start, child seat, bags", "€0", "leaving at night for the 7:00 opening costs nothing extra"],
          ],
        },
        {
          type: "tip",
          html: "<strong>Paying.</strong> Cash to the driver or a bank transfer, in euros, after the trip. No deposit. The fare and the pickup time are confirmed in a message before the day.",
        },
      ],
    },
    {
      id: "no-bus",
      eyebrow: "Getting there",
      title: "Why there is no bus to Luhamaa",
      lead: "This is geography, not a sales line. Narva has a coach and a train, Koidula has a Pskov coach passing through. Luhamaa has nothing that stops at the barrier.",
      blocks: [
        {
          type: "table",
          caption: "Ways to get from Tallinn to the Luhamaa border crossing",
          cols: ["Option", "Price", "Time", "Worth knowing"],
          rows: [
            ["RideGo private transfer", `${eur(l.price)} per car`, "≈ 3 h 10 min", "door to checkpoint, at any hour"],
            ["Scheduled bus to the crossing", "—", "—", "does not exist, neither to the checkpoint nor to the nearby village of Lüta"],
            ["Bus to Võru, then a taxi", "ticket + taxi", "longer, with a change", "about 30 km from Võru to the border; the car there has to be found in advance"],
            ["International coach to Pskov", "carrier's fare", "depends on the service", "drives past; dropping off at the crossing itself is not part of the route"],
            ["Your own car", "fuel", "≈ 3 h", "needs a queue slot booked in GoSwift"],
          ],
        },
        {
          type: "tip",
          html: `<strong>The honest alternative.</strong> Travelling alone and light? A coach to Narva for about €9 and crossing on foot is far cheaper — see <a href="${narva}">Tallinn — Narva</a>. People choose Luhamaa when it has to be this crossing: for the Riga–Pskov highway, or when the queues elsewhere are worse.`,
        },
        {
          type: "text",
          h3: "Luhamaa or Koidula?",
          html: `Distance and fare are almost the same. <a href="${koidula}">Koidula</a> is a little closer and has a train line nearby; Luhamaa sits right on the main highway towards Pskov. Often the deciding factor is simply which crossing has a free GoSwift slot on your date.`,
        },
      ],
    },
    {
      id: "airport",
      alt: true,
      eyebrow: "Airport and harbour",
      title: "From a Tallinn arrival to Luhamaa the same day",
      lead: "The drive starts at the terminal door, so a morning arrival still gets you to the border with time to spare.",
      narrow: true,
      blocks: [
        {
          type: "text",
          h3: "Send the flight number or the ship's name",
          html: "The driver tracks the arrival and waits with a <strong>RideGo</strong> sign after baggage reclaim or at the harbour exit. A delay moves the meeting time, not the fare.",
        },
        {
          type: "text",
          h3: "Morning yes, afternoon tight",
          html: "Landing by late morning, you reach Luhamaa in the early afternoon with hours in hand before 19:00. With an afternoon arrival it is wiser to stay the night and leave Tallinn before 4:00 for the morning opening — we drive at night at no extra charge.",
        },
        { type: "button", label: "Book a pickup to Luhamaa", waText: "Hello! I need a transfer from Tallinn airport to Luhamaa. Flight number: " },
      ],
    },
    {
      eyebrow: "How it works",
      title: "Via Tartu and Võru to the border",
      blocks: [
        {
          type: "steps",
          items: [
            {
              title: "We count back from the border",
              text: "The crossing works by day, so we start from when you need to be at the barrier and set the pickup time from that.",
            },
            {
              title: "Pickup in Tallinn",
              text: "An address, a hotel, the airport or the cruise terminal. The driver loads the luggage; bags are not charged.",
            },
            {
              title: `${l.km} km south`,
              text: "Tartu, Võru, then onto the Riga–Pskov highway. It is our longest Estonian route, so there is a stop half-way.",
            },
            {
              title: "At the checkpoint",
              text: "We drop you at the Luhamaa border crossing. You go through the controls yourself; a meeting on the other side, if needed, is arranged beforehand.",
            },
          ],
        },
      ],
    },
    {
      eyebrow: "The car",
      title: "The car for 280 km",
      alt: true,
      narrow: true,
      blocks: [
        {
          type: "photo",
          src: "/images/car-1.jpg",
          alt: "RideGo Toyota Corolla used for the Tallinn to Luhamaa transfer",
          caption: `${facts.car}: ${l.km} km of highway, on winter tyres in winter.`,
          width: 1200,
          height: 675,
        },
        {
          type: "text",
          html: `A ${facts.car} with a leather interior, climate control, four passenger seats and room for two large suitcases. ${facts.driver} drives and answers WhatsApp and Telegram himself; he speaks Russian and English. Child seat on request; travelling with a pet — tell us beforehand.`,
        },
      ],
    },
    {
      eyebrow: "The crossing",
      title: "Luhamaa checkpoint in brief",
      narrow: true,
      blocks: [
        {
          type: "details",
          items: [
            {
              open: true,
              title: "A road crossing, open by day",
              html: "Luhamaa is a vehicle checkpoint on the Riga–Pskov highway. Since February 2026 it has been open 7:00–19:00 Estonian time and closed overnight. Arrive well before closing: a queue builds at the barrier before 19:00. The rules for foot passengers have changed more than once — check the current ones at <a href=\"https://www.politsei.ee/en\" target=\"_blank\" rel=\"noopener\">politsei.ee</a>.",
            },
            {
              title: "The queue is booked in GoSwift",
              html: "Vehicles take a crossing time in advance through GoSwift at <a href=\"https://www.eestipiir.ee\" target=\"_blank\" rel=\"noopener\">eestipiir.ee</a>. We do not book it for you, but we will explain how and get you there for your slot.",
            },
            {
              title: "Useful phone numbers",
              html: "Luhamaa checkpoint: <a href=\"tel:+3727861830\">+372 786 1830</a>. Shumilkino, Russian side: <a href=\"tel:+78114898321\">+7 811 489-83-21</a>. Police and Border Guard Board: <a href=\"tel:+3726123000\">+372 612 3000</a>.",
            },
          ],
        },
      ],
    },
  ],
  faq: {
    eyebrow: "Questions",
    title: "Tallinn to Luhamaa transfer: questions we get asked",
    items: [
      {
        q: "How much is a transfer from Tallinn to Luhamaa?",
        a: `${eur(l.price)} for the whole car, up to four passengers. No extra charge for luggage, a child seat or the time of day. Cash or bank transfer, no prepayment.`,
      },
      {
        q: "How long does it take to drive from Tallinn to Luhamaa?",
        a: `About 3 hours 10 minutes for ${l.km} km via Tartu and Võru. It is the longest of the three crossings, and in winter weather it can take more.`,
      },
      {
        q: "Can I get to Luhamaa without a car?",
        a: "Practically not. No scheduled transport goes to the checkpoint or to the neighbouring village of Lüta; the nearest town is Võru, about 30 km away, and international coaches to Pskov do not stop at the crossing. It is your own car or a transfer.",
      },
      {
        q: "Should I choose Luhamaa or Koidula?",
        a: "Distance and fare are nearly the same. Koidula is slightly closer; Luhamaa is handier if you continue along the highway towards Pskov. Free GoSwift slots on your date often decide it.",
      },
      {
        q: "Do you drive back from Luhamaa as well?",
        a: `Yes — see <a href="${back}">Luhamaa to Tallinn</a>, same fare. Book the return in advance: there are no taxis or regular buses at the crossing.`,
      },
    ],
  },
  links: {
    eyebrow: "More routes",
    title: "Other routes we drive",
    note: "Routes without an English page yet open WhatsApp with the route already filled in.",
    items: [
      { label: "Luhamaa — Tallinn", price: eur(l.price), page: "luhamaa-tallinn", waText: "Hello! I'd like to book a transfer Luhamaa — Tallinn." },
      { label: "Tallinn — Koidula", price: eur(facts.koidula.price), page: "tallinn-koidula", waText: "Hello! I'd like to book a transfer Tallinn — Koidula." },
      { label: "Tallinn — Narva", price: eur(facts.narva.price), page: "tallinn-narva", waText: "Hello! I'd like to book a transfer Tallinn — Narva." },
      { label: "Tartu — Luhamaa", price: eur(facts.tartu.price), page: "tartu-koidula-luhamaa", waText: "Hello! I'd like to book a transfer Tartu — Luhamaa." },
    ],
  },
  cta: {
    title: "Heading for Luhamaa?",
    text: "Send the date and your queue time — we work out when to pick you up.",
    call: "Call us",
  },
  schema: {
    name: "Tallinn — Luhamaa transfer",
    alternateName: ["Taxi Tallinn to Luhamaa", "Tallinn to Pskov via Luhamaa", "Luhamaa border transfer"],
    serviceType: "Private transfer to a border crossing",
    description: `Private transfer from Tallinn to the Luhamaa border crossing: ${l.km} km via Tartu and Võru, about 3 h 10 min, ${eur(l.price)} for the whole car. Pickup at Tallinn airport, the harbour or any address.`,
    areaServed: ["Tallinn", "Tartu", "Võru", "Luhamaa"],
    offers: [{ name: "Transfer Tallinn — Luhamaa, car for up to 4 passengers", price: l.price }],
    breadcrumbHome: "RideGo",
  },
};
