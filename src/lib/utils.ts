import { type IntlShape } from "react-intl";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import { DEFAULT_LOCALE, messages, type SupportedLocale } from "@/i18n";

import { MESSAGES, type MessageTypes } from "./constants";

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const fm = (
  key: MessageTypes,
  intl: IntlShape,
  values?: Record<string, string | number | undefined>,
) => (MESSAGES[key] ? intl.formatMessage(MESSAGES[key], values) : key);

export type MissingKeysReport = Record<
  SupportedLocale,
  {
    missing: string[];
    present: string[];
    coverage: number;
  }
>;

/**
 * Checks all language files against en.json (source of truth) and reports
 * which keys are present or missing in each supported locale.
 *
 * @returns Report object with missing/present keys and coverage percentage for each locale
 */
export function getTranslationCoverage(): MissingKeysReport {
  const sourceKeys = Object.keys(messages[DEFAULT_LOCALE]);
  const locales = Object.keys(messages) as SupportedLocale[];

  const report: MissingKeysReport = {} as MissingKeysReport;

  for (const locale of locales) {
    const localeMessages = messages[locale];
    const localeKeys = new Set(Object.keys(localeMessages));

    const missing: string[] = [];
    const present: string[] = [];

    for (const key of sourceKeys) {
      if (localeKeys.has(key)) {
        present.push(key);
      } else {
        missing.push(key);
      }
    }

    const coverage =
      sourceKeys.length > 0
        ? Math.round((present.length / sourceKeys.length) * 100)
        : 100;

    report[locale] = { missing, present, coverage };
  }

  return report;
}

/**
 * Logs translation coverage to console in a readable format.
 * Useful for debugging and CI checks.
 */
export function logTranslationCoverage(): void {
  const report = getTranslationCoverage();
  const locales = Object.keys(report) as SupportedLocale[];

  console.group("🌐 Translation Coverage Report");

  for (const locale of locales) {
    const { missing, coverage } = report[locale];
    const status = coverage === 100 ? "✅" : "⚠️";

    console.groupCollapsed(
      `${status} ${locale.toUpperCase()}: ${coverage}% coverage`,
    );

    if (missing.length > 0) {
      console.log("Missing keys:", missing);
    } else {
      console.log("All keys present!");
    }

    console.groupEnd();
  }

  console.groupEnd();
}

/**
 * Logs translation coverage for a specific language, showing the English
 * messages that are not yet translated.
 *
 * @param locale - The language code to check (e.g., 'es', 'fr', 'de')
 */
export function logLanguageCoverage(locale: SupportedLocale): void {
  const sourceMessages = messages[DEFAULT_LOCALE];
  const localeMessages = messages[locale];

  if (!localeMessages) {
    console.error(`❌ Language "${locale}" is not supported.`);

    return;
  }

  const localeKeys = new Set(Object.keys(localeMessages));
  const missingMessages: { key: string; message: string }[] = [];

  for (const [key, message] of Object.entries(sourceMessages)) {
    if (!localeKeys.has(key)) {
      missingMessages.push({ key, message });
    }
  }

  const totalKeys = Object.keys(sourceMessages).length;
  const presentCount = totalKeys - missingMessages.length;
  const coverage =
    totalKeys > 0 ? Math.round((presentCount / totalKeys) * 100) : 100;
  const status = coverage === 100 ? "✅" : "⚠️";

  console.group(`${status} ${locale.toUpperCase()}: ${coverage}% coverage`);

  if (missingMessages.length > 0) {
    console.log(`Missing ${missingMessages.length} translations:`);
    console.table(
      missingMessages.map(({ message }) => ({
        "English Message": message,
      })),
    );
  } else {
    console.log("🎉 All messages are translated!");
  }

  console.groupEnd();
}

export default cn;
