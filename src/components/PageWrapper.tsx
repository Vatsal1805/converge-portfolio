import React from 'react'
import { Breadcrumb } from './Breadcrumb'

interface PageWrapperProps {
    children: React.ReactNode
    breadcrumbs: { label: string; href?: string }[]
}

export function PageWrapper({ children, breadcrumbs }: PageWrapperProps) {
    return (
        <main className="min-h-screen bg-[#0c0c0b]">
            {/* Breadcrumb — always same position */}
            <div
                style={{
                    paddingTop: 'clamp(80px, 10vw, 96px)',
                    paddingBottom: '0',
                    paddingLeft: 'clamp(24px, 5vw, 80px)',
                    paddingRight: 'clamp(24px, 5vw, 80px)',
                    maxWidth: '1200px',
                    margin: '0 auto',
                }}
            >
                <Breadcrumb items={breadcrumbs} />
            </div>

            {/* Page content — always same start position */}
            <div
                style={{
                    paddingLeft: 'clamp(24px, 5vw, 80px)',
                    paddingRight: 'clamp(24px, 5vw, 80px)',
                    maxWidth: '1200px',
                    margin: '0 auto',
                    paddingTop: '48px',
                }}
            >
                {children}
            </div>
        </main>
    )
}
