import { FormattedMessage } from "react-intl";
import { ArrowUpRight, GitFork, Star } from "lucide-react";

import { Reveal, Section } from "@/components/shared";
import { openSourceStats, repositories } from "@/data/portfolio";

/**
 * OpenSource
 */
function OpenSource() {
  return (
    <Section
      id="open-source"
      eyebrow="Open source"
      title="Building in public"
      description="Libraries and tools extracted from real product work, maintained with the same standards as the code they came from."
    >
      <Reveal>
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-4">
          {openSourceStats.map((stat) => (
            <div key={stat.label} className="bg-card p-6">
              <dt className="text-sm text-muted-foreground">{stat.label}</dt>
              <dd className="mt-2 text-2xl font-semibold tracking-tight">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>

      <ul className="mt-6 grid gap-4 sm:grid-cols-2">
        {repositories.map((repo, index) => (
          <Reveal key={repo.name} delay={index * 0.05} className="h-full">
            <li className="h-full">
              <a
                href={repo.url}
                target="_blank"
                rel="noreferrer noopener"
                className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-foreground/20 hover:shadow-lifted"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-mono text-sm font-medium">{repo.name}</h3>
                  <ArrowUpRight
                    aria-hidden="true"
                    className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </div>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {repo.description}
                </p>
                <div className="mt-6 flex items-center gap-5 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <span
                      aria-hidden="true"
                      className="h-2 w-2 rounded-full bg-primary"
                    />
                    {repo.language}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Star className="h-3.5 w-3.5" aria-hidden="true" />
                    {repo.stars.toLocaleString()}
                    <span className="sr-only">
                      <FormattedMessage id="O3hKvl" defaultMessage="stars" />
                    </span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <GitFork className="h-3.5 w-3.5" aria-hidden="true" />
                    {repo.forks}
                    <span className="sr-only">
                      <FormattedMessage id="c+1s83" defaultMessage="forks" />
                    </span>
                  </span>
                </div>
              </a>
            </li>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}

export default OpenSource;
