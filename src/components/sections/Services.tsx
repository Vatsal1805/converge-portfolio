"use client";

import { motion } from "framer-motion";

/* ── Service data ── */
interface Service {
  id: string;
  num: string;
  heading: string;
  description: string;
  outcome: string;
}

const SERVICES: Service[] = [
  {
    id: "s1",
    num: "01",
    heading: "From Zero to Funded",
    description: "We take your idea from a blank page to a working, investable product. Every MVP we build is architected to scale — not thrown together to ship fast and rewrite later.",
    outcome: "OUTCOME — LAUNCH-READY PRODUCT BUILT TO GROW",
  },
  {
    id: "s2",
    num: "02",
    heading: "Scalable Web Applications",
    description: "We engineer web applications that handle growth without breaking. Clean architecture, maintainable codebase, and performance built in from day one — not bolted on when it's too late.",
    outcome: "OUTCOME — SYSTEMS THAT SCALE WITH YOUR BUSINESS",
  },
  {
    id: "s3",
    num: "03",
    heading: "UI & Product Design",
    description: "We design interfaces that are intuitive for users and maintainable for your team. Every component is built inside a design system — so your product stays consistent as it grows.",
    outcome: "OUTCOME — DESIGN YOUR TEAM CAN OWN AND OPERATE",
  },
  {
    id: "s4",
    num: "04",
    heading: "Product Strategy & Management",
    description: "We help you make the right decisions before writing a single line of code. Roadmap, prioritization, technical planning — so your team builds what matters and skips what doesn't.",
    outcome: "OUTCOME — CLARITY AND DIRECTION FROM DAY ONE",
  },
];

/* ── Animation Variants ── */
const ease = [0.22, 1, 0.36, 1];
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

/* ══════════════════════════════════════
   SERVICES SECTION
══════════════════════════════════════ */
export function Services() {
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
            transition={{ duration: 0.6, ease, delay: 0 }}
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
            transition={{ duration: 0.6, ease, delay: 0.08 }}
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
            transition={{ duration: 0.6, ease, delay: 0.16 }}
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
            transition={{ duration: 0.6, ease, delay: 0.1 }}
            className="mb-8"
          >
            <h4 className="font-mono text-[11px] font-medium tracking-[0.15em] uppercase text-white/35">
              How We Think
            </h4>
          </motion.div>

          {/* Paragraphs */}
          <div className="flex flex-col gap-6 md:gap-[28px]">
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease, delay: 0.2 }}
              className="text-[16px] md:text-[18px] text-white/65 font-light leading-[1.85]"
            >
              We don&apos;t start with design. We start with the problem. Before any wireframe or line of code, we map your users, your constraints, and your business model into a technical plan that every decision flows from.
            </motion.p>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease, delay: 0.3 }}
              className="text-[16px] md:text-[18px] text-white/65 font-light leading-[1.85]"
            >
              We build for the version of your product that exists two years from now — not just the one shipping next month. That means clean architecture, documented decisions, and systems your team can operate without us.
            </motion.p>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease, delay: 0.4 }}
              className="text-[16px] md:text-[18px] text-white/65 font-light leading-[1.85]"
            >
              We take on a small number of projects at a time. Not because we have to — because the work demands it. Every client gets a team that is fully present, not spread across twelve other engagements.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        ease,
        delay: 0.22 + index * 0.08
      }}
      className="group relative flex flex-col bg-[#161614] p-6 sm:p-10 rounded-[12px] border border-white/[0.07] transition-all duration-[250ms] ease-out hover:border-white/[0.18] hover:bg-white/[0.02]"
    >
      {/* Service label */}
      <div className="flex items-center gap-3">
        <p className="font-mono text-[11px] font-medium tracking-[0.15em] uppercase text-white/35">
          SERVICE {service.num}
        </p>
        <div className="h-px w-8 bg-white/10" />
      </div>

      {/* Heading */}
      <h3 className="text-xl md:text-2xl font-semibold tracking-[-0.02em] text-white mt-4">
        {service.heading}
      </h3>

      {/* Description */}
      <p className="text-[14px] leading-[1.75] text-white/60 font-light mt-3 max-w-[340px]">
        {service.description}
      </p>

      {/* Outcome line */}
      <div className="mt-auto pt-6 border-t border-white/[0.07]">
        <p className="font-mono text-[11px] font-medium tracking-[0.15em] uppercase text-white/35">
          {service.outcome}
        </p>
      </div>
    </motion.div>
  );
}
