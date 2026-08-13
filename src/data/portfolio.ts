import bitlabShot from "@/assets/project-bitlab.png";
import designSystemShot from "@/assets/project-design-system.jpg";
import { type MessageTypes } from "@/lib/constants";

export const profile = {
  name: "Sagar Gupta",
  role: "Senior Frontend Engineer",
  targetRole: "Senior Frontend Engineer",
  intro: "profile_intro",
  location: "Bengaluru, India",
  email: "gupta.sagar27051997@gmail.com",
  github: "https://github.com/SG2705",
  linkedin: "https://www.linkedin.com/in/sagar-gupta27/",
  resume: `${import.meta.env.BASE_URL}SAGAR_GUPTA_RESUME.pdf`,
} as const;

export interface NavItem {
  label: MessageTypes;
  href: string;
}

export const navItems: NavItem[] = [
  { label: "nav_about", href: "#about" },
  { label: "nav_experience", href: "#experience" },
  { label: "nav_projects", href: "#projects" },
  { label: "nav_skills", href: "#skills" },
  { label: "nav_contact", href: "#contact" },
];

export interface TimelineEntry {
  year: string;
  title: MessageTypes;
  description: MessageTypes;
}

export const journey: TimelineEntry[] = [
  {
    year: "2021",
    title: "journey_2021_title",
    description: "journey_2021_description",
  },
  {
    year: "2022",
    title: "journey_2022_title",
    description: "journey_2022_description",
  },
  {
    year: "2024",
    title: "journey_2024_title",
    description: "journey_2024_description",
  },
  {
    year: "2026",
    title: "journey_2026_title",
    description: "journey_2026_description",
  },
];

export const values: { title: MessageTypes; description: MessageTypes }[] = [
  {
    title: "values_architecture_title",
    description: "values_architecture_description",
  },
  {
    title: "values_performance_title",
    description: "values_performance_description",
  },
  {
    title: "values_accessibility_title",
    description: "values_accessibility_description",
  },
  {
    title: "values_clarity_title",
    description: "values_clarity_description",
  },
];

export interface SkillGroup {
  category: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    skills: [
      "React",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind",
      "Next.js",
    ],
  },
  {
    category: "Architecture",
    skills: [
      "State Management",
      "Performance",
      "Accessibility",
      "Design Systems",
      "Component Libraries",
    ],
  },
  { category: "Backend", skills: ["Node.js", "Express", "REST APIs"] },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Vite", "Webpack"],
  },
  {
    category: "Soft Skills",
    skills: ["Leadership", "Mentoring", "Communication", "Problem Solving"],
  },
];

export interface Experience {
  company: string;
  role: string;
  durationFrom: string;
  durationTo?: string;
  summary: MessageTypes;
  responsibilities: MessageTypes[];
  achievements: MessageTypes[];
  impact: MessageTypes;
  stack: string[];
}

