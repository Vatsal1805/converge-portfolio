export interface Stat {
    number: string;
    label: string;
}

export interface ApproachItem {
    label: string;
    heading: string;
    body: string;
}

export interface Problem {
    headline: string;
    body: string[];
}

export interface Outcome {
    stats: Stat[];
    body: string;
}

export interface Project {
    slug: string;
    category: string;
    name: string;
    tagline: string;
    stat: string;
    statLabel: string;
    year: string;
    scope: string;
    heroLabel: string;
    problem: Problem;
    approach: ApproachItem[];
    outcome: Outcome;
    image: string | null;
    featured: boolean;
}

export const projects: Project[] = [
    {
        slug: 'launchpad',
        category: 'MVP DEVELOPMENT',
        name: 'Launchpad',
        tagline: 'From blank page to funded product in 90 days.',
        stat: '+340%',
        statLabel: 'Investor Interest',
        year: '2024',
        scope: 'MVP Development · Product Strategy',
        featured: true,
        heroLabel: 'SEED FUNDED — 3 MONTHS POST LAUNCH',
        problem: {
            headline: 'A promising idea with no product to show investors.',
            body: [
                'The founders of Launchpad had spent six months validating their analytics concept with potential customers. The response was strong. The problem was they had nothing to show — no working product, no demo, no proof that the idea could actually be built.',
                'Every investor conversation ended the same way: come back when you have something real. They needed an MVP that was investor-grade — not a prototype held together with workarounds, but a real product that could handle early users and scale when funding arrived.',
                'They had 90 days before their next investor round.'
            ]
        },
        approach: [
            {
                label: 'DECISION 01',
                heading: 'Architecture before aesthetics.',
                body: 'Before designing a single screen, we mapped the full data model and system architecture. An analytics dashboard is only as good as the data flowing through it — we spent the first two weeks ensuring the foundation was solid enough to scale, not just demo-ready.'
            },
            {
                label: 'DECISION 02',
                heading: 'Three core flows, nothing else.',
                body: 'We identified the three user flows that would matter most to investors: data ingestion, dashboard visualization, and user management. Everything outside those three flows was cut from the MVP scope. Restraint in scope is what made the 90-day timeline possible.'
            },
            {
                label: 'DECISION 03',
                heading: 'Built to hand over, not to depend on.',
                body: 'Every component was documented as it was built. The codebase was structured so the founding team could onboard their own engineers after funding without needing us to explain anything. Ownership was the goal from day one.'
            }
        ],
        outcome: {
            stats: [
                { number: '90', label: 'DAYS TO LAUNCH' },
                { number: '3', label: 'MONTHS TO FUNDING' },
                { number: '340%', label: 'INVESTOR INTEREST' },
                { number: '0', label: 'POST-LAUNCH CRITICAL BUGS' }
            ],
            body: 'Launchpad launched on schedule. The founding team walked into their next investor meeting with a working product, real user data, and a clean codebase. They closed their seed round three months later. The product is still running on the architecture we designed — no rewrites, no major refactors.'
        },
        image: null
    },
    {
        slug: 'meridian',
        category: 'SCALABLE WEB APPLICATION',
        name: 'Meridian',
        tagline: 'From WhatsApp orders to 50K monthly transactions.',
        stat: '+60%',
        statLabel: 'Conversion Rate',
        year: '2024',
        scope: 'Full Stack Development · UI Design',
        featured: true,
        heroLabel: '50K+ MONTHLY TRANSACTIONS',
        problem: {
            headline: 'A growing brand running its entire business through WhatsApp.',
            body: [
                'Meridian was processing every order manually. Customers would message on WhatsApp, the team would manually log orders in a spreadsheet, confirm payment via bank transfer, and update stock counts by hand. It worked when they had 50 orders a month. At 500 orders a month, it was breaking.',
                'They were losing customers at checkout because the process was too slow and too manual. They were losing stock accuracy because the spreadsheet was always behind. And they were losing their team to administrative work that should have been automated.',
                'They needed a real platform — one that could handle their current volume and scale with their growth without being rebuilt every six months.'
            ]
        },
        approach: [
            {
                label: 'DECISION 01',
                heading: 'Map the manual process before replacing it.',
                body: 'Before writing a line of code, we shadowed the team for three days — watching how orders were processed, where mistakes happened, and what the team actually needed versus what they thought they needed. The spreadsheet they were using had logic built into it over two years. We needed to understand that logic before we could automate it.'
            },
            {
                label: 'DECISION 02',
                heading: 'Inventory as the core, not checkout.',
                body: 'Most e-commerce builds start with the storefront. We started with inventory management — because that was where Meridian was losing money. A customer placing an order for an out-of-stock item and waiting three days to find out was the biggest trust problem. Solve inventory first, then build the storefront around it.'
            },
            {
                label: 'DECISION 03',
                heading: 'Migration without downtime.',
                body: 'Meridian could not afford to go dark during the transition. We built the new platform in parallel, migrated their product catalog and customer data in stages, and ran both systems simultaneously for two weeks before cutting over. Zero orders were lost in the migration.'
            }
        ],
        outcome: {
            stats: [
                { number: '50K+', label: 'MONTHLY TRANSACTIONS' },
                { number: '60%', label: 'CONVERSION INCREASE' },
                { number: '0', label: 'ORDERS LOST IN MIGRATION' },
                { number: '14', label: 'DAYS TO FULL CUTOVER' }
            ],
            body: 'Meridian went from manual WhatsApp processing to a fully automated platform in 12 weeks. Conversion increased 60% in the first month — not because of better design, but because customers could now complete a purchase in under two minutes without waiting for a human response. The team went from spending 6 hours a day on order management to 45 minutes.'
        },
        image: null
    },
    {
        slug: 'beacon',
        category: 'UI & PRODUCT DESIGN',
        name: 'Beacon',
        tagline: 'Real-time visibility across every site, every asset.',
        stat: '3x',
        statLabel: 'Faster Incident Response',
        year: '2023',
        scope: 'UI Design · Product Strategy · Frontend',
        featured: true,
        heroLabel: 'ENTERPRISE — MULTI-SITE DEPLOYMENT',
        problem: {
            headline: 'Enterprise teams managing critical equipment with no real-time visibility.',
            body: [
                'Beacon\'s clients were managing industrial equipment across multiple physical sites using a combination of manual inspections, email alerts, and legacy monitoring software built in 2009. When something failed, they found out hours later — sometimes days later — after the damage was already done.',
                'The existing software required specialist training to operate, produced reports nobody read, and had not been updated in years. The team knew they needed something better but had been told by two previous vendors that the complexity of their data made a modern interface impossible.',
                'It was not impossible. It was just hard. And the previous vendors were not willing to do the hard work.'
            ]
        },
        approach: [
            {
                label: 'DECISION 01',
                heading: 'Talk to the people who use it at 2am.',
                body: 'The primary users of this platform were not the managers who approved the purchase. They were technicians checking alerts at 2am during a site issue. We spent a week interviewing technicians specifically — understanding what they needed in a high-stress moment, what information mattered, and what the old software made impossible. The entire information hierarchy of the new design came from those conversations.'
            },
            {
                label: 'DECISION 02',
                heading: 'Alert logic before visual design.',
                body: 'The most critical feature was the alert system. We designed the alert logic — severity levels, escalation paths, acknowledgment flows — before designing a single visual component. Getting this right determined everything else. A beautiful dashboard that sends the wrong alerts is worse than no dashboard at all.'
            },
            {
                label: 'DECISION 03',
                heading: 'Role-based views, not one view for everyone.',
                body: 'A technician on site needs different information than a manager in an office. We designed three distinct role-based views — technician, supervisor, and executive — each showing only what that person needed to act on. Reducing noise was as important as providing information.'
            }
        ],
        outcome: {
            stats: [
                { number: '3x', label: 'FASTER INCIDENT RESPONSE' },
                { number: '94%', label: 'ALERT ACCURACY' },
                { number: '3', label: 'ROLE-BASED VIEWS' },
                { number: '6', label: 'SITES DEPLOYED' }
            ],
            body: 'Beacon deployed across six sites in the first month. Incident response time dropped from an average of 4.2 hours to 1.4 hours. The technicians who had used the old system for years called it the first tool that actually matched how they worked. The executive team got real-time visibility they had never had before — not a weekly report, but a live view of every asset across every site.'
        },
        image: null
    }
]
