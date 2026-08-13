import { useCallback, useEffect, useState } from "react";

export type Theme = "light" | "dark";

const STORAGE_KEY = "portfolio-theme";

const applyTheme = (theme: Theme) => {
  const root = document.documentElement;

  root.classList.toggle("dark", theme === "dark");
  root.style.colorScheme = theme;
};

/** Reads, applies and persists the light/dark preference. */
const useTheme = () => {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem(
      STORAGE_KEY,
    ) as Theme | null;
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const initial: Theme = storedTheme ?? (prefersDark ? "dark" : "light");

    setTheme(initial);
    applyTheme(initial);
    setMounted(true);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((current) => {
      const next: Theme = current === "dark" ? "light" : "dark";

      applyTheme(next);

      window.localStorage.setItem(STORAGE_KEY, next);

      return next;
    });
  }, []);

  return { theme, toggleTheme, mounted };
};

export default useTheme;
