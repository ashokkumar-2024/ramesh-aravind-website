"use client"
import type React from "react"
import { useEffect, useState, useRef, useCallback } from "react"
import { ChevronDown, Mic } from "lucide-react"
import { Button } from "@/components/ui/button"

function DustParticles() {
  const [particles, setParticles] = useState<Array<{ left: number, top: number, width: number, height: number, opacity: number, duration: number, delay: number }>>([])

  useEffect(() => {
    setParticles([...Array(15)].map(() => ({
      left: Math.random() * 100,
      top: 100 + Math.random() * 20,
      width: 1.5 + Math.random() * 2.5,
      height: 1.5 + Math.random() * 2.5,
      opacity: 0.25 + Math.random() * 0.35,
      duration: 12 + Math.random() * 18,
      delay: Math.random() * 12
    })))
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle, i) =>
        <div
          key={i}
          className="absolute rounded-full dust-particle gpu-accelerate"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            width: `${particle.width}px`,
            height: `${particle.height}px`,
            background: `oklch(0.58 0.11 50 / ${particle.opacity})`,
            "--dust-duration": `${particle.duration}s`,
            "--dust-delay": `${particle.delay}s`
          } as React.CSSProperties}
        />
      )}
    </div>
  )
}

function VolumetricLights({ mousePosition }: { mousePosition: { x: number; y: number } }) {
  return (
    <>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[75vh] gpu-accelerate" style={{ background: `conic-gradient(from 180deg at 50% 0%, transparent 42%, oklch(0.58 0.11 50 / 0.04) 47%, oklch(0.58 0.11 50 / 0.08) 50%, oklch(0.58 0.11 50 / 0.04) 53%, transparent 58%)`, transform: `translateX(calc(-50% + ${mousePosition.x * 0.4}px)) perspective(1200px) rotateX(${mousePosition.y * 0.015}deg)`, filter: "blur(3px)" }} />
      <div className="absolute top-0 left-[25%] w-[1.5px] h-[45vh] gpu-accelerate" style={{ background: "linear-gradient(180deg, oklch(0.72 0.1 65 / 0.3), transparent)", filter: "blur(2px)", transform: `rotate(${6 + mousePosition.x * 0.04}deg)`, transformOrigin: "top center" }} />
      <div className="absolute top-0 right-[25%] w-[1.5px] h-[45vh] gpu-accelerate" style={{ background: "linear-gradient(180deg, oklch(0.72 0.1 65 / 0.3), transparent)", filter: "blur(2px)", transform: `rotate(${-6 + mousePosition.x * 0.04}deg)`, transformOrigin: "top center" }} />
    </>
  )
}

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const rect = sectionRef.current?.getBoundingClientRect()
    if (rect) setMousePosition({ x: ((e.clientX - rect.left) / rect.width - 0.5) * 35, y: ((e.clientY - rect.top) / rect.height - 0.5) * 35 })
  }, [])

  useEffect(() => {
    setIsLoaded(true)
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [handleMouseMove])

  const dollyScale = 1 + scrollY * 0.00025

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-end justify-center overflow-hidden dolly-container pb-32">
      <video
        src="/hero.mp4"
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        style={{ pointerEvents: 'none' }}
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 container mx-auto px-6 text-center gpu-accelerate" style={{ transform: `scale(${dollyScale}) translateZ(${scrollY * -0.4}px)` }}>
        <div className={`transition-all duration-1000 ease-out ${isLoaded ? "opacity-100" : "opacity-0"}`} style={{ transform: `translate3d(${mousePosition.x * 0.15}px, ${mousePosition.y * 0.15}px, 50px) rotateX(${mousePosition.y * -0.008}deg) rotateY(${mousePosition.x * 0.008}deg)`, transformStyle: "preserve-3d" }}>
          <p className={`text-white text-sm md:text-base tracking-[0.5em] uppercase mb-4 font-[var(--font-body)] transition-all duration-1000 delay-300 drop-shadow-lg ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transform: "translateZ(30px)", textShadow: "0 2px 10px rgba(0,0,0,0.5)" }}>Actor &bull; Director &bull; Author &bull; Speaker</p>
          <h1 className={`text-3xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-[9rem] font-bold mb-4 text-white leading-none tracking-tight transition-all duration-1200 drop-shadow-2xl ${isLoaded ? "text-emerge" : "opacity-0"}`} style={{ transform: "translateZ(80px)", textShadow: "0 4px 20px rgba(0,0,0,0.7)" }}>Ramesh Aravind</h1>
          <div className={`transition-all duration-1000 delay-600 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ transform: "translateZ(40px)" }}>
            <div className="text-white max-w-4xl mx-auto mb-8 px-4 drop-shadow-lg leading-tight text-center whitespace-pre-line" style={{
              textShadow: "0 2px 10px rgba(0,0,0,0.6)",
              fontSize: "clamp(1rem, 3.5vw, 1.75rem)"
            }}>
              {"\"From Silver Screen to Stage:\nInspiring Every Step of the Way\""}
            </div>
          </div>
          <div className={`flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4 transition-all duration-1000 delay-800 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ transform: "translateZ(20px)" }}>
            <Button size="lg" className="relative bg-white/90 text-black hover:bg-white px-8 sm:px-12 py-6 sm:py-8 text-base sm:text-lg group font-[var(--font-body)] overflow-hidden w-full sm:w-auto shadow-xl" asChild>
              <a href="#contact"><span className="relative z-10 flex items-center justify-center"><Mic className="mr-3 h-5 w-5 transition-transform duration-500 group-hover:scale-110" />Book for Speaking</span><span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" /></a>
            </Button>
            <Button size="lg" variant="outline" className="relative border-white/60 text-white hover:border-white hover:bg-white/10 px-8 sm:px-12 py-6 sm:py-8 text-base sm:text-lg font-[var(--font-body)] bg-transparent backdrop-blur-sm w-full sm:w-auto shadow-xl" asChild>
              <a href="#about">Explore His Journey</a>
            </Button>
          </div>
        </div>
        <div className={`absolute bottom-12 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-1200 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
          <a href="#about" aria-label="Scroll to explore" className="block group"><div className="relative"><ChevronDown className="h-8 w-8 text-white/80 animate-bounce group-hover:text-white transition-colors duration-300 drop-shadow-lg" style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.5))" }} /><div className="absolute inset-0 blur-xl bg-white/20 animate-pulse" /></div></a>
        </div>
      </div>
    </section>
  )
}
