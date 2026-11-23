/**
 * Luhamaa — Tallinna, финская версия. Написана заново. Своя тема — успеть с
 * Лухамаа на паром в Хельсинки (раздел «ferry»): правило «вышел с эстонского
 * контроля + 4,5 часа = самый ранний реальный паром» (3 ч 10 мин дороги,
 * город и около часа в порту). На финской Koidula — Tallinna то же правило с
 * четырьмя часами, здесь запас больше и отдельно разобран вечер перед
 * закрытием. Обращение на «sinä».
 *
 * 🔴 Переводил не носитель — до публикации вычитка финном.
 *
 * ПРОВЕРЬ:
 *  - правило «+4,5 часа» — вывод из времени в пути, не опыт водителя;
 *  - что последние вечерние паромы уходят около 21.30 — расписание меняется;
 *  - часы 7.00–19.00 с февраля 2026 — на ноябрь 2026;
 *  - водитель говорит по-английски.
 */
import { facts, pathFor } from "../../i18n/ui";
import type { Landing } from "../landing";

const l = facts.luhamaa;
const eur = (v: number) => `${v} €`;
const there = pathFor("tallinn-luhamaa", "fi");

export const fi: Landing = {
  meta: {
    title: `Kuljetus Luhamaa–Tallinna: ${eur(l.price)} rajalta | RideGo`,
    description: `Auto odottaa Luhamaan rajalla: ${eur(l.price)} koko autolta Tallinnaan, satamaan tai lentoasemalle. Noin 3 t 10 min, odotus rajalla on maksutonta. Varaa etukäteen.`,
    ogTitle: `Luhamaan rajalta Tallinnan satamaan, ${eur(l.price)} autolta`,
    ogDescription: "Luhamaalla ei ole kaupunkia, taksia eikä bussia. Auto varataan etukäteen ja se odottaa tarkastuksen ajan.",
  },
  crumb: "Kuljetus Luhamaa — Tallinna",
  hero: {
    eyebrow: `Paluukuljetus · ${eur(l.price)} autolta`,
    h1: ["Luhamaan rajalta", "Helsingin-lautalle"],
    lead: `Luhamaan rajanylityspaikka on keskellä maaseutua Riian–Pihkovan tiellä: lähellä ei ole kaupunkia eikä taksia. Tulemme sovittuun aikaan ja ajamme sinut Tallinnaan — ${l.km} km, noin 3 tuntia 10 minuuttia, yksi hinta koko autolle.`,
    answer: [
      `<strong>Lyhyesti:</strong> kuljetus Luhamaan rajalta Tallinnaan maksaa <strong>${eur(l.price)} koko autolta</strong>, enintään neljälle matkustajalle matkatavaroineen, ja ajo kestää noin <strong>3 tuntia 10 minuuttia</strong> Võrun ja Tarton kautta. Kuljettaja odottaa sen ajan, kun olet tarkastuksessa, eikä odotuksesta veloiteta.`,
      "Lautalle ehtimisessä auttaa yksi sääntö: kun olet ulkona Viron tarkastuksesta, lisää neljä ja puoli tuntia. Sitä aikaisempaa lauttaa ei kannata varata. Varaa auto vähintään päivää ennen — se ajaa luoksesi yli kolme tuntia.",
    ],
    stats: [
      [eur(l.price), "koko autolta"],
      ["≈ 3 t 10 min", "Tallinnaan"],
      ["+ 4,5 t", "lautan laskusääntö"],
    ],
    perks: [
      "Kiinteä hinta autolta",
      "Maksuton odotus rajalla",
      "Suoraan satamaan tai lentoasemalle",
      "Lasten turvaistuin pyydettäessä",
      "Käteinen tai tilisiirto",
    ],
    waText: "Hei! Haluaisin tilata kuljetuksen Luhamaa — Tallinna. (Transfer Luhamaa — Tallinn)",
  },
  sections: [
    {
      id: "price",
      alt: true,
      eyebrow: "Hinta",
      title: `Takaisin samaan hintaan: ${eur(l.price)}`,
      lead: `Auto ajaa ${l.km} km tyhjänä luoksesi. Se sisältyy jo hintaan, eikä sitä lisätä laskuun.`,
      blocks: [
        {
          type: "table",
          caption: "Kuljetus Luhamaa — Tallinna: hinta ja mitä siihen sisältyy",
          cols: ["Palvelu", "Hinta", "Lisätiedot"],
          rows: [
            ["Luhamaan raja → Tallinna", eur(l.price), `${l.km} km, noin 3 t 10 min, enintään 4 matkustajaa matkatavaroineen`],
            ["Odotus rajalla", "0 €", "kuljettaja odottaa, kunnes olet tarkastuksen läpi"],
            ["Satamaan, lentoasemalle tai hotelliin", "0 €", "Vanhankaupungin satama, D-terminaali, Lennart Meren lentoasema"],
            ["Luhamaa → Tartto", eur(facts.tartu.price), "jos matkasi päättyy Tarttoon"],
            ["Tallinna → Luhamaa", eur(l.price), `sama hinta rajalle päin — <a href="${there}">meno</a>`],
          ],
        },
        {
          type: "tip",
          html: "<strong>Miksi etukäteen.</strong> Luhamaalla ei ole taksitolppaa eikä bussipysäkkiä. Ilman varattua autoa sieltä ei käytännössä pääse pois — varsinkaan illalla juuri ennen klo 19.00 sulkemista.",
        },
      ],
    },
    {
      id: "ferry",
      eyebrow: "Kotiin Suomeen",
      title: "Luhamaalta Helsingin-lautalle samana päivänä",
      lead: "Ratkaisevaa ei ole se, milloin lähdit Pihkovasta, vaan se, milloin olet Viron puolella. Siitä hetkestä lähtien aikataulu on ennustettava.",
      narrow: true,
      blocks: [
        {
          type: "text",
          h3: "Nyrkkisääntö: neljä ja puoli tuntia",
          html: "Luhamaalta Tallinnaan on noin 3 tuntia 10 minuuttia, kaupungin läpi satamaan vielä vartti, ja terminaaliin kannattaa ehtiä vähintään tuntia ennen lähtöä. Kun olet ulkona Viron tarkastuksesta, <strong>lisää neljä ja puoli tuntia</strong> — sitä myöhemmin lähtevä lautta on realistinen.",
        },
        {
          type: "table",
          caption: "Milloin olet Viron puolella → mikä lautta on realistinen (Viron aika)",
          cols: ["Ulkona tarkastuksesta", "Satamassa noin", "Lautta"],
          rows: [
            ["klo 9.00", "klo 12.30", "iltapäivän vuorot klo 13.30 jälkeen"],
            ["klo 12.00", "klo 15.30", "alkuillan vuorot klo 16.30 jälkeen"],
            ["klo 15.00", "klo 18.30", "iltavuorot klo 19.30 jälkeen"],
            ["klo 17.00 tai myöhemmin", "klo 20.30 jälkeen", "vain myöhäisimmät vuorot — usein liian tiukka"],
          ],
        },
        {
          type: "text",
          h3: "Rajalla myöhään? Yövy Tallinnassa",
          html: "Jos pääset Viron puolelle vasta viiden jälkeen, myöhäisin lautta on epävarma. Moni yöpyy silloin Tallinnassa ja lähtee aamulautalla — ajamme suoraan hotellille, ja aamulla satamaan on lyhyt matka.",
        },
        {
          type: "text",
          h3: "Älä varaa tiukinta lauttaa",
          html: "Rajan kestoa ei tiedä kukaan etukäteen: tunti tai neljä. Jos lippusi on vaihdettavissa, varaa mieluummin myöhäisempi vuoro. Jos jono venyy, kerro meille — kuljettaja odottaa, ja voit samalla siirtää lautan.",
        },
      ],
    },
    {
      id: "airport",
      alt: true,
      eyebrow: "Määränpää",
      title: "Lentoasema, Tartto tai kotiovi",
      narrow: true,
      blocks: [
        {
          type: "text",
          h3: "Lennolle tarvitaan enemmän varaa",
          html: "Luhamaalta lentoasemalle on noin kolme ja puoli tuntia, ja lisäksi tulee raja, joka voi kestää puolesta tunnista kolmeen. Suosittelemme jättämään <strong>vähintään seitsemän tuntia</strong> siitä, kun asetut jonoon Venäjän puolella, lähtöselvitykseen.",
        },
        {
          type: "text",
          h3: "Tartto matkan varrella",
          html: `Jos jatkat Tartosta junalla tai jäät sinne, kyyti Luhamaalta Tarttoon maksaa ${eur(facts.tartu.price)}. Tallinnassa ajamme satamaan, lentoasemalle, linja-autoasemalle, hotelliin tai kotiovelle.`,
        },
        { type: "button", label: "Tilaa nouto Luhamaalta", waText: "Hei! Tarvitsen kuljetuksen Luhamaalta Tallinnan satamaan. Päivä ja lautta: " },
      ],
    },
    {
      eyebrow: "Näin se toimii",
      title: "Nouto heti tarkastuksen jälkeen",
      blocks: [
        {
          type: "steps",
          items: [
            {
              title: "Sovi ennen matkaa",
              text: "Päivä ja arvioitu rajanylitysaika. Auto lähtee Tallinnasta hyvissä ajoin — matka luoksesi kestää yli kolme tuntia.",
            },
            {
              title: "Viesti, kun olet läpi",
              text: "Yksi WhatsApp-viesti, ja kuljettaja ajaa ulostulolle. Jos tarkastus venyy, kirjoita — odotamme, eikä hinta muutu.",
            },
            {
              title: "Võrun ja Tarton kautta",
              text: "Matkalla on paikkoja, joissa voi pysähtyä kahville ja jaloittelemaan.",
            },
            {
              title: "Suoraan terminaaliin",
              text: "Satama, lentoasema, hotelli tai kotiovi Tallinnassa — tai Tartto matkan varrella.",
            },
          ],
        },
      ],
    },
    {
      eyebrow: "Auto",
      title: "Auto odottaa puomilla",
      alt: true,
      narrow: true,
      blocks: [
        {
          type: "photo",
          src: "/images/car-2.jpg",
          alt: "RideGon Toyota Corolla takaa, kuljetus Luhamaa — Tallinna",
          caption: `${facts.car}: ${l.km} km takaisin Võrun ja Tarton kautta.`,
          width: 1200,
          height: 675,
        },
        {
          type: "text",
          html: `${facts.car}: nahkasisusta, ilmastointi, neljä matkustajapaikkaa, tavaratilaan kaksi isoa matkalaukkua ja käsimatkatavarat. Talvella talvirenkaat — Võrun ja Tarton välinen osuus voi olla lumisateella hankala. Ratissa on ${facts.driver}, joka lukee viestit itse, joten tieto viivästyksestä menee suoraan hänelle.`,
        },
      ],
    },
    {
      eyebrow: "Raja",
      title: "Luhamaalta lähtiessä",
      narrow: true,
      blocks: [
        {
          type: "details",
          items: [
            {
              open: true,
              title: "Raja suljetaan klo 19.00",
              html: "Helmikuusta 2026 Luhamaa on ollut auki klo 7.00–19.00 Viron aikaa. 25.10.2026 alkaen venäläisessä verkossa puhelin voi näyttää Moskovan aikaa, tunnin edellä — kaikki tämän sivun ajat ovat Viron aikaa.",
            },
            {
              title: "Jos et ehdi ennen sulkemista",
              html: "Silloin ylität rajan seuraavana aamuna. Kerro meille heti, kun se on selvää, niin siirrämme noudon uuteen aikaan maksutta. Ajantasaiset säännöt: <a href=\"https://www.politsei.ee/en\" target=\"_blank\" rel=\"noopener\">politsei.ee</a>.",
            },
            {
              title: "Puhelinnumerot",
              html: "Luhamaan rajanylityspaikka: <a href=\"tel:+3727861830\">+372 786 1830</a>. Šumilkino, Venäjän puoli: <a href=\"tel:+78114898321\">+7 811 489-83-21</a>. Viron poliisi- ja rajavartiolaitos: <a href=\"tel:+3726123000\">+372 612 3000</a>.",
            },
          ],
        },
      ],
    },
  ],
  faq: {
    eyebrow: "Kysymykset",
    title: "Kuljetus Luhamaa — Tallinna: usein kysyttyä",
    items: [
      {
        q: "Paljonko kuljetus Luhamaalta Tallinnaan maksaa?",
        a: `${eur(l.price)} koko autolta — saman verran kuin toiseen suuntaan. Matkustajien määrä tai kellonaika eivät muuta hintaa, ja odotus rajalla on maksutonta. Käteinen tai tilisiirto, ei ennakkomaksua.`,
      },
      {
        q: "Ehdinkö Luhamaalta samana päivänä Helsingin-lautalle?",
        a: "Yleensä, jos olet Viron puolella iltapäivään mennessä. Laske ulostuloajasta neljä ja puoli tuntia eteenpäin: noin kolme tuntia ajoa, matka kaupungin läpi ja tunti satamassa. Sitä myöhäisempi lautta on realistinen.",
      },
      {
        q: "Pääseekö Luhamaalta pois ilman varattua autoa?",
        a: `Käytännössä ei. Rajalta ei kulje vakiovuoroja, Võruun on noin 30 km, eikä puomilla odota taksia. Jos Tartto riittää, sama auto vie sinne ${eur(facts.tartu.price)}.`,
      },
      {
        q: "Mitä jos en ehdi rajan läpi ennen sulkemista?",
        a: "Luhamaa suljetaan klo 19.00 Viron aikaa, joten ylität rajan seuraavana aamuna. Kerro meille, niin siirrämme noudon uuteen aikaan maksutta.",
      },
      {
        q: "Ajatteko myös Tallinnasta Luhamaalle?",
        a: `Kyllä, samaan ${eur(l.price)} hintaan — katso <a href="${there}">Tallinna — Luhamaa</a>. Molemmat suunnat on helpointa varata kerralla.`,
      },
    ],
  },
  links: {
    eyebrow: "Muut reitit",
    title: "Muita reittejämme",
    note: "Reitit, joilla ei vielä ole suomenkielistä sivua, avaavat WhatsAppin, jossa reitti on valmiiksi kirjoitettuna.",
    items: [
      { label: "Tallinna — Luhamaa", price: eur(l.price), page: "tallinn-luhamaa", waText: "Hei! Haluaisin tilata kuljetuksen Tallinna — Luhamaa. (Transfer Tallinn — Luhamaa)" },
      { label: "Koidula — Tallinna", price: eur(facts.koidula.price), page: "koidula-tallinn", waText: "Hei! Haluaisin tilata kuljetuksen Koidula — Tallinna. (Transfer Koidula — Tallinn)" },
      { label: "Narva — Tallinna", price: eur(facts.narva.price), page: "narva-tallinn", waText: "Hei! Haluaisin tilata kuljetuksen Narva — Tallinna. (Transfer Narva — Tallinn)" },
      { label: "Luhamaa — Tartto", price: eur(facts.tartu.price), page: "tartu-koidula-luhamaa", waText: "Hei! Haluaisin tilata kuljetuksen Luhamaa — Tartto. (Transfer Luhamaa — Tartu)" },
    ],
  },
  cta: {
    title: "Haemmeko sinut Luhamaalta?",
    text: "Kerro päivä, arvioitu rajanylitysaika ja lauttasi — auto on paikalla.",
    call: "Soita",
  },
  schema: {
    name: "Kuljetus Luhamaa — Tallinna",
    alternateName: ["Taksi Luhamaa — Tallinna", "Luhamaan rajalta Tallinnan satamaan", "Nouto Luhamaan rajalta"],
    serviceType: "Yksityiskuljetus rajanylityspaikalta",
    description: `Yksityiskuljetus Luhamaan rajanylityspaikalta Tallinnaan: ${l.km} km Võrun ja Tarton kautta, noin 3 t 10 min, ${eur(l.price)} koko autolta. Maksuton odotus rajatarkastuksen ajan, kyyti satamaan tai lentoasemalle.`,
    areaServed: ["Luhamaa", "Võru", "Tartto", "Tallinna"],
    offers: [{ name: "Kuljetus Luhamaa — Tallinna, auto enintään 4 matkustajalle", price: l.price }],
    breadcrumbHome: "RideGo",
  },
};
