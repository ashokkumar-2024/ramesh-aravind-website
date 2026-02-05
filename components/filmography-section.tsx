"use client"

import { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

const languages = ["All", "Kannada", "Tamil", "Telugu", "Hindi"]

const films = [
  { title: "Sundara Swapnagalu", year: "1986", language: "Kannada", role: "Debut", image: "/Sundara_Swapnagalu.jpg" },
  { title: "America America", year: "1995", language: "Kannada", role: "Lead", image: "/America_America_.jpg" },
  { title: "Amrutha Varshini", year: "1997", language: "Kannada", role: "Lead", image: "/Amruthavarshini_poster.jpg" },
  { title: "O Mallige", year: "1997", language: "Kannada", role: "Lead", image: "/O Mallige.jpg" },
  { title: "Hoomale", year: "1998", language: "Kannada", role: "Actor/Writer", image: "/Hoomale.jpg" },
  { title: "Rama Shama Bhama", year: "2005", language: "Kannada", role: "Director", image: "/rama shama bhama.avif" },
  { title: "Sathi Leelavathi", year: "1995", language: "Tamil", role: "Lead", image: "/Sathi Leelavathi.jpg" },
  { title: "Uttama Villain", year: "2015", language: "Tamil", role: "Director", image: "/VW.jpg" },
  { title: "100", year: "2019", language: "Kannada", role: "Director/Actor", image: "/100.jpg" },
  { title: "Sundaranga Jaana", year: "2018", language: "Kannada", role: "Director", image: "/Sundaranga_Jaana_Kannada_Film_Poster.jpg" },
  { title: "Shanti Kranti", year: "1991", language: "Kannada", role: "Lead", image: "/shanti-kranti-1991.jpg" },
  { title: "Nammoora Mandara Hoove", year: "1997", language: "Kannada", role: "Lead", image: "/Namoora_Mandara_Hoove_Promotional_Poster.jpg" },
]

export function FilmographySection() {
  const [activeFilter, setActiveFilter] = useState("All")
  const [hoveredFilm, setHoveredFilm] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const filteredFilms = activeFilter === "All" ? films : films.filter((film) => film.language === activeFilter)

  return (
    <section id="filmography" ref={sectionRef} className="relative py-8 md:py-12 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 90% 70% at 50% 100%, oklch(0.94 0.028 68 / 0.35), transparent),
            radial-gradient(ellipse 50% 35% at 20% 25%, oklch(0.58 0.11 50 / 0.04), transparent)
          `,
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`text-center mb-6 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-sm text-[oklch(0.58_0.11_50)] tracking-[0.5em] uppercase mb-3 font-[var(--font-body)]">
            Filmography
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold gold-text mb-4">A Cinematic Journey</h3>
          <p className="text-[oklch(0.58_0.11_50)] font-[var(--font-body)] max-w-2xl mx-auto text-lg">
            Over 140 films across Kannada, Tamil, Telugu, and Hindi cinema
          </p>
        </div>

        <div
          className={`flex flex-wrap justify-center gap-4 mb-6 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {languages.map((lang) => (
            <button
              key={lang}
              onClick={() => setActiveFilter(lang)}
              className={cn(
                "relative px-8 py-3 rounded-full text-sm font-medium transition-all duration-500 font-[var(--font-body)] neuro-highlight",
                activeFilter === lang
                  ? "bg-[oklch(0.25_0.04_25)] text-[oklch(0.97_0.01_75)]"
                  : "bg-transparent text-[oklch(0.45_0.04_30)] hover:text-foreground border border-[oklch(0.25_0.04_25/0.15)] hover:border-[oklch(0.25_0.04_25/0.35)]",
              )}
              style={{
                boxShadow: activeFilter === lang ? "0 0 25px oklch(0.25 0.04 25 / 0.2)" : "none",
              }}
            >
              {lang}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredFilms.map((film, index) => (
            <div
              key={`${film.title}-${index}`}
              onMouseEnter={() => setHoveredFilm(index)}
              onMouseLeave={() => setHoveredFilm(null)}
              className={`group transition-all duration-700 gpu-accelerate museum-perspective ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
              }`}
              style={{ transitionDelay: `${300 + index * 80}ms` }}
            >
              <div className="relative overflow-hidden rounded-xl depth-shadow">
                <div className="aspect-[2/3] relative">
                  <img
                    src={film.image}
                    alt={film.title}
                    loading="lazy"
                    className={`w-full h-full object-cover transition-all duration-700 ${
                      hoveredFilm === index ? "scale-105 brightness-105" : "scale-100 brightness-100"
                    }`}
                  />

                  <div
                    className={`absolute inset-0 transition-all duration-500 ${
                      hoveredFilm === index ? "opacity-100" : "opacity-0"
                    }`}
                    style={{
                      background: `radial-gradient(ellipse at center, oklch(0.58 0.11 50 / 0.12), transparent 70%)`,
                    }}
                  />

                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[oklch(0.965_0.018_75)] via-[oklch(0.965_0.018_75/0.8)] to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <span
                      className={`inline-block px-3 py-1.5 text-xs rounded-full mb-2 font-[var(--font-body)] transition-all duration-300 ${
                        hoveredFilm === index
                          ? "bg-[oklch(0.25_0.04_25)] text-[oklch(0.97_0.01_75)]"
                          : "bg-[oklch(0.58_0.11_50/0.15)] text-[oklch(0.25_0.04_25)]"
                      }`}
                    >
                      {film.language}
                    </span>
                    <h4 className="text-lg font-bold text-amber-900 mb-0.5">{film.title}</h4>
                    <p className="text-amber-800 text-sm font-[var(--font-body)]">
                      {film.year} &bull; {film.role}
                    </p>
                  </div>
                </div>
              </div>

              <div
                className={`absolute -inset-4 rounded-2xl transition-opacity duration-500 -z-10 gpu-accelerate ${
                  hoveredFilm === index ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  background: `radial-gradient(ellipse at center, oklch(0.58 0.11 50 / 0.08), transparent 70%)`,
                  filter: "blur(22px)",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
