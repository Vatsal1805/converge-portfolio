"use client"

import * as React from "react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { SquareArrowOutUpRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"

export type CardStackItem = {
    id: string | number
    title: string
    description?: string
    imageSrc?: string
    href?: string
    ctaLabel?: string
    tag?: string
}

export type CardStackProps<T extends CardStackItem> = {
    items: T[]
    initialIndex?: number
    maxVisible?: number
    cardWidth?: number
    cardHeight?: number
    overlap?: number
    spreadDeg?: number
    perspectivePx?: number
    depthPx?: number
    tiltXDeg?: number
    activeLiftPx?: number
    activeScale?: number
    inactiveScale?: number
    springStiffness?: number
    springDamping?: number
    loop?: boolean
    autoAdvance?: boolean
    intervalMs?: number
    pauseOnHover?: boolean
    showDots?: boolean
    className?: string
    onChangeIndex?: (index: number, item: T) => void
    renderCard?: (item: T, state: { active: boolean }) => React.ReactNode
}

function wrapIndex(n: number, len: number) {
    if (len <= 0) return 0
    return ((n % len) + len) % len
}

function signedOffset(i: number, active: number, len: number, loop: boolean) {
    const raw = i - active
    if (!loop || len <= 1) return raw
    const alt = raw > 0 ? raw - len : raw + len
    return Math.abs(alt) < Math.abs(raw) ? alt : raw
}

