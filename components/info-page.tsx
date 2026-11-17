import type React from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BASE_URL, infoPages, references } from "@/lib/site-facts"

type InfoPageProps = {
  path: string
  title: string
  intro: React.ReactNode
  schema?: object[]
  children: React.ReactNode
}

// Shared shell for the dedicated, crawlable info pages (biography, movies, books, TV, awards)
export function InfoPage({ path, title, intro, schema = [], children }: InfoPageProps) {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: title, item: `${BASE_URL}${path}` },
    ],
  }

  return (
    <main className="bg-background min-h-screen">
      {[breadcrumb, ...schema].map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <Navigation />

      <article className="container mx-auto px-4 sm:px-6 pt-36 md:pt-44 pb-12 max-w-5xl text-[#0e2a3f]">
        <nav aria-label="Breadcrumb" className="text-sm mb-4 font-[var(--font-body)]">
          <a href="/" className="underline underline-offset-2 hover:text-[#8a5d24]">Home</a>
          <span className="mx-2">/</span>
          <span aria-current="page">{title}</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 leading-tight">{title}</h1>
        <div className="text-base sm:text-lg leading-relaxed mb-10 max-w-3xl font-[var(--font-body)]">{intro}</div>

        <div className="space-y-10 font-[var(--font-body)] leading-relaxed">{children}</div>

        <section className="mt-14 border-t border-[#0e2a3f]/15 pt-8">
          <h2 className="text-xl font-bold mb-4">More about Dr Ramesh Aravind</h2>
          <ul className="flex flex-wrap gap-2">
            {infoPages.filter((p) => p.href !== path).map((p) => (
              <li key={p.href}>
                <a href={p.href} className="inline-block px-4 py-2 rounded-full bg-[#0e2a3f] text-white text-sm hover:bg-[#8a5d24] transition-colors">
                  {p.label}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold mb-3">References</h2>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            {references.map((r) => (
              <li key={r.href}>
                <a href={r.href} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-[#8a5d24]">{r.label}</a>
              </li>
            ))}
          </ul>
          <p className="text-sm mt-4">
            For bookings and enquiries: <a href="mailto:enquiry@ramesharavind.com" className="underline underline-offset-2">enquiry@ramesharavind.com</a>
          </p>
        </section>
      </article>

      <Footer />
    </main>
  )
}
