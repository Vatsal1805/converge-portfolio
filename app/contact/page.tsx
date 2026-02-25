"use client";

import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ContactSignals } from "@/components/sections/contact/ContactSignals";
import { ContactForm } from "@/components/sections/contact/ContactForm";

/**
 * CONTACT PAGE
 * Refactored for maintainability.
 * Signals extracted to src/components/sections/contact/ContactSignals.tsx
 * Form extracted to src/components/sections/contact/ContactForm.tsx
 */
export default function ContactPage() {
    const controls = useAnimation();

    useEffect(() => {
        controls.start("visible");
    }, [controls]);

    return (
        <main className="min-h-screen bg-[#0c0c0b] text-white pt-[140px] pb-[120px] px-[clamp(24px,5vw,80px)]">
            <div className="max-w-[1200px] mx-auto">
                <div className="mb-16">
                    <Breadcrumb items={[
                        { label: 'Home', href: '/' },
                        { label: 'Start a Project' }
                    ]} />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-[80px]">
                    <ContactSignals controls={controls} />
                    <ContactForm />
                </div>
            </div>
        </main>
    );
}
