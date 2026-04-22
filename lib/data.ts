export type NavLink = {
  label: string;
  href: string;
};

export type HeroMetric = {
  label: string;
  value: string;
};

export type ApproachItem = {
  title: string;
  body: string;
};

export type FeaturedProject = {
  id: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  description: string;
  impact: string;
  tech: string[];
  liveDemoUrl: string;
  caseStudyHref: string;
};

export type CaseStudy = {
  number: string;
  title: string;
  label: string;
  impacts: string[];
  overview: string;
  challenge: string;
  solution: string;
  outcome: string;
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  highlights: string[];
};

export const siteConfig = {
  name: "Jesse Wu",
  role: "Senior Frontend Engineer",
  location: "San Diego, CA",
  email: "thejessewu992@gmail.com",
  linkedInUrl: "https://linkedin.com/in/jessewu14",
  resumePath: "/resume/Jesse-Wu-Resume.pdf",
} as const;

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const heroMetrics: HeroMetric[] = [
  { value: "8+", label: "years experience" },
  { value: "+32%", label: "engagement growth" },
  { value: "-45%", label: "page load time" },
  { value: "+27%", label: "conversion improvement" },
];

export const approachItems: ApproachItem[] = [
  {
    title: "Performance-first",
    body: "I build web experiences that feel immediate, resilient, and conversion-aware — with Core Web Vitals and rendering performance treated as product features, not afterthoughts.",
  },
  {
    title: "Accessible by design",
    body: "I design and ship interfaces with WCAG-conscious patterns, semantic structure, and durable usability across devices, users, and content contexts.",
  },
  {
    title: "Systems that scale",
    body: "From reusable components to CMS governance and analytics instrumentation, I focus on frontend systems that support growth without sacrificing clarity.",
  },
];

