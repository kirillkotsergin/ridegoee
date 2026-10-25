/**
 * Tallinn — Koidula, эстонская версия. Написана заново. Своя тема — поездка
 * в Печоры и Псков, часто не для себя, а для родителей или гостей (раздел
 * «pechory»): кому подходит Койдула, что прислать, машина от Куничиной Горы.
 * На эстонской Нарве блок «teise inimese eest» про Ивангород и Петербург,
 * здесь — про южное направление. Обращение на «teie».
 *
 * 🔴 Переводил не носитель — до публикации вычитка эстонцем.
 *
 * ПРОВЕРЬ:
 *  - пропускают ли в Койдуле пешеходов (см. en.ts);
 *  - кто выполняет машину от Куничиной Горы (3000 / 17 000 ₽);
 *  - что заказчик может оплатить переводом за другого человека — владелец не
 *    подтверждал (как и на tallinn-narva/et.ts);
 *  - часы 7.00–19.00 с февраля 2026 — на октябрь 2026.
 */
import { facts, pathFor } from "../../i18n/ui";
import type { Landing } from "../landing";

const k = facts.koidula;
const kg = facts.kunichinaGora;
const eur = (v: number) => `${v} €`;
const rub = (v: number) => `${v} rubla`;
const back = pathFor("koidula-tallinn", "et");
const narva = pathFor("tallinn-narva", "et");

