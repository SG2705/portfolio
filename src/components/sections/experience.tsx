import { FormattedMessage, useIntl } from "react-intl";

import { Reveal, Section, Tag } from "@/components/shared";
import { experiences } from "@/data/portfolio";
import { fm } from "@/lib/utils";

/**
 * ExperienceSection
 */
function ExperienceSection() {
  const intl = useIntl();

  return (
    <Section
      id="experience"
      eyebrow={fm("nav_experience", intl)}
      title={fm("experience_title", intl)}
      description={fm("experience_description", intl)}
    >
      <ol className="space-y-6">
        {experiences.map((role, index) => (
          <Reveal key={`${role.company}-${role.role}`} delay={index * 0.05}>
            <li className="rounded-2xl border border-border bg-card p-6 shadow-soft transition-[transform,box-shadow] duration-300 hover:-translate-y-0.25 hover:shadow-lifted sm:p-8">
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
                <div className="min-w-0">
                  <h3 className="text-lg font-medium tracking-tight">
                    {role.role}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {role.company}
                  </p>
                </div>
                <p className="shrink-0 font-mono text-xs text-muted-foreground">
                  {/* eslint-disable-next-line formatjs/no-literal-string-in-jsx */}
                  {role.durationFrom}&nbsp;—&nbsp;
                  {role.durationTo || (
                    <FormattedMessage id="Oar0W0" defaultMessage="Present" />
                  )}
                </p>
              </div>

              <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                {fm(role.summary, intl)}
              </p>

              <div className="mt-8 grid gap-8 md:grid-cols-2">
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {fm("experience_responsibilities", intl)}
                  </h4>
                  <ul className="mt-4 space-y-2.5">
                    {role.responsibilities.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-sm leading-relaxed"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary"
                        />
                        <span className="text-muted-foreground">
                          {fm(item, intl)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {fm("experience_achievements", intl)}
                  </h4>
                  <ul className="mt-4 space-y-2.5">
                    {role.achievements.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-sm leading-relaxed"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary"
                        />
                        <span className="text-muted-foreground">
                          {fm(item, intl)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <p className="mt-8 rounded-xl border border-border bg-surface p-4 text-sm leading-relaxed">
                <span className="font-medium">
                  {fm("experience_impact", intl)}
                  &nbsp;
                </span>
                <span className="text-muted-foreground">
                  {fm(role.impact, intl)}
                </span>
              </p>

              <ul className="mt-6 flex flex-wrap gap-2">
                {role.stack.map((tech) => (
                  <li key={tech}>
                    <Tag>{tech}</Tag>
                  </li>
                ))}
              </ul>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}

export default ExperienceSection;
