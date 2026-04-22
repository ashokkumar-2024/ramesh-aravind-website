"use client"

import { useEffect, useRef, useState } from "react"
import { Volume2, VolumeX } from "lucide-react"

const featuredVideo = { 
  src: "/RA_YT AD-_v6 1 1 1 1.mp4", 
  title: "Featured Motivational Talk" 
}

const videos = [
  { id: "6aRZVQQiReA", title: "Success Mantra - Motivational Speech by Ramesh Aravind" },
  { id: "v4o7SJqxaPo", title: "Life Lessons - Inspirational Talk by Ramesh Aravind" },
  { id: "WgQBA-eAn6Y", title: "Overcoming Challenges - Ramesh Aravind Motivational Video" },
  { id: "3BnNFlTFWLo", title: "Dream Big - Ramesh Aravind Inspiring Message" },
  { id: "IFf5Jih3-zk", title: "Positive Thinking - Ramesh Aravind Motivational Speech" },
  { id: "vtP5gLkOu5o", title: "Never Give Up - Ramesh Aravind Inspirational Talk" },
  { id: "qVUlq613toE", title: "Path to Success - Ramesh Aravind Motivational Video" },
  { id: "235rK7GZY3o", title: "Believe in Yourself - Ramesh Aravind Inspiring Speech" },
  { id: "L_3oYVSGmjs", title: "Life Philosophy - Ramesh Aravind Motivational Message" },
  { id: "wbI2PMz30f8", title: "Achieve Your Goals - Ramesh Aravind Inspirational Talk" },
]

export function MotivationalVideosSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const sectionRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

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

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

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
      </div>

      {/* Featured Video - Large - Local MP4 - Full Width like Hero */}
      <div className="mb-8 relative w-full">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden">
            <video
              ref={videoRef}
              src={featuredVideo.src}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ pointerEvents: 'none' }}
            />
            <div className="absolute inset-0 bg-black/10 pointer-events-none" />
            
            {/* Unmute Button */}
            <button
              onClick={toggleMute}
              className="absolute top-4 right-4 z-10 w-12 h-12 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label={isMuted ? "Unmute video" : "Mute video"}
            >
              {isMuted ? <VolumeX className="h-6 w-6" /> : <Volume2 className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">

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
                  src={`https://www.youtube.com/embed/${video.id}?autoplay=1&mute=1&controls=0&modestbranding=1&loop=1&playlist=${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full pointer-events-none"
                />
              </div>
              <p className="text-center text-sm text-muted-foreground mt-2 font-[var(--font-inter)]">
                {video.title}
              </p>
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
                  src={`https://www.youtube.com/embed/${video.id}?autoplay=1&mute=1&controls=0&modestbranding=1&loop=1&playlist=${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full pointer-events-none"
                />
              </div>
              <p className="text-center text-sm text-muted-foreground mt-2 font-[var(--font-inter)]">
                {video.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
