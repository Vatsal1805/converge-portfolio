/** @type {import('next').NextConfig} */
const nextConfig = {
    // Redirect /services to homepage services section
    async redirects() {
        return [
            {
                source: '/services',
                destination: '/#services',
                permanent: true,
            },
        ]
    },
    // Image optimization
    images: {
        formats: ['image/webp'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    },
}

export default nextConfig
