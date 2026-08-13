import { FormattedMessage, useIntl } from "react-intl";
import { ArrowDown, ArrowRight, Download } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { ActionLink } from "@/components/shared";
import { profile } from "@/data/portfolio";
import { fm } from "@/lib/utils";

const stats = [
  { value: "5+", label: "stat_experience" },
  { value: "1", label: "stat_patent" },
  { value: "3", label: "stat_platforms" },
  { value: "2", label: "stat_mentorship" },
] as const;

/**
 * Hero
 */
function Hero() {
  // Hooks
  const intl = useIntl();
  const reduceMotion = useReducedMotion();

  // Constants
  const transition = { duration: 0.5, ease: [0.22, 0.61, 0.36, 1] as const };

  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pb-24 pt-36 sm:pb-32 sm:pt-44"
    >
      {/* Background drops */}
      <div
        aria-hidden="true"
        className="grid-backdrop absolute inset-0 -z-10 opacity-60"
      />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-[-12rem] -z-10 h-[28rem] w-[42rem] -translate-x-1/2 rounded-full bg-accent/50 blur-3xl"
      />

      <div className="mx-auto w-full max-w-6xl px-6">
        <motion.p
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transition}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 font-mono text-xs text-muted-foreground shadow-soft"
        >
          <span
            className="h-1.5 w-1.5 rounded-full bg-primary"
            aria-hidden="true"
          />
          <FormattedMessage
            id="vPpL46"
            defaultMessage="Available for {role} roles"
            values={{
              role: profile.targetRole,
            }}
          />
        </motion.p>

        <motion.h1
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: 0.06 }}
          className="text-balance-tight mt-8 max-w-4xl text-4xl font-semibold leading-[1.08] sm:text-6xl lg:text-7xl"
        >
          <FormattedMessage
            id="qTueNs"
            defaultMessage="Hi, I'm {name}, "
            values={{ name: profile.name }}
          />

          <span className="mt-2 block text-muted-foreground">
            <FormattedMessage
              id="4TXLq8"
              defaultMessage="{role}."
              values={{ role: profile.role }}
            />
          </span>
        </motion.h1>

        <motion.p
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: 0.12 }}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground"
        >
          {fm(profile.intro, intl)}
        </motion.p>

        <motion.div
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: 0.18 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <ActionLink href="#projects" variant="primary">
            <FormattedMessage id="ankhb6" defaultMessage="View Projects" />
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </ActionLink>
          <ActionLink href={profile.resume} download variant="outline">
            <Download className="h-4 w-4" aria-hidden="true" />
            <FormattedMessage id="wRYFz0" defaultMessage="Download Resume" />
          </ActionLink>
        </motion.div>

        <motion.dl
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: 0.24 }}
          className="mt-20 grid max-w-3xl grid-cols-1 gap-8 border-t border-border pt-8 sm:grid-cols-3"
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{fm(stat.label, intl)}</dt>
              <dd>
                <span className="block text-2xl font-semibold tracking-tight">
                  {stat.value}
                </span>
                <span className="mt-1 block text-sm text-muted-foreground">
                  {fm(stat.label, intl)}
                </span>
              </dd>
            </div>
          ))}
        </motion.dl>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="mt-16 inline-flex items-center gap-2 rounded-lg font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground transition-colors duration-200 hover:text-foreground"
        >
          <ArrowDown className="h-3.5 w-3.5" aria-hidden="true" />
          <FormattedMessage id="SxCvYA" defaultMessage="Scroll" />
        </motion.a>
      </div>
    </section>
  );
}

export default Hero;
