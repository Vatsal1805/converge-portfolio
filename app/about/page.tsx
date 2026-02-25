"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";

const ease = [0.22, 1, 0.36, 1];

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6, ease, delay },
});

export default function About() {
    const founderName = "Somil Shekhar";
    const foundingYear = "2023";
    const experienceYears = "8";
    const teamSize = "5";

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
                "name": "About",
                "item": "https://convergedigital.com/about"
            }
        ]
    }

    return (
        <div className="w-full bg-[#0c0c0b] selection:bg-white selection:text-black">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            {/* BREADCRUMBS */}
            <div className="pt-32 max-w-[1200px] mx-auto px-[clamp(24px,5vw,80px)]">
                <Breadcrumb items={[
                    { label: 'Home', href: '/' },
                    { label: 'About' }
                ]} />
            </div>

            {/* SECTION 1 — PAGE HERO */}
            <section className="relative w-full pt-[40px] pb-[72px] px-[clamp(24px,5vw,80px)] border-bottom border-white/[0.07]">
                <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-16 md:gap-24 items-start">
                    {/* Left side: Context */}
                    <div className="flex flex-col">
                        <motion.span
                            {...fadeUp(0)}
                            className="font-mono text-[11px] uppercase tracking-[0.15em] text-white/35 mb-6"
                        >
                            About Converge Digital
                        </motion.span>
                        <motion.h1
                            {...fadeUp(0.08)}
                            className="text-[clamp(36px,5vw,64px)] font-medium text-white leading-[1.15] tracking-[-0.02em] mb-8"
                        >
                            We started Converge because<br />
                            serious products deserve<br />
                            more than just execution.
                        </motion.h1>
                        <motion.div
                            {...fadeUp(0.16)}
                            className="flex flex-col gap-6"
                        >
                            <p className="text-[17px] text-white/60 font-light leading-[1.8] max-w-[520px]">
                                {founderName} started Converge in {foundingYear} after years
                                of freelance work and startup collaborations. He was
                                always more than a developer — understanding the
                                business behind what he was building was never
                                optional. It was the whole point.
                            </p>
                            <p className="text-[17px] text-white/60 font-light leading-[1.8] max-w-[520px]">
                                Converge was built to combine technology, creativity,
                                and strategy under one roof. Not a dev shop that
                                takes orders. A studio that thinks about what you&apos;re
                                actually trying to grow.
                            </p>
                        </motion.div>
                    </div>

                    {/* Right side: Founder block */}
                    <motion.div
                        {...fadeUp(0.24)}
                        className="flex flex-col gap-5 w-full max-w-[400px]"
                    >
                        <div className="aspect-[4/5] w-full rounded-xl border border-white/[0.07] bg-[#161614] flex items-center justify-center relative overflow-hidden">
                            <span className="text-[64px] font-medium text-white/15 tracking-tight">
                                SS
                            </span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-[15px] font-medium text-white">{founderName}</span>
                            <span className="font-mono text-[11px] uppercase tracking-[0.05em] text-white/40">Founder, Converge Digital</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* SECTION 2 — THE ORIGIN */}
            <section className="relative w-full py-[72px] px-[clamp(24px,5vw,80px)] border-t border-white/[0.07] m-0">
                <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-12 md:gap-24">
                    {/* Left: Sticky Label */}
                    <motion.div
                        {...fadeUp(0)}
                        className="md:sticky md:top-32 h-fit"
                    >
                        <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-white/30">
                            The Beginning
                        </span>
                    </motion.div>

                    {/* Right: Story */}
                    <div className="flex flex-col">
                        <motion.h2
                            {...fadeUp(0.08)}
                            className="text-[clamp(24px,3vw,36px)] font-normal text-white leading-[1.3] mb-6"
                        >
                            We kept seeing businesses get deliverables<br />
                            when what they needed was growth.
                        </motion.h2>
                        <div className="flex flex-col gap-5">
                            <motion.p {...fadeUp(0.16)} className="text-[16px] text-white/60 font-light leading-[1.85]">
                                {founderName.split(' ')[0]} spent years working across freelance projects
                                and startup collaborations — building websites,
                                platforms, and digital products for businesses at
                                every stage. The technical work was rarely the hard
                                part. The hard part was watching clients receive
                                exactly what they asked for and still not get what
                                they needed.
                            </motion.p>
                            <motion.p {...fadeUp(0.24)} className="text-[16px] text-white/60 font-light leading-[1.85]">
                                The turning point came on a project where the right
                                digital strategy — not just the right code — changed
                                the trajectory of a business. It wasn&apos;t about
                                features. It was about understanding what growth
                                actually required and building toward that. That
                                project made it clear: the goal was never to execute
                                tasks. It was to create real impact.
                            </motion.p>
                            <motion.p {...fadeUp(0.32)} className="text-[16px] text-white/60 font-light leading-[1.85]">
                                Converge was founded in {foundingYear} in Dhaka,
                                Bangladesh with a simple conviction — that technology,
                                creativity, and strategy belong together. The name
                                Converge comes from exactly that: the meeting point
                                of technical precision and business thinking. Every
                                project we take on is an exercise in making those
                                things meet precisely.
                            </motion.p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3 — WHAT WE BELIEVE */}
            <section className="relative w-full py-[72px] px-[clamp(24px,5vw,80px)] border-t border-white/[0.07] m-0">
                <div className="max-w-[1200px] mx-auto">
                    <div className="flex flex-col items-center text-center mb-12">
                        <motion.span
                            {...fadeUp(0)}
                            className="font-mono text-[11px] uppercase tracking-[0.15em] text-white/35 mb-4"
                        >
                            How We Think
                        </motion.span>
                        <motion.h2
                            {...fadeUp(0.08)}
                            className="text-[clamp(28px,4vw,48px)] font-normal text-white"
                        >
                            A few things we believe<br />that shape everything we build.
                        </motion.h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {[
                            {
                                label: "Belief 01",
                                title: "Structure before speed.",
                                body: "We learned this the hard way. Early on, we underestimated the importance of clear scope documentation — and it led to extra revisions, confusion, and wasted time on both sides. That experience shaped everything. Now we define expectations, map constraints, and document decisions before writing a single line of code. Every hour spent on clarity saves three in execution."
                            },
                            {
                                label: "Belief 02",
                                title: "Ownership, not dependency.",
                                body: "We refuse to build something that doesn't make sense for a client's long-term growth. If a feature is unnecessary or harmful to performance — we say it clearly. We'd rather lose a billing opportunity than deliver something that works against you. A client who needs us to keep the lights on has been failed by their studio."
                            },
                            {
                                label: "Belief 03",
                                title: "Small by design.",
                                body: "It started with Somil. Today we work as a small, focused team of developers, designers, and strategists who collaborate based on their strengths. We don't scale by hiring fast. We scale by staying selective — about who we work with and what we agree to build."
                            }
                        ].map((belief, i) => (
                            <motion.div
                                key={i}
                                {...fadeUp(0.16 + i * 0.08)}
                                className="p-8 rounded-xl border border-white/[0.07] bg-[#161614] hover:bg-white/[0.02] hover:border-white/[0.18] transition-all duration-300"
                            >
                                <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-white/35 mb-4 block">
                                    {belief.label} ——
                                </span>
                                <h3 className="text-[20px] font-medium text-white mb-3">{belief.title}</h3>
                                <p className="text-[14px] text-white/60 font-light leading-[1.8]">
                                    {belief.body}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 4 — HOW WE OPERATE */}
            <section className="relative w-full py-[72px] px-[clamp(24px,5vw,80px)] border-t border-white/[0.07] m-0">
                <div className="max-w-[640px] mx-auto text-left">
                    <motion.span
                        {...fadeUp(0)}
                        className="font-mono text-[11px] uppercase tracking-[0.15em] text-white/35 mb-6 block"
                    >
                        How We Operate
                    </motion.span>
                    <motion.h2
                        {...fadeUp(0.08)}
                        className="text-[clamp(28px,4vw,44px)] font-normal text-white leading-[1.2] mb-8"
                    >
                        Senior people on every project.<br />
                        No exceptions.
                    </motion.h2>
                    <div className="flex flex-col gap-5">
                        <motion.p {...fadeUp(0.16)} className="text-[16px] text-white/60 font-light leading-[1.85]">
                            The first thing we do with any new client is listen.
                            We try to understand the business, the audience, and
                            the actual goal behind the project before anything
                            else. Strategy before development. Always.
                        </motion.p>
                        <motion.p {...fadeUp(0.24)} className="text-[16px] text-white/60 font-light leading-[1.85]">
                            We work with startups, growing businesses, and
                            brands that want to scale digitally. What they have
                            in common is ambition — they don&apos;t just want a
                            website. They want growth, structure, and performance
                            that compounds over time.
                        </motion.p>
                        <motion.p {...fadeUp(0.32)} className="text-[16px] text-white/60 font-light leading-[1.85]">
                            Our perfect client is growth-focused and open to
                            collaboration. They value strategy as much as design
                            and are ready to invest in long-term digital success
                            rather than short-term fixes. If that sounds like
                            you — we should talk.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* SECTION 5 — BY THE NUMBERS */}
            <section className="relative w-full py-[72px] px-[clamp(24px,5vw,80px)] border-t border-white/[0.07] m-0">
                <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
                    {[
                        { val: "2023+", label: "Founded" },
                        { val: "14+", label: "Projects" },
                        { val: "12+", label: "Clients" },
                        { val: "100%", label: "Senior Team" }
                    ].map((stat, i) => (
                        <motion.div key={i} {...fadeUp(i * 0.08)} className="flex flex-col">
                            <span className="text-[clamp(40px,6vw,72px)] font-medium text-white leading-none">
                                {stat.val}
                            </span>
                            <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-white/35 mt-3">
                                {stat.label}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* SECTION 6 — CLOSING CTA */}
            <section className="relative w-full py-[72px] px-[clamp(24px,5vw,80px)] border-t border-white/[0.07] m-0">
                <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center">
                    {/* Availability Label */}
                    <motion.div
                        {...fadeUp(0)}
                        className="flex items-center gap-2.5 mb-10"
                    >
                        <div className="relative flex h-2 w-2">
                            <div className="animate-[pulse_2s_ease-in-out_infinite] absolute inline-flex h-full w-full rounded-full bg-[#4ade80] opacity-75"></div>
                            <div className="relative inline-flex rounded-full h-2 w-2 bg-[#4ade80]"></div>
                        </div>
                        <span className="text-[11px] font-mono font-medium tracking-[0.15em] uppercase text-white/45">
                            Available For New Projects
                        </span>
                    </motion.div>

                    <motion.h2
                        {...fadeUp(0.08)}
                        className="text-[clamp(32px,4vw,52px)] font-normal text-white leading-[1.2] mb-8"
                    >
                        If you&apos;re building something serious,<br />we should talk.
                    </motion.h2>

                    <motion.p
                        {...fadeUp(0.16)}
                        className="text-[16px] text-white/45 font-light max-w-[600px] mt-4"
                    >
                        We work with ambitious teams who want growth,
                        structure, and performance — not just a website.
                    </motion.p>

                    <motion.div
                        {...fadeUp(0.24)}
                        className="flex flex-col items-center gap-6"
                    >
                        <Link
                            href="/contact"
                            className="inline-flex items-center px-8 py-4 bg-white text-[#0B0F14] text-base font-bold rounded-full hover:bg-white/90 active:scale-[0.97] transition-all duration-200"
                            style={{ paddingLeft: "32px", paddingRight: "32px" }}
                        >
                            Start a Project
                        </Link>
                        <p className="text-[14px] text-white/30 font-light">
                            or reach us at{" "}
                            <a
                                href="mailto:contact@chillbion.com"
                                className="text-white/30 hover:text-white/75 transition-colors duration-200 underline underline-offset-4 decoration-white/10"
                            >
                                contact@chillbion.com
                            </a>
                        </p>
                    </motion.div>
                </div>
            </section>

            <style>{`
        @keyframes pulse {
          0%, 100% { 
            opacity: 1; 
            transform: scale(1); 
          }
          50% { 
            opacity: 0.4; 
            transform: scale(1.6); 
          }
        }
      `}</style>
        </div>
    );
}
