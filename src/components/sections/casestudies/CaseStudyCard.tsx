"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Project {
    slug: string;
    name: string;
    category: string;
    tagline: string;
    stat: string;
    statLabel: string;
    scope: string;
}

export function CaseStudyCard({ project }: { project: Project }) {
    return (
        <Link
            href={`/work/${project.slug}`}
            className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] bg-[#161614] border border-white/[0.07] overflow-hidden group/card block"
            style={{ borderRadius: "12px" }}
        >
            {/* Left Panel: Mockup */}
            <div className="relative aspect-[16/10] md:aspect-auto md:min-h-[380px]">
                <div className="absolute inset-0 bg-[#1a1a18] flex items-center justify-center">
                    <span className="text-[12rem] font-bold leading-none text-white/[0.04] select-none">
                        {project.name.charAt(0)}
                    </span>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-black/70 via-black/30 to-transparent pointer-events-none" />
                <div className="absolute bottom-7 left-7 z-10">
                    <p className="text-[clamp(2.5rem,4vw,3.5rem)] font-bold leading-none text-white tracking-[-0.02em]">
                        {project.stat}
                    </p>
                    <p className="text-[13px] font-medium text-white/60 mt-1.5 tracking-wide">
                        {project.statLabel}
                    </p>
                </div>

                {/* View Project Overlay */}
                <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-opacity duration-[250ms] ease-out">
                    <div className="w-[110px] h-[110px] rounded-full bg-[#0c0c0b]/90 flex items-center justify-center border border-white/10">
                        <span className="text-[13px] font-semibold text-white tracking-wide">View Project</span>
                    </div>
                </div>

                <div className="hidden md:block absolute right-0 top-0 bottom-0 w-px bg-white/[0.08]" />
            </div>

            {/* Right Panel: Details */}
            <div className="flex flex-col justify-between p-8 md:p-12">
                <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-white/35 mb-5">
                        {project.category}
                    </p>
                    <h3 className="text-[clamp(1.5rem,3vw,2.2rem)] font-bold leading-[1.1] tracking-[-0.02em] text-white mb-5 transition-colors group-hover/card:text-white/90">
                        {project.name}
                    </h3>
                    <p className="text-[15px] leading-[1.7] text-white/50 max-w-[400px] mb-8">
                        {project.tagline}
                    </p>

                    <div className="flex flex-col gap-1">
                        <p className="text-[2.5rem] font-bold leading-none text-white tracking-[-0.02em]">
                            {project.stat}
                        </p>
                        <p className="text-[11px] font-mono uppercase tracking-[0.1em] text-white/40">
                            {project.statLabel}
                        </p>
                    </div>
                </div>

                <div className="mt-8">
                    <div className="h-px bg-white/[0.08] mb-5" />
                    <div className="flex justify-between items-end">
                        <div className="space-y-2">
                            <p className="text-[12px] font-mono tracking-[0.08em] text-white/30 uppercase">
                                {project.scope}
                            </p>
                            <div className="text-white text-[14px] font-normal flex items-center gap-2 group-hover/card:translate-x-1 transition-transform">
                                View Project <ArrowRight size={14} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}
