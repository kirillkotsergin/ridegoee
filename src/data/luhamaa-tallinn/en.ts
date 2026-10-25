/**
 * Luhamaa — Tallinn, английская версия. Написана с нуля. Своя тема — выход с
 * границы ближе к вечеру (раздел «late»): что будет, если вы прошли контроль
 * в 18:30, во сколько будете в Таллинне и что если не успели до закрытия.
 * Расчёт под рейс — коротко, в разделе «airport»: подробно он на
 * английской Narva — Tallinn.
 *
 * ПРОВЕРЬ перед публикацией:
 *  - «до терминала около 3,5 часа с заездом в город» и «7 часов от очереди
 *    до регистрации» — с русской страницы;
 *  - часы 7:00–19:00 с февраля 2026 — на октябрь 2026;
 *  - водитель говорит по-английски.
 */
import { facts, pathFor } from "../../i18n/ui";
import type { Landing } from "../landing";

const l = facts.luhamaa;
const eur = (v: number) => `€${v}`;
const there = pathFor("tallinn-luhamaa", "en");

export const en: Landing = {
  meta: {
    title: `Luhamaa to Tallinn Transfer: ${eur(l.price)} per Car | RideGo`,
    description: `A car waiting at the Luhamaa border crossing: ${eur(l.price)} for the whole car to Tallinn, its airport or harbour. About 3 h 10 min, free waiting, book ahead.`,
    ogTitle: `Luhamaa border to Tallinn, ${eur(l.price)} for the whole car`,
    ogDescription: "No town, no taxi and no bus at Luhamaa. The car is booked ahead and waits while you clear control.",
  },
  crumb: "Luhamaa — Tallinn transfer",
  hero: {
    eyebrow: `Return run · ${eur(l.price)} per car`,
    h1: ["Luhamaa to Tallinn", "booked before you cross"],
    lead: `Luhamaa is a checkpoint in open country on the Riga–Pskov highway: no town nearby, no taxi at the exit. We arrive at the agreed time and drive you to Tallinn — ${l.km} km, about 3 hours 10 minutes, one fare for the whole car.`,
    answer: [
      `<strong>In short:</strong> a transfer from the Luhamaa border to Tallinn costs <strong>${eur(l.price)} for the whole car</strong>, up to four passengers with luggage, and takes about <strong>3 hours 10 minutes</strong> via Võru and Tartu. The driver waits at the checkpoint while you clear control; the waiting is not charged.`,
      "Booking ahead is not a nicety here but a must: there is no public transport from the crossing at all, Võru is about 30 km away and no taxi waits at the barrier. The car needs more than three hours to reach you, so agree the date and a rough time at least a day before.",
    ],
    stats: [
      [eur(l.price), "for the whole car"],
      ["≈ 3 h 10 min", "to Tallinn"],
      ["€0", "for waiting at the border"],
    ],
    perks: [
      "One fixed fare per car",
      "Free waiting at the checkpoint",
      "Drop-off at the airport or harbour",
      "Child seat on request",
      "Cash or bank transfer",
    ],
    waText: "Hello! I'd like to book a transfer Luhamaa — Tallinn.",
  },
  sections: [
    {
      id: "price",
      alt: true,
      eyebrow: "Fare",
      title: `Back to Tallinn for the same ${eur(l.price)}`,
      lead: `The car drives ${l.km} km empty to reach you. That is already in the fare and never appears on top of it.`,
      blocks: [
        {
          type: "table",
          caption: "Luhamaa — Tallinn transfer: fare and what is included",
          cols: ["Item", "Price", "What it means"],
          rows: [
            ["Luhamaa border → Tallinn", eur(l.price), `${l.km} km, about 3 h 10 min, up to 4 passengers with luggage`],
            ["Waiting at the checkpoint", "€0", "the driver waits while you go through control"],
            ["Drop-off at the airport, harbour or hotel", "€0", "Lennart Meri airport, the Old City Harbour, Balti jaam, the coach station"],
            ["Luhamaa → Tartu instead", eur(facts.tartu.price), "Tartu is on the way"],
            ["Tallinn → Luhamaa", eur(l.price), `same fare outbound — <a href="${there}">the route to the border</a>`],
          ],
        },
        {
          type: "tip",
          html: "<strong>Why in advance.</strong> At Luhamaa there is no taxi rank and no bus stop. Without a booked car you are left with practically nothing — especially in the evening, just before the crossing closes at 19:00.",
        },
      ],
    },
    {
      id: "late",
      eyebrow: "Late in the day",
      title: "Coming through Luhamaa in the evening",
      lead: "Many people reach the Estonian side late: the queue on the Russian side took longer, or they set off from Pskov after lunch. That is fine — it just helps to know what the evening looks like.",
      narrow: true,
      blocks: [
        {
          type: "table",
          caption: "Out of Estonian control → in Tallinn (Estonian time, roughly)",
          cols: ["Through control", "In Tallinn", "Worth knowing"],
          rows: [
            ["15:00", "about 18:15", "still time for an evening ferry or a late check-in"],
            ["17:00", "about 20:15", "we stop in Tartu for something to eat if you like"],
            ["18:45", "about 22:00", "the last cars before closing; tell us your hotel's late check-in time"],
          ],
        },
        {
          type: "text",
          h3: "If you will not make it before 19:00",
          html: "The checkpoint shuts for the night and you cross in the morning. Message us as soon as it is clear: we move the pickup to the new time at no charge. All times on this page are Estonian; from 25 October 2026 a phone on a Russian network may show Moscow time, an hour ahead.",
        },
        {
          type: "text",
          h3: "Long day? The car is set up for it",
          html: "Air conditioning in summer, heating in winter, a phone charger, water — and a stop wherever you need one. Most people sleep a good part of the way.",
        },
      ],
    },
    {
      id: "airport",
      alt: true,
      eyebrow: "Airport and harbour",
      title: "From Luhamaa to a flight or a ferry",
      narrow: true,
      blocks: [
        {
          type: "text",
          h3: "How much margin to leave",
          html: "Luhamaa to the terminal is about three and a half hours including the drive through the city. Add the border, which may take half an hour or three. We suggest <strong>at least seven hours</strong> between joining the queue on the Russian side and check-in. Send the flight number and we will tell you by what time you need to be through.",
        },
        {
          type: "text",
          h3: "Other drop-offs",
          html: `The cruise terminal, Balti jaam, the coach station, a hotel or any address. Tartu is on the way: a drop-off there costs ${eur(facts.tartu.price)}.`,
        },
        { type: "button", label: "Book a pickup at Luhamaa", waText: "Hello! I need a transfer from Luhamaa to Tallinn. Date and rough time: " },
      ],
    },
    {
      eyebrow: "How it works",
      title: "Picked up straight after control",
      blocks: [
        {
          type: "steps",
          items: [
            {
              title: "Agree it before the trip",
              text: "Date and a rough crossing time. The car leaves Tallinn well ahead — the drive to you is over three hours.",
            },
            {
              title: "Message when you are through",
              text: "One WhatsApp message and the driver pulls up at the exit. Held up at control? Write, and we wait.",
            },
            {
              title: "Via Võru and Tartu",
              text: "There are places on the way to stop for a coffee and stretch your legs.",
            },
            {
              title: "To your door",
              text: "Hotel, flat, airport, harbour or coach station in Tallinn — or Tartu on the way.",
            },
          ],
        },
      ],
    },
    {
      eyebrow: "The car",
      title: "The car waiting at the barrier",
      narrow: true,
      blocks: [
        {
          type: "photo",
          src: "/images/car-2.jpg",
          alt: "RideGo Toyota Corolla used for the Luhamaa to Tallinn transfer, rear view",
          caption: `${facts.car}: ${l.km} km back via Võru and Tartu.`,
          width: 1200,
          height: 675,
        },
        {
          type: "text",
          html: `A ${facts.car}: leather interior, climate control, four passenger seats, two large suitcases plus cabin bags in the boot. Winter tyres in winter — the stretch from Võru to Tartu can be unpleasant in snow. ${facts.driver} drives and reads the messages himself, so a delay at the border goes straight to him. Child seat on request.`,
        },
      ],
    },
    {
      eyebrow: "Good to know",
      title: "Before the trip back",
      alt: true,
      narrow: true,
      blocks: [
        {
          type: "details",
          items: [
            {
              open: true,
              title: "There is almost no way out on your own",
              html: "Luhamaa has no station and no taxi rank, and the nearest town, Võru, is about 30 km away. A car booked in advance is the simplest answer. Current border rules: <a href=\"https://www.politsei.ee/en\" target=\"_blank\" rel=\"noopener\">politsei.ee</a>.",
            },
            {
              title: "Useful phone numbers",
              html: "Luhamaa checkpoint: <a href=\"tel:+3727861830\">+372 786 1830</a>. Shumilkino, Russian side: <a href=\"tel:+78114898321\">+7 811 489-83-21</a>. Estonian Police and Border Guard Board: <a href=\"tel:+3726123000\">+372 612 3000</a>.",
            },
          ],
        },
      ],
    },
  ],
  faq: {
    eyebrow: "Questions",
    title: "Luhamaa to Tallinn transfer: questions we get asked",
    items: [
      {
        q: "How much does it cost to get from Luhamaa to Tallinn?",
        a: `${eur(l.price)} for the whole car, the same as the other way. The number of passengers and the time of day do not change it, and waiting at the checkpoint is free. Cash or bank transfer, no prepayment.`,
      },
      {
        q: "Can I leave Luhamaa without a booked car?",
        a: `Practically not. There are no scheduled buses from the crossing, Võru is about 30 km away and no taxi waits at the barrier. If Tallinn is further than you need, the same car can take you to Tartu for ${eur(facts.tartu.price)}.`,
      },
      {
        q: "What if I come through later than planned?",
        a: "Nothing to worry about: write to us and the driver waits. Nobody can predict how long control will take.",
      },
      {
        q: "What if I do not get through before the crossing closes?",
        a: "Luhamaa closes at 19:00 Estonian time, so you would cross the next morning. Tell us and we move the pickup to the new time at no charge.",
      },
      {
        q: "Do you also drive from Tallinn to Luhamaa?",
        a: `Yes, for the same ${eur(l.price)} — see <a href="${there}">Tallinn to Luhamaa</a>.`,
      },
    ],
  },
  links: {
    eyebrow: "More routes",
    title: "Other routes we drive",
    note: "Routes without an English page yet open WhatsApp with the route already filled in.",
    items: [
      { label: "Tallinn — Luhamaa", price: eur(l.price), page: "tallinn-luhamaa", waText: "Hello! I'd like to book a transfer Tallinn — Luhamaa." },
      { label: "Koidula — Tallinn", price: eur(facts.koidula.price), page: "koidula-tallinn", waText: "Hello! I'd like to book a transfer Koidula — Tallinn." },
      { label: "Narva — Tallinn", price: eur(facts.narva.price), page: "narva-tallinn", waText: "Hello! I'd like to book a transfer Narva — Tallinn." },
      { label: "Luhamaa — Tartu", price: eur(facts.tartu.price), page: "tartu-koidula-luhamaa", waText: "Hello! I'd like to book a transfer Luhamaa — Tartu." },
    ],
  },
  cta: {
    title: "Need collecting at Luhamaa?",
    text: "Send the date and a rough time for crossing — the car will be waiting.",
    call: "Call us",
  },
  schema: {
    name: "Luhamaa — Tallinn transfer",
    alternateName: ["Taxi Luhamaa to Tallinn", "Luhamaa border to Tallinn airport", "Pickup at Luhamaa border crossing"],
    serviceType: "Private transfer from a border crossing",
    description: `Private transfer from the Luhamaa border crossing to Tallinn: ${l.km} km via Võru and Tartu, about 3 h 10 min, ${eur(l.price)} for the whole car. Free waiting during border control, drop-off at the airport or harbour.`,
    areaServed: ["Luhamaa", "Võru", "Tartu", "Tallinn"],
    offers: [{ name: "Transfer Luhamaa — Tallinn, car for up to 4 passengers", price: l.price }],
    breadcrumbHome: "RideGo",
  },
};
