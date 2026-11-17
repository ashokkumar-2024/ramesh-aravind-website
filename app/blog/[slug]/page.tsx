import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BASE_URL, PERSON_ID } from "@/lib/site-facts"
import { blogPosts, BLOG_PUBLISHED } from "@/lib/blog-posts"

export const dynamicParams = false

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) return {}
  const url = `${BASE_URL}/blog/${post.slug}`
  return {
    title: { absolute: post.title },
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: url },
    openGraph: { type: "article", title: post.title, description: post.description, url, images: ["/Ra7.jpg"], publishedTime: BLOG_PUBLISHED },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) notFound()
  const url = `${BASE_URL}/blog/${post.slug}`

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      url,
      mainEntityOfPage: url,
      datePublished: BLOG_PUBLISHED,
      dateModified: BLOG_PUBLISHED,
      image: `${BASE_URL}/Ra7.jpg`,
      keywords: post.keywords.join(", "),
      about: { "@id": PERSON_ID },
      author: { "@type": "Organization", name: "Dr Ramesh Aravind Official", url: BASE_URL },
      publisher: { "@type": "Organization", name: "Dr Ramesh Aravind Official", url: BASE_URL },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE_URL}/blog` },
        { "@type": "ListItem", position: 3, name: post.title, item: url },
      ],
    },
  ]

  const others = blogPosts.filter((p) => p.slug !== post.slug)

  return (
    <main className="bg-background min-h-screen">
      {schema.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <Navigation />
      <article className="container mx-auto px-4 sm:px-6 pt-36 md:pt-44 pb-12 max-w-3xl text-[#0e2a3f]">
        <nav aria-label="Breadcrumb" className="text-sm mb-4 font-[var(--font-body)]">
          <a href="/" className="underline underline-offset-2 hover:text-[#8a5d24]">Home</a>
          <span className="mx-2">/</span>
          <a href="/blog" className="underline underline-offset-2 hover:text-[#8a5d24]">Blog</a>
        </nav>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 leading-tight">{post.title}</h1>
        <p className="text-sm mb-8 opacity-75 font-[var(--font-body)]">
          Published <time dateTime={BLOG_PUBLISHED}>17 November 2026</time>
        </p>
        <div className="blog-body font-[var(--font-body)]" dangerouslySetInnerHTML={{ __html: post.html }} />

        <section className="mt-14 border-t border-[#0e2a3f]/15 pt-8">
          <h2 className="text-xl font-bold mb-4">More articles</h2>
          <ul className="space-y-2 font-[var(--font-body)]">
            {others.map((p) => (
              <li key={p.slug}>
                <a href={`/blog/${p.slug}`} className="underline underline-offset-2 hover:text-[#8a5d24]">{p.title}</a>
              </li>
            ))}
          </ul>
          <p className="text-sm mt-6 font-[var(--font-body)]">
            For bookings and enquiries: <a href="mailto:enquiry@ramesharavind.com" className="underline underline-offset-2">enquiry@ramesharavind.com</a>
          </p>
        </section>
      </article>
      <Footer />
    </main>
  )
}
