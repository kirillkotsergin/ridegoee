/**
 * Tallinn — Koidula, английская версия. Написана с нуля, не перевод русской
 * страницы. Своя тема — выбор перехода: «Narva or Koidula» (таблица в разделе
 * «which-crossing»). На английской Нарве такого сравнения нет, там тема —
 * часы работы перехода.
 *
 * ПРОВЕРЬ перед публикацией:
 *  - пропускают ли в Койдуле пешеходов: правила менялись, в тексте об этом
 *    сказано осторожно — «проверьте перед поездкой»;
 *  - кто выполняет машину от Куничиной Горы (3000 / 17 000 ₽) — CLAUDE.md, 3.1;
 *  - часы 7:00–19:00 с февраля 2026 — на октябрь 2026;
 *  - Ecolines ≈ 7 ч 17 мин и «пара поездов в день» на R46 — на август 2026;
 *  - водитель говорит по-английски (см. tallinn-narva/en.ts).
 */
import { facts, pathFor } from "../../i18n/ui";
import type { Landing } from "../landing";

const k = facts.koidula;
const kg = facts.kunichinaGora;
const eur = (v: number) => `€${v}`;
const rub = (v: number) => `${v.toLocaleString("en-GB")} roubles`;
const back = pathFor("koidula-tallinn", "en");
const narva = pathFor("tallinn-narva", "en");

