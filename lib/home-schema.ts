// Structured data that describes content shown only on the homepage
const BASE_URL = "https://www.ramesharavind.com"

export const faqSchema = {
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
        text: "Dr Ramesh Aravind's awards include the Karnataka State Film Award for Best Actor (America America, 1996–97), Filmfare Award South for Best Actor – Kannada (Amrutha Varshini, 1997 and Hoomale, 1998), Udaya Film Award for Best Actor (O Mallige, 1997), Udaya Film Award for Best Debut Director (Rama Shama Bhama, 2006) and the Chandanavana Film Critics Academy Award for Best Actor (Shivaji Surathkal 2, 2024). In 2022 he received an honorary doctorate from Rani Channamma University, Belagavi, for his contribution to cinema.",
      },
    },
    {
      "@type": "Question",
      name: "Which films has Dr Ramesh Aravind directed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dr Ramesh Aravind has directed films in Kannada and Tamil, including Rama Shama Bhama (2005), Sathyavan Savithri (2007), Accident (2008), Venkata in Sankata (2009), Nammanna Don (2012), Uttama Villain (2015, Tamil, starring Kamal Haasan), Sundaranga Jaana (2016) and 100 (2021).",
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
        text: "Some of Dr Ramesh Aravind's most popular films include America America (1996), Amrutha Varshini (1997), O Mallige (1997), Hoomale (1998), Pushpaka Vimana, Mumbai Xpress, Rama Shama Bhama (2005), 100 (2021), Shivaji Surathkal (2020), and Bhairadevi (2024).",
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

export const booksSchema = [
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

export const breadcrumbSchema = {
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
