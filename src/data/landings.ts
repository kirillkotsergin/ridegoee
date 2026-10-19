/**
 * Тексты посадочных страниц по языкам. Новая страница: файл с текстами в
 * src/data/<id>/, строка здесь и адреса в реестре `pages` (src/i18n/ui.ts).
 * Адрес берётся только из реестра — так hreflang, переключатель и
 * перелинковка не могут разойтись с тем, что реально собрано.
 */
import type { BuiltLang, PageId } from "../i18n/ui";
import type { Landing } from "./landing";
import { en as tallinnNarvaEn } from "./tallinn-narva/en";
import { fi as tallinnNarvaFi } from "./tallinn-narva/fi";
import { et as tallinnNarvaEt } from "./tallinn-narva/et";
import { en as narvaTallinnEn } from "./narva-tallinn/en";
import { fi as narvaTallinnFi } from "./narva-tallinn/fi";
import { et as narvaTallinnEt } from "./narva-tallinn/et";

export const landings: Partial<Record<PageId, Partial<Record<BuiltLang, Landing>>>> = {
  "tallinn-narva": { en: tallinnNarvaEn, fi: tallinnNarvaFi, et: tallinnNarvaEt },
  "narva-tallinn": { en: narvaTallinnEn, fi: narvaTallinnFi, et: narvaTallinnEt },
};
