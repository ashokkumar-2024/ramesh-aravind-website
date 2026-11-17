import type React from "react"
import type { Metadata } from "next"

const PAGE_URL = "https://www.ramesharavind.com/producer-portfolio"

export const metadata: Metadata = {
  title: "Producer",
  description: "Dr Ramesh Aravind as a producer — TV shows and films including Sundari, Neenadena and Aase on Star Suvarna.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Producer | Dr Ramesh Aravind",
    description: "Dr Ramesh Aravind as a producer — TV shows and films including Sundari, Neenadena and Aase on Star Suvarna.",
    url: PAGE_URL,
    images: ["/Ra7.jpg"],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
