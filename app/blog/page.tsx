import type { Metadata } from "next"
import { InfoPage } from "@/components/info-page"
import { BASE_URL, PERSON_ID } from "@/lib/site-facts"
import { blogPosts } from "@/lib/blog-posts"

const PATH = "/blog"
const DESCRIPTION = "Articles about Dr Ramesh Aravind: his biography, movies, films as director, awards and frequently asked questions."

export const metadata: Metadata = {
  title: "Blog",
  description: DESCRIPTION,
  alternates: { canonical: `${BASE_URL}${PATH}` },
  openGraph: { title: "Blog | Dr Ramesh Aravind", description: DESCRIPTION, url: `${BASE_URL}${PATH}`, images: ["/Ra7.jpg"] },
}

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  url: `${BASE_URL}${PATH}`,
  name: "Dr Ramesh Aravind – Blog",
  about: { "@id": PERSON_ID },
  blogPost: blogPosts.map((p) => ({ "@type": "BlogPosting", headline: p.title, url: `${BASE_URL}/blog/${p.slug}` })),
}

export default function BlogIndex() {
  return (
    <InfoPage
      path={PATH}
      title="Blog"
      schema={[blogSchema]}
      intro={<p><strong>Articles about Dr Ramesh Aravind</strong>: his life and career, his films as actor and director, his awards, and answers to the questions people ask most.</p>}
    >
      <ul className="grid gap-5 sm:grid-cols-2">
        {blogPosts.map((p) => (
          <li key={p.slug} className="rounded-2xl border border-[#0e2a3f]/15 p-5 hover:border-[#8a5d24] transition-colors">
            <a href={`/blog/${p.slug}`} className="block">
              <h2 className="text-lg font-bold mb-2 leading-snug">{p.title}</h2>
              <p className="text-sm">{p.description}</p>
            </a>
          </li>
        ))}
      </ul>
    </InfoPage>
  )
}
