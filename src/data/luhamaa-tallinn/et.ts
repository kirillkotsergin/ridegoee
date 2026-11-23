/**
 * Luhamaa — Tallinn, эстонская версия. Написана заново. Своя тема — не только
 * Таллинн: высадка в Выру, Тарту и по пути (раздел «south»), потому что
 * много кто едет с Лухамаа в Южную Эстонию, а не в столицу. Таблица «во
 * сколько прошли контроль → когда будете в Выру / Тарту / Таллинне». Тема
 * встречи родственника — на эстонской Koidula — Tallinn, здесь одной строкой.
 * Обращение на «teie».
 *
 * 🔴 Переводил не носитель — до публикации вычитка эстонцем.
 *
 * ПРОВЕРЬ:
 *  - цена до Выру — у заказчика нет, на странице «hind kinnitame sõnumis»;
 *  - Лухамаа — Выру ~30 км / ~30 мин, Выру — Тарту ~1 ч — по карте;
 *  - что водитель сам связывается с пассажиром — владелец не подтверждал;
 *  - часы 7.00–19.00 с февраля 2026 — на ноябрь 2026.
 */
import { facts, pathFor } from "../../i18n/ui";
import type { Landing } from "../landing";

const l = facts.luhamaa;
const eur = (v: number) => `${v} €`;
const there = pathFor("tallinn-luhamaa", "et");

