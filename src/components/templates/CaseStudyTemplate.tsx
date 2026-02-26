"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Project } from "@/data/projects"
import { Breadcrumb } from "@/components/Breadcrumb"

interface CaseStudyTemplateProps {
    project: Project
    nextProject: Project
    prevProject: Project
}

const ease = [0.22, 1, 0.36, 1]

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
}

export default function CaseStudyTemplate({ project, nextProject, prevProject }: CaseStudyTemplateProps) {
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
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": project.name,
                "item": `https://convergedigital.com/work/${project.slug}`
            }
        ]
    }

    return (
        <main className="bg-[#0c0c0b] text-white selection:bg-[#4ade80]/30">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <div className="max-w-[1200px] mx-auto px-[clamp(24px,5vw,80px)]">

                {/* BREADCRUMBS */}
                <div className="pt-24 pb-8">
                    <Breadcrumb items={[
                        { label: 'Home', href: '/' },
                        { label: 'Work', href: '/work' },
                        { label: project.name }
                    ]} />
                </div>

                {/* SECTION 1 — PROJECT HERO */}
                <section className="pb-20 border-bottom border-white/5">
                    {/* Metadata bar */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, ease, delay: 0 }}
                        className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8"
                    >
                        <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-white/35">
                            {project.category}
                        </span>
                        <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-white/35">
                            {project.year} · {project.scope}
                        </div>
                    </motion.div>

                    {/* Headline + Stat Row */}
                    <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-12">
                        <div className="max-w-[800px]">
                            <motion.h1
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.6, ease, delay: 0.08 }}
                                className="text-[clamp(48px,8vw,96px)] font-bold tracking-tight leading-none mb-4"
                            >
                                {project.name}
                            </motion.h1>
                            <motion.p
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.6, ease, delay: 0.16 }}
                                className="text-lg md:text-xl text-white/50 font-light"
                            >
                                {project.tagline}
                            </motion.p>
                        </div>

                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, ease, delay: 0.12 }}
                            className="flex flex-col items-start lg:items-end"
                        >
                            <div className="text-[clamp(40px,6vw,72px)] font-bold tracking-tight text-white leading-none">
                                {project.stat}
                            </div>
                            <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-white/35 mt-2">
                                {project.statLabel}
                            </div>
                            <div className="mt-4 px-4 py-1.5 border border-white/15 rounded-full font-mono text-[11px] uppercase text-white/50">
                                {project.heroLabel}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* SECTION 2 — PROJECT IMAGE */}
                <section className="mt-20 mb-20">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, ease, delay: 0.2 }}
                        className="w-full aspect-[16/9] md:h-[600px] bg-[#161614] rounded-xl border border-white/7 overflow-hidden relative group"
                    >
                        {project.image ? (
                            <Image
                                src={project.image}
                                alt={project.name}
                                fill
                                className="object-cover"
                                sizes="100vw"
                                priority
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
                                <span className="text-[clamp(80px,15vw,200px)] font-bold text-white/[0.03] select-none uppercase tracking-tight">
                                    {project.name}
                                </span>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-white/20">
                                        Project imagery coming soon
                                    </p>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </section>

                {/* SECTION 3 — THE BRIEF */}
                <section className="py-20 border-t border-white/7">
                    <div className="grid grid-cols-1 lg:grid-cols-[25%_75%] gap-12">
                        <div className="hidden lg:block sticky top-24 h-fit">
                            <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-white/30">
                                The Brief
                            </span>
                        </div>
                        <div>
                            <span className="lg:hidden block font-mono text-[11px] uppercase tracking-[0.15em] text-white/30 mb-8">
                                The Brief
                            </span>
                            <motion.h2
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.6, ease }}
                                className="text-2xl md:text-3xl lg:text-4xl font-normal text-white leading-snug mb-12"
                            >
                                {project.problem.headline}
                            </motion.h2>
                            <div className="space-y-6">
                                {project.problem.body.map((paragraph, i) => (
                                    <motion.p
                                        key={i}
                                        variants={fadeUp}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.2 }}
                                        transition={{ duration: 0.6, ease, delay: i * 0.1 }}
                                        className="text-[16px] text-white/60 leading-relaxed font-light"
                                    >
                                        {paragraph}
                                    </motion.p>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 4 — THE APPROACH */}
                <section className="py-20 border-t border-white/7">
                    <div className="mb-12">
                        <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-white/35">
                            The Approach
                        </span>
                    </div>
                    <div className="space-y-4">
                        {project.approach.map((item, i) => (
                            <motion.div
                                key={i}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.6, ease, delay: 0.1 + i * 0.08 }}
                                className="grid grid-cols-1 md:grid-cols-[40%_60%] gap-8 p-10 bg-[#161614] border border-white/7 rounded-xl hover:border-white/18 hover:bg-white/[0.02] transition-colors duration-300"
                            >
                                <div>
                                    <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-white/35 block mb-3">
                                        {item.label}
                                    </span>
                                    <h3 className="text-xl md:text-2xl font-normal text-white leading-tight">
                                        {item.heading}
                                    </h3>
                                </div>
                                <p className="text-[15px] text-white/60 leading-relaxed font-light">
                                    {item.body}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* SECTION 5 — THE WORK */}
                <section className="py-20 border-t border-white/7">
                    <div className="mb-12">
                        <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-white/35">
                            The Work
                        </span>
                    </div>
                    <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[1, 2].map((i) => (
                                <div key={i} className="aspect-[4/3] md:h-[480px] bg-[#161614] rounded-xl border border-white/7 flex items-center justify-center relative overflow-hidden group">
                                    <span className="text-6xl font-bold text-white/[0.03] select-none uppercase tracking-tight">
                                        {project.name}
                                    </span>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-white/10">
                                            0{i}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="aspect-[21/9] md:h-[560px] bg-[#161614] rounded-xl border border-white/7 flex items-center justify-center relative overflow-hidden group">
                            <span className="text-9xl font-bold text-white/[0.03] select-none uppercase tracking-tight">
                                {project.name}
                            </span>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-white/10">
                                    03 — FULL VIEW
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 6 — THE OUTCOME */}
                <section className="my-20 p-12 md:p-20 bg-[#161614] border border-white/7 rounded-xl">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 mb-20 text-center md:text-left">
                        {project.outcome.stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.6, ease, delay: i * 0.1 }}
                            >
                                <div className="text-[clamp(36px,5vw,64px)] font-bold tracking-tight text-white leading-none">
                                    {stat.number}
                                </div>
                                <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-white/35 mt-3">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    <div className="max-w-[680px] mx-auto text-center">
                        <motion.p
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, ease, delay: 0.4 }}
                            className="text-lg md:text-xl text-white/70 leading-relaxed font-light"
                        >
                            {project.outcome.body}
                        </motion.p>
                    </div>
                </section>

                {/* SECTION 7 — NEXT PROJECT */}
                <section className="py-32">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
                        <div>
                            <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-white/30 block mb-8">
                                Next Project
                            </span>
                            <Link
                                href={`/work/${nextProject.slug}`}
                                className="group inline-flex items-center gap-4 text-[clamp(32px,5vw,64px)] font-normal text-white hover:text-white/60 transition-all duration-300"
                            >
                                {nextProject.name}
                                <ArrowRight size={48} className="transform group-hover:translate-x-2 transition-transform duration-300" />
                            </Link>
                            <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-white/35 mt-4">
                                {nextProject.category}
                            </div>
                        </div>

                        <div className="flex flex-col items-start md:items-end text-left md:text-right">
                            <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-white/30 block mb-8">
                                Previous Project
                            </span>
                            <Link
                                href={`/work/${prevProject.slug}`}
                                className="group inline-flex items-center gap-4 text-2xl font-normal text-white/40 hover:text-white/70 transition-all duration-300"
                            >
                                <ArrowLeft size={20} className="transform group-hover:-translate-x-1 transition-transform duration-300" />
                                {prevProject.name}
                            </Link>
                            <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-white/20 mt-2">
                                {prevProject.category}
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </main>
    )
}
