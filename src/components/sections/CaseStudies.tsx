"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { projects as PROJECTS } from "@/data/projects";
import { useIsMobile } from "@/lib/hooks/use-is-mobile";
import { CaseStudyCard } from "@/components/sections/casestudies/CaseStudyCard";

const featuredProjects = PROJECTS.filter(p => p.featured);

/* ── Animation Variants ── */
const ease = [0.22, 1, 0.36, 1];
const getFadeUp = (isMobile = false) => ({
  hidden: {
    opacity: isMobile ? 1 : 0,
    y: isMobile ? 0 : 24
  },
  visible: {
    opacity: 1,
    y: 0
  },
});

/* ══════════════════════════════════════
   FEATURED PROJECTS SECTION
   ══════════════════════════════════════ */
export function CaseStudies() {
  const isMobile = useIsMobile();
  const fadeUp = getFadeUp(isMobile);
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
              transition={{
                duration: isMobile ? 0 : 0.6,
                ease,
                delay: isMobile ? 0 : 0.08
              }}
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
            transition={{
              duration: isMobile ? 0 : 0.6,
              ease,
              delay: isMobile ? 0 : 0.16
            }}
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
          transition={{
            duration: isMobile ? 0 : 0.6,
            ease,
            delay: isMobile ? 0 : 0.22
          }}
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
              transition={{ duration: isMobile ? 0 : 0.35, ease }}
              className="relative overflow-hidden"
            >
              <CaseStudyCard project={project} />
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Slider Controls */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: isMobile ? 0 : 0.6,
            ease,
            delay: isMobile ? 0 : 0.3
          }}
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
