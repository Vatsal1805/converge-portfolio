"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Home, Layers, Briefcase, Workflow, Users } from "lucide-react";
import { NavBar } from "@/components/ui/tubelight-navbar";

const NAV_ITEMS = [
    { name: "Home", url: "/#hero", icon: Home },
    { name: "Services", url: "/#services", icon: Layers },
    { name: "Work", url: "/work", icon: Briefcase },
    { name: "Process", url: "/process", icon: Workflow },
    { name: "About", url: "/about", icon: Users },
];

export default function Navbar() {
    const pathname = usePathname();
    const router = useRouter();

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.startsWith('/#')) {
            e.preventDefault();
            const id = href.replace('/#', '');
            if (pathname === '/') {
                // Already on homepage — just scroll
                document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
            } else {
                // On different page — navigate to homepage then scroll
                router.push(href);
            }
        }
    };

    return (
        <div className="fixed top-0 left-0 right-0 z-[100]">
            <NavBar items={NAV_ITEMS} />
            <div className="absolute top-6 left-8 z-50">
                <Link
                    href="/"
                    onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleNavClick(e, "/#hero")}
                    className="text-lg font-bold tracking-tighter text-white hover:opacity-80 transition-opacity"
                >
                    CONVERGE
                </Link>
            </div>
        </div>
    );
}
