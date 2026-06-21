const dictionaries = {
  en: () => import("../../dictionaries/en.json").then((m) => m.default),
  zh: () => import("../../dictionaries/zh.json").then((m) => m.default),
  hi: () => import("../../dictionaries/hi.json").then((m) => m.default),
  es: () => import("../../dictionaries/es.json").then((m) => m.default),
  ar: () => import("../../dictionaries/ar.json").then((m) => m.default),
  fr: () => import("../../dictionaries/fr.json").then((m) => m.default),
  pt: () => import("../../dictionaries/pt.json").then((m) => m.default),
  de: () => import("../../dictionaries/de.json").then((m) => m.default),
  ja: () => import("../../dictionaries/ja.json").then((m) => m.default),
  ko: () => import("../../dictionaries/ko.json").then((m) => m.default),
};

export type Locale = keyof typeof dictionaries;

export const locales: Locale[] = ["en", "zh", "hi", "es", "ar", "fr", "pt", "de", "ja", "ko"];

export const localeNames: Record<Locale, string> = {
  en: "English",
  zh: "中文",
  hi: "हिन्दी",
  es: "Español",
  ar: "العربية",
  fr: "Français",
  pt: "Português",
  de: "Deutsch",
  ja: "日本語",
  ko: "한국어",
};

export async function getDictionary(locale: string): Promise<any> {
  if (!hasLocale(locale)) {
    throw new Error(`Locale ${locale} not supported`);
  }
  return dictionaries[locale as Locale]();
}

export function hasLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}
