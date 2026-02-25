"use client";

import { motion } from "framer-motion";
import { useIsMobile } from "@/lib/hooks/use-is-mobile";
import { SERVICES, PHILOSOPHY } from "@/data/services";
import { ServiceCard } from "./services/ServiceCard";

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
   SERVICES SECTION
   Refactored for maintainability.
   Data extracted to src/data/services.ts
   Cards extracted to src/components/sections/services/ServiceCard.tsx
   ══════════════════════════════════════ */
export function Services() {
  const isMobile = useIsMobile();
  const fadeUp = getFadeUp(isMobile);

  return (
    <section
      id="services"
      className="relative w-full bg-[#0c0c0b] border-t border-white/[0.06] pt-[120px] pb-[120px] px-[clamp(24px,5vw,80px)] overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          {/* Eyebrow */}
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
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-px w-8 bg-white/20" />
            <span className="text-[11px] font-mono font-medium tracking-[0.2em] uppercase text-white/45">
              What We Do
            </span>
            <div className="h-px w-8 bg-white/20" />
          </motion.div>

          {/* Headline */}
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
            className="text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-[-0.03em] leading-[1.08] text-white max-w-[800px] mx-auto"
          >
            Built for teams. Engineered for scale.
          </motion.h2>

          {/* Subtitle */}
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
            className="text-[17px] font-light leading-relaxed text-white/55 mt-6 max-w-[600px] mx-auto"
          >
            We design and engineer digital products built to grow with your business.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] mb-16 md:mb-[64px]">
          {SERVICES.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              isMobile={isMobile}
              fadeUp={fadeUp}
              ease={ease}
            />
          ))}
        </div>

        {/* Philosophy Block - Divider Line */}
        <div className="w-full border-t border-white/[0.07]" />

        {/* Philosophy Block Content */}
        <div className="max-w-[760px] mx-auto pt-12 md:pt-[72px] text-left">
          {/* Eyebrow label */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: isMobile ? 0 : 0.6,
              ease,
              delay: isMobile ? 0 : 0.1
            }}
            className="mb-8"
          >
            <h4 className="font-mono text-[11px] font-medium tracking-[0.15em] uppercase text-white/35">
              How We Think
            </h4>
          </motion.div>

          {/* Paragraphs */}
          <div className="flex flex-col gap-6 md:gap-[28px]">
            {PHILOSOPHY.map((text, i) => (
              <motion.p
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: isMobile ? 0 : 0.6,
                  ease,
                  delay: isMobile ? 0 : 0.2 + i * 0.1
                }}
                className="text-[16px] md:text-[18px] text-white/65 font-light leading-[1.85]"
              >
                {text}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
