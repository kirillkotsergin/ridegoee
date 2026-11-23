/**
 * Tallinna — Luhamaa, финская версия. Написана заново, не перевод английской.
 * Своя тема — паром из Хельсинки и выбор «Лухамаа или Койдула» глазами
 * человека с парома (раздел «ferry»): когда Лухамаа, когда Койдула, что
 * решает слот GoSwift. На финской Койдуле про паром уже есть расписание до
 * Пскова, здесь — сравнение двух южных переходов. Обращение на «sinä».
 *
 * 🔴 Переводил не носитель — до публикации вычитка финном.
 *
 * ПРОВЕРЬ:
 *  - пропускают ли в Лухамаа пешеходов (см. en.ts);
 *  - Выру — Лухамаа ~30 км и отсутствие рейсов до Люты — из гида, август 2026;
 *  - утренний паром прибывает в Таллинн около 9.30 — как на tallinn-narva/fi.ts;
 *  - часы 7.00–19.00 с февраля 2026 — на ноябрь 2026;
 *  - водитель говорит по-английски.
 */
import { facts, pathFor } from "../../i18n/ui";
import type { Landing } from "../landing";

const l = facts.luhamaa;
const eur = (v: number) => `${v} €`;
const back = pathFor("luhamaa-tallinn", "fi");
const koidula = pathFor("tallinn-koidula", "fi");
const narva = pathFor("tallinn-narva", "fi");

