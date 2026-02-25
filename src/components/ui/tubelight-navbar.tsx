"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
    name: string
    url: string
    icon: LucideIcon
}

interface NavBarProps {
    items: NavItem[]
    className?: string
}

export function NavBar({ items, className }: NavBarProps) {
    const pathname = usePathname()
    const router = useRouter()
    const [activeTab, setActiveTab] = useState(items[0].name)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll, { passive: true })
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    useEffect(() => {
        // Simplified matching for Next.js - doesn't easily handle hashes in pathname hook
        // but we can check if url matches the current pathname or starts with /#
        const currentItem = items.find((item) => {
            if (item.url === pathname) return true
            if (item.url.startsWith('/#') && pathname === '/') return true
            return false
        })
        if (currentItem) {
            setActiveTab(currentItem.name)
        }
    }, [pathname, items])

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.startsWith('/#')) {
            e.preventDefault()
            const id = href.replace('/#', '')
            if (pathname === '/') {
                // Already on homepage — just scroll
                document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
            } else {
                // On different page — navigate to homepage then scroll
                router.push(href)
            }
        }
    }

    return (
        <div
            className={cn(
                "fixed top-0 left-1/2 -translate-x-1/2 z-50 pt-1 px-4 w-full flex justify-center pointer-events-none",
                className
            )}
        >
            <nav
                className={cn(
                    "flex items-center gap-2 md:gap-8 px-4 md:px-10 py-3 md:py-4 rounded-full transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] pointer-events-auto",
                    (scrolled || pathname !== '/')
                        ? "bg-[#0c0c0b]/85 border border-white/[0.07] backdrop-blur-xl shadow-2xl"
                        : "bg-transparent border border-transparent backdrop-blur-none"
                )}
            >
                {items.map((item) => {
                    const Icon = item.icon
                    const isActive = activeTab === item.name
                    return (
                        <Link
                            key={item.name}
                            href={item.url}
                            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleNavClick(e, item.url)}
                            onMouseEnter={() => setActiveTab(item.name)}
                            className={cn(
                                "relative cursor-pointer text-[14px] font-medium px-4 py-2 rounded-full transition-colors duration-200",
                                isActive ? "text-white" : "text-white/45 hover:text-white/80",
                            )}
                        >
                            {/* Desktop: label */}
                            <span className="hidden md:inline relative z-10">{item.name}</span>

                            {/* Mobile: icon */}
                            <span className="md:hidden relative z-10">
                                <Icon size={18} strokeWidth={2} />
                            </span>

                            {/* Animated active pill + tubelight glow */}
                            {isActive && (
                                <motion.div
                                    layoutId="nav-active"
                                    className="absolute inset-0 bg-white/[0.09] rounded-full -z-10"
                                    initial={false}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                >
                                    {/* Tubelight bar above active item */}
                                    <div className="absolute -top-[5px] md:-top-[9px] left-1/2 -translate-x-1/2 w-8 h-[3px] bg-white rounded-t-full">
                                        <div className="absolute w-12 h-6 bg-white/20 rounded-full blur-md -top-2 -left-2" />
                                        <div className="absolute w-8 h-6 bg-white/20 rounded-full blur-md -top-1" />
                                        <div className="absolute w-4 h-4 bg-white/20 rounded-full blur-sm top-0 left-2" />
                                    </div>
                                </motion.div>
                            )}
                        </Link>
                    )
                })}

                {/* Divider */}
                <div className="hidden md:block w-px h-4 bg-white/[0.12] mx-2" />

                {/* CTA */}
                <Link
                    href="/#contact"
                    onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleNavClick(e, "/#contact")}
                    className="hidden md:inline-flex items-center px-6 py-2.5 bg-white text-[#0B0F14] text-[14px] font-bold rounded-full hover:bg-white/90 transition-colors active:scale-[0.97]"
                >
                    Start a Project
                </Link>
            </nav>
        </div>
    )
}
