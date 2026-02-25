"use client";

import { motion } from "framer-motion";
import { ABOUT_DATA } from "@/data/about";

export function AboutStats({ fadeUp }: { fadeUp: (delay: number) => any }) {
    return (
        <section className="relative w-full py-[72px] px-[clamp(24px,5vw,80px)] border-t border-white/[0.07] m-0">
            <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
                {ABOUT_DATA.stats.map((stat, i) => (
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
    );
}
