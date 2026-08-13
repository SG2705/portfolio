import { FormattedMessage, useIntl } from "react-intl";

import { Reveal, Section } from "@/components/shared";
import { journey, values } from "@/data/portfolio";
import { fm } from "@/lib/utils";

/**
 * About
 */
function About() {
  const intl = useIntl();

  return (
    <Section
      id="about"
      eyebrow={fm("nav_about", intl)}
      title={intl.formatMessage({
        id: "v7hWDQ",
        defaultMessage: "Engineering that ages well",
      })}
      description={intl.formatMessage({
        id: "5CE0CQ",
        defaultMessage:
          "I care about the layer most users never see: the boundaries, contracts and defaults that decide whether a product stays fast and pleasant to work on, years from now.",
      })}
    >
      <div className="grid gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        {/* Timeline */}
        <div>
          <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
            <FormattedMessage id="P62li6" defaultMessage="Career journey" />
          </h3>
          <ol className="mt-8 space-y-10 border-l border-border pl-8">
            {journey.reverse().map((entry, index) => (
              <Reveal key={entry.year} delay={index * 0.05}>
                <li className="relative">
                  <span
                    aria-hidden="true"
                    className="absolute -left-[2.3rem] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-background bg-primary"
                  />
                  <p className="font-mono text-xs text-muted-foreground">
                    {entry.year}
                  </p>
                  <h4 className="mt-2 text-base font-medium">
                    {fm(entry.title, intl)}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {fm(entry.description, intl)}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>

        {/* Philosophy */}
        <div>
          <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
            <FormattedMessage
              id="qG4WFm"
              defaultMessage="Engineering philosophy"
            />
          </h3>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 0.05}>
                <article className="h-full rounded-2xl border border-border bg-card p-6 shadow-soft transition-[transform,box-shadow] duration-300 hover:-translate-y-0.25 hover:shadow-lifted">
                  <h4 className="text-sm font-medium">
                    {fm(value.title, intl)}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {fm(value.description, intl)}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

export default About;