export const en: Landing = {
  meta: {
    title: `Tallinn to Koidula Transfer: ${eur(k.price)} per Car | RideGo`,
    description: `Private car from Tallinn, its airport or port to the Koidula border crossing near Pskov: ${eur(k.price)} for the whole car, about 3 hours via Tartu, no prepayment.`,
    ogTitle: `Tallinn — Koidula border transfer, ${eur(k.price)} for the whole car`,
    ogDescription: `${k.km} km from your door to the Koidula checkpoint in Setomaa. One fixed fare for up to four passengers.`,
  },
  crumb: "Tallinn — Koidula transfer",
  hero: {
    eyebrow: `Southern crossing · ${eur(k.price)} per car`,
    h1: ["Tallinn to Koidula", "door to checkpoint"],
    lead: `Koidula is Estonia's south-eastern road crossing into Russia, opposite Kunichina Gora and a short drive from Pechory and Pskov. From Tallinn it is ${k.km} km via Tartu, and there is almost no public transport for the last stretch — which is exactly the part a private car solves.`,
    answer: [
      `<strong>In short:</strong> a private transfer from Tallinn to Koidula costs <strong>${eur(k.price)} for the car</strong>, not per seat, and takes about <strong>3 hours 5 minutes</strong> via Tartu. Up to four passengers with luggage. Pickup at home, a hotel, the airport or the harbour, a child seat and bags are all part of the fare.`,
      "The checkpoint is open 7:00–19:00 Estonian time and closed overnight, so we set your departure from Tallinn by the time you want to be at the barrier. Already in Tartu? That leg is shorter and costs " + eur(facts.tartu.price) + ".",
    ],
    stats: [
      [eur(k.price), "for the whole car"],
      ["≈ 3 h 5 min", "on the road"],
      [`${k.km} km`, "via Tartu"],
    ],
    perks: [
      "One fixed fare per car",
      "Airport and port pickup",
      "Free waiting for late flights",
      "Child seat on request",
      "Cash or bank transfer",
    ],
    waText: "Hello! I'd like to book a transfer Tallinn — Koidula.",
  },
  sections: [
    {
      id: "price",
      alt: true,
      eyebrow: "Fare",
      title: `${eur(k.price)} for the car, whoever is in it`,
      lead: "You pay for the journey, not for the seats. One traveller or four, one suitcase or five, a midday start or a 3 a.m. one — the fare does not move.",
      blocks: [
        {
          type: "table",
          caption: "Tallinn — Koidula transfer: fare and what is included",
          cols: ["Item", "Price", "What it means"],
          rows: [
            ["Tallinn → Koidula border", eur(k.price), "the whole car, up to 4 passengers and their luggage"],
            ["Koidula → Tallinn", eur(k.price), `same fare in the other direction — <a href="${back}">the return route</a>`],
            ["Tartu → Koidula", eur(facts.tartu.price), "if you are starting from Tartu: about an hour on the road"],
            ["Pickup at the airport or harbour", "€0", "name board at arrivals, a delayed flight or ferry is not charged"],
            ["Night start, child seat, bags", "€0", "no surcharges for the hour, the luggage or a child seat"],
          ],
        },
        {
          type: "tip",
          html: "<strong>Paying.</strong> Cash to the driver or a bank transfer, in euros, once you are there. No deposit. The fare and pickup time come to you in a message before the day, so you have them in writing.",
        },
        {
          type: "text",
          h3: "Why Koidula costs more than Narva",
          html: `It is ${k.km - facts.narva.km} km further and about 35 minutes longer each way, and the last part runs on quiet local roads through Põlva county and Setomaa rather than a main highway. Hence ${eur(k.price)} here against ${eur(facts.narva.price)} for <a href="${narva}">Tallinn — Narva</a>.`,
        },
      ],
    },
    {
      id: "which-crossing",
      eyebrow: "Choosing a crossing",
      title: "Narva or Koidula: which one suits your trip",
      lead: "Both are open by day only and both are a few hours from Tallinn. What decides it is mostly where you are heading in Russia and how you plan to cross.",
      blocks: [
        {
          type: "table",
          caption: "Narva and Koidula border crossings compared, as seen from Tallinn",
          cols: ["", "Narva", "Koidula"],
          rows: [
            ["From Tallinn", `${facts.narva.km} km, ≈ 2 h 30 min`, `${k.km} km, ≈ 3 h 5 min`],
            ["Our fare", eur(facts.narva.price), eur(k.price)],
            ["How the border is crossed", "on foot only, over the bridge", "a road crossing for vehicles; rules for foot passengers have changed — check before you go"],
            ["Russian side", "Ivangorod, on the road to St Petersburg", "Kunichina Gora, next to Pechory, on the road to Pskov"],
            ["Opening hours", "7:00–19:00 Estonian time", "7:00–19:00 Estonian time"],
          ],
        },
        {
          type: "text",
          h3: "Heading for Pskov, Pechory or further south",
          html: `Then Koidula is usually the shorter way overall, even though the Estonian part of the drive is longer. On the Russian side we can arrange a car from Kunichina Gora: to Pskov for about ${rub(kg.pskov)}, to St Petersburg for about ${rub(kg.spb)}. Mention it in the same message and we will confirm both legs together.`,
        },
        {
          type: "text",
          h3: "Heading for St Petersburg",
          html: `Narva is the natural choice: Ivangorod is on the main road to the city, and from there the onward trip is much cheaper than from Kunichina Gora. See <a href="${narva}">Tallinn — Narva</a>.`,
        },
        {
          type: "text",
          h3: "When to leave Tallinn",
          html: "Allow about three hours for the road and a margin for the barrier queue, which before the 19:00 closing can be long. To be at the checkpoint for the 7:00 opening we leave Tallinn shortly before 4:00. A start after about 13:00 leaves little room for a slow day at the border.",
        },
      ],
    },
    {
      id: "airport",
      alt: true,
      eyebrow: "Airport and harbour",
      title: "From a Tallinn arrival straight to Koidula",
      lead: "Most travellers on this route land at Lennart Meri airport or come in by ferry and want to be at the border the same day. The drive starts at the terminal door.",
      narrow: true,
      blocks: [
        {
          type: "text",
          h3: "Flight number or ship name is enough",
          html: "Put it in your booking message. The driver tracks the arrival himself and waits after baggage reclaim, or at the harbour exit, with a <strong>RideGo</strong> sign. If you land late, the meeting simply shifts and the fare stays the same.",
        },
        {
          type: "text",
          h3: "Will you make it the same day?",
          html: "An arrival by late morning gets you to Koidula in early afternoon, with several hours left before the crossing closes. Landing in the afternoon is tight; in that case many people prefer to stay the night in Tallinn or Tartu and cross in the morning — we can split the drive that way.",
        },
        { type: "button", label: "Book a pickup to Koidula", waText: "Hello! I need a transfer from Tallinn airport to Koidula. Flight number: " },
      ],
    },
    {
      eyebrow: "How it works",
      title: "Three hours to the south-east border",
      blocks: [
        {
          type: "steps",
          items: [
            {
              title: "Tell us the plan",
              text: "Date, pickup address and when you want to be at the checkpoint. We work out the departure time from that and confirm it with the fare in one message.",
            },
            {
              title: "Pickup in Tallinn",
              text: "From a flat, a hotel, the airport or the harbour. The driver loads the luggage; there is no charge for bags.",
            },
            {
              title: "Via Tartu",
              text: "The Tallinn–Tartu highway, then local roads towards Setomaa. It is a longer drive than to Narva, so a coffee stop on the way is built into the timing.",
            },
            {
              title: "At the checkpoint",
              text: "We stop at the Koidula border crossing. You go through the controls yourself; an onward car on the Russian side is arranged separately if you need one.",
            },
          ],
        },
      ],
    },
    {
      eyebrow: "The car",
      title: "The car you will be riding in",
      alt: true,
      narrow: true,
      blocks: [
        {
          type: "photo",
          src: "/images/car-2.jpg",
          alt: "RideGo Toyota Corolla used for the Tallinn to Koidula transfer, rear view",
          caption: `${facts.car}: the boot takes two large suitcases plus cabin bags.`,
          width: 1200,
          height: 675,
        },
        {
          type: "text",
          html: `A ${facts.car} with a leather interior, climate control and four passenger seats. Three hours is long enough to notice the difference between a car that is looked after and one that is not: winter tyres from the first frost, working air conditioning in summer.`,
        },
        {
          type: "text",
          html: `${facts.driver} drives and answers the messages himself, so whatever changes on the day you tell the person behind the wheel. He speaks Russian and English.`,
        },
      ],
    },
    {
      eyebrow: "Alternatives",
      title: "Coach, train or a private car to Koidula",
      lead: "The catch with Koidula is the last few kilometres: scheduled transport either drives straight through to Russia or stops short of the checkpoint.",
      blocks: [
        {
          type: "table",
          caption: "Ways to get from Tallinn to the Koidula border crossing",
          cols: ["Option", "Price", "Time", "Worth knowing"],
          rows: [
            ["RideGo private transfer", `${eur(k.price)} per car`, "≈ 3 h 5 min", "door to checkpoint, departure set by the time you want to cross"],
            ["Ecolines coach Tallinn — Pskov", "see the booking site", "≈ 7 h 17 min", "passes through Koidula; everyone on board clears border control together"],
            ["Elron train via Tartu", "Elron fare", "Tallinn — Tartu, then line R46", "a couple of trains a day on R46, and about 2 km on foot from the station to the border"],
            ["Your own car", "fuel", "≈ 3 h", "needs a queue slot booked in GoSwift; weekend slots go early"],
          ],
        },
        {
          type: "tip",
          html: "<strong>When a car is worth it.</strong> You want to be at the barrier at a set time, not when a timetable allows. You are carrying more than a backpack. Or you are three or four people, and the fare per head ends up close to a coach ticket.",
        },
      ],
    },
    {
      eyebrow: "The crossing",
      title: "Koidula checkpoint in brief",
      narrow: true,
      blocks: [
        {
          type: "details",
          items: [
            {
              open: true,
              title: "Open by day only",
              html: "Since February 2026 Koidula has worked 7:00–19:00 Estonian time and closes completely overnight. A queue tends to form before closing, so plan to arrive with time to spare. From 25 October 2026 Russia is an hour ahead, so on the Kunichina Gora side the same hours read 8:00–20:00.",
            },
            {
              title: "Queue booking and crossing on foot",
              html: "Vehicles leaving Estonia book a place in the queue through GoSwift at <a href=\"https://www.eestipiir.ee\" target=\"_blank\" rel=\"noopener\">eestipiir.ee</a>. The rules for foot passengers at Koidula have changed more than once, so check the current ones with the Police and Border Guard Board at <a href=\"https://www.politsei.ee/en\" target=\"_blank\" rel=\"noopener\">politsei.ee</a> before you travel.",
            },
            {
              title: "Useful phone numbers",
              html: "Koidula checkpoint: <a href=\"tel:+3727861800\">+372 786 1800</a>. Kunichina Gora, Russian side: <a href=\"tel:+78114893421\">+7 811 489-34-21</a>. Police and Border Guard Board general line: <a href=\"tel:+3726123000\">+372 612 3000</a>.",
            },
          ],
        },
      ],
    },
  ],
  faq: {
    eyebrow: "Questions",
    title: "Tallinn to Koidula transfer: questions we get asked",
    items: [
      {
        q: "How much is a transfer from Tallinn to Koidula?",
        a: `${eur(k.price)} for the whole car, for one passenger or four, by day or by night. Luggage, a child seat and airport pickup are included. You pay after the trip, in cash or by bank transfer.`,
      },
      {
        q: "How long does the drive from Tallinn to Koidula take?",
        a: `About 3 hours 5 minutes for the ${k.km} km via Tartu. Snow or heavy traffic can add to it, so for the 7:00 opening we leave Tallinn with a margin.`,
      },
      {
        q: "Should I cross at Koidula or Narva to get to Pskov?",
        a: `Koidula: Kunichina Gora on the Russian side is next to Pechory and much closer to Pskov. We can also arrange a car from Kunichina Gora to Pskov for about ${rub(kg.pskov)}. For St Petersburg, Narva is the better choice.`,
      },
      {
        q: "Why is Koidula more expensive than Narva?",
        a: `The road is ${k.km - facts.narva.km} km longer and takes about 35 minutes more each way — hence ${eur(k.price)} against ${eur(facts.narva.price)} to Narva. In return, Koidula is a road crossing, while Narva can only be crossed on foot.`,
      },
      {
        q: "Can we stop in Tartu on the way?",
        a: `Yes, the route runs through Tartu, so a stop or a drop-off there is easy — say so when you book. If you are starting from Tartu, the transfer to Koidula is a separate route at ${eur(facts.tartu.price)}.`,
      },
    ],
  },
  links: {
    eyebrow: "More routes",
    title: "Other routes we drive",
    note: "Routes without an English page yet open WhatsApp with the route already filled in.",
    items: [
      { label: "Koidula — Tallinn", price: eur(k.price), page: "koidula-tallinn", waText: "Hello! I'd like to book a transfer Koidula — Tallinn." },
      { label: "Tallinn — Narva", price: eur(facts.narva.price), page: "tallinn-narva", waText: "Hello! I'd like to book a transfer Tallinn — Narva." },
      { label: "Tallinn — Luhamaa", price: eur(facts.luhamaa.price), page: "tallinn-luhamaa", waText: "Hello! I'd like to book a transfer Tallinn — Luhamaa." },
      { label: "Tartu — Koidula or Luhamaa", price: eur(facts.tartu.price), page: "tartu-koidula-luhamaa", waText: "Hello! I'd like to book a transfer from Tartu to the border." },
    ],
  },
  cta: {
    title: "Heading for Koidula?",
    text: "Send the date and when you want to be at the border — we reply with the departure time and the fare in one message.",
    call: "Call us",
  },
  schema: {
    name: "Tallinn — Koidula transfer",
    alternateName: ["Taxi Tallinn to Koidula", "Tallinn to Pskov via Koidula", "Koidula border transfer"],
    serviceType: "Private transfer to a border crossing",
    description: `Private transfer from Tallinn to the Koidula border crossing: ${k.km} km via Tartu, about 3 h 5 min, ${eur(k.price)} for the whole car. Pickup at Tallinn airport, the harbour or any address.`,
    areaServed: ["Tallinn", "Tartu", "Koidula"],
    offers: [{ name: "Transfer Tallinn — Koidula, car for up to 4 passengers", price: k.price }],
    breadcrumbHome: "RideGo",
  },
};
