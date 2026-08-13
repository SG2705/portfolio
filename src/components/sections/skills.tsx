import { useIntl } from "react-intl";

import { Reveal, Section, Tag } from "@/components/shared";
import { skillGroups } from "@/data/portfolio";
import { fm } from "@/lib/utils";

/**
 * Skills
 */
function Skills() {
  const intl = useIntl();

  return (
    <Section
      id="skills"
      eyebrow={fm("nav_skills", intl)}
      title={fm("skills_title", intl)}
      description={fm("skills_description", intl)}
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, index) => (
          <Reveal key={group.category} delay={index * 0.05}>
            <article className="h-full rounded-2xl border border-border bg-card p-6 shadow-soft transition-[transform,box-shadow] duration-300 hover:-translate-y-0.25 hover:shadow-lifted">
              <h3 className="text-sm font-medium">{group.category}</h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li key={skill}>
                    <Tag>{skill}</Tag>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export default Skills;
