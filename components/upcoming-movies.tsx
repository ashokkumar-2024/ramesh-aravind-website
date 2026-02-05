"use client"

import { useEffect, useRef, useState } from "react"
import { Calendar, Film } from "lucide-react"

const upcomingMovies = [
  { title: "KD - The Devil", subtitle: "KD - The Devil", language: "Kannada", role: "Actor", image: "/kd.webp" },
  { title: "Daiji", subtitle: "Daiji", language: "Kannada", role: "Actor", image: "/daiji.jpg" },
  { title: "Butterfly", subtitle: "Butterfly", language: "Kannada", role: "Actor", image: "/butterfly.webp" },
]

export function UpcomingMovies() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-8 md:py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-background" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-sm text-primary tracking-[0.3em] uppercase mb-2 font-[var(--font-inter)]">
            Upcoming Movies
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold gold-text mb-2">Coming Soon</h3>
          <p className="text-muted-foreground font-[var(--font-inter)] max-w-2xl mx-auto">
            Exciting new projects on the horizon
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {upcomingMovies.map((movie, index) => (
            <div
              key={movie.title}
              className={`glass-card rounded-xl overflow-hidden group hover:border-primary/50 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="aspect-[2/3] relative overflow-hidden">
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent" />

                {/* Coming Soon Badge */}
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full animate-pulse font-[var(--font-inter)]">
                    <Calendar className="h-3 w-3" />
                    Coming Soon
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <Film className="h-4 w-4 text-primary" />
                    <span className="text-primary text-xs font-[var(--font-inter)]">{movie.language}</span>
                  </div>
                  <h4 className="text-xl font-bold text-foreground">{movie.title}</h4>
                  <p className="text-muted-foreground text-sm font-[var(--font-inter)]">{movie.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
