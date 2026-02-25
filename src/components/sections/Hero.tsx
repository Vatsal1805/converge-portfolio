"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { GLSLHills } from "@/components/ui/glsl-hills";

/* ── Animation helper ── */
const ease = [0.22, 1, 0.36, 1];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.6,
    delay,
    ease,
  },
});

export function Hero() {
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const heroY = useTransform(scrollY, [0, 400], [0, -60]);

  return (
    <section
      id="hero"
      className="relative w-full h-screen min-h-[700px] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* GLSL canvas — absolute fill, sits behind everything */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <GLSLHills speed={0.35} cameraZ={125} planeSize={256} />
      </div>

      {/* Bottom gradient fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-60 bg-gradient-to-b from-transparent to-[#0c0c0b] z-10 pointer-events-none" />

      {/* Content — parallax shift on scroll */}
      <motion.div
        style={{ opacity: heroOpacity, y: heroY }}
        className="relative z-20 flex flex-col items-center text-center px-6 w-full max-w-[860px] mx-auto"
      >
        <motion.h1
          className="text-[clamp(3rem,6.5vw,5.5rem)] font-bold leading-[1.04] tracking-[-0.035em] text-white mb-7 w-full"
          {...fadeUp(0.1)}
        >
          We Build Web Products
          <br />
          That Scale.
        </motion.h1>

        <motion.p
          className="text-[17px] md:text-lg text-white/60 leading-[1.75] max-w-[480px] mb-14"
          {...fadeUp(0.24)}
        >
          From MVP to full-scale platforms, we design and engineer reliable web
          applications for modern startups.
        </motion.p>

        <motion.div
          className="flex items-center justify-center gap-8 flex-wrap"
          {...fadeUp(0.38)}
        >
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3 bg-white text-[#0B0F14] text-base font-semibold rounded-lg hover:opacity-90 active:scale-[0.97] transition-all duration-200"
          >
            Start a Project
          </Link>
          <Link
            href="/#work"
            className="inline-flex items-center px-8 py-3 bg-transparent text-white text-base font-semibold rounded-lg border border-white/20 hover:border-white/40 hover:bg-white/[0.05] transition-all duration-200"
          >
            View Work →
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
