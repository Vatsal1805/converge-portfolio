"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useIsMobile } from "@/lib/hooks/use-is-mobile";

/* ── Process steps data ── */
const steps = [
  {
    num: "01",
    label: "Discovery & Alignment",
    desc: "PHASE 01 ——\n\nWe start by understanding your business, users, and goals before anything else. No assumptions, no shortcuts — just clarity on what we're building and why.",
    deliverable: "DELIVERABLE — PROJECT BRIEF AND DEFINED SCOPE",
  },
  {
    num: "02",
    label: "Strategy & Architecture",
    desc: "PHASE 02 ——\n\nWe define the technical roadmap, system architecture, and execution plan. Every decision at this stage exists to support scalability and reduce risk downstream.",
    deliverable: "DELIVERABLE — TECHNICAL ROADMAP AND EXECUTION PLAN",
  },
  {
    num: "03",
    label: "Design & Build",
    desc: "PHASE 03 ——\n\nWe design with intention and engineer with precision. Clean code, scalable systems, and a product that works exactly the way it was planned — no surprises at handoff.",
    deliverable: "DELIVERABLE — SHIPPED PRODUCT WITH DOCUMENTED CODEBASE",
  },
  {
    num: "04",
    label: "Launch & Ownership",
    desc: "PHASE 04 ——\n\nWe deploy, test, and hand over a product your team can fully own and operate. We don't disappear at launch — we make sure you're in control before we step back.",
    deliverable: "DELIVERABLE — DEPLOYED PRODUCT AND COMPLETE HANDOFF",
  },
];

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
   PROCESS PREVIEW SECTION
══════════════════════════════════════ */
export function Process() {
  const isMobile = useIsMobile();
  const fadeUp = getFadeUp(isMobile);
  return (
    <section
      id="process"
      className="relative w-full bg-[#0c0c0b] border-t border-white/[0.06] py-[120px] px-[clamp(24px,5vw,80px)] overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Header Section */}
        <div className="flex flex-col gap-4 mb-16 md:mb-20">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: isMobile ? 0 : 0.6,
              ease,
              delay: 0
            }}
          >
            <span className="text-[11px] font-mono font-medium tracking-[0.2em] uppercase text-white/45">
              How We Work
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
            className="text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-[-0.03em] leading-[1.1] text-white"
          >
            Structured to reduce uncertainty.
            <br />
            Built to scale.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: isMobile ? 0 : 0.6,
              ease,
              delay: isMobile ? 0 : 0.16
            }}
            className="text-white/45 leading-[1.7] max-w-[640px]"
          >
            Our process is designed to eliminate the guesswork from product development.
          </motion.p>
        </div>

        {/* Process Grid */}
        <div className="relative">
          {/* Rules */}
          <div className="hidden lg:block absolute left-[40px] right-[40px] top-1/2 h-px bg-white/[0.07]" style={{ transform: "translateY(-0.5px)" }} />
          <div className="hidden lg:block absolute top-[40px] bottom-[40px] left-1/2 w-px bg-white/[0.07]" style={{ transform: "translateX(-0.5px)" }} />

          <div className="grid grid-cols-1 lg:grid-cols-2">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: isMobile ? 0 : 0.6,
                  ease,
                  delay: isMobile ? 0 : 0.22 + i * 0.08
                }}
                className="relative px-8 lg:px-10 py-10"
              >
                <div className="flex items-start gap-5 md:gap-6">
                  <span className="text-[4rem] sm:text-[4.5rem] md:text-[5rem] font-bold leading-none tracking-[-0.04em] text-white/[0.06] select-none flex-shrink-0">
                    {step.num}
                  </span>
                  <div className="pt-2 flex-1">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold tracking-[-0.02em] text-white mb-6">
                      {step.label}
                    </h3>
                    <p className="text-sm text-white/50 leading-[1.8] whitespace-pre-line mb-4">
                      {step.desc}
                    </p>
                    <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-white/40 leading-[1.6]">
                      {step.deliverable}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Link */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: isMobile ? 0 : 0.6,
            ease,
            delay: isMobile ? 0 : 0.54
          }}
          className="mt-16 text-center"
        >
          <Link
            href="/process"
            className="group inline-flex items-center gap-2 text-[14px] font-mono font-medium tracking-wide text-white/70 hover:text-white transition-all duration-200"
          >
            Explore our full process
            <span className="transform group-hover:translate-x-1 transition-transform duration-200">
              →
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
