export interface Service {
    id: string;
    num: string;
    heading: string;
    description: string;
    outcome: string;
}

export const SERVICES: Service[] = [
    {
        id: "s1",
        num: "01",
        heading: "From Zero to Funded",
        description: "We take your idea from a blank page to a working, investable product. Every MVP we build is architected to scale — not thrown together to ship fast and rewrite later.",
        outcome: "OUTCOME — LAUNCH-READY PRODUCT BUILT TO GROW",
    },
    {
        id: "s2",
        num: "02",
        heading: "Scalable Web Applications",
        description: "We engineer web applications that handle growth without breaking. Clean architecture, maintainable codebase, and performance built in from day one — not bolted on when it's too late.",
        outcome: "OUTCOME — SYSTEMS THAT SCALE WITH YOUR BUSINESS",
    },
    {
        id: "s3",
        num: "03",
        heading: "UI & Product Design",
        description: "We design interfaces that are intuitive for users and maintainable for your team. Every component is built inside a design system — so your product stays consistent as it grows.",
        outcome: "OUTCOME — DESIGN YOUR TEAM CAN OWN AND OPERATE",
    },
    {
        id: "s4",
        num: "04",
        heading: "Product Strategy & Management",
        description: "We help you make the right decisions before writing a single line of code. Roadmap, prioritization, technical planning — so your team builds what matters and skips what doesn't.",
        outcome: "OUTCOME — CLARITY AND DIRECTION FROM DAY ONE",
    },
];

export const PHILOSOPHY = [
    "We don't start with design. We start with the problem. Before any wireframe or line of code, we map your users, your constraints, and your business model into a technical plan that every decision flows from.",
    "We build for the version of your product that exists two years from now — not just the one shipping next month. That means clean architecture, documented decisions, and systems your team can operate without us.",
    "We take on a small number of projects at a time. Not because we have to — because the work demands it. Every client gets a team that is fully present, not spread across twelve other engagements."
];
