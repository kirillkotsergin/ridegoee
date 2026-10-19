/**
 * Кнопки — наборы утилит, повторяющие .btn из public/styles.css. Держим в
 * одном месте: кнопок на странице десяток, и правка вида не должна
 * превращаться в поиск по всем шаблонам.
 */
const base =
  "inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full border border-transparent font-semibold transition duration-250 ease-soft motion-safe:hover:-translate-y-0.5 motion-safe:active:translate-y-0";

const size = {
  sm: "px-[18px] py-2.5 text-[0.92rem]",
  md: "px-[22px] py-[13px] text-[0.98rem]",
  lg: "px-[30px] py-4 text-[1.05rem]",
};

const tone = {
  accent:
    "bg-linear-120 from-accent to-accent-2 text-on-accent shadow-[0_10px_30px_-12px_rgb(255_165_36/0.75)] hover:shadow-[0_18px_40px_-14px_rgb(255_165_36/0.9)]",
  wa: "bg-wa text-on-wa shadow-[0_10px_30px_-14px_rgb(37_211_102/0.8)]",
  tg: "bg-tg text-on-tg shadow-[0_10px_30px_-14px_rgb(42_171_238/0.8)]",
  ghost: "border-line-strong bg-transparent text-text hover:border-accent hover:bg-white/5",
};

export const btn = (t: keyof typeof tone, s: keyof typeof size = "md") => `${base} ${size[s]} ${tone[t]}`;
