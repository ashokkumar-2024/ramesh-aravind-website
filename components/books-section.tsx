"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { Award, Headphones, Volume2, Play } from "lucide-react"

const books = [
  {
    title: "It's No Fun without U",
    language: "English",
    description: "Inspirational stories and life lessons",
    awards: [],
    hasTrailer: false,
    image: "/Its No Fun with u.jpg"
  },
  {
    title: "Kushiyinda Ramesh",
    language: "Kannada",
    description: "Personal experiences and wisdom",
    awards: [],
    hasTrailer: false,
    image: "/kushiyinda ramesh.webp"
  },
  {
    title: "Art of Success",
    language: "Kannada",
    description: "A collection of inspiring quotes",
    awards: [],
    hasTrailer: false,
    image: "/success.webp"
  },
  {
    title: "Preetiyinda Ramesh",
    language: "Kannada",
    description: "5 editions released within 5 months",
    awards: ["Best Selling"],
    hasTrailer: true,
    image: "/preethiyinda.webp"
  },
  {
    title: "Anbudhan Ramesh",
    language: "Tamil",
    description: "Tamil translation of Preetiyinda Ramesh (2024)",
    awards: [],
    hasTrailer: true,
    image: "/Tamil Anbudhan ramesh.webp"
  },
]

export function BooksSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeBook, setActiveBook] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const [showVideoPopup, setShowVideoPopup] = useState(false)
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)
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
    if (isVisible && !isHovering) {
      const interval = setInterval(() => {
        setActiveBook((prev) => (prev + 1) % books.length)
      }, 4000)
      return () => clearInterval(interval)
    }
  }, [isVisible, isHovering])

  return (
    <section id="books" ref={sectionRef} className="relative py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 55% 35% at 30% 50%, oklch(0.58 0.11 50 / 0.05), transparent),
            radial-gradient(ellipse 45% 25% at 70% 70%, oklch(0.78 0.045 25 / 0.04), transparent)
          `,
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className={`text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-sm text-[oklch(0.58_0.11_50)] tracking-[0.5em] uppercase mb-3 font-[var(--font-body)]">
            Books & Writing
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold gold-text mb-3 sm:mb-4">Words That Inspire</h3>
          <p className="text-[oklch(0.45_0.04_30)] font-[var(--font-body)] max-w-2xl mx-auto text-base sm:text-lg px-4">
            Bestselling author sharing wisdom through the written word
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
          <div
            className={`flex justify-center transition-all duration-1000 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <div className="relative" style={{ perspective: "1500px" }}>
              <div
                className="absolute -inset-14 rounded-full blur-3xl gpu-accelerate"
                style={{
                  background: `radial-gradient(ellipse at center, oklch(0.58 0.11 50 / 0.1), transparent 70%)`,
                }}
              />

              <div
                className={`relative w-48 h-64 sm:w-64 sm:h-80 md:w-96 md:h-[500px] cursor-pointer transition-all duration-1000 gpu-accelerate ${
                  isHovering ? "" : "anti-gravity"
                }`}
                style={{
                  transformStyle: "preserve-3d",
                  transform: `rotateY(${isHovering ? -8 : activeBook * -5}deg) rotateX(${isHovering ? 4 : 1.5}deg)`,
                }}
              >
                <div
                  className="absolute inset-0 rounded-lg overflow-hidden"
                  style={{
                    background: `linear-gradient(155deg, oklch(0.99 0.01 78 / 0.9), oklch(0.96 0.02 70 / 0.7))`,
                    boxShadow: 'none',
                  }}
                >
                  <img
                    src={books[activeBook].image}
                    alt={books[activeBook].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/2 via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.965_0.018_75/0.1)] via-transparent to-transparent" />

                  <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6">
                    <h4 className="text-lg md:text-2xl font-bold text-foreground mb-1 md:mb-2">{books[activeBook].title}</h4>
                    <p className="text-sm md:text-base text-[oklch(0.58_0.11_50)] font-[var(--font-body)]">{books[activeBook].language}</p>
                  </div>
                </div>

                {/* Book spine */}
                <div
                  className="absolute top-0 left-0 w-5 h-full origin-left rounded-l-sm"
                  style={{
                    transform: "rotateY(-90deg) translateX(-10px)",
                    background: `linear-gradient(90deg, oklch(0.88 0.02 70), oklch(0.92 0.018 72), oklch(0.88 0.02 70))`,
                  }}
                />
                {/* Page edges */}
                <div
                  className="absolute top-2 right-0 w-4 h-[calc(100%-16px)] origin-right rounded-r-sm"
                  style={{
                    transform: "rotateY(90deg) translateX(8px)",
                    background: `repeating-linear-gradient(to bottom, oklch(0.96 0 0), oklch(0.92 0 0) 1px, oklch(0.96 0 0) 1px, oklch(0.96 0 0) 3px)`,
                    boxShadow: "inset 2px 0 4px oklch(0.25 0.04 25 / 0.05)",
                  }}
                />
              </div>

              <div
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-52 h-6 rounded-full blur-xl gpu-accelerate"
                style={{
                  background: `radial-gradient(ellipse at center, transparent, transparent)`,
                }}
              />
            </div>
          </div>

          {/* Book list with cream cards */}
          <div className="space-y-3 sm:space-y-4">
            {books.map((book, index) => (
              <div
                key={book.title}
                onClick={() => setActiveBook(index)}
                className={`p-3 sm:p-4 rounded-xl cursor-pointer transition-all duration-500 neuro-highlight hover-lift ${
                  activeBook === index ? "scale-[1.02]" : ""
                } ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}
                style={{
                  transitionDelay: `${index * 150}ms`,
                  background:
                    activeBook === index
                      ? `linear-gradient(155deg, oklch(0.99 0.01 78 / 0.95), oklch(0.96 0.02 70 / 0.8))`
                      : "transparent",
                  border: activeBook === index ? "1px solid oklch(0.58 0.11 50 / 0.15)" : "1px solid transparent",
                  boxShadow: activeBook === index ? "0 8px 32px oklch(0.25 0.04 25 / 0.06)" : "none",
                }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h4
                      className={`text-xl font-bold mb-1 transition-colors duration-300 ${
                        activeBook === index ? "text-foreground" : "text-foreground/75"
                      }`}
                    >
                      {book.title}
                    </h4>
                    <p className="text-[oklch(0.45_0.04_30)] text-sm font-[var(--font-body)] mb-2">
                      {book.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {book.awards.map((award) => (
                        <span
                          key={award}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[oklch(0.58_0.11_50/0.1)] text-[oklch(0.58_0.11_50)] text-xs rounded-full font-[var(--font-body)]"
                        >
                          <Award className="h-3 w-3" />
                          {award}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Video Trailer Icon */}
                  {book.hasTrailer && (
                    <div className="relative">
                      <div 
                        className="w-12 h-12 rounded-full bg-[oklch(0.58_0.11_50/0.1)] flex items-center justify-center cursor-pointer hover:bg-[oklch(0.58_0.11_50/0.2)] transition-all duration-300 hover:scale-110 active:scale-95"
                        style={{
                          animation: 'pulse 2s ease-in-out infinite'
                        }}
                        onClick={() => {
                          setSelectedVideo(book.title)
                          setShowVideoPopup(true)
                        }}
                      >
                        <Play 
                          className="h-5 w-5 text-[oklch(0.58_0.11_50)] ml-0.5 transition-transform duration-200" 
                          fill="currentColor"
                        />
                      </div>
                      
                      {/* Animated rings */}
                      <div 
                        className="absolute inset-0 rounded-full border-2 border-[oklch(0.58_0.11_50/0.3)]"
                        style={{
                          animation: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite'
                        }}
                      />
                      <div 
                        className="absolute inset-0 rounded-full border border-[oklch(0.58_0.11_50/0.2)]"
                        style={{
                          animation: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite 0.5s'
                        }}
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Audiobook card */}
            <div
              className={`p-4 rounded-xl transition-all duration-700 neuro-highlight hover-lift cream-card ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
              }`}
              style={{ transitionDelay: "500ms" }}
            >
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-xl bg-[oklch(0.58_0.11_50/0.08)] flex items-center justify-center relative overflow-hidden">
                  <Headphones className="h-8 w-8 text-[oklch(0.58_0.11_50)] relative z-10" />
                  <div className="absolute bottom-2 left-2 right-2 flex items-end justify-center gap-0.5">
                    {[8, 6, 12, 9, 15, 12, 7].map((height, i) => (
                      <div
                        key={i}
                        className="w-1 bg-[oklch(0.58_0.11_50/0.4)] rounded-full breathe-wave"
                        style={{
                          height: `${height}px`,
                          "--wave-delay": `${i * 0.1}s`,
                        } as React.CSSProperties}
                      />
                    ))}
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-foreground">MasadaMaatu with Ramesh</h4>
                  <p className="text-[oklch(0.45_0.04_30)] text-sm font-[var(--font-body)]">
                    Kannada Audiobook on Storytel
                  </p>
                </div>
                <Volume2 className="h-5 w-5 text-[oklch(0.58_0.11_50/0.45)]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Popup Modal */}
      {showVideoPopup && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowVideoPopup(false)}
        >
          <div 
            className="relative bg-white rounded-2xl p-6 max-w-2xl w-full max-h-[80vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
            style={{
              animation: 'modalSlideIn 0.3s ease-out'
            }}
          >
            {/* Close button */}
            <button
              onClick={() => setShowVideoPopup(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
            >
              ×
            </button>
            
            {/* Video content */}
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                {selectedVideo} - Book Trailer
              </h3>
              
              {/* Placeholder for video */}
              <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <div className="text-center">
                  <Play className="h-16 w-16 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500">Video trailer will be embedded here</p>
                </div>
              </div>
              
              <p className="text-gray-600">
                Watch the official book trailer for "{selectedVideo}"
              </p>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes modalSlideIn {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </section>
  )
}
