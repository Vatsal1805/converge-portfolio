"use client";

import { PageWrapper } from "@/components/PageWrapper";
import { useIsMobile } from "@/lib/hooks/use-is-mobile";
import { AboutHero } from "@/components/sections/about/AboutHero";
import { AboutOrigin } from "@/components/sections/about/AboutOrigin";
import { AboutBeliefs } from "@/components/sections/about/AboutBeliefs";
import { AboutOperate } from "@/components/sections/about/AboutOperate";
import { AboutStats } from "@/components/sections/about/AboutStats";
import { AboutCTA } from "@/components/sections/about/AboutCTA";

const ease = [0.22, 1, 0.36, 1];

const getFadeUp = (delay = 0, isMobile = false) => ({
    initial: {
        opacity: isMobile ? 1 : 0,
        y: isMobile ? 0 : 24
    },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: {
        duration: isMobile ? 0 : 0.6,
        ease,
        delay: isMobile ? 0 : delay
    },
});

/**
 * ABOUT PAGE
 * Refactored for maintainability.
 * Sections extracted to src/components/sections/about/
 * Data extracted to src/data/about.ts
 */
export default function About() {
    const isMobile = useIsMobile();
    const fadeUp = (delay: number) => getFadeUp(delay, isMobile);

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
                "name": "About",
                "item": "https://convergedigital.com/about"
            }
        ]
    }

    return (
        <PageWrapper breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'About' }
        ]}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />

            <AboutHero fadeUp={fadeUp} />
            <AboutOrigin fadeUp={fadeUp} />
            <AboutBeliefs fadeUp={fadeUp} />
            <AboutOperate fadeUp={fadeUp} />
            <AboutStats fadeUp={fadeUp} />
            <AboutCTA fadeUp={fadeUp} />
        </PageWrapper>
    );
}