export const et: Landing = {
  meta: {
    title: `Transfeer Luhamaa–Tallinn: ${eur(l.price)} piirilt | RideGo`,
    description: `Auto ootab Luhamaa piiripunktis: ${eur(l.price)} kogu auto eest Tallinna, Tartusse ${eur(facts.tartu.price)}, ka Võrusse. Umbes 3 h 10 min Tallinnani, ootamine piiril tasuta.`,
    ogTitle: `Luhamaa piirilt Võrusse, Tartusse või Tallinna`,
    ogDescription: "Luhamaal pole linna, taksot ega bussi. Tellige auto ette ja see ootab, kui piirist läbi saate.",
  },
  crumb: "Transfeer Luhamaa — Tallinn",
  hero: {
    eyebrow: `Tagasisõit · ${eur(l.price)} auto eest`,
    h1: ["Luhamaa piirilt", "Tallinna või Lõuna-Eestisse"],
    lead: `Luhamaa piiripunkt asub Riia–Pihkva maanteel keset maad: lähedal pole linna ega taksopeatust. Tuleme kokkulepitud ajaks ja viime teid sinna, kuhu vaja — Võrru, Tartusse või ${l.km} km kaugusele Tallinna.`,
    answer: [
      `<strong>Lühidalt:</strong> transfeer Luhamaa piirilt Tallinna maksab <strong>${eur(l.price)} kogu auto eest</strong>, kuni neli reisijat koos pagasiga, ja sõit kestab umbes <strong>3 tundi 10 minutit</strong>. Tartusse maksab sõit ${eur(facts.tartu.price)}, Võru ja teised kohad teel kinnitame sõnumis. Juht ootab, kuni olete kontrollist läbi, ja ootamine on tasuta.`,
      "Ette tellimine on Luhamaal kohustuslik: piiripunktist ei välju ühtegi liinibussi ja lähim linn Võru on umbes 30 km kaugusel. Leppige kuupäev ja ligikaudne aeg kokku vähemalt päev varem.",
    ],
    stats: [
      [eur(l.price), "Tallinna"],
      [eur(facts.tartu.price), "Tartusse"],
      ["0 €", "ootamine piiril"],
    ],
    perks: [
      "Kindel hind auto kohta",
      "Tasuta ootamine piiril",
      "Võrru, Tartusse või Tallinna",
      "Lapseiste soovi korral",
      "Sularaha või pangaülekanne",
    ],
    waText: "Tere! Soovin tellida transfeeri Luhamaa — Tallinn. (Transfer Luhamaa — Tallinn)",
  },
  sections: [
    {
      id: "price",
      alt: true,
      eyebrow: "Hind",
      title: "Hind sõltub sihtkohast, mitte reisijatest",
      lead: `Auto sõidab teile järele tühjalt. See on hinnas juba sees: Tallinna ${eur(l.price)}, Tartusse ${eur(facts.tartu.price)}, olgu reisijaid üks või neli.`,
      blocks: [
        {
          type: "table",
          caption: "Transfeer Luhamaalt: hinnad sihtkohtade kaupa",
          cols: ["Sihtkoht", "Hind", "Selgitus"],
          rows: [
            ["Luhamaa → Tallinn", eur(l.price), `${l.km} km, umbes 3 h 10 min, kuni 4 reisijat koos pagasiga`],
            ["Luhamaa → Tartu", eur(facts.tartu.price), "umbes 1 h 20 min, Tartu jääb Tallinna teele"],
            ["Luhamaa → Võru", "küsige hinda", "umbes 30 km, kinnitame hinna sõnumis enne sõitu"],
            ["Ootamine piiripunkti juures", "0 €", "juht ootab, kuni olete kontrollist läbi"],
            ["Tallinn → Luhamaa", eur(l.price), `sama hind piiri poole — <a href="${there}">sõit piirile</a>`],
          ],
        },
        {
          type: "tip",
          html: "<strong>Miks ette.</strong> Luhamaal pole taksopeatust ega bussipeatust. Ilma tellitud autota on sealt praktiliselt võimatu edasi saada — eriti õhtul, vahetult enne kella 19 sulgemist.",
        },
      ],
    },
    {
      id: "south",
      eyebrow: "Lõuna-Eesti",
      title: "Võrru, Tartusse või Tallinna",
      lead: "Paljud, kes tulevad Luhamaa kaudu, ei sõida pealinna: kodu on Võrumaal või Tartus, või jätkub sõit Tartust rongiga. Ütlete sihtkoha ja sinna me ka sõidame.",
      narrow: true,
      blocks: [
        {
          type: "table",
          caption: "Kontrollist läbi → kohal (Eesti aeg, ligikaudu)",
          cols: ["Kontrollist läbi", "Võrus", "Tartus", "Tallinnas"],
          rows: [
            ["kell 11.00", "umbes 11.30", "umbes 12.20", "umbes 14.10"],
            ["kell 15.00", "umbes 15.30", "umbes 16.20", "umbes 18.10"],
            ["kell 18.30", "umbes 19.00", "umbes 19.50", "umbes 21.40"],
          ],
        },
        {
          type: "text",
          h3: "Peatus teel ei maksa lisaks",
          html: "Tahate Võrus kedagi maha panna, Tartus poodi minna või süüa? Öelge tellides, arvestame selleks aega. Kui reisijad lähevad eri kohtadesse, sõidame teel mitme aadressi kaudu.",
        },
        {
          type: "text",
          h3: "Tartust rongiga edasi",
          html: `Kui sihtkoht on mujal Eestis, võib olla mõistlik minna Tartust edasi rongiga. Sõit Luhamaalt Tartu raudteejaama maksab ${eur(facts.tartu.price)}; öelge rongi aeg ja arvestame selle järgi.`,
        },
        {
          type: "text",
          h3: "Tellite lähedasele?",
          html: "Saatke kuupäev, reisija nimi ja telefoninumber ning aadress, kuhu sõita. Juht võtab reisijaga ise ühendust ja ütleb, kus auto ootab.",
        },
        { type: "button", label: "Tellige auto Luhamaalt", waText: "Tere! Soovin transfeeri Luhamaa piirilt. Kuupäev ja sihtkoht (Võru / Tartu / Tallinn): " },
      ],
    },
    {
      id: "airport",
      alt: true,
      eyebrow: "Lennujaam ja sadam",
      title: "Luhamaalt lennule või laevale",
      narrow: true,
      blocks: [
        {
          type: "text",
          h3: "Kui palju varu jätta",
          html: "Luhamaalt Tallinna terminalini on koos linnasõiduga umbes kolm ja pool tundi, piiril võib aga kuluda pool tundi või kolm. Soovitame jätta <strong>vähemalt seitse tundi</strong> hetkest, kui asute Venemaa poolel järjekorda, kuni registreerimiseni. Õhtuse lennu puhul on rahulikum piir hommikul ületada.",
        },
        {
          type: "text",
          h3: "Teised sihtkohad Tallinnas",
          html: "Vanasadam, D-terminal, Balti jaam, bussijaam, hotell või kodu. Saatke lennu number või laeva väljumisaeg ja ütleme, mis kellaks peate piirist läbi olema.",
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
              title: "Leppige kokku enne reisi",
              text: "Kuupäev, ligikaudne aeg ja sihtkoht. Tallinnast sõidab auto teieni üle kolme tunni, seepärast väljub see varakult.",
            },
            {
              title: "Sõnum pärast kontrolli",
              text: "Üks WhatsAppi sõnum ja juht sõidab väljapääsu juurde. Kui kontroll venib, kirjutage — ootame ja hind ei muutu.",
            },
            {
              title: "Võru, Tartu, Tallinn",
              text: "Sõidame mööda sama teed põhja poole ja peatume seal, kus kokku lepitud.",
            },
            {
              title: "Kohal",
              text: "Kodu, hotell, raudteejaam, lennujaam või sadam — kuhu iganes vaja.",
            },
          ],
        },
      ],
    },
    {
      eyebrow: "Auto",
      title: "Auto tõkkepuu taga",
      alt: true,
      narrow: true,
      blocks: [
        {
          type: "photo",
          src: "/images/car-1.jpg",
          alt: "RideGo Toyota Corolla eestvaates, transfeer Luhamaa — Tallinn",
          caption: `${facts.car}: ootab teid Luhamaa piiripunkti lähedal.`,
          width: 1200,
          height: 675,
        },
        {
          type: "text",
          html: `${facts.car}: nahkistmed, kliimaseade, neli reisijakohta, pagasiruumi mahub kaks suurt kohvrit ja käsipagas. Talvel talverehvid. Roolis on ${facts.driver}, kes loeb sõnumeid ise — kui piiril venib, ütlete seda otse talle. Lapseiste soovi korral, lemmikloomast andke ette teada.`,
        },
      ],
    },
    {
      eyebrow: "Piiripunkt",
      title: "Luhamaalt väljudes",
      narrow: true,
      blocks: [
        {
          type: "details",
          items: [
            {
              open: true,
              title: "Piiripunkt suletakse kell 19",
              html: "Alates 2026. aasta veebruarist on Luhamaa avatud kell 7.00–19.00 Eesti aja järgi. Alates 25. oktoobrist 2026 võib Venemaa võrgus telefon näidata Moskva aega, mis on tund ees — kõik ajad sellel lehel on Eesti aja järgi.",
            },
            {
              title: "Kui sulgemiseks läbi ei jõua",
              html: "Siis ületatakse piir järgmisel hommikul. Andke meile teada kohe, kui see selgub, ja viime vastuvõtu tasuta uuele ajale. Kehtivad reeglid: <a href=\"https://www.politsei.ee/et\" target=\"_blank\" rel=\"noopener\">politsei.ee</a>.",
            },
            {
              title: "Telefoninumbrid",
              html: "Luhamaa piiripunkt: <a href=\"tel:+3727861830\">+372 786 1830</a>. Šumilkino, Venemaa pool: <a href=\"tel:+78114898321\">+7 811 489-83-21</a>. Politsei- ja Piirivalveamet: <a href=\"tel:+3726123000\">+372 612 3000</a>.",
            },
          ],
        },
      ],
    },
  ],
  faq: {
    eyebrow: "Küsimused",
    title: "Transfeer Luhamaa — Tallinn: korduvad küsimused",
    items: [
      {
        q: "Kui palju maksab transfeer Luhamaalt Tallinna?",
        a: `${eur(l.price)} kogu auto eest — sama palju kui vastassuunas. Reisijate arv ega kellaaeg hinda ei muuda ja ootamine piiril on tasuta. Sularaha või pangaülekanne, ettemaksu pole.`,
      },
      {
        q: "Kas saate viia Tallinna asemel Võrru või Tartusse?",
        a: `Jah. Tartusse maksab sõit ${eur(facts.tartu.price)}, Võru hinna kinnitame sõnumis enne sõitu. Teel saab peatuda ka mujal — öelge tellides.`,
      },
      {
        q: "Kas Luhamaalt saab ilma tellitud autota edasi?",
        a: "Praktiliselt mitte. Piiripunktist ei välju liinibusse, Võrru on umbes 30 km ja tõkkepuu juures taksot ei oota.",
      },
      {
        q: "Mis saab, kui jõuan piirist läbi hiljem või ei jõua enne sulgemist?",
        a: "Kui kontroll venib, kirjutage — juht ootab. Kui enne kella 19 läbi ei jõua, ületate piiri järgmisel hommikul ja viime vastuvõtu tasuta uuele ajale.",
      },
      {
        q: "Kas sõidate ka Tallinnast Luhamaale?",
        a: `Jah, sama hinnaga ${eur(l.price)} — vaadake <a href="${there}">Tallinn — Luhamaa</a>. Mõlemad sõidud on lihtsam korraga tellida.`,
      },
    ],
  },
  links: {
    eyebrow: "Teised suunad",
    title: "Kuhu me veel sõidame",
    note: "Suunad, millel eestikeelset lehte veel pole, avavad WhatsAppi, kus suund on juba sisse kirjutatud.",
    items: [
      { label: "Tallinn — Luhamaa", price: eur(l.price), page: "tallinn-luhamaa", waText: "Tere! Soovin tellida transfeeri Tallinn — Luhamaa. (Transfer Tallinn — Luhamaa)" },
      { label: "Koidula — Tallinn", price: eur(facts.koidula.price), page: "koidula-tallinn", waText: "Tere! Soovin tellida transfeeri Koidula — Tallinn. (Transfer Koidula — Tallinn)" },
      { label: "Narva — Tallinn", price: eur(facts.narva.price), page: "narva-tallinn", waText: "Tere! Soovin tellida transfeeri Narva — Tallinn. (Transfer Narva — Tallinn)" },
      { label: "Luhamaa — Tartu", price: eur(facts.tartu.price), page: "tartu-koidula-luhamaa", waText: "Tere! Soovin tellida transfeeri Luhamaa — Tartu. (Transfer Luhamaa — Tartu)" },
    ],
  },
  cta: {
    title: "Tuleme teile Luhamaale järele?",
    text: "Kirjutage kuupäev, ligikaudne aeg ja sihtkoht — auto on kohal.",
    call: "Helistage",
  },
  schema: {
    name: "Transfeer Luhamaa — Tallinn",
    alternateName: ["Takso Luhamaa — Tallinn", "Transfeer Luhamaa piirilt Tartusse", "Luhamaa piiripunktist Võrru"],
    serviceType: "Eratransfeer piiripunktist",
    description: `Eratransfeer Luhamaa piiripunktist Tallinna: ${l.km} km läbi Võru ja Tartu, umbes 3 h 10 min, ${eur(l.price)} kogu auto eest; Tartusse ${eur(facts.tartu.price)}. Tasuta ootamine piirikontrolli ajal.`,
    areaServed: ["Luhamaa", "Võru", "Tartu", "Tallinn"],
    offers: [
      { name: "Transfeer Luhamaa — Tallinn, auto kuni 4 reisijale", price: l.price },
      { name: "Transfeer Luhamaa — Tartu, auto kuni 4 reisijale", price: facts.tartu.price },
    ],
    breadcrumbHome: "RideGo",
  },
};
