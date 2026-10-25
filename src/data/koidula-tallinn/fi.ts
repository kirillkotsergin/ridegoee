/**
 * Koidula — Tallinna, финская версия. Написана заново. Своя тема — успеть
 * с Койдулы на паром в Хельсинки (раздел «ferry»): правило «вышел с
 * эстонского контроля + 4 часа = самый ранний реальный паром». На финской
 * Narva — Tallinna тоже паром, но там другой расчёт и другая дорога.
 * Обращение на «sinä».
 *
 * 🔴 Переводил не носитель — до публикации вычитка финном.
 *
 * ПРОВЕРЬ:
 *  - правило «+4 часа»: 3 ч дороги + около часа в порту — вывод, не опыт водителя;
 *  - «машина ждёт неподалёку, у пункта пропуска стоять нельзя» — с русской страницы;
 *  - часы 7.00–19.00 с февраля 2026 — на октябрь 2026;
 *  - водитель говорит по-английски.
 */
import { facts, pathFor } from "../../i18n/ui";
import type { Landing } from "../landing";

const k = facts.koidula;
const eur = (v: number) => `${v} €`;
const there = pathFor("tallinn-koidula", "fi");

export const fi: Landing = {
  meta: {
    title: `Kuljetus Koidula–Tallinna: ${eur(k.price)} rajalta | RideGo`,
    description: `Auto odottaa Koidulan rajanylityspaikalla: ${eur(k.price)} koko autolta Tallinnaan, satamaan tai lentoasemalle. Noin 3 tuntia, odotus rajalla on maksutonta.`,
    ogTitle: `Koidulan rajalta Tallinnaan, ${eur(k.price)} autolta`,
    ogDescription: "Koidulassa ei ole taksitolppaa eikä asemaa. Varaa auto etukäteen, niin se odottaa, kun pääset rajan läpi.",
  },
  crumb: "Kuljetus Koidula — Tallinna",
  hero: {
    eyebrow: `Paluukuljetus · ${eur(k.price)} autolta`,
    h1: ["Koidulan rajalta", "Tallinnaan"],
    lead: `Koidulan rajanylityspaikka on keskellä Setomaan maaseutua: lähellä ei ole kaupunkia, asemaa eikä taksitolppaa. Tulemme sovittuun aikaan ja ajamme sinut Tallinnaan — ${k.km} km Tarton kautta, noin kolme tuntia, yksi hinta koko autolle.`,
    answer: [
      `<strong>Lyhyesti:</strong> kuljetus Koidulan rajalta Tallinnaan maksaa <strong>${eur(k.price)} koko autolta</strong>, enintään neljälle matkustajalle matkatavaroineen, ja ajo kestää noin <strong>3 tuntia 5 minuuttia</strong>. Kuljettaja odottaa lähellä rajanylityspaikkaa sen ajan, kun olet tarkastuksessa, eikä odotuksesta veloiteta.`,
      "Ennakkovaraus on Koidulassa vielä tärkeämpi kuin Narvassa: auto ajaa luoksesi kolme tuntia, eikä paikan päältä löydä kyytiä. Sovimme suunnilleen kellonajan, ja lähetät WhatsApp-viestin, kun olet Viron puolella.",
    ],
    stats: [
      [eur(k.price), "koko autolta"],
      ["≈ 3 t 5 min", "Tallinnaan"],
      ["0 €", "odotus rajalla"],
    ],
    perks: [
      "Kiinteä hinta autolta",
      "Maksuton odotus rajalla",
      "Satamaan tai lentoasemalle",
      "Lasten turvaistuin pyydettäessä",
      "Käteinen tai tilisiirto",
    ],
    waText: "Hei! Haluaisin tilata kuljetuksen Koidula — Tallinna. (Transfer Koidula — Tallinn)",
  },
  sections: [
    {
      id: "price",
      alt: true,
      eyebrow: "Hinta",
      title: `Paluu samaan hintaan: ${eur(k.price)}`,
      lead: "Kuljettaja ajaa luoksesi kolme tuntia tyhjällä autolla. Se sisältyy jo hintaan, eikä sitä lisätä laskuun.",
      blocks: [
        {
          type: "table",
          caption: "Kuljetus Koidula — Tallinna: hinta ja mitä siihen sisältyy",
          cols: ["Palvelu", "Hinta", "Lisätiedot"],
          rows: [
            ["Koidulan raja → Tallinna", eur(k.price), "koko auto, enintään 4 matkustajaa matkatavaroineen"],
            ["Odotus rajalla", "0 €", "kuljettaja odottaa, kunnes olet tarkastuksen läpi"],
            ["Satamaan, lentoasemalle tai hotelliin", "0 €", "Vanhakaupungin satama, Lennart Meren lentoasema, Balti jaam"],
            ["Koidula → Tartto", eur(facts.tartu.price), "jos matkasi päättyy Tarttoon, matka on lyhyempi"],
            ["Tallinna → Koidula", eur(k.price), `sama hinta rajalle päin — <a href="${there}">meno</a>`],
          ],
        },
        {
          type: "tip",
          html: "<strong>Meno ja paluu yhdellä viestillä.</strong> Kun varaat molemmat suunnat kerralla, kuljettaja tietää päivät etukäteen, eikä sinun tarvitse etsiä autoa paluupäivänä — sunnuntaina se voi olla vaikeaa.",
        },
      ],
    },
    {
      id: "ferry",
      eyebrow: "Kotiin Suomeen",
      title: "Ehditkö Koidulasta samana päivänä Helsingin-lautalle?",
      lead: "Usein ehdit, jos rajalla ei mene koko päivää. Ratkaisevaa on se, milloin olet Viron puolella, ei se, milloin lähdit Venäjältä.",
      narrow: true,
      blocks: [
        {
          type: "text",
          h3: "Nyrkkisääntö: neljä tuntia",
          html: "Koidulasta Tallinnan satamaan on noin kolme tuntia, ja terminaaliin kannattaa ehtiä vähintään tuntia ennen lähtöä. Kun olet ulkona Viron tarkastuksesta, <strong>lisää siihen neljä tuntia</strong> — aikaisin realistinen lautta lähtee sen jälkeen.",
        },
        {
          type: "table",
          caption: "Milloin olet Viron puolella → mikä lautta on realistinen (Viron aika)",
          cols: ["Ulkona tarkastuksesta", "Satamassa noin", "Lautta"],
          rows: [
            ["klo 10.00", "klo 13.00", "iltapäivän vuorot klo 14.00 jälkeen"],
            ["klo 13.00", "klo 16.00", "alkuillan vuorot klo 17.00 jälkeen"],
            ["klo 16.00", "klo 19.00", "myöhäiset iltavuorot — tarkista aikataulu"],
            ["klo 18.00 tai myöhemmin", "klo 21.00 jälkeen", "usein liian tiukka: harkitse yötä Tallinnassa"],
          ],
        },
        {
          type: "text",
          h3: "Älä varaa tiukinta lauttaa",
          html: "Rajan kestoa ei tiedä etukäteen kukaan. Jos lippusi on vaihdettavissa, varaa mieluummin myöhäisempi vuoro. Jos jono venyy, kerro meille: kuljettaja odottaa, ja voit samalla siirtää lauttaa.",
        },
      ],
    },
    {
      id: "airport",
      alt: true,
      eyebrow: "Määränpää",
      title: "Satama, lentoasema tai kotiovi",
      narrow: true,
      blocks: [
        {
          type: "text",
          h3: "Lennolle",
          html: "Lennolle tarvitaan vielä enemmän varaa kuin lautalle. Suosittelemme jättämään <strong>vähintään kuusi–seitsemän tuntia</strong> siitä, kun asetut jonoon Venäjän puolella, lähtöselvitykseen. Iltalennolle on rauhallisinta ylittää raja aamulla.",
        },
        {
          type: "text",
          h3: "Tarttoon tai minne tahansa Tallinnassa",
          html: `Tie kulkee Tarton kautta, joten voit jäädä sinne — ${eur(facts.tartu.price)}, jos Tartto on määränpääsi. Tallinnassa ajamme satamaan, lentoasemalle, Balti jaamille, linja-autoasemalle, hotelliin tai kotiovelle.`,
        },
        { type: "button", label: "Tilaa nouto Koidulasta", waText: "Hei! Tarvitsen kuljetuksen Koidulasta Tallinnaan. Päivä ja arvioitu aika: " },
      ],
    },
    {
      eyebrow: "Näin se toimii",
      title: "Auto odottaa Viron puolella",
      blocks: [
        {
          type: "steps",
          items: [
            {
              title: "Varaa etukäteen",
              text: "Koidulassa se ei ole muodollisuus: sattumalta paikalle ei tule yhtään autoa. Kerro päivä ja arvioitu rajanylitysaika.",
            },
            {
              title: "Viesti tarkastuksen jälkeen",
              text: "Yksi WhatsApp-viesti, ja kuljettaja ajaa paikalle. Jos tarkastus venyy, kerro — odotamme, eikä hinta muutu.",
            },
            {
              title: "Tarton kautta pohjoiseen",
              text: "Setomaa, Tartto ja sieltä valtatietä Tallinnaan. Pidämme tauon matkalla: kolme tuntia putkeen rajajonon jälkeen on paljon.",
            },
            {
              title: "Perillä",
              text: "Satama, lentoasema, hotelli tai kotiovi — tai Tartto, jos se sopii paremmin.",
            },
          ],
        },
      ],
    },
    {
      eyebrow: "Auto",
      title: "Kunnon istuin rajan jälkeen",
      alt: true,
      narrow: true,
      blocks: [
        {
          type: "photo",
          src: "/images/car-3.jpg",
          alt: "RideGon Toyota Corollan takapenkki, kuljetus Koidula — Tallinna",
          caption: "Takapenkki. Tuntien rajajonon jälkeen sillä on enemmän merkitystä kuin kuvasta näkee.",
          width: 1200,
          height: 737,
        },
        {
          type: "text",
          html: `${facts.car}: nahkasisusta, ilmastointi, neljä matkustajapaikkaa, tavaratilaan kaksi isoa matkalaukkua ja käsimatkatavarat. Ratissa on ${facts.driver}, joka lukee viestit itse — jos rajalla viivästyy, kerrot sen suoraan hänelle. Lasten turvaistuin pyydettäessä, lemmikistä kerro etukäteen.`,
        },
      ],
    },
    {
      eyebrow: "Miksi varata",
      title: "Pääseekö Koidulasta julkisilla?",
      narrow: true,
      blocks: [
        {
          type: "text",
          html: "Huonosti. Koidula on kylä Setomaan kunnassa, ei kaupunki. Busseja kulkee harvoin, Elronin linjalla R46 on pari junavuoroa päivässä noin kahden kilometrin päässä rajasta, eikä taksisovellus löydä lähistöltä yleensä yhtään autoa. Omin päin Tarttoon menee pitkään, Tallinnaan vielä pidempään.",
        },
        {
          type: "tip",
          html: "<strong>Milloin julkiset riittävät.</strong> Matkustat yksin ja kevyesti, sinulla ei ole kiire, ja rajanylitys osuu junan tai bussin aikatauluun. Muuten — laukkujen, lautan tai useamman matkustajan kanssa — ennalta varattu auto on yksinkertaisin ratkaisu.",
        },
      ],
    },
    {
      eyebrow: "Raja",
      title: "Koidulasta lähtiessä",
      alt: true,
      narrow: true,
      blocks: [
        {
          type: "details",
          items: [
            {
              open: true,
              title: "Raja suljetaan klo 19.00",
              html: "Helmikuusta 2026 Koidula on ollut auki klo 7.00–19.00 Viron aikaa. 25.10.2026 alkaen venäläisessä verkossa puhelin voi näyttää Moskovan aikaa, tunnin edellä — kaikki tämän sivun ajat ovat Viron aikaa.",
            },
            {
              title: "Jos et ehdi ennen sulkemista",
              html: "Silloin ylität rajan seuraavana aamuna. Kerro meille, niin siirrämme noudon uuteen aikaan maksutta. Ajantasaiset säännöt: <a href=\"https://www.politsei.ee/en\" target=\"_blank\" rel=\"noopener\">politsei.ee</a>.",
            },
            {
              title: "Puhelinnumerot",
              html: "Koidulan rajanylityspaikka: <a href=\"tel:+3727861800\">+372 786 1800</a>. Kunitšina Gora, Venäjän puoli: <a href=\"tel:+78114893421\">+7 811 489-34-21</a>. Viron poliisi- ja rajavartiolaitos: <a href=\"tel:+3726123000\">+372 612 3000</a>.",
            },
          ],
        },
      ],
    },
  ],
  faq: {
    eyebrow: "Kysymykset",
    title: "Kuljetus Koidula — Tallinna: usein kysyttyä",
    items: [
      {
        q: "Paljonko kuljetus Koidulasta Tallinnaan maksaa?",
        a: `${eur(k.price)} koko autolta — saman verran kuin toiseen suuntaan. Matkustajien ja laukkujen määrä tai kellonaika eivät muuta hintaa. Käteinen tai tilisiirto, ei ennakkomaksua.`,
      },
      {
        q: "Ehdinkö Koidulasta samana päivänä Helsingin-lautalle?",
        a: "Yleensä, jos olet Viron puolella iltapäivään mennessä. Laske ulostuloajasta neljä tuntia eteenpäin: noin kolme tuntia ajoa ja tunti satamassa. Sitä myöhäisempi lautta on realistinen.",
      },
      {
        q: "Mistä kuljettaja tietää, että olen rajan läpi?",
        a: "Lähetät WhatsApp-viestin tai soitat. Siihen asti kuljettaja odottaa lähellä, koska aivan rajanylityspaikalla autot eivät saa seistä. Odotus tarkastuksen aikana on maksutonta.",
      },
      {
        q: "Voitteko viedä minut Tarttoon Tallinnan sijaan?",
        a: `Kyllä, Tartto on matkan varrella ja halvempi — ${eur(facts.tartu.price)}. Kerro, minne kaupungissa haluat, niin vahvistamme.`,
      },
      {
        q: "Ajatteko myös Tallinnasta Koidulaan?",
        a: `Kyllä, samaan ${eur(k.price)} hintaan — katso <a href="${there}">Tallinna — Koidula</a>. Molemmat suunnat on helpointa varata kerralla.`,
      },
    ],
  },
  links: {
    eyebrow: "Muut reitit",
    title: "Muita reittejämme",
    note: "Reitit, joilla ei vielä ole suomenkielistä sivua, avaavat WhatsAppin, jossa reitti on valmiiksi kirjoitettuna.",
    items: [
      { label: "Tallinna — Koidula", price: eur(k.price), page: "tallinn-koidula", waText: "Hei! Haluaisin tilata kuljetuksen Tallinna — Koidula. (Transfer Tallinn — Koidula)" },
      { label: "Luhamaa — Tallinna", price: eur(facts.luhamaa.price), page: "luhamaa-tallinn", waText: "Hei! Haluaisin tilata kuljetuksen Luhamaa — Tallinna. (Transfer Luhamaa — Tallinn)" },
      { label: "Narva — Tallinna", price: eur(facts.narva.price), page: "narva-tallinn", waText: "Hei! Haluaisin tilata kuljetuksen Narva — Tallinna. (Transfer Narva — Tallinn)" },
      { label: "Koidula — Tartto", price: eur(facts.tartu.price), page: "tartu-koidula-luhamaa", waText: "Hei! Haluaisin tilata kuljetuksen Koidula — Tartto. (Transfer Koidula — Tartu)" },
    ],
  },
  cta: {
    title: "Haemmeko sinut Koidulasta?",
    text: "Kerro päivä ja arvioitu rajanylitysaika — auto on paikalla.",
    call: "Soita",
  },
  schema: {
    name: "Kuljetus Koidula — Tallinna",
    alternateName: ["Taksi Koidula — Tallinna", "Koidulan rajalta Tallinnan satamaan", "Nouto Koidulan rajalta"],
    serviceType: "Yksityiskuljetus rajanylityspaikalta",
    description: `Yksityiskuljetus Koidulan rajanylityspaikalta Tallinnaan: ${k.km} km Tarton kautta, noin 3 t 5 min, ${eur(k.price)} koko autolta. Maksuton odotus rajatarkastuksen ajan, kyyti satamaan tai lentoasemalle.`,
    areaServed: ["Koidula", "Tartto", "Tallinna"],
    offers: [{ name: "Kuljetus Koidula — Tallinna, auto enintään 4 matkustajalle", price: k.price }],
    breadcrumbHome: "RideGo",
  },
};
