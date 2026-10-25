/**
 * Narva — Tallinna, финская версия. Написана заново. Своя тема — пересадка
 * с границы на паром в Хельсинки в тот же день (финский читатель едет
 * домой). Обращение на «sinä».
 *
 * 🔴 Переводил не носитель — до публикации вычитка финном.
 *
 * ПРОВЕРЬ:
 *  - время отправления паромов в таблице — примеры, не расписание; запас
 *    «быть в порту за час» — общий совет, у компаний он свой;
 *  - водитель говорит по-английски (см. tallinn-narva/en.ts);
 *  - цены Lux Express и Elron — на август 2026.
 */
import { facts, pathFor } from "../../i18n/ui";
import type { Landing } from "../landing";

const n = facts.narva;
const eur = (v: number) => `${v} €`;
const there = pathFor("tallinn-narva", "fi");

export const fi: Landing = {
  meta: {
    title: `Kuljetus Narva–Tallinna: ${eur(n.price)} rajalta | RideGo`,
    description: `Auto odottaa Narva-1-rajanylityspaikalla: ${eur(n.price)} koko autolta Tallinnaan, satamaan tai lentoasemalle. Noin 2,5 tuntia, odotus rajalla on maksutonta.`,
    ogTitle: `Narvan rajalta Tallinnaan, ${eur(n.price)} koko autolta`,
    ogDescription: "Rajalta suoraan Helsingin-lautalle: auto odottaa Narva-1:n ulostulolla, kiinteä hinta ja maksuton odotus.",
  },
  crumb: "Kuljetus Narva — Tallinna",
  hero: {
    eyebrow: `Paluukuljetus · ${eur(n.price)} autolta`,
    h1: ["Narvan rajalta", "Tallinnaan"],
    lead: "Tulet rajanylityspaikalta Viron puolelle, ja auto on jo odottamassa. Taksia ei tarvitse etsiä pienestä rajakaupungista: ajamme suoraan satamaan, lentoasemalle, hotelliin tai mihin tahansa osoitteeseen Tallinnassa.",
    answer: [
      `<strong>Lyhyesti:</strong> kuljetus Narvan rajalta Tallinnaan maksaa <strong>${eur(n.price)} koko autolta</strong>, enintään neljälle matkustajalle matkatavaroineen, ja ajo kestää noin <strong>2 tuntia 30 minuuttia</strong>. Kuljettaja odottaa Narva-1:llä sen ajan, kun olet passintarkastuksessa, eikä odotuksesta veloiteta.`,
      "Kukaan ei tiedä tarkalleen, milloin pääset rajan läpi, joten sovimme suunnilleen kellonajan ja lähetät WhatsApp-viestin, kun olet Viron puolella. Varaa etukäteen: Narvan rajanylityspaikalla ei yleensä ole takseja odottamassa.",
    ],
    stats: [
      [eur(n.price), "koko autolta"],
      ["≈ 2 t 30 min", "Tallinnaan"],
      ["0 €", "odotus rajalla"],
    ],
    perks: [
      "Kiinteä hinta autolta",
      "Maksuton odotus rajalla",
      "Satamaan tai lentoasemalle",
      "Lasten turvaistuin pyydettäessä",
      "Käteinen tai tilisiirto",
    ],
    waText: "Hei! Haluaisin tilata kuljetuksen Narva — Tallinna. (Transfer Narva — Tallinn)",
  },
  sections: [
    {
      id: "price",
      alt: true,
      eyebrow: "Hinta",
      title: `Paluu maksaa saman verran: ${eur(n.price)}`,
      lead: "Auto ajaa Tallinnasta hakemaan sinua, mutta tyhjästä menomatkasta et maksa. Sama hinta kuin rajalle päin, mihin aikaan tahansa raja on auki.",
      blocks: [
        {
          type: "table",
          caption: "Kuljetus Narva — Tallinna: hinta ja mitä siihen sisältyy",
          cols: ["Palvelu", "Hinta", "Lisätiedot"],
          rows: [
            ["Narvan raja → Tallinna", eur(n.price), "koko auto, enintään 4 matkustajaa matkatavaroineen"],
            ["Odotus Narva-1:llä", "0 €", "kuljettaja odottaa, kunnes olet läpi, vaikka jono veisi aikaa"],
            ["Satamaan tai lentoasemalle", "0 €", "Vanhasatama, Lennart Meren lentoasema, Balti jaam, linja-autoasema tai hotelli"],
            ["Siirto toiselle päivälle", "0 €", "et ehtinyt ennen sulkemista? tulemme uutena päivänä"],
            ["Tallinna → Narva", eur(n.price), `sama hinta menosuuntaan — <a href="${there}">reitti rajalle</a>`],
          ],
        },
        {
          type: "tip",
          html: "<strong>Kaksi matkaa, yksi viesti.</strong> Jos olet menossa Venäjälle ja palaat Tallinnan kautta, tilaa molemmat suunnat kerralla. Kuljettaja tietää molemmat päivät, eikä paluupäivänä tarvitse etsiä autoa — se on tärkeintä sunnuntaisin ja ennen pyhiä.",
        },
      ],
    },
    {
      id: "ferry",
      eyebrow: "Kotiin Suomeen",
      title: "Narvan rajalta Helsingin-lautalle samana päivänä",
      lead: "Kun Suomen ja Venäjän välinen raja on kiinni, kotimatka kulkee usein Narvan, Tallinnan ja lautan kautta. Onnistuu yhdessä päivässä, kun ajoitus on oikea.",
      narrow: true,
      blocks: [
        {
          type: "table",
          caption: "Esimerkki: milloin olla Viron puolella lautan lähtöajan mukaan (Viron aika)",
          cols: ["Lautta lähtee Tallinnasta", "Ole Viron puolella viimeistään", "Huomio"],
          rows: [
            ["16.30", "noin 13.00", "aamupäivän rajanylitys, rauhallinen aikataulu"],
            ["19.30", "noin 16.00", "tavallisin yhdistelmä: raja keskipäivällä, lautta illalla"],
            ["22.00", "noin 18.30", "tiukka: raja suljetaan klo 19.00, jonoon jo aamupäivällä"],
          ],
        },
        {
          type: "text",
          h3: "Laskusääntö",
          html: "Rajalta Vanhaansatamaan on noin kaksi ja puoli tuntia, ja satamassa kannattaa olla noin tunti ennen lähtöä. Kun lasket ylityksen ajankohtaa, muista lisäksi jono Venäjän puolella: se voi kestää puoli tuntia tai useita tunteja. Tarkista oman laivayhtiösi lähtöselvityksen sulkemisaika.",
        },
        {
          type: "text",
          h3: "Jos et ehdi lautalle",
          html: "Jos jono venyy, kerro meille heti. Ajamme sinut silloin hotelliin tai suoraan satamaan myöhäisemmälle lautalle — hinta pysyy samana. Yksi ilta Tallinnassa on parempi kuin kiire rajalla.",
        },
        { type: "button", label: "Tilaa kuljetus lautalle", waText: "Hei! Tarvitsen kuljetuksen Narvan rajalta Tallinnan satamaan. Lautta lähtee klo " },
      ],
    },
    {
      id: "airport",
      alt: true,
      eyebrow: "Määränpää",
      title: "Lentoasema, satama tai kotiovi",
      narrow: true,
      blocks: [
        {
          type: "text",
          h3: "Tallinnan lentoasema",
          html: "Jätämme sinut Lennart Meren lentoaseman lähtöaulan ovelle. Lähetä lennon numero tilauksen yhteydessä, niin laskemme noutoajan sen perusteella.",
        },
        {
          type: "text",
          h3: "Rautatieasema, hotelli ja pysähdykset",
          html: "Balti jaam, linja-autoasema, hotelli tai mikä tahansa osoite Tallinnassa. Haluatko pysähtyä matkalla Jõhvissa tai Rakveressa? Kerro etukäteen, niin varaamme sille aikaa.",
        },
      ],
    },
    {
      eyebrow: "Näin se toimii",
      title: "Rajalta perille",
      blocks: [
        {
          type: "steps",
          items: [
            {
              title: "Varaa etukäteen",
              text: "Päivä, arvioitu ylitysaika ja määränpää Tallinnassa. Etukäteen siksi, että auto ajaa ensin kaksi ja puoli tuntia Narvaan.",
            },
            {
              title: "Viesti rajan jälkeen",
              text: "Yksi WhatsApp-viesti Viron puolelta. Jos tarkastus kesti kauemmin, mitään ei muutu — lähtö vain siirtyy.",
            },
            {
              title: "Auto ulostulon lähellä",
              text: "Auto on pysäköity lähelle Narva-1:n ulostuloa, joten laukkujen kanssa ei tarvitse kävellä kauas. Kuljettaja nostaa matkatavarat.",
            },
            {
              title: "Kaksi ja puoli tuntia länteen",
              text: "Valtatie 1 Jõhvin ja Rakveren kautta sovittuun paikkaan: satamaan, lentoasemalle, hotelliin tai kotiin.",
            },
          ],
        },
      ],
    },
    {
      eyebrow: "Miksi varata",
      title: "Saako Narvan rajalta taksin?",
      alt: true,
      narrow: true,
      blocks: [
        {
          type: "text",
          html: "Ei luotettavasti. Narva on pieni kaupunki, ja paikalliset taksit ajavat lähinnä lyhyitä matkoja. 210 kilometrin matka Tallinnaan tarkoittaa niille tyhjää paluuta, joten moni kieltäytyy tai hinnoittelee sen korkealle. Sovelluksissa lähellä ei välttämättä ole yhtään autoa — etenkään iltaisin, sunnuntaisin ja juuri ennen klo 19.00, kun suuri joukko tulee rajalta yhtä aikaa.",
        },
        {
          type: "tip",
          html: "<strong>Milloin bussi on parempi.</strong> Matkustat yksin, kevyesti eikä sinulla ole kiire lautalle: Lux Express -bussi (noin 9 €:sta) tai Elron-juna (13–23 €) Tallinnaan on selvästi halvempi. Auto kannattaa kahdelle tai useammalle, raskaiden laukkujen kanssa, lautalle tai lennolle ehtiäksesi.",
        },
      ],
    },
    {
      eyebrow: "Auto",
      title: "Kunnon istuin rajan jälkeen",
      narrow: true,
      blocks: [
        {
          type: "photo",
          src: "/images/car-3.jpg",
          alt: "RideGon Toyota Corollan takaistuimet, kuljetus Narvasta Tallinnaan",
          caption: "Takapenkki. Muutaman tunnin rajajonon jälkeen sillä on enemmän merkitystä kuin luulisi.",
          width: 1600,
          height: 1200,
        },
        {
          type: "text",
          html: `${facts.car}, nahkaistuimet, ilmastointi ja neljä matkustajapaikkaa; tavaratilaan mahtuu kaksi isoa matkalaukkua ja käsimatkatavarat. Talvella talvirenkaat. Ratissa on ${facts.driver}, joka vastaa myös viesteihin — jos ylitysaika muuttuu, kerrot sen suoraan hänelle.`,
        },
      ],
    },
    {
      eyebrow: "Raja",
      title: "Narva-1:ltä lähtiessä",
      alt: true,
      narrow: true,
      blocks: [
        {
          type: "details",
          items: [
            {
              open: true,
              title: "Jalan, auki klo 19.00 asti",
              html: "Rajan yli kävellään siltaa pitkin Ivangorodista. Narva-1 on auki klo 7.00–19.00 Viron aikaa. 25.10.2026 alkaen Venäjän puolella kello on tunnin edellä, ja venäläisessä verkossa puhelin voi näyttää Moskovan aikaa — kaikki ajat tällä sivulla ovat Viron aikaa.",
            },
            {
              title: "Jos et ehdi ennen sulkemista",
              html: "Yövyt Venäjän puolella ja ylität rajan aamulla. Kerro meille: matkan siirto toiselle päivälle ei maksa mitään. Ajantasaiset säännöt: <a href=\"https://www.politsei.ee/en\" target=\"_blank\" rel=\"noopener\">politsei.ee</a>.",
            },
            {
              title: "Puhelinnumerot",
              html: "Narva-1: <a href=\"tel:+3723331600\">+372 333 1600</a>. Ivangorod, Venäjän puoli: <a href=\"tel:+78137552978\">+7 81375 5-29-78</a>. Poliisi- ja rajavartiolaitos: <a href=\"tel:+3726123000\">+372 612 3000</a>.",
            },
          ],
        },
      ],
    },
  ],
  faq: {
    eyebrow: "Kysymykset",
    title: "Kuljetus Narva — Tallinna: usein kysyttyä",
    items: [
      {
        q: "Paljonko kuljetus Narvasta Tallinnaan maksaa?",
        a: `${eur(n.price)} koko autolta, enintään neljälle matkustajalle matkatavaroineen. Kellonaika ei vaikuta hintaan, eikä sekään, että auto ajoi hakemaan sinua Tallinnasta. Maksu matkan jälkeen käteisellä tai tilisiirtona.`,
      },
      {
        q: "Ehdinkö Narvan rajalta samana päivänä Helsingin-lautalle?",
        a: "Yleensä kyllä, jos ylität rajan viimeistään iltapäivällä. Rajalta satamaan on noin kaksi ja puoli tuntia, ja satamassa kannattaa olla tunti ennen lähtöä. Jos jono venyy, viemme sinut myöhäisemmälle lautalle samaan hintaan.",
      },
      {
        q: "Mistä löydän kuljettajan rajan jälkeen?",
        a: "Lähetä WhatsApp-viesti, kun olet Viron puolella. Kuljettaja vastaa, missä auto on — lähellä Narva-1:n ulostuloa. Odotus tarkastuksen aikana on maksutonta.",
      },
      {
        q: "Saako Narvan rajalta taksin paikan päältä?",
        a: "Joskus, mutta siihen ei kannata luottaa. Rajalla ei ole varmaa taksitolppaa, paikalliset kuljettajat lähtevät 210 kilometrin matkalle harvoin, ja iltaisin tai viikonloppuisin vapaata autoa ei välttämättä ole lainkaan.",
      },
      {
        q: "Entä jos en pääse rajan yli ennen klo 19.00?",
        a: "Raja suljetaan yöksi, joten ylität sen seuraavana aamuna. Kerro meille, niin siirrämme noudon uuteen aikaan maksutta.",
      },
    ],
  },
  links: {
    eyebrow: "Muut reitit",
    title: "Muita reittejämme",
    note: "Reitit, joilla ei vielä ole suomenkielistä sivua, avaavat WhatsAppin, jossa reitti on valmiiksi kirjoitettuna.",
    items: [
      { label: "Tallinna — Narva", price: eur(n.price), page: "tallinn-narva", waText: "Hei! Haluaisin tilata kuljetuksen Tallinna — Narva. (Transfer Tallinn — Narva)" },
      { label: "Koidula — Tallinna", price: eur(facts.koidula.price), waText: "Hei! Haluaisin tilata kuljetuksen Koidula — Tallinna. (Transfer Koidula — Tallinn)" },
      { label: "Luhamaa — Tallinna", price: eur(facts.luhamaa.price), waText: "Hei! Haluaisin tilata kuljetuksen Luhamaa — Tallinna. (Transfer Luhamaa — Tallinn)" },
      { label: "Tartto — Koidula tai Luhamaa", price: eur(facts.tartu.price), page: "tartu-koidula-luhamaa", waText: "Hei! Haluaisin tilata kuljetuksen Tarton ja rajan välillä. (Transfer Tartu — border)" },
    ],
  },
  cta: {
    title: "Odotamme sinua rajalla",
    text: "Kerro ylityspäivä ja määränpää Tallinnassa — vahvistamme auton ja hinnan yhdellä viestillä.",
    call: "Soita",
  },
  schema: {
    name: "Kuljetus Narva — Tallinna",
    alternateName: ["Taksi Narva — Tallinna", "Narvan rajalta Tallinnan satamaan"],
    serviceType: "Yksityiskuljetus rajanylityspaikalta",
    description: `Yksityiskuljetus Narva-1-rajanylityspaikalta Tallinnaan: ${n.km} km, noin 2 t 30 min, ${eur(n.price)} koko autolta. Maksuton odotus rajatarkastuksen ajan, kuljetus satamaan ja lentoasemalle.`,
    areaServed: ["Narva", "Tallinna"],
    offers: [{ name: "Kuljetus Narva — Tallinna, auto enintään 4 matkustajalle", price: n.price }],
    breadcrumbHome: "RideGo",
  },
};
