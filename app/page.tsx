import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Process as ProcessPreview } from "@/components/sections/Process";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { FinalCTA as ContactCTA } from "@/components/sections/FinalCTA";

export default function Home() {
    return (
        <div className="w-full bg-[#0c0c0b] selection:bg-white selection:text-black">
            <Hero />
            <Services />
            <ProcessPreview />
            <CaseStudies />
            <ContactCTA />
        </div>
    );
}
