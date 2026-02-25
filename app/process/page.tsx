"use client";

import { Breadcrumb } from "@/components/Breadcrumb";
import { useIsMobile } from "@/lib/hooks/use-is-mobile";
import { ProcessHero } from "@/components/sections/process/ProcessHero";
import { ProcessSteps } from "@/components/sections/process/ProcessSteps";
import { ProcessReinforcement } from "@/components/sections/process/ProcessReinforcement";
import { ProcessCTA } from "@/components/sections/process/ProcessCTA";

/**
 * PROCESS PAGE
 * Refactored for maintainability.
 * Sections extracted to src/components/sections/process/
 * Data extracted to src/data/process.ts
 */
export default function Process() {
    const isMobile = useIsMobile();

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://convergedigital.com"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Process",
                "item": "https://convergedigital.com/process"
            }
        ]
    }

    return (
        <div className="relative w-full flex flex-col bg-[#0c0c0b]">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            {/* Fixed gradient mask — hides content as it scrolls behind the navbar */}
            <div
                className="fixed top-0 left-0 right-0 z-40 pointer-events-none"
                style={{
                    height: "6.5rem",
                    background: "linear-gradient(to bottom, #0c0c0b 0%, #0c0c0b 70%, transparent 100%)",
                }}
            />

            {/* BREADCRUMBS */}
            <div className="pt-32 max-w-[1200px] px-[clamp(24px,5vw,80px)] relative z-50">
                <Breadcrumb items={[
                    { label: 'Home', href: '/' },
                    { label: 'Process' }
                ]} />
            </div>

            <ProcessHero isMobile={isMobile} />
            <ProcessSteps />
            <ProcessReinforcement />
            <ProcessCTA />
        </div>
    );
}
