export interface ProcessStep {
    id: string;
    num: string;
    title: string;
    description: string;
    items: string[];
    clientRequirement: string;
    deliverable: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
    {
        id: "discovery",
        num: "01",
        title: "Discovery & Alignment",
        description: "Before we touch design tools or write a line of code, we need to understand your world completely. We run structured discovery sessions with your key stakeholders to map your business model, user needs, technical constraints, and success metrics. This phase exists so that every decision we make downstream has a reason — and that reason traces back to your actual goals, not our assumptions.",
        items: [
            "Business goals and success metrics documented",
            "User personas and core use cases defined",
            "Technical feasibility and constraints mapped",
            "Competitive landscape reviewed",
            "Project scope formally defined",
            "Timeline and milestone plan drafted",
            "Assumptions log — every assumption written down and agreed upon"
        ],
        clientRequirement: "ACCESS TO KEY DECISION-MAKER FOR TWO 60–90 MINUTE SESSIONS",
        deliverable: "PROJECT BRIEF, DEFINED SCOPE, AND SIGNED-OFF MILESTONE PLAN"
    },
    {
        id: "strategy",
        num: "02",
        title: "Strategy & Architecture",
        description: "With a clear scope in hand, we define the technical foundation your product will be built on. This is where we make the decisions that are expensive to undo later — system architecture, tech stack, data models, API structure. We document every decision and the reasoning behind it so your team understands not just what we built, but why we built it that way.",
        items: [
            "System architecture diagram",
            "Tech stack selection with rationale",
            "Database schema and data modeling",
            "API design and integration planning",
            "Information architecture and user flows",
            "Component hierarchy and design system scope",
            "Sprint plan with defined milestones",
            "Risk register — known risks and mitigation strategies"
        ],
        clientRequirement: "ONE STAKEHOLDER AVAILABLE FOR WEEKLY 30-MINUTE CHECK-INS",
        deliverable: "TECHNICAL ARCHITECTURE DOCUMENT AND SPRINT ROADMAP"
    },
    {
        id: "design-development",
        num: "03",
        title: "Design & Build",
        description: "This is where the product takes shape. Design and development run in parallel — our designers work one sprint ahead of engineering so there is never a bottleneck. Every UI component is built inside a design system, every feature is built against the spec defined in Phase 02, and every pull request is reviewed before it merges. You have visibility into progress at every stage — not just at the end.",
        items: [
            "Full design system — typography, color, spacing, components",
            "High-fidelity UI for all core user flows",
            "Responsive design across all target devices",
            "Frontend and backend development — all features in scope",
            "API integrations completed and tested",
            "Unit and integration tests written alongside code",
            "Staging environment for client review",
            "Weekly progress updates with demo access"
        ],
        clientRequirement: "SPRINT DEMO FEEDBACK REQUIRED WITHIN 48 HOURS",
        deliverable: "FULLY BUILT PRODUCT ON STAGING WITH DESIGN SYSTEM DOCUMENTATION"
    },
    {
        id: "testing",
        num: "04",
        title: "Testing & Quality",
        description: "Before anything goes live, it goes through a structured quality process. We test every user flow, every edge case, every device, and every integration. Performance is benchmarked, security is reviewed, and accessibility is checked. This phase is not a formality — it is where we catch what sprints miss and ensure the product we ship is the product we promised.",
        items: [
            "Full QA pass across all user flows",
            "Cross-browser and cross-device testing",
            "Performance audit — load times, Core Web Vitals",
            "Security review — authentication, data handling, exposure points",
            "Accessibility audit — WCAG 2.1 compliance check",
            "Bug triage and resolution — all critical and major issues resolved",
            "User acceptance testing session with client",
            "Final staging sign-off"
        ],
        clientRequirement: "PARTICIPATION IN UAT SESSION AND STAGING SIGN-OFF REQUIRED",
        deliverable: "QA REPORT, RESOLVED BUG LOG, AND STAGING SIGN-OFF"
    },
    {
        id: "launch",
        num: "05",
        title: "Launch & Ownership",
        description: "Launch is not the end — it is the beginning of the product's life. We handle the full deployment, configure your production environment, and monitor the first 48 hours live. After launch, we run a structured handoff: your team receives full documentation, a walkthrough of the codebase, and training on any CMS or admin tools. Our goal is that you are fully in control before we step back — not dependent on us to keep the lights on.",
        items: [
            "Production deployment and environment configuration",
            "Domain, SSL, and infrastructure setup",
            "48-hour post-launch monitoring",
            "Full codebase documentation",
            "Admin and CMS training session",
            "Credentials and access handover — complete and organised",
            "Post-launch support window — 14 days of bug fixes at no charge",
            "Retainer options presented for ongoing partnership"
        ],
        clientRequirement: "HOSTING AND DOMAIN CREDENTIALS REQUIRED 3 DAYS BEFORE LAUNCH",
        deliverable: "LIVE PRODUCT, FULL DOCUMENTATION, AND COMPLETE ACCESS HANDOVER"
    }
];
