/**
 * Языки, общие факты и строки интерфейса.
 *
 * Русский — язык по умолчанию и пока живёт рукописным HTML в public/.
 * Отсюда его берут только переключатель языков и hreflang: им нужно знать
 * русский адрес страницы, чтобы сослаться на него.
 */

export const langs = ["ru", "en", "fi", "et"] as const;
export type Lang = (typeof langs)[number];

/** Языки, которые собирает Astro. Русский пока статикой, см. astro.config.mjs */
export const builtLangs = ["en", "fi", "et"] as const satisfies readonly Lang[];
export type BuiltLang = (typeof builtLangs)[number];

export const site = "https://ridego.ee";

/** Подписи в переключателе. Код ET, а не EE: EE — страна, а не язык. */
export const langMeta: Record<Lang, { code: string; name: string; og: string }> = {
  ru: { code: "RU", name: "Русский", og: "ru_RU" },
  en: { code: "EN", name: "English", og: "en_GB" },
  fi: { code: "FI", name: "Suomi", og: "fi_FI" },
  et: { code: "ET", name: "Eesti", og: "et_EE" },
};

/**
 * Факты, общие для всех языков. Цена в тексте страниц набирается не цифрой,
 * а отсюда — тариф меняется в одном месте.
 *
 * ⚠️ Русские страницы в public/ эти значения НЕ читают: там цифры вписаны
 * руками. Меняете цену — правьте и здесь, и русский HTML, и llms.txt.
 */
export const facts = {
  phone: "+372 56277764",
  phoneHref: "tel:+37256277764",
  waNumber: "37256277764",
  telegram: "https://t.me/+37256277764",
  car: "Toyota Corolla 2020",
  driver: "Kirill",
  narva: { price: 130, km: 210, queueSlot: 50 },
  koidula: { price: 160 },
  luhamaa: { price: 160 },
  tartu: { price: 80 },
} as const;

