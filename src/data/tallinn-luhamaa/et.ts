/**
 * Tallinn — Luhamaa, эстонская версия. Написана заново. Своя тема — ночной
 * выезд к открытию перехода в 7:00 (раздел «night»): во сколько выезжать,
 * зачем быть у шлагбаума первым, что взять в дорогу. Тема «заказ за другого
 * человека» на эстонских Нарве и Койдуле уже есть — здесь только одной
 * строкой. Обращение на «teie».
 *
 * 🔴 Переводил не носитель — до публикации вычитка эстонцем.
 *
 * ПРОВЕРЬ:
 *  - пропускают ли в Лухамаа пешеходов (см. en.ts);
 *  - Выру — Лухамаа ~30 км и отсутствие рейсов до Люты — из гида, август 2026;
 *  - «к открытию очередь короче, чем днём» — вывод, не данные погранслужбы;
 *  - часы 7.00–19.00 с февраля 2026 — на ноябрь 2026.
 */
import { facts, pathFor } from "../../i18n/ui";
import type { Landing } from "../landing";

const l = facts.luhamaa;
const eur = (v: number) => `${v} €`;
const back = pathFor("luhamaa-tallinn", "et");
const koidula = pathFor("tallinn-koidula", "et");
const narva = pathFor("tallinn-narva", "et");

