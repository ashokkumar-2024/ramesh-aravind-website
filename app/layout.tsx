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
    "Official website of Dr Ramesh Aravind — legendary Kannada actor with 140+ films, acclaimed director, bestselling author of Preetiyinda Ramesh, and inspirational motivational speaker. Host of Weekend With Ramesh on ZEE Kannada.",
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
  image: `${BASE_URL}/Ra7.jpg`,
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
    "Karnataka State Film Award for Best Actor (America America, 1996)",
    "Filmfare Award South Best Actor Kannada (Amrutha Varshini, 1997)",
    "Udaya Film Award Best Actor (O Mallige, 1997)",
    "Filmfare Award South Best Actor Kannada (Hoomale, 1998)",
    "SIIMA Award Best Director (Rama Shama Bhama, 2005)",
    "Karnataka State Film Award for Best Director (100, 2019)",
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
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${BASE_URL}/?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
  inLanguage: ["en", "kn", "ta"],
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who is Dr Ramesh Aravind?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dr Ramesh Aravind is a legendary Indian actor, acclaimed film director, bestselling author, and inspirational motivational speaker from Bangalore, Karnataka. With over 35 years in the entertainment industry, he has appeared in 140+ films across Kannada, Tamil, Telugu, and Hindi cinema. He is also known as the host of the popular TV show Weekend With Ramesh on ZEE Kannada.",
      },
    },
    {
      "@type": "Question",
      name: "How many films has Dr Ramesh Aravind acted in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dr Ramesh Aravind has acted in over 140 films across Kannada, Tamil, Telugu, and Hindi cinema since his debut in 1986 with Sundara Swapnagalu. He is one of the most prolific actors in South Indian cinema.",
      },
    },
    {
      "@type": "Question",
      name: "What is Weekend With Ramesh?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Weekend With Ramesh is a highly acclaimed Kannada celebrity talk show hosted by Dr Ramesh Aravind on ZEE Kannada. The show has run for 5 seasons and is known for its heartfelt and candid conversations with celebrities, achievers, and inspiring personalities from across India.",
      },
    },
    {
      "@type": "Question",
      name: "What awards has Dr Ramesh Aravind won?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dr Ramesh Aravind has won numerous prestigious awards including: Karnataka State Film Award for Best Actor (America America, 1996), Filmfare Awards South Best Actor Kannada (Amrutha Varshini, 1997 and Hoomale, 1998), Udaya Film Award Best Actor (O Mallige, 1997), SIIMA Award Best Director (Rama Shama Bhama, 2005), and Karnataka State Film Award for Best Director (100, 2019).",
      },
    },
    {
      "@type": "Question",
      name: "Which films has Dr Ramesh Aravind directed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dr Ramesh Aravind has directed several acclaimed films including Rama Shama Bhama (2005, Kannada), Uttama Villain (2015, Tamil, starring Kamal Haasan), 100 (2019, Kannada), Shivaji Surathkal (2020, Kannada), Accident (Kannada), and Enge Enathu Kavithai (Kannada).",
      },
    },
    {
      "@type": "Question",
      name: "What books has Dr Ramesh Aravind written?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dr Ramesh Aravind has authored four books: 'It's No Fun Without U' (English, inspirational stories), 'Art of Success' (Kannada, inspiring quotes and success principles), 'Preetiyinda Ramesh' (Kannada, a bestseller with 5 editions in 5 months), and 'Anbudhan Ramesh' (Tamil, 2024, a Tamil translation of his popular work).",
      },
    },
    {
      "@type": "Question",
      name: "Is Dr Ramesh Aravind available for motivational speaking?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Dr Ramesh Aravind is a highly sought-after motivational speaker available for corporate events, educational institutions, community gatherings, and brand events. He speaks in English, Kannada, and Tamil on topics including personal growth, leadership, cultural pride, and success mindset. To book, contact enquiry@ramesharavind.com.",
      },
    },
    {
      "@type": "Question",
      name: "What languages does Dr Ramesh Aravind work in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dr Ramesh Aravind has worked in Kannada, Tamil, Telugu, and Hindi films. He is fluent in English, Kannada, and Tamil and has delivered motivational talks and speeches in multiple languages across India.",
      },
    },
    {
      "@type": "Question",
      name: "What TV shows has Dr Ramesh Aravind hosted or appeared in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dr Ramesh Aravind has hosted and appeared in multiple TV shows including Weekend With Ramesh (5 seasons on ZEE Kannada), Raja Rani (game show), Preetiyinda Ramesh, and Mahanati. As a producer, he has produced shows including Sundari, Neenadena, and Aase on Star Suvarna.",
      },
    },
    {
      "@type": "Question",
      name: "How can I contact Dr Ramesh Aravind for bookings or collaborations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can contact Dr Ramesh Aravind's team for speaking engagements, brand collaborations, media interviews, and corporate events through the official email: enquiry@ramesharavind.com. You can also reach out via the contact form on the official website at www.ramesharavind.com.",
      },
    },
    {
      "@type": "Question",
      name: "What are Dr Ramesh Aravind's most popular films?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Some of Dr Ramesh Aravind's most popular films include America America (1996), Amrutha Varshini (1997), O Mallige (1997), Hoomale (1998), Pushpaka Vimana, Mumbai Xpress, Rama Shama Bhama (2005), 100 (2019), Shivaji Surathkal (2020), and Bhairadevi (2024).",
      },
    },
    {
      "@type": "Question",
      name: "What brands has Dr Ramesh Aravind endorsed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dr Ramesh Aravind has served as brand ambassador and endorsed leading brands including TMT Steel, Siri beverages, Aashirvaad's Chilli, Narayanashastra, Vasu Agarbathies, and Silk Shirts and Dhoti. He is also a CMCA Brand Ambassador.",
      },
    },
  ],
}

const booksSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Book",
    name: "It's No Fun Without U",
    author: { "@id": `${BASE_URL}/#person` },
    inLanguage: "en",
    genre: "Self-help",
    description: "Inspirational stories and life lessons by Dr Ramesh Aravind",
    publisher: { "@id": `${BASE_URL}/#organization` },
  },
  {
    "@context": "https://schema.org",
    "@type": "Book",
    name: "Art of Success",
    author: { "@id": `${BASE_URL}/#person` },
    inLanguage: "kn",
    genre: "Self-help",
    description: "Inspiring quotes and success principles by Dr Ramesh Aravind in Kannada",
    publisher: { "@id": `${BASE_URL}/#organization` },
  },
  {
    "@context": "https://schema.org",
    "@type": "Book",
    name: "Preetiyinda Ramesh",
    author: { "@id": `${BASE_URL}/#person` },
    inLanguage: "kn",
    genre: "Self-help",
    description: "Bestselling Kannada book by Dr Ramesh Aravind — 5 editions released in 5 months",
    publisher: { "@id": `${BASE_URL}/#organization` },
  },
  {
    "@context": "https://schema.org",
    "@type": "Book",
    name: "Anbudhan Ramesh",
    author: { "@id": `${BASE_URL}/#person` },
    inLanguage: "ta",
    genre: "Self-help",
    datePublished: "2024",
    description: "Tamil edition of Dr Ramesh Aravind's popular book",
    publisher: { "@id": `${BASE_URL}/#organization` },
  },
]

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: BASE_URL,
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="canonical" href={BASE_URL} />
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(booksSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
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
