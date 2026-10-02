import type { MediaItem } from "@/components/ProjectMediaCarousel";

export const profile = {
  name: "Arina Ovcharenko",
  linkedin: "https://www.linkedin.com/in/arina-ovcharenko/",
  github: "https://github.com/ariovcharenko",
};

export const navItems = [
  { label: "Strengths", href: "#strengths" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const heroPhrases = [
  "ship cross-platform features in React Native.",
  "write the tests that land with the feature.",
  "build reusable, config-driven UI.",
  "measure whether AI features actually work.",
  "have founded two AI products.",
];

export const strengths = [
  {
    title: "Ships to production",
    body: "**6 features** at Xsolla in **React Native + TypeScript**, on mobile and web.",
  },
  {
    title: "Tests what I ship",
    body: "**Jest + Testing Library** tests in the same commits as the features.",
  },
  {
    title: "Designs for reuse",
    body: "A **config-driven wizard** and a **pluggable map layer**, not copy-pasted screens.",
  },
  {
    title: "Full-stack range",
    body: "**React** and **Spring Boot**, with WebSockets, JWT and SQL.",
  },
  {
    title: "Measures AI quality",
    body: "An **eval pipeline** for LLM search: **97% match accuracy**.",
  },
  {
    title: "Owns things end to end",
    body: "Founded **PitchPal**, co-founded **Growvio**.",
  },
];

export const stackTicker = [
  "TypeScript",
  "React Native",
  "React",
  "Next.js",
  "Spring Boot",
  "Node.js",
  "Python",
  "Java",
  "Go",
  "SQL",
  "Jest",
  "Docker",
  "AWS",
  "GCP",
  "Kubernetes",
];

export interface ExperienceEntry {
  id: string;
  company: string;
  href?: string;
  logo?: string;
  role: string;
  period?: string;
  summary?: string;
  bullets: string[];
  tags?: string[];
  featured?: boolean;
}

export const experience: ExperienceEntry[] = [
  {
    id: "xsolla",
    company: "Xsolla",
    href: "https://xsolla.com",
    logo: "/images/xsolla-logo.jpg",
    role: "Software Engineer · Internship",
    period: "May 2026 – Aug 2026",
    summary: "**Event and networking features** in Xsolla's **React Native** app.",
    bullets: [
      "Shipped **6 features** in a **React Native + TypeScript** monorepo",
      "Built a **config-driven registration wizard** with a **contract test**",
      "Moved screens to the **design system**, added a **pluggable map layer**",
      "Kept **mobile and web in sync**, including **time zone parity**",
    ],
    tags: ["React Native", "React Native Web", "TypeScript", "React Navigation", "Jest", "Testing Library", "Monorepo"],
    featured: true,
  },
  {
    id: "lvl3",
    company: "lvl3.ai",
    role: "Software Engineer · Part-time",
    period: "June 2026",
    summary: "**iOS app development** and **UX/UI web development**.",
    bullets: [
      "Built features for a native **iOS app**",
      "Designed and built **UX/UI** for the web app",
    ],
    tags: ["iOS", "UX/UI", "Web Development"],
  },
  {
    id: "growvio",
    company: "Growvio",
    href: "https://beta.growvio.app/dashboard",
    role: "Founding Software Engineer · Full-time",
    period: "Oct 2025 – Feb 2026",
    summary: "AI tool for **personalized daily tasks**.",
    bullets: [
      "Built the **React dashboards** and task UI",
      "Co-led **branding and onboarding**",
    ],
    tags: ["React", "AI"],
  },
  {
    id: "pitchpal",
    company: "PitchPal",
    role: "Founding Software Engineer · Self-employed",
    period: "Jun 2025 – Aug 2025",
    summary: "AI **interview simulator**.",
    bullets: [
      "**React** frontend, **Spring Boot** backend (REST, WebSockets, JWT)",
      "**Scoring** that turns answers into feedback",
    ],
    tags: ["React", "Spring Boot", "WebSockets", "JWT"],
  },
  {
    id: "hallwae",
    company: "HallwAE Research",
    role: "Researcher & Developer · Illinois Tech",
    period: "Jan 2025",
    summary: "**Quest 3 AR** tool for remote hallway conversations.",
    bullets: [
      "Ran **user research** and built core features",
      "Findings shaped **product decisions**",
    ],
    tags: ["AR", "HCI", "Unix"],
  },
];

export interface JobCopilotStep {
  title: string;
  description: string;
  image: string;
  width: number;
  height: number;
  alt: string;
}

export interface JobCopilotData {
  category: string;
  title: string;
  role: string;
  period: string;
  pitch: string;
  steps: JobCopilotStep[];
  highlights: string[];
  tech: string;
  disclaimer: string;
  links: { label: string; href: string }[];
}

export const jobCopilotProject: JobCopilotData = {
  category: "AI Product",
  title: "Job Copilot",
  role: "Personal project",
  period: "2026",
  pitch:
    "Paste a job link. See in seconds if it's worth applying, get a one-page resume tailored to it, and keep every application tracked.",
  steps: [
    {
      title: "Paste a job link",
      description: "Drop in a link from Greenhouse, Lever or any job board, or paste the description. That's the only input.",
      image: "/images/jobcopilot-step1-paste.jpg",
      width: 1340,
      height: 1000,
      alt: "Job Copilot home screen with a field to paste a job link and an Analyze button",
    },
    {
      title: "See if you should apply",
      description:
        "It scores how well your skills match the job and gives a clear verdict: Apply, or a weak match worth skipping.",
      image: "/images/jobcopilot-step2-score.jpg",
      width: 1200,
      height: 830,
      alt: "Job verdict showing a 100% skills match and an Apply recommendation",
    },
    {
      title: "Check your must-haves",
      description:
        "Set what matters most to you, like location, sponsorship, level and degree, and every job is checked against it. Skills you're missing are struck through.",
      image: "/images/jobcopilot-step3-musthaves.jpg",
      width: 1200,
      height: 896,
      alt: "A weak 38% match with must-haves for level, degree, location, work authorization and clearance all checked, and missing skills struck through",
    },
    {
      title: "Tailor your resume",
      description:
        "One click writes a one-page resume for that job using only facts from your own experience. Edit any bullet, then download it as .docx.",
      image: "/images/jobcopilot-step4-resume.jpg",
      width: 1200,
      height: 1066,
      alt: "A one-page resume tailored to a data platform role, open for review and editing",
    },
    {
      title: "Track every application",
      description:
        "Each job lands in your tracker with its company, role, match, location and dates filled in automatically, plus its resume one click away.",
      image: "/images/jobcopilot-step5-tracker.jpg",
      width: 1400,
      height: 897,
      alt: "Applications tracker with response rate stats and a table of jobs with match, stage, location, applied date and resume preview",
    },
  ],
  highlights: [
    "Private by design: data stays in your browser",
    "Never submits applications for you",
    "Automatic backups",
    "Export to .docx",
  ],
  tech: "Next.js, React, TypeScript, Tailwind, IndexedDB (Dexie), Claude API, Vitest (840+ tests), deployed on Vercel",
  disclaimer: "Screenshots use a fictional candidate, not my real data.",
  links: [
    { label: "Try it live", href: "https://job-copilot-arina-ovcharenkos-projects.vercel.app/" },
    // Code link goes here once the repo is public:
    // { label: "View code", href: "https://github.com/ariovcharenko/job_application" },
  ],
};

export interface FeaturedProjectData {
  id: string;
  category: string;
  title: string;
  role: string;
  period: string;
  description: string;
  bullets: string[];
  stack: string[];
  media: MediaItem[];
  unmutedVideoIndices?: number[];
  links?: { label: string; href: string }[];
}

export const featuredProjects: FeaturedProjectData[] = [
  {
    id: "pitchpal",
    category: "AI Product",
    title: "PitchPal",
    role: "Founding Software Engineer",
    period: "Jun 2025 – Aug 2025",
    description:
      "A **voice + coding interview simulator** that adapts to your answers.",
    bullets: [
      "**React** frontend with an adaptive question flow",
      "**Spring Boot** backend: REST, WebSockets, JWT",
      "**Scoring** that turns answers into feedback",
    ],
    stack: ["React", "Spring Boot", "WebSockets", "JWT", "REST"],
    media: [
      { type: "video", src: "/videos/pitchpal-demo.mp4", label: "Log in & setup" },
      { type: "image", src: "/images/pitchpal2.png", label: "Landing page" },
      { type: "image", src: "/images/pitchpal3.png", label: "Real-time insights" },
      { type: "image", src: "/images/pitchpal4.png", label: "Interview setup" },
      { type: "video", src: "/videos/pitchpal-interactive.mp4", label: "Interactive experience" },
      { type: "image", src: "/images/pitchpal6.png", label: "Analytics view" },
      { type: "image", src: "/images/pitchpal7.png", label: "Performance metrics" },
    ],
    unmutedVideoIndices: [4],
  },
  {
    id: "growvio",
    category: "AI Product",
    title: "Growvio",
    role: "Founding Software Engineer",
    period: "Oct 2025 – Feb 2026",
    description:
      "AI that generates **daily tasks** for founders, with **dashboards** to track progress.",
    bullets: [
      "Led the **React frontend**",
      "Built the **daily AI task** UI",
      "Co-led **branding and onboarding**",
    ],
    stack: ["React", "AI task generation", "Product design"],
    media: [
      { type: "video", src: "/videos/growvio-demo.mp4", label: "Growvio overview" },
      { type: "image", src: "/images/growvio2.png", label: "Dashboard view" },
      { type: "image", src: "/images/growvio3.png", label: "Task management" },
      { type: "image", src: "/images/growvio4.png", label: "AI-generated tasks" },
      { type: "image", src: "/images/growvio5.png", label: "Progress tracking" },
      { type: "image", src: "/images/growvio6.png", label: "Analytics dashboard" },
    ],
    links: [
      { label: "Visit website", href: "https://beta.growvio.app/dashboard" },
      { label: "Instagram", href: "https://www.instagram.com/growvio.app/" },
    ],
  },
  {
    id: "semantic-search",
    category: "AI · Evaluation",
    title: "Semantic Search Analysis",
    role: "Personal project",
    period: "Apr 2025",
    description:
      "**Natural-language product search** with a custom **evaluation framework**.",
    bullets: [
      "**Semantic filtering** of natural-language queries",
      "**Eval pipeline** against manually defined expectations",
      "**97% match accuracy** on 100 user-like queries",
    ],
    stack: ["React", "Node.js / Express", "OpenAI API", "Evals"],
    media: [
      { type: "image", src: "/images/sem-search1.png", label: "Query and results" },
      { type: "image", src: "/images/sem-search2.png", label: "Search parameters and filters" },
      { type: "image", src: "/images/sem-search3.png", label: "Evaluation dashboard" },
    ],
    links: [
      { label: "View on GitHub", href: "https://github.com/ariovcharenko/ai-shopping-assistant" },
      {
        label: "Read: The Power of Evals",
        href: "https://open.substack.com/pub/ariovcharenko/p/the-power-of-evals-teaching-ai-to?r=5fmti7&utm_campaign=post&utm_medium=web",
      },
    ],
  },
];

export interface MoreProject {
  id: string;
  category: string;
  title: string;
  period: string;
  description: string;
  tags: string[];
  image: string;
  imageAlt: string;
  imagePosition?: string;
  link?: { label: string; href: string };
}

export const moreProjects: MoreProject[] = [
  {
    id: "hallwae",
    category: "Research · HCI",
    title: "HallwAE: AR Hallway Conversations",
    period: "Jan 2025",
    description:
      "**User research** and core development for a **Quest 3 AR** hallway-chat tool.",
    tags: ["AR", "User research", "Unix"],
    image: "/images/hall.jpg",
    imageAlt: "Arina testing the HallwAE AR app on a Quest 3 headset",
    imagePosition: "center 30%",
    link: { label: "Read the paper", href: "/attathment/pdfvr.pdf" },
  },
  {
    id: "antei",
    category: "Web · Marketing",
    title: "Antei Formwork Website",
    period: "Sep 2024",
    description:
      "Formwork company site: **Figma** design, **custom HTML/CSS**, **responsive**.",
    tags: ["Figma", "HTML", "CSS"],
    image: "/images/antei1.jpeg",
    imageAlt: "Antei website homepage",
    imagePosition: "center top",
  },
  {
    id: "chem-e-car",
    category: "Web · Club",
    title: "Chem-E-Car Club Website",
    period: "Oct 2024",
    description:
      "Co-built the **club website** with **responsive layouts**.",
    tags: ["Web design", "Responsive UI"],
    image: "/images/chem1.jpeg",
    imageAlt: "Chem-E-Car club website homepage",
    imagePosition: "center top",
  },
];

export const skillGroups = [
  {
    title: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "Java", "Go", "SQL", "HTML / CSS"],
  },
  {
    title: "Backend",
    items: ["Spring Boot", "Node.js / Express", "REST APIs", "WebSockets", "JWT auth"],
  },
  {
    title: "Frontend",
    items: ["React", "React Native", "Next.js", "Design systems", "Tailwind CSS", "Figma"],
  },
  {
    title: "Cloud & Data",
    items: ["AWS", "GCP", "Docker", "Kubernetes", "PostgreSQL", "MySQL"],
  },
  {
    title: "AI & Evaluation",
    items: ["LLM integration", "Prompt engineering", "Semantic search", "NLP", "Evaluation frameworks"],
  },
  {
    title: "Testing & Fundamentals",
    items: [
      "Jest",
      "React Testing Library",
      "Monorepos",
      "Git / GitHub / GitLab",
      "Data structures & algorithms",
      "Operating systems",
    ],
  },
];

export const education = [
  {
    school: "Illinois Institute of Technology",
    place: "Chicago, IL",
    degree: "B.S. Information Technology & Management",
    detail: "Minor in Artificial Intelligence · GPA 3.8 / 4.0",
    period: "Expected May 2027",
  },
  {
    school: "University of Roehampton",
    place: "London, UK",
    degree: "Exchange semester in Computer Science",
    detail: "Study abroad",
    period: "Fall 2025",
  },
];

export const aboutPoints = [
  {
    label: "Ownership.",
    text: "I like owning a feature from the interface to the tests.",
  },
  {
    label: "At Xsolla,",
    text: "React Native monorepo, mobile and web in sync.",
  },
  {
    label: "On my own projects,",
    text: "Spring Boot backends and LLM evals.",
  },
  {
    label: "I care about",
    text: "clear UI and code others can change safely.",
  },
];

export const outsidePoints = [
  { label: "Track & field.", text: "100m and 200m for Illinois Tech." },
  { label: "Before that,", text: "11 years of acrobatic rock-n-roll." },
  { label: "Also:", text: "gym, drawing, philosophy, psychology." },
];