/** Ссылка в WhatsApp с готовым текстом сообщения */
export const wa = (text?: string) =>
  `https://wa.me/${facts.waNumber}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

/**
 * Реестр страниц: один ключ — одна страница на всех языках, где она есть.
 * Отсюда строятся hreflang, переключатель языков, подвал и перелинковка.
 * Нет языка в записи — значит, перевода нет, и ссылки на него не будет.
 */
export const pages = {
  home: { ru: "/" },
  "tallinn-narva": {
    ru: "/transfer-tallinn-narva/",
    en: "/en/transfer-tallinn-narva/",
    fi: "/fi/kuljetus-tallinna-narva/",
    et: "/et/transfeer-tallinn-narva/",
  },
  "narva-tallinn": {
    ru: "/transfer-narva-tallinn/",
    en: "/en/transfer-narva-tallinn/",
    fi: "/fi/kuljetus-narva-tallinna/",
    et: "/et/transfeer-narva-tallinn/",
  },
  "tallinn-koidula": { ru: "/transfer-tallinn-koidula/" },
  "koidula-tallinn": { ru: "/transfer-koidula-tallinn/" },
  "tallinn-luhamaa": { ru: "/transfer-tallinn-luhamaa/" },
  "luhamaa-tallinn": { ru: "/transfer-luhamaa-tallinn/" },
  "tartu-koidula-luhamaa": { ru: "/transfer-tartu-koidula-luhamaa/" },
  "spb-ivangorod": { ru: "/transfer-spb-ivangorod/" },
  "finland-russia": { ru: "/transfer-finlyandiya-rossiya/" },
  guide: { ru: "/kak-dobratsya-do-granicy/" },
} satisfies Record<string, Partial<Record<Lang, string>>>;
export type PageId = keyof typeof pages;

export const pathFor = (id: PageId, lang: Lang): string | undefined =>
  (pages[id] as Partial<Record<Lang, string>>)[lang];

/**
 * Названия страниц на каждом языке — для подвала. Порядок записей в `pages`
 * и есть порядок ссылок в подвале. Направление — длинным тире.
 */
export const pageNames: Record<Exclude<PageId, "home">, Record<BuiltLang, string>> = {
  "tallinn-narva": { en: "Tallinn — Narva", fi: "Tallinna — Narva", et: "Tallinn — Narva" },
  "narva-tallinn": { en: "Narva — Tallinn", fi: "Narva — Tallinna", et: "Narva — Tallinn" },
  "tallinn-koidula": { en: "Tallinn — Koidula", fi: "Tallinna — Koidula", et: "Tallinn — Koidula" },
  "koidula-tallinn": { en: "Koidula — Tallinn", fi: "Koidula — Tallinna", et: "Koidula — Tallinn" },
  "tallinn-luhamaa": { en: "Tallinn — Luhamaa", fi: "Tallinna — Luhamaa", et: "Tallinn — Luhamaa" },
  "luhamaa-tallinn": { en: "Luhamaa — Tallinn", fi: "Luhamaa — Tallinna", et: "Luhamaa — Tallinn" },
  "tartu-koidula-luhamaa": { en: "Tartu — Koidula and Luhamaa", fi: "Tartto — Koidula ja Luhamaa", et: "Tartu — Koidula ja Luhamaa" },
  "spb-ivangorod": { en: "St Petersburg — Ivangorod, Pskov", fi: "Pietari — Ivangorod, Pihkova", et: "Peterburi — Ivangorod, Pihkva" },
  "finland-russia": { en: "From Finland to Russia", fi: "Suomesta Venäjälle", et: "Soomest Venemaale" },
  guide: { en: "How to get to the border", fi: "Miten pääsee rajalle", et: "Kuidas jõuda piirile" },
};

/** Строки интерфейса: шапка, подвал, кнопки. Тексты страниц — в src/data/. */
export const ui = {
  en: {
    skip: "Skip to content",
    homeLabel: "RideGo — home",
    navLabel: "Page sections",
    nav: [
      ["#price", "Price"],
      ["#airport", "Airport"],
      ["#faq", "FAQ"],
    ],
    liveBadge: ["Instant reply", "on WhatsApp / Telegram"],
    call: "Call",
    crumbsLabel: "Breadcrumbs",
    home: "Home",
    langLabel: "Language",
    orderWa: "Book on WhatsApp",
    or: "Or",
    and: "or call",
    fab: "Book",
    fabLabel: "Book a transfer on WhatsApp",
    footerBlurb: "Private transfers from Tallinn to the Narva, Koidula and Luhamaa border crossings.",
    footerContacts: "Contact",
    footerRoutes: "Routes in English",
    footerRussian: "More routes · in Russian",
    hitsTotal: "Total visitors:",
    hitsToday: "Today:",
    country: "Tallinn, Estonia",
  },
  fi: {
    skip: "Siirry sisältöön",
    homeLabel: "RideGo — etusivu",
    navLabel: "Sivun osiot",
    nav: [
      ["#price", "Hinta"],
      ["#airport", "Lentoasema"],
      ["#faq", "Kysymykset"],
    ],
    liveBadge: ["Vastaamme heti", "WhatsAppissa / Telegramissa"],
    call: "Soita",
    crumbsLabel: "Murupolku",
    home: "Etusivu",
    langLabel: "Kieli",
    orderWa: "Tilaa WhatsAppissa",
    or: "Tai",
    and: "tai soita",
    fab: "Tilaa",
    fabLabel: "Tilaa kuljetus WhatsAppissa",
    footerBlurb: "Yksityiskuljetukset Tallinnasta Narvan, Koidulan ja Luhamaan rajanylityspaikoille.",
    footerContacts: "Yhteystiedot",
    footerRoutes: "Reitit suomeksi",
    footerRussian: "Lisää reittejä · venäjäksi",
    hitsTotal: "Kävijöitä yhteensä:",
    hitsToday: "Tänään:",
    country: "Tallinna, Viro",
  },
  et: {
    skip: "Liigu sisu juurde",
    homeLabel: "RideGo — avaleht",
    navLabel: "Lehe osad",
    nav: [
      ["#price", "Hind"],
      ["#airport", "Lennujaam"],
      ["#faq", "Küsimused"],
    ],
    liveBadge: ["Vastame kohe", "WhatsAppis / Telegramis"],
    call: "Helista",
    crumbsLabel: "Leivapuru",
    home: "Avaleht",
    langLabel: "Keel",
    orderWa: "Telli WhatsAppis",
    or: "Või",
    and: "või helistage",
    fab: "Telli",
    fabLabel: "Telli transfeer WhatsAppis",
    footerBlurb: "Eratransfeerid Tallinnast Narva, Koidula ja Luhamaa piiripunkti.",
    footerContacts: "Kontakt",
    footerRoutes: "Suunad eesti keeles",
    footerRussian: "Veel suundi · vene keeles",
    hitsTotal: "Külastajaid kokku:",
    hitsToday: "Täna:",
    country: "Tallinn, Eesti",
  },
} satisfies Record<BuiltLang, unknown>;
