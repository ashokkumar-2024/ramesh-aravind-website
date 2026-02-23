"use client"

import { useEffect, useRef, useState } from "react"
import { Film, Clapperboard, PenTool, Tv, Mic2, BookOpen, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

const careers = [
  {
    icon: Film,
    title: "Actor",
    subtitle: "140+ Films",
    description: "Starred in over 140 films across Kannada, Tamil, Telugu, and Hindi cinema.",
    mood: "warm",
  },
  {
    icon: Clapperboard,
    title: "Director",
    subtitle: "10 Films",
    description: "Directed critically acclaimed films including Rama Shama Bhama and 100.",
    mood: "warm",
  },
  {
    icon: Users,
    title: "Producer",
    subtitle: "Film Production",
    description: "Produced several successful films showcasing diverse storytelling.",
    mood: "neutral",
  },
  {
    icon: PenTool,
    title: "Writer",
    subtitle: "Bestselling Author",
    description: "Author of bestselling books including 'Art of Success' and 'Preetiyinda Ramesh'.",
    mood: "warm",
  },
  {
    icon: Tv,
    title: "TV Host",
    subtitle: "Iconic Shows",
    description: "Host of Weekend With Ramesh and Kannadada Kotyadhipati.",
    mood: "neutral",
  },
  {
    icon: BookOpen,
    title: "Author",
    subtitle: "Published Works",
    description: "Written inspiring books on personal development and life experiences.",
    mood: "cool",
  },
  {
    icon: Mic2,
    title: "Motivational Speaker",
    subtitle: "Inspiring Millions",
    description: "Delivers insightful talks on personal development and leadership.",
    mood: "warm",
  },
]

const moodColors = {
  warm: "oklch(0.58 0.11 50)",
  cool: "oklch(0.5 0.08 200)",
  neutral: "oklch(0.55 0.06 75)",
}

export function CareerHighlights() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [activeEnvironment, setActiveEnvironment] = useState<string>("warm")
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

  useEffect(() => {
    if (hoveredIndex !== null) setActiveEnvironment(careers[hoveredIndex].mood)
  }, [hoveredIndex])

  return (
    <section id="career" ref={sectionRef} className="relative py-6 sm:py-8 md:py-12 lg:py-16 overflow-hidden">
      <div
        className="absolute inset-0 transition-all duration-1000 gpu-accelerate"
        style={{
          background: `
            radial-gradient(ellipse 70% 50% at 50% 25%, ${moodColors[activeEnvironment as keyof typeof moodColors]} / 0.06, transparent),
            radial-gradient(ellipse 50% 35% at 80% 80%, oklch(0.78 0.045 25 / 0.04), transparent)
          `,
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className={`text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-sm text-[oklch(0.58_0.11_50)] tracking-[0.5em] uppercase mb-3 font-[var(--font-body)]">
            Career Dimensions
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold gold-text">A Multi-Faceted Artist</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
          {careers.map((career, index) => (
            <div
              key={career.title}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`relative cursor-pointer transition-all duration-700 gpu-accelerate neuro-highlight ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
              }`}
              style={{
                transitionDelay: `${index * 120}ms`,
                transform:
                  hoveredIndex === index
                    ? "translateY(-10px) translateZ(20px) scale(1.02)"
                    : "translateY(0) translateZ(0) scale(1)",
              }}
            >
              <div
                className="relative p-4 sm:p-6 rounded-2xl transition-all duration-500"
                style={{
                  background:
                    hoveredIndex === index
                      ? `linear-gradient(155deg, oklch(0.99 0.01 78 / 0.9), oklch(0.96 0.02 70 / 0.7))`
                      : "transparent",
                  boxShadow:
                    hoveredIndex === index
                      ? "0 10px 40px oklch(0.25 0.04 25 / 0.08), 0 2px 10px oklch(0.25 0.04 25 / 0.04)"
                      : "none",
                }}
              >
                {/* Animated Dotted Border */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  style={{
                    opacity: hoveredIndex === index ? 1 : 0,
                    transition: 'opacity 0.5s ease-out',
                  }}
                >
                  <rect
                    x="2"
                    y="2"
                    width="calc(100% - 4px)"
                    height="calc(100% - 4px)"
                    rx="16"
                    fill="none"
                    stroke="oklch(0.58 0.11 50 / 0.4)"
                    strokeWidth="2"
                    strokeDasharray="8 12"
                    strokeLinecap="round"
                    style={{
                      filter: 'drop-shadow(0 0 4px oklch(0.58 0.11 50 / 0.2))',
                    }}
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      from="0"
                      to="80"
                      dur="4s"
                      repeatCount="indefinite"
                    />
                  </rect>
                </svg>
                <div
                  className="relative w-16 h-16 rounded-xl flex items-center justify-center mb-4 transition-all duration-500"
                  style={{
                    background:
                      hoveredIndex === index
                        ? `${moodColors[career.mood as keyof typeof moodColors]} / 0.15`
                        : `oklch(0.58 0.11 50 / 0.08)`,
                    boxShadow:
                      hoveredIndex === index
                        ? `0 0 35px ${moodColors[career.mood as keyof typeof moodColors]} / 0.25`
                        : "none",
                  }}
                >
                  <career.icon
                    className="h-8 w-8 transition-all duration-500"
                    style={{
                      color:
                        hoveredIndex === index
                          ? moodColors[career.mood as keyof typeof moodColors]
                          : "oklch(0.58 0.11 50)",
                    }}
                  />
                </div>

                <h4 className="text-xl font-bold mb-1 text-foreground">{career.title}</h4>
                <p
                  className="text-sm mb-2 font-[var(--font-body)] transition-colors duration-300"
                  style={{
                    color:
                      hoveredIndex === index
                        ? moodColors[career.mood as keyof typeof moodColors]
                        : "oklch(0.58 0.11 50 / 0.65)",
                  }}
                >
                  {career.subtitle}
                </p>
                <p className="text-[oklch(0.45_0.04_30)] text-sm font-[var(--font-body)] leading-relaxed mb-2">
                  {career.description}
                </p>
                
                {career.title === "Actor" ? (
                  <a
                    href="/best-movies"
                    className="inline-flex items-center text-sm font-semibold bg-[oklch(0.25_0.04_25)] text-[oklch(0.97_0.01_75)] hover:bg-[oklch(0.3_0.045_25)] px-4 py-2 rounded-lg transition-colors duration-300"
                  >
                    Best Movies →
                  </a>
                ) : career.title === "Director" ? (
                  <a
                    href="/director-portfolio"
                    className="inline-flex items-center text-sm font-semibold bg-[oklch(0.25_0.04_25)] text-[oklch(0.97_0.01_75)] hover:bg-[oklch(0.3_0.045_25)] px-4 py-2 rounded-lg transition-colors duration-300"
                  >
                    Director Portfolio →
                  </a>
                ) : career.title === "Producer" ? (
                  <a
                    href="/producer-portfolio"
                    className="inline-flex items-center text-sm font-semibold bg-[oklch(0.25_0.04_25)] text-[oklch(0.97_0.01_75)] hover:bg-[oklch(0.3_0.045_25)] px-4 py-2 rounded-lg transition-colors duration-300"
                  >
                    TV Productions →
                  </a>
                ) : career.title === "Motivational Speaker" ? (
                  <a
                    href="/speaker-portfolio"
                    className="inline-flex items-center text-sm font-semibold bg-[oklch(0.25_0.04_25)] text-[oklch(0.97_0.01_75)] hover:bg-[oklch(0.3_0.045_25)] px-4 py-2 rounded-lg transition-colors duration-300"
                  >
                    Inspiring Talks →
                  </a>
                ) : career.title === "Writer" ? (
                  <a
                    href="/#books"
                    className="inline-flex items-center text-sm font-semibold bg-[oklch(0.25_0.04_25)] text-[oklch(0.97_0.01_75)] hover:bg-[oklch(0.3_0.045_25)] px-4 py-2 rounded-lg transition-colors duration-300"
                  >
                    Read Books →
                  </a>
                ) : career.title === "Author" ? (
                  <a
                    href="/#books"
                    className="inline-flex items-center text-sm font-semibold bg-[oklch(0.25_0.04_25)] text-[oklch(0.97_0.01_75)] hover:bg-[oklch(0.3_0.045_25)] px-4 py-2 rounded-lg transition-colors duration-300"
                  >
                    Read Books →
                  </a>
                ) : career.title === "TV Host" ? (
                  <a
                    href="/#tv-shows"
                    className="inline-flex items-center text-sm font-semibold bg-[oklch(0.25_0.04_25)] text-[oklch(0.97_0.01_75)] hover:bg-[oklch(0.3_0.045_25)] px-4 py-2 rounded-lg transition-colors duration-300"
                  >
                    TV Shows →
                  </a>
                ) : (
                  <div className="h-4" />
                )}
              </div>

              <div
                className={`absolute -inset-2 rounded-2xl transition-all duration-500 -z-10 gpu-accelerate ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  background: `radial-gradient(ellipse at center, ${moodColors[career.mood as keyof typeof moodColors]} / 0.1, transparent 70%)`,
                  filter: "blur(18px)",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
