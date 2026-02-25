'use client'

import Link from 'next/link'

interface BreadcrumbItem {
    label: string
    href?: string // no href = current page (not linked)
}

interface BreadcrumbProps {
    items: BreadcrumbItem[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
    return (
        <nav className="flex items-center gap-2">
            {items.map((item, index) => (
                <div key={index} className="flex items-center gap-2">

                    {/* Separator — not before first item */}
                    {index > 0 && (
                        <span style={{
                            fontFamily: 'monospace',
                            fontSize: '11px',
                            color: 'rgba(255,255,255,0.2)'
                        }}>
                            /
                        </span>
                    )}

                    {/* Item */}
                    {item.href ? (
                        <Link
                            href={item.href}
                            style={{
                                fontFamily: 'monospace',
                                fontSize: '11px',
                                textTransform: 'uppercase',
                                letterSpacing: '0.12em',
                                color: 'rgba(255,255,255,0.35)',
                                textDecoration: 'none',
                                transition: 'color 0.2s'
                            }}
                            onMouseEnter={e => {
                                (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.7)'
                            }}
                            onMouseLeave={e => {
                                (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.35)'
                            }}
                        >
                            {item.label}
                        </Link>
                    ) : (
                        <span style={{
                            fontFamily: 'monospace',
                            fontSize: '11px',
                            textTransform: 'uppercase',
                            letterSpacing: '0.12em',
                            color: 'rgba(255,255,255,0.6)'
                        }}>
                            {item.label}
                        </span>
                    )}

                </div>
            ))}
        </nav>
    )
}
