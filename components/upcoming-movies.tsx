"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function UpcomingMovies() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
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

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % 3)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % 3)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + 3) % 3)
  }

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

        {/* Carousel - Shows 3 cards at once */}
        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex gap-6 transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {/* Each slide contains 3 visible cards */}
              {[0, 1, 2].map((slideIndex) => (
                <div key={slideIndex} className="flex-shrink-0 w-full flex gap-6 justify-center">
                  {[1, 2, 3].map((num) => (
                    <div
                      key={num}
                      className="flex-shrink-0 w-48 md:w-56"
                    >
                      <div className="rounded-xl overflow-hidden shadow-xl">
                        <div className="aspect-[2/3] max-h-[280px] md:max-h-[320px]">
                          <img
                            src={`/upcoming/${((slideIndex * 3 + num - 1) % 3) + 1}.jpg`}
                            alt={`Upcoming Movie ${((slideIndex * 3 + num - 1) % 3) + 1}`}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.currentTarget.src = "/generic-placeholder-icon.png"
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all z-10"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {[0, 1, 2].map((index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  currentIndex === index ? "bg-primary w-8" : "bg-gray-400 w-2"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}