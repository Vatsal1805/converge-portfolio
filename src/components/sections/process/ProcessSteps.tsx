"use client";

import StickyTabs from "@/components/ui/sticky-section-tabs";
import { PROCESS_STEPS } from "@/data/process";

export function ProcessSteps() {
    return (
        <StickyTabs
            mainNavHeight="5.5rem"
            rootClassName="bg-[#0c0c0b] text-white"
            navSpacerClassName="border-b border-white/[0.06] bg-[#0c0c0b]"
            sectionClassName="bg-[#0c0c0b]"
            stickyHeaderContainerClassName=""
            headerContentWrapperClassName="border-b border-t border-white/[0.06] bg-[#0c0c0b]"
            headerContentLayoutClassName="mx-auto max-w-[1000px] px-8 sm:px-10 md:px-12 lg:px-16 xl:px-20 py-5 sm:py-6"
            titleClassName="my-0 text-xl sm:text-2xl md:text-3xl font-semibold leading-none tracking-[-0.02em] text-white flex items-center gap-4 sm:gap-5"
            contentLayoutClassName="mx-auto max-w-[800px] px-8 sm:px-10 md:px-12 lg:px-16 xl:px-20 py-8 sm:py-10 md:py-12"
        >
            {PROCESS_STEPS.map((step) => (
                <StickyTabs.Item
                    key={step.id}
                    id={step.id}
                    title={
                        <>
                            <span className="text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] font-bold leading-none tracking-[-0.04em] text-white/30 select-none shrink-0">
                                {step.num}
                            </span>
                            <span>{step.title}</span>
                        </>
                    }
                >
                    <div className="flex flex-col gap-4">
                        <p className="text-sm sm:text-base text-white/65 leading-[1.8]">
                            {step.description}
                        </p>
                        <ul className="flex flex-col gap-4">
                            {step.items.map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <span className="text-white/40 text-sm mt-1">—</span>
                                    <span className="text-white/70 text-sm sm:text-base leading-[1.7]">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                        <div className="pt-5 mt-6 border-t border-white/[0.07]">
                            <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-white/35 mb-2">
                                CLIENT — {step.clientRequirement}
                            </p>
                            <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-white/35">
                                DELIVERABLE — {step.deliverable}
                            </p>
                        </div>
                    </div>
                </StickyTabs.Item>
            ))}
        </StickyTabs>
    );
}
