import { FormattedMessage, useIntl } from "react-intl";
import { Download, Github, Linkedin, Mail } from "lucide-react";

import { ActionLink, Reveal, Section } from "@/components/shared";
import { profile } from "@/data/portfolio";
import { type MessageTypes } from "@/lib/constants";
import { fm } from "@/lib/utils";

const links = [
  {
    label: "GitHub",
    detail: "contact_github_details",
    href: profile.github,
    icon: Github,
    external: true,
  },
  {
    label: "LinkedIn",
    detail: "contact_linkedIn_details",
    href: profile.linkedin,
    icon: Linkedin,
    external: true,
  },
  {
    label: "Email",
    detail: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
    external: false,
  },
] as const;

/**
 * Contact
 */
function Contact() {
  const intl = useIntl();

  return (
    <Section
      id="contact"
      eyebrow={fm("nav_contact", intl)}
      title={intl.formatMessage({
        id: "yTssP8",
        defaultMessage: "Let's build something considered",
      })}
      description={intl.formatMessage(
        {
          id: "Xt8VA6",
          defaultMessage:
            "Open to senior frontend and frontend platform roles, plus focused consulting on architecture and performance. Based in {location}.",
        },
        {
          location: profile.location,
        },
      )}
    >
      <div className="grid gap-4 sm:grid-cols-3">
        {links.map((link, index) => (
          <Reveal key={link.label} delay={index * 0.05} className="h-full">
            <a
              href={link.href}
              {...(link.external
                ? { target: "_blank", rel: "noreferrer noopener" }
                : {})}
              className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-0.25 hover:border-foreground/20 hover:shadow-lifted"
            >
              <link.icon className="h-5 w-5 text-primary" aria-hidden="true" />
              <span className="mt-5 text-sm font-medium">{link.label}</span>
              <span className="mt-1 break-words text-sm text-muted-foreground">
                {fm(link.detail as MessageTypes, intl)}
              </span>
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-6 grid grid-cols-1 items-center gap-6 rounded-2xl border border-border bg-surface p-8 sm:grid-cols-[minmax(0,1fr)_auto]">
          <div className="min-w-0">
            <h3 className="text-lg font-medium tracking-tight">
              <FormattedMessage
                id="P0rX4r"
                defaultMessage="Prefer the short version?"
              />
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              <FormattedMessage
                id="VWKre9"
                defaultMessage="One page: experience, architecture work and the stack I reach for."
              />
            </p>
          </div>
          <ActionLink href={profile.resume} download variant="primary">
            <Download className="h-4 w-4" aria-hidden="true" />
            <FormattedMessage id="wRYFz0" defaultMessage="Download Resume" />
          </ActionLink>
        </div>
      </Reveal>
    </Section>
  );
}

export default Contact;
