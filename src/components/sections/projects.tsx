import { FormattedMessage, useIntl } from "react-intl";
import { ArrowUpRight, Github } from "lucide-react";

import { ActionLink, Reveal, Section, Tag } from "@/components/shared";
import { type Project, projects } from "@/data/portfolio";
import { fm } from "@/lib/utils";

function ProjectLinks({ project }: { project: Project }) {
  if (!project.github && !project.demo) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-3">
      {project.demo && (
        <ActionLink
          href={project.demo}
          target="_blank"
          rel="noreferrer noopener"
          variant="primary"
          size="sm"
        >
          <FormattedMessage id="k6I8wU" defaultMessage="Live demo" />
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </ActionLink>
      )}

      {project.github && (
        <ActionLink
          href={project.github}
          target="_blank"
          rel="noreferrer noopener"
          variant="outline"
        >
          <Github className="h-4 w-4" aria-hidden="true" />
          <FormattedMessage id="aH4De2" defaultMessage="Source" />
        </ActionLink>
      )}
    </div>
  );
}

function FeaturedProject({ project }: { project: Project }) {
  const intl = useIntl();

  return (
    <article className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-shadow duration-300 hover:shadow-lifted">
      <img
        src={project.image}
        alt={intl.formatMessage(
          {
            id: "DFMWJD",
            defaultMessage: "{title} user interface preview",
          },
          { title: project.title },
        )}
        width={1600}
        height={1008}
        loading="lazy"
        decoding="async"
        className="aspect-[16/10] w-full border-b border-border object-cover object-top"
      />
      <div className="grid gap-10 p-6 sm:p-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent-foreground">
            <FormattedMessage id="o3d71Q" defaultMessage="Featured project" />
          </p>
          <h3 className="text-balance-tight mt-4 text-2xl font-semibold sm:text-3xl">
            {project.title}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            {project.tagline}
          </p>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>

          <h4 className="mt-8 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
            <FormattedMessage id="///zLu" defaultMessage="Challenges" />
          </h4>
          <ul className="mt-4 space-y-2.5">
            {project.challenges.map((challenge) => (
              <li
                key={challenge}
                className="flex gap-3 text-sm leading-relaxed"
              >
                <span
                  aria-hidden="true"
                  className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary"
                />
                <span className="text-muted-foreground">{challenge}</span>
              </li>
            ))}
          </ul>

          <ul className="mt-8 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <li key={tech}>
                <Tag>{tech}</Tag>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <ProjectLinks project={project} />
          </div>
        </div>

        <dl className="space-y-5">
          {project.highlights.map((highlight) => (
            <div
              key={highlight.label}
              className="rounded-xl border border-border bg-surface p-5"
            >
              <dt className="text-sm font-medium">{highlight.label}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {highlight.detail}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </article>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const intl = useIntl();

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-[transform,box-shadow] duration-300 hover:-translate-y-0.25 hover:shadow-lifted">
      <img
        src={project.image}
        alt={intl.formatMessage(
          {
            id: "DFMWJD",
            defaultMessage: "{title} user interface preview",
          },
          { title: project.title },
        )}
        width={1600}
        height={1008}
        loading="lazy"
        decoding="async"
        className="aspect-[16/10] w-full border-b border-border object-cover object-top"
      />
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-medium tracking-tight">{project.title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{project.tagline}</p>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <dl className="mt-6 space-y-3">
          {project.highlights.map((highlight) => (
            <div key={highlight.label}>
              <dt className="text-sm font-medium">{highlight.label}</dt>
              <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {highlight.detail}
              </dd>
            </div>
          ))}
        </dl>

        <ul className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <li key={tech}>
              <Tag>{tech}</Tag>
            </li>
          ))}
        </ul>

        <div className="mt-8 pt-2">
          <ProjectLinks project={project} />
        </div>
      </div>
    </article>
  );
}

/**
 * Projects
 */
function Projects() {
  const intl = useIntl();
  const featured = projects.find((project) => project.featured);
  const rest = projects.filter((project) => !project.featured);

  return (
    <Section
      id="projects"
      muted
      eyebrow={fm("nav_projects", intl)}
      title={intl.formatMessage({
        id: "xLH1ix",
        defaultMessage: "Selected work",
      })}
      description={intl.formatMessage({
        id: "FlcIDX",
        defaultMessage:
          "Projects where the interesting part was the architecture — simulation loops, rendering budgets and APIs meant to last.",
      })}
    >
      <div className="space-y-6">
        {featured ? (
          <Reveal>
            <FeaturedProject project={featured} />
          </Reveal>
        ) : null}

        <div className="grid gap-6 lg:grid-cols-2">
          {rest.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.05} className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default Projects;
