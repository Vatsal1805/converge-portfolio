"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function ProcessHero({ isMobile }: { isMobile: boolean }) {
    const heroRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (heroRef.current) {
            gsap.fromTo(
                heroRef.current,
                { opacity: isMobile ? 1 : 0, y: isMobile ? 0 : 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: isMobile ? 0 : 0.8,
                    ease: "power2.out"
                },
            );
        }
    }, [isMobile]);

    return (
        <section className="relative w-full pt-10 px-8 sm:px-10 md:px-12 lg:px-16 xl:px-20 pb-2 sm:pb-4 md:pb-6 bg-[#0c0c0b]">
            <div
                ref={heroRef}
                className="max-w-[1000px] mx-auto flex flex-col "
            >
                <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-[-0.03em] leading-[1.1] text-white">
                    Our Process
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-white/60 leading-[1.7] max-w-[700px]">
                    We follow a structured, scalable approach — designed to reduce
                    uncertainty, eliminate friction, and build systems that evolve with
                    your vision.
                </p>
            </div>
        </section>
    );
}
