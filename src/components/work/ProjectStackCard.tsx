"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Project } from "@/data/projects"
import { cn } from "@/lib/utils"

import Image from "next/image"

interface ProjectStackCardProps {
    project: Project
    index: number
    isMobile: boolean
}

export default function ProjectStackCard({ project, index, isMobile }: ProjectStackCardProps) {
    // Exact background tints per spec
    const bgColors = ["#161614", "#181816", "#1a1a17"]
    const bgColor = bgColors[index % bgColors.length]

    return (
        <div
            className={cn(
                "group relative border border-white/[0.07] overflow-hidden shadow-[0_-8px_40px_rgba(0,0,0,0.4)] transition-transform duration-500",
                isMobile
                    ? "w-calc[100%-32px] h-auto min-h-[520px] rounded-[12px] flex flex-col mb-4 shadow-none relative"
                    : "w-[calc(100%-clamp(64px,10vw,200px))] h-[calc(100vh-clamp(80px,10vw,160px))] max-w-[1200px] max-height-[780px] margin-auto rounded-[16px]"
            )}
            style={{ backgroundColor: bgColor }}
        >
            {/* Entire Card Clickable */}
            <Link href={`/work/${project.slug}`} className="absolute inset-0 z-40 block">
                <span className="sr-only">View {project.name}</span>
            </Link>

            <div className={cn(
                "h-full grid grid-cols-1 md:grid-cols-[55%_45%]",
                isMobile && "flex flex-col"
            )}>
                {/* Left Column — Content */}
                <div className={cn(
                    "flex flex-col justify-center h-full gap-0 p-[clamp(32px,4vw,64px)] order-2 md:order-1",
                    isMobile && "p-[28px] h-auto"
                )}>
                    <div>
                        <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-white/35 mb-4">
                            {project.category}
                        </p>
                        <h2 className="text-[clamp(32px,4.5vw,64px)] md:text-[clamp(32px,4.5vw,64px)] sm:text-[clamp(28px,5vw,48px)] font-medium text-white tracking-[-0.02em] leading-none mb-4">
                            {project.name}
                        </h2>
                        <p className="text-[17px] text-white/50 font-light max-w-[420px] leading-relaxed mb-12">
                            {project.tagline}
                        </p>
                    </div>

                    <div className="w-full h-px bg-white/[0.07] mb-6" />

                    <div className="mt-0">
                        <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-white/30 mb-6">
                            {project.scope} · {project.year}
                        </p>
                        <div className="flex items-center gap-2 text-white text-[15px] font-normal group-hover:translate-x-1.5 transition-transform duration-300 mt-0">
                            View Project →
                        </div>
                    </div>
                </div>

                {/* Right Column — Image Area */}
                <div className={cn(
                    "h-full border-l border-white/[0.07] relative overflow-hidden order-1 md:order-2 bg-[#0c0c0b]",
                    isMobile && "h-[240px] border-l-0 border-b"
                )}>
                    <div className="w-full h-full flex items-center justify-center relative">
                        {project.image ? (
                            <Image
                                src={project.image}
                                alt={project.name}
                                fill
                                className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                                priority
                            />
                        ) : (
                            <span className="text-[clamp(48px,8vw,100px)] font-bold text-white/[0.03] select-none uppercase absolute tracking-tight">
                                {project.name}
                            </span>
                        )}

                        {/* Stat Overlay */}
                        <div
                            className="absolute bottom-0 left-0 right-0 p-8 z-10"
                            style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}
                        >
                            <p className="text-[clamp(28px,4vw,48px)] sm:text-[clamp(24px,4vw,40px)] font-medium text-white leading-none tracking-tight">
                                {project.stat}
                            </p>
                            <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-white/50 mt-2">
                                {project.statLabel}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
