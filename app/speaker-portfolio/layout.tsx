import type React from "react"
import type { Metadata } from "next"

const PAGE_URL = "https://www.ramesharavind.com/speaker-portfolio"

export const metadata: Metadata = {
  title: "Motivational Speaker",
  description: "Book Dr Ramesh Aravind as a motivational speaker for corporate events, colleges and conferences in English, Kannada and Tamil.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Motivational Speaker | Dr Ramesh Aravind",
    description: "Book Dr Ramesh Aravind as a motivational speaker for corporate events, colleges and conferences in English, Kannada and Tamil.",
    url: PAGE_URL,
    images: ["/Ra7.jpg"],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
