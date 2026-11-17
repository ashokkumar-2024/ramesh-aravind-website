import type React from "react"
import type { Metadata } from "next"

const PAGE_URL = "https://www.ramesharavind.com/best-movies"

export const metadata: Metadata = {
  title: "Best Movies",
  description: "The best films of Dr Ramesh Aravind — from America America, Amrutha Varshini and Hoomale to 100 and Shivaji Surathkal.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Best Movies | Dr Ramesh Aravind",
    description: "The best films of Dr Ramesh Aravind — from America America, Amrutha Varshini and Hoomale to 100 and Shivaji Surathkal.",
    url: PAGE_URL,
    images: ["/Ra7.jpg"],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
