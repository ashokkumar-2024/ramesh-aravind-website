import { MetadataRoute } from 'next'

// Bump the date on a page when its content actually changes
const pages: { path: string; lastModified: string; priority: number }[] = [
  { path: '', lastModified: '2026-11-17', priority: 1.0 },
  { path: '/ramesh-aravind-biography', lastModified: '2026-11-17', priority: 0.9 },
  { path: '/movies', lastModified: '2026-11-17', priority: 0.9 },
  { path: '/speaker-portfolio', lastModified: '2026-11-05', priority: 0.9 },
  { path: '/director-portfolio', lastModified: '2026-11-05', priority: 0.8 },
  { path: '/television-shows', lastModified: '2026-11-17', priority: 0.8 },
  { path: '/books', lastModified: '2026-11-17', priority: 0.8 },
  { path: '/awards', lastModified: '2026-11-17', priority: 0.8 },
  { path: '/contact', lastModified: '2026-11-17', priority: 0.8 },
  { path: '/best-movies', lastModified: '2026-11-05', priority: 0.7 },
  { path: '/producer-portfolio', lastModified: '2026-11-05', priority: 0.7 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.ramesharavind.com'

  return pages.map((p) => ({
    url: `${baseUrl}${p.path}`,
    lastModified: new Date(p.lastModified),
    changeFrequency: 'monthly',
    priority: p.priority,
  }))
}
