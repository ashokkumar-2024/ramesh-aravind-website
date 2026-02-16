"use client"
import { useEffect, useRef, useState } from "react"

const moments = [
  { year: "1986", title: "The Beginning", subtitle: "Film Debut with K. Balachander", detail: "Sundara Swapnagalu" },
  { year: "1990s", title: "Rising Star", subtitle: "Kannada Cinema Breakthrough", detail: "Multiple blockbusters" },
  { year: "1998", title: "Behind the Camera", subtitle: "Directorial Vision", detail: "Rama Shama Bhama" },
  { year: "2000s", title: "Pan-Indian Icon", subtitle: "Multi-language Mastery", detail: "Cross-cultural storytelling" },
  { year: "2013", title: "Television Legend", subtitle: "Weekend With Ramesh", detail: "Connecting hearts" },
  { year: "Present", title: "Living Legacy", subtitle: "140+ Films & Inspiring Millions", detail: "Timeless influence" },
]

const descriptions = [
  "The first step into the world of cinema, marking the beginning of an extraordinary journey.",
  "Establishing himself as a versatile actor, captivating audiences across Karnataka.",
  "Expanding creative horizons by stepping behind the camera to tell compelling stories.",
  "Breaking linguistic barriers, becoming a beloved figure across multiple film industries.",
  "Connecting with millions through television, bringing warmth into every household.",
  "A living legend whose influence continues to inspire generations of artists and dreamers."
]

