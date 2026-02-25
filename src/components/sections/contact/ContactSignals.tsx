"use client";

import { motion, AnimationControls } from "framer-motion";
import { Clock, Shield, Calendar } from "lucide-react";

const ease = [0.22, 1, 0.36, 1];

const getFadeUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay, ease }
    },
});

const TrustCard = ({
    icon: Icon,
    label,
    text,
    delay
}: {
    icon: any,
    label: string,
    text: string,
    delay: number
}) => (
    <motion.div
        variants={getFadeUp(delay)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="flex items-start gap-4 p-6 bg-[#161614] border border-white/[0.07] rounded-[12px]"
    >
        <div className="flex-shrink-0 mt-1">
            <Icon className="w-5 h-5 text-white/40" />
        </div>
        <div>
            <p className="font-mono text-[10px] tracking-[0.1em] text-white/30 uppercase mb-1">
                {label}
            </p>
            <p className="text-sm text-white/55 font-light leading-relaxed">
                {text}
            </p>
        </div>
    </motion.div>
);

export function ContactSignals({ controls }: { controls: AnimationControls }) {
    return (
        <div className="flex flex-col">
            <motion.p
                variants={getFadeUp(0)}
                initial="hidden"
                animate={controls}
                className="font-mono text-[11px] uppercase tracking-[0.15em] text-white/35 mb-6"
            >
                START A PROJECT
            </motion.p>
            <motion.h1
                variants={getFadeUp(0.08)}
                initial="hidden"
                animate={controls}
                className="text-[clamp(36px,5vw,64px)] font-medium leading-[1.1] tracking-[-0.02em] mb-6"
            >
                Tell us what<br />you&apos;re building.
            </motion.h1>
            <motion.p
                variants={getFadeUp(0.16)}
                initial="hidden"
                animate={controls}
                className="text-[16px] text-white/55 font-light leading-[1.8] mb-12 max-w-[500px]"
            >
                We take on a small number of projects at a time. Every inquiry is reviewed personally — if your project is a good fit, we&apos;ll be in touch within 24 hours to schedule a call.
            </motion.p>

            <div className="flex flex-col gap-5 mb-10">
                <TrustCard
                    icon={Clock}
                    label="RESPONSE TIME"
                    text="We reply to every inquiry within 24 hours."
                    delay={0.22}
                />
                <TrustCard
                    icon={Shield}
                    label="CONFIDENTIAL"
                    text="Your project details are never shared."
                    delay={0.30}
                />
                <TrustCard
                    icon={Calendar}
                    label="NEXT STEP"
                    text="A 15-minute intro call — no commitment."
                    delay={0.38}
                />
            </div>

            <motion.div
                variants={getFadeUp(0.44)}
                initial="hidden"
                animate={controls}
                className="flex items-center gap-3"
            >
                <div className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </div>
                <span className="font-mono text-[11px] tracking-[0.05em] text-white/40 uppercase">
                    Currently accepting new projects
                </span>
            </motion.div>
        </div>
    );
}
