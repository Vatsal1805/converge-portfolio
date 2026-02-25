"use client";

import Link from "next/link";

export function ProcessCTA() {
    return (
        <section className="relative w-full px-8 sm:px-10 md:px-12 lg:px-16 xl:px-20 py-14 sm:py-16 md:py-20 bg-[#0c0c0b] border-t border-white/[0.06]">
            <div className="max-w-[700px] mx-auto flex flex-col items-center text-center gap-8">
                <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-bold tracking-[-0.03em] leading-[1.1] text-white">
                    Let&apos;s build something structured and scalable.
                </h2>
                <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-7 sm:px-8 md:px-9 py-3 sm:py-3.5 md:py-4 bg-white text-[#0c0c0b] text-sm font-semibold rounded-md hover:opacity-85 transition-opacity duration-200"
                >
                    Start a Project
                </Link>
            </div>
        </section>
    );
}
