import type React from "react"
import type { Metadata } from "next"

const PAGE_URL = "https://www.ramesharavind.com/director-portfolio"

export const metadata: Metadata = {
  title: "Film Director",
  description: "Dr Ramesh Aravind as a film director — Rama Shama Bhama, Uttama Villain, 100, Shivaji Surathkal and more.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Film Director | Dr Ramesh Aravind",
    description: "Dr Ramesh Aravind as a film director — Rama Shama Bhama, Uttama Villain, 100, Shivaji Surathkal and more.",
    url: PAGE_URL,
    images: ["/Ra7.jpg"],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
