import type React from "react"
import type { Metadata, Viewport } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ScrollToTop } from "@/components/scroll-to-top"
import "./globals.css"
import "./critical.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: 'swap',
  preload: true,
})
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  title: "Dr Ramesh Aravind | Actor • Director • Author • Motivational Speaker",
  description:
    "Official website of Dr Ramesh Aravind - Legendary Indian actor, acclaimed director, bestselling author, and inspirational motivational speaker with over 140 films across Kannada, Tamil, Telugu, and Hindi cinema.",
  keywords: [
    "Dr Ramesh Aravind",
    "Indian Actor",
    "Kannada Cinema",
    "Motivational Speaker",
    "Film Director",
    "Author",
    "Weekend With Ramesh",
  ],
  authors: [{ name: "Dr Ramesh Aravind" }],
  icons: {
    icon: '/Black BG_RA.png.png',
    apple: '/Black BG_RA.png.png',
  },
  openGraph: {
    title: "Dr Ramesh Aravind | Actor • Director • Author • Motivational Speaker",
    description: "Dr Ramesh Aravind is a distinguished Indian actor, director, and television host whose illustrious career spans over three decades. Renowned for his remarkable versatility, Ramesh has captivated audiences across multiple languages, including Kannada, Tamil, and Telugu. His extensive filmography, featuring over 140 films, showcases his ability to effortlessly transition between diverse roles.",
    type: "website",
    images: [
      {
        url: "/Ra7.jpg",
        width: 1200,
        height: 630,
        alt: "Dr Ramesh Aravind - Actor, Director, Author, Motivational Speaker",
      }
    ],
  },
  generator: 'v0.app',
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: "#342323",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${playfair.variable} ${inter.variable} font-sans antialiased film-grain`}>
        <div id="scroll-to-top-root"></div>
        {children}
        <ScrollToTop />
        <Analytics />
      </body>
    </html>
  )
}