export function TimelineSection() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [idleRotation, setIdleRotation] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const lastScrollTime = useRef(Date.now())

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const sectionTop = sectionRef.current.offsetTop
      const sectionHeight = sectionRef.current.offsetHeight
      const scrollY = window.scrollY
      const viewportHeight = window.innerHeight

      const start = sectionTop
      const end = sectionTop + sectionHeight - viewportHeight

      const progress = (scrollY - start) / (end - start)

      setScrollProgress(Math.max(0, Math.min(1, progress)))
      lastScrollTime.current = Date.now()
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      if (Date.now() - lastScrollTime.current > 500) {
        setIdleRotation(prev => prev + 0.1)
      }
    }, 50)
    return () => clearInterval(interval)
  }, [])

  const getClockTransform = () => {
    const scrollRotation = scrollProgress * 720
    const totalRotation = scrollRotation + idleRotation
    const translateZ = Math.sin(scrollProgress * Math.PI) * 40
    const rotateX = Math.sin(scrollProgress * Math.PI) * 4
    return {
      transform: `translate3d(0, 0, ${translateZ}px) rotateZ(${totalRotation}deg) rotateX(${rotateX}deg)`,
      transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
    }
  }

  return (
    <section ref={sectionRef} className="relative" style={{ height: '300vh' }}>
      <div className="sticky top-0 left-0 right-0 h-screen overflow-hidden" style={{ background: `linear-gradient(180deg, oklch(0.96 0.018 75), oklch(0.88 0.03 65) 50%, oklch(0.82 0.04 55))` }}>
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="absolute w-1 h-1 bg-white/20 rounded-full" style={{ left: `${20 + i * 5}%`, top: `${10 + (i % 3) * 30}%`, animation: `float ${6 + i}s ease-in-out infinite`, animationDelay: `${i * 0.5}s` }} />
          ))}
        </div>

        <div className="relative h-full flex items-center justify-center overflow-hidden px-4" style={{ perspective: '1500px' }}>
          <div className="absolute w-[400px] md:w-[650px] h-[400px] md:h-[650px] rounded-full pointer-events-none" style={{ ...getClockTransform(), transformStyle: 'preserve-3d', zIndex: 5, boxShadow: `0 0 60px rgba(0, 0, 0, 0.2), inset 0 2px 3px rgba(255, 255, 255, 0.03), inset 0 -2px 3px rgba(0, 0, 0, 0.4)`, background: `radial-gradient(circle at 50% 50%, transparent 49%, rgba(20, 20, 20, 0.85) 49.5%, rgba(30, 30, 30, 0.9) 50%, rgba(20, 20, 20, 0.85) 50.5%, transparent 51%)`, filter: `drop-shadow(0 15px 30px rgba(0, 0, 0, 0.3))` }}>
            {[...Array(12)].map((_, i) => {
              const angle = (i * 30) - 90
              const radius = 310
              const x = Math.cos(angle * Math.PI / 180) * radius
              const y = Math.sin(angle * Math.PI / 180) * radius
              return (
                <div key={i} className="absolute" style={{ left: '50%', top: '50%', width: '2.5px', height: '16px', background: 'linear-gradient(180deg, rgba(212, 175, 55, 0.6), rgba(184, 134, 11, 0.4))', transform: `translate(${x}px, ${y}px) translate(-50%, -50%) rotate(${angle + 90}deg)`, transformStyle: 'preserve-3d', boxShadow: '0 0 3px rgba(212, 175, 55, 0.2)' }} />
              )
            })}
            <div className="absolute inset-0 rounded-full opacity-10" style={{ background: `linear-gradient(135deg, transparent 0%, rgba(255, 255, 255, 0.08) 25%, transparent 45%, rgba(255, 255, 255, 0.04) 75%, transparent 100%)`, transform: `rotate(${scrollProgress * 30}deg)`, transition: 'transform 0.5s ease-out' }} />
          </div>

          <div className="absolute top-4 md:top-6 lg:top-8 left-1/2 transform -translate-x-1/2 lg:-translate-y-4 text-center z-20 px-4 mb-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold gold-text mb-1 md:mb-2 lg:mb-4">Journey Through Time</h1>
            <p className="text-sm sm:text-base md:text-lg text-[oklch(0.4_0.04_30)] max-w-2xl mx-auto mb-6 md:mb-8 lg:mb-12 px-4">Witness the evolution of a legend through cinematic moments</p>
          </div>

          <div className="relative w-full h-full flex items-center justify-center z-10">
            {moments.map((moment, index) => {
              const itemProgress = Math.max(0, Math.min(1, scrollProgress * moments.length - index))
              const translateZ = (1 - itemProgress) * -600 + itemProgress * 50
              // isMobile is now a state variable set via useEffect to avoid SSR hydration mismatch
              const translateY = (1 - itemProgress) * 100 + (itemProgress > 0.15 && itemProgress < 0.85 ? (isMobile ? 0 : (index % 4) * 80 - 120) : 0)
              const translateX = (itemProgress > 0.15 && itemProgress < 0.85 ? (isMobile ? 0 : (index % 2 === 0 ? -100 : 100)) : 0)
              const rotateX = (1 - itemProgress) * 15
              const rotateY = (index % 2 === 0 ? 1 : -1) * (1 - itemProgress) * 10
              const isVisible = itemProgress > 0.15 && itemProgress < 0.85
              const opacity = isVisible ? 1 : 0
              const scale = 0.7 + itemProgress * 0.3
              const blur = isVisible ? 0 : 8

              return (
                <div key={moment.year} className="absolute transition-all duration-500" style={{ transform: `translate3d(calc(-50% + ${translateX}px), calc(-50% + ${translateY}px), ${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`, left: '50%', top: '50%', opacity, transformStyle: 'preserve-3d', pointerEvents: isVisible ? 'auto' : 'none' }}>
                  {/* Container for entire card layout */}
                  <div className="relative w-[320px] sm:w-[380px] md:w-[480px] lg:w-[560px]">
                    {/* Title - Top Left */}
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 md:mb-6">{moment.title}</h2>

                    {/* Main layout with content box and year sidebar */}
                    <div className="flex items-center gap-4 md:gap-6">
                      {/* Main Content Box */}
                      <div className="relative flex-1 bg-[oklch(0.25_0.04_25)] rounded-2xl overflow-hidden p-6 md:p-8 min-h-[200px] md:min-h-[240px]" style={{ boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.05)' }}>
                        {/* Text - Left Side */}
                        <div className="max-w-[55%] md:max-w-[50%] relative z-10">
                          <p className="text-sm md:text-base leading-relaxed text-white font-normal">"{descriptions[index]}"</p>
                        </div>

                        {/* Visual - Right Side (Decorative Element / Image Placeholder) */}
                        <div className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 w-28 h-28 md:w-40 md:h-40 lg:w-44 lg:h-44 rounded-xl overflow-hidden  shadow-lg">
                          <img
                            src={`/timeline/${moment.year}.png`}
                            alt={moment.title}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              // Fallback to gradient if image not found
                              e.currentTarget.style.display = 'none'
                              const fallback = e.currentTarget.nextElementSibling as HTMLElement
                              if (fallback) fallback.classList.remove('hidden')
                            }}
                          />
                          <div className="hidden w-full h-full bg-gradient-to-br from-red-400 via-blue-400 to-yellow-400 opacity-90" />
                        </div>
                      </div>

                      {/* Year Sidebar - Middle Right */}
                      <div className="flex items-center justify-center">
                        <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-400 tabular-nums writing-mode-vertical-rl rotate-180" style={{ writingMode: 'vertical-rl' }}>{moment.year}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
            {moments.map((_, index) => {
              const itemProgress = Math.max(0, Math.min(1, scrollProgress * moments.length - index))
              const isActive = itemProgress > 0.15 && itemProgress < 0.85
              return <div key={index} className={`w-2 h-2 rounded-full transition-all duration-300 ${isActive ? 'bg-[oklch(0.58_0.11_50)] scale-125' : 'bg-white/30'}`} />
            })}
          </div>
        </div>
      </div>
      <style jsx>{`@keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-15px); } }`}</style>
    </section>
  )
}
