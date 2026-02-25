"use client";

import Link from "next/link";
import { motion } from "framer-motion";

/* ── Animation Variants ── */
const ease = [0.22, 1, 0.36, 1];
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

/* ══════════════════════════════════════
   CONTACT CTA SECTION
══════════════════════════════════════ */
export function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative w-full bg-[#0c0c0b] border-t border-white/[0.06] py-[120px] px-[clamp(24px,5vw,80px)] overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center">
        {/* Availability Label */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease, delay: 0 }}
          className="flex items-center gap-2.5 mb-10"
        >
          <div className="relative flex h-2 w-2">
            <div className="animate-[pulse_2s_ease-in-out_infinite] absolute inline-flex h-full w-full rounded-full bg-[#4ade80] opacity-75"></div>
            <div className="relative inline-flex rounded-full h-2 w-2 bg-[#4ade80]"></div>
          </div>
          <span className="text-[11px] font-mono font-medium tracking-[0.15em] uppercase text-white/45">
            Available For Projects
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease, delay: 0.08 }}
          className="text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-[-0.03em] leading-[1.1] text-white mb-6"
        >
          Have an idea worth building?
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease, delay: 0.16 }}
          className="text-base md:text-lg text-white/55 max-w-[480px] leading-[1.7] mb-12"
        >
          We scope, design, and ship — so your product is live, stable, and ready to grow.
        </motion.p>

        {/* CTA Button Container */}
        <div className="flex flex-col items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease, delay: 0.24 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-[#0B0F14] text-base font-bold rounded-full hover:bg-white/90 active:scale-[0.97] transition-all duration-200"
              style={{ paddingLeft: "32px", paddingRight: "32px" }}
            >
              Start a Project
            </Link>
          </motion.div>

          {/* Response Text */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease, delay: 0.32 }}
            className="text-[11px] font-mono uppercase tracking-[0.1em] text-white/20 mt-4 h-4"
          >
            We respond to every inquiry within 24 hours
          </motion.p>

          {/* Email Backup */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease, delay: 0.4 }}
            className="mt-4"
          >
            <p className="text-[14px] text-white/30 font-light">
              or reach us at{" "}
              <a
                href="mailto:contact@chillbion.com"
                className="text-white/30 hover:text-white/75 transition-colors duration-200 underline underline-offset-4 decoration-white/10"
              >
                contact@chillbion.com
              </a>
            </p>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { 
            opacity: 1; 
            transform: scale(1); 
          }
          50% { 
            opacity: 0.4; 
            transform: scale(1.6); 
          }
        }
      `}</style>
    </section>
  );
}
