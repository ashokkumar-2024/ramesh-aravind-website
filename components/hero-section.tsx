"use client"
import type React from "react"
import { useEffect, useState, useRef, useCallback } from "react"
import { ChevronDown, Mic } from "lucide-react"
import { Button } from "@/components/ui/button"

function DustParticles() {
  const [particles, setParticles] = useState<Array<{ left: number, top: number, width: number, height: number, opacity: number, duration: number, delay: number }>>([])

  useEffect(() => {
    // Only show particles on desktop for performance
    if (typeof window !== 'undefined' && window.innerWidth > 1024) {
      setParticles([...Array(8)].map(() => ({
        left: Math.random() * 100,
        top: 100 + Math.random() * 20,
        width: 1.5 + Math.random() * 2,
        height: 1.5 + Math.random() * 2,
        opacity: 0.2 + Math.random() * 0.3,
        duration: 12 + Math.random() * 12,
        delay: Math.random() * 8
      })))
    }
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
    <>
      <section ref={sectionRef} className="relative min-h-[70vh] md:min-h-screen flex items-end justify-center overflow-hidden dolly-container pb-20 sm:pb-24 md:pb-32">
        <video
          src="/hero.mp4"
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster="/Ra1.jpg"
          style={{ pointerEvents: 'none' }}
        />
        <div className="absolute inset-0 bg-black/30" />

      </section>
      <section className="relative flex items-center justify-center overflow-hidden">

        {/* Ambient Background (static – no animation) */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              background: `
          radial-gradient(ellipse 120% 80% at 30% 20%, oklch(0.58 0.11 50 / 0.08), transparent 60%),
          radial-gradient(ellipse 100% 70% at 70% 80%, oklch(0.72 0.1 65 / 0.06), transparent 60%),
          radial-gradient(ellipse 80% 50% at 50% 100%, oklch(0.94 0.028 68 / 0.4), transparent)
        `,
            }}
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center py-16">

          <p className="text-[oklch(0.25_0.04_25)] text-xs sm:text-sm md:text-base tracking-[0.5em] uppercase mb-4 font-[var(--font-body)]">
            Actor • Director • Author • Speaker
          </p>

          {/* 🔥 Updated Heading (matches About Section style) */}
          <h1 className="text-2xl sm:text-lg md:text-4xl lg:text-6xl xl:text-[9rem] font-bold gold-text leading-tight">
            Dr Ramesh Aravind
          </h1>

          <div className="text-[oklch(0.25_0.04_25)] max-w-4xl mx-auto mt-6 mb-8 px-4 leading-tight text-center"
            style={{
              fontSize: "clamp(0.875rem, 3.5vw, 1.75rem)"
            }}
          >
            "From Silver Screen to Stage: Inspiring Every Step of the Way"
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <Button
              size="lg"
              className="bg-[oklch(0.58_0.11_50)] text-white hover:bg-[oklch(0.6_0.12_55)] px-8 py-6 text-base font-[var(--font-body)] shadow-lg"
              asChild
            >
              <a href="#contact">Book for Speaking</a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-[oklch(0.58_0.11_50)] text-[oklch(0.25_0.04_25)] hover:bg-white/10 px-8 py-6 text-base font-[var(--font-body)]"
              asChild
            >
              <a href="#about">Explore His Journey</a>
            </Button>
          </div>

        </div>
      </section>
    </>
  )
}
