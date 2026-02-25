"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform, useAnimation } from "framer-motion"
import { projects } from "@/data/projects"
import ProjectStackCard from "@/components/work/ProjectStackCard"
import { useMediaQuery } from "@/lib/hooks/use-media-query"
import { FinalCTA } from "@/components/sections/FinalCTA"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Breadcrumb } from "@/components/Breadcrumb"

export default function WorkPage() {
    const isMobile = useMediaQuery("(max-width: 768px)")
    const [activeIndex, setActiveIndex] = useState(0)
    const cardRefs = useRef<(HTMLDivElement | null)[]>([])
    const controls = useAnimation()

    const { scrollYProgress } = useScroll()
    const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1])

    useEffect(() => {
        // Start header animations on mount
        controls.start("visible")

        // Intersection Observer for the scroll counter
        const observers = cardRefs.current.map((ref, index) => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setActiveIndex(index)
                    }
                },
                { threshold: 0.5 }
            )
            if (ref) observer.observe(ref)
            return observer
        })

        return () => observers.forEach(o => o.disconnect())
    }, [controls])

    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.08,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1]
            }
        })
    }

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
                "name": "Work",
                "item": "https://convergedigital.com/work"
            }
        ]
    }

    return (
        <main className="bg-[#0c0c0b] text-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            {/* PAGE HEADER */}
            <header className="pt-[140px] px-[clamp(24px,5vw,80px)] pb-20 border-b border-white/[0.07]">
                <div className="max-w-[1200px] mx-auto">
                    <div className="mb-16">
                        <Breadcrumb items={[
                            { label: 'Home', href: '/' },
                            { label: 'Work' }
                        ]} />
                    </div>

                    <div className="flex flex-col gap-4">
                        <motion.span
                            custom={0}
                            initial="hidden"
                            animate={controls}
                            variants={fadeUp}
                            className="font-mono text-[11px] uppercase tracking-[0.15em] text-white/35"
                        >
                            SELECTED WORK
                        </motion.span>
                        <motion.h1
                            custom={1}
                            initial="hidden"
                            animate={controls}
                            variants={fadeUp}
                            className="text-[clamp(40px,6vw,80px)] font-medium tracking-[-0.02em] leading-none text-white"
                        >
                            Projects that
                            <br />
                            performed.
                        </motion.h1>
                        <motion.p
                            custom={2}
                            initial="hidden"
                            animate={controls}
                            variants={fadeUp}
                            className="text-[16px] text-white/45 font-light max-w-[500px] mt-4"
                        >
                            A record of problems solved and products shipped.
                        </motion.p>
                    </div>
                </div>
            </header>

            {/* STICKY SCROLL STACK CONTAINER */}
            <div
                className="relative"
                style={{
                    height: isMobile ? "auto" : `${projects.length * 110}vh`
                }}
            >
                {projects.map((project, index) => (
                    <div
                        key={project.slug}
                        ref={(el) => { cardRefs.current[index] = el }}
                        className={isMobile ? "relative px-6 py-4" : "sticky top-0 h-screen flex items-center justify-center"}
                        style={isMobile ? {} : { zIndex: index + 1 }}
                    >
                        <ProjectStackCard project={project} index={index} isMobile={isMobile} />
                    </div>
                ))}
            </div>

            {/* FIXED SCROLL COUNTER (Desktop Only) */}
            {!isMobile && (
                <div className="fixed bottom-8 right-8 z-[100] font-mono text-[12px] text-white/30 tracking-[0.1em]">
                    <span className="text-white/70">{String(activeIndex + 1).padStart(2, '0')}</span> / {String(projects.length).padStart(2, '0')}
                </div>
            )}

            {/* FIXED PROGRESS LINE (Desktop Only) */}
            {!isMobile && (
                <div className="fixed right-[clamp(24px,5vw,80px)] top-0 h-screen w-px bg-white/[0.06] z-40 pointer-events-none">
                    <motion.div
                        style={{ scaleY, transformOrigin: 'top', background: 'rgba(255,255,255,0.25)' }}
                        className="absolute top-0 left-0 w-full h-full"
                    />
                </div>
            )}

            {/* CTA SECTION */}
            <div className="relative z-10 bg-[#0c0c0b]">
                <FinalCTA />
            </div>
        </main>
    )
}
