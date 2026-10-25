/**
 * Narva — Tallinn, эстонская версия. Написана заново. Своя тема — встреча
 * близкого человека, который возвращается из России: заказывает родственник
 * в Эстонии (пара к блоку «teise inimese eest» на tallinn-narva/et.ts, но
 * с другой стороны — встретить, а не проводить). Обращение на «teie».
 *
 * 🔴 Переводил не носитель — до публикации вычитка эстонцем.
 *
 * ПРОВЕРЬ:
 *  - блок «lähedase vastuvõtt»: что водитель сам связывается с пассажиром и
 *    что заказчик может оплатить переводом — владелец не подтверждал;
 *  - водитель говорит по-английски (см. tallinn-narva/en.ts);
 *  - цены Lux Express и Elron — на август 2026.
 */
import { facts, pathFor } from "../../i18n/ui";
import type { Landing } from "../landing";

const n = facts.narva;
const eur = (v: number) => `${v} €`;
const there = pathFor("tallinn-narva", "et");

export const et: Landing = {
  meta: {
    title: `Transfeer Narva–Tallinn: ${eur(n.price)} piirilt | RideGo`,
    description: `Auto ootab teid Narva-1 piiripunktis: ${eur(n.price)} kogu auto eest Tallinna, lennujaama või sadamasse. Sõit umbes 2,5 tundi, ootamine piiril on tasuta.`,
    ogTitle: `Narva piirilt Tallinna, ${eur(n.price)} kogu auto eest`,
    ogDescription: "Piiripunktist otse ettetellitud autosse. Kindel hind ja tasuta ootamine passikontrolli ajal.",
  },
  crumb: "Transfeer Narva — Tallinn",
  hero: {
    eyebrow: `Tagasisõit · ${eur(n.price)} auto eest`,
    h1: ["Narva piirilt", "Tallinna"],
    lead: "Tulete piiripunktist välja Eesti poolele ja auto juba ootab. Väikeses piirilinnas pole vaja taksot otsida: sõidame otse koju, hotelli, Tallinna lennujaama, sadamasse või mis tahes aadressile.",
    answer: [
      `<strong>Lühidalt:</strong> transfeer Narva piirilt Tallinna maksab <strong>${eur(n.price)} kogu auto eest</strong>, kuni neli reisijat koos pagasiga, ja sõit kestab umbes <strong>2 tundi 30 minutit</strong>. Juht ootab Narva-1 juures, kuni te passikontrolli läbite, ja see ootamine on tasuta.`,
      "Täpset aega, millal piirist läbi saate, ei tea keegi ette. Seepärast lepime kokku ligikaudse kellaaja ja te kirjutate WhatsAppis, kui olete Eesti poolel. Broneerige ette: piiripunkti juures ei ole tavaliselt taksot ootamas.",
    ],
    stats: [
      [eur(n.price), "kogu auto eest"],
      ["≈ 2 h 30 min", "Tallinnani"],
      ["0 €", "ootamine piiril"],
    ],
    perks: [
      "Kindel hind auto kohta",
      "Tasuta ootamine piiril",
      "Lennujaama või sadamasse",
      "Lapseiste soovi korral",
      "Sularaha või pangaülekanne",
    ],
    waText: "Tere! Soovin tellida transfeeri Narva — Tallinn. (Transfer Narva — Tallinn)",
  },
  sections: [
    {
      id: "price",
      alt: true,
      eyebrow: "Hind",
      title: `Tagasisõit maksab sama palju: ${eur(n.price)}`,
      lead: "Auto sõidab teile Tallinnast järele, kuid tühja sõidu eest Narva te ei maksa. Hind on sama mis piiri poole, igal kellaajal, mil piiripunkt on avatud.",
      blocks: [
        {
          type: "table",
          caption: "Transfeer Narva — Tallinn: hind ja mis on hinnas",
          cols: ["Teenus", "Hind", "Selgitus"],
          rows: [
            ["Narva piiripunkt → Tallinn", eur(n.price), "kogu auto, kuni 4 reisijat koos pagasiga"],
            ["Ootamine Narva-1 juures", "0 €", "juht ootab, kuni olete läbi, ükskõik kui kaua järjekord kestab"],
            ["Lennujaama või sadamasse", "0 €", "Lennart Meri lennujaam, Vanasadam, Balti jaam, bussijaam või hotell"],
            ["Sõidu viimine teisele päevale", "0 €", "ei jõudnud enne sulgemist? tuleme uuel kuupäeval"],
            ["Tallinn → Narva", eur(n.price), `sama hind piiri poole — <a href="${there}">sõit piirile</a>`],
          ],
        },
        {
          type: "tip",
          html: "<strong>Kaks sõitu, üks sõnum.</strong> Kui sõidate Venemaale ja tulete tagasi Tallinna kaudu, tellige mõlemad suunad korraga. Juht teab mõlemat kuupäeva ja tagasituleku päeval ei pea autot otsima — eriti oluline pühapäeviti ja enne pühi.",
        },
      ],
    },
    {
      id: "relative",
      eyebrow: "Lähedase vastuvõtt",
      title: "Tellige auto vanematele, kes tulevad Venemaalt",
      lead: "Sageli tellib sõidu mitte reisija ise, vaid tema pere Eestis: vanemad või sugulased tulevad Ivangorodist üle silla ja keegi peab nad Narvast ära tooma. Teie ei pea selleks Ida-Virumaale sõitma.",
      narrow: true,
      blocks: [
        {
          type: "text",
          h3: "Mida meile saata",
          html: "Kuupäev, ligikaudne aeg, millal reisija plaanib piirile minna, tema nimi ja telefoninumber ning aadress Tallinnas. Juht võtab reisijaga ise ühendust ja lepib kokku, kuidas teineteist piiripunkti juures leida. Juht räägib vene ja inglise keelt.",
        },
        {
          type: "text",
          h3: "Kui reisijal pole Eesti mobiilset internetti",
          html: "Pärast piiri ei pruugi reisija kohe sõnumit saata. Leppige seepärast eelnevalt kokku, et tema kirjutab teile või meile esimesel võimalusel — või et teie annate meile teada, kui ta helistas. Juht ootab kokkulepitud kohas ega sõida minema.",
        },
        {
          type: "text",
          h3: "Tasute teie, mitte reisija",
          html: "Sõidu saab tasuda teie, pangaülekandega pärast sõitu. Reisija ei pea kaasas kandma eurosid ega muretsema arveldamise pärast.",
        },
        { type: "button", label: "Tellige auto lähedasele", waText: "Tere! Soovin tellida transfeeri Narva piirilt Tallinna oma lähedasele. Kuupäev: " },
      ],
    },
    {
      id: "airport",
      alt: true,
      eyebrow: "Sihtkoht",
      title: "Lennujaam, sadam või koduuks",
      narrow: true,
      blocks: [
        {
          type: "text",
          h3: "Lennule jõudmiseks varu jätmine",
          html: "Sõit piirilt terminalini võtab umbes kaks ja pool tundi, piiril ootamine aga pole ette teada. Lennu puhul soovitame Venemaa poolel järjekorda asuda umbes <strong>kaheksa tundi enne väljalendu</strong>. Saatke lennu number, siis arvestame vastuvõtu aja selle järgi.",
        },
        {
          type: "text",
          h3: "Sadam, raudteejaam ja peatused teel",
          html: "Vanasadam, Balti jaam, bussijaam, hotell või mis tahes aadress Tallinnas. Tahate teel Jõhvis või Rakveres peatuda või ühe reisija varem maha panna? Öelge ette, arvestame selleks aega.",
        },
      ],
    },
    {
      eyebrow: "Kuidas see käib",
      title: "Piiripunktist teie aadressini",
      blocks: [
        {
          type: "steps",
          items: [
            {
              title: "Broneerige ette",
              text: "Kuupäev, piiriületuse ligikaudne aeg ja sihtkoht Tallinnas. Ette seepärast, et auto sõidab esmalt kaks ja pool tundi Narva.",
            },
            {
              title: "Sõnum pärast piiri",
              text: "Üks WhatsAppi sõnum Eesti poolelt. Kui kontroll võttis kauem aega, ei muutu midagi — väljasõit lihtsalt nihkub.",
            },
            {
              title: "Auto väljapääsu lähedal",
              text: "Auto seisab Narva-1 väljapääsu lähedal, kohvritega ei pea kaugele kõndima. Pagasi tõstab juht.",
            },
            {
              title: "Kaks ja pool tundi läände",
              text: "Tallinna–Narva maantee läbi Jõhvi ja Rakvere kokkulepitud kohta: lennujaama, sadamasse, hotelli või koju.",
            },
          ],
        },
      ],
    },
    {
      eyebrow: "Miks ette tellida",
      title: "Kas Narva piiripunkti juurest saab takso?",
      alt: true,
      narrow: true,
      blocks: [
        {
          type: "text",
          html: "Mitte kindlalt. Narva on väike linn ja kohalikud taksod teevad peamiselt lühikesi linnasõite. 210-kilomeetrine sõit Tallinna tähendab neile tühja tagasiteed, seepärast keelduvad paljud või küsivad kõrget hinda. Rakendustes ei pruugi lähedal olla ühtegi autot — eriti õhtuti, pühapäeviti ja vahetult enne kella 19, kui suur hulk inimesi tuleb piirilt korraga.",
        },
        {
          type: "tip",
          html: "<strong>Millal on buss parem.</strong> Reisite üksi, kerge pagasiga ja kiiret pole: Lux Expressi buss (alates umbes 9 €) või Elroni rong (13–23 €) Tallinna on tunduvalt odavam. Auto tasub end ära kahele või enamale reisijale, raske pagasiga, lennule või laevale jõudmiseks.",
        },
      ],
    },
    {
      eyebrow: "Auto",
      title: "Mugav iste pärast piiri",
      narrow: true,
      blocks: [
        {
          type: "photo",
          src: "/images/car-3.jpg",
          alt: "RideGo Toyota Corolla tagaistmed, transfeer Narva — Tallinn",
          caption: "Tagaiste. Pärast mõnetunnist piirijärjekorda on see olulisem, kui arvata võiks.",
          width: 1600,
          height: 1200,
        },
        {
          type: "text",
          html: `${facts.car} nahkistmete, kliimaseadme ja nelja reisijakohaga; pagasiruumi mahub kaks suurt kohvrit ja käsipagas. Talvel talverehvid. Roolis on ${facts.driver}, kes vastab ka sõnumitele — kui piiriületuse aeg muutub, ütlete seda otse talle.`,
        },
      ],
    },
    {
      eyebrow: "Piiripunkt",
      title: "Narva-1 piiripunktist väljudes",
      alt: true,
      narrow: true,
      blocks: [
        {
          type: "details",
          items: [
            {
              open: true,
              title: "Jalgsi, avatud kella 19-ni",
              html: "Piir ületatakse jalgsi üle silla Ivangorodist. Narva-1 on avatud kell 7.00–19.00 Eesti aja järgi. Alates 25. oktoobrist 2026 on kell Venemaa poolel tund aega ees ja Venemaa võrgus võib telefon näidata Moskva aega — kõik ajad sellel lehel on Eesti aja järgi.",
            },
            {
              title: "Kui sulgemiseks läbi ei jõua",
              html: "Siis tuleb ööbida Venemaa poolel ja piir ületada hommikul. Andke meile teada: sõidu viimine teisele päevale on tasuta. Kehtivad reeglid: <a href=\"https://www.politsei.ee/et\" target=\"_blank\" rel=\"noopener\">politsei.ee</a>.",
            },
            {
              title: "Telefoninumbrid",
              html: "Narva-1: <a href=\"tel:+3723331600\">+372 333 1600</a>. Ivangorod, Venemaa pool: <a href=\"tel:+78137552978\">+7 81375 5-29-78</a>. Politsei- ja Piirivalveamet: <a href=\"tel:+3726123000\">+372 612 3000</a>.",
            },
          ],
        },
      ],
    },
  ],
  faq: {
    eyebrow: "Küsimused",
    title: "Transfeer Narva — Tallinn: korduvad küsimused",
    items: [
      {
        q: "Kui palju maksab transfeer Narvast Tallinna?",
        a: `${eur(n.price)} kogu auto eest, kuni neli reisijat koos pagasiga. Kellaaeg hinda ei muuda, samuti mitte see, et auto sõitis teile Tallinnast järele. Tasumine pärast sõitu sularahas või pangaülekandega.`,
      },
      {
        q: "Kas saan tellida auto oma vanematele, kes tulevad Venemaalt?",
        a: "Jah. Saatke meile kuupäev, reisija nimi ja telefoninumber ning aadress Tallinnas. Juht võtab reisijaga ise ühendust, ja sõidu saate tasuda teie pangaülekandega.",
      },
      {
        q: "Kuidas juht teab, et olen piirist läbi?",
        a: "Saatke Eesti poolelt üks WhatsAppi sõnum, juht vastab, kus auto seisab — Narva-1 väljapääsu lähedal. Ootamine kontrolli ajal on tasuta.",
      },
      {
        q: "Kas Narva piiripunkti juurest saab kohapeal takso?",
        a: "Mõnikord, kuid sellele ei tasu loota. Piiri ääres pole kindlat taksopeatust, kohalikud juhid lähevad 210-kilomeetrisele sõidule harva ning õhtuti ja nädalavahetustel ei pruugi vaba autot üldse olla.",
      },
      {
        q: "Mis saab, kui ma enne kella 19 piirist läbi ei saa?",
        a: "Piiripunkt suletakse ööseks, nii et ületate piiri järgmisel hommikul. Andke meile teada ja viime vastuvõtu tasuta uuele ajale.",
      },
    ],
  },
  links: {
    eyebrow: "Teised suunad",
    title: "Kuhu me veel sõidame",
    note: "Suunad, millel eestikeelset lehte veel pole, avavad WhatsAppi, kus suund on juba sisse kirjutatud.",
    items: [
      { label: "Tallinn — Narva", price: eur(n.price), page: "tallinn-narva", waText: "Tere! Soovin tellida transfeeri Tallinn — Narva. (Transfer Tallinn — Narva)" },
      { label: "Koidula — Tallinn", price: eur(facts.koidula.price), waText: "Tere! Soovin tellida transfeeri Koidula — Tallinn. (Transfer Koidula — Tallinn)" },
      { label: "Luhamaa — Tallinn", price: eur(facts.luhamaa.price), waText: "Tere! Soovin tellida transfeeri Luhamaa — Tallinn. (Transfer Luhamaa — Tallinn)" },
      { label: "Tartu — Koidula või Luhamaa", price: eur(facts.tartu.price), page: "tartu-koidula-luhamaa", waText: "Tere! Soovin tellida transfeeri Tartu ja piiri vahel. (Transfer Tartu — border)" },
    ],
  },
  cta: {
    title: "Ootame teid piiril",
    text: "Kirjutage piiriületuse kuupäev ja aadress Tallinnas — kinnitame auto ja hinna ühe sõnumiga.",
    call: "Helistage",
  },
  schema: {
    name: "Transfeer Narva — Tallinn",
    alternateName: ["Takso Narva — Tallinn", "Transfeer Narva piirilt Tallinna lennujaama"],
    serviceType: "Eratransfeer piiripunktist",
    description: `Eratransfeer Narva-1 piiripunktist Tallinna: ${n.km} km, umbes 2 h 30 min, ${eur(n.price)} kogu auto eest. Tasuta ootamine passikontrolli ajal, sõit lennujaama ja sadamasse.`,
    areaServed: ["Narva", "Tallinn"],
    offers: [{ name: "Transfeer Narva — Tallinn, auto kuni 4 reisijale", price: n.price }],
    breadcrumbHome: "RideGo",
  },
};
