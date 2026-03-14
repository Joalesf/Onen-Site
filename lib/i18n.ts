export const locales = ["es", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "es";

export function resolveLocale(locale?: string): Locale {
  if (locale && locales.includes(locale as Locale)) {
    return locale as Locale;
  }

  return defaultLocale;
}
