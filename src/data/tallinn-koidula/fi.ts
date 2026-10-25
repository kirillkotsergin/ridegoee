/**
 * Tallinna — Koidula, финская версия. Написана заново, не перевод английской.
 * Своя тема — путь из Финляндии в сторону Пскова: паром Хельсинки — Таллинн,
 * машина до Койдулы и, по желанию, машина от Куничиной Горы (раздел «ferry»).
 * У финской Нарвы тема та же — паром, но маршрут на Петербург; здесь —
 * на Псков и Печоры. Обращение на «sinä».
 *
 * 🔴 Переводил не носитель — до публикации вычитка финном.
 *
 * ПРОВЕРЬ:
 *  - пропускают ли в Койдуле пешеходов (см. en.ts);
 *  - кто выполняет машину от Куничиной Горы (3000 / 17 000 ₽);
 *  - утренний паром прибывает в Таллинн около 9.30 — как на tallinn-narva/fi.ts;
 *  - часы 7.00–19.00 с февраля 2026 — на октябрь 2026;
 *  - водитель говорит по-английски.
 */
import { facts, pathFor } from "../../i18n/ui";
import type { Landing } from "../landing";

const k = facts.koidula;
const kg = facts.kunichinaGora;
const eur = (v: number) => `${v} €`;
const rub = (v: number) => `${v.toLocaleString("fi-FI")} ruplaa`;
const back = pathFor("koidula-tallinn", "fi");
const narva = pathFor("tallinn-narva", "fi");

