import type { Metadata } from "next"
import { InfoPage } from "@/components/info-page"
import { BASE_URL, PERSON_ID, awards, honours } from "@/lib/site-facts"

const PATH = "/awards"
const DESCRIPTION =
  "Awards won by Dr Ramesh Aravind: Karnataka State Film Award for Best Actor, two Filmfare Awards South, Udaya Award for Best Debut Director, and an honorary doctorate."

export const metadata: Metadata = {
  title: "Awards & Honours",
  description: DESCRIPTION,
  alternates: { canonical: `${BASE_URL}${PATH}` },
  openGraph: { title: "Awards & Honours | Dr Ramesh Aravind", description: DESCRIPTION, url: `${BASE_URL}${PATH}`, images: ["/Ra7.jpg"] },
}

const awardsSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  url: `${BASE_URL}${PATH}`,
  name: "Awards and honours of Dr Ramesh Aravind",
  about: { "@id": PERSON_ID },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: awards.map((a, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: `${a.body} – ${a.category} (${a.work}, ${a.year})`,
    })),
  },
}

export default function AwardsPage() {
  return (
    <InfoPage
      path={PATH}
      title="Ramesh Aravind Awards & Honours"
      schema={[awardsSchema]}
      intro={
        <p>
          <strong>Dr Ramesh Aravind&apos;s major awards</strong> include the Karnataka State Film Award for Best Actor for
          <em> America America</em>, the Filmfare Award South for Best Actor – Kannada for <em>Amrutha Varshini</em> (1997)
          and <em>Hoomale</em> (1998), and the Udaya Film Award for Best Debut Director for <em>Rama Shama Bhama</em> (2006).
          In 2022 Rani Channamma University awarded him an honorary doctorate for his contribution to cinema.
        </p>
      }
    >
      <section>
        <h2 className="text-2xl font-bold mb-3">Film awards</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-[15px] min-w-[560px]">
            <thead><tr className="border-b-2 border-[#0e2a3f]"><th className="py-2">Year</th><th>Award</th><th>Category</th><th>Film</th></tr></thead>
            <tbody>
              {awards.map((a) => (
                <tr key={`${a.body}-${a.year}-${a.work}`} className="border-b border-[#0e2a3f]/15">
                  <td className="py-2 whitespace-nowrap">{a.year}</td><td className="font-semibold">{a.body}</td><td>{a.category}</td><td><em>{a.work}</em></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-3">Other honours</h2>
        <ul className="list-disc pl-5 space-y-1">
          {honours.map((h) => (
            <li key={h.name}>
              <strong>{h.name}</strong>{h.year && ` (${h.year})`}{h.detail && ` – ${h.detail}`}
            </li>
          ))}
        </ul>
      </section>
    </InfoPage>
  )
}
