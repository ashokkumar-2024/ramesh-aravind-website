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

const BASE_URL = 'https://www.ramesharavind.com'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Dr Ramesh Aravind | Actor • Director • Author • Motivational Speaker",
    template: "%s | Dr Ramesh Aravind",
  },
  description:
    "Official website of Dr Ramesh Aravind — Kannada actor of 140+ films, director, bestselling author, motivational speaker and host of Weekend With Ramesh.",
  keywords: [
    "Dr Ramesh Aravind",
    "Ramesh Aravind",
    "Kannada actor",
    "Kannada film director",
    "Indian actor",
    "Kannada cinema",
    "Weekend With Ramesh",
    "motivational speaker Bangalore",
    "corporate speaker India",
    "Preetiyinda Ramesh",
    "Shivaji Surathkal",
    "100 Kannada movie",
    "Rama Shama Bhama director",
    "South Indian actor",
    "Tamil actor",
    "Telugu actor",
    "film director Karnataka",
    "celebrity speaker India",
    "Kannada motivational speaker",
    "ZEE Kannada host",
  ],
  authors: [{ name: "Dr Ramesh Aravind", url: BASE_URL }],
  creator: "Dr Ramesh Aravind",
  publisher: "Dr Ramesh Aravind",
  alternates: {
    canonical: BASE_URL,
  },
  icons: {
    icon: '/Black BG_RA.png.png',
    apple: '/Black BG_RA.png.png',
  },
  openGraph: {
    title: "Dr Ramesh Aravind | Actor • Director • Author • Motivational Speaker",
    description:
      "Official website of Dr Ramesh Aravind — legendary Kannada actor with 140+ films, acclaimed director, bestselling author, and inspirational motivational speaker. Host of Weekend With Ramesh.",
    type: "website",
    url: BASE_URL,
    siteName: "Dr Ramesh Aravind Official",
    locale: "en_IN",
    images: [
      {
        url: "/Ra7.jpg",
        width: 1200,
        height: 630,
        alt: "Dr Ramesh Aravind - Actor, Director, Author, Motivational Speaker",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Ramesh_aravind",
    creator: "@Ramesh_aravind",
    title: "Dr Ramesh Aravind | Actor • Director • Author • Motivational Speaker",
    description:
      "Official website of Dr Ramesh Aravind — 140+ films, acclaimed director, bestselling author, motivational speaker. Host of Weekend With Ramesh on ZEE Kannada.",
    images: ["/Ra7.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: undefined,
  },
  category: "entertainment",
}

export const viewport: Viewport = {
  themeColor: "#342323",
  width: "device-width",
  initialScale: 1,
}

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${BASE_URL}/#person`,
  name: "Dr Ramesh Aravind",
  alternateName: ["Ramesh Aravind", "ರಮೇಶ್ ಅರವಿಂದ್"],
  description:
    "Dr Ramesh Aravind is a legendary Indian actor, acclaimed film director, bestselling author, and inspirational motivational speaker with over 35 years of experience in Kannada, Tamil, Telugu, and Hindi cinema.",
  url: BASE_URL,
  mainEntityOfPage: `${BASE_URL}/ramesh-aravind-biography`,
  image: `${BASE_URL}/Ra7.jpg`,
  birthDate: "1964-09-10",
  birthPlace: {
    "@type": "Place",
    name: "Kumbakonam, Tamil Nadu, India",
  },
  honorificPrefix: "Dr",
  sameAs: [
    "https://www.instagram.com/ramesh.aravind.official/",
    "https://x.com/Ramesh_aravind",
    "https://www.youtube.com/c/RameshAravindOfficial",
    "https://www.facebook.com/actor.ramesh.aravind/",
    "https://en.wikipedia.org/wiki/Ramesh_Aravind",
    "https://www.imdb.com/name/nm0712076/",
  ],
  jobTitle: ["Actor", "Film Director", "Author", "Motivational Speaker", "Television Host", "Film Producer"],
  knowsLanguage: ["Kannada", "Tamil", "Telugu", "Hindi", "English"],
  nationality: {
    "@type": "Country",
    name: "India",
  },
  homeLocation: {
    "@type": "Place",
    name: "Bangalore, Karnataka, India",
  },
  award: [
    "Karnataka State Film Award for Best Actor (America America, 1996–97)",
    "Filmfare Award South Best Actor Kannada (Amrutha Varshini, 1997)",
    "Udaya Film Award Best Actor (O Mallige, 1997)",
    "Filmfare Award South Best Actor Kannada (Hoomale, 1998)",
    "Udaya Film Award Best Debut Director (Rama Shama Bhama, 2006)",
    "Chandanavana Film Critics Academy Award Best Actor (Shivaji Surathkal 2, 2024)",
    "Honorary Doctorate, Rani Channamma University, Belagavi (2022)",
    "CMCA Brand Ambassador",
  ],
  hasOccupation: [
    {
      "@type": "Occupation",
      name: "Actor",
      occupationalCategory: "27-2011.00",
    },
    {
      "@type": "Occupation",
      name: "Film Director",
      occupationalCategory: "27-2012.00",
    },
    {
      "@type": "Occupation",
      name: "Author",
      occupationalCategory: "27-3043.00",
    },
    {
      "@type": "Occupation",
      name: "Motivational Speaker",
      occupationalCategory: "27-3099.00",
    },
  ],
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${BASE_URL}/#organization`,
  name: "Dr Ramesh Aravind Official",
  url: BASE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${BASE_URL}/Original_RA.png.png`,
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "enquiry@ramesharavind.com",
    contactType: "booking",
    availableLanguage: ["English", "Kannada", "Tamil"],
  },
  sameAs: [
    "https://www.instagram.com/ramesh.aravind.official/",
    "https://x.com/Ramesh_aravind",
    "https://www.youtube.com/c/RameshAravindOfficial",
    "https://www.facebook.com/actor.ramesh.aravind/",
  ],
  founder: {
    "@id": `${BASE_URL}/#person`,
  },
}

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  url: BASE_URL,
  name: "Dr Ramesh Aravind Official Website",
  description:
    "Official website of Dr Ramesh Aravind — legendary Kannada actor, director, author, and motivational speaker.",
  publisher: {
    "@id": `${BASE_URL}/#person`,
  },
  inLanguage: ["en", "kn", "ta"],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <meta name="geo.region" content="IN-KA" />
        <meta name="geo.placename" content="Bangalore, Karnataka, India" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="general" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={`${playfair.variable} ${inter.variable} font-sans antialiased film-grain`}>
        <div id="scroll-to-top-root"></div>
        {children}
        <ScrollToTop />
        <Analytics />
      </body>
    </html>
  )
}
