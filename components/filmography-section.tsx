"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const languages = ["All", "Kannada", "Tamil", "Telugu", "Hindi"]

const films = [
  { title: "Sundara Swapnagalu", year: "1986", language: "Kannada", role: "Debut", image: "/filmography/sundara-swapnagalu.png" },
  { title: "Rudraveena", year: "1988", language: "Telugu", role: "Supporting", image: "/filmography/rudraveena.png" },
  { title: "Duet", year: "1994", language: "Tamil", role: "Lead", image: "/filmography/duet.png" },
  { title: "Sathi Leelavathi", year: "1995", language: "Tamil", role: "Lead", image: "/filmography/sathi-leelavathi.png" },
  { title: "Amrutha Varshini", year: "1997", language: "Kannada", role: "Lead", image: "/filmography/amrutha-varshini.png" },
  { title: "O Mallige", year: "1997", language: "Kannada", role: "Lead", image: "/filmography/o-mallige.png" },
  { title: "Nammoora Mandara Hoove", year: "1997", language: "Kannada", role: "Lead", image: "/filmography/nammoora-mandara-hoove.png" },
  { title: "Hoomale", year: "1998", language: "Kannada", role: "Actor/Writer", image: "/filmography/hoomale.png" },
  { title: "Bhoomi Thayiya Chochhala Maga", year: "1998", language: "Kannada", role: "Actor", image: "/filmography/bhoomi-thayiya-chochhala-maga.png" },
  { title: "Kotigalu Saar Kotigalu", year: "2001", language: "Kannada", role: "Actor", image: "/filmography/kotigalu-saar-kotigalu.png" },
  { title: "Panchatanthiram", year: "2002", language: "Tamil", role: "Actor", image: "/filmography/pancha-tantra.jpg" },
  { title: "Apthamitra", year: "2004", language: "Kannada", role: "Lead", image: "/filmography/apta-mitra.jpg" },
  { title: "Rama Shama Bhama", year: "2005", language: "Kannada", role: "Director", image: "/filmography/rama-shama-bhama.png" },
  { title: "Uttama Villain", year: "2015", language: "Tamil", role: "Director", image: "/filmography/uttama-villain.jpg" },
  { title: "Sundaranga Jaana", year: "2016", language: "Kannada", role: "Director", image: "/filmography/sundaranga-jaana.png" },
  { title: "Pushpaka Vimana", year: "2017", language: "Kannada", role: "Actor", image: "/filmography/pushpaka-vimana.jpg" },
  { title: "100", year: "2019", language: "Kannada", role: "Director/Actor", image: "/filmography/100.png" },
  { title: "Shivaji Surathkal", year: "2020", language: "Kannada", role: "Lead", image: "/filmography/shivaji-surathkal.jpg" },
  { title: "Maha Sharanya Haralya", year: "2023", language: "Kannada", role: "Actor", image: "/filmography/maha-sharanya-haralya.jpg" },
  { title: "Shivaji Surathkal 2", year: "2023", language: "Kannada", role: "Lead", image: "/filmography/shivaji-surathkal-2.jpg" },
  { title: "KD - The Devil", year: "2024", language: "Kannada", role: "Actor", image: "/filmography/kd-the-devil.png" },
]

export function FilmographySection() {
  const [activeFilter, setActiveFilter] = useState("All")

  const filteredFilms = activeFilter === "All" ? films : films.filter((film) => film.language === activeFilter)

  return (
    <section id="filmography" className="relative py-8 sm:py-10 md:py-12 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 90% 70% at 50% 100%, oklch(0.94 0.028 68 / 0.35), transparent),
            radial-gradient(ellipse 50% 35% at 20% 25%, oklch(0.58 0.11 50 / 0.04), transparent)
          `,
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-xs sm:text-sm text-[oklch(0.58_0.11_50)] tracking-[0.3em] sm:tracking-[0.5em] uppercase mb-2 sm:mb-3 font-[var(--font-body)]">
            Filmography
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold gold-text mb-3 sm:mb-4">A Cinematic Journey</h3>
          <p className="text-[oklch(0.58_0.11_50)] font-[var(--font-body)] max-w-2xl mx-auto text-base sm:text-lg">
            Over 140 films across Kannada, Tamil, Telugu, and Hindi cinema
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8">
          {languages.map((lang) => (
            <button
              key={lang}
              onClick={() => setActiveFilter(lang)}
              className={cn(
                "relative px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-full text-xs sm:text-sm font-medium font-[var(--font-body)] neuro-highlight",
                activeFilter === lang
                  ? "bg-[#0e2a3f] text-white"
                  : "bg-transparent text-[oklch(0.45_0.04_30)] hover:bg-[#124166] hover:text-white border border-[#0e2a3f]/20 hover:border-[#124166]",
              )}
              style={{
                boxShadow: activeFilter === lang ? "0 0 25px oklch(0.25 0.04 25 / 0.2)" : "none",
              }}
            >
              {lang}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {filteredFilms.map((film, index) => (
            <div key={`${film.title}-${index}`} className="relative overflow-hidden rounded-xl depth-shadow">
              <div className="aspect-[4/3] relative">
                <img
                  src={film.image}
                  alt={film.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 bg-gradient-to-t from-black/60 via-black/40 to-transparent">
                  <span className="inline-block px-2 sm:px-3 py-1 sm:py-1.5 text-xs rounded-full mb-1.5 sm:mb-2 font-[var(--font-body)] bg-[#0e2a3f] text-white">
                    {film.language}
                  </span>
                  <h4 className="text-base sm:text-lg font-bold text-white mb-0.5">{film.title}</h4>
                  <p className="text-white/90 text-xs sm:text-sm font-[var(--font-body)]">
                    {film.year} &bull; {film.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
