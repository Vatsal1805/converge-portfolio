"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { projects as PROJECTS } from "@/data/projects";

const featuredProjects = PROJECTS.filter(p => p.featured);

/* ── Animation Variants ── */
const ease = [0.22, 1, 0.36, 1];
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

/* ══════════════════════════════════════
   FEATURED PROJECTS SECTION
   ══════════════════════════════════════ */
export function CaseStudies() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 left, 1 right
  const total = featuredProjects.length;
  const project = featuredProjects[currentIndex];

  const goNext = () => {
    if (currentIndex < total - 1) {
      setDirection(1);
      setCurrentIndex((p) => p + 1);
    }
  };

  const goPrev = () => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex((p) => p - 1);
    }
  };

  const carouselVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 60 : -60,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -60 : 60,
      opacity: 0,
    }),
  };

  return (
    <section
      id="work"
      className="relative w-full bg-[#0c0c0b] border-t border-white/[0.06] py-[120px] px-[clamp(24px,5vw,80px)] overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Header Section */}
        <div className="flex items-start justify-between mb-12">
          <div className="flex flex-col gap-4">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease, delay: 0 }}
            >
              <span className="inline-block text-[11px] font-mono font-medium tracking-[0.15em] uppercase text-white/40 border border-white/[0.12] rounded-full px-4 py-1.5">
                Featured Projects
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease, delay: 0.08 }}
              className="text-[clamp(2rem,4vw,3.2rem)] font-bold leading-[1.08] tracking-[-0.03em] text-white"
            >
              Work that ships.
              <br />
              <span className="text-white">And holds.</span>
            </motion.h2>
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease, delay: 0.16 }}
            className="hidden md:block"
          >
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-[14px] text-white/40 hover:text-white/70 transition-colors duration-200 mt-2 shrink-0"
            >
              See all projects
              <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>

        {/* Project Card Container */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease, delay: 0.22 }}
          className="w-full"
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={project.slug}
              custom={direction}
              variants={carouselVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease }}
              className="relative overflow-hidden"
              style={{ borderRadius: "12px" }}
            >
              <Link
                href={`/work/${project.slug}`}
                className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] bg-[#161614] border border-white/[0.07] overflow-hidden group/card block"
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
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Slider Controls */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease, delay: 0.3 }}
          className="flex items-center justify-between mt-8"
        >
          <p className="text-[13px] font-mono tracking-[0.05em] text-white/30">
            <span className="text-white/70">{String(currentIndex + 1).padStart(2, "0")}</span>
            {" / "}
            {String(total).padStart(2, "0")}
          </p>

          <div className="flex items-center gap-3">
            <button
              onClick={() => goPrev()}
              disabled={currentIndex === 0}
              className="w-11 h-11 rounded-full border border-white/[0.12] bg-[#161614] flex items-center justify-center transition-all duration-200 hover:border-white/25 hover:bg-[#1c1c1a] disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ArrowLeft size={16} className="text-white/70" />
            </button>
            <button
              onClick={() => goNext()}
              disabled={currentIndex === total - 1}
              className="w-11 h-11 rounded-full border border-white/[0.12] bg-[#161614] flex items-center justify-center transition-all duration-200 hover:border-white/25 hover:bg-[#1c1c1a] disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ArrowRight size={16} className="text-white/70" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