export const et: Landing = {
  meta: {
    title: `Transfeer Tallinn–Koidula: ${eur(k.price)} auto eest | RideGo`,
    description: `Eraauto Tallinnast, lennujaamast või sadamast Koidula piiripunkti Petseri ja Pihkva suunal: ${eur(k.price)} kogu auto eest, umbes 3 tundi läbi Tartu. Ettemaksuta.`,
    ogTitle: `Tallinnast Koidula piiripunkti, ${eur(k.price)} kogu auto eest`,
    ogDescription: `${k.km} km uksest Koidula piiripunktini. Kindel hind kuni neljale reisijale, ka varahommikul.`,
  },
  crumb: "Transfeer Tallinn — Koidula",
  hero: {
    eyebrow: `Lõunapiir · ${eur(k.price)} auto eest`,
    h1: ["Tallinnast Koidula", "piiripunkti"],
    lead: `Koidula on Kagu-Eesti maanteepiiripunkt Venemaale, vastas on Kunitšina Gora ning Petseri ja Pihkva on sealt lühikese sõidu kaugusel. Tallinnast on ${k.km} km läbi Tartu, ja viimasel lõigul ühistransport peaaegu ei käi.`,
    answer: [
      `<strong>Lühidalt:</strong> transfeer Tallinnast Koidulasse maksab <strong>${eur(k.price)} kogu auto eest</strong>, mitte reisija kohta, ja sõit kestab umbes <strong>3 tundi 5 minutit</strong>. Autosse mahub neli reisijat koos pagasiga. Hinnas on pealevõtmine kodust, lennujaamast või sadamast, pagas ja lapseiste.`,
      `Piiripunkt on avatud kell 7.00–19.00 Eesti aja järgi ja ööseks suletud, seepärast arvestame väljasõidu Tallinnast selle järgi, millal soovite piiril olla. Kui olete juba Tartus, on sõit lühem: Tartust Koidulasse ${eur(facts.tartu.price)}.`,
    ],
    stats: [
      [eur(k.price), "kogu auto eest"],
      ["≈ 3 h 5 min", "teel"],
      [`${k.km} km`, "läbi Tartu"],
    ],
    perks: [
      "Kindel hind auto kohta",
      "Lennujaamast ja sadamast",
      "Hilinenud lennu ootamine tasuta",
      "Lapseiste soovi korral",
      "Sularaha või pangaülekanne",
    ],
    waText: "Tere! Soovin tellida transfeeri Tallinn — Koidula. (Transfer Tallinn — Koidula)",
  },
  sections: [
    {
      id: "price",
      alt: true,
      eyebrow: "Hind",
      title: `${eur(k.price)} auto eest, reisijaid 1–4`,
      lead: "Hind kehtib kogu autole. Öine väljasõit, ummik Tallinnast väljudes või lisakohver seda ei muuda.",
      blocks: [
        {
          type: "table",
          caption: "Transfeer Tallinn — Koidula: hind ja mis on hinnas",
          cols: ["Teenus", "Hind", "Selgitus"],
          rows: [
            ["Tallinn → Koidula piiripunkt", eur(k.price), "kogu auto, kuni 4 reisijat koos pagasiga"],
            ["Koidula → Tallinn", eur(k.price), `sama hind vastassuunas — <a href="${back}">tagasisõit</a>`],
            ["Tartu → Koidula", eur(facts.tartu.price), "kui alustate Tartust: umbes tund teed"],
            ["Lennujaamast või sadamast", "0 €", "nimesildiga, hilinenud lend või laev ei maksa lisaks"],
            ["Öösõit, lapseiste, pagas", "0 €", "lisatasu kellaaja, kohvrite ega lapseistme eest pole"],
          ],
        },
        {
          type: "tip",
          html: "<strong>Tasumine.</strong> Sularahas juhile või pangaülekandega, eurodes, pärast sõitu. Ettemaksu ei küsi. Hind ja pealevõtmise aeg tulevad teile enne sõidupäeva sõnumiga.",
        },
        {
          type: "text",
          h3: "Miks Koidula on kallim kui Narva",
          html: `Teekond on ${k.km - facts.narva.km} km pikem ja võtab umbes 35 minutit rohkem aega, viimane osa kulgeb väiksematel teedel läbi Põlvamaa ja Setomaa. Seepärast Koidulasse ${eur(k.price)}, <a href="${narva}">Narva</a> ${eur(facts.narva.price)}.`,
        },
      ],
    },
    {
      id: "pechory",
      eyebrow: "Petseri ja Pihkva suunal",
      title: "Kellele Koidula sobib paremini kui Narva",
      lead: "Kui sihtkoht on Petseri, Pihkva või midagi lõuna pool, on Koidula kokkuvõttes lühem tee, kuigi Eesti poolne sõit on pikem. Peterburi poole minnakse tavaliselt Narva kaudu.",
      narrow: true,
      blocks: [
        {
          type: "text",
          h3: "Tellige sõit vanematele või külalisele",
          html: "Sageli ei telli Koidula sõitu reisija ise, vaid tema lähedane Eestis. Saatke meile kuupäev, reisija nimi ja telefoninumber, pealevõtmise aadress ja soovitud aeg piiril. Juht võtab reisijaga ise ühendust. Sõidu võite tasuda teie, pangaülekandega.",
        },
        {
          type: "text",
          h3: "Auto ka Venemaa poolele",
          html: `Venemaa poolel saame korraldada auto Kunitšina Gorast: Pihkvasse umbes ${rub(kg.pskov)}, Peterburi umbes ${rub(kg.spb)}. Mainige seda samas sõnumis, siis kinnitame mõlemad lõigud korraga.`,
        },
        {
          type: "text",
          h3: "Talveaeg",
          html: "Alates 25. oktoobrist 2026 on kell Venemaal tund aega ees. Piiripunkt on avatud kell 7.00–19.00 Eesti aja järgi, Kunitšina Gora poolel on see 8.00–20.00. Kui Venemaa poolel ootab buss või auto, leppige aeg kokku ühe kella järgi.",
        },
        { type: "button", label: "Tellige sõit lähedasele", waText: "Tere! Soovin tellida transfeeri Tallinnast Koidulasse oma lähedasele. Kuupäev: " },
      ],
    },
    {
      id: "airport",
      alt: true,
      eyebrow: "Lennujaam ja sadam",
      title: "Lennujaamast või sadamast otse Koidulasse",
      lead: "Paljud sellel suunal saabuvad lennuki või laevaga ja tahavad samal päeval piirile jõuda. Sõit algab terminali ukse eest.",
      narrow: true,
      blocks: [
        {
          type: "text",
          h3: "Piisab lennu numbrist või laeva nimest",
          html: "Kirjutage see tellimusse. Juht jälgib saabumist ise ja ootab <strong>RideGo</strong> sildiga. Kui lend hilineb, nihkub ainult kohtumise aeg, hind jääb samaks.",
        },
        {
          type: "text",
          h3: "Kas samal päeval jõuab?",
          html: "Hommikupoolikul saabudes olete Koidulas pärastlõunal ja enne sulgemist jääb mitu tundi aega. Pärastlõunal saabudes on aeg napp — siis on rahulikum ööbida Tallinnas või Tartus ja minna piirile hommikul.",
        },
      ],
    },
    {
      eyebrow: "Kuidas see käib",
      title: "Kolm tundi kagupiirini",
      blocks: [
        {
          type: "steps",
          items: [
            {
              title: "Kirjutage plaan",
              text: "Kuupäev, pealevõtmise koht ja millal soovite piiril olla. Arvestame selle järgi väljasõiduaja ja kinnitame selle koos hinnaga ühe sõnumiga.",
            },
            {
              title: "Pealevõtmine Tallinnas",
              text: "Kodust, hotellist, lennujaamast või sadamast. Pagasi tõstab juht, kohvrite eest lisatasu ei ole.",
            },
            {
              title: "Läbi Tartu",
              text: "Tallinna–Tartu maantee ja sealt väiksematel teedel Setomaale. Sõit on pikem kui Narva, seepärast on kohvipaus ajakavas sees.",
            },
            {
              title: "Koidula piiripunktis",
              text: "Peatume Koidula piiripunkti juures. Kontrolli läbite ise; edasisõit Venemaa poolel lepitakse kokku eraldi.",
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
          src: "/images/car-2.jpg",
          alt: "RideGo Toyota Corolla tagant, transfeer Tallinn — Koidula",
          caption: `${facts.car}: pagasiruumi mahub kaks suurt kohvrit ja käsipagas.`,
          width: 1200,
          height: 675,
        },
        {
          type: "text",
          html: `${facts.car} nahkistmete, kliimaseadme ja nelja reisijakohaga. Kolmetunnisel sõidul on hooldatud autost tunda: talverehvid esimestest külmadest, suvel töötav konditsioneer. Roolis on ${facts.driver}, kes vastab sõnumitele ise ja räägib vene ja inglise keelt.`,
        },
      ],
    },
    {
      eyebrow: "Võrdlus",
      title: "Buss, rong või eraauto Koidulasse",
      lead: "Koidula juures on probleem viimastes kilomeetrites: buss sõidab otse Venemaale edasi ja rong peatub piirist paari kilomeetri kaugusel.",
      blocks: [
        {
          type: "table",
          caption: "Kuidas jõuda Tallinnast Koidula piiripunkti",
          cols: ["Viis", "Hind", "Aeg", "Mida teada"],
          rows: [
            ["RideGo eratransfeer", `${eur(k.price)} auto eest`, "≈ 3 h 5 min", "uksest piiripunktini, väljasõit teie plaani järgi"],
            ["Ecolinesi buss Tallinn — Pihkva", "vaadake broneerimissüsteemist", "≈ 7 h 17 min", "sõidab läbi Koidula, piirikontrolli läbivad kõik koos"],
            ["Elroni rong läbi Tartu", "Elroni hinnakiri", "Tallinn — Tartu + liin R46", "R46 liinil paar rongi päevas, jaamast piirini umbes 2 km"],
            ["Oma auto", "kütus", "≈ 3 h", "järjekorra aeg tuleb broneerida GoSwiftis, nädalavahetuseks lähevad ajad kiiresti"],
          ],
        },
        {
          type: "tip",
          html: "<strong>Millal auto end ära tasub.</strong> Soovite olla piiril kindlal ajal, mitte sõiduplaani järgi. Kaasas on rohkem kui seljakott. Või on teid kolm-neli ja hind inimese kohta läheneb bussipiletile.",
        },
      ],
    },
    {
      eyebrow: "Piiripunkt",
      title: "Koidula piiripunkt lühidalt",
      narrow: true,
      blocks: [
        {
          type: "details",
          items: [
            {
              open: true,
              title: "Avatud ainult päeval",
              html: "Alates 2026. aasta veebruarist on Koidula avatud kell 7.00–19.00 ja ööseks täiesti suletud. Enne sulgemist tekib tõkkepuu juurde järjekord, nii et tulge varuga.",
            },
            {
              title: "Järjekorra broneerimine ja jalakäijad",
              html: "Eestist väljuvad sõidukid broneerivad järjekorra aja GoSwiftis: <a href=\"https://www.eestipiir.ee\" target=\"_blank\" rel=\"noopener\">eestipiir.ee</a>. Jalakäijate reeglid on Koidulas mitu korda muutunud, seepärast kontrollige enne sõitu kehtivat korda: <a href=\"https://www.politsei.ee/et\" target=\"_blank\" rel=\"noopener\">politsei.ee</a>.",
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
    title: "Transfeer Tallinn — Koidula: korduvad küsimused",
    items: [
      {
        q: "Kui palju maksab transfeer Tallinnast Koidulasse?",
        a: `${eur(k.price)} kogu auto eest, olgu reisijaid üks või neli, päeval või öösel. Pagas, lapseiste ja lennujaamast pealevõtmine on hinnas. Tasumine pärast sõitu sularahas või pangaülekandega.`,
      },
      {
        q: "Kas saan tellida sõidu oma vanematele, kes lähevad Petserisse?",
        a: "Jah. Saatke kuupäev, reisija nimi ja telefoninumber ning pealevõtmise aadress. Juht võtab reisijaga ise ühendust, ja sõidu saate tasuda teie pangaülekandega.",
      },
      {
        q: "Kui kaua kestab sõit Tallinnast Koidulasse?",
        a: `Umbes 3 tundi 5 minutit, ${k.km} km läbi Tartu. Lumi või tihe liiklus võib aega lisada, seepärast sõidame kella 7 avamise ajaks välja varuga.`,
      },
      {
        q: "Kumba piiripunkti valida, Narvat või Koidulat?",
        a: `Oleneb sihtkohast. Peterburi poole Narva: Ivangorodist on otsetee linna ja sõit Tallinnast maksab ${eur(facts.narva.price)}. Petserisse, Pihkvasse ja lõuna poole Koidula. Narvas ületatakse piir ainult jalgsi, Koidula on maanteepiiripunkt.`,
      },
      {
        q: "Kas teel saab Tartus peatuda?",
        a: `Jah, marsruut kulgeb läbi Tartu, nii et peatus või sealt pealevõtmine on lihtne — öelge tellides. Tartust Koidulasse on eraldi suund hinnaga ${eur(facts.tartu.price)}.`,
      },
    ],
  },
  links: {
    eyebrow: "Teised suunad",
    title: "Kuhu me veel sõidame",
    note: "Suunad, millel eestikeelset lehte veel pole, avavad WhatsAppi, kus suund on juba sisse kirjutatud.",
    items: [
      { label: "Koidula — Tallinn", price: eur(k.price), page: "koidula-tallinn", waText: "Tere! Soovin tellida transfeeri Koidula — Tallinn. (Transfer Koidula — Tallinn)" },
      { label: "Tallinn — Narva", price: eur(facts.narva.price), page: "tallinn-narva", waText: "Tere! Soovin tellida transfeeri Tallinn — Narva. (Transfer Tallinn — Narva)" },
      { label: "Tallinn — Luhamaa", price: eur(facts.luhamaa.price), page: "tallinn-luhamaa", waText: "Tere! Soovin tellida transfeeri Tallinn — Luhamaa. (Transfer Tallinn — Luhamaa)" },
      { label: "Tartu — Koidula või Luhamaa", price: eur(facts.tartu.price), page: "tartu-koidula-luhamaa", waText: "Tere! Soovin tellida transfeeri Tartust piirile. (Transfer Tartu — border)" },
    ],
  },
  cta: {
    title: "Sõidame Koidulasse?",
    text: "Kirjutage kuupäev ja millal soovite piiril olla — vastame väljasõiduaja ja hinnaga ühes sõnumis.",
    call: "Helistage",
  },
  schema: {
    name: "Transfeer Tallinn — Koidula",
    alternateName: ["Takso Tallinn — Koidula", "Tallinnast Petserisse Koidula kaudu", "Transfeer Koidula piiripunkti"],
    serviceType: "Eratransfeer piiripunkti",
    description: `Eratransfeer Tallinnast Koidula piiripunkti: ${k.km} km läbi Tartu, umbes 3 h 5 min, ${eur(k.price)} kogu auto eest. Pealevõtmine Tallinna lennujaamast, sadamast või aadressilt.`,
    areaServed: ["Tallinn", "Tartu", "Koidula"],
    offers: [{ name: "Transfeer Tallinn — Koidula, auto kuni 4 reisijale", price: k.price }],
    breadcrumbHome: "RideGo",
  },
};
