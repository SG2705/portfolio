import type { ReactNode } from "react";

import { Reveal } from "@/components/shared";
import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
  muted?: boolean;
}

/**
 * Section
 */
function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
  muted = false,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={cn(
        "scroll-mt-24 py-24 sm:py-32",
        muted && "bg-surface",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
            {eyebrow}
          </p>
          <h2
            id={`${id}-heading`}
            className="text-balance-tight mt-4 text-3xl font-semibold sm:text-4xl"
          >
            {title}
          </h2>
          {description ? (
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {description}
            </p>
          ) : null}
        </Reveal>
        <div className="mt-14">{children}</div>
      </div>
    </section>
  );
}

export default Section;
