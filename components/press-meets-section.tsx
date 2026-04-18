"use client"

import { useState, useEffect, useRef } from "react"

const pressImages = [
  { src: "/press3.jpeg", alt: "Press meet moment 3" },
  { src: "/press2.jpeg", alt: "Press meet moment 2" },
  { src: "/Press1.png", alt: "Press meet moment 1" },
]

export function PressMeetsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="press-meets" ref={sectionRef} className="py-12 sm:py-16 md:py-20 relative">
      <div className="absolute inset-0 spotlight opacity-20" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div
          className={`text-center mb-8 sm:mb-10 md:mb-12 transition-all duration-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-xs sm:text-sm text-primary tracking-[0.3em] sm:tracking-[0.4em] uppercase mb-3 sm:mb-4 font-[var(--font-body)]">Press Coverage</h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold gold-text mb-3 sm:mb-4">Press Meet&apos;s</h3>
          <p className="text-muted-foreground font-[var(--font-body)] max-w-2xl mx-auto text-base sm:text-lg">
            In the spotlight, press coverage celebrating the journey.
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 md:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {pressImages.map((image, idx) => (
            <div
              key={image.src}
              className={`relative rounded-2xl overflow-hidden shadow-lg transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: `${200 + idx * 120}ms` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px section-divider" />
    </section>
  )
}
