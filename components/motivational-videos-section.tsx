"use client"

import { useEffect, useRef, useState } from "react"

const videos = [
  { id: "BbfrdhAzQBU", title: "Motivational Talk 1" },
  { id: "DNIIyoj5YxM", title: "Motivational Talk 2" },
  { id: "WgQBA-eAn6Y", title: "Motivational Talk 3" },
  { id: "3BnNFlTFWLo", title: "Motivational Talk 4" },
  { id: "IFf5Jih3-zk", title: "Motivational Talk 5" },
  { id: "vtP5gLkOu5o", title: "Motivational Talk 6" },
  { id: "qVUlq613toE", title: "Motivational Talk 7" },
  { id: "235rK7GZY3o", title: "Motivational Talk 8" },
  { id: "L_3oYVSGmjs", title: "Motivational Talk 9" },
  { id: "wbI2PMz30f8", title: "Motivational Talk 10" },
]

export function MotivationalVideosSection() {
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
    <section ref={sectionRef} className="py-8 md:py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-sm text-primary tracking-[0.3em] uppercase mb-2 font-[var(--font-inter)]">
            Motivational Speaker
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold gold-text mb-2">Inspiring Talks</h3>
          <p className="text-muted-foreground font-[var(--font-inter)] max-w-2xl mx-auto">
            Watch powerful motivational speeches and inspiring talks
          </p>
        </div>

        {/* Row 1 - First 5 videos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-4">
          {videos.slice(0, 5).map((video, index) => (
            <div
              key={video.id}
              className={`transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}?mute=1&autoplay=1&controls=1&modestbranding=1&loop=1&playlist=${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Row 2 - Last 5 videos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {videos.slice(5, 10).map((video, index) => (
            <div
              key={video.id}
              className={`transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${(index + 5) * 100}ms` }}
            >
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}?mute=1&autoplay=1&controls=1&modestbranding=1&loop=1&playlist=${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
