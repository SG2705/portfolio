import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  IntlProvider as ReactIntlProvider,
  MissingTranslationError,
} from "react-intl";

import { logLanguageCoverage } from "@/lib/utils";

import {
  DEFAULT_LOCALE,
  getInitialLocale,
  getMessages,
  isRTL,
  LOCALE_CONFIG,
  LOCALE_STORAGE_KEY,
  type SupportedLocale,
} from "./index";

interface LocaleContextValue {
  locale: SupportedLocale;
  setLocale: (locale: SupportedLocale) => void;
  locales: typeof LOCALE_CONFIG;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

/**
 * Hook to access the locale context
 */
export function useLocale() {
  const context = useContext(LocaleContext);

  if (!context) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }

  return context;
}

interface LocaleProviderProps {
  children: ReactNode;
}

/**
 * Combined locale state management and internationalization provider.
 * Manages locale state, persists to localStorage, and provides translations.
 */
function LocaleProvider({ children }: LocaleProviderProps) {
  const [locale, setLocaleState] = useState<SupportedLocale>(getInitialLocale);

  // Update document attributes when locale changes
  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = isRTL(locale) ? "rtl" : "ltr";
  }, [locale]);

  const setLocale = useCallback((next: SupportedLocale) => {
    localStorage.setItem(LOCALE_STORAGE_KEY, next);

    setLocaleState(next);
  }, []);

  const messages = getMessages(locale);

  logLanguageCoverage(locale);

  return (
    <LocaleContext.Provider
      value={{ locale, setLocale, locales: LOCALE_CONFIG }}
    >
      <ReactIntlProvider
        locale={locale}
        defaultLocale={DEFAULT_LOCALE}
        messages={messages}
        onError={(err) => {
          if (err instanceof MissingTranslationError) {
            console.warn("Missing translation:", err.message);

            return;
          }

          console.error(err);
        }}
      >
        {children}
      </ReactIntlProvider>
    </LocaleContext.Provider>
  );
}

export default LocaleProvider;
