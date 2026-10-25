/**
 * Tallinna — Narva, финская версия. Написана заново, не перевод английской:
 * своя тема — пассажир из Финляндии (паром Хельсинки — Таллинн и закрытая
 * граница Финляндии с Россией). На английской версии этой темы нет.
 * Обращение на «sinä», как принято в финской рекламе услуг.
 *
 * 🔴 Переводил не носитель — до публикации вычитка финном.
 *
 * ПРОВЕРЬ:
 *  - финско-российские переходы закрыты с конца 2023 года — на октябрь 2026;
 *  - паром Хельсинки — Таллинн около 2 часов;
 *  - водитель говорит по-английски (см. en.ts);
 *  - цены Lux Express и Elron — на август 2026.
 */
import { facts, pathFor } from "../../i18n/ui";
import type { Landing } from "../landing";

const n = facts.narva;
const eur = (v: number) => `${v} €`;

export const fi: Landing = {
  meta: {
    title: `Kuljetus Tallinna–Narva: ${eur(n.price)} / auto | RideGo`,
    description: `Yksityiskuljetus Tallinnasta, satamasta tai lentoasemalta Narvan rajalle: ${eur(n.price)} koko autolta, noin 2,5 tuntia. Myös yöllä, ei ennakkomaksua.`,
    ogTitle: `Tallinna — Narvan raja yksityisautolla, ${eur(n.price)} autolta`,
    ogDescription: `Lautalta suoraan autoon: ${n.km} km Tallinnasta Narva-1-rajanylityspaikalle. Kiinteä hinta enintään neljälle matkustajalle.`,
  },
  crumb: "Kuljetus Tallinna — Narva",
  hero: {
    eyebrow: `Rajakuljetus · ${eur(n.price)} autolta`,
    h1: ["Tallinnasta Narvan rajalle", "yksityisautolla"],
    lead: `Haemme sinut Tallinnan satamasta, lentoasemalta, hotellista tai mistä tahansa osoitteesta ja ajamme suoraan Narvan rajanylityspaikalle. Matkaa on ${n.km} km, ja hinta sovitaan viestillä jo ennen lähtöä.`,
    answer: [
      `<strong>Lyhyesti:</strong> yksityisauto Tallinnasta Narvan rajalle on <strong>${eur(n.price)} autolta</strong> — samaan hintaan matkustaa yksi tai neljä — ja perillä olet noin <strong>2 tunnissa 30 minuutissa</strong>. Autoon mahtuu neljä matkustajaa matkatavaroineen. Ajamme mihin vuorokaudenaikaan tahansa. Hintaan sisältyvät nouto satamasta tai lentoasemalta, odotus, matkatavarat ja lasten turvaistuin.`,
      `Voimme myös pitää sinulle paikkaa rajajonossa: ${eur(n.queueSlot)} lisää. Narvan raja ylitetään vain jalan, ja se on auki klo 7.00–19.00 Viron aikaa — lähtöaika lasketaan näiden aukioloaikojen mukaan.`,
    ],
    stats: [
      [eur(n.price), "koko autolta"],
      ["≈ 2 t 30 min", "ajoaika"],
      [`${n.km} km`, "ovelta rajalle"],
    ],
    perks: [
      "Kiinteä hinta autolta",
      "Nouto satamasta ja lentoasemalta",
      "Odotus ilman lisämaksua",
      "Lasten turvaistuin pyydettäessä",
      "Käteinen tai tilisiirto",
    ],
    waText: "Hei! Haluaisin tilata kuljetuksen Tallinna — Narva. (Transfer Tallinn — Narva)",
  },
  sections: [
    {
      id: "price",
      alt: true,
      eyebrow: "Hinta",
      title: `Yksi hinta koko autolle: ${eur(n.price)}`,
      lead: "Maksat matkasta, et istumapaikoista. Hinta on sama, matkustitpa yksin tai neljän hengen porukalla, keskipäivällä tai aamuyöllä.",
      blocks: [
        {
          type: "table",
          caption: "Kuljetus Tallinna — Narva: hinta ja lisäpalvelut",
          cols: ["Palvelu", "Hinta", "Lisätiedot"],
          rows: [
            ["Tallinna → Narvan raja", eur(n.price), "koko auto, enintään 4 matkustajaa matkatavaroineen"],
            ["Narva → Tallinna", eur(n.price), `sama hinta toiseen suuntaan — <a href="${pathFor("narva-tallinn", "fi")}">paluureitti</a>`],
            ["Paikka rajajonossa", `+${eur(n.queueSlot)}`, "pidämme paikkaasi jonossa, ettei sinun tarvitse seistä tuntikausia"],
            ["Nouto satamasta tai lentoasemalta", "0 €", "kyltin kanssa tuloaulassa, myöhästynyt lautta tai lento ei maksa lisää"],
            ["Yöajo, turvaistuin, matkatavarat", "0 €", "ei lisämaksua kellonajasta, laukuista tai turvaistuimesta"],
          ],
        },
        {
          type: "tip",
          html: "<strong>Maksaminen.</strong> Käteisellä kuljettajalle tai tilisiirtona, euroina, matkan jälkeen. Ennakkomaksua emme pyydä. Saat hinnan ja noutoajan etukäteen viestinä, joten sopimus on kirjallinen.",
        },
        {
          type: "text",
          h3: "Kenelle autokohtainen hinta sopii",
          html: `Pariskunnille, perheille ja kaikille, joilla on paljon matkatavaraa. Bussilippu on edullinen yhdelle, mutta kolme aikuista maksaa kolminkertaisesti — ja Narvan linja-autoasemalta on vielä päästävä rajalle laukkujen kanssa. Yksityisautossa ${eur(n.price)} jaetaan haluamallasi tavalla, ja auto pysähtyy suoraan rajanylityspaikalle.`,
        },
      ],
    },
    {
      id: "ferry",
      eyebrow: "Suomesta",
      title: "Helsingistä Venäjälle Tallinnan ja Narvan kautta",
      lead: "Suomen ja Venäjän väliset rajanylityspaikat ovat olleet kiinni vuoden 2023 lopusta. Moni kulkee siksi lautalla Tallinnaan ja sieltä Narvaan, jossa rajan voi ylittää jalan Ivangorodiin.",
      narrow: true,
      blocks: [
        {
          type: "text",
          h3: "Lautalta suoraan autoon",
          html: "Lautta Helsingistä Tallinnaan kestää noin kaksi tuntia. Kerro meille laivayhtiö ja saapumisaika: kuljettaja odottaa terminaalin ulostulolla ja seuraa itse, jos lautta myöhästyy. Satamasta lähdetään suoraan itään — Tallinnan keskustaan ei tarvitse jäädä odottelemaan bussia tai junaa.",
        },
        {
          type: "table",
          caption: "Esimerkkiaikataulu: Helsinki — Tallinna — Narvan raja (Viron aika)",
          cols: ["Vaihe", "Aika", "Huomio"],
          rows: [
            ["Aamulautta saapuu Tallinnaan", "noin 9.30", "kuljettaja odottaa terminaalissa"],
            ["Saapuminen Narvan rajalle", "noin 12.00–12.30", "koko iltapäivä aikaa ylittää raja ennen klo 19.00"],
            ["Viimeinen järkevä lähtö Tallinnasta", "noin 14.00", "jättää muutaman tunnin varan jonolle"],
          ],
        },
        {
          type: "text",
          h3: "Talviaika: kellot eroavat joen eri puolilla",
          html: "25.10.2026 alkaen Viro on tunnin Moskovaa jäljessä. Raja on edelleen auki klo 7.00–19.00 Viron aikaa, mikä Ivangorodin puolella on 8.00–20.00. Jos Venäjän puolella odottaa juna tai bussi, tarkista, minkä maan aikaa sen aikataulu käyttää.",
        },
      ],
    },
    {
      id: "airport",
      alt: true,
      eyebrow: "Lentoasema",
      title: "Tallinnan lentoasemalta Narvan rajalle",
      lead: "Lennart Meren lentoasema on noin 4 km keskustasta, joten matka Narvaan alkaa suoraan terminaalin ovelta.",
      narrow: true,
      blocks: [
        {
          type: "text",
          h3: "Lähetä lennon numero",
          html: "Kun kerrot lennon numeron tilauksen yhteydessä, kuljettaja seuraa laskeutumista itse ja odottaa matkatavarahallin jälkeen <strong>RideGo</strong>-kyltin kanssa. Sinun ei tarvitse soittaa tai kertoa, missä seisot.",
        },
        {
          type: "text",
          h3: "Myöhästynyt lento ei maksa mitään",
          html: "Tapaamisaika siirtyy todellisen laskeutumisen mukaan, ja hinta pysyy samana. Siksi kuljetus kannattaa varata etukäteen: myöhään illalla taksitolpalla on vähän autoja, ja vielä harvempi kuljettaja lähtee 220 kilometrin matkalle.",
        },
        { type: "button", label: "Tilaa nouto lentoasemalta", waText: "Hei! Tarvitsen kuljetuksen Tallinnan lentoasemalta Narvaan. Lennon numero: " },
      ],
    },
    {
      eyebrow: "Näin se toimii",
      title: "Ensimmäisestä viestistä rajalle",
      blocks: [
        {
          type: "steps",
          items: [
            {
              title: "Lähetä viesti",
              text: "Päivä, kellonaika, noutopaikka ja matkustajien määrä. Tuletko lautalla tai lennolla? Lisää laivayhtiö tai lennon numero.",
            },
            {
              title: "Vahvistus kirjallisesti",
              text: "Vahvistamme hinnan, auton ja noutoajan yhdellä viestillä. Mitään ei makseta etukäteen.",
            },
            {
              title: "Ajo itään",
              text: "Valtatie 1 Rakveren ja Jõhvin kautta, noin kaksi ja puoli tuntia. Kahvitauko matkalla onnistuu — kerro vain kuljettajalle.",
            },
            {
              title: "Perillä Narva-1:ssä",
              text: "Pysähdymme jalankulkijoiden rajanylityspaikalle Ivangorodiin vievän sillan luona. Siitä jatkat jalan; kesto riippuu päivän jonosta.",
            },
          ],
        },
      ],
    },
    {
      eyebrow: "Auto",
      title: "Auto ja kuljettaja",
      alt: true,
      narrow: true,
      blocks: [
        {
          type: "photo",
          src: "/images/car-1.jpg",
          alt: "RideGon Toyota Corolla, jolla kuljetus Tallinnasta Narvaan ajetaan, edestä kuvattuna",
          caption: `${facts.car} — juuri tämä auto tulee hakemaan sinut.`,
          width: 1200,
          height: 675,
        },
        {
          type: "text",
          html: `${facts.car}, nahkasisusta, ilmastointi ja neljä matkustajapaikkaa. Tavaratilaan mahtuu kaksi isoa matkalaukkua ja käsimatkatavarat. Auto on kuljettajan oma eikä vaihtuva taksiyhtiön auto, ja se myös näkyy. Talvella talvirenkaat, kesällä toimiva ilmastointi.`,
        },
        {
          type: "text",
          html: `Ratissa on ${facts.driver}, joka vastaa myös WhatsApp- ja Telegram-viesteihin. Sovit siis kaiken suoraan sen ihmisen kanssa, joka sinut kuljettaa. Hän puhuu venäjää ja englantia.`,
        },
      ],
    },
    {
      eyebrow: "Vaihtoehdot",
      title: "Bussi, juna, taksi vai yksityisauto Narvaan",
      lead: "Rehellisesti: jos matkustat yksin ja kevyesti, bussi on selvästi halvempi. Yksityisauto voittaa aikaisissa lähdöissä, ryhmissä ja siinä, että pääset ovelta suoraan rajalle.",
      blocks: [
        {
          type: "table",
          caption: "Tallinnasta Narvan rajalle: hinta, aika ja huomioitavaa",
          cols: ["Tapa", "Hinta", "Aika", "Huomioitavaa"],
          rows: [
            ["RideGo-yksityiskuljetus", `${eur(n.price)} autolta`, "≈ 2 t 30 min", "ovelta rajalle, mihin aikaan tahansa, hinta sovitaan etukäteen"],
            ["Taksi taksamittarilla", "selviää vasta perillä", "≈ 2 t 30 min", "pitkälle matkalle lähdetään harvoin, tyhjä paluumatka näkyy hinnassa"],
            ["Lux Express -bussi", "alkaen 9 € / hlö", "≈ 3 t", "edullisin, mutta aikataulun mukaan ja asemalta asemalle"],
            ["Elron-juna", "13–23 € / hlö", "≈ 2 t 50 min", "muutama vuoro päivässä, Narvan asemalta vielä kävelymatka rajalle"],
          ],
        },
        {
          type: "tip",
          html: "<strong>Milloin auto kannattaa.</strong> Haluat rajalle avaamisaikaan klo 7.00. Lautta tai lento saapuu illalla. Mukana on lapsi, lastenrattaat tai paljon laukkuja. Tai tulet takaisin — Narvan rajanylityspaikalla ei yleensä ole takseja odottamassa.",
        },
      ],
    },
    {
      eyebrow: "Raja",
      title: "Narva-1-rajanylityspaikka lyhyesti",
      narrow: true,
      blocks: [
        {
          type: "details",
          items: [
            {
              open: true,
              title: "Vain jalankulkijoille",
              html: "Narvasta ei pääse autolla: rajan yli kävellään Narvajoen siltaa pitkin Ivangorodiin. Siksi viemme sinut rajanylityspaikalle, ja siitä jatkat itse. Autolla rajan voi ylittää etelämpänä Koidulassa tai Luhamaalla.",
            },
            {
              title: "Aukioloajat ja jono",
              html: "Klo 7.00–19.00 Viron aikaa, yöksi raja suljetaan. Jalankulkijoiden ei tarvitse varata aikaa GoSwiftistä, mutta viikonloppuisin ja pyhien aikaan jonoa kertyy. Ajantasaiset säännöt löytyvät Viron poliisi- ja rajavartiolaitoksen sivuilta <a href=\"https://www.politsei.ee/en\" target=\"_blank\" rel=\"noopener\">politsei.ee</a>.",
            },
            {
              title: "Jos et ehdi ennen sulkemista",
              html: "Silloin yövyt Narvassa ja ylität rajan aamulla. Sillan lähellä on hotelleja, myös edullisia. Ennen pyhiä ne täyttyvät nopeasti, joten varaa ajoissa.",
            },
            {
              title: "Hyödyllisiä puhelinnumeroita",
              html: "Narva-1-rajanylityspaikka: <a href=\"tel:+3723331600\">+372 333 1600</a>. Ivangorod, Venäjän puoli: <a href=\"tel:+78137552978\">+7 81375 5-29-78</a>. Poliisi- ja rajavartiolaitoksen yleisnumero: <a href=\"tel:+3726123000\">+372 612 3000</a>.",
            },
          ],
        },
      ],
    },
  ],
  faq: {
    eyebrow: "Kysymykset",
    title: "Kuljetus Tallinna — Narva: usein kysyttyä",
    items: [
      {
        q: "Paljonko kuljetus Tallinnasta Narvaan maksaa?",
        a: `${eur(n.price)} koko autolta riippumatta matkustajien tai laukkujen määrästä ja kellonajasta — myös öisin ja pyhinä. Ainoa lisäpalvelu on paikka rajajonossa, ${eur(n.queueSlot)}. Maksu matkan jälkeen käteisellä tai tilisiirtona.`,
      },
      {
        q: "Miten pääsen Helsingistä Venäjälle, kun Suomen raja on kiinni?",
        a: "Lautalla Tallinnaan ja sieltä autolla Narvaan, jossa raja ylitetään jalan Ivangorodiin. Noudamme sinut suoraan satamasta, joten koko matka Helsingistä Narvan rajalle onnistuu samana päivänä, jos lähdet aamulautalla.",
      },
      {
        q: "Kauanko ajo Tallinnasta Narvan rajalle kestää?",
        a: `Noin 2 tuntia 30 minuuttia, ${n.km} km valtatietä 1 Rakveren ja Jõhvin kautta. Lumisade tai ruuhka voi pidentää matkaa. Jos sinulla on jatkoyhteys Venäjän puolella, jätä aikaa varaa — rajajonoa ei lyhennä mikään kulkuneuvo.`,
      },
      {
        q: "Voitteko hakea minut Tallinnan lentoasemalta?",
        a: "Kyllä. Lähetä lennon numero, niin kuljettaja seuraa laskeutumista ja odottaa tuloaulassa kyltin kanssa. Odotus on maksutonta, eikä myöhästyminen muuta hintaa. Samoin noudamme satamasta, rautatieasemalta ja linja-autoasemalta.",
      },
      {
        q: "Ajatteko myös Narvasta takaisin Tallinnaan?",
        a: `Kyllä, samaan ${eur(n.price)} hintaan — katso <a href="${pathFor("narva-tallinn", "fi")}">Narva — Tallinna</a>. Sovi paluu etukäteen: Narvan rajanylityspaikalla ei yleensä ole takseja odottamassa, etenkään iltaisin. Molemmat suunnat voi tilata samalla viestillä.`,
      },
    ],
  },
  links: {
    eyebrow: "Muut reitit",
    title: "Muita reittejämme",
    note: "Reitit, joilla ei vielä ole suomenkielistä sivua, avaavat WhatsAppin, jossa reitti on valmiiksi kirjoitettuna.",
    items: [
      { label: "Narva — Tallinna", price: eur(n.price), page: "narva-tallinn", waText: "Hei! Haluaisin tilata kuljetuksen Narva — Tallinna. (Transfer Narva — Tallinn)" },
      { label: "Tallinna — Koidula", price: eur(facts.koidula.price), page: "tallinn-koidula", waText: "Hei! Haluaisin tilata kuljetuksen Tallinna — Koidula. (Transfer Tallinn — Koidula)" },
      { label: "Tallinna — Luhamaa", price: eur(facts.luhamaa.price), page: "tallinn-luhamaa", waText: "Hei! Haluaisin tilata kuljetuksen Tallinna — Luhamaa. (Transfer Tallinn — Luhamaa)" },
      { label: "Tartto — Koidula tai Luhamaa", price: eur(facts.tartu.price), page: "tartu-koidula-luhamaa", waText: "Hei! Haluaisin tilata kuljetuksen Tartosta rajalle. (Transfer Tartu — border)" },
    ],
  },
  cta: {
    title: "Lähdetäänkö Narvaan?",
    text: "Kerro päivä, kellonaika ja noutopaikka — vahvistamme auton, hinnan ja lähtöajan yhdellä viestillä.",
    call: "Soita",
  },
  schema: {
    name: "Kuljetus Tallinna — Narva",
    alternateName: ["Taksi Tallinna — Narva", "Kuljetus Tallinnan satamasta Narvaan", "Helsingistä Venäjälle Narvan kautta"],
    serviceType: "Yksityiskuljetus rajanylityspaikalle",
    description: `Yksityiskuljetus Tallinnasta Narvan rajanylityspaikalle: ${n.km} km, noin 2 t 30 min, ${eur(n.price)} koko autolta. Nouto Tallinnan satamasta ja lentoasemalta, ympäri vuorokauden.`,
    areaServed: ["Tallinna", "Narva"],
    offers: [
      { name: "Kuljetus Tallinna — Narva, auto enintään 4 matkustajalle", price: n.price },
      { name: "Paikka rajajonossa", price: n.queueSlot },
    ],
    breadcrumbHome: "RideGo",
  },
};
