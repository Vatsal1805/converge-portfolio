'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/#services' },
    { label: 'Work', href: '/work' },
    { label: 'Process', href: '/process' },
    { label: 'About', href: '/about' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const pathname = usePathname()

    // Scroll state — transparent → solid
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
            if (mobileMenuOpen) setMobileMenuOpen(false)
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [mobileMenuOpen])

    // Close menu on route change
    useEffect(() => {
        setMobileMenuOpen(false)
    }, [pathname])

    // Lock body scroll when menu open
    useEffect(() => {
        document.body.style.overflow = mobileMenuOpen ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [mobileMenuOpen])

    // Solid on non-homepage pages
    const isHomePage = pathname === '/'
    const solidNav = scrolled || !isHomePage

    return (
        <>
            {/* NAVBAR */}
            <header
                className="fixed top-0 left-0 right-0 z-50 
                   transition-all duration-400"
                style={{
                    background: solidNav
                        ? 'rgba(12,12,11,0.85)'
                        : 'transparent',
                    borderBottom: solidNav
                        ? '1px solid rgba(255,255,255,0.07)'
                        : '1px solid transparent',
                    backdropFilter: solidNav ? 'blur(12px)' : 'none',
                    WebkitBackdropFilter: solidNav ? 'blur(12px)' : 'none',
                    zIndex: 999,
                }}
            >
                <div
                    className="max-w-[1200px] mx-auto flex items-center 
                     justify-between"
                    style={{
                        padding: '0 clamp(24px, 5vw, 80px)',
                        height: '72px',
                    }}
                >
                    {/* LOGO */}
                    <Link
                        href="/"
                        className="text-[16px] font-bold tracking-tighter 
                       text-white hover:opacity-80 
                       transition-opacity z-50 relative"
                    >
                        CONVERGE
                    </Link>

                    {/* DESKTOP NAV — hidden below 768px */}
                    <nav className="hidden md:flex items-center gap-1 relative z-20 pointer-events-auto">
                        {navLinks.map(link => {
                            const isActive =
                                pathname !== '/' &&
                                link.href !== '/' &&
                                !link.href.startsWith('/#') &&
                                pathname.startsWith(link.href)

                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`relative cursor-pointer font-medium 
                             rounded-full transition-colors
                             text-[12px] px-3 py-2
                             lg:text-[14px] lg:px-4 lg:py-2
                             ${isActive
                                            ? 'text-white'
                                            : 'text-white/55 hover:text-white'
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            )
                        })}
                    </nav>

                    {/* DESKTOP CTA — hidden below 768px */}
                    <Link
                        href="/contact"
                        className="hidden md:inline-flex items-center 
                       whitespace-nowrap
                       bg-white text-[#0c0c0b] 
                       font-medium rounded-full
                       hover:bg-white/90 transition-colors
                       text-[12px] px-4 py-2
                       lg:text-[14px] lg:px-6 lg:py-2.5
                       relative z-10"
                    >
                        Start a Project
                    </Link>

                    {/* HAMBURGER — visible below 768px only */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                        className="md:hidden relative z-50 flex flex-col 
                       justify-center items-center 
                       w-10 h-10 gap-[5px]"
                    >
                        <span
                            className="block w-5 h-[1.5px] bg-white 
                         transition-all duration-300 origin-center"
                            style={{
                                transform: mobileMenuOpen
                                    ? 'rotate(45deg) translateY(6.5px)'
                                    : 'none',
                            }}
                        />
                        <span
                            className="block w-5 h-[1.5px] bg-white 
                         transition-all duration-300"
                            style={{ opacity: mobileMenuOpen ? 0 : 1 }}
                        />
                        <span
                            className="block w-5 h-[1.5px] bg-white 
                         transition-all duration-300 origin-center"
                            style={{
                                transform: mobileMenuOpen
                                    ? 'rotate(-45deg) translateY(-6.5px)'
                                    : 'none',
                            }}
                        />
                    </button>
                </div>
            </header>

            {/* MOBILE MENU OVERLAY — below 768px only */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 z-40 md:hidden flex flex-col"
                        style={{ background: '#0c0c0b', paddingTop: '72px' }}
                    >
                        <nav className="flex flex-col px-6 pt-6">

                            {/* Nav links */}
                            {navLinks.map((link, index) => {
                                const isActive =
                                    pathname !== '/' &&
                                    link.href !== '/' &&
                                    !link.href.startsWith('/#') &&
                                    pathname.startsWith(link.href)

                                return (
                                    <motion.div
                                        key={link.href}
                                        initial={{ opacity: 0, x: -16 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{
                                            delay: index * 0.06,
                                            duration: 0.4,
                                            ease: [0.22, 1, 0.36, 1],
                                        }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className={`flex items-center justify-between
                                 py-4 text-[28px] font-medium
                                 transition-colors
                                 ${isActive ? 'text-white' : 'text-white/70 hover:text-white'}`}
                                            style={{
                                                borderBottom: '1px solid rgba(255,255,255,0.07)',
                                            }}
                                        >
                                            {link.label}
                                            <span className="text-white/20 text-[20px]">→</span>
                                        </Link>
                                    </motion.div>
                                )
                            })}

                            {/* CTA Button */}
                            <motion.div
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.35, duration: 0.4 }}
                                className="mt-8"
                            >
                                <Link
                                    href="/contact"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="flex items-center justify-center
                             w-full py-4 rounded-full
                             bg-white text-[#0c0c0b]
                             text-[16px] font-medium
                             hover:bg-white/90 transition-colors"
                                >
                                    Start a Project
                                </Link>
                            </motion.div>

                            {/* Bottom info */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.42, duration: 0.4 }}
                                className="mt-12"
                            >
                                <p
                                    className="text-white/25 text-[11px] uppercase 
                             tracking-[0.15em]"
                                    style={{ fontFamily: 'monospace' }}
                                >
                                    Converge Digitals · Jharkhand, India
                                </p>
                            </motion.div>

                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
