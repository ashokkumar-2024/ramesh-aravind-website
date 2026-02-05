"use client"

import { useState, useEffect, useRef } from "react"

const songs = [
  {
    title: "Yaare Koogadali",
    videoId: "CAEF7OOsEYc"
  },
  {
    title: "Cheluve Ondu Keloke", 
    videoId: "Kf1ffhQejBY"
  },
  {
    title: "Ee Bhoomi Bannada Buguri",
    videoId: "djVbiwLVmw0"
  }
]

export function KDSongsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="kd-songs" ref={sectionRef} className="relative py-6 sm:py-8 md:py-12 lg:py-16 overflow-hidden">
      <div className="absolute inset-0" style={{background: `radial-gradient(ellipse 60% 40% at 30% 50%, oklch(0.58 0.11 50 / 0.05), transparent), radial-gradient(ellipse 50% 30% at 70% 70%, oklch(0.78 0.045 25 / 0.04), transparent)`}} />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className={`text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-sm text-[oklch(0.58_0.11_50)] tracking-[0.5em] uppercase mb-3 font-[var(--font-body)]">Music</h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold gold-text mb-3 sm:mb-4">KD Songs</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
          {songs.map((song, index) => (
            <div key={song.videoId} className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`} style={{ transitionDelay: `${index * 200}ms` }}>
              <div className="relative rounded-xl overflow-hidden aspect-video">
                <iframe src={`https://www.youtube.com/embed/${song.videoId}?autoplay=1&mute=1&loop=1&playlist=${song.videoId}&controls=1`} title={song.title} className="w-full h-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              </div>
              <div className="mt-2 text-center"><h4 className="text-base sm:text-lg font-semibold text-foreground">{song.title}</h4></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}