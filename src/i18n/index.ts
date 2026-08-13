import arMessages from "./messages/ar.json";
import deMessages from "./messages/de.json";
import enMessages from "./messages/en.json";
import esMessages from "./messages/es.json";
import frMessages from "./messages/fr.json";
import hiMessages from "./messages/hi.json";
import jaMessages from "./messages/ja.json";
import koMessages from "./messages/ko.json";
import ptMessages from "./messages/pt.json";
import ruMessages from "./messages/ru.json";
import zhMessages from "./messages/zh.json";

// ─────────────────────────────────────────────────────────────────────────────
// Locale Configuration (single source of truth)
// ─────────────────────────────────────────────────────────────────────────────

export interface LocaleConfig {
  code: SupportedLocale;
  label: string;
  native: string;
  rtl?: boolean;
}

export const LOCALE_CONFIG: LocaleConfig[] = [
  { code: "en", label: "English", native: "English" },
  { code: "es", label: "Spanish", native: "Español" },
  { code: "ar", label: "Arabic", native: "العربية", rtl: true },
  { code: "fr", label: "French", native: "Français" },
  { code: "de", label: "German", native: "Deutsch" },
  { code: "hi", label: "Hindi", native: "हिन्दी" },
  { code: "ja", label: "Japanese", native: "日本語" },
  { code: "ko", label: "Korean", native: "한국어" },
  { code: "pt", label: "Portuguese", native: "Português" },
  { code: "ru", label: "Russian", native: "Русский" },
  { code: "zh", label: "Chinese", native: "中文" },
];

export type SupportedLocale =
  "en" | "es" | "ar" | "fr" | "de" | "hi" | "ja" | "ko" | "pt" | "ru" | "zh";

export const DEFAULT_LOCALE: SupportedLocale = "en";

export const LOCALE_STORAGE_KEY = "portfolio-locale";

// ─────────────────────────────────────────────────────────────────────────────
// Messages
// ─────────────────────────────────────────────────────────────────────────────

export const messages: Record<SupportedLocale, Record<string, string>> = {
  en: enMessages,
  es: esMessages,
  ar: arMessages,
  fr: frMessages,
  de: deMessages,
  hi: hiMessages,
  ja: jaMessages,
  ko: koMessages,
  pt: ptMessages,
  ru: ruMessages,
  zh: zhMessages,
};

// ─────────────────────────────────────────────────────────────────────────────
// Utility Functions
// ─────────────────────────────────────────────────────────────────────────────

/** Check if a value is a supported locale */
export function isSupported(value: string | null): value is SupportedLocale {
  return !!value && LOCALE_CONFIG.some((l) => l.code === value);
}

/** Check if a locale uses RTL direction */
export function isRTL(locale: SupportedLocale): boolean {
  return LOCALE_CONFIG.find((l) => l.code === locale)?.rtl ?? false;
}

/** Get messages for a given locale, falling back to English if not found */
export function getMessages(locale: string): Record<string, string> {
  if (locale in messages) {
    return messages[locale as SupportedLocale];
  }

  return messages[DEFAULT_LOCALE];
}

/** Get the user's preferred locale from the browser */
export function getBrowserLocale(): SupportedLocale {
  const browserLocale = navigator.language.split("-")[0];

  if (browserLocale && isSupported(browserLocale)) {
    return browserLocale;
  }

  return DEFAULT_LOCALE;
}

/** Get initial locale from storage or browser preference */
export function getInitialLocale(): SupportedLocale {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem(LOCALE_STORAGE_KEY);

    if (isSupported(stored)) return stored;
  }

  return getBrowserLocale();
}
