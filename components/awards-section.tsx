"use client"

import { useEffect, useRef, useState } from "react"

const awards = [
  { year: "1996", award: "Karnataka State Film Awards", category: "Best Actor", film: "America America" },
  { year: "1997", award: "Filmfare Awards South", category: "Best Actor – Kannada", film: "Amrutha Varshini" },
  { year: "1997", award: "Udaya Film Awards", category: "Best Actor", film: "O Mallige" },
  { year: "1998", award: "Filmfare Award South", category: "Best Actor – Kannada", film: "Hoomale" },
  { year: "2005", award: "SIIMA Awards", category: "Best Director", film: "Rama Shama Bhama" },
  { year: "2019", award: "Karnataka State Film Awards", category: "Best Director", film: "100" },
]

export function AwardsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!isAutoPlay) return
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % awards.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [isAutoPlay])

  return (
    <section 
      ref={sectionRef}
      id="awards" 
      className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden py-6 md:py-8"
      style={{
        background: 'var(--cream-base)'
      }}
    >
      {/* Cinematic Vignette */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/15" />

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 md:px-6">
        {/* Elegant Header */}
        <div className="text-center mb-4 md:mb-6">
          <div className="inline-block">
            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-thin tracking-[0.1em] sm:tracking-[0.2em] mb-2 gold-text whitespace-nowrap">
              AWARDS & RECOGNITION
            </h2>
            <div className="flex justify-center space-x-2">
              <div className="w-8 h-px bg-gradient-to-r from-transparent via-current to-transparent" style={{ color: 'var(--copper)' }} />
              <div className="w-2 h-2 rounded-full" style={{ background: 'var(--copper)' }} />
              <div className="w-8 h-px bg-gradient-to-r from-transparent via-current to-transparent" style={{ color: 'var(--copper)' }} />
            </div>
          </div>
        </div>

        {/* Showcase Container */}
        <div className="relative h-[300px] md:h-[400px] flex items-center justify-center">
          {/* Background Awards */}
          <div className="absolute inset-0">
            {awards.map((award, index) => {
              const offset = (index - activeIndex + awards.length) % awards.length
              const isActive = index === activeIndex
              const isPrev = offset === awards.length - 1
              const isNext = offset === 1
              
              let transform = 'translateX(0) scale(0.7) rotateY(45deg)'
              let opacity = 0.3
              let zIndex = 1
              
              if (isActive) {
                transform = 'translateX(0) scale(1) rotateY(0deg)'
                opacity = 1
                zIndex = 10
              } else if (isPrev) {
                transform = 'translateX(-120%) scale(0.8) rotateY(25deg)'
                opacity = 0.6
                zIndex = 5
              } else if (isNext) {
                transform = 'translateX(120%) scale(0.8) rotateY(-25deg)'
                opacity = 0.6
                zIndex = 5
              } else if (offset === 2) {
                transform = 'translateX(200%) scale(0.6) rotateY(-45deg)'
                opacity = 0.2
                zIndex = 2
              } else if (offset === awards.length - 2) {
                transform = 'translateX(-200%) scale(0.6) rotateY(45deg)'
                opacity = 0.2
                zIndex = 2
              }
              
              return (
                <div
                  key={index}
                  className="absolute inset-0 flex items-center justify-center transition-all duration-1000 ease-out"
                  style={{
                    transform,
                    opacity,
                    zIndex,
                    transformStyle: 'preserve-3d'
                  }}
                >
                  {/* Award Card */}
                  <div 
                    className="w-56 h-72 md:w-72 md:h-80 rounded-3xl p-4 md:p-6 backdrop-blur-sm border-2 shadow-2xl"
                    style={{
                      background: isActive 
                        ? 'linear-gradient(145deg, var(--cream-soft), var(--cream-warm))' 
                        : 'linear-gradient(145deg, var(--cream-base), var(--cream-deep))',
                      borderColor: isActive ? 'var(--copper)' : 'var(--cream-deep)',
                      boxShadow: isActive 
                        ? '0 30px 80px rgba(0,0,0,0.3), 0 0 0 1px var(--copper)' 
                        : '0 20px 40px rgba(0,0,0,0.1)'
                    }}
                  >
                    {/* Year */}
                    <div className="text-center mb-4">
                      <div 
                        className="inline-block px-4 py-2 rounded-full text-xl font-bold"
                        style={{
                          background: isActive ? 'var(--espresso)' : 'var(--muted)',
                          color: isActive ? 'var(--cream-soft)' : 'var(--muted-foreground)'
                        }}
                      >
                        {award.year}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="text-center space-y-3">
                      <h3 
                        className="text-xl font-bold leading-tight"
                        style={{ color: isActive ? 'var(--espresso-dark)' : 'var(--muted-foreground)' }}
                      >
                        {award.award}
                      </h3>
                      
                      <div 
                        className="inline-block px-4 py-2 rounded-full text-sm font-medium"
                        style={{
                          background: isActive ? 'var(--accent)' : 'var(--muted)',
                          color: isActive ? 'var(--accent-foreground)' : 'var(--muted-foreground)'
                        }}
                      >
                        {award.category}
                      </div>
                      
                      <p 
                        className="text-lg italic leading-relaxed"
                        style={{ color: isActive ? 'var(--foreground)' : 'var(--muted-foreground)' }}
                      >
                        "{award.film}"
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center space-x-4 md:space-x-8 mt-4 md:mt-6">
          <button
            onClick={() => {
              setIsAutoPlay(false)
              setActiveIndex((prev) => (prev - 1 + awards.length) % awards.length)
            }}
            className="w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all hover:scale-110"
            style={{ borderColor: 'var(--copper)', color: 'var(--copper)' }}
          >
            ←
          </button>
          
          <div className="flex space-x-3">
            {awards.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlay(false)
                  setActiveIndex(index)
                }}
                className="w-3 h-3 rounded-full transition-all duration-300"
                style={{
                  background: index === activeIndex ? 'var(--copper)' : 'var(--muted)',
                  transform: index === activeIndex ? 'scale(1.3)' : 'scale(1)'
                }}
              />
            ))}
          </div>
          
          <button
            onClick={() => {
              setIsAutoPlay(false)
              setActiveIndex((prev) => (prev + 1) % awards.length)
            }}
            className="w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all hover:scale-110"
            style={{ borderColor: 'var(--copper)', color: 'var(--copper)' }}
          >
            →
          </button>
        </div>
      </div>
    </section>
  )
}
