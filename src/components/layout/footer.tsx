import { FormattedMessage } from "react-intl";

import { profile } from "@/data/portfolio";

/**
 * Footer
 */
function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid w-full max-w-6xl gap-4 px-6 py-10 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
        <p className="text-sm text-muted-foreground">
          <FormattedMessage
            id="VU4YTX"
            defaultMessage="© {year} {name}. All rights reserved."
            values={{
              year: new Date().getFullYear(),
              name: profile.name,
            }}
          />
        </p>
        <p className="font-mono text-xs text-muted-foreground">
          <FormattedMessage
            id="73E5R+"
            defaultMessage="Hosted on GitHub Pages"
          />
        </p>
      </div>
    </footer>
  );
}

export default Footer;
