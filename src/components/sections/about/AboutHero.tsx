"use client";

import { motion } from "framer-motion";
import { ABOUT_DATA } from "@/data/about";

export function AboutHero({ fadeUp }: { fadeUp: (delay: number) => any }) {
    const { founder } = ABOUT_DATA;
    return (
        <section className="relative w-full pt-[40px] pb-[72px] px-[clamp(24px,5vw,80px)] border-bottom border-white/[0.07]">
            <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-16 md:gap-24 items-start">
                <div className="flex flex-col">
                    <motion.span
                        {...fadeUp(0)}
                        className="font-mono text-[11px] uppercase tracking-[0.15em] text-white/35 mb-6"
                    >
                        About Converge Digitals
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
                            {founder.name} started Converge in {founder.year} after years
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

                <motion.div
                    {...fadeUp(0.24)}
                    className="flex flex-col gap-5 w-full max-w-[400px]"
                >
                    <div className="aspect-[4/5] w-full rounded-xl border border-white/[0.07] bg-[#161614] flex items-center justify-center relative overflow-hidden">
                        <span className="text-[64px] font-medium text-white/15 tracking-tight">
                            {founder.initials}
                        </span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-[15px] font-medium text-white">{founder.name}</span>
                        <span className="font-mono text-[11px] uppercase tracking-[0.05em] text-white/40">{founder.role}</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
