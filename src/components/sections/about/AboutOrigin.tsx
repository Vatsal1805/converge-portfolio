"use client";

import { motion } from "framer-motion";
import { ABOUT_DATA } from "@/data/about";

export function AboutOrigin({ fadeUp }: { fadeUp: (delay: number) => any }) {
    const { founder } = ABOUT_DATA;
    return (
        <section className="relative w-full py-[72px] px-[clamp(24px,5vw,80px)] border-t border-white/[0.07] m-0">
            <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-12 md:gap-24">
                <motion.div
                    {...fadeUp(0)}
                    className="md:sticky md:top-32 h-fit"
                >
                    <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-white/30">
                        The Beginning
                    </span>
                </motion.div>

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
                            {founder.name.split(' ')[0]} spent years working across freelance projects
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
                            Converge was founded in {founder.year} in Jharkhand,
                            India with a simple conviction — that technology,
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
    );
}