export function CardStack<T extends CardStackItem>({
    items,
    initialIndex = 0,
    maxVisible = 7,
    cardWidth = 520,
    cardHeight = 340,
    overlap = 0.58,
    spreadDeg = 36,
    perspectivePx = 1100,
    depthPx = 110,
    tiltXDeg = 8,
    activeLiftPx = 22,
    activeScale = 1.03,
    inactiveScale = 0.94,
    springStiffness = 280,
    springDamping = 28,
    loop = true,
    autoAdvance = false,
    intervalMs = 2800,
    pauseOnHover = true,
    showDots = true,
    className,
    onChangeIndex,
    renderCard,
}: CardStackProps<T>) {
    const reduceMotion = useReducedMotion()
    const len = items.length

    const [active, setActive] = React.useState(() => wrapIndex(initialIndex, len))
    const [hovering, setHovering] = React.useState(false)

    React.useEffect(() => {
        setActive(a => wrapIndex(a, len))
    }, [len])

    React.useEffect(() => {
        if (!len) return
        onChangeIndex?.(active, items[active]!)
    }, [active])

    const maxOffset = Math.max(0, Math.floor(maxVisible / 2))
    const cardSpacing = Math.max(10, Math.round(cardWidth * (1 - overlap)))
    const stepDeg = maxOffset > 0 ? spreadDeg / maxOffset : 0

    const canGoPrev = loop || active > 0
    const canGoNext = loop || active < len - 1

    const prev = React.useCallback(() => {
        if (!len || !canGoPrev) return
        setActive(a => wrapIndex(a - 1, len))
    }, [canGoPrev, len])

    const next = React.useCallback(() => {
        if (!len || !canGoNext) return
        setActive(a => wrapIndex(a + 1, len))
    }, [canGoNext, len])

    const onKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "ArrowLeft") prev()
        if (e.key === "ArrowRight") next()
    }

    React.useEffect(() => {
        if (!autoAdvance || reduceMotion || !len) return
        if (pauseOnHover && hovering) return

        const id = window.setInterval(() => {
            if (loop || active < len - 1) next()
        }, Math.max(700, intervalMs))

        return () => window.clearInterval(id)
    }, [autoAdvance, intervalMs, hovering, pauseOnHover, reduceMotion, len, loop, active, next])

    if (!len) return null

    const activeItem = items[active]!

    return (
        <div
            className={cn("w-full", className)}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
        >
            {/* Stage */}
            <div
                className="relative w-full"
                style={{ height: cardHeight + 80 }}
                tabIndex={0}
                onKeyDown={onKeyDown}
            >
                {/* Ambient spotlight */}
                <div className="pointer-events-none absolute inset-x-0 top-6 mx-auto h-48 w-[60%] rounded-full bg-white/[0.03] blur-3xl" aria-hidden="true" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 mx-auto h-40 w-[70%] rounded-full bg-black/30 blur-3xl" aria-hidden="true" />

                <div
                    className="absolute inset-0 flex items-end justify-center"
                    style={{ perspective: `${perspectivePx}px` }}
                >
                    <AnimatePresence initial={false}>
                        {items.map((item, i) => {
                            const off = signedOffset(i, active, len, loop)
                            const abs = Math.abs(off)
                            const visible = abs <= maxOffset
                            if (!visible) return null

                            const rotateZ = off * stepDeg
                            const x = off * cardSpacing
                            const y = abs * 6
                            const z = -abs * depthPx
                            const isActive = off === 0
                            const scale = isActive ? activeScale : inactiveScale
                            const lift = isActive ? -activeLiftPx : 0
                            const rotateX = isActive ? 0 : tiltXDeg
                            const zIndex = 100 - abs

                            const dragProps = isActive ? {
                                drag: "x" as const,
                                dragConstraints: { left: 0, right: 0 },
                                dragElastic: 0.18,
                                onDragEnd: (_e: unknown, info: { offset: { x: number }; velocity: { x: number } }) => {
                                    if (reduceMotion) return
                                    const travel = info.offset.x
                                    const v = info.velocity.x
                                    const threshold = Math.min(160, cardWidth * 0.22)
                                    if (travel > threshold || v > 650) prev()
                                    else if (travel < -threshold || v < -650) next()
                                },
                            } : {}

                            return (
                                <motion.div
                                    key={item.id}
                                    className={cn(
                                        "absolute bottom-0 rounded-2xl overflow-hidden shadow-2xl will-change-transform select-none",
                                        "border border-white/[0.08]",
                                        isActive ? "cursor-grab active:cursor-grabbing" : "cursor-pointer",
                                    )}
                                    style={{
                                        width: cardWidth,
                                        height: cardHeight,
                                        // left: 50% + negative margin = reliable centering with framer-motion x transforms
                                        left: '50%',
                                        marginLeft: -cardWidth / 2,
                                        zIndex,
                                        transformStyle: "preserve-3d",
                                    }}
                                    initial={reduceMotion ? false : { opacity: 0, y: y + 40, x, rotateZ, rotateX, scale }}
                                    animate={{ opacity: 1, x, y: y + lift, rotateZ, rotateX, scale }}
                                    transition={{ type: "spring", stiffness: springStiffness, damping: springDamping }}
                                    onClick={() => setActive(i)}
                                    {...dragProps}
                                >
                                    <div
                                        className="h-full w-full"
                                        style={{ transform: `translateZ(${z}px)`, transformStyle: "preserve-3d" }}
                                    >
                                        {renderCard
                                            ? renderCard(item, { active: isActive })
                                            : <DefaultFanCard item={item} active={isActive} cardWidth={cardWidth} cardHeight={cardHeight} />
                                        }
                                    </div>
                                </motion.div>
                            )
                        })}
                    </AnimatePresence>
                </div>
            </div>

            {/* Dots */}
            {showDots && (
                <div className="mt-8 flex items-center justify-center gap-3">
                    <div className="flex items-center gap-2">
                        {items.map((it, idx) => {
                            const on = idx === active
                            return (
                                <button
                                    key={it.id}
                                    onClick={() => setActive(idx)}
                                    className={cn(
                                        "h-1.5 rounded-full transition-all duration-300",
                                        on ? "w-6 bg-white" : "w-1.5 bg-white/25 hover:bg-white/45",
                                    )}
                                    aria-label={`Go to ${it.title}`}
                                />
                            )
                        })}
                    </div>
                    {activeItem.href && (
                        <Link
                            href={activeItem.href}
                            className="text-white/30 hover:text-white/70 transition-colors"
                            aria-label="Open link"
                        >
                            <SquareArrowOutUpRight className="h-4 w-4" />
                        </Link>
                    )}
                </div>
            )}
        </div>
    )
}

function DefaultFanCard({ item, active, cardWidth, cardHeight }: { item: CardStackItem; active: boolean; cardWidth: number; cardHeight: number }) {
    return (
        <div className="relative h-full w-full bg-[#111317]">
            {item.imageSrc ? (
                <Image
                    src={item.imageSrc}
                    alt={item.title}
                    width={cardWidth}
                    height={cardHeight}
                    className="h-full w-full object-cover opacity-40"
                    draggable={false}
                    priority={active}
                />
            ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-[#161B22] to-[#0B0F14]" />
            )}

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            <div className="relative z-10 flex h-full flex-col justify-end p-8">
                {item.tag && (
                    <p className="mb-3 text-[11px] font-medium tracking-[0.18em] uppercase text-white/35">
                        {item.tag}
                    </p>
                )}
                <h3 className={cn(
                    "font-bold leading-[1.1] tracking-[-0.025em] text-white transition-all duration-300",
                    active ? "text-[1.9rem]" : "text-[1.6rem]"
                )}>
                    {item.title}
                </h3>
                {item.description && (
                    <p className={cn(
                        "mt-3 text-[15px] leading-[1.65] text-white/55 transition-all duration-300",
                        active ? "opacity-100 max-h-40" : "opacity-0 max-h-0 overflow-hidden"
                    )}>
                        {item.description}
                    </p>
                )}
            </div>
        </div>
    )
}
