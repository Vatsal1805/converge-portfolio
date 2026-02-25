"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ABOUT_DATA } from "@/data/about";

export function AboutCTA({ fadeUp }: { fadeUp: (delay: number) => any }) {
    return (
        <section className="relative w-full py-[72px] px-[clamp(24px,5vw,80px)] border-t border-white/[0.07] m-0">
            <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center">
                <motion.div
                    {...fadeUp(0)}
                    className="flex items-center gap-2.5 mb-10"
                >
                    <div className="relative flex h-2 w-2">
                        <div className="animate-pulse-slow absolute inline-flex h-full w-full rounded-full bg-[#4ade80] opacity-75"></div>
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
                        className="inline-flex items-center px-8 py-4 bg-white text-[#0c0c0b] text-base font-bold rounded-full hover:bg-white/90 active:scale-[0.97] transition-all duration-200"
                    >
                        Start a Project
                    </Link>
                    <p className="text-[14px] text-white/30 font-light">
                        or reach us at{" "}
                        <a
                            href={`mailto:${ABOUT_DATA.contactEmail}`}
                            className="text-white/30 hover:text-white/75 transition-colors duration-200 underline underline-offset-4 decoration-white/10"
                        >
                            {ABOUT_DATA.contactEmail}
                        </a>
                    </p>
                </motion.div>
            </div>

            <style jsx>{`
                @keyframes pulse-slow {
                    0%, 100% { 
                        opacity: 1; 
                        transform: scale(1); 
                    }
                    50% { 
                        opacity: 0.4; 
                        transform: scale(1.6); 
                    }
                }
                .animate-pulse-slow {
                    animation: pulse-slow 2s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
}