export const experiences: Experience[] = [
  {
    company: "Saviynt",
    role: "Senior Software Engineer",
    durationFrom: "Apr 2026",
    durationTo: "Present",
    summary: "exp_saviynt_senior_summary",
    responsibilities: [
      "exp_saviynt_senior_resp_1",
      "exp_saviynt_senior_resp_2",
      "exp_saviynt_senior_resp_3",
    ],
    achievements: ["exp_saviynt_senior_ach_1", "exp_saviynt_senior_ach_2"],
    impact: "exp_saviynt_senior_impact",
    stack: [
      "React",
      "TypeScript",
      "Module Federation",
      "Webpack",
      "Parcel",
      "GitLab CI/CD",
      "Jest",
    ],
  },
  {
    company: "Saviynt",
    role: "Software Engineer III",
    durationFrom: "Apr 2025",
    durationTo: "Mar 2026",
    summary: "exp_saviynt_se3_summary",
    responsibilities: [
      "exp_saviynt_se3_resp_1",
      "exp_saviynt_se3_resp_2",
      "exp_saviynt_se3_resp_3",
    ],
    achievements: ["exp_saviynt_se3_ach_1", "exp_saviynt_se3_ach_2"],
    impact: "exp_saviynt_se3_impact",
    stack: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "RTK Query",
      "Jest",
      "React Testing Library",
    ],
  },
  {
    company: "Saviynt",
    role: "Software Engineer II",
    durationFrom: "Mar 2024",
    durationTo: "Mar 2025",
    summary: "exp_saviynt_se2_summary",
    responsibilities: [
      "exp_saviynt_se2_resp_1",
      "exp_saviynt_se2_resp_2",
      "exp_saviynt_se2_resp_3",
    ],
    achievements: ["exp_saviynt_se2_ach_1", "exp_saviynt_se2_ach_2"],
    impact: "exp_saviynt_se2_impact",
    stack: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "React Query",
      "Design Systems",
    ],
  },
  {
    company: "AarogyaAI",
    role: "Full Stack Engineer",
    durationFrom: "Jul 2022",
    durationTo: "Feb 2024",
    summary: "exp_aarogyaai_summary",
    responsibilities: [
      "exp_aarogyaai_resp_1",
      "exp_aarogyaai_resp_2",
      "exp_aarogyaai_resp_3",
    ],
    achievements: [
      "exp_aarogyaai_ach_1",
      "exp_aarogyaai_ach_2",
      "exp_aarogyaai_ach_3",
    ],
    impact: "exp_aarogyaai_impact",
    stack: [
      "React",
      "Node.js",
      "Python",
      "Express.js",
      "MySQL",
      "AWS",
      "REST APIs",
    ],
  },
  {
    company: "Tata Consultancy Services",
    role: "Associate Systems Engineer",
    durationFrom: "Jul 2021",
    durationTo: "Jun 2022",
    summary: "exp_tcs_summary",
    responsibilities: ["exp_tcs_resp_1", "exp_tcs_resp_2", "exp_tcs_resp_3"],
    achievements: ["exp_tcs_ach_1", "exp_tcs_ach_2"],
    impact: "exp_tcs_impact",
    stack: ["Python", "SQL", "REST APIs", "Git", "Enterprise Systems"],
  },
];

export interface Project {
  title: string;
  tagline: string;
  description: string;
  image: string;
  featured?: boolean;
  highlights: { label: string; detail: string }[];
  challenges: string[];
  tech: string[];
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    title: "AAG - Application Access Governance",
    tagline: "Enterprise access governance platform at scale",
    description:
      "Primary contributor to Saviynt's Application Access Governance product — a large-scale enterprise SaaS platform for governing, certifying, and remediating application access at scale. Built more than half the frontend from the ground up, including fully custom data visualization components (semicircular gauge chart and relational graph) built without any charting library, designed to be highly parameterized so every visual property is controllable via props.",
    image:
      "https://saviynt.com/hs-fs/hubfs/AI-powered%20Risk%20Analytics%20I.png?width=4635&height=2586&name=AI-powered%20Risk%20Analytics%20I.png",
    featured: true,
    highlights: [
      {
        label: "Custom data visualizations",
        detail:
          "Built a fully custom semicircular gauge chart and relational graph from scratch — no charting library, no wrappers. Both are highly parameterized components where every visual property (thresholds, colors, segments, arc angles, node layout, edge weights) is controllable via props, making them reusable across any context in the product.",
      },
      {
        label: "Risk analytics dashboard",
        detail:
          "Built the core risk analytics dashboard from scratch, including the custom chart components that visualize SoD violations and access risk scores across the user base.",
      },
      {
        label: "Access certification workflows",
        detail:
          "Built multi-step review and decision flows for certifying user entitlements, with bulk approve/revoke actions across thousands of items without UI freezes.",
      },
      {
        label: "Micro frontend architecture",
        detail:
          "AAG is one of several independently deployed MFEs in a federated shell. Managed module federation config, shared dependency contracts, and cross-MFE routing.",
      },
      {
        label: "Performance at scale",
        detail:
          "Optimized virtualized list rendering and API response caching so reviewers can process large entitlement sets without perceptible lag.",
      },
    ],
    challenges: [
      "Building a fully custom semicircular gauge and relational graph without any charting library, keeping them flexible enough to serve multiple dashboards through parameterization alone.",
      "Rendering and interacting with entitlement tables that span hundreds of thousands of rows without degrading the review experience.",
      "Coordinating state across independently deployed MFEs sharing a common shell, session, and feature-flag surface.",
      "Supporting customer-configurable workflows where field visibility, required actions, and business rules vary per tenant.",
    ],
    tech: [
      "React",
      "TypeScript",
      "SVG",
      "Micro Frontends",
      "Module Federation",
      "React Query",
    ],

