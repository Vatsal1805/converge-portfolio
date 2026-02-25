import type { Metadata } from 'next'
import { Inter, Outfit, DM_Mono } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import './globals.css'

const displayFont = Outfit({
    subsets: ['latin'],
    weight: ['400', '500'],
    variable: '--font-display',
})

const bodyFont = Inter({
    subsets: ['latin'],
    weight: ['300', '400'],
    variable: '--font-body',
})

const mono = DM_Mono({
    subsets: ['latin'],
    weight: ['300', '400'],
    variable: '--font-mono',
})

export const metadata: Metadata = {
    title: 'Converge Digital — Digital Product Studio',
    description: 'We design and engineer digital products built to grow with your business.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={`${displayFont.variable} ${bodyFont.variable} ${mono.variable}`}>
            <body className="bg-[#0c0c0b] text-white">
                <Navbar />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    )
}
