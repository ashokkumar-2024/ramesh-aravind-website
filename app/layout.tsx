import type React from "react"
import type { Metadata, Viewport } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import "./critical.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: 'swap'
})
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap'
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
  openGraph: {
    title: "Dr Ramesh Aravind | Actor • Director • Author • Motivational Speaker",
    description: "From Silver Screen to Stage – Inspiring Every Step of the Way",
    type: "website",
  },
  generator: 'v0.app'
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
      <body className={`${playfair.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
