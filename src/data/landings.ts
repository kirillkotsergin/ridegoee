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
import { en as tallinnKoidulaEn } from "./tallinn-koidula/en";
import { fi as tallinnKoidulaFi } from "./tallinn-koidula/fi";
import { et as tallinnKoidulaEt } from "./tallinn-koidula/et";
import { en as koidulaTallinnEn } from "./koidula-tallinn/en";
import { fi as koidulaTallinnFi } from "./koidula-tallinn/fi";
import { et as koidulaTallinnEt } from "./koidula-tallinn/et";

export const landings: Partial<Record<PageId, Partial<Record<BuiltLang, Landing>>>> = {
  "tallinn-narva": { en: tallinnNarvaEn, fi: tallinnNarvaFi, et: tallinnNarvaEt },
  "narva-tallinn": { en: narvaTallinnEn, fi: narvaTallinnFi, et: narvaTallinnEt },
  "tallinn-koidula": { en: tallinnKoidulaEn, fi: tallinnKoidulaFi, et: tallinnKoidulaEt },
  "koidula-tallinn": { en: koidulaTallinnEn, fi: koidulaTallinnFi, et: koidulaTallinnEt },
};
