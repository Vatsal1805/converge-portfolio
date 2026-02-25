'use client'

import { useEffect } from 'react'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error('Page error:', error)
    }, [error])

    return (
        <div style={{
            minHeight: '100vh',
            background: '#0c0c0b',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            padding: '24px',
            textAlign: 'center'
        }}>
            <p style={{
                fontFamily: 'monospace',
                fontSize: '11px',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                color: 'rgba(255,255,255,0.35)',
                marginBottom: '8px'
            }}>
                Something went wrong
            </p>
            <h2 style={{
                color: 'white',
                fontSize: '18px',
                fontWeight: '500',
                marginBottom: '24px',
                maxWidth: '500px',
                lineHeight: '1.5'
            }}>
                {error.message || 'An unexpected error occurred while rendering this page.'}
            </h2>
            <button
                onClick={reset}
                style={{
                    color: '#0c0c0b',
                    backgroundColor: 'white',
                    border: 'none',
                    padding: '12px 24px',
                    borderRadius: '4px',
                    fontSize: '14px',
                    fontWeight: '600',
                    cursor: 'pointer'
                }}
            >
                Try again
            </button>
        </div>
    )
}
