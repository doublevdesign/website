import en from "@/messages/en.json"
import de from "@/messages/de.json"

export const locales = ["en", "de"] as const
export type Locale = (typeof locales)[number]

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale)
}

export function getMessages(locale: Locale) {
  return locale === "de" ? de : en
}

export type Messages = typeof en
