import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

/**
 * Сборка в статику: на хостинге по-прежнему только готовые HTML-файлы,
 * Node нужен лишь на этапе сборки.
 *
 * Переезд постепенный (октябрь 2026). Одиннадцать русских страниц пока
 * остаются рукописным HTML в `public/` — Astro копирует их в `dist/` байт в
 * байт, поэтому адреса, разметка и позиции в выдаче не меняются. Переводы
 * (EN/FI/ET) собираются из `src/`. Русские страницы переносим в компоненты
 * по одной, когда до них дойдёт очередь.
 */
export default defineConfig({
  site: "https://ridego.ee",
  output: "static",
  // Как у русских страниц: каталог с index.html, URL со слэшем на конце
  trailingSlash: "always",
  build: {
    format: "directory",
    // CSS страницы целиком в <style>: на один запрос до первой отрисовки
    // меньше. CSP это пропускает — style-src 'unsafe-inline' в .htaccess.
    inlineStylesheets: "always",
  },
  i18n: {
    defaultLocale: "ru",
    locales: ["ru", "en", "fi", "et"],
    routing: {
      // Русский в корне (/transfer-tallinn-narva/), остальные с префиксом
      // (/en/…, /fi/…, /et/…). Старые русские адреса не трогаем.
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