    demo: "https://saviynt.com/products/application-access-governance-solutions",
  },
  {
    title: "BitLab - Digital Logic Simulator",
    tagline: "Event-driven circuit simulation in the browser",
    description:
      "A full digital logic workbench: place gates, wire them together and watch signals propagate in real time. The simulation core is an event-driven scheduler decoupled from React entirely, so the editor stays responsive while thousands of nodes settle.",
    image: bitlabShot,
    featured: false,
    highlights: [
      {
        label: "Simulation engine",
        detail:
          "A scheduler with cycle detection and deterministic replay from any tick.",
      },
      {
        label: "Circuit editor",
        detail:
          "Canvas-based editor with orthogonal wire routing, snapping, multi-select, undo/redo and copy-paste of sub-circuits.",
      },
      {
        label: "Signal propagation",
        detail:
          "Signals are dirty-marked and batched per tick, so only the affected sub-graph is re-evaluated instead of the whole netlist.",
      },
      {
        label: "Performance",
        detail:
          "Typed-array netlist storage and a render loop driven by requestAnimationFrame keep 10k+ gate circuits above 60fps.",
      },
      {
        label: "Architecture",
        detail:
          "Engine, netlist model and UI live in separate layers with a thin subscription bridge into React — the core runs headless in tests.",
      },
    ],
    challenges: [
      "Keeping a 60 fps canvas while an event loop mutates thousands of nodes per frame.",
      "Making feedback loops and oscillating circuits stable instead of infinite.",
      "Designing an editor where wiring feels physical without a heavyweight graph library.",
    ],
    tech: ["TypeScript", "React", "Canvas", "Web Workers"],
    github: "https://github.com/SG2705/BitLab",
    demo: "https://sg2705.github.io/BitLab",
  },
  {
    title: "Atlas Design System for PwpInfra",
    tagline: "Accessible component library and token pipeline",
    description:
      "A versioned React component library with a documented token pipeline, automated accessibility checks and visual regression coverage on every pull request.",
    image: designSystemShot,
    highlights: [
      {
        label: "Token pipeline",
        detail:
          "One source of truth compiled to CSS variables, TypeScript types and Figma tokens.",
      },
    ],
    challenges: [
      "Versioning breaking visual changes without blocking product teams.",
      "Theming across brands without forking components.",
    ],
    tech: ["React", "TypeScript", "Tailwind", "Radix", "Storybook"],
  },
];

export interface Repository {
  name: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  url: string;
}

export const repositories: Repository[] = [
  {
    name: "BitLab",
    description:
      "Event-driven digital circuit simulator and editor built with TypeScript.",
    language: "TypeScript",
    stars: 0,
    forks: 0,
    url: "https://github.com/SG2705/BitLab",
  },
];

export const openSourceStats = [
  { label: "Public repositories", value: "0" },
  { label: "Total stars", value: "0" },
  { label: "Contributions this year", value: "0" },
  { label: "Projects maintained", value: "0" },
];

export interface BlogPost {
  title: string;
  summary: string;
  topic: string;
  status: string;
}

export const plannedPosts: BlogPost[] = [
  {
    title: "Designing an event-driven simulation loop",
    summary:
      "How a priority queue, propagation delays and dirty marking replaced a naive per-frame full re-evaluation.",
    topic: "Architecture",
    status: "In progress",
  },
];
