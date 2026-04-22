"use client"

import { useState } from "react"

const faqs = [
  {
    question: "Who is Dr Ramesh Aravind?",
    answer:
      "Dr Ramesh Aravind is a legendary Indian actor, acclaimed film director, bestselling author, and inspirational motivational speaker from Bangalore, Karnataka. With over 35 years in the entertainment industry, he has appeared in 140+ films across Kannada, Tamil, Telugu, and Hindi cinema. He is also known as the beloved host of Weekend With Ramesh on ZEE Kannada.",
  },
  {
    question: "How many films has Dr Ramesh Aravind acted in?",
    answer:
      "Dr Ramesh Aravind has acted in over 140 films across Kannada, Tamil, Telugu, and Hindi cinema since his debut in 1986 with Sundara Swapnagalu. He is one of the most prolific and versatile actors in South Indian cinema.",
  },
  {
    question: "What is Weekend With Ramesh?",
    answer:
      "Weekend With Ramesh is a highly acclaimed Kannada celebrity talk show hosted by Dr Ramesh Aravind on ZEE Kannada. The show has run for 5 seasons and is celebrated for its heartfelt, candid conversations with celebrities, achievers, and inspiring personalities from across India.",
  },
  {
    question: "Which films has Dr Ramesh Aravind directed?",
    answer:
      "Dr Ramesh Aravind has directed several acclaimed films: Rama Shama Bhama (2005, Kannada), Uttama Villain (2015, Tamil — starring Kamal Haasan), 100 (2019, Kannada — Karnataka State Film Award Best Director), Shivaji Surathkal (2020, Kannada), Accident (Kannada), and Enge Enathu Kavithai (Kannada).",
  },
  {
    question: "What awards has Dr Ramesh Aravind won?",
    answer:
      "Dr Ramesh Aravind has won multiple prestigious awards: Karnataka State Film Award for Best Actor (America America, 1996), Filmfare Awards South Best Actor Kannada (Amrutha Varshini 1997 & Hoomale 1998), Udaya Film Award Best Actor (O Mallige, 1997), SIIMA Award Best Director (Rama Shama Bhama, 2005), and Karnataka State Film Award for Best Director (100, 2019).",
  },
  {
    question: "What books has Dr Ramesh Aravind written?",
    answer:
      "Dr Ramesh Aravind has authored four books: 'It's No Fun Without U' (English — inspirational stories), 'Art of Success' (Kannada — inspiring quotes), 'Preetiyinda Ramesh' (Kannada bestseller — 5 editions in 5 months), and 'Anbudhan Ramesh' (Tamil, 2024).",
  },
  {
    question: "Is Dr Ramesh Aravind available for motivational speaking?",
    answer:
      "Yes. Dr Ramesh Aravind is a highly sought-after motivational speaker for corporate events, educational institutions, and community gatherings. He speaks in English, Kannada, and Tamil on personal growth, leadership, cultural pride, and success mindset. To book, contact enquiry@ramesharavind.com.",
  },
  {
    question: "What languages does Dr Ramesh Aravind work in?",
    answer:
      "Dr Ramesh Aravind has worked across Kannada, Tamil, Telugu, and Hindi films. He is fluent in English, Kannada, and Tamil and has delivered motivational speeches in multiple languages across India.",
  },
  {
    question: "What are Dr Ramesh Aravind's most popular films?",
    answer:
      "Some of Dr Ramesh Aravind's most celebrated films include America America, Amrutha Varshini, O Mallige, Hoomale, Pushpaka Vimana, Mumbai Xpress, Rama Shama Bhama (2005), 100 (2019), Shivaji Surathkal (2020), and Bhairadevi (2024).",
  },
  {
    question: "What brands has Dr Ramesh Aravind endorsed?",
    answer:
      "Dr Ramesh Aravind has been a brand ambassador for TMT Steel, Siri beverages, Aashirvaad's Chilli, Narayanashastra, Vasu Agarbathies, and Silk Shirts and Dhoti. He is also a CMCA Brand Ambassador.",
  },
  {
    question: "How can I book Dr Ramesh Aravind for an event?",
    answer:
      "You can reach Dr Ramesh Aravind's team for speaking engagements, brand collaborations, media interviews, and corporate events via email at enquiry@ramesharavind.com or through the contact form on this website.",
  },
  {
    question: "What TV shows has Dr Ramesh Aravind produced?",
    answer:
      "As a producer, Dr Ramesh Aravind has produced Supernatural Fiction (Udaya TV, 2019–2020), Sundari (Udaya TV, 2021–2023), Neenadena (Star Suvarna, 2023–present), and Aase (Star Suvarna, 2023–present).",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section
      id="faq"
      className="relative py-16 md:py-24 overflow-hidden"
      style={{ background: 'var(--cream-base)' }}
      aria-label="Frequently Asked Questions about Dr Ramesh Aravind"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="w-12 h-px bg-gradient-to-r from-transparent via-[#bf8843] to-transparent" />
            <span className="text-xs text-[#0e2a3f] tracking-[0.4em] uppercase font-sans">Learn More</span>
            <span className="w-12 h-px bg-gradient-to-r from-transparent via-[#bf8843] to-transparent" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-thin tracking-[0.08em] gold-text mb-3">
            FREQUENTLY ASKED
          </h2>
          <p className="text-[#0e2a3f]/60 text-base md:text-lg font-sans">
            Everything you want to know about Dr Ramesh Aravind
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className="rounded-2xl overflow-hidden transition-all duration-300"
                style={{
                  background: isOpen
                    ? 'linear-gradient(145deg, rgba(255,255,255,0.95), rgba(241,228,216,0.8))'
                    : 'linear-gradient(145deg, rgba(255,255,255,0.6), rgba(241,228,216,0.4))',
                  boxShadow: isOpen
                    ? '0 8px 32px rgba(0,0,0,0.08), 0 0 0 1px rgba(191,136,67,0.2)'
                    : '0 2px 8px rgba(0,0,0,0.04), 0 0 0 1px rgba(14,42,63,0.06)',
                }}
              >
                <button
                  className="w-full flex items-center justify-between px-5 md:px-7 py-4 md:py-5 text-left gap-4"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span
                    className="text-sm md:text-base font-semibold leading-snug"
                    style={{ color: isOpen ? '#bf8843' : '#0e2a3f' }}
                  >
                    {faq.question}
                  </span>
                  <span
                    className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 text-white text-sm font-bold"
                    style={{
                      background: isOpen ? '#bf8843' : '#0e2a3f',
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                    }}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>

                <div
                  id={`faq-answer-${index}`}
                  className="overflow-hidden transition-all duration-300"
                  style={{
                    maxHeight: isOpen ? '400px' : '0px',
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <p className="px-5 md:px-7 pb-5 md:pb-6 text-sm md:text-base text-[#0e2a3f]/75 leading-relaxed font-sans">
                    {faq.answer}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <p className="text-[#0e2a3f]/60 text-sm font-sans mb-3">Have more questions?</p>
          <a
            href="mailto:enquiry@ramesharavind.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:opacity-90 hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #0e2a3f, #124166)' }}
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  )
}
