import type { Locale } from "./types";

export const LOCALE_COOKIE = "portfolio-locale";
export const DEFAULT_LOCALE: Locale = "fr";

export function isLocale(value: string | null | undefined): value is Locale {
  return value === "fr" || value === "en";
}

export function pick<T>(value: { fr: T; en: T }, locale: Locale): T {
  return locale === "en" ? value.en : value.fr;
}
