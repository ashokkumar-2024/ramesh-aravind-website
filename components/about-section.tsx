"use client"

import { useEffect, useRef, useState, useCallback } from "react"

const stats = [
  { value: 140, label: "Films", suffix: "+" },
  { value: 25, label: "Years", suffix: "+" },
  { value: 6, label: "Languages", suffix: "" },
  { value: 50, label: "Awards", suffix: "+" },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isVisible) {
      const duration = 2000
      const steps = 60
      const increment = value / steps
      let current = 0
      
      const timer = setInterval(() => {
        current += increment
        if (current >= value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)
      
      return () => clearInterval(timer)
    }
  }, [isVisible, value])

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-[oklch(0.25_0.04_25)]">
      {count}{suffix}
    </div>
  )
}

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 })
  const [hoveredStat, setHoveredStat] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect()
      setMousePos({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      })
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 },
    )
    if (sectionRef.current) {
      observer.observe(sectionRef.current)
      sectionRef.current.addEventListener("mousemove", handleMouseMove)
    }
    return () => {
      observer.disconnect()
      if (sectionRef.current) {
        sectionRef.current.removeEventListener("mousemove", handleMouseMove)
      }
    }
  }, [handleMouseMove])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative pt-0 pb-12 sm:pb-16 md:pb-20 lg:pb-24 overflow-hidden"
      style={{ perspective: "2000px" }}
    >
      <div className="absolute inset-0 pointer-events-none">
        {/* Base ambient layer */}
        <div
          className="absolute inset-0 gpu-accelerate transition-all duration-1000"
          style={{
            background: `
              radial-gradient(ellipse 120% 80% at ${30 + mousePos.x * 40}% ${20 + mousePos.y * 30}%, oklch(0.58 0.11 50 / 0.06), transparent 50%),
              radial-gradient(ellipse 100% 70% at ${60 + mousePos.x * 20}% ${70 + mousePos.y * 20}%, oklch(0.72 0.1 65 / 0.04), transparent 50%),
              radial-gradient(ellipse 80% 50% at 80% 90%, oklch(0.94 0.028 68 / 0.3), transparent)
            `,
          }}
        />

        {/* Floating light orbs */}
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full gpu-accelerate"
            style={{
              width: `${80 + i * 40}px`,
              height: `${80 + i * 40}px`,
              left: `${10 + i * 18}%`,
              top: `${20 + (i % 3) * 25}%`,
              background: `radial-gradient(circle, oklch(0.58 0.11 50 / ${0.03 + i * 0.01}), transparent 70%)`,
              transform: `translate(${(mousePos.x - 0.5) * (30 + i * 15)}px, ${(mousePos.y - 0.5) * (20 + i * 10)}px)`,
              transition: "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
              animation: `anti-gravity ${6 + i}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10 top-10">
        <div className={`text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 transition-all duration-1200 gpu-accelerate ${isVisible ? "opacity-100" : "opacity-0"}`} style={{transform: `perspective(1500px) rotateX(${isVisible ? 0 : 15}deg) translateY(${isVisible ? 0 : 50}px) translateZ(${isVisible ? 0 : -100}px)`}}>
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-16 h-px bg-gradient-to-r from-transparent via-[oklch(0.58_0.11_50/0.5)] to-transparent" />
            <span className="text-sm text-[oklch(0.58_0.11_50)] tracking-[0.4em] uppercase font-[var(--font-body)]">
              Legacy
            </span>
            <span className="w-16 h-px bg-gradient-to-r from-transparent via-[oklch(0.58_0.11_50/0.5)] to-transparent" />
          </div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold gold-text relative inline-block leading-tight px-4">
            From Silver Screen to Stage<br></br> Inspiring Every Step of the Way
          </h3>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-20 items-start">
          {/* Portrait with 3D frame effect */}
          <div
            className={`lg:col-span-5 relative transition-all duration-1500 gpu-accelerate ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
            style={{
              transform: `
                perspective(2000px) 
                rotateY(${isVisible ? 5 + (mousePos.x - 0.5) * 8 : -20}deg)
                rotateX(${(mousePos.y - 0.5) * -4}deg)
                translateX(${isVisible ? 0 : -60}px)
              `,
              transformStyle: "preserve-3d",
            }}
          >
            {/* Floating frame layers */}
            <div
              className="absolute -inset-6 rounded-3xl gpu-accelerate"
              style={{
                background: "linear-gradient(135deg, oklch(0.58 0.11 50 / 0.08), oklch(0.72 0.1 65 / 0.05))",
                transform: "translateZ(-60px)",
                boxShadow: "0 40px 80px oklch(0.25 0.04 25 / 0.08)",
              }}
            />
            <div
              className="absolute -inset-3 rounded-2xl gpu-accelerate"
              style={{
                background: "linear-gradient(145deg, oklch(0.58 0.11 50 / 0.12), oklch(0.72 0.1 65 / 0.08))",
                transform: "translateZ(-30px)",
              }}
            />

            {/* Main portrait container */}
            <div className="relative rounded-2xl overflow-hidden" style={{ transformStyle: "preserve-3d" }}>
              {/* Ambient glow behind image */}
              <div
                className="absolute -inset-20 blur-3xl gpu-accelerate"
                style={{
                  background: `radial-gradient(ellipse at ${mousePos.x * 100}% ${mousePos.y * 100}%, oklch(0.58 0.11 50 / 0.15), transparent 60%)`,
                }}
              />

              <img
                src="/Ra7.jpg"
                alt="Ramesh Aravind - Portrait"
                className="relative w-full h-auto object-cover rounded-2xl"
                style={{ transform: "translateZ(20px)" }}
              />

              {/* Cinematic overlays */}
              <div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: `
                    linear-gradient(180deg, transparent 40%, oklch(0.965 0.018 75 / 0.9) 100%),
                    radial-gradient(ellipse 80% 50% at 50% 0%, oklch(0.58 0.11 50 / 0.1), transparent 50%)
                  `,
                  transform: "translateZ(30px)",
                }}
              />

              {/* Signature quote overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8" style={{ transform: "translateZ(40px)" }}>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl italic text-[oklch(0.25_0.04_25/0.9)] font-[var(--font-body)] leading-relaxed">
                  "Cinema is the most powerful medium to touch hearts and transform lives."
                </p>
                <div className="mt-2 sm:mt-3 flex items-center gap-2 sm:gap-3">
                  <span className="w-6 sm:w-8 h-px bg-[oklch(0.58_0.11_50/0.6)]" />
                  <span className="text-xs sm:text-sm text-[oklch(0.58_0.11_50)] font-medium">Ramesh Aravind</span>
                </div>
              </div>

              {/* Frame border */}
              <div
                className="absolute inset-0 border-2 border-[oklch(0.58_0.11_50/0.15)] rounded-2xl"
                style={{ transform: "translateZ(50px)" }}
              />
            </div>

            {/* Decorative film strip */}
            <div
              className="absolute -right-4 top-1/4 bottom-1/4 w-6 flex flex-col justify-center gap-2"
              style={{ transform: "translateZ(60px)" }}
            >
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="h-3 w-full rounded-sm"
                  style={{
                    background: "linear-gradient(90deg, oklch(0.58 0.11 50 / 0.3), oklch(0.72 0.1 65 / 0.2))",
                    animationDelay: `${i * 0.1}s`,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Bio and Stats */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12">
            {/* Bio text with staggered reveal */}
            <div
              className={`transition-all duration-1200 gpu-accelerate ${isVisible ? "opacity-100" : "opacity-0"}`}
              style={{
                transform: `translateX(${isVisible ? 0 : 50}px)`,
                transitionDelay: "300ms",
              }}
            >
              <div className="space-y-4 sm:space-y-6 text-[oklch(0.35_0.04_30)] font-[var(--font-body)] leading-relaxed text-base sm:text-lg md:text-xl text-justify">
                {[
                  "Dr Ramesh Aravind is a distinguished Indian actor, director, and television host whose illustrious career spans over three decades. Renowned for his remarkable versatility, Ramesh has captivated audiences across multiple languages, including Kannada, Tamil, and Telugu.",
                  "His extensive filmography, featuring over 140 films, showcases his ability to effortlessly transition between diverse roles, earning him critical acclaim and a loyal fan base. Beyond his cinematic achievements, Ramesh has made a significant mark as a director, with his storytelling prowess garnering widespread appreciation.",
                  "As a motivational speaker and influencer, he passionately shares his insights on personal growth, leadership, and success, inspiring countless individuals. His eloquence in English, Kannada, Tamil and relatability have made him a sought-after speaker at corporate events, educational institutions, and community gatherings, where he empowers audiences to pursue their dreams and overcome challenges.",
                ].map((text, index) => (
                  <p
                    key={index}
                    className={`transition-all duration-700 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                    style={{ transitionDelay: `${400 + index * 150}ms` }}
                  >
                    {text}
                  </p>
                ))}
              </div>
            </div>

            {/* Animated Stats */}
            <div
              className={`transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
              style={{
                transform: `translateY(${isVisible ? 0 : 40}px)`,
                transitionDelay: "600ms",
              }}
            >
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className="relative group cursor-default"
                    onMouseEnter={() => setHoveredStat(index)}
                    onMouseLeave={() => setHoveredStat(null)}
                    style={{
                      transform: `
                        perspective(1000px) 
                        rotateY(${hoveredStat === index ? (mousePos.x - 0.5) * 10 : 0}deg)
                        rotateX(${hoveredStat === index ? -(mousePos.y - 0.5) * 10 : 0}deg)
                        translateZ(${hoveredStat === index ? 30 : 0}px)
                        scale(${hoveredStat === index ? 1.05 : 1})
                      `,
                      transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                      transitionDelay: `${index * 100}ms`,
                    }}
                  >
                    <div
                      className="relative px-4 sm:px-6 py-6 sm:py-8 rounded-2xl overflow-hidden text-center"
                      style={{
                        background:
                          hoveredStat === index
                            ? "linear-gradient(145deg, oklch(0.995 0.01 78 / 0.95), oklch(0.96 0.02 70 / 0.8))"
                            : "linear-gradient(145deg, oklch(0.99 0.01 78 / 0.6), oklch(0.96 0.02 70 / 0.4))",
                        boxShadow:
                          hoveredStat === index
                            ? "0 25px 60px oklch(0.25 0.04 25 / 0.12), 0 0 0 1px oklch(0.58 0.11 50 / 0.1), inset 0 1px 0 oklch(1 0 0 / 0.5)"
                            : "0 10px 40px oklch(0.25 0.04 25 / 0.06), 0 0 0 1px oklch(0.25 0.04 25 / 0.03)",
                        backdropFilter: "blur(20px)",
                      }}
                    >
                      {/* Shine effect */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                        style={{
                          background:
                            "linear-gradient(105deg, transparent 40%, oklch(1 0 0 / 0.1) 45%, oklch(1 0 0 / 0.2) 50%, oklch(1 0 0 / 0.1) 55%, transparent 60%)",
                          transform: "translateX(-100%)",
                          animation: hoveredStat === index ? "shine 1.5s ease-in-out" : "none",
                        }}
                      />
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                      <div className="text-sm text-[oklch(0.5_0.04_30)] font-[var(--font-body)] tracking-wide uppercase mt-2">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Keyframes for shine effect */}
      <style jsx>{`
        @keyframes shine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}</style>
    </section>
  )
}
