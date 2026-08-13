import { useIntl } from "react-intl";
import { Check, Globe } from "lucide-react";

import {
  ActionButton,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/shared";
import { useLocale } from "@/hooks";
import { cn } from "@/lib/utils";

/**
 * LanguageMenu
 */
export function LanguageMenu() {
  const intl = useIntl();
  const { locale, setLocale, locales } = useLocale();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <ActionButton
          variant="ghost"
          size="sm"
          aria-label={intl.formatMessage({
            id: "eVlu1R",
            defaultMessage: "Select language",
          })}
          className="gap-1.5 px-2.5"
        >
          <Globe className="h-4 w-4" aria-hidden="true" />
          <span className="font-mono text-xs uppercase">{locale}</span>
        </ActionButton>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="max-h-80 w-48 overflow-y-auto"
      >
        {locales.map((item) => (
          <DropdownMenuItem
            key={item.code}
            onSelect={() => setLocale(item.code)}
            className="flex items-center justify-between gap-2"
          >
            <span className="flex items-center gap-2">
              <span className="font-mono text-xs uppercase text-muted-foreground">
                {item.code}
              </span>
              <span>{item.native}</span>
            </span>
            <Check
              className={cn(
                "h-4 w-4",
                locale === item.code ? "opacity-100" : "opacity-0",
              )}
              aria-hidden="true"
            />
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default LanguageMenu;
