"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

export default function Footer() {
    return (
        <footer className="w-full bg-[#0c0c0b] border-t border-white/[0.07] pt-20 pb-10 px-[clamp(24px,5vw,80px)] overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, ease }}
                className="max-w-[1200px] mx-auto"
            >
                <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-x-12 gap-y-10 md:gap-y-0">
                    {/* Column 1: Identity */}
                    <div className="flex flex-col">
                        <Link href="/" className="text-white text-[clamp(28px,4vw,48px)] font-bold tracking-tighter leading-none mb-3">
                            CONVERGE
                        </Link>
                        <p className="text-[15px] font-light text-white/45 leading-[1.7] max-w-[260px] mb-6">
                            We help startups build products that are ready to scale.
                        </p>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-mono text-[12px] uppercase tracking-[0.12em] text-white/35 hover:text-white/80 transition-colors duration-200"
                        >
                            LinkedIn →
                        </a>
                    </div>

                    {/* Column 2: Services */}
                    <div className="flex flex-col">
                        <h4 className="font-mono text-[11px] uppercase tracking-[0.15em] text-white/30 mb-5">
                            SERVICES
                        </h4>
                        <div className="flex flex-col gap-2">
                            {[
                                { name: "MVP Development", url: "/#services" },
                                { name: "Scalable Web Apps", url: "/#services" },
                                { name: "UI & Product Design", url: "/#services" },
                                { name: "Product Strategy", url: "/#services" },
                            ].map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.url}
                                    className="text-[14px] font-light text-white/55 leading-[2] hover:text-white/90 transition-colors duration-200"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Column 3: Company */}
                    <div className="flex flex-col">
                        <h4 className="font-mono text-[11px] uppercase tracking-[0.15em] text-white/30 mb-5">
                            COMPANY
                        </h4>
                        <div className="flex flex-col gap-2">
                            {[
                                { name: "About", url: "/about" },
                                { name: "Work", url: "/work" },
                                { name: "Process", url: "/process" },
                                { name: "Contact", url: "/contact" },
                            ].map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.url}
                                    className="text-[14px] font-light text-white/55 leading-[2] hover:text-white/90 transition-colors duration-200"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Column 4: Contact */}
                    <div className="flex flex-col">
                        <h4 className="font-mono text-[11px] uppercase tracking-[0.15em] text-white/30 mb-5">
                            CONTACT
                        </h4>
                        <div className="flex flex-col">
                            <span className="text-[14px] font-light text-white/55 leading-[2]">
                                Jharkhand, India
                            </span>
                            <a
                                href="mailto:contact@convergedigital.com"
                                className="text-[14px] font-light text-white/55 leading-[2] hover:text-white/90 transition-colors duration-200"
                            >
                                contact@convergedigital.com
                            </a>
                        </div>
                        <div className="mt-5 flex items-center gap-2.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#4ade80] animate-pulse" />
                            <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-white/35">
                                AVAILABLE FOR NEW PROJECTS
                            </span>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-[60px] pt-6 border-t border-white/[0.07] flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-[13px] font-light text-white/25">
                        © 2026 Converge Digitals. All rights reserved.
                    </p>
                    <p className="text-[13px] font-light text-white/20 italic">
                        Designed with intention. Built for scale.
                    </p>
                </div>
            </motion.div>
        </footer>
    );
}
