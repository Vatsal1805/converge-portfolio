"use client";

import { motion } from "framer-motion";

export function AboutOperate({ fadeUp }: { fadeUp: (delay: number) => any }) {
    return (
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
    );
}
