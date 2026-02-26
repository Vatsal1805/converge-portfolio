'use client'

import { useState, useEffect, useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'
import { projects } from '@/data/projects'
import { useMediaQuery } from '@/lib/hooks/use-media-query'
import { ProjectCard } from './ProjectCard'

export function StickyScrollStack() {
    const [activeIndex, setActiveIndex] = useState(0)
    const isMobile = useMediaQuery('(max-width: 768px)')
    const cardRefs = useRef<(HTMLDivElement | null)[]>([])
    const { scrollYProgress } = useScroll()

    // Counter via IntersectionObserver
    useEffect(() => {
        if (isMobile) return

        const observers = cardRefs.current.map((ref, index) => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) setActiveIndex(index)
                },
                { threshold: 0.6 }
            )
            if (ref) observer.observe(ref)
            return observer
        })

        return () => observers.forEach(o => o.disconnect())
    }, [isMobile])

    return (
        <>
            {/* SCROLL CONTAINER — viewport width */}
            <div style={{
                height: isMobile ? 'auto' : `${projects.length * 120}vh`,
                width: '100vw',
                position: 'relative',
                marginLeft: 'calc(50% - 50vw)',
                marginRight: 'calc(50% - 50vw)',
            }}>

                {projects.map((project, index) => (
                    <div
                        key={project.slug}
                        ref={el => { cardRefs.current[index] = el }}
                        style={{
                            position: isMobile ? 'relative' : 'sticky',
                            top: 0,
                            height: isMobile ? 'auto' : '100vh',
                            width: '100vw',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: index + 1,
                            marginBottom: isMobile ? '16px' : '0',
                        }}
                    >
                        <ProjectCard
                            project={project}
                            index={index}
                            isMobile={isMobile}
                        />
                    </div>
                ))}
            </div>

            {/* SCROLL COUNTER — desktop only */}
            {!isMobile && (
                <div style={{
                    position: 'fixed',
                    bottom: '40px',
                    right: 'clamp(24px, 5vw, 80px)',
                    zIndex: 50,
                    fontFamily: 'monospace',
                    fontSize: '12px',
                    color: 'rgba(255,255,255,0.3)',
                    letterSpacing: '0.1em',
                    pointerEvents: 'none',
                }}>
                    {String(activeIndex + 1).padStart(2, '0')}
                    {' / '}
                    {String(projects.length).padStart(2, '0')}
                </div>
            )}

            {/* SCROLL PROGRESS LINE — desktop only */}
            {!isMobile && (
                <div style={{
                    position: 'fixed',
                    right: 'clamp(24px, 5vw, 80px)',
                    top: 0,
                    width: '1px',
                    height: '100vh',
                    background: 'rgba(255,255,255,0.06)',
                    zIndex: 49,
                    pointerEvents: 'none',
                }}>
                    <motion.div
                        style={{
                            scaleY: scrollYProgress,
                            transformOrigin: 'top',
                            background: 'rgba(255,255,255,0.25)',
                            width: '100%',
                            height: '100%',
                        }}
                    />
                </div>
            )}
        </>
    )
}
