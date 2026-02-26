'use client'

import Link from 'next/link'
import { Project } from '@/data/projects'

interface ProjectCardProps {
    project: Project
    index: number
    isMobile: boolean
}

export function ProjectCard({
    project,
    index,
    isMobile,
}: ProjectCardProps) {
    const bgColors = ['#161614', '#181816', '#1a1a17']

    return (
        <Link
            href={`/work/${project.slug}`}
            style={{
                // CARD OUTER — viewport relative sizing:
                width: isMobile
                    ? 'calc(100vw - 32px)'
                    : 'calc(100vw - clamp(32px, 4vw, 80px))',
                height: isMobile
                    ? 'auto'
                    : 'calc(100vh - clamp(48px, 6vw, 96px))',
                minHeight: isMobile ? '560px' : 'unset',
                maxWidth: '1600px',
                background: bgColors[index % bgColors.length],
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.07)',
                overflow: 'hidden',
                boxShadow: '0 -8px 40px rgba(0,0,0,0.4)',
                display: 'block',
                textDecoration: 'none',
                transition: 'border-color 0.25s',
            }}
            onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor
                    = 'rgba(255,255,255,0.15)'
            }}
            onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor
                    = 'rgba(255,255,255,0.07)'
            }}
        >
            {/* INNER GRID */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : '55% 45%',
                gridTemplateRows: isMobile ? 'auto 1fr' : undefined,
                height: '100%',
            }}>

                {/* LEFT PANEL — content */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: isMobile
                        ? '28px'
                        : 'clamp(40px, 5vw, 72px)',
                    height: '100%',
                    order: isMobile ? 2 : 1,
                }}>

                    {/* TOP GROUP */}
                    <div>
                        <p style={{
                            fontFamily: 'monospace',
                            fontSize: '11px',
                            textTransform: 'uppercase',
                            letterSpacing: '0.15em',
                            color: 'rgba(255,255,255,0.35)',
                            marginBottom: '20px',
                        }}>
                            {project.category}
                        </p>

                        <h2 style={{
                            fontSize: isMobile
                                ? 'clamp(32px, 8vw, 48px)'
                                : 'clamp(48px, 5.5vw, 88px)',
                            fontWeight: '500',
                            color: 'white',
                            letterSpacing: '-0.02em',
                            lineHeight: '1',
                            marginBottom: '20px',
                        }}>
                            {project.name}
                        </h2>

                        <p style={{
                            fontSize: '16px',
                            color: 'rgba(255,255,255,0.5)',
                            fontWeight: '300',
                            lineHeight: '1.7',
                            maxWidth: '440px',
                        }}>
                            {project.tagline}
                        </p>
                    </div>

                    {/* BOTTOM GROUP */}
                    <div>
                        <div style={{
                            height: '1px',
                            background: 'rgba(255,255,255,0.07)',
                            marginBottom: '24px',
                        }} />

                        <p style={{
                            fontFamily: 'monospace',
                            fontSize: '11px',
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                            color: 'rgba(255,255,255,0.3)',
                            marginBottom: '20px',
                        }}>
                            {project.scope} · {project.year}
                        </p>

                        <span style={{
                            fontSize: '15px',
                            color: 'white',
                            fontWeight: '400',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                        }}>
                            View Project →
                        </span>
                    </div>
                </div>

                {/* RIGHT PANEL — image */}
                <div style={{
                    position: 'relative',
                    overflow: 'hidden',
                    borderLeft: isMobile
                        ? 'none'
                        : '1px solid rgba(255,255,255,0.07)',
                    borderBottom: isMobile
                        ? '1px solid rgba(255,255,255,0.07)'
                        : 'none',
                    height: isMobile ? '260px' : '100%',
                    order: isMobile ? 1 : 2,
                    background: '#0c0c0b',
                }}>

                    {/* Background text */}
                    <span style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        fontSize: 'clamp(60px, 14vw, 200px)',
                        fontWeight: '700',
                        color: 'rgba(255,255,255,0.04)',
                        userSelect: 'none',
                        letterSpacing: '-0.04em',
                        whiteSpace: 'nowrap',
                        pointerEvents: 'none',
                    }}>
                        {project.name}
                    </span>

                    {/* Stat overlay */}
                    <div style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        padding: 'clamp(20px, 3vw, 48px)',
                        background:
                            'linear-gradient(to top, rgba(0,0,0,0.85), transparent)',
                    }}>
                        <p style={{
                            fontSize: 'clamp(32px, 4vw, 60px)',
                            fontWeight: '500',
                            color: 'white',
                            lineHeight: '1',
                            marginBottom: '8px',
                        }}>
                            {project.stat}
                        </p>
                        <p style={{
                            fontFamily: 'monospace',
                            fontSize: '11px',
                            textTransform: 'uppercase',
                            letterSpacing: '0.12em',
                            color: 'rgba(255,255,255,0.5)',
                        }}>
                            {project.statLabel}
                        </p>
                    </div>

                </div>
            </div>
        </Link>
    )
}