export const fi: Landing = {
  meta: {
    title: `Kuljetus Tallinna–Koidula: ${eur(k.price)} / auto | RideGo`,
    description: `Yksityisauto Tallinnan satamasta, lentoasemalta tai osoitteesta Koidulan rajalle Pihkovan suuntaan: ${eur(k.price)} koko autolta, noin 3 tuntia Tarton kautta.`,
    ogTitle: `Tallinna — Koidulan raja yksityisautolla, ${eur(k.price)} autolta`,
    ogDescription: `Lautalta suoraan autoon ja ${k.km} km Koidulan rajanylityspaikalle. Kiinteä hinta enintään neljälle matkustajalle.`,
  },
  crumb: "Kuljetus Tallinna — Koidula",
  hero: {
    eyebrow: `Etelän raja · ${eur(k.price)} autolta`,
    h1: ["Tallinnasta Koidulan rajalle", "yksityisautolla"],
    lead: `Koidula on Viron kaakkoisin maantieraja Venäjälle: vastapäätä on Kunitšina Gora, ja Petseriin ja Pihkovaan on sieltä lyhyt matka. Tallinnasta on ${k.km} km Tarton kautta, eikä viimeisellä osuudella kulje juuri mitään julkista liikennettä.`,
    answer: [
      `<strong>Lyhyesti:</strong> yksityiskuljetus Tallinnasta Koidulaan maksaa <strong>${eur(k.price)} koko autolta</strong>, ei henkeä kohden, ja matka kestää noin <strong>3 tuntia 5 minuuttia</strong>. Autoon mahtuu neljä matkustajaa matkatavaroineen. Nouto satamasta, lentoasemalta tai hotellista, lasten turvaistuin ja laukut sisältyvät hintaan.`,
      `Raja on auki klo 7.00–19.00 Viron aikaa ja suljettu yöllä, joten lähtöaika Tallinnasta lasketaan siitä, milloin haluat olla rajalla. Jos olet jo Tartossa, matka on lyhyempi: Tartosta Koidulaan ${eur(facts.tartu.price)}.`,
    ],
    stats: [
      [eur(k.price), "koko autolta"],
      ["≈ 3 t 5 min", "ajoaika"],
      [`${k.km} km`, "Tarton kautta"],
    ],
    perks: [
      "Kiinteä hinta autolta",
      "Nouto satamasta ja lentoasemalta",
      "Odotus ilman lisämaksua",
      "Lasten turvaistuin pyydettäessä",
      "Käteinen tai tilisiirto",
    ],
    waText: "Hei! Haluaisin tilata kuljetuksen Tallinna — Koidula. (Transfer Tallinn — Koidula)",
  },
  sections: [
    {
      id: "price",
      alt: true,
      eyebrow: "Hinta",
      title: `${eur(k.price)} autolta, matkustajia 1–4`,
      lead: "Hinta koskee koko autoa. Yöllinen lähtö, ruuhka Tallinnasta lähtiessä tai ylimääräinen matkalaukku eivät muuta sitä.",
      blocks: [
        {
          type: "table",
          caption: "Kuljetus Tallinna — Koidula: hinta ja mitä siihen sisältyy",
          cols: ["Palvelu", "Hinta", "Lisätiedot"],
          rows: [
            ["Tallinna → Koidulan raja", eur(k.price), "koko auto, enintään 4 matkustajaa matkatavaroineen"],
            ["Koidula → Tallinna", eur(k.price), `sama hinta toiseen suuntaan — <a href="${back}">paluureitti</a>`],
            ["Tartto → Koidula", eur(facts.tartu.price), "jos lähdet Tartosta: noin tunnin ajomatka"],
            ["Nouto satamasta tai lentoasemalta", "0 €", "kyltin kanssa, myöhästynyt lautta tai lento ei maksa lisää"],
            ["Yöajo, turvaistuin, matkatavarat", "0 €", "ei lisämaksua kellonajasta, laukuista tai turvaistuimesta"],
          ],
        },
        {
          type: "tip",
          html: "<strong>Maksaminen.</strong> Euroina käteisellä kuljettajalle tai tilisiirtona perillä. Ennakkomaksua ei ole. Hinta ja noutoaika vahvistetaan viestillä ennen matkapäivää.",
        },
        {
          type: "text",
          h3: "Miksi Koidula maksaa enemmän kuin Narva",
          html: `Matkaa on ${k.km - facts.narva.km} km enemmän ja ajoaikaa noin 35 minuuttia pidempään suuntaansa, ja viimeinen osuus kulkee pieniä teitä Põlvamaan ja Setomaan halki. Siksi Koidulaan ${eur(k.price)}, <a href="${narva}">Narvaan</a> ${eur(facts.narva.price)}.`,
        },
      ],
    },
    {
      id: "ferry",
      eyebrow: "Suomesta",
      title: "Helsingistä Pihkovaan Tallinnan ja Koidulan kautta",
      lead: "Suomen ja Venäjän rajanylityspaikat ovat olleet kiinni vuoden 2023 lopusta. Pietariin mennään yleensä Narvan kautta, mutta Pihkovaan, Petseriin ja etelämmäs Koidula on luontevampi reitti.",
      narrow: true,
      blocks: [
        {
          type: "table",
          caption: "Esimerkkiaikataulu: Helsinki — Tallinna — Koidula (Viron aika)",
          cols: ["Vaihe", "Aika", "Huomio"],
          rows: [
            ["Aamulautta saapuu Tallinnaan", "noin 9.30", "kuljettaja odottaa terminaalin ulostulolla"],
            ["Kahvitauko Tartossa", "noin 11.30", "sopiva kohta jaloitella"],
            ["Perillä Koidulassa", "noin 13.00", "useampi tunti aikaa ennen klo 19.00 sulkemista"],
          ],
        },
        {
          type: "text",
          h3: "Iltalautalla? Yövy matkalla",
          html: "Iltapäivällä tai illalla saapuvalla lautalla et ehdi rajalle samana päivänä. Silloin moni yöpyy Tallinnassa tai Tartossa ja jatkaa aamulla — voimme jakaa matkan kahteen osaan.",
        },
        {
          type: "text",
          h3: "Auto myös Venäjän puolelle",
          html: `Venäjän puolella voimme järjestää auton Kunitšina Gorasta: Pihkovaan noin ${rub(kg.pskov)}, Pietariin noin ${rub(kg.spb)}. Mainitse siitä samassa viestissä, niin vahvistamme molemmat osuudet kerralla. Pietariin Narva on kuitenkin selvästi edullisempi reitti.`,
        },
        {
          type: "text",
          h3: "Talviaika",
          html: "25.10.2026 alkaen Venäjällä kello on tunnin Viroa edellä. Raja on auki klo 7.00–19.00 Viron aikaa, eli Kunitšina Goran puolella 8.00–20.00.",
        },
      ],
    },
    {
      id: "airport",
      alt: true,
      eyebrow: "Lentoasema",
      title: "Tallinnan lentoasemalta suoraan Koidulaan",
      lead: "Lennart Meren lentoasema on lähellä keskustaa, joten matka etelään alkaa suoraan terminaalin ovelta.",
      narrow: true,
      blocks: [
        {
          type: "text",
          h3: "Lennon numero riittää",
          html: "Kerro se tilauksessa. Kuljettaja seuraa laskeutumista itse ja odottaa matkatavarahallin jälkeen <strong>RideGo</strong>-kyltin kanssa. Myöhästyminen siirtää vain tapaamista, hinta pysyy samana.",
        },
        {
          type: "text",
          h3: "Ehtiikö samana päivänä",
          html: "Aamupäivällä laskeutuvalla lennolla olet Koidulassa iltapäivällä, ja aikaa jää ennen sulkemista. Iltapäivän lennolla aikataulu on tiukka: silloin rajalle kannattaa mennä seuraavana aamuna.",
        },
        { type: "button", label: "Tilaa nouto Koidulaan", waText: "Hei! Tarvitsen kuljetuksen Tallinnan lentoasemalta Koidulaan. Lennon numero: " },
      ],
    },
    {
      eyebrow: "Näin se toimii",
      title: "Kolme tuntia kaakkoisrajalle",
      blocks: [
        {
          type: "steps",
          items: [
            {
              title: "Kerro suunnitelmasi",
              text: "Päivä, noutopaikka ja milloin haluat olla rajalla. Laskemme siitä lähtöajan ja vahvistamme sen hinnan kanssa yhdellä viestillä.",
            },
            {
              title: "Nouto Tallinnassa",
              text: "Satamasta, lentoasemalta, hotellista tai kotiovelta. Kuljettaja nostaa laukut, eikä niistä peritä mitään.",
            },
            {
              title: "Tarton kautta etelään",
              text: "Tallinnan–Tarton valtatie ja sieltä pienempiä teitä Setomaalle. Matka on pidempi kuin Narvaan, joten tauko on laskettu aikatauluun.",
            },
            {
              title: "Perillä rajalla",
              text: "Pysähdymme Koidulan rajanylityspaikalle. Rajatarkastuksen käyt itse; jatkokyyti Venäjän puolella sovitaan erikseen.",
            },
          ],
        },
      ],
    },
    {
      eyebrow: "Auto",
      title: "Millä autolla ajetaan",
      alt: true,
      narrow: true,
      blocks: [
        {
          type: "photo",
          src: "/images/car-2.jpg",
          alt: "RideGon Toyota Corolla, kuljetus Tallinna — Koidula, takaa kuvattuna",
          caption: `${facts.car}: tavaratilaan mahtuu kaksi isoa matkalaukkua ja käsimatkatavarat.`,
          width: 1200,
          height: 675,
        },
        {
          type: "text",
          html: `${facts.car}, nahkasisusta, ilmastointi ja neljä matkustajapaikkaa. Kolmen tunnin matkalla huomaa, onko autosta pidetty huolta: talvirenkaat ensimmäisistä pakkasista lähtien ja kesällä toimiva ilmastointi. Ratissa on ${facts.driver}, joka vastaa itse viesteihin. Hän puhuu venäjää ja englantia.`,
        },
      ],
    },
    {
      eyebrow: "Vaihtoehdot",
      title: "Bussi, juna vai yksityisauto Koidulaan",
      lead: "Koidulan hankaluus on viimeiset kilometrit: linja-auto ajaa suoraan Venäjälle, ja juna pysähtyy parin kilometrin päähän rajasta.",
      blocks: [
        {
          type: "table",
          caption: "Tallinnasta Koidulan rajalle: vaihtoehdot",
          cols: ["Tapa", "Hinta", "Aika", "Huomioitavaa"],
          rows: [
            ["RideGo-yksityiskuljetus", `${eur(k.price)} autolta`, "≈ 3 t 5 min", "ovelta rajalle, lähtö sinun aikataulusi mukaan"],
            ["Ecolines-bussi Tallinna — Pihkova", "katso varausjärjestelmästä", "≈ 7 t 17 min", "kulkee Koidulan kautta, kaikki matkustajat tarkastetaan yhdessä"],
            ["Elron-juna Tarton kautta", "Elronin hinnasto", "Tallinna — Tartto + linja R46", "R46:lla pari vuoroa päivässä, asemalta rajalle noin 2 km"],
            ["Oma auto", "polttoaine", "≈ 3 t", "jonopaikka varattava GoSwiftistä, viikonloppuisin ajat loppuvat nopeasti"],
          ],
        },
        {
          type: "tip",
          html: "<strong>Milloin auto kannattaa.</strong> Haluat rajalle tiettyyn aikaan etkä aikataulun ehdoilla. Mukana on muutakin kuin reppu. Tai teitä on kolme tai neljä, jolloin hinta per henkilö lähestyy bussilippua.",
        },
      ],
    },
    {
      eyebrow: "Raja",
      title: "Koidulan rajanylityspaikka lyhyesti",
      narrow: true,
      blocks: [
        {
          type: "details",
          items: [
            {
              open: true,
              title: "Auki vain päivällä",
              html: "Helmikuusta 2026 Koidula on ollut auki klo 7.00–19.00 Viron aikaa ja yöksi kokonaan kiinni. Ennen sulkemista puomille kertyy jonoa, joten tule ajoissa.",
            },
            {
              title: "Jonovaraus ja jalankulkijat",
              html: "Virosta lähtevät ajoneuvot varaavat jonopaikan GoSwiftistä osoitteessa <a href=\"https://www.eestipiir.ee\" target=\"_blank\" rel=\"noopener\">eestipiir.ee</a>. Jalankulkijoita koskevat säännöt ovat Koidulassa muuttuneet useaan otteeseen, joten tarkista ajantasainen tieto ennen matkaa: <a href=\"https://www.politsei.ee/en\" target=\"_blank\" rel=\"noopener\">politsei.ee</a>.",
            },
            {
              title: "Hyödyllisiä puhelinnumeroita",
              html: "Koidulan rajanylityspaikka: <a href=\"tel:+3727861800\">+372 786 1800</a>. Kunitšina Gora, Venäjän puoli: <a href=\"tel:+78114893421\">+7 811 489-34-21</a>. Poliisi- ja rajavartiolaitoksen yleisnumero: <a href=\"tel:+3726123000\">+372 612 3000</a>.",
            },
          ],
        },
      ],
    },
  ],
  faq: {
    eyebrow: "Kysymykset",
    title: "Kuljetus Tallinna — Koidula: usein kysyttyä",
    items: [
      {
        q: "Paljonko kuljetus Tallinnasta Koidulaan maksaa?",
        a: `${eur(k.price)} koko autolta, oli matkustajia yksi tai neljä, päivällä tai yöllä. Matkatavarat, turvaistuin ja nouto satamasta sisältyvät hintaan. Maksu matkan jälkeen käteisellä tai tilisiirtona.`,
      },
      {
        q: "Miten pääsen Helsingistä Pihkovaan?",
        a: `Lautalla Tallinnaan, autolla Koidulan rajalle ja rajan jälkeen Kunitšina Gorasta Pihkovaan. Noudamme sinut suoraan satamasta, ja Venäjän puolen auton (noin ${rub(kg.pskov)}) voi sopia samalla viestillä. Aamulautalla koko matka onnistuu samana päivänä.`,
      },
      {
        q: "Kauanko ajo Tallinnasta Koidulaan kestää?",
        a: `Noin 3 tuntia 5 minuuttia, ${k.km} km Tarton kautta. Lumisade tai ruuhka voi pidentää matkaa, joten aamun avaamisaikaan lähdemme liikkeelle hyvissä ajoin.`,
      },
      {
        q: "Kumpi raja on parempi, Narva vai Koidula?",
        a: `Riippuu määränpäästä. Pietariin Narva: sieltä Ivangorodista on suora tie kaupunkiin, ja kuljetus Tallinnasta maksaa ${eur(facts.narva.price)}. Pihkovaan, Petseriin ja etelämmäs Koidula. Narvassa raja ylitetään vain jalan, Koidula on maantieraja.`,
      },
      {
        q: "Voiko matkalla pysähtyä Tartossa?",
        a: `Kyllä, reitti kulkee Tarton läpi, joten tauko tai jääminen sinne onnistuu — kerro tilatessa. Tartosta Koidulaan on oma reittinsä, ${eur(facts.tartu.price)}.`,
      },
    ],
  },
  links: {
    eyebrow: "Muut reitit",
    title: "Muita reittejämme",
    note: "Reitit, joilla ei vielä ole suomenkielistä sivua, avaavat WhatsAppin, jossa reitti on valmiiksi kirjoitettuna.",
    items: [
      { label: "Koidula — Tallinna", price: eur(k.price), page: "koidula-tallinn", waText: "Hei! Haluaisin tilata kuljetuksen Koidula — Tallinna. (Transfer Koidula — Tallinn)" },
      { label: "Tallinna — Narva", price: eur(facts.narva.price), page: "tallinn-narva", waText: "Hei! Haluaisin tilata kuljetuksen Tallinna — Narva. (Transfer Tallinn — Narva)" },
      { label: "Tallinna — Luhamaa", price: eur(facts.luhamaa.price), page: "tallinn-luhamaa", waText: "Hei! Haluaisin tilata kuljetuksen Tallinna — Luhamaa. (Transfer Tallinn — Luhamaa)" },
      { label: "Tartto — Koidula tai Luhamaa", price: eur(facts.tartu.price), page: "tartu-koidula-luhamaa", waText: "Hei! Haluaisin tilata kuljetuksen Tartosta rajalle. (Transfer Tartu — border)" },
    ],
  },
  cta: {
    title: "Lähdetäänkö Koidulaan?",
    text: "Kerro päivä ja milloin haluat olla rajalla — vastaamme lähtöajalla ja hinnalla yhdessä viestissä.",
    call: "Soita",
  },
  schema: {
    name: "Kuljetus Tallinna — Koidula",
    alternateName: ["Taksi Tallinna — Koidula", "Helsingistä Pihkovaan Koidulan kautta", "Kuljetus Tallinnan satamasta Koidulaan"],
    serviceType: "Yksityiskuljetus rajanylityspaikalle",
    description: `Yksityiskuljetus Tallinnasta Koidulan rajanylityspaikalle: ${k.km} km Tarton kautta, noin 3 t 5 min, ${eur(k.price)} koko autolta. Nouto Tallinnan satamasta, lentoasemalta tai osoitteesta.`,
    areaServed: ["Tallinna", "Tartto", "Koidula"],
    offers: [{ name: "Kuljetus Tallinna — Koidula, auto enintään 4 matkustajalle", price: k.price }],
    breadcrumbHome: "RideGo",
  },
};