export const et: Landing = {
  meta: {
    title: `Transfeer Tallinn–Luhamaa: ${eur(l.price)} auto eest | RideGo`,
    description: `Eraauto Tallinnast Luhamaa piiripunkti Riia–Pihkva maanteel: ${eur(l.price)} kogu auto eest, umbes 3 h 10 min. Öine väljasõit kella 7 avamiseks ilma lisatasuta.`,
    ogTitle: `Tallinnast Luhamaa piiripunkti, ${eur(l.price)} kogu auto eest`,
    ogDescription: `${l.km} km uksest Eesti lõunapoolseima maanteepiiripunktini. Kindel hind kuni neljale reisijale, ka öösel.`,
  },
  crumb: "Transfeer Tallinn — Luhamaa",
  hero: {
    eyebrow: `Lõunapoolseim piiripunkt · ${eur(l.price)} auto eest`,
    h1: ["Tallinnast Luhamaale", "piiri avamise ajaks"],
    lead: `Luhamaa on Eesti lõunapoolseim maanteepiiripunkt Venemaale, Riia–Pihkva maanteel. Tallinnast on sinna ${l.km} km läbi Tartu ja Võru, ja piiripunkti juurde ei sõida ükski liinibuss.`,
    answer: [
      `<strong>Lühidalt:</strong> transfeer Tallinnast Luhamaale maksab <strong>${eur(l.price)} kogu auto eest</strong>, kuni neli reisijat koos pagasiga, ja sõit kestab umbes <strong>3 tundi 10 minutit</strong>. Hinnas on pealevõtmine kodust, hotellist, lennujaamast või sadamast, pagas ja lapseiste.`,
      `Piiripunkt on avatud kell 7.00–19.00 Eesti aja järgi. Kes tahab olla tõkkepuu juures avamise ajal, sõidab Tallinnast välja umbes kell 3.30 — öine sõit ei maksa rohkem. Tartust alustades maksab sõit ${eur(facts.tartu.price)}.`,
    ],
    stats: [
      [eur(l.price), "kogu auto eest"],
      ["≈ 3 h 10 min", "teel"],
      ["kell 3.30", "väljasõit avamiseks"],
    ],
    perks: [
      "Kindel hind auto kohta",
      "Öine väljasõit ilma lisatasuta",
      "Lennujaamast ja sadamast",
      "Lapseiste soovi korral",
      "Sularaha või pangaülekanne",
    ],
    waText: "Tere! Soovin tellida transfeeri Tallinn — Luhamaa. (Transfer Tallinn — Luhamaa)",
  },
  sections: [
    {
      id: "price",
      alt: true,
      eyebrow: "Hind",
      title: `Pikim sõit, sama ${eur(l.price)} mis Koidulasse`,
      lead: "Hind kehtib kogu autole ega sõltu kellaajast: kell kolm öösel väljasõit maksab sama palju kui keskpäeval.",
      blocks: [
        {
          type: "table",
          caption: "Transfeer Tallinn — Luhamaa: hind ja mis on hinnas",
          cols: ["Teenus", "Hind", "Selgitus"],
          rows: [
            ["Tallinn → Luhamaa piiripunkt", eur(l.price), `${l.km} km, umbes 3 h 10 min, kuni 4 reisijat koos pagasiga`],
            ["Luhamaa → Tallinn", eur(l.price), `sama hind tagasi — <a href="${back}">tagasisõit</a>`],
            ["Tartu → Luhamaa", eur(facts.tartu.price), "kui alustate Tartust: umbes 1 h 20 min"],
            ["Öine väljasõit", "0 €", "kella 7 avamiseks sõidame välja öösel, lisatasu pole"],
            ["Lennujaam, sadam, lapseiste, pagas", "0 €", "hilinenud lend või laev ei maksa lisaks"],
          ],
        },
        {
          type: "tip",
          html: "<strong>Tasumine.</strong> Sularahas juhile või pangaülekandega, eurodes, pärast sõitu. Ettemaksu ei küsi. Kui tellite sõidu teisele inimesele, võite tasuda teie — kirjutage seda tellimuses.",
        },
      ],
    },
    {
      id: "night",
      eyebrow: "Varahommikul piiril",
      title: "Öösel välja, kell 7 tõkkepuu juures",
      lead: "Luhamaa on ööseks suletud. Kes jõuab kohale avamise ajaks, alustab Venemaa poolt hommikul, mitte pärastlõunal — ja pikk päev Pihkva suunal jääb valgesse aega.",
      narrow: true,
      blocks: [
        {
          type: "table",
          caption: "Väljasõit Tallinnast → kohal Luhamaal (Eesti aeg, ligikaudu)",
          cols: ["Väljasõit", "Luhamaal", "Mida teada"],
          rows: [
            ["kell 3.00", "umbes 6.15", "olete esimeste seas, ootate avamist autos"],
            ["kell 3.30", "umbes 6.45", "kõige sagedasem valik: kohal veidi enne avamist"],
            ["kell 5.00", "umbes 8.15", "hommikune järjekord on juba tekkinud"],
            ["kell 9.00", "umbes 12.15", "päevane sõit, piiril jääb aega enne kella 19"],
          ],
        },
        {
          type: "text",
          h3: "Miks just avamise ajaks",
          html: "Päeva jooksul järjekord pikeneb ja enne sulgemist on tõkkepuu juures kõige tihedam. Hommikul alustades on varu, kui kontroll venib, ja Venemaa poolel jõuate sihtkohta veel päeval. Arvestage ka kellaga: alates 25. oktoobrist 2026 on Šumilkinos kell tund aega ees, seal on avamise ajal juba 8.00.",
        },
        {
          type: "text",
          h3: "Öine sõit on rahulik",
          html: "Teed on tühjad, autos on soe ja tagaistmel saab magada. Teel teeme lühikese peatuse. Lumega või tormise ilmaga sõidame varem välja — ilm võib ajakava pikendada, avamise aeg aga ei oota.",
        },
        {
          type: "text",
          h3: "Mida õhtul valmis panna",
          html: "Pass ja viisa või muu dokument, GoSwifti broneeringu kinnitus, kui see on, telefon laetud ja Venemaa poolse kohtumise aeg kokku lepitud. Juht helistab või kirjutab enne pealevõtmist, et teaksite, et ta on teel.",
        },
        { type: "button", label: "Tellige öine väljasõit", waText: "Tere! Soovin öist sõitu Tallinnast Luhamaale piiri avamise ajaks. Kuupäev: " },
      ],
    },
    {
      id: "airport",
      alt: true,
      eyebrow: "Lennujaam ja sadam",
      title: "Lennujaamast või sadamast Luhamaale",
      narrow: true,
      blocks: [
        {
          type: "text",
          h3: "Lennu number või laeva nimi",
          html: "Kirjutage see tellimusse. Juht jälgib saabumist ja ootab <strong>RideGo</strong> sildiga. Kui lend või laev hilineb, nihkub ainult kohtumise aeg, hind jääb samaks.",
        },
        {
          type: "text",
          h3: "Hommikul jah, pärastlõunal napilt",
          html: "Hommikupoolikul saabudes olete Luhamaal pärastlõunal ja aega jääb enne sulgemist piisavalt. Hiljem saabudes on targem ööbida Tallinnas ja minna piirile järgmisel hommikul avamise ajaks.",
        },
      ],
    },
    {
      eyebrow: "Kuidas see käib",
      title: "Läbi Tartu ja Võru piirini",
      blocks: [
        {
          type: "steps",
          items: [
            {
              title: "Kirjutage, millal soovite piiril olla",
              text: "Arvestame sellest tagasi väljasõiduaja ja kinnitame selle koos hinnaga ühe sõnumiga.",
            },
            {
              title: "Pealevõtmine Tallinnas",
              text: "Kodust, hotellist, lennujaamast või sadamast. Pagasi tõstab juht, kohvrite eest lisatasu ei ole.",
            },
            {
              title: `${l.km} km lõunasse`,
              text: "Tartu, Võru ja Riia–Pihkva maantee. See on meie pikim Eesti sisene sõit, seepärast on teel peatus.",
            },
            {
              title: "Luhamaa piiripunktis",
              text: "Peatume piiripunkti juures. Kontrolli läbite ise; edasisõit Venemaa poolel lepitakse kokku eraldi.",
            },
          ],
        },
      ],
    },
    {
      eyebrow: "Auto",
      title: "Millega sõidate",
      alt: true,
      narrow: true,
      blocks: [
        {
          type: "photo",
          src: "/images/car-3.jpg",
          alt: "RideGo Toyota Corolla tagaistmed, transfeer Tallinn — Luhamaa",
          caption: "Tagaiste. Öisel sõidul saab siin magada.",
          width: 1200,
          height: 737,
        },
        {
          type: "text",
          html: `${facts.car} nahkistmete, kliimaseadme ja nelja reisijakohaga, pagasiruumi mahub kaks suurt kohvrit. Talvel talverehvid — Võru ja Luhamaa vahel on öösel libe tee tavaline. Roolis on ${facts.driver}, kes vastab sõnumitele ise ja räägib vene ja inglise keelt.`,
        },
      ],
    },
    {
      eyebrow: "Võrdlus",
      title: "Kas Luhamaale saab bussiga?",
      lead: "Narvasse käib buss ja rong, Koidulast sõidab mööda Pihkva buss. Luhamaa tõkkepuu juures ei peatu midagi.",
      blocks: [
        {
          type: "table",
          caption: "Kuidas jõuda Tallinnast Luhamaa piiripunkti",
          cols: ["Viis", "Hind", "Aeg", "Mida teada"],
          rows: [
            ["RideGo eratransfeer", `${eur(l.price)} auto eest`, "≈ 3 h 10 min", "uksest piiripunktini, ka öösel"],
            ["Liinibuss piiripunkti", "—", "—", "ei ole, ei piirile ega lähedal asuvasse Lüta külla"],
            ["Buss Võrusse ja sealt takso", "pilet + takso", "kauem, ümberistumisega", "Võrust piirini umbes 30 km, auto tuleb ette tellida"],
            ["Rahvusvaheline buss Pihkvasse", "vedaja hind", "sõltub reisist", "sõidab mööda, piiripunktis maha ei panda"],
            ["Oma auto", "kütus", "≈ 3 h", "järjekorra aeg tuleb broneerida GoSwiftis"],
          ],
        },
        {
          type: "tip",
          html: `<strong>Ausalt.</strong> Kui reisite üksi, kerge pagasiga ja Peterburi poole, on buss Narvasse ja jalgsi üle piiri palju odavam — vaadake <a href="${narva}">Tallinn — Narva</a>. Pihkva ja Petseri suunal sobib sageli <a href="${koidula}">Koidula</a>; Luhamaa valitakse, kui seal on vaba GoSwifti aeg või tee jätkub mööda maanteed.`,
        },
      ],
    },
    {
      eyebrow: "Piiripunkt",
      title: "Luhamaa piiripunkt lühidalt",
      alt: true,
      narrow: true,
      blocks: [
        {
          type: "details",
          items: [
            {
              open: true,
              title: "Maanteepiiripunkt, avatud päeval",
              html: "Luhamaa on sõidukite piiripunkt Riia–Pihkva maanteel. Alates 2026. aasta veebruarist on see avatud kell 7.00–19.00 Eesti aja järgi ja ööseks suletud. Jalakäijate reeglid on mitu korda muutunud, seepärast kontrollige enne sõitu kehtivat korda: <a href=\"https://www.politsei.ee/et\" target=\"_blank\" rel=\"noopener\">politsei.ee</a>.",
            },
            {
              title: "Järjekord broneeritakse GoSwiftis",
              html: "Sõidukid broneerivad piiriületuse aja ette: <a href=\"https://www.eestipiir.ee\" target=\"_blank\" rel=\"noopener\">eestipiir.ee</a>. Meie seda teie eest ei broneeri, aga selgitame, kuidas, ja toome teid kohale broneeritud ajaks.",
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
    title: "Transfeer Tallinn — Luhamaa: korduvad küsimused",
    items: [
      {
        q: "Kui palju maksab transfeer Tallinnast Luhamaale?",
        a: `${eur(l.price)} kogu auto eest, kuni neli reisijat. Pagasi, lapseistme ega kellaaja eest lisatasu pole. Sularaha või pangaülekanne, ettemaksuta.`,
      },
      {
        q: "Mis kell peab Tallinnast välja sõitma, et olla Luhamaal kell 7?",
        a: "Umbes kell 3.30. Sõit kestab umbes 3 tundi 10 minutit ja lisame väikese varu. Talveilmaga sõidame veidi varem välja.",
      },
      {
        q: "Kas öine sõit maksab rohkem?",
        a: `Ei. Hind on ${eur(l.price)} kogu auto eest igal kellaajal.`,
      },
      {
        q: "Kas Luhamaale saab ühistranspordiga?",
        a: "Praktiliselt mitte. Piiripunkti ega Lüta külla liinibussid ei käi, lähim linn Võru on umbes 30 km kaugusel ja Pihkva bussid piiripunktis ei peatu.",
      },
      {
        q: "Kas sõidate ka Luhamaalt tagasi?",
        a: `Jah, sama hinnaga — vaadake <a href="${back}">Luhamaa — Tallinn</a>. Tellige tagasisõit ette: piiripunktis pole taksot ega bussi.`,
      },
    ],
  },
  links: {
    eyebrow: "Teised suunad",
    title: "Kuhu me veel sõidame",
    note: "Suunad, millel eestikeelset lehte veel pole, avavad WhatsAppi, kus suund on juba sisse kirjutatud.",
    items: [
      { label: "Luhamaa — Tallinn", price: eur(l.price), page: "luhamaa-tallinn", waText: "Tere! Soovin tellida transfeeri Luhamaa — Tallinn. (Transfer Luhamaa — Tallinn)" },
      { label: "Tallinn — Koidula", price: eur(facts.koidula.price), page: "tallinn-koidula", waText: "Tere! Soovin tellida transfeeri Tallinn — Koidula. (Transfer Tallinn — Koidula)" },
      { label: "Tallinn — Narva", price: eur(facts.narva.price), page: "tallinn-narva", waText: "Tere! Soovin tellida transfeeri Tallinn — Narva. (Transfer Tallinn — Narva)" },
      { label: "Tartu — Luhamaa", price: eur(facts.tartu.price), page: "tartu-koidula-luhamaa", waText: "Tere! Soovin tellida transfeeri Tartu — Luhamaa. (Transfer Tartu — Luhamaa)" },
    ],
  },
  cta: {
    title: "Sõidame Luhamaale?",
    text: "Kirjutage kuupäev ja millal soovite piiril olla — vastame väljasõiduaja ja hinnaga ühes sõnumis.",
    call: "Helistage",
  },
  schema: {
    name: "Transfeer Tallinn — Luhamaa",
    alternateName: ["Takso Tallinn — Luhamaa", "Tallinnast Pihkvasse Luhamaa kaudu", "Transfeer Luhamaa piiripunkti"],
    serviceType: "Eratransfeer piiripunkti",
    description: `Eratransfeer Tallinnast Luhamaa piiripunkti: ${l.km} km läbi Tartu ja Võru, umbes 3 h 10 min, ${eur(l.price)} kogu auto eest. Öine väljasõit piiri avamiseks, pealevõtmine lennujaamast, sadamast või aadressilt.`,
    areaServed: ["Tallinn", "Tartu", "Võru", "Luhamaa"],
    offers: [{ name: "Transfeer Tallinn — Luhamaa, auto kuni 4 reisijale", price: l.price }],
    breadcrumbHome: "RideGo",
  },
};
