"use client";

import { motion } from "framer-motion";
import { Service } from "@/data/services";

interface ServiceCardProps {
    service: Service;
    index: number;
    isMobile: boolean;
    fadeUp: any;
    ease: number[];
}

export function ServiceCard({ service, index, isMobile, fadeUp, ease }: ServiceCardProps) {
    return (
        <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{
                duration: isMobile ? 0 : 0.6,
                ease,
                delay: isMobile ? 0 : 0.22 + index * 0.08
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
