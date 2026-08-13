import { useEffect, useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { Menu, Moon, Sun, X } from "lucide-react";

import SagarImage from "@/assets/image.jpeg";
import { ActionButton, ActionLink } from "@/components/shared";
import { navItems, profile } from "@/data/portfolio";
import { useActiveSection, useScrolled, useTheme } from "@/hooks";
import { cn, fm } from "@/lib/utils";

import { LanguageMenu } from "./language-menu";

const sectionIds = navItems.map((item) => item.href.slice(1));

/**
 * Navbar
 */
function Navbar() {
  // Hooks
  const intl = useIntl();
  const scrolled = useScrolled(16);
  const activeSection = useActiveSection(sectionIds);
  const { theme, toggleTheme, mounted } = useTheme();

  // States
  const [menuOpen, setMenuOpen] = useState(false);

  // Effects
  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);

    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300",
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-4">
        {/* Name and Sagar's image */}
        <a
          href="#top"
          className="flex min-w-0 items-center gap-2.5 rounded-lg text-sm font-semibold tracking-tight"
        >
          <img
            src={SagarImage}
            alt={intl.formatMessage({ id: "Gb5Rra", defaultMessage: "SG" })}
            width={32}
            height={32}
            loading="lazy"
            decoding="async"
            className="aspect-[1] rounded-full object-cover object-top"
          />
          <span className="truncate">{profile.name}</span>
        </a>

        {/* Header options > MOBILE_BREAKPOINT */}
        <div className="flex items-center gap-1">
          <nav
            aria-label={intl.formatMessage({
              id: "t2Wr8I",
              defaultMessage: "Primary",
            })}
            className="hidden items-center gap-1 md:flex"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                aria-current={
                  activeSection === item.href.slice(1) ? "true" : undefined
                }
                className={cn(
                  "rounded-lg px-3 py-2 text-sm transition-colors duration-200",
                  activeSection === item.href.slice(1)
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {fm(item.label, intl)}
              </a>
            ))}
          </nav>

          {/* Language Menu */}
          <LanguageMenu />

          {/* Theme toggle */}
          <ActionButton
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label={
              theme === "dark"
                ? intl.formatMessage({
                    id: "8I/DPV",
                    defaultMessage: "Switch to light mode",
                  })
                : intl.formatMessage({
                    id: "Y6tZmW",
                    defaultMessage: "Switch to dark mode",
                  })
            }
          >
            {mounted && theme === "dark" ? (
              <Sun className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Moon className="h-4 w-4" aria-hidden="true" />
            )}
          </ActionButton>

          {/* Resume download */}
          <ActionLink
            href={profile.resume}
            download
            variant="outline"
            size="sm"
            className="ml-1 hidden sm:inline-flex"
          >
            <FormattedMessage id="3y9DGg" defaultMessage="Resume" />
          </ActionLink>

          {/* Header options button < MOBILE_BREAKPOINT */}
          <ActionButton
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label={
              menuOpen
                ? intl.formatMessage({
                    id: "dg8ZEb",
                    defaultMessage: "Close menu",
                  })
                : intl.formatMessage({
                    id: "bdcMGy",
                    defaultMessage: "Open menu",
                  })
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? (
              <X className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Menu className="h-4 w-4" aria-hidden="true" />
            )}
          </ActionButton>
        </div>
      </div>

      {/* Header options < MOBILE_BREAKPOINT */}
      {menuOpen ? (
        <nav
          id="mobile-nav"
          aria-label={intl.formatMessage({
            id: "GWtmtu",
            defaultMessage: "Mobile",
          })}
          className="border-t border-border bg-background/95 px-6 py-4 backdrop-blur-md md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.href.slice(1)}>
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
                >
                  {fm(item.label, intl)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}

export default Navbar;
