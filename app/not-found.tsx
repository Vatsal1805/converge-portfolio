export default function NotFound() {
    return (
        <div style={{
            minHeight: '100vh',
            background: '#0c0c0b',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '24px'
        }}>
            <p style={{
                fontFamily: 'monospace',
                fontSize: '11px',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.35)'
            }}>
                404 — PAGE NOT FOUND
            </p>
            <h1 style={{
                fontSize: 'clamp(32px, 5vw, 56px)',
                color: 'white',
                fontWeight: '400'
            }}>
                This page doesn't exist.
            </h1>
            <a href="/" style={{
                color: 'rgba(255,255,255,0.5)',
                fontSize: '14px',
                fontFamily: 'monospace',
                textTransform: 'uppercase',
                letterSpacing: '0.12em'
            }}>
                ← Back to Home
            </a>
        </div>
    )
}
