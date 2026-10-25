/**
 * Koidula — Tallinn, английская версия. Написана с нуля. Своя тема — встреча
 * в месте, где вокруг ничего нет: где стоит машина, что прислать заранее и
 * что делать без мобильного интернета после границы (раздел «pickup»).
 * Расчёт под рейс здесь короче, чем на Narva — Tallinn, чтобы не повторяться.
 *
 * ПРОВЕРЬ перед публикацией:
 *  - «машина ждёт неподалёку, у самого пункта пропуска стоять нельзя» —
 *    взято с русской страницы, водитель не подтверждал для этого текста;
 *  - запас «6–7 часов от очереди на российской стороне до регистрации» —
 *    из русской страницы;
 *  - часы 7:00–19:00 с февраля 2026 — на октябрь 2026;
 *  - водитель говорит по-английски (см. tallinn-narva/en.ts).
 */
import { facts, pathFor } from "../../i18n/ui";
import type { Landing } from "../landing";

const k = facts.koidula;
const eur = (v: number) => `€${v}`;
const there = pathFor("tallinn-koidula", "en");

export const en: Landing = {
  meta: {
    title: `Koidula to Tallinn Transfer: ${eur(k.price)} per Car | RideGo`,
    description: `A car waiting for you at the Koidula border crossing: ${eur(k.price)} for the whole car to Tallinn, its airport or harbour. About 3 hours, free waiting.`,
    ogTitle: `Koidula border to Tallinn, ${eur(k.price)} for the whole car`,
    ogDescription: "No taxi rank and no station at Koidula. Book the car ahead and it is there when you clear border control.",
  },
  crumb: "Koidula — Tallinn transfer",
  hero: {
    eyebrow: `Return run · ${eur(k.price)} per car`,
    h1: ["Koidula to Tallinn", "a car at the border"],
    lead: `Koidula sits among the farms of Setomaa: there is no town at the crossing, no station and no taxi rank. We arrive at the agreed time and drive you to Tallinn — ${k.km} km via Tartu, about three hours, one fare for the whole car.`,
    answer: [
      `<strong>In short:</strong> a transfer from the Koidula border to Tallinn costs <strong>${eur(k.price)} for the whole car</strong>, up to four passengers with luggage, and the drive takes about <strong>3 hours 5 minutes</strong>. The driver waits near the checkpoint while you clear control, and the waiting is free.`,
      "Booking ahead matters more here than at Narva: the car needs three hours to reach you, and there is practically no way to find transport on the spot. Agree a rough time, then message us on WhatsApp once you are on the Estonian side.",
    ],
    stats: [
      [eur(k.price), "for the whole car"],
      ["≈ 3 h 5 min", "to Tallinn"],
      ["€0", "for waiting at the border"],
    ],
    perks: [
      "One fixed fare per car",
      "Free waiting at the checkpoint",
      "Drop-off at the airport or harbour",
      "Child seat on request",
      "Cash or bank transfer",
    ],
    waText: "Hello! I'd like to book a transfer Koidula — Tallinn.",
  },
  sections: [
    {
      id: "price",
      alt: true,
      eyebrow: "Fare",
      title: `Same fare as the way out: ${eur(k.price)}`,
      lead: "The driver spends three hours getting to you with an empty car. That is already in the price and does not appear on top of it.",
      blocks: [
        {
          type: "table",
          caption: "Koidula — Tallinn transfer: fare and what is included",
          cols: ["Item", "Price", "What it means"],
          rows: [
            ["Koidula border → Tallinn", eur(k.price), "the whole car, up to 4 passengers and their luggage"],
            ["Waiting at the checkpoint", "€0", "the driver stays until you are through, however long it takes"],
            ["Drop-off at the airport, harbour or hotel", "€0", "Lennart Meri airport, the Old City Harbour, Balti jaam, the coach station"],
            ["Koidula → Tartu instead", eur(facts.tartu.price), "if Tartu is where you are going, the trip is shorter"],
            ["Tallinn → Koidula", eur(k.price), `same fare outbound — <a href="${there}">the route to the border</a>`],
          ],
        },
        {
          type: "tip",
          html: "<strong>Going there and back?</strong> Book both trips in one message. The driver then has both dates in the diary, and you are not looking for a car on the day you return — which, on a Sunday, can be the hard part.",
        },
      ],
    },
    {
      id: "pickup",
      eyebrow: "The pickup",
      title: "Being collected at a crossing in the countryside",
      lead: "At a city station you can improvise. At Koidula you cannot, so the details are agreed before you set off from Russia.",
      narrow: true,
      blocks: [
        {
          type: "text",
          h3: "What to send us in advance",
          html: "The date, roughly when you expect to join the queue on the Russian side, how many of you there are, and where in Tallinn you are going. A phone number we can call, too — ideally one that will work in Estonia.",
        },
        {
          type: "text",
          h3: "Where the car waits",
          html: "Cars are not allowed to stand right at the checkpoint, so the driver waits close by and comes over as soon as you write. You will not be walking down a country road with your bags.",
        },
        {
          type: "text",
          h3: "If your phone has no data after the border",
          html: "It happens: a Russian SIM may not connect straight away in Estonia. Agree a fallback before you leave — for example, that you call from the checkpoint, or that someone in your family messages us for you. Either way the driver does not leave: he knows you are crossing a border, not running late for a taxi.",
        },
      ],
    },
    {
      id: "airport",
      alt: true,
      eyebrow: "Airport and harbour",
      title: "From Koidula to a flight or a ferry",
      lead: "This is the version of the trip that needs the most care: the road is predictable, the border is not.",
      narrow: true,
      blocks: [
        {
          type: "text",
          h3: "How much time to leave",
          html: "Koidula to the terminal is about three hours. Add the border itself, which can take half an hour or three. We suggest leaving <strong>at least six to seven hours</strong> between joining the queue on the Russian side and check-in. For an evening flight, crossing in the morning is the calm option.",
        },
        {
          type: "text",
          h3: "Not going to Tallinn after all?",
          html: `The road runs through Tartu, so you can be dropped there — for ${eur(facts.tartu.price)} if Tartu is your final stop. Or anywhere in Tallinn: a hotel, a flat, Balti jaam, the coach station.`,
        },
        { type: "button", label: "Book a pickup at Koidula", waText: "Hello! I need a transfer from Koidula to Tallinn. Date and rough time: " },
      ],
    },
    {
      eyebrow: "How it works",
      title: "The car waits on the Estonian side",
      blocks: [
        {
          type: "steps",
          items: [
            {
              title: "Book ahead",
              text: "Here it is not a formality: no car turns up at Koidula by chance. Send the date and a rough time for crossing.",
            },
            {
              title: "Message once you are through",
              text: "One WhatsApp message and the driver pulls up. Controls taking longer than expected? Tell us — we wait, and the price does not change.",
            },
            {
              title: "Via Tartu",
              text: "Setomaa, Tartu, then the highway to Tallinn. We stop on the way: three hours in one go after a border queue is no fun.",
            },
            {
              title: "Drop-off where you need it",
              text: "Hotel, flat, airport, harbour or coach station — or Tartu, if that suits you better.",
            },
          ],
        },
      ],
    },
    {
      eyebrow: "The car",
      title: "Somewhere comfortable to sit after the border",
      alt: true,
      narrow: true,
      blocks: [
        {
          type: "photo",
          src: "/images/car-3.jpg",
          alt: "Rear seats of the RideGo Toyota Corolla, Koidula to Tallinn transfer",
          caption: "The back seat. After hours at a border it matters more than it looks.",
          width: 1200,
          height: 737,
        },
        {
          type: "text",
          html: `A ${facts.car}: leather interior, climate control, four passenger seats, two large suitcases plus cabin bags in the boot. Winter tyres in winter, working air conditioning in summer. ${facts.driver} drives and reads the messages himself, so a delay at the border goes straight to him, not to a dispatcher. A child seat on request; travelling with a pet — tell us in advance.`,
        },
      ],
    },
    {
      eyebrow: "Getting away from Koidula",
      title: "Is there any transport at Koidula?",
      narrow: true,
      blocks: [
        {
          type: "text",
          html: "Very little. Koidula is a village in Setomaa parish, not a town. Buses are infrequent, the Elron line R46 runs a couple of trains a day from a station about 2 km from the crossing, and taxi apps rarely find a car anywhere nearby. Getting to Tartu on your own takes a long time, and Tallinn longer still.",
        },
        {
          type: "tip",
          html: "<strong>When public transport is fine.</strong> You are alone, travelling light, in no hurry, and your crossing fits the train or bus times. Otherwise — with luggage, a flight to catch or several people — a booked car is the straightforward answer.",
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
              title: "The crossing closes at 19:00",
              html: "Since February 2026 Koidula has been open 7:00–19:00 Estonian time. Come through late in the day and we reach Tallinn after dark — that is fine, we drive at any hour, just let us know. From 25 October 2026 a phone on a Russian network may still show Moscow time, an hour ahead; all times on this page are Estonian.",
            },
            {
              title: "If you do not make it before closing",
              html: "Then you cross the next morning. Tell us and we move the pickup to the new time at no charge. Current rules are published at <a href=\"https://www.politsei.ee/en\" target=\"_blank\" rel=\"noopener\">politsei.ee</a>.",
            },
            {
              title: "Useful phone numbers",
              html: "Koidula checkpoint: <a href=\"tel:+3727861800\">+372 786 1800</a>. Kunichina Gora, Russian side: <a href=\"tel:+78114893421\">+7 811 489-34-21</a>. Estonian Police and Border Guard Board: <a href=\"tel:+3726123000\">+372 612 3000</a>.",
            },
          ],
        },
      ],
    },
  ],
  faq: {
    eyebrow: "Questions",
    title: "Koidula to Tallinn transfer: questions we get asked",
    items: [
      {
        q: "How much is a transfer from Koidula to Tallinn?",
        a: `${eur(k.price)} for the whole car — the same as in the other direction. The number of passengers, bags and the time of day do not change it. Cash or bank transfer, no prepayment.`,
      },
      {
        q: "How long is the drive from Koidula to Tallinn?",
        a: `About 3 hours 5 minutes, ${k.km} km via Tartu. Add the time for the border itself: nobody knows it in advance, so leave a margin if you have a flight or a ferry.`,
      },
      {
        q: "How will the driver know I have crossed the border?",
        a: "You send a WhatsApp message or call. Until then the driver waits nearby — cars cannot stand right at the checkpoint. Waiting while you go through control is free.",
      },
      {
        q: "Can you take me to Tartu instead of Tallinn?",
        a: `Yes, Tartu is on the way and costs less — ${eur(facts.tartu.price)}. Tell us where in the town you need to be and we will confirm.`,
      },
      {
        q: "Do you also drive from Tallinn to Koidula?",
        a: `Yes, for the same ${eur(k.price)} — see <a href="${there}">Tallinn to Koidula</a>. It is easiest to book both trips at once, so the driver knows both dates.`,
      },
    ],
  },
  links: {
    eyebrow: "More routes",
    title: "Other routes we drive",
    note: "Routes without an English page yet open WhatsApp with the route already filled in.",
    items: [
      { label: "Tallinn — Koidula", price: eur(k.price), page: "tallinn-koidula", waText: "Hello! I'd like to book a transfer Tallinn — Koidula." },
      { label: "Luhamaa — Tallinn", price: eur(facts.luhamaa.price), page: "luhamaa-tallinn", waText: "Hello! I'd like to book a transfer Luhamaa — Tallinn." },
      { label: "Narva — Tallinn", price: eur(facts.narva.price), page: "narva-tallinn", waText: "Hello! I'd like to book a transfer Narva — Tallinn." },
      { label: "Koidula — Tartu", price: eur(facts.tartu.price), page: "tartu-koidula-luhamaa", waText: "Hello! I'd like to book a transfer Koidula — Tartu." },
    ],
  },
  cta: {
    title: "Need collecting at Koidula?",
    text: "Send the date and a rough time for crossing — the car will be there.",
    call: "Call us",
  },
  schema: {
    name: "Koidula — Tallinn transfer",
    alternateName: ["Taxi Koidula to Tallinn", "Koidula border to Tallinn airport", "Pickup at Koidula border crossing"],
    serviceType: "Private transfer from a border crossing",
    description: `Private transfer from the Koidula border crossing to Tallinn: ${k.km} km via Tartu, about 3 h 5 min, ${eur(k.price)} for the whole car. Free waiting during border control, drop-off at the airport or harbour.`,
    areaServed: ["Koidula", "Tartu", "Tallinn"],
    offers: [{ name: "Transfer Koidula — Tallinn, car for up to 4 passengers", price: k.price }],
    breadcrumbHome: "RideGo",
  },
};
