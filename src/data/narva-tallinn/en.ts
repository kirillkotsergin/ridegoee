/**
 * Narva — Tallinn, английская версия. Написана с нуля. Своя тема — расчёт от
 * вылета: во сколько встать в очередь в Ивангороде под рейс из Таллинна.
 * Темы estoniatransfer.ee/en/transfer-narva-tallinn/ (связь и деньги после
 * границы, что можно ввезти, рубли) здесь намеренно не повторяются.
 *
 * ПРОВЕРЬ перед публикацией:
 *  - таблица «под рейс» — правило «встать в очередь за ~8 ч до вылета»
 *    выведено из совета русской страницы (5–6 ч до регистрации), не из опыта
 *    водителя;
 *  - водитель говорит по-английски (см. tallinn-narva/en.ts);
 *  - цены Lux Express и Elron — на август 2026.
 */
import { facts, pathFor } from "../../i18n/ui";
import type { Landing } from "../landing";

const n = facts.narva;
const eur = (v: number) => `€${v}`;
const there = pathFor("tallinn-narva", "en");

export const en: Landing = {
  meta: {
    title: `Narva to Tallinn Transfer: ${eur(n.price)} from the Border | RideGo`,
    description: `Car waiting for you at the Narva-1 crossing: ${eur(n.price)} for the whole car to Tallinn, its airport or port. About 2.5 hours, waiting at the border is free.`,
    ogTitle: `Narva border to Tallinn, ${eur(n.price)} for the whole car`,
    ogDescription: "Step out of the Narva-1 checkpoint and into a pre-booked car. Fixed fare, free waiting while you clear border control.",
  },
  crumb: "Narva — Tallinn transfer",
  hero: {
    eyebrow: `Return run · ${eur(n.price)} per car`,
    h1: ["Narva to Tallinn", "from the border gate"],
    lead: "You come out of the checkpoint on the Estonian side, and the car is already there. No hunting for a taxi in a small border town, no bargaining over a long-distance fare: you go straight to your hotel, Tallinn airport, the ferry terminal or any address in the city.",
    answer: [
      `<strong>In short:</strong> a transfer from the Narva border to Tallinn costs <strong>${eur(n.price)} for the whole car</strong>, up to four passengers with luggage, and the drive takes about <strong>2 hours 30 minutes</strong>. The driver waits at Narva-1 while you clear passport control, and that waiting is not charged.`,
      "Nobody can predict exactly when you will get through, so we agree a rough time and you message us on WhatsApp once you are on the Estonian side. Book ahead: taxis rarely wait at the crossing.",
    ],
    stats: [
      [eur(n.price), "for the whole car"],
      ["≈ 2 h 30 min", "to Tallinn"],
      ["€0", "for waiting at the border"],
    ],
    perks: [
      "One fixed fare per car",
      "Free waiting at the checkpoint",
      "Drop-off at the airport or port",
      "Child seat on request",
      "Cash or bank transfer",
    ],
    waText: "Hello! I'd like to book a transfer Narva — Tallinn.",
  },
  sections: [
    {
      id: "price",
      alt: true,
      eyebrow: "Fare",
      title: `The way back costs the same: ${eur(n.price)}`,
      lead: "The car drives out from Tallinn to collect you, but you do not pay for that empty leg. Same fare as towards the border, at any hour the crossing is open.",
      blocks: [
        {
          type: "table",
          caption: "Narva — Tallinn transfer: fare and what is included",
          cols: ["Item", "Price", "What it means"],
          rows: [
            ["Narva border → Tallinn", eur(n.price), "the whole car, up to 4 passengers and their luggage"],
            ["Waiting at Narva-1", "€0", "the driver stays until you are through, however long the queue takes"],
            ["Drop-off at the airport or port", "€0", "Lennart Meri airport, the Old City Harbour, Balti jaam, the coach station or your hotel"],
            ["Moving the trip to another day", "€0", "missed the closing time? we simply come on the new date"],
            ["Tallinn → Narva", eur(n.price), `same fare outbound — <a href="${there}">the route to the border</a>`],
          ],
        },
        {
          type: "tip",
          html: "<strong>Two trips, one message.</strong> If you are heading to Russia and coming back through Tallinn, book both legs at once. The driver keeps both dates, and you do not have to arrange a car on the day you return — which matters most on Sundays and before public holidays.",
        },
      ],
    },
    {
      id: "flight",
      eyebrow: "Catching a flight",
      title: "Work back from your take-off time",
      lead: "The drive is the predictable part: about two and a half hours from the border to the terminal. The crossing is not — on a quiet morning it takes half an hour, on a busy one three or more. Count from the queue, not from the road.",
      narrow: true,
      blocks: [
        {
          type: "table",
          caption: "When to join the queue in Ivangorod for a flight from Tallinn (Estonian time)",
          cols: ["Flight departs", "Join the queue by", "Comment"],
          rows: [
            ["14:00", "7:00, at opening", "no margin at all — consider crossing the day before"],
            ["18:00", "about 10:00", "a comfortable morning crossing"],
            ["21:00", "about 13:00", "the most popular pattern: cross at midday, fly in the evening"],
            ["after 22:00", "about 14:00", "later is risky: the crossing closes at 19:00"],
          ],
        },
        {
          type: "text",
          h3: "The rule behind the table",
          html: "Join the queue on the Russian side roughly <strong>eight hours before take-off</strong>. That covers a slow border, the 210 km drive and the two hours the airport wants. If the queue moves fast, you simply arrive early and have a coffee airside — the fare is the same.",
        },
        {
          type: "text",
          h3: "Mind the clock on your phone",
          html: "From 25 October 2026 Ivangorod is one hour ahead of Narva. A phone on a Russian network often shows Moscow time, so a flight at 21:00 Tallinn time is 22:00 on your screen until you cross. All times on this page and in our messages are Estonian time.",
        },
        { type: "button", label: "Book a ride to my flight", waText: "Hello! I need a transfer from the Narva border to Tallinn airport. My flight is at " },
      ],
    },
    {
      id: "airport",
      alt: true,
      eyebrow: "Where we take you",
      title: "Airport, ferry terminal or your front door",
      narrow: true,
      blocks: [
        {
          type: "text",
          h3: "Tallinn airport",
          html: "We drop you at the departures entrance of Lennart Meri airport. Send your flight number with the booking, and we plan the pickup time from it rather than from guesswork.",
        },
        {
          type: "text",
          h3: "The Old City Harbour",
          html: "Ferries to Helsinki and Stockholm leave from the Old City Harbour, a few minutes from the centre. Tell us which terminal your ship uses and we stop at its door.",
        },
        {
          type: "text",
          h3: "Stations, hotels and stops on the way",
          html: "Balti jaam railway station, the coach station, a hotel or any address in Tallinn. Want to stop in Jõhvi or Rakvere on the way, or drop one passenger first? Mention it in advance and we allow time for it.",
        },
      ],
    },
    {
      eyebrow: "How it works",
      title: "From the checkpoint to your address",
      blocks: [
        {
          type: "steps",
          items: [
            {
              title: "Book a day or more ahead",
              text: "Date, the rough time you expect to cross and where you are going in Tallinn. Ahead of time because the car first drives two and a half hours to Narva.",
            },
            {
              title: "Message when you're through",
              text: "One WhatsApp message from the Estonian side. If control took longer than planned, nothing changes: the departure just moves.",
            },
            {
              title: "Meet by the exit",
              text: "The car is parked close to the Narva-1 exit, so there is no long walk with suitcases. The driver loads the luggage.",
            },
            {
              title: "Two and a half hours west",
              text: "Route 1 through Jõhvi and Rakvere to wherever we agreed: the airport, a terminal, a hotel or a home address.",
            },
          ],
        },
      ],
    },
    {
      eyebrow: "Why book",
      title: "Is there a taxi rank at the Narva crossing?",
      alt: true,
      narrow: true,
      blocks: [
        {
          type: "text",
          html: "Not a dependable one. Narva is a small town, and local taxis mostly do short trips inside it. A 210 km run to Tallinn means an empty drive back for them, which is why many decline it or price it high. In ride-hailing apps there may be no car nearby at all — especially in the evening, on Sundays and right before 19:00, when a wave of people leaves the checkpoint together.",
        },
        {
          type: "text",
          html: "The other problem is waiting. A taxi you call from the queue will not idle for an hour while you are still on the bridge. A pre-booked transfer is arranged around your crossing, and the fare is fixed before the car sets off.",
        },
        {
          type: "tip",
          html: "<strong>When the bus is the better deal.</strong> Travelling alone, light luggage, no connection to catch: the Lux Express coach (from about €9) or the Elron train (€13–23) to Tallinn is far cheaper. A car makes sense for two or more people, for heavy bags, for a flight or a ferry, or when you cross at an awkward hour.",
        },
      ],
    },
    {
      eyebrow: "The car",
      title: "A proper seat after the border",
      narrow: true,
      blocks: [
        {
          type: "photo",
          src: "/images/car-3.jpg",
          alt: "Rear seats of the RideGo Toyota Corolla used for the Narva to Tallinn transfer",
          caption: "The back seat. After a few hours at the border it matters more than you would think.",
          width: 1200,
          height: 737,
        },
        {
          type: "text",
          html: `A ${facts.car} with leather seats, climate control and four passenger places; two large suitcases and cabin bags fit in the boot. Winter tyres in the cold months — the stretch between Jõhvi and Rakvere can be unpleasant in snow.`,
        },
        {
          type: "text",
          html: `${facts.driver} is both the driver and the person answering your messages, so if your crossing time changes you tell him directly. A child seat comes on request; travelling with a pet — please say so when booking.`,
        },
      ],
    },
    {
      eyebrow: "The crossing",
      title: "Leaving Narva-1: the essentials",
      alt: true,
      narrow: true,
      blocks: [
        {
          type: "details",
          items: [
            {
              open: true,
              title: "Foot crossing, open until 19:00",
              html: "You cross on foot over the bridge from Ivangorod. Narva-1 is open 7:00–19:00 Estonian time, so the last realistic drive to Tallinn starts around seven in the evening and arrives around half past nine.",
            },
            {
              title: "If you don't get through before closing",
              html: "You spend the night on the Russian side and cross in the morning. Message us: moving the trip to another day costs nothing. Current rules are on <a href=\"https://www.politsei.ee/en\" target=\"_blank\" rel=\"noopener\">politsei.ee</a>.",
            },
            {
              title: "Checkpoint phone numbers",
              html: "Narva-1: <a href=\"tel:+3723331600\">+372 333 1600</a>. Ivangorod, Russian side: <a href=\"tel:+78137552978\">+7 81375 5-29-78</a>. Police and Border Guard Board: <a href=\"tel:+3726123000\">+372 612 3000</a>.",
            },
          ],
        },
      ],
    },
  ],
  faq: {
    eyebrow: "Questions",
    title: "Narva to Tallinn transfer: what people ask",
    items: [
      {
        q: "What does a transfer from Narva to Tallinn cost?",
        a: `${eur(n.price)} for the whole car, up to four passengers with luggage. The time of day does not change it, and neither does the fact that the car came from Tallinn to fetch you. Pay in cash or by bank transfer after the trip.`,
      },
      {
        q: "How will the driver know I've crossed the border?",
        a: "You send one WhatsApp message once you are on the Estonian side, and he replies with where the car is parked — close to the Narva-1 exit. Waiting while you go through control is free.",
      },
      {
        q: "How early should I cross for a flight from Tallinn?",
        a: "Join the queue on the Russian side about eight hours before take-off. The drive is two and a half hours; the rest is a buffer for the border and for airport check-in. For an early-afternoon flight it is safer to cross the day before.",
      },
      {
        q: "Can I just get a taxi at the Narva crossing?",
        a: "Sometimes, but do not count on it. There is no reliable rank at the checkpoint, local drivers are reluctant to do a 210 km trip, and in the evening or at weekends there may be no free car at all.",
      },
      {
        q: "What happens if I don't get through before 19:00?",
        a: "The crossing closes for the night, so you cross the next morning. Let us know and we move the pickup to the new time at no charge.",
      },
    ],
  },
  links: {
    eyebrow: "More routes",
    title: "Other routes we drive",
    note: "Routes without an English page yet open WhatsApp with the route already filled in.",
    items: [
      { label: "Tallinn — Narva", price: eur(n.price), page: "tallinn-narva", waText: "Hello! I'd like to book a transfer Tallinn — Narva." },
      { label: "Koidula — Tallinn", price: eur(facts.koidula.price), page: "koidula-tallinn", waText: "Hello! I'd like to book a transfer Koidula — Tallinn." },
      { label: "Luhamaa — Tallinn", price: eur(facts.luhamaa.price), waText: "Hello! I'd like to book a transfer Luhamaa — Tallinn." },
      { label: "Tartu — Koidula or Luhamaa", price: eur(facts.tartu.price), page: "tartu-koidula-luhamaa", waText: "Hello! I'd like to book a transfer between Tartu and the border." },
    ],
  },
  cta: {
    title: "We'll meet you at the border",
    text: "Send the date you cross and your address in Tallinn — we confirm the car and the fare in one message.",
    call: "Call us",
  },
  schema: {
    name: "Narva — Tallinn transfer",
    alternateName: ["Taxi Narva to Tallinn", "Narva border to Tallinn airport transfer"],
    serviceType: "Private transfer from a border crossing",
    description: `Private transfer from the Narva-1 border crossing to Tallinn: ${n.km} km, about 2 h 30 min, ${eur(n.price)} for the whole car. Free waiting while you clear border control, drop-off at Tallinn airport and the port.`,
    areaServed: ["Narva", "Tallinn"],
    offers: [{ name: "Transfer Narva — Tallinn, car for up to 4 passengers", price: n.price }],
    breadcrumbHome: "RideGo",
  },
};