export const fi: Landing = {
  meta: {
    title: `Kuljetus Tallinna–Luhamaa: ${eur(l.price)} / auto | RideGo`,
    description: `Yksityisauto Tallinnan satamasta tai lentoasemalta Luhamaan rajalle Riian–Pihkovan tiellä: ${eur(l.price)} koko autolta, noin 3 t 10 min. Rajalle ei kulje bussia.`,
    ogTitle: `Tallinna — Luhamaan raja yksityisautolla, ${eur(l.price)} autolta`,
    ogDescription: `Lautalta suoraan autoon ja ${l.km} km Viron eteläisimmälle maantierajalle. Kiinteä hinta enintään neljälle.`,
  },
  crumb: "Kuljetus Tallinna — Luhamaa",
  hero: {
    eyebrow: `Eteläisin raja · ${eur(l.price)} autolta`,
    h1: ["Tallinnasta Luhamaan rajalle", "ilman vaihtoja"],
    lead: `Luhamaa on Viron eteläisin maantieraja Venäjälle, Riian ja Pihkovan välisen tien varrella. Tallinnasta sinne on ${l.km} km Tarton ja Võrun kautta, eikä rajanylityspaikalle kulje mitään julkista liikennettä.`,
    answer: [
      `<strong>Lyhyesti:</strong> yksityiskuljetus Tallinnasta Luhamaalle maksaa <strong>${eur(l.price)} koko autolta</strong>, enintään neljälle matkustajalle matkatavaroineen, ja ajo kestää noin <strong>3 tuntia 10 minuuttia</strong>. Nouto satamasta, lentoasemalta tai hotellista, laukut ja lasten turvaistuin sisältyvät hintaan, eikä yöllisestä lähdöstä peritä lisää.`,
      `Raja on auki klo 7.00–19.00 Viron aikaa ja yöllä kiinni. Lähin kaupunki Võru on noin 30 km:n päässä. Jos lähdet Tartosta, osuus maksaa ${eur(facts.tartu.price)}.`,
    ],
    stats: [
      [eur(l.price), "koko autolta"],
      ["≈ 3 t 10 min", "ajoaika"],
      [`${l.km} km`, "Tarton ja Võrun kautta"],
    ],
    perks: [
      "Kiinteä hinta autolta",
      "Nouto satamasta ja lentoasemalta",
      "Odotus ilman lisämaksua",
      "Lasten turvaistuin pyydettäessä",
      "Käteinen tai tilisiirto",
    ],
    waText: "Hei! Haluaisin tilata kuljetuksen Tallinna — Luhamaa. (Transfer Tallinn — Luhamaa)",
  },
  sections: [
    {
      id: "price",
      alt: true,
      eyebrow: "Hinta",
      title: `Pisin reittimme, sama ${eur(l.price)} kuin Koidulaan`,
      lead: "Hinta koskee autoa, ei istumapaikkoja. Se ei muutu kellonajan mukaan: lähtö kolmelta yöllä maksaa saman kuin keskipäivällä.",
      blocks: [
        {
          type: "table",
          caption: "Kuljetus Tallinna — Luhamaa: hinta ja mitä siihen sisältyy",
          cols: ["Palvelu", "Hinta", "Lisätiedot"],
          rows: [
            ["Tallinna → Luhamaan raja", eur(l.price), `${l.km} km, noin 3 t 10 min, enintään 4 matkustajaa matkatavaroineen`],
            ["Luhamaa → Tallinna", eur(l.price), `sama hinta takaisin — <a href="${back}">paluureitti</a>`],
            ["Tartto → Luhamaa", eur(facts.tartu.price), "jos lähdet Tartosta: noin 1 t 20 min"],
            ["Nouto satamasta tai lentoasemalta", "0 €", "kyltin kanssa, myöhästynyt lautta tai lento ei maksa lisää"],
            ["Yöajo, turvaistuin, matkatavarat", "0 €", "aamun avaamiseen klo 7.00 lähdetään yöllä ilman lisämaksua"],
          ],
        },
        {
          type: "tip",
          html: "<strong>Maksaminen.</strong> Euroina käteisellä kuljettajalle tai tilisiirtona matkan jälkeen. Ennakkomaksua ei ole. Hinta ja noutoaika vahvistetaan viestillä ennen matkapäivää.",
        },
      ],
    },
    {
      id: "ferry",
      eyebrow: "Suomesta",
      title: "Lautalta etelään: Luhamaa vai Koidula?",
      lead: "Suomen ja Venäjän rajat ovat olleet kiinni vuoden 2023 lopusta, joten Pihkovan suuntaan moni kulkee Tallinnan kautta. Etelässä on kaksi maantierajaa vierekkäin, ja valinta niiden välillä on useimmiten käytännön asia.",
      narrow: true,
      blocks: [
        {
          type: "table",
          caption: "Luhamaa ja Koidula lautalla saapuvan näkökulmasta",
          cols: ["", "Luhamaa", "Koidula"],
          rows: [
            ["Hinta Tallinnasta", eur(l.price), eur(facts.koidula.price)],
            ["Ajoaika Tallinnasta", "≈ 3 t 10 min", "≈ 3 t 5 min"],
            ["Julkinen liikenne rajalle", "ei mitään", "juna R46 noin 2 km:n päähän"],
            ["Venäjän puolella", "Šumilkino, Riian–Pihkovan tie", "Kunitšina Gora, Petseri lähellä"],
            ["Sopii, kun", "jatkat valtatietä tai Koidulan jono on täynnä", "määränpää on Petseri tai Pihkova"],
          ],
        },
        {
          type: "text",
          h3: "Usein ratkaisee vapaa jonoaika",
          html: `Ajoneuvot varaavat rajan ylitysajan GoSwiftistä. Jos <a href="${koidula}">Koidulassa</a> ei ole vapaata aikaa haluamanasi päivänä, Luhamaa on lähes yhtä pitkä matka samaan hintaan. Kerro meille molemmat vaihtoehdot, niin sovitamme noudon siihen, kumpi aika sinulla on.`,
        },
        {
          type: "table",
          caption: "Esimerkkiaikataulu: Helsinki — Tallinna — Luhamaa (Viron aika)",
          cols: ["Vaihe", "Aika", "Huomio"],
          rows: [
            ["Aamulautta saapuu Tallinnaan", "noin 9.30", "kuljettaja odottaa terminaalin ulostulolla"],
            ["Tauko Tartossa", "noin 11.40", "kahvi ja jaloittelu puolivälissä"],
            ["Perillä Luhamaalla", "noin 13.00", "aikaa jää useampi tunti ennen klo 19.00 sulkemista"],
          ],
        },
        {
          type: "text",
          h3: "Iltalautta ei ehdi samana päivänä",
          html: "Iltapäivällä saapuvalla lautalla et ehdi Luhamaalle ennen sulkemista. Silloin kannattaa yöpyä Tallinnassa ja lähteä aamuyöllä noin klo 4, jolloin olet rajalla heti avaamisen aikaan. Yöajo ei maksa enempää.",
        },
        {
          type: "text",
          h3: "Talviaika",
          html: "25.10.2026 alkaen kello on Venäjällä tunnin Viroa edellä: kun Luhamaalla on 7.00, Šumilkinossa on 8.00. Kaikki tämän sivun ajat ovat Viron aikaa.",
        },
      ],
    },
    {
      id: "no-bus",
      alt: true,
      eyebrow: "Julkinen liikenne",
      title: "Miksi Luhamaalle ei pääse bussilla",
      lead: "Narvaan kulkee bussi ja juna, Koidulan ohi Pihkovan bussi. Luhamaalla puomin kohdalla ei pysähdy mikään.",
      blocks: [
        {
          type: "table",
          caption: "Tallinnasta Luhamaan rajalle: vaihtoehdot",
          cols: ["Tapa", "Hinta", "Aika", "Huomioitavaa"],
          rows: [
            ["RideGo-yksityiskuljetus", `${eur(l.price)} autolta`, "≈ 3 t 10 min", "ovelta rajalle mihin aikaan tahansa"],
            ["Vakiovuoro rajalle", "—", "—", "ei ole olemassa, ei rajalle eikä läheiseen Lütan kylään"],
            ["Bussi Võruun ja sieltä taksi", "lippu + taksi", "pidempi, vaihto", "Võrusta rajalle noin 30 km, auto on järjestettävä etukäteen"],
            ["Kansainvälinen bussi Pihkovaan", "liikennöitsijän hinta", "vuorosta riippuen", "ajaa ohi, rajalla jääminen ei kuulu reittiin"],
          ],
        },
        {
          type: "tip",
          html: `<strong>Rehellinen vaihtoehto.</strong> Matkustatko yksin ja kevyesti Pietarin suuntaan? Bussi Narvaan ja rajan ylitys jalan on paljon edullisempi — katso <a href="${narva}">Tallinna — Narva</a>. Luhamaa valitaan, kun juuri tämä raja sopii parhaiten.`,
        },
      ],
    },
    {
      id: "airport",
      eyebrow: "Lentoasema",
      title: "Tallinnan lentoasemalta Luhamaalle",
      narrow: true,
      blocks: [
        {
          type: "text",
          h3: "Lennon numero riittää",
          html: "Kerro se tilauksessa. Kuljettaja seuraa laskeutumista ja odottaa matkatavarahallin jälkeen <strong>RideGo</strong>-kyltin kanssa. Myöhästyminen siirtää vain tapaamista, hinta pysyy samana.",
        },
        {
          type: "text",
          h3: "Aamulla kyllä, iltapäivällä tiukkaa",
          html: "Aamupäivällä laskeutuvalla lennolla olet rajalla iltapäivällä hyvissä ajoin. Iltapäivän lennon jälkeen on viisaampaa jäädä yöksi ja lähteä aamulla avaamiseen.",
        },
        { type: "button", label: "Tilaa nouto Luhamaalle", waText: "Hei! Tarvitsen kuljetuksen Tallinnasta Luhamaalle. Lautta tai lento: " },
      ],
    },
    {
      eyebrow: "Näin se toimii",
      title: "Tarton ja Võrun kautta rajalle",
      blocks: [
        {
          type: "steps",
          items: [
            {
              title: "Lasketaan rajalta taaksepäin",
              text: "Raja on auki vain päivällä, joten lähdemme siitä, milloin sinun pitää olla puomilla, ja laskemme noutoajan sen mukaan.",
            },
            {
              title: "Nouto Tallinnassa",
              text: "Satama, lentoasema, hotelli tai kotiovi. Kuljettaja nostaa laukut, eikä niistä peritä mitään.",
            },
            {
              title: `${l.km} km etelään`,
              text: "Tartto, Võru ja sitten Riian–Pihkovan tielle. Reitti on pisin Virossa ajamamme, joten puolivälissä pidetään tauko.",
            },
            {
              title: "Perillä rajalla",
              text: "Jätämme sinut Luhamaan rajanylityspaikalle. Tarkastuksen käyt itse; kyyti Venäjän puolella sovitaan etukäteen erikseen.",
            },
          ],
        },
      ],
    },
    {
      eyebrow: "Auto",
      title: "Auto 280 kilometrille",
      alt: true,
      narrow: true,
      blocks: [
        {
          type: "photo",
          src: "/images/car-1.jpg",
          alt: "RideGon Toyota Corolla, kuljetus Tallinna — Luhamaa",
          caption: `${facts.car}: ${l.km} km valtatietä, talvella talvirenkailla.`,
          width: 1200,
          height: 675,
        },
        {
          type: "text",
          html: `${facts.car}, nahkasisusta, ilmastointi, neljä matkustajapaikkaa ja tilaa kahdelle isolle matkalaukulle. Ratissa on ${facts.driver}, joka vastaa itse WhatsApp- ja Telegram-viesteihin. Hän puhuu venäjää ja englantia. Lasten turvaistuin pyydettäessä, lemmikistä kerro etukäteen.`,
        },
      ],
    },
    {
      eyebrow: "Raja",
      title: "Luhamaan rajanylityspaikka lyhyesti",
      narrow: true,
      blocks: [
        {
          type: "details",
          items: [
            {
              open: true,
              title: "Maantieraja, auki päivällä",
              html: "Luhamaa on ajoneuvojen rajanylityspaikka Riian–Pihkovan tiellä. Helmikuusta 2026 se on ollut auki klo 7.00–19.00 Viron aikaa ja yöksi kiinni. Tule hyvissä ajoin: ennen sulkemista puomille kertyy jonoa. Jalankulkijoita koskevat säännöt ovat muuttuneet useaan otteeseen — tarkista ajantasainen tieto: <a href=\"https://www.politsei.ee/en\" target=\"_blank\" rel=\"noopener\">politsei.ee</a>.",
            },
            {
              title: "Jonopaikka varataan GoSwiftistä",
              html: "Ajoneuvot varaavat ylitysajan etukäteen osoitteessa <a href=\"https://www.eestipiir.ee\" target=\"_blank\" rel=\"noopener\">eestipiir.ee</a>. Emme varaa sitä puolestasi, mutta neuvomme miten, ja olet rajalla varaamaasi aikaan.",
            },
            {
              title: "Hyödyllisiä puhelinnumeroita",
              html: "Luhamaan rajanylityspaikka: <a href=\"tel:+3727861830\">+372 786 1830</a>. Šumilkino, Venäjän puoli: <a href=\"tel:+78114898321\">+7 811 489-83-21</a>. Poliisi- ja rajavartiolaitoksen yleisnumero: <a href=\"tel:+3726123000\">+372 612 3000</a>.",
            },
          ],
        },
      ],
    },
  ],
  faq: {
    eyebrow: "Kysymykset",
    title: "Kuljetus Tallinna — Luhamaa: usein kysyttyä",
    items: [
      {
        q: "Paljonko kuljetus Tallinnasta Luhamaalle maksaa?",
        a: `${eur(l.price)} koko autolta, enintään neljälle matkustajalle. Matkatavaroista, turvaistuimesta tai kellonajasta ei peritä lisää. Käteinen tai tilisiirto, ei ennakkomaksua.`,
      },
      {
        q: "Kumpi raja kannattaa valita, Luhamaa vai Koidula?",
        a: "Matka ja hinta ovat lähes samat. Koidula on lähempänä Petseriä ja Pihkovaa, Luhamaa on Riian–Pihkovan valtatien varrella. Usein ratkaisee se, kummalla rajalla on vapaa GoSwift-aika haluamanasi päivänä.",
      },
      {
        q: "Ehdinkö Helsingin-lautalta Luhamaalle samana päivänä?",
        a: "Aamulautalla kyllä: Tallinnassa noin 9.30 ja rajalla noin 13.00, jolloin aikaa jää ennen klo 19.00 sulkemista. Iltapäivän lautalla kannattaa yöpyä Tallinnassa ja lähteä aamuyöllä.",
      },
      {
        q: "Pääseekö Luhamaalle ilman autoa?",
        a: "Käytännössä ei. Rajalle tai Lütan kylään ei kulje vakiovuoroja, lähin kaupunki Võru on noin 30 km:n päässä, eivätkä Pihkovan bussit pysähdy rajalla.",
      },
      {
        q: "Ajatteko myös Luhamaalta takaisin Tallinnaan?",
        a: `Kyllä, samaan hintaan — katso <a href="${back}">Luhamaa — Tallinna</a>. Varaa paluu etukäteen: rajalla ei ole taksia eikä bussia.`,
      },
    ],
  },
  links: {
    eyebrow: "Muut reitit",
    title: "Muita reittejämme",
    note: "Reitit, joilla ei vielä ole suomenkielistä sivua, avaavat WhatsAppin, jossa reitti on valmiiksi kirjoitettuna.",
    items: [
      { label: "Luhamaa — Tallinna", price: eur(l.price), page: "luhamaa-tallinn", waText: "Hei! Haluaisin tilata kuljetuksen Luhamaa — Tallinna. (Transfer Luhamaa — Tallinn)" },
      { label: "Tallinna — Koidula", price: eur(facts.koidula.price), page: "tallinn-koidula", waText: "Hei! Haluaisin tilata kuljetuksen Tallinna — Koidula. (Transfer Tallinn — Koidula)" },
      { label: "Tallinna — Narva", price: eur(facts.narva.price), page: "tallinn-narva", waText: "Hei! Haluaisin tilata kuljetuksen Tallinna — Narva. (Transfer Tallinn — Narva)" },
      { label: "Tartto — Luhamaa", price: eur(facts.tartu.price), page: "tartu-koidula-luhamaa", waText: "Hei! Haluaisin tilata kuljetuksen Tartto — Luhamaa. (Transfer Tartu — Luhamaa)" },
    ],
  },
  cta: {
    title: "Lähdetäänkö Luhamaalle?",
    text: "Kerro päivä ja GoSwift-aikasi — laskemme noutoajan ja vastaamme yhdellä viestillä.",
    call: "Soita",
  },
  schema: {
    name: "Kuljetus Tallinna — Luhamaa",
    alternateName: ["Taksi Tallinna — Luhamaa", "Helsingistä Pihkovaan Luhamaan kautta", "Kuljetus Tallinnan satamasta Luhamaalle"],
    serviceType: "Yksityiskuljetus rajanylityspaikalle",
    description: `Yksityiskuljetus Tallinnasta Luhamaan rajanylityspaikalle: ${l.km} km Tarton ja Võrun kautta, noin 3 t 10 min, ${eur(l.price)} koko autolta. Nouto Tallinnan satamasta, lentoasemalta tai osoitteesta.`,
    areaServed: ["Tallinna", "Tartto", "Võru", "Luhamaa"],
    offers: [{ name: "Kuljetus Tallinna — Luhamaa, auto enintään 4 matkustajalle", price: l.price }],
    breadcrumbHome: "RideGo",
  },
};
