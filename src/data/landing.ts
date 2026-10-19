/**
 * Модель посадочной страницы маршрута. Одна страница = один объект на языке;
 * шаблон src/layouts/RouteLanding.astro рисует его целиком, вёрстку под новую
 * страницу трогать не нужно.
 *
 * Порядок блоков повторяет русские страницы (CLAUDE.md, раздел 3.1): крошки →
 * герой с ценой и коротким ответом → секции → FAQ → перелинковка → CTA.
 *
 * Поля с HTML (`html`, `a`, `answer`) вставляются как есть: в них можно
 * <strong> и <a>. Текст пишем сами, внешних данных там нет.
 *
 * ⚠️ Тексты на каждом языке пишутся заново, а не переводятся с русского или с
 * estoniatransfer.ee: одинаковые формулировки на двух сайтах Google склеит
 * как дубли, и просядут оба.
 */
import type { PageId } from "../i18n/ui";

export type Block =
  | { type: "text"; h3?: string; html: string }
  | { type: "tip"; html: string }
  | { type: "table"; caption: string; cols: string[]; rows: string[][] }
  | { type: "steps"; items: { title: string; text: string }[] }
  | { type: "details"; items: { title: string; html: string; open?: boolean }[] }
  | { type: "photo"; src: string; alt: string; caption: string; width: number; height: number }
  | { type: "button"; label: string; waText: string };

export interface Section {
  /** Якорь для навигации в шапке: price, airport… */
  id?: string;
  eyebrow: string;
  title: string;
  lead?: string;
  /** Чередование фона, как .section--alt у русских страниц */
  alt?: boolean;
  /** Узкая колонка для сплошного текста */
  narrow?: boolean;
  blocks: Block[];
}

export interface CrossLink {
  label: string;
  price: string;
  /** Страница, если у неё есть версия на этом языке; иначе ссылка в WhatsApp */
  page?: PageId;
  waText: string;
}

export interface Landing {
  meta: { title: string; description: string; ogTitle?: string; ogDescription?: string };
  crumb: string;
  hero: {
    eyebrow: string;
    /** H1 из двух частей: вторая подсвечена градиентом */
    h1: [string, string];
    lead: string;
    /** Короткий ответ под сниппет и для ИИ-поиска: абзацы с HTML */
    answer: string[];
    stats: [string, string][];
    perks: string[];
    waText: string;
  };
  sections: Section[];
  /** Вопросы видимы на странице и дословно уходят в FAQPage — разойтись не могут */
  faq: { eyebrow: string; title: string; items: { q: string; a: string }[] };
  links: { eyebrow: string; title: string; note?: string; items: CrossLink[] };
  cta: { title: string; text: string; call: string };
  schema: {
    name: string;
    alternateName: string[];
    serviceType: string;
    description: string;
    areaServed: string[];
    offers: { name: string; price: number }[];
    breadcrumbHome: string;
  };
}