export const featuredProjects: FeaturedProject[] = [
  {
    id: "enterprise-wordpress-modernization",
    title: "Enterprise WordPress Modernization",
    imageSrc: "/projects/wordpress-modernization.jpg",
    imageAlt:
      "Abstract editorial visual representing a modernized enterprise WordPress marketing platform",
    description:
      "Re-architected a CMS-driven marketing platform to improve publishing speed, frontend consistency, and scalability across global content surfaces. Focused on reusable components, API-backed content delivery, accessibility, and governance for distributed teams.",
    impact: "42% better performance scores",
    tech: ["WordPress", "JavaScript", "CSS3", "REST API", "GSAP"],
    liveDemoUrl: "#",
    caseStudyHref: "#case-studies",
  },
  {
    id: "core-web-vitals-optimization",
    title: "Core Web Vitals Optimization Program",
    imageSrc: "/projects/core-web-vitals.jpg",
    imageAlt:
      "Abstract performance visualization suggesting faster load and stable rendering",
    description:
      "Led a performance initiative across high-traffic marketing and SaaS pages, improving loading speed, rendering stability, and global delivery reliability. Focused on Core Web Vitals, image optimization, render-blocking reduction, CDN strategy, and performance measurement.",
    impact: "45% faster load times",
    tech: ["JavaScript", "AWS", "CDN", "Performance Optimization"],
    liveDemoUrl: "#",
    caseStudyHref: "#case-studies",
  },
  {
    id: "global-multi-market-platform",
    title: "Global Multi-Market Digital Experience Platform",
    imageSrc: "/projects/global-platform.jpg",
    imageAlt:
      "Abstract global platform motif suggesting multilingual multi-region digital experiences",
    description:
      "Built a modular frontend platform for multilingual, multi-region digital experiences with strong performance, reusable architecture, and third-party integrations. Designed to support scalable content operations across markets while preserving UX consistency.",
    impact: "Multi-market scalable architecture",
    tech: ["TypeScript", "CMS", "API Integration", "AWS", "Analytics"],
    liveDemoUrl: "#",
    caseStudyHref: "#case-studies",
  },
  {
    id: "enterprise-design-system-hub",
    title: "Enterprise Design System & Documentation Hub",
    imageSrc: "/projects/design-system-hub.jpg",
    imageAlt:
      "Polished UI library preview suggesting tokens, components, and documentation for an enterprise design system",
    description:
      "Established a token-driven design system with documented components, interaction patterns, and accessibility guardrails — enabling product teams to ship faster without drifting from brand, motion, or UX standards.",
    impact: "2× faster feature delivery",
    tech: ["TypeScript", "React", "Storybook", "WCAG", "Design Tokens"],
    liveDemoUrl: "#",
    caseStudyHref: "#case-studies",
  },
  {
    id: "martech-analytics-instrumentation",
    title: "MarTech & Analytics Instrumentation Layer",
    imageSrc: "/projects/analytics-instrumentation.jpg",
    imageAlt:
      "Data-forward visualization suggesting analytics pipelines, events, and conversion measurement",
    description:
      "Unified analytics instrumentation across marketing and product surfaces with consent-aware tagging, cleaner event schemas, and dashboards that leadership could trust — reducing blind spots between acquisition, activation, and revenue reporting.",
    impact: "Cleaner measurement + faster decisions",
    tech: ["JavaScript", "Google Analytics", "Tag Governance", "APIs", "Privacy"],
    liveDemoUrl: "#",
    caseStudyHref: "#case-studies",
  },
  {
    id: "wcag-accessibility-remediation",
    title: "WCAG Accessibility Remediation Program",
    imageSrc: "/projects/accessibility-remediation.jpg",
    imageAlt:
      "Inclusive interface motif suggesting keyboard focus, contrast, and assistive technology friendly UI",
    description:
      "Led a remediation program across high-traffic journeys — keyboard flows, focus management, semantics, contrast, and motion preferences — pairing engineering fixes with durable patterns so teams could maintain AA-quality experiences over time.",
    impact: "AA-ready journeys on critical flows",
    tech: ["WCAG 2.2", "ARIA", "Testing", "JavaScript", "Design QA"],
    liveDemoUrl: "#",
    caseStudyHref: "#case-studies",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    number: "01",
    title: "Enterprise WordPress Modernization",
    label: "CMS Architecture / Design Systems / Marketing Platforms",
    impacts: [
      "42% better performance scores",
      "Scalable publishing workflows",
      "Higher interactive engagement",
    ],
    overview:
      "Re-architected a CMS-driven global marketing platform to support faster publishing, stronger frontend consistency, and higher quality digital experiences across product and campaign surfaces.",
    challenge:
      "The platform needed to serve enterprise marketing needs while improving speed, maintainability, and design consistency across a large content ecosystem.",
    solution:
      "I introduced reusable frontend patterns, modernized the WordPress architecture, strengthened API-backed content delivery, and added motion enhancements where they supported product storytelling.",
    outcome:
      "The result was a platform that performed better, felt more polished, and gave teams a stronger foundation for shipping consistently across regions and campaigns.",
  },
  {
    number: "02",
    title: "Core Web Vitals Optimization Program",
    label: "Performance Engineering / AWS / CDN Strategy",
    impacts: [
      "45% faster load times",
      "35% lower global latency",
      "Sub-2 second rendering on key flows",
    ],
    overview:
      "Led a performance initiative across high-traffic SaaS and marketing experiences, focused on improving loading, rendering stability, and global delivery reliability.",
    challenge:
      "High-visibility user journeys were impacted by rendering bottlenecks, front-end inefficiencies, and inconsistent delivery behavior across traffic conditions and devices.",
    solution:
      "I ran targeted audits, improved loading strategies, refined cache behavior, optimized CDN delivery, and aligned front-end implementation with measurable performance goals.",
    outcome:
      "This work improved experience quality on critical conversion pages and created a more reliable performance baseline across distributed digital properties.",
  },
  {
    number: "03",
    title: "AI-Optimized Digital Experience Framework",
    label: "Experimentation / Analytics / Personalization",
    impacts: [
      "21% conversion lift",
      "Better decision visibility",
      "Scalable experimentation foundation",
    ],
    overview:
      "Integrated AI-informed content optimization and experimentation workflows into digital journeys to improve relevance, discovery, and conversion outcomes.",
    challenge:
      "Teams needed a better way to connect content quality, measurement, and iteration speed across digital touchpoints without creating fragmented tooling or reporting.",
    solution:
      "I supported analytics instrumentation, optimization workflows, and scalable experimentation patterns that made performance and growth signals easier to act on.",
    outcome:
      "The experience became more measurable, more adaptable, and more effective at translating data into user-facing improvements.",
  },
];

export const capabilities: string[] = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "WordPress",
  "REST APIs",
  "Core Web Vitals",
  "Technical SEO",
  "WCAG Accessibility",
  "Responsive Design",
  "GSAP",
  "Google Analytics",
  "Eloqua",
  "Wistia",
  "Bynder",
  "AWS",
  "CDN / Caching",
  "CI/CD",
];

export const experiences: ExperienceItem[] = [
  {
    company: "Figure",
    role: "Senior Software Engineer",
    period: "Nov 2024 – Dec 2025",
    highlights: [
      "32% engagement increase",
      "45% faster page loads",
      "Enterprise-grade frontend systems",
    ],
  },
  {
    company: "Intuit",
    role: "Software Engineer",
    period: "Jun 2019 – Sep 2024",
    highlights: [
      "Millions of users supported",
      "27% conversion improvement",
      "Sub-2 second critical rendering",
    ],
  },
  {
    company: "CliniComp International",
    role: "Software Engineer",
    period: "Jan 2016 – Jun 2019",
    highlights: [
      "40% rendering efficiency gain",
      "API-driven dashboards",
      "Stronger accessibility standards",
    ],
  },
];

export const ctaContent = {
  eyebrow: "Open to the right next build",
  headline:
    "Senior frontend leadership for teams that care about craft, speed, and measurable outcomes.",
  body: "I’m interested in roles where frontend engineering directly shapes product perception, growth performance, and the quality of the user experience at scale.",
} as const;
