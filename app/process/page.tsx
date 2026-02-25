"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import StickyTabs from "@/components/ui/sticky-section-tabs";
import { Breadcrumb } from "@/components/Breadcrumb";

export default function Process() {
    const heroRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (heroRef.current) {
            gsap.fromTo(
                heroRef.current,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
            );
        }
    }, []);

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://convergedigital.com"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Process",
                "item": "https://convergedigital.com/process"
            }
        ]
    }

    return (
        <div className="relative w-full flex flex-col  bg-[#0B0F14]">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            {/* Fixed gradient mask — hides content as it scrolls behind the navbar */}
            <div
                className="fixed top-0 left-0 right-0 z-40 pointer-events-none"
                style={{
                    height: "6.5rem",
                    background: "linear-gradient(to bottom, #0B0F14 0%, #0B0F14 70%, transparent 100%)",
                }}
            />

            {/* BREADCRUMBS */}
            <div className="pt-32 max-w-[1200px] mx-auto px-[clamp(24px,5vw,80px)] relative z-50">
                <Breadcrumb items={[
                    { label: 'Home', href: '/' },
                    { label: 'Process' }
                ]} />
            </div>

            {/* Hero Section */}
            <section className="relative w-full pt-10 px-8 sm:px-10 md:px-12 lg:px-16 xl:px-20 pb-2 sm:pb-4 md:pb-6 bg-[#0B0F14]">
                <div
                    ref={heroRef}
                    className="max-w-[1000px] mx-auto flex flex-col "
                >
                    <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-[-0.03em] leading-[1.1] text-white">
                        Our Process
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg text-white/60 leading-[1.7] max-w-[700px]">
                        We follow a structured, scalable approach — designed to reduce
                        uncertainty, eliminate friction, and build systems that evolve with
                        your vision.
                    </p>
                </div>
            </section>

            {/* Sticky Tabs Section */}
            <StickyTabs
                mainNavHeight="5.5rem"
                rootClassName="bg-[#0B0F14] text-white"
                navSpacerClassName="border-b border-white/[0.06] bg-[#0B0F14]"
                sectionClassName="bg-[#0d1117]"
                stickyHeaderContainerClassName=""
                headerContentWrapperClassName="border-b border-t border-white/[0.06] bg-[#0B0F14]"
                headerContentLayoutClassName="mx-auto max-w-[1000px] px-8 sm:px-10 md:px-12 lg:px-16 xl:px-20 py-5 sm:py-6"
                titleClassName="my-0 text-xl sm:text-2xl md:text-3xl font-semibold leading-none tracking-[-0.02em] text-white flex items-center gap-4 sm:gap-5"
                contentLayoutClassName="mx-auto max-w-[800px] px-8 sm:px-10 md:px-12 lg:px-16 xl:px-20 py-8 sm:py-10 md:py-12"
            >
                {/* 01 Discovery & Alignment */}
                <StickyTabs.Item
                    title={
                        <>
                            <span className="text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] font-bold leading-none tracking-[-0.04em] text-white/30 select-none shrink-0">
                                01
                            </span>
                            <span>Discovery & Alignment</span>
                        </>
                    }
                    id="discovery"
                >
                    <div className="flex flex-col gap-4">
                        <p className="text-sm sm:text-base text-white/65 leading-[1.8]">
                            Before we touch design tools or write a line of code, we need to understand your world completely. We run structured discovery sessions with your key stakeholders to map your business model, user needs, technical constraints, and success metrics. This phase exists so that every decision we make downstream has a reason — and that reason traces back to your actual goals, not our assumptions.
                        </p>
                        <ul className="flex flex-col gap-4">
                            {[
                                "Business goals and success metrics documented",
                                "User personas and core use cases defined",
                                "Technical feasibility and constraints mapped",
                                "Competitive landscape reviewed",
                                "Project scope formally defined",
                                "Timeline and milestone plan drafted",
                                "Assumptions log — every assumption written down and agreed upon"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <span className="text-white/40 text-sm mt-1">—</span>
                                    <span className="text-white/70 text-sm sm:text-base leading-[1.7]">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                        <div className="pt-5 mt-6 border-t border-white/[0.07]">
                            <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-white/35 mb-2">
                                CLIENT — ACCESS TO KEY DECISION-MAKER FOR TWO 60–90 MINUTE SESSIONS
                            </p>
                            <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-white/35">
                                DELIVERABLE — PROJECT BRIEF, DEFINED SCOPE, AND SIGNED-OFF MILESTONE PLAN
                            </p>
                        </div>
                    </div>
                </StickyTabs.Item>

                {/* 02 Strategy & Architecture */}
                <StickyTabs.Item
                    title={
                        <>
                            <span className="text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] font-bold leading-none tracking-[-0.04em] text-white/30 select-none shrink-0">
                                02
                            </span>
                            <span>Strategy & Architecture</span>
                        </>
                    }
                    id="strategy"
                >
                    <div className="flex flex-col gap-6">
                        <p className="text-sm sm:text-base text-white/65 leading-[1.8]">
                            With a clear scope in hand, we define the technical foundation your product will be built on. This is where we make the decisions that are expensive to undo later — system architecture, tech stack, data models, API structure. We document every decision and the reasoning behind it so your team understands not just what we built, but why we built it that way.
                        </p>
                        <ul className="flex flex-col gap-4">
                            {[
                                "System architecture diagram",
                                "Tech stack selection with rationale",
                                "Database schema and data modeling",
                                "API design and integration planning",
                                "Information architecture and user flows",
                                "Component hierarchy and design system scope",
                                "Sprint plan with defined milestones",
                                "Risk register — known risks and mitigation strategies"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <span className="text-white/40 text-sm mt-1">—</span>
                                    <span className="text-white/70 text-sm sm:text-base leading-[1.7]">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                        <div className="pt-5 mt-6 border-t border-white/[0.07]">
                            <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-white/35 mb-2">
                                CLIENT — ONE STAKEHOLDER AVAILABLE FOR WEEKLY 30-MINUTE CHECK-INS
                            </p>
                            <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-white/35">
                                DELIVERABLE — TECHNICAL ARCHITECTURE DOCUMENT AND SPRINT ROADMAP
                            </p>
                        </div>
                    </div>
                </StickyTabs.Item>

                {/* 03 Design & Build */}
                <StickyTabs.Item
                    title={
                        <>
                            <span className="text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] font-bold leading-none tracking-[-0.04em] text-white/30 select-none shrink-0">
                                03
                            </span>
                            <span>Design & Build</span>
                        </>
                    }
                    id="design-development"
                >
                    <div className="flex flex-col gap-6">
                        <p className="text-sm sm:text-base text-white/65 leading-[1.8]">
                            This is where the product takes shape. Design and development run in parallel — our designers work one sprint ahead of engineering so there is never a bottleneck. Every UI component is built inside a design system, every feature is built against the spec defined in Phase 02, and every pull request is reviewed before it merges. You have visibility into progress at every stage — not just at the end.
                        </p>
                        <ul className="flex flex-col gap-4">
                            {[
                                "Full design system — typography, color, spacing, components",
                                "High-fidelity UI for all core user flows",
                                "Responsive design across all target devices",
                                "Frontend and backend development — all features in scope",
                                "API integrations completed and tested",
                                "Unit and integration tests written alongside code",
                                "Staging environment for client review",
                                "Weekly progress updates with demo access"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <span className="text-white/40 text-sm mt-1">—</span>
                                    <span className="text-white/70 text-sm sm:text-base leading-[1.7]">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                        <div className="pt-5 mt-6 border-t border-white/[0.07]">
                            <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-white/35 mb-2">
                                CLIENT — SPRINT DEMO FEEDBACK REQUIRED WITHIN 48 HOURS
                            </p>
                            <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-white/35">
                                DELIVERABLE — FULLY BUILT PRODUCT ON STAGING WITH DESIGN SYSTEM DOCUMENTATION
                            </p>
                        </div>
                    </div>
                </StickyTabs.Item>

                {/* 04 Testing & Quality */}
                <StickyTabs.Item
                    title={
                        <>
                            <span className="text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] font-bold leading-none tracking-[-0.04em] text-white/30 select-none shrink-0">
                                04
                            </span>
                            <span>Testing & Quality</span>
                        </>
                    }
                    id="testing"
                >
                    <div className="flex flex-col gap-6">
                        <p className="text-sm sm:text-base text-white/65 leading-[1.8]">
                            Before anything goes live, it goes through a structured quality process. We test every user flow, every edge case, every device, and every integration. Performance is benchmarked, security is reviewed, and accessibility is checked. This phase is not a formality — it is where we catch what sprints miss and ensure the product we ship is the product we promised.
                        </p>
                        <ul className="flex flex-col gap-4">
                            {[
                                "Full QA pass across all user flows",
                                "Cross-browser and cross-device testing",
                                "Performance audit — load times, Core Web Vitals",
                                "Security review — authentication, data handling, exposure points",
                                "Accessibility audit — WCAG 2.1 compliance check",
                                "Bug triage and resolution — all critical and major issues resolved",
                                "User acceptance testing session with client",
                                "Final staging sign-off"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <span className="text-white/40 text-sm mt-1">—</span>
                                    <span className="text-white/70 text-sm sm:text-base leading-[1.7]">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                        <div className="pt-5 mt-6 border-t border-white/[0.07]">
                            <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-white/35 mb-2">
                                CLIENT — PARTICIPATION IN UAT SESSION AND STAGING SIGN-OFF REQUIRED
                            </p>
                            <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-white/35">
                                DELIVERABLE — QA REPORT, RESOLVED BUG LOG, AND STAGING SIGN-OFF
                            </p>
                        </div>
                    </div>
                </StickyTabs.Item>

                {/* 05 Launch & Ownership */}
                <StickyTabs.Item
                    title={
                        <>
                            <span className="text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] font-bold leading-none tracking-[-0.04em] text-white/30 select-none shrink-0">
                                05
                            </span>
                            <span>Launch & Ownership</span>
                        </>
                    }
                    id="launch"
                >
                    <div className="flex flex-col gap-6">
                        <p className="text-sm sm:text-base text-white/65 leading-[1.8]">
                            Launch is not the end — it is the beginning of the product's life. We handle the full deployment, configure your production environment, and monitor the first 48 hours live. After launch, we run a structured handoff: your team receives full documentation, a walkthrough of the codebase, and training on any CMS or admin tools. Our goal is that you are fully in control before we step back — not dependent on us to keep the lights on.
                        </p>
                        <ul className="flex flex-col gap-4">
                            {[
                                "Production deployment and environment configuration",
                                "Domain, SSL, and infrastructure setup",
                                "48-hour post-launch monitoring",
                                "Full codebase documentation",
                                "Admin and CMS training session",
                                "Credentials and access handover — complete and organised",
                                "Post-launch support window — 14 days of bug fixes at no charge",
                                "Retainer options presented for ongoing partnership"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <span className="text-white/40 text-sm mt-1">—</span>
                                    <span className="text-white/70 text-sm sm:text-base leading-[1.7]">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                        <div className="pt-5 mt-6 border-t border-white/[0.07]">
                            <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-white/35 mb-2">
                                CLIENT — HOSTING AND DOMAIN CREDENTIALS REQUIRED 3 DAYS BEFORE LAUNCH
                            </p>
                            <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-white/35">
                                DELIVERABLE — LIVE PRODUCT, FULL DOCUMENTATION, AND COMPLETE ACCESS HANDOVER
                            </p>
                        </div>
                    </div>
                </StickyTabs.Item>
            </StickyTabs>

            {/* Closing Reinforcement Section */}
            <section className="relative w-full px-8 sm:px-10 md:px-12 lg:px-16 xl:px-20 py-16 sm:py-20 md:py-24 bg-[#0B0F14] border-t border-white/[0.06]">
                <div className="max-w-[800px] mx-auto flex flex-col gap-8 text-center">
                    <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-bold tracking-[-0.03em] leading-[1.1] text-white">
                        Built for clarity. Designed for scale.
                    </h2>
                    <p className="text-sm sm:text-base text-white/55 leading-[1.8] max-w-[600px] mx-auto">
                        We don&apos;t build projects. We build systems. Systems that scale,
                        adapt, and grow with your business — backed by long-term thinking
                        and genuine ownership.
                    </p>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="relative w-full px-8 sm:px-10 md:px-12 lg:px-16 xl:px-20 py-14 sm:py-16 md:py-20 bg-[#161B22] border-t border-white/[0.06]">
                <div className="max-w-[700px] mx-auto flex flex-col items-center text-center gap-8">
                    <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-bold tracking-[-0.03em] leading-[1.1] text-white">
                        Let&apos;s build something structured and scalable.
                    </h2>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-7 sm:px-8 md:px-9 py-3 sm:py-3.5 md:py-4 bg-white text-[#0B0F14] text-sm font-semibold rounded-md hover:opacity-85 transition-opacity duration-200"
                    >
                        Start a Project
                    </Link>
                </div>
            </section>
        </div>
    );
}
