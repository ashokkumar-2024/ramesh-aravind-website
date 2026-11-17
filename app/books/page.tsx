import type { Metadata } from "next"
import { InfoPage } from "@/components/info-page"
import { BASE_URL, PERSON_ID, books } from "@/lib/site-facts"

const PATH = "/books"
const DESCRIPTION =
  "Books written by Dr Ramesh Aravind: Preetiyinda Ramesh, Art of Success, It's No Fun Without U and the Tamil edition Anbudan Ramesh."

export const metadata: Metadata = {
  title: "Books by Ramesh Aravind",
  description: DESCRIPTION,
  alternates: { canonical: `${BASE_URL}${PATH}` },
  openGraph: { title: "Books by Dr Ramesh Aravind", description: DESCRIPTION, url: `${BASE_URL}${PATH}`, images: ["/Ra7.jpg"] },
}

const booksSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Books by Dr Ramesh Aravind",
  itemListElement: books.map((b, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Book",
      name: b.title,
      author: { "@id": PERSON_ID },
      inLanguage: b.language,
      description: b.description,
      image: `${BASE_URL}${encodeURI(b.image)}`,
    },
  })),
}

const FAQS = [
  { q: "What books has Ramesh Aravind written?", a: "Ramesh Aravind has written four books: Preetiyinda Ramesh and Art of Success in Kannada, It's No Fun Without U in English, and Anbudan Ramesh, the 2024 Tamil edition of Preetiyinda Ramesh." },
  { q: "What is Preetiyinda Ramesh?", a: "Preetiyinda Ramesh is Ramesh Aravind's best-known Kannada book, a bestseller that went through five editions in five months. A Tamil edition, Anbudan Ramesh, was published in 2024." },
  { q: "Has Ramesh Aravind written a book in English?", a: "Yes. It's No Fun Without U is his English book of inspirational stories and life lessons." },
  { q: "Does Ramesh Aravind have an audiobook?", a: "Yes. He wrote and narrated the Kannada audiobook MasadaMaatu with Ramesh, available on Storytel." },
]

export default function BooksPage() {
  return (
    <InfoPage
      path={PATH}
      title="Books by Dr Ramesh Aravind"
      faqs={FAQS}
      schema={[booksSchema]}
      intro={
        <p>
          <strong>Dr Ramesh Aravind has written four books</strong>: <em>Preetiyinda Ramesh</em> and <em>Art of Success</em>{" "}
          in Kannada, <em>It&apos;s No Fun Without U</em> in English, and <em>Anbudan Ramesh</em>, the 2024 Tamil edition of
          Preetiyinda Ramesh. His books share the life lessons, stories and ideas on success that he also talks about as a
          motivational speaker.
        </p>
      }
    >
      <ul className="grid sm:grid-cols-2 gap-8">
        {books.map((b) => (
          <li key={b.title} className="flex gap-5">
            <img src={b.image} alt={`${b.title} book cover by Ramesh Aravind`} loading="lazy" className="w-32 sm:w-36 aspect-[2/3] object-cover rounded-lg shadow" />
            <div>
              <h2 className="text-xl font-bold leading-snug">{b.title}</h2>
              <p className="text-sm font-semibold mb-2">{b.language}</p>
              <p>{b.description}</p>
            </div>
          </li>
        ))}
      </ul>

      <section>
        <h2 className="text-2xl font-bold mb-3">Audiobook</h2>
        <p>
          He also wrote and narrated the Kannada audiobook <em>MasadaMaatu with Ramesh</em>, available on Storytel.
        </p>
      </section>
    </InfoPage>
  )
}
