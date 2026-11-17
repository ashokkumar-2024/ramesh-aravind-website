import type { Metadata } from "next"
import { InfoPage } from "@/components/info-page"
import { BASE_URL, PERSON_ID, producedShows, tvShows } from "@/lib/site-facts"

const PATH = "/television-shows"
const DESCRIPTION =
  "TV shows of Dr Ramesh Aravind: host of Weekend With Ramesh (Zee Kannada, 5 seasons) and Kannadada Kotyadhipati, judge on Mahanati, and producer of Sundari, Neenadena and Aase."

export const metadata: Metadata = {
  title: "TV Shows",
  description: DESCRIPTION,
  alternates: { canonical: `${BASE_URL}${PATH}` },
  openGraph: { title: "TV Shows | Dr Ramesh Aravind", description: DESCRIPTION, url: `${BASE_URL}${PATH}`, images: ["/Ra7.jpg"] },
}

const tvSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Television shows hosted by Dr Ramesh Aravind",
  itemListElement: tvShows.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "TVSeries",
      name: s.title,
      description: s.description,
      ...(s.channel ? { productionCompany: { "@type": "Organization", name: s.channel } } : {}),
      actor: { "@id": PERSON_ID },
    },
  })),
}

export default function TelevisionShowsPage() {
  return (
    <InfoPage
      path={PATH}
      title="Ramesh Aravind TV Shows"
      schema={[tvSchema]}
      intro={
        <p>
          <strong>Dr Ramesh Aravind is best known on television as the host of <em>Weekend With Ramesh</em></strong>, a
          Kannada celebrity talk show that ran for five seasons on Zee Kannada. He also hosted the third season of
          <em> Kannadada Kotyadhipati</em>, was a judge on <em>Mahanati</em> (2024), and has produced several Kannada TV serials.
        </p>
      }
    >
      <ul className="space-y-8">
        {tvShows.map((s) => (
          <li key={s.title} className="grid sm:grid-cols-[220px_1fr] gap-5 items-start">
            {s.image ? (
              <img src={s.image} alt={`${s.title} TV show poster with Ramesh Aravind`} loading="lazy" className="w-full rounded-xl shadow" />
            ) : <div className="hidden sm:block" />}
            <div>
              <h2 className="text-xl font-bold">{s.title}</h2>
              <p className="text-sm font-semibold mb-2">{[s.role, s.channel, s.period].filter(Boolean).join(" · ")}</p>
              <p>{s.description}</p>
            </div>
          </li>
        ))}
      </ul>

      <section>
        <h2 className="text-2xl font-bold mb-3">Shows produced by Ramesh Aravind</h2>
        <table className="w-full text-left text-[15px]">
          <thead><tr className="border-b-2 border-[#0e2a3f]"><th className="py-2">Show</th><th>Channel</th><th>Years</th></tr></thead>
          <tbody>
            {producedShows.map((s) => (
              <tr key={s.title} className="border-b border-[#0e2a3f]/15"><td className="py-2 font-semibold">{s.title}</td><td>{s.channel}</td><td>{s.period}</td></tr>
            ))}
          </tbody>
        </table>
        <p className="mt-3">More on the <a href="/producer-portfolio" className="underline underline-offset-2">producer page</a>.</p>
      </section>
    </InfoPage>
  )
}
