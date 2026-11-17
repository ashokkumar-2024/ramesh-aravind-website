import type { Metadata } from "next"
import { InfoPage } from "@/components/info-page"
import { BASE_URL, PERSON_ID, directedFilms, films } from "@/lib/site-facts"

const PATH = "/movies"
const DESCRIPTION =
  "Ramesh Aravind movies: filmography of his best-known films as actor and director, from Sundara Swapnagalu (1986) to Amrutha Varshini, Rama Shama Bhama, 100 and Bhairadevi."

export const metadata: Metadata = {
  title: "Movies & Filmography",
  description: DESCRIPTION,
  alternates: { canonical: `${BASE_URL}${PATH}` },
  openGraph: { title: "Movies & Filmography | Dr Ramesh Aravind", description: DESCRIPTION, url: `${BASE_URL}${PATH}`, images: ["/Ra7.jpg"] },
}

const listSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Selected filmography of Dr Ramesh Aravind",
  itemListElement: films.map((f, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Movie",
      name: f.title,
      dateCreated: f.year,
      inLanguage: f.language,
      ...(f.role.includes("Director") ? { director: { "@id": PERSON_ID } } : { actor: { "@id": PERSON_ID } }),
    },
  })),
}

export default function MoviesPage() {
  return (
    <InfoPage
      path={PATH}
      title="Ramesh Aravind Movies & Filmography"
      schema={[listSchema]}
      intro={
        <p>
          <strong>Dr Ramesh Aravind has acted in more than 140 films</strong> in Kannada, Tamil, Telugu and Hindi since his
          debut in <em>Sundara Swapnagalu</em> (1986), and has directed {directedFilms.length} feature films. His best-known
          films as an actor include <em>America America</em>, <em>Amrutha Varshini</em>, <em>O Mallige</em> and
          <em> Hoomale</em>. As a director he is best known for <em>Rama Shama Bhama</em>, <em>Uttama Villain</em> and <em>100</em>.
        </p>
      }
    >
      <section>
        <h2 className="text-2xl font-bold mb-4">Selected films</h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
          {films.map((f) => (
            <li key={f.title}>
              <img src={f.image} alt={`${f.title} (${f.year}) – ${f.language} film starring Ramesh Aravind`} loading="lazy" className="w-full aspect-[2/3] object-cover rounded-xl shadow" />
              <h3 className="font-bold mt-2 leading-snug">{f.title}</h3>
              <p className="text-sm">{f.year} · {f.language} · {f.role}</p>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-3">Films directed by Ramesh Aravind</h2>
        <table className="w-full text-left text-[15px]">
          <thead><tr className="border-b-2 border-[#0e2a3f]"><th className="py-2">Film</th><th>Year</th><th>Language</th></tr></thead>
          <tbody>
            {directedFilms.map((f) => (
              <tr key={f.title} className="border-b border-[#0e2a3f]/15"><td className="py-2 font-semibold">{f.title}</td><td>{f.year}</td><td>{f.language}</td></tr>
            ))}
          </tbody>
        </table>
        <p className="mt-3">
          Read more on the <a href="/director-portfolio" className="underline underline-offset-2">director page</a> or see his{" "}
          <a href="/best-movies" className="underline underline-offset-2">best movies</a>.
        </p>
      </section>
    </InfoPage>
  )
}
