"use client";

import { motion } from "framer-motion";
import { ABOUT_DATA } from "@/data/about";

export function AboutBeliefs({ fadeUp }: { fadeUp: (delay: number) => any }) {
    return (
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
                    {ABOUT_DATA.beliefs.map((belief, i) => (
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
    );
}
