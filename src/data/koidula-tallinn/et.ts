/**
 * Koidula — Tallinn, эстонская версия. Написана заново. Своя тема — встреча
 * близкого, который возвращается из Печор или Пскова, и высадка не только в
 * Таллинне, но и в Тарту по пути (раздел «relative»). На эстонской
 * Narva — Tallinn тема встречи та же, но там упор на связь после границы;
 * здесь — на то, что Койдула в деревне и случайной машины там не будет.
 * Обращение на «teie».
 *
 * 🔴 Переводил не носитель — до публикации вычитка эстонцем.
 *
 * ПРОВЕРЬ:
 *  - что водитель сам связывается с пассажиром и что заказчик может оплатить
 *    переводом — владелец не подтверждал;
 *  - «машина ждёт неподалёку, у пункта пропуска стоять нельзя» — с русской страницы;
 *  - часы 7.00–19.00 с февраля 2026 — на октябрь 2026.
 */
import { facts, pathFor } from "../../i18n/ui";
import type { Landing } from "../landing";

const k = facts.koidula;
const eur = (v: number) => `${v} €`;
const there = pathFor("tallinn-koidula", "et");

export const et: Landing = {
  meta: {
    title: `Transfeer Koidula–Tallinn: ${eur(k.price)} piirilt | RideGo`,
    description: `Auto ootab teid Koidula piiripunktis: ${eur(k.price)} kogu auto eest Tallinna, lennujaama või sadamasse, soovi korral Tartusse. Umbes 3 tundi, ootamine tasuta.`,
    ogTitle: `Koidula piirilt Tallinna, ${eur(k.price)} kogu auto eest`,
    ogDescription: "Koidulas pole taksopeatust ega bussijaama. Tellige auto ette ja see ootab, kui piirist läbi saate.",
  },
  crumb: "Transfeer Koidula — Tallinn",
  hero: {
    eyebrow: `Tagasisõit · ${eur(k.price)} auto eest`,
    h1: ["Koidula piirilt", "Tallinna"],
    lead: `Koidula piiripunkt asub Setomaa külade vahel: linna, jaama ega taksopeatust seal pole. Tuleme kokkulepitud ajaks ja sõidame Tallinna — ${k.km} km läbi Tartu, umbes kolm tundi, üks hind kogu autole.`,
    answer: [
      `<strong>Lühidalt:</strong> transfeer Koidula piirilt Tallinna maksab <strong>${eur(k.price)} kogu auto eest</strong>, kuni neli reisijat koos pagasiga, ja sõit kestab umbes <strong>3 tundi 5 minutit</strong>. Juht ootab piiripunkti lähedal, kuni te kontrolli läbite, ja see ootamine on tasuta.`,
      "Ette tellimine on Koidulas veel olulisem kui Narvas: auto sõidab teieni kolm tundi ja kohapeal sõidukit leida on praktiliselt võimatu. Lepime kokku ligikaudse aja ja te kirjutate WhatsAppis, kui olete Eesti poolel.",
    ],
    stats: [
      [eur(k.price), "kogu auto eest"],
      ["≈ 3 h 5 min", "Tallinnani"],
      ["0 €", "ootamine piiril"],
    ],
    perks: [
      "Kindel hind auto kohta",
      "Tasuta ootamine piiril",
      "Lennujaama, sadamasse või Tartusse",
      "Lapseiste soovi korral",
      "Sularaha või pangaülekanne",
    ],
    waText: "Tere! Soovin tellida transfeeri Koidula — Tallinn. (Transfer Koidula — Tallinn)",
  },
  sections: [
    {
      id: "price",
      alt: true,
      eyebrow: "Hind",
      title: `Tagasi sama hinnaga: ${eur(k.price)}`,
      lead: "Juht sõidab teile järele kolm tundi tühja autoga. See on hinnas juba sees ega tule arvele juurde.",
      blocks: [
        {
          type: "table",
          caption: "Transfeer Koidula — Tallinn: hind ja mis on hinnas",
          cols: ["Teenus", "Hind", "Selgitus"],
          rows: [
            ["Koidula piiripunkt → Tallinn", eur(k.price), "kogu auto, kuni 4 reisijat koos pagasiga"],
            ["Ootamine piiripunkti juures", "0 €", "juht ootab, kuni olete kontrollist läbi"],
            ["Lennujaama, sadamasse või hotelli", "0 €", "Lennart Meri lennujaam, Vanasadam, Balti jaam, bussijaam"],
            ["Koidula → Tartu", eur(facts.tartu.price), "kui sihtkoht on Tartu, on sõit lühem ja odavam"],
            ["Tallinn → Koidula", eur(k.price), `sama hind piiri poole — <a href="${there}">sõit piirile</a>`],
          ],
        },
        {
          type: "tip",
          html: "<strong>Mõlemad suunad korraga.</strong> Kui tellite sõidu piirile ja tagasi ühe sõnumiga, teab juht mõlemat kuupäeva ette ja tagasituleku päeval ei pea autot otsima — pühapäeval võib see olla keeruline.",
        },
      ],
    },
    {
      id: "relative",
      eyebrow: "Lähedase vastuvõtt",
      title: "Lähedane tuleb Petserist või Pihkvast tagasi",
      lead: "Sageli tellib Koidula sõidu pere Eestis: vanemad või sugulased on käinud Petseris, Pihkvas või kaugemal ja keegi peab nad piirilt ära tooma. Ise ei pea selleks Setomaale sõitma.",
      narrow: true,
      blocks: [
        {
          type: "text",
          h3: "Mida meile saata",
          html: "Kuupäev, millal reisija plaanib Venemaa poolel järjekorda minna, tema nimi ja telefoninumber, reisijate arv ja aadress, kuhu sõita. Juht võtab reisijaga ise ühendust ja ütleb, kus auto ootab — päris piiripunkti juures autod seista ei tohi, nii et ta on lähedal ja tuleb sõnumi peale kohale.",
        },
        {
          type: "text",
          h3: "Tallinna asemel Tartusse",
          html: `Kui lähedane elab Tartus või Lõuna-Eestis, ei pea Tallinna sõitma: Koidulast Tartusse maksab ${eur(facts.tartu.price)}. Muu sihtkoha puhul teel kirjutage aadress ja kinnitame hinna.`,
        },
        {
          type: "text",
          h3: "Arve tellijale",
          html: "Kui tellija olete teie, maksate ka teie — ülekandega, kui sõit on tehtud. Reisijal pole pärast Venemaal käimist vaja eurosularaha otsida.",
        },
        { type: "button", label: "Tellige auto lähedasele", waText: "Tere! Soovin tellida transfeeri Koidula piirilt oma lähedasele. Kuupäev ja sihtkoht: " },
      ],
    },
    {
      id: "airport",
      alt: true,
      eyebrow: "Sihtkoht",
      title: "Lennule, laevale või koju",
      narrow: true,
      blocks: [
        {
          type: "text",
          h3: "Kui ees on lend või laev",
          html: "Koidulast terminalini on umbes kolm tundi, piiril võib aga kuluda pool tundi või kolm. Soovitame jätta <strong>vähemalt kuus kuni seitse tundi</strong> hetkest, kui asute Venemaa poolel järjekorda, kuni registreerimiseni. Õhtuse lennu puhul on rahulikum piir hommikul ületada.",
        },
        {
          type: "text",
          h3: "Peatused teel",
          html: "Tee kulgeb läbi Tartu. Tahate seal peatuda, kedagi maha panna või süüa? Öelge ette, arvestame selleks aega.",
        },
      ],
    },
    {
      eyebrow: "Kuidas see käib",
      title: "Auto ootab Eesti poolel",
      blocks: [
        {
          type: "steps",
          items: [
            {
              title: "Tellige ette",
              text: "Koidulas pole see formaalsus: juhuslikku autot sinna ei tule. Kirjutage kuupäev ja piiriületuse ligikaudne aeg.",
            },
            {
              title: "Sõnum pärast kontrolli",
              text: "Üks WhatsAppi sõnum ja juht sõidab kohale. Kui kontroll venib, andke teada — ootame ja hind ei muutu.",
            },
            {
              title: "Läbi Tartu põhja",
              text: "Setomaa, Tartu ja sealt maanteed mööda Tallinna. Teel teeme peatuse: kolm tundi järjest pärast piirijärjekorda on palju.",
            },
            {
              title: "Kohal",
              text: "Hotell, kodu, lennujaam, sadam või bussijaam — või Tartu, kui see sobib paremini.",
            },
          ],
        },
      ],
    },
    {
      eyebrow: "Auto",
      title: "Mugav tagaiste pärast piiri",
      alt: true,
      narrow: true,
      blocks: [
        {
          type: "photo",
          src: "/images/car-3.jpg",
          alt: "RideGo Toyota Corolla tagaistmed, transfeer Koidula — Tallinn",
          caption: "Tagaiste. Pärast tunde piiril on see olulisem, kui pildilt paistab.",
          width: 1200,
          height: 737,
        },
        {
          type: "text",
          html: `${facts.car}: nahkistmed, kliimaseade, neli reisijakohta, pagasiruumi mahub kaks suurt kohvrit ja käsipagas. Roolis on ${facts.driver}, kes loeb sõnumeid ise — kui piiril venib, ütlete seda otse talle. Lapseiste soovi korral, lemmikloomast andke ette teada.`,
        },
      ],
    },
    {
      eyebrow: "Miks ette tellida",
      title: "Kas Koidulast saab ühistranspordiga edasi?",
      narrow: true,
      blocks: [
        {
          type: "text",
          html: "Vaevaliselt. Koidula on küla Setomaa vallas, mitte linn. Bussid käivad harva, Elroni liinil R46 on paar rongi päevas umbes kahe kilomeetri kaugusel piirist ja taksorakendus ei leia lähedalt tavaliselt ühtegi autot. Omal käel Tartusse jõudmine võtab kaua aega, Tallinna veel kauem.",
        },
        {
          type: "tip",
          html: "<strong>Millal ühistransport sobib.</strong> Reisite üksi ja kerge pagasiga, kiiret pole ja piiriületus langeb kokku rongi või bussi ajaga. Muidu — pagasiga, lennule jõudmiseks või mitme reisijaga — on ette tellitud auto lihtsaim lahendus.",
        },
      ],
    },
    {
      eyebrow: "Piiripunkt",
      title: "Koidulast väljudes",
      alt: true,
      narrow: true,
      blocks: [
        {
          type: "details",
          items: [
            {
              open: true,
              title: "Piiripunkt suletakse kell 19",
              html: "Alates 2026. aasta veebruarist on Koidula avatud kell 7.00–19.00 Eesti aja järgi. Alates 25. oktoobrist 2026 võib Venemaa võrgus telefon näidata Moskva aega, mis on tund ees — kõik ajad sellel lehel on Eesti aja järgi.",
            },
            {
              title: "Kui sulgemiseks läbi ei jõua",
              html: "Siis ületatakse piir järgmisel hommikul. Andke meile teada ja viime vastuvõtu tasuta uuele ajale. Kehtivad reeglid: <a href=\"https://www.politsei.ee/et\" target=\"_blank\" rel=\"noopener\">politsei.ee</a>.",
            },
            {
              title: "Telefoninumbrid",
              html: "Koidula piiripunkt: <a href=\"tel:+3727861800\">+372 786 1800</a>. Kunitšina Gora, Venemaa pool: <a href=\"tel:+78114893421\">+7 811 489-34-21</a>. Politsei- ja Piirivalveamet: <a href=\"tel:+3726123000\">+372 612 3000</a>.",
            },
          ],
        },
      ],
    },
  ],
  faq: {
    eyebrow: "Küsimused",
    title: "Transfeer Koidula — Tallinn: korduvad küsimused",
    items: [
      {
        q: "Kui palju maksab transfeer Koidulast Tallinna?",
        a: `${eur(k.price)} kogu auto eest — sama palju kui vastassuunas. Reisijate ja kohvrite arv ega kellaaeg hinda ei muuda. Sularaha või pangaülekanne, ettemaksu pole.`,
      },
      {
        q: "Kas saan tellida auto vanematele, kes tulevad Koidula kaudu tagasi?",
        a: "Jah. Saatke kuupäev, reisija nimi ja telefoninumber ning aadress, kuhu sõita. Juht võtab reisijaga ise ühendust, ja sõidu saate tasuda teie pangaülekandega.",
      },
      {
        q: "Kuidas juht teab, et olen piirist läbi?",
        a: "Saatke WhatsAppi sõnum või helistage. Seni ootab juht lähedal, sest päris piiripunkti juures autod seista ei tohi. Ootamine kontrolli ajal on tasuta.",
      },
      {
        q: "Kas saate viia Tallinna asemel Tartusse?",
        a: `Jah, Tartu jääb teele ja on odavam — ${eur(facts.tartu.price)}. Kirjutage, kuhu linnas soovite, ja kinnitame.`,
      },
      {
        q: "Kas sõidate ka Tallinnast Koidulasse?",
        a: `Jah, sama hinnaga ${eur(k.price)} — vaadake <a href="${there}">Tallinn — Koidula</a>. Mõlemad sõidud on lihtsam korraga tellida, siis teab juht kuupäevi ette.`,
      },
    ],
  },
  links: {
    eyebrow: "Teised suunad",
    title: "Kuhu me veel sõidame",
    note: "Suunad, millel eestikeelset lehte veel pole, avavad WhatsAppi, kus suund on juba sisse kirjutatud.",
    items: [
      { label: "Tallinn — Koidula", price: eur(k.price), page: "tallinn-koidula", waText: "Tere! Soovin tellida transfeeri Tallinn — Koidula. (Transfer Tallinn — Koidula)" },
      { label: "Luhamaa — Tallinn", price: eur(facts.luhamaa.price), page: "luhamaa-tallinn", waText: "Tere! Soovin tellida transfeeri Luhamaa — Tallinn. (Transfer Luhamaa — Tallinn)" },
      { label: "Narva — Tallinn", price: eur(facts.narva.price), page: "narva-tallinn", waText: "Tere! Soovin tellida transfeeri Narva — Tallinn. (Transfer Narva — Tallinn)" },
      { label: "Koidula — Tartu", price: eur(facts.tartu.price), page: "tartu-koidula-luhamaa", waText: "Tere! Soovin tellida transfeeri Koidula — Tartu. (Transfer Koidula — Tartu)" },
    ],
  },
  cta: {
    title: "Tuleme teile Koidulasse järele?",
    text: "Kirjutage kuupäev ja piiriületuse ligikaudne aeg — auto on kohal.",
    call: "Helistage",
  },
  schema: {
    name: "Transfeer Koidula — Tallinn",
    alternateName: ["Takso Koidula — Tallinn", "Transfeer Koidula piirilt Tallinna lennujaama", "Koidula piiripunktist Tartusse"],
    serviceType: "Eratransfeer piiripunktist",
    description: `Eratransfeer Koidula piiripunktist Tallinna: ${k.km} km läbi Tartu, umbes 3 h 5 min, ${eur(k.price)} kogu auto eest. Tasuta ootamine piirikontrolli ajal, sõit lennujaama, sadamasse või Tartusse.`,
    areaServed: ["Koidula", "Tartu", "Tallinn"],
    offers: [{ name: "Transfeer Koidula — Tallinn, auto kuni 4 reisijale", price: k.price }],
    breadcrumbHome: "RideGo",
  },
};
