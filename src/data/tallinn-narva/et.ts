/**
 * Tallinn — Narva, эстонская версия. Написана заново: не перевод английской
 * и финской. Своя тема — заказ для другого человека (родителей, гостя):
 * эстонский читатель часто бронирует поездку не себе. Обращение на «teie».
 *
 * 🔴 Переводил не носитель — до публикации вычитка эстонцем.
 *
 * ПРОВЕРЬ:
 *  - блок «tellimine teise inimese eest»: владелец не подтверждал, что
 *    водитель связывается с пассажиром напрямую и что заказчик может
 *    оплатить переводом за другого — по смыслу так и есть, но уточнить;
 *  - водитель говорит по-английски (см. en.ts);
 *  - цены Lux Express и Elron — на август 2026.
 */
import { facts, pathFor } from "../../i18n/ui";
import type { Landing } from "../landing";

const n = facts.narva;
const eur = (v: number) => `${v} €`;
/** Ссылка, если страница уже есть на эстонском; иначе просто текст */
const back = (text: string) => {
  const href = pathFor("narva-tallinn", "et");
  return href ? `<a href="${href}">${text}</a>` : text;
};

export const et: Landing = {
  meta: {
    title: `Transfeer Tallinn–Narva: ${eur(n.price)} auto eest | RideGo`,
    description: `Eraauto Tallinnast või lennujaamast Narva piiripunkti: ${eur(n.price)} kogu auto eest, sõit umbes 2,5 tundi. Ka öösel, ettemaksuta. Tellimine WhatsAppis.`,
    ogTitle: `Tallinn — Narva piiripunkt eraautoga, ${eur(n.price)} auto eest`,
    ogDescription: `${n.km} km uksest Narva-1 piiripunktini. Kindel hind kuni neljale reisijale, lennujaama ja sadama vastuvõtt hinna sees.`,
  },
  crumb: "Transfeer Tallinn — Narva",
  hero: {
    eyebrow: `Piirisõit · ${eur(n.price)} auto eest`,
    h1: ["Tallinnast Narva piirile", "eraautoga"],
    lead: `Sõidame teid kodust, hotellist, lennujaamast või sadamast otse Narva piiripunkti juurde. Teekonda on ${n.km} km mööda Tallinna–Narva maanteed ning hind lepitakse sõnumiga kokku enne väljasõitu.`,
    answer: [
      `<strong>Lühidalt:</strong> sõit Tallinnast Narva piiripunkti on <strong>${eur(n.price)} auto peale</strong>, mitte iga reisija eest, ja teel olete umbes <strong>2 tundi 30 minutit</strong>. Autosse mahub neli reisijat koos pagasiga. Sõidame igal kellaajal, ka varahommikul piiripunkti avamise ajaks. Hinna sees on vastuvõtt lennujaamas või sadamas, ootamine, pagas ja lapseiste.`,
      `Soovi korral hoiame teile kohta piirijärjekorras — lisatasu ${eur(n.queueSlot)}. Narva piiripunkti ületatakse ainult jalgsi ja see on avatud kell 7.00–19.00 Eesti aja järgi, seega arvestame väljasõiduaja nende kellaaegade järgi.`,
    ],
    stats: [
      [eur(n.price), "kogu auto eest"],
      ["≈ 2 h 30 min", "teel"],
      [`${n.km} km`, "uksest piirini"],
    ],
    perks: [
      "Kindel hind auto kohta",
      "Vastuvõtt lennujaamas ja sadamas",
      "Ootamine ilma lisatasuta",
      "Lapseiste soovi korral",
      "Sularaha või pangaülekanne",
    ],
    waText: "Tere! Soovin tellida transfeeri Tallinn — Narva. (Transfer Tallinn — Narva)",
  },
  sections: [
    {
      id: "price",
      alt: true,
      eyebrow: "Hind",
      title: `Üks hind kogu autole: ${eur(n.price)}`,
      lead: "Maksate sõidu, mitte istekohtade eest. Hind on sama, olgu reisijaid üks või neli, kohvreid kaks või viis, sõit keskpäeval või kell neli öösel.",
      blocks: [
        {
          type: "table",
          caption: "Transfeer Tallinn — Narva: hind ja lisateenused",
          cols: ["Teenus", "Hind", "Selgitus"],
          rows: [
            ["Tallinn → Narva piiripunkt", eur(n.price), "kogu auto, kuni 4 reisijat koos pagasiga"],
            ["Narva → Tallinn", eur(n.price), `sama hind vastassuunas, tellitakse eraldi${pathFor("narva-tallinn", "et") ? ` — ${back("tagasisõidu leht")}` : ""}`],
            ["Koht piirijärjekorras", `+${eur(n.queueSlot)}`, "hoiame teie kohta, et te ei peaks tunde järjekorras seisma"],
            ["Vastuvõtt lennujaamas või sadamas", "0 €", "nimesildiga saabumissaalis, hilinenud lend lisatasu ei too"],
            ["Öine sõit, lapseiste, pagas", "0 €", "kellaaja, kohvrite ega lapseistme eest lisatasu ei ole"],
          ],
        },
        {
          type: "tip",
          html: "<strong>Tasumine.</strong> Sularahas juhile või pangaülekandega, eurodes, pärast sõitu. Ettemaksu me ei küsi. Hinna ja väljasõiduaja saate enne sõitu sõnumiga, nii et kokkulepe on kirjalik.",
        },
        {
          type: "text",
          h3: "Kellele hind auto kohta kõige paremini sobib",
          html: `Paaridele, peredele ja kõigile, kellel on palju pagasit. Bussipilet on ühele odav, kuid kolm täiskasvanut maksavad kolm korda — ja Narva bussijaamast tuleb veel koos kohvritega piirile jõuda. Eraautos jagate ${eur(n.price)} omavahel nii, nagu soovite, ning auto peatub otse piiripunkti juures.`,
        },
      ],
    },
    {
      id: "someone-else",
      eyebrow: "Teise inimese eest",
      title: "Saatke vanemad või külaline piirile",
      lead: "Sageli ei telli sõitu reisija ise, vaid tema lähedane Eestis: täiskasvanud lapsed oma vanematele, võõrustaja külalisele. Selleks pole vaja muud kui üht sõnumit.",
      narrow: true,
      blocks: [
        {
          type: "text",
          h3: "Kuidas tellida kellegi teise eest",
          html: "Kirjutage meile kuupäev, kellaaeg ja aadress ning lisage reisija nimi ja telefoninumber. Juht võtab enne sõitu reisijaga ise ühendust ja lepib kokku täpse kohtumiskoha. Juht räägib vene ja inglise keelt.",
        },
        {
          type: "text",
          h3: "Tasumine teie eest",
          html: "Sõidu saab tasuda teie, pangaülekandega pärast sõitu. Reisija ei pea kaasas kandma sularaha ega mõtlema arveldamisele.",
        },
        {
          type: "text",
          h3: "Talveaeg: jõe kahel kaldal on erinev kellaaeg",
          html: "Alates 25. oktoobrist 2026 on Eesti Moskvast tund aega maas. Piiripunkt on endiselt avatud kell 7.00–19.00 Eesti aja järgi, mis Ivangorodi poolel tähendab 8.00–20.00. Kui reisijat ootab Venemaal rong või buss, kontrollige, millise riigi aja järgi selle sõiduplaan on koostatud.",
        },
      ],
    },
    {
      id: "airport",
      alt: true,
      eyebrow: "Lennujaam",
      title: "Tallinna lennujaamast otse Narva piirile",
      lead: "Lennart Meri lennujaam asub kesklinnast umbes 4 km kaugusel, nii et sõit Narva poole algab otse terminali ukse eest.",
      narrow: true,
      blocks: [
        {
          type: "text",
          h3: "Saatke lennu number",
          html: "Kui lisate tellimusele lennu numbri, jälgib juht maandumist ise ja ootab pagasisaali järel <strong>RideGo</strong> sildiga. Te ei pea helistama ega selgitama, kus seisate.",
        },
        {
          type: "text",
          h3: "Hilinenud lend ei maksa midagi",
          html: "Kohtumisaeg nihkub tegeliku maandumise järgi ja hind jääb samaks. Just seepärast tasub transfeer ette broneerida: hilisõhtul on taksopeatuses vähe autosid ja veel vähem neid, kes on valmis 220-kilomeetrisele sõidule asuma.",
        },
        {
          type: "text",
          h3: "Sadam, raudteejaam või mis tahes aadress",
          html: "Sama hind ja samad tingimused kehtivad, kui saabute laevaga Vanasadamasse, rongiga Balti jaama või bussiga bussijaama. Andke teada laeva nimi või rongi saabumisaeg.",
        },
        { type: "button", label: "Tellige vastuvõtt lennujaamas", waText: "Tere! Vajan transfeeri Tallinna lennujaamast Narva. Lennu number: " },
      ],
    },
    {
      eyebrow: "Kuidas see käib",
      title: "Esimesest sõnumist piiripunktini",
      blocks: [
        {
          type: "steps",
          items: [
            {
              title: "Kirjutage meile",
              text: "Kuupäev, kellaaeg, aadress ja reisijate arv. Saabute lennukiga? Lisage lennu number. Vastab juht ise, tavaliselt mõne minutiga.",
            },
            {
              title: "Kinnitus kirjalikult",
              text: "Kinnitame hinna, auto ja väljasõiduaja ühe sõnumiga. Ette maksta ega midagi allkirjastada pole vaja.",
            },
            {
              title: "Sõit itta",
              text: "Tallinna–Narva maantee läbi Rakvere ja Jõhvi, umbes kaks ja pool tundi. Kohvipaus teel? Öelge juhile — selleks on aega arvestatud.",
            },
            {
              title: "Narva-1 piiripunktis",
              text: "Peatume Ivangorodi viiva silla juures asuva jalakäijate piiripunkti ees. Sealt jätkate jalgsi; kui kaua see võtab, sõltub päeva järjekorrast.",
            },
          ],
        },
      ],
    },
    {
      eyebrow: "Auto",
      title: "Auto ja juht",
      alt: true,
      narrow: true,
      blocks: [
        {
          type: "photo",
          src: "/images/car-1.jpg",
          alt: "RideGo Toyota Corolla, millega sõidetakse transfeeri Tallinn — Narva, eestvaade",
          caption: `${facts.car} — just see auto tuleb teile järele.`,
          width: 1200,
          height: 675,
        },
        {
          type: "text",
          html: `${facts.car} nahksalongi, kliimaseadme ja nelja reisijakohaga. Pagasiruumi mahub kaks suurt kohvrit ja käsipagas. See on juhi isiklik auto, mitte taksofirma vahetuv masin, ja seda on ka näha. Talvel talverehvid, suvel töötav konditsioneer.`,
        },
        {
          type: "text",
          html: `Roolis on ${facts.driver}, kes vastab ka WhatsAppi ja Telegrami sõnumitele. Lepite kõik kokku otse inimesega, kes teid sõidutab. Ta räägib vene ja inglise keelt.`,
        },
      ],
    },
    {
      eyebrow: "Võrdlus",
      title: "Buss, rong, takso või eraauto Narva",
      lead: "Ausalt: kui reisite üksi ja kerge pagasiga, on buss tunduvalt odavam. Eraauto võidab varahommikustel sõitudel, gruppidega ja selles, et jõuate uksest otse piirile.",
      blocks: [
        {
          type: "table",
          caption: "Tallinnast Narva piirile: hind, aeg ja mida arvestada",
          cols: ["Viis", "Hind", "Aeg", "Mida teada"],
          rows: [
            ["RideGo transfeer", `${eur(n.price)} auto eest`, "≈ 2 h 30 min", "uksest piiripunktini, igal kellaajal, hind teada ette"],
            ["Takso taksomeetriga", "selgub alles kohal", "≈ 2 h 30 min", "pikale sõidule minnakse harva, tühi tagasisõit on hinnas sees"],
            ["Lux Expressi buss", "alates 9 € inimese kohta", "≈ 3 h", "kõige odavam, kuid sõiduplaani järgi ja jaamast jaama"],
            ["Elroni rong", "13–23 € inimese kohta", "≈ 2 h 50 min", "mõni väljumine päevas, Narva jaamast tuleb piirile veel jalutada"],
          ],
        },
        {
          type: "tip",
          html: "<strong>Millal auto end ära tasub.</strong> Tahate olla piiril avamise ajaks kell 7.00. Lend saabub öösel. Kaasas on laps, lapsevanker või palju kohvreid. Või sõidate tagasi — Narva piiripunkti juures taksot peaaegu kunagi ei oota.",
        },
      ],
    },
    {
      eyebrow: "Piiripunkt",
      title: "Narva-1 piiripunkt lühidalt",
      narrow: true,
      blocks: [
        {
          type: "details",
          items: [
            {
              open: true,
              title: "Ainult jalakäijatele",
              html: "Narvas autoga piiri ei ületata: üle Narva jõe silla minnakse Ivangorodi jalgsi. Seepärast viime teid piiripunkti juurde ja sealt edasi lähete ise. Autoga saab piiri ületada lõuna pool Koidulas või Luhamaal.",
            },
            {
              title: "Lahtiolekuajad ja järjekord",
              html: "Kell 7.00–19.00 Eesti aja järgi, ööseks piiripunkt suletakse. Jalakäijad GoSwiftis aega broneerima ei pea, kuid nädalavahetustel ja pühade ajal tekib järjekord. Kehtivad reeglid avaldab Politsei- ja Piirivalveamet aadressil <a href=\"https://www.politsei.ee/et\" target=\"_blank\" rel=\"noopener\">politsei.ee</a>.",
            },
            {
              title: "Kui sulgemiseks ei jõua",
              html: "Siis tuleb ööbida Narvas ja piir ületada hommikul. Silla lähedal on hotelle, ka soodsaid. Enne pühi täituvad need kiiresti, seega broneerige varakult.",
            },
            {
              title: "Kasulikud telefoninumbrid",
              html: "Narva-1 piiripunkt: <a href=\"tel:+3723331600\">+372 333 1600</a>. Ivangorod, Venemaa pool: <a href=\"tel:+78137552978\">+7 81375 5-29-78</a>. Politsei- ja Piirivalveameti üldnumber: <a href=\"tel:+3726123000\">+372 612 3000</a>.",
            },
          ],
        },
      ],
    },
  ],
  faq: {
    eyebrow: "Küsimused",
    title: "Transfeer Tallinn — Narva: korduvad küsimused",
    items: [
      {
        q: "Kui palju maksab transfeer Tallinnast Narva?",
        a: `${eur(n.price)} kogu auto eest, sõltumata reisijate või kohvrite arvust ja kellaajast — ka öösel ja pühadel. Ainus lisateenus on koht piirijärjekorras, ${eur(n.queueSlot)}. Tasumine pärast sõitu sularahas või pangaülekandega.`,
      },
      {
        q: "Kas saan tellida sõidu oma vanematele või külalisele?",
        a: "Jah. Saatke meile reisija nimi ja telefoninumber koos kuupäeva, kellaaja ja aadressiga. Juht võtab reisijaga ise ühendust, ja sõidu saate tasuda teie pangaülekandega.",
      },
      {
        q: "Kui kaua kestab sõit Tallinnast Narva piirile?",
        a: `Umbes 2 tundi 30 minutit, ${n.km} km mööda Tallinna–Narva maanteed läbi Rakvere ja Jõhvi. Lumesadu või tihe liiklus võib aega lisada. Kui Venemaa poolel ootab ühendus, jätke varu — piirijärjekorda ei lühenda ükski sõiduk.`,
      },
      {
        q: "Kas tulete Tallinna lennujaama vastu?",
        a: "Jah. Saatke lennu number, juht jälgib maandumist ja ootab saabumissaalis sildiga. Ootamine on tasuta ja hilinemine hinda ei muuda. Samamoodi tuleme vastu sadamasse, Balti jaama ja bussijaama.",
      },
      {
        q: "Kas sõidate ka Narvast tagasi Tallinna?",
        a: `Jah, sama hinnaga ${eur(n.price)}${pathFor("narva-tallinn", "et") ? ` — vaadake ${back("Narva — Tallinn")}` : ""}. Leppige tagasisõit kokku ette: piiripunkti juures taksot peaaegu ei oota, eriti õhtuti. Mõlemad suunad saab tellida ühe sõnumiga.`,
      },
    ],
  },
  links: {
    eyebrow: "Teised suunad",
    title: "Kuhu me veel sõidame",
    note: "Suunad, millel eestikeelset lehte veel pole, avavad WhatsAppi, kus suund on juba sisse kirjutatud.",
    items: [
      { label: "Narva — Tallinn", price: eur(n.price), page: "narva-tallinn", waText: "Tere! Soovin tellida transfeeri Narva — Tallinn. (Transfer Narva — Tallinn)" },
      { label: "Tallinn — Koidula", price: eur(facts.koidula.price), page: "tallinn-koidula", waText: "Tere! Soovin tellida transfeeri Tallinn — Koidula. (Transfer Tallinn — Koidula)" },
      { label: "Tallinn — Luhamaa", price: eur(facts.luhamaa.price), page: "tallinn-luhamaa", waText: "Tere! Soovin tellida transfeeri Tallinn — Luhamaa. (Transfer Tallinn — Luhamaa)" },
      { label: "Tartu — Koidula või Luhamaa", price: eur(facts.tartu.price), page: "tartu-koidula-luhamaa", waText: "Tere! Soovin tellida transfeeri Tartust piirile. (Transfer Tartu — border)" },
    ],
  },
  cta: {
    title: "Sõidame Narva?",
    text: "Kirjutage kuupäev, kellaaeg ja aadress — kinnitame auto, hinna ja täpse väljasõiduaja ühe sõnumiga.",
    call: "Helistage",
  },
  schema: {
    name: "Transfeer Tallinn — Narva",
    alternateName: ["Takso Tallinn — Narva", "Transfeer Tallinna lennujaamast Narva", "Sõit Narva piiripunkti"],
    serviceType: "Eratransfeer piiripunkti",
    description: `Eratransfeer Tallinnast Narva piiripunkti: ${n.km} km, umbes 2 h 30 min, ${eur(n.price)} kogu auto eest. Vastuvõtt Tallinna lennujaamas ja sadamas, ööpäevaringselt.`,
    areaServed: ["Tallinn", "Narva"],
    offers: [
      { name: "Transfeer Tallinn — Narva, auto kuni 4 reisijale", price: n.price },
      { name: "Koht piirijärjekorras", price: n.queueSlot },
    ],
    breadcrumbHome: "RideGo",
  },
};
