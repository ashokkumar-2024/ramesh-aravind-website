import type { Metadata } from "next"
import { InfoPage } from "@/components/info-page"
import { ContactSection } from "@/components/contact-section"
import { BASE_URL, PERSON_ID } from "@/lib/site-facts"

const PATH = "/contact"
const DESCRIPTION =
  "Contact Dr Ramesh Aravind's team for motivational talks, events, brand collaborations and media. Official email: enquiry@ramesharavind.com."

export const metadata: Metadata = {
  title: "Contact & Bookings",
  description: DESCRIPTION,
  alternates: { canonical: `${BASE_URL}${PATH}` },
  openGraph: { title: "Contact & Bookings | Dr Ramesh Aravind", description: DESCRIPTION, url: `${BASE_URL}${PATH}`, images: ["/Ra7.jpg"] },
}

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  url: `${BASE_URL}${PATH}`,
  name: "Contact Dr Ramesh Aravind",
  description: DESCRIPTION,
  about: { "@id": PERSON_ID },
  mainEntity: {
    "@type": "ContactPoint",
    email: "enquiry@ramesharavind.com",
    contactType: "bookings and enquiries",
    availableLanguage: ["English", "Kannada", "Tamil"],
    areaServed: "IN",
  },
}

const FAQS = [
  { q: "How can I contact Dr Ramesh Aravind?", a: "The official way to contact Dr Ramesh Aravind's team is by email at enquiry@ramesharavind.com, or through the enquiry form on this page of www.ramesharavind.com." },
  { q: "How do I book Ramesh Aravind for a motivational speech or event?", a: "Email enquiry@ramesharavind.com with the event name, date, city, expected audience and preferred language (English, Kannada or Tamil). His team will reply about availability." },
  { q: "Can I contact Ramesh Aravind for brand endorsements or media interviews?", a: "Yes. Brand collaboration, endorsement and media interview requests go to the same official address, enquiry@ramesharavind.com." },
  { q: "What are Ramesh Aravind's official social media accounts?", a: "His official accounts are Instagram @ramesh.aravind.official, X (Twitter) @Ramesh_aravind, YouTube Ramesh Aravind Official, and Facebook actor.ramesh.aravind." },
]

export default function ContactPage() {
  return (
    <InfoPage
      path={PATH}
      title="Contact Dr Ramesh Aravind"
      faqs={FAQS}
      schema={[contactSchema]}
      intro={
        <p>
          <strong>To contact Dr Ramesh Aravind&apos;s team, email{" "}
          <a href="mailto:enquiry@ramesharavind.com" className="underline underline-offset-2">enquiry@ramesharavind.com</a></strong>{" "}
          or use the enquiry form below. His team handles bookings for motivational talks, corporate and college events,
          guest appearances, brand collaborations and media interviews.
        </p>
      }
    >
      <ContactSection />
    </InfoPage>
  )
}
