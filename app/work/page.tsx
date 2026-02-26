"use client";

import { Breadcrumb } from '@/components/Breadcrumb';
import { StickyScrollStack } from '@/components/work/StickyScrollStack';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

export default function WorkPage() {
    const controls = useAnimation();

    useEffect(() => {
        controls.start("visible");
    }, [controls]);

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
    };

    return (
        <main
            className="min-h-screen"
            style={{ background: '#0c0c0b' }}
        >
            {/* BREADCRUMB — constrained */}
            <div style={{
                paddingTop: '96px',
                paddingLeft: 'clamp(24px, 5vw, 80px)',
                paddingRight: 'clamp(24px, 5vw, 80px)',
                maxWidth: '1200px',
                margin: '0 auto',
            }}>
                <Breadcrumb items={[
                    { label: 'Home', href: '/' },
                    { label: 'Work' },
                ]} />
            </div>

            {/* PAGE HEADER — constrained */}
            <div style={{
                paddingTop: '48px',
                paddingBottom: '80px',
                paddingLeft: 'clamp(24px, 5vw, 80px)',
                paddingRight: 'clamp(24px, 5vw, 80px)',
                maxWidth: '1200px',
                margin: '0 auto',
                borderBottom: '1px solid rgba(255,255,255,0.07)',
            }}>
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

            {/* STICKY SCROLL STACK — full viewport width, zero constraints */}
            <StickyScrollStack />

            {/* CTA SECTION */}
            <div className="relative z-10 bg-[#0c0c0b]">
                <FinalCTA />
            </div>
        </main>
    );
}

