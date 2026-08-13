import { useEffect, useState } from "react";

/** Tracks which section id is currently in view for nav highlighting. */
const useActiveSection = (ids: string[]) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          setActiveSection(visible.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [ids]);

  return activeSection;
};

export default useActiveSection;
