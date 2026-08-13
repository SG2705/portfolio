import { useIntl } from "react-intl";

import { Reveal, Section } from "@/components/shared";
import { plannedPosts } from "@/data/portfolio";

/**
 * Blog
 */
function Blog() {
  const intl = useIntl();

  return (
    <Section
      id="blog"
      muted
      eyebrow={intl.formatMessage({
        id: "tv5FG3",
        defaultMessage: "Blog",
      })}
      title={intl.formatMessage({
        id: "pQkXW3",
        defaultMessage: "Notes in progress",
      })}
      description={intl.formatMessage({
        id: "NkrXEm",
        defaultMessage:
          "Long-form articles on architecture, performance and design systems are on the way. Here's what's queued up.",
      })}
    >
      <ul className="grid gap-4 lg:grid-cols-3">
        {plannedPosts.map((post, index) => (
          <Reveal key={post.title} delay={index * 0.05} className="h-full">
            <li className="flex h-full flex-col rounded-2xl border border-dashed border-border bg-card p-6 transition-[transform,border-color] duration-300 hover:-translate-y-0.25 hover:border-foreground/20">
              <div className="flex items-center justify-between gap-3">
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {post.topic}
                </span>
                <span className="rounded-lg bg-accent px-2 py-1 text-[11px] font-medium text-accent-foreground">
                  {post.status}
                </span>
              </div>
              <h3 className="mt-5 text-base font-medium leading-snug">
                {post.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {post.summary}
              </p>
            </li>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}

export default Blog;
