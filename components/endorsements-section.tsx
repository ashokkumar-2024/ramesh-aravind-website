"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const brands = [
  { name: "TMT Steel", image: "/tmt.jpg", videoId: "7XE0iyU5hoU" },
  { name: "Siri", image: "/drinks.png", videoId: "Tzkx29SJl7o" },
  { name: "Aashirvaad's Chilli", image: "/Masala.png", videoId: "y6L_MYSpk_I" },
  { name: "Narayanashastra", image: "/nara.jpg" }, // no video
  { name: "Vasu Agarbathies", image: "/vasu.png", videoId: "LFb0KAAOApE" },
  { name: "Silk Shirts and Dhoti", image: "/Dhoti.jpg", videoId: "dG46TWNUlMY" }
]

export function EndorsementsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isArrowHovered, setIsArrowHovered] = useState(false)
  const [playingVideo, setPlayingVideo] = useState<number | null>(null)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const nextSlide = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setActiveIndex((prev) => (prev + 1) % brands.length)
    setTimeout(() => setIsTransitioning(false), 400)
  }

  const prevSlide = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setActiveIndex((prev) => (prev - 1 + brands.length) % brands.length)
    setTimeout(() => setIsTransitioning(false), 400)
  }

  return (
    <section
      id="endorsements"
      className="relative py-8 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, var(--espresso) 0%, #1a1515 50%, #000000 100%)',
        perspective: '1400px'
      }}
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-8">
          <h3 className="text-4xl md:text-5xl font-bold gold-text">
            Endorsements
          </h3>
        </div>

        {/* 3D Slider Container */}
        <div
          className="relative flex items-center justify-center transition-all duration-700 ease-out"
          style={{ height: isMobile ? '180px' : '280px' }}
          style={{
            transformStyle: 'preserve-3d',
            transform: isArrowHovered ? 'rotateX(5deg) rotateY(3deg)' : 'rotateX(0deg) rotateY(0deg)'
          }}
        >
          {brands.map((brand, index) => {
            const isActive = index === activeIndex
            const offset = index - activeIndex
            const absOffset = Math.abs(offset)

            let transform = ''
            let zIndex = 0
            let opacity = 0.3

            if (isActive) {
              transform = isMobile
                ? 'translateX(0px) translateZ(60px) rotateY(0deg) scale(1.05)'
                : 'translateX(0px) translateZ(150px) rotateY(0deg) rotateX(0deg) scale(1.1)'
              zIndex = 10
              opacity = 1
            } else if (absOffset === 1) {
              const side = offset > 0 ? 1 : -1
              transform = isMobile
                ? `translateX(${side * 180}px) translateZ(-40px) rotateY(${-side * 25}deg) scale(0.7)`
                : `translateX(${side * 400}px) translateZ(-100px) rotateY(${-side * 35}deg) rotateX(8deg) scale(0.75)`
              zIndex = 5
              opacity = 0.6
            } else {
              const side = offset > 0 ? 1 : -1
              transform = isMobile
                ? `translateX(${side * 300}px) translateZ(-100px) rotateY(${-side * 45}deg) scale(0.4)`
                : `translateX(${side * 700}px) translateZ(-250px) rotateY(${-side * 60}deg) rotateX(15deg) scale(0.5)`
              zIndex = 1
              opacity = 0.3
            }

            const Wrapper = "div"

            return (
              <div
                key={brand.name}
                className="absolute transition-all duration-500 ease-in-out"
                style={{
                  transform,
                  transformStyle: 'preserve-3d',
                  zIndex,
                  opacity,
                  transitionTimingFunction: 'cubic-bezier(0.4, 0.0, 0.2, 1)'
                }}
              >
                <Wrapper
                  className="relative block cursor-pointer"
                  style={{
                    width: isMobile ? '220px' : '380px',
                    height: isMobile ? '150px' : '240px',
                    transformStyle: 'preserve-3d'
                  }}
                  onClick={() => brand.videoId && setPlayingVideo(index)}
                >
                  {/* Main Card */}
                  <div
                    className="w-full h-full rounded-2xl overflow-hidden flex flex-col items-center justify-center p-6 relative"
                    style={{
                      background: `linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(212, 175, 55, 0.1) 50%, rgba(0, 0, 0, 0.3) 100%)`,
                      backdropFilter: 'blur(20px)',
                      border: '2px solid rgba(212, 175, 55, 0.3)',
                      boxShadow: `
                        0 30px 80px rgba(0, 0, 0, 0.6),
                        0 15px 40px rgba(0, 0, 0, 0.4),
                        0 5px 20px rgba(0, 0, 0, 0.3),
                        inset 0 1px 0 rgba(255, 255, 255, 0.1)
                      `,
                      transform: 'translateZ(20px)'
                    }}
                  >
                    {/* Glass Reflection */}
                    <div
                      className="absolute inset-0 rounded-2xl opacity-30"
                      style={{
                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, transparent 50%)',
                        animation: isActive ? 'shimmer 2s ease-in-out infinite' : 'none'
                      }}
                    />

                    <Image
                      src={brand.image}
                      alt={brand.name}
                      width={260}
                      height={140}
                      className="object-contain mb-3"
                    />
                    <span className="text-white text-lg font-medium text-center">
                      {brand.name}
                    </span>
                    {brand.videoId && (
                      <div className="absolute bottom-2 right-2 bg-primary/80 text-white px-2 py-1 rounded text-xs">
                        Click to play
                      </div>
                    )}
                  </div>
                </Wrapper>
              </div>
            )
          })}

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            disabled={isTransitioning}
            onMouseEnter={() => setIsArrowHovered(true)}
            onMouseLeave={() => setIsArrowHovered(false)}
            className="absolute top-1/2 -translate-y-1/2 z-20 rounded-full flex items-center justify-center bg-[#0e2a3f] hover:bg-[#124166] text-white border-0 disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ left: isMobile ? '6px' : '32px', width: isMobile ? '32px' : '64px', height: isMobile ? '32px' : '64px' }}
          >
            <span className={isMobile ? 'text-base' : 'text-2xl'}>‹</span>
          </button>

          <button
            onClick={nextSlide}
            disabled={isTransitioning}
            onMouseEnter={() => setIsArrowHovered(true)}
            onMouseLeave={() => setIsArrowHovered(false)}
            className="absolute top-1/2 -translate-y-1/2 z-20 rounded-full flex items-center justify-center bg-[#0e2a3f] hover:bg-[#124166] text-white border-0 disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ right: isMobile ? '6px' : '32px', width: isMobile ? '32px' : '64px', height: isMobile ? '32px' : '64px' }}
          >
            <span className={isMobile ? 'text-base' : 'text-2xl'}>›</span>
          </button>
        </div>

        {/* Video Modal */}
        {playingVideo !== null && brands[playingVideo]?.videoId && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setPlayingVideo(null)}
          >
            <button
              onClick={() => setPlayingVideo(null)}
              className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/20 text-white flex items-center justify-center text-2xl hover:bg-white/30 transition-colors"
            >
              ×
            </button>
            <div className="w-full max-w-4xl aspect-video" onClick={(e) => e.stopPropagation()}>
              <iframe
                src={`https://www.youtube.com/embed/${brands[playingVideo].videoId}?mute=1&controls=1&modestbranding=1&autoplay=1`}
                title={brands[playingVideo].name}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg"
              />
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-15deg); }
          100% { transform: translateX(200%) skewX(-15deg); }
        }
      `}</style>
    </section>
  )
}
