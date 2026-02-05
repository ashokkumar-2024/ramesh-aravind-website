"use client"

import { useEffect, useRef, useState } from "react"
import { Building2, GraduationCap, Users, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const speakingTypes = [
  { icon: Building2, title: "Brand Ambassador", description: "Representing brands with authenticity and trust" },
  {
    icon: GraduationCap,
    title: "Covid 19 Awareness By BBMP",
    description: "Public health advocacy and community safety",
  },
  { icon: Users, title: "7 Wonders of Karnataka by Suvarna News & Karnataka Tourism Department", description: "Promoting Karnataka's heritage and tourism" },
  { icon: Building2, title: "Children's Movement for Civic Awareness - Dignity Foundation", description: "Empowering youth for social responsibility" },
  { icon: GraduationCap, title: "Namma Bengaluru Awards", description: "Celebrating excellence in Bengaluru" },
  { icon: Users, title: "Bengaluru Gold Shopping", description: "Brand endorsement and community engagement" },
]

const quotes = [
  "Leadership is not about being in charge. It's about taking care of those in your charge.",
  "Success is not the key to happiness. Happiness is the key to success.",
  "The only way to do great work is to love what you do.",
]

export function SpeakingSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeQuote, setActiveQuote] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [time, setTime] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    
    const timeInterval = setInterval(() => {
      setTime(Date.now() * 0.001)
    }, 16)
    
    return () => {
      observer.disconnect()
      clearInterval(timeInterval)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        const progress = Math.max(0, Math.min(1, -rect.top / (rect.height - window.innerHeight)))
        setScrollProgress(progress)
      }
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveQuote((prev) => (prev + 1) % quotes.length)
      }, 4500)
      return () => clearInterval(interval)
    }
  }, [isVisible])

  // Enhanced 3D image animation with floating and morphing effects
  const getImageTransform = () => {
    const scrollOffset = scrollProgress * 2
    
    // Floating motion
    const floatY = Math.sin(time * 0.8) * 15
    const floatX = Math.cos(time * 0.6) * 8
    const floatZ = Math.sin(time * 0.4) * 25
    
    // Scroll-based transforms
    const translateZ = scrollProgress < 0.5 
      ? -400 + (scrollProgress * 2) * 500  // Emerge from deep background
      : 100 - ((scrollProgress - 0.5) * 2) * 500  // Recede into distance
    
    const rotateY = scrollProgress < 0.5
      ? 15 - (scrollProgress * 2) * 15  // Rotate from 15deg to 0deg
      : 0 - ((scrollProgress - 0.5) * 2) * 20  // Continue rotating to -20deg
    
    const rotateX = Math.sin(scrollOffset) * 5 + floatY * 0.2
    const rotateZ = Math.cos(scrollOffset * 0.7) * 3
    
    // Dynamic scaling and morphing
    const scale = 0.8 + Math.sin(time * 0.5) * 0.1 + (scrollProgress * 0.3)
    const skewX = Math.sin(time * 0.3) * 2
    const skewY = Math.cos(time * 0.4) * 1
    
    // Advanced blur and glow effects
    const blur = 0 // Remove blur effect
    const brightness = 1 + Math.sin(time * 0.6) * 0.1
    const contrast = 1 + Math.cos(time * 0.8) * 0.05
    const hueRotate = Math.sin(time * 0.2) * 5
    
    // Dynamic shadows
    const shadowIntensity = Math.max(0.1, 1 - Math.abs(translateZ) / 300)
    const shadowBlur = 20 + Math.abs(translateZ) / 15
    const shadowSpread = 5 + Math.abs(translateZ) / 25
    
    return {
      transform: `
        translate3d(${floatX}px, ${floatY}px, ${translateZ + floatZ}px) 
        rotateX(${rotateX}deg) 
        rotateY(${rotateY}deg) 
        rotateZ(${rotateZ}deg) 
        scale(${scale}) 
        skew(${skewX}deg, ${skewY}deg)
      `,
      filter: `
        blur(${blur}px) 
        brightness(${brightness}) 
        contrast(${contrast}) 
        hue-rotate(${hueRotate}deg)
        drop-shadow(0 0 20px rgba(212, 175, 55, 0.3))
      `,
      boxShadow: `
        0 ${shadowSpread}px ${shadowBlur}px oklch(0.25 0.04 25 / ${shadowIntensity * 0.4}),
        0 0 40px oklch(0.58 0.11 50 / ${shadowIntensity * 0.2}),
        inset 0 0 30px rgba(255, 215, 0, 0.1)
      `,
      transition: 'none'
    }
  }

  return (
    <section id="speaking" ref={sectionRef} className="relative py-12 md:py-16 lg:py-20 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 50% -15%, oklch(0.58 0.11 50 / 0.08), transparent 55%),
            radial-gradient(ellipse 70% 50% at 50% 120%, oklch(0.94 0.028 68 / 0.4), transparent),
            linear-gradient(180deg, oklch(0.965 0.018 75), oklch(0.94 0.028 68), oklch(0.965 0.018 75))
          `,
        }}
      />

      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[280px] h-[65vh] gpu-accelerate"
        style={{
          background: `conic-gradient(from 180deg at 50% 0%, transparent 42%, oklch(0.58 0.11 50 / 0.03) 47%, oklch(0.58 0.11 50 / 0.06) 50%, oklch(0.58 0.11 50 / 0.03) 53%, transparent 58%)`,
        }}
      />

      <div className="container mx-auto px-6 relative z-10" style={{ perspective: '1500px', transformStyle: 'preserve-3d' }}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-16"
            }`}
            style={{ perspective: '800px' }}
          >
            <h3 className="text-4xl md:text-5xl lg:text-7xl font-bold gold-text mb-6">Brand Ambassador</h3>

            <div className="space-y-3 mb-6">
              {speakingTypes.map((type, index) => (
                <div
                  key={type.title}
                  className={`group relative transition-all duration-700 ${
                    isVisible ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ 
                    transitionDelay: `${300 + index * 100}ms`,
                    transform: isVisible ? `translateZ(${index * 8}px) translateY(0)` : `translateZ(-50px) translateY(20px)`,
                    transformStyle: 'preserve-3d'
                  }}
                >
                  <div 
                    className="relative p-4 rounded-xl overflow-hidden backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 cursor-pointer"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(212, 175, 55, 0.03) 100%)',
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08), 0 1px 4px rgba(0, 0, 0, 0.04)',
                      transform: 'translateZ(0)',
                      transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateZ(12px) translateY(-2px)'
                      e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.12), 0 4px 12px rgba(212, 175, 55, 0.08)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateZ(0) translateY(0)'
                      e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08), 0 1px 4px rgba(0, 0, 0, 0.04)'
                    }}
                  >
                    <div 
                      className="absolute inset-0 opacity-30 pointer-events-none"
                      style={{
                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 50%)'
                      }}
                    />
                    
                    <div className="flex items-start gap-3 relative z-10">
                      <div 
                        className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0 transition-all duration-400 group-hover:scale-110"
                        style={{
                          background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(212, 175, 55, 0.05) 100%)',
                          transform: 'translateZ(4px)',
                          transformStyle: 'preserve-3d'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'translateZ(8px) rotateY(5deg) rotateX(5deg)'
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'translateZ(4px) rotateY(0deg) rotateX(0deg)'
                        }}
                      >
                        <type.icon className="h-6 w-6 text-[oklch(0.58_0.11_50)]" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1 group-hover:text-[oklch(0.58_0.11_50)] transition-colors duration-300">
                          {type.title}
                        </h4>
                        <p className="text-sm text-[oklch(0.45_0.04_30)] font-[var(--font-body)] leading-relaxed">
                          {type.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative">
              <Button
                size="lg"
                className="relative bg-[oklch(0.25_0.04_25)] text-[oklch(0.97_0.01_75)] hover:bg-[oklch(0.3_0.045_25)] font-[var(--font-body)] px-10 py-7 text-lg transition-all duration-500 overflow-hidden group border-0"
                style={{ 
                  boxShadow: "0 4px 20px oklch(0.25 0.04 25 / 0.15)",
                  transform: 'translateZ(0)',
                  transformStyle: 'preserve-3d'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateZ(8px) translateY(-2px)'
                  e.currentTarget.style.boxShadow = '0 12px 40px oklch(0.25 0.04 25 / 0.25), 0 4px 12px oklch(0.58 0.11 50 / 0.1)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateZ(0) translateY(0)'
                  e.currentTarget.style.boxShadow = '0 4px 20px oklch(0.25 0.04 25 / 0.15)'
                }}
                asChild
              >
                <a href="#contact">
                  <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.58_0.11_50/0.1)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="relative z-10">Book for Your Event</span>
                </a>
              </Button>
            </div>
          </div>

          <div className="relative flex items-center justify-center h-[400px] md:h-screen">
            <div 
              className="relative"
              style={{
                ...getImageTransform(),
                transformStyle: 'preserve-3d'
              }}
            >
              {/* Floating particles around image */}
              <div className="absolute inset-0 pointer-events-none hidden md:block">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 rounded-full"
                    style={{
                      background: 'var(--copper)',
                      left: `${20 + (i * 10)}%`,
                      top: `${15 + (i * 8)}%`,
                      animation: `orbit ${3 + i * 0.5}s ease-in-out infinite`,
                      animationDelay: `${i * 0.3}s`,
                      opacity: 0.6
                    }}
                  />
                ))}
              </div>
              
              {/* Main image container with morphing border */}
              <div 
                className="relative rounded-2xl overflow-hidden"
                style={{
                  borderRadius: `${20 + Math.sin(time * 0.002) * 10}px`,
                  transition: 'border-radius 0.3s ease-out'
                }}
              >
                <div className="aspect-square relative w-[280px] md:w-[400px]">
                  {/* Animated border glow */}
                  <div 
                    className="absolute -inset-2 rounded-2xl opacity-60"
                    style={{
                      background: `conic-gradient(from ${time * 100}deg, var(--copper), var(--gold-warm), var(--copper))`,
                      animation: 'spin 8s linear infinite'
                    }}
                  />
                  
                  {/* Image with dynamic effects */}
                  <img
                    src="/brand ambassador .jpg"
                    alt="Ramesh Aravind Brand Ambassador"
                    className="relative w-full h-full object-contain z-10"
                    style={{
                      borderRadius: `${18 + Math.sin(time * 0.002) * 8}px`
                    }}
                  />
                  
                  {/* Dynamic gradient overlay */}
                  <div 
                    className="absolute inset-0 z-20 pointer-events-none"
                    style={{
                      background: `linear-gradient(${45 + Math.sin(time * 0.001) * 30}deg, 
                        rgba(212, 175, 55, 0.1) 0%, 
                        transparent 40%, 
                        rgba(255, 215, 0, 0.05) 100%)`
                    }}
                  />
                  
                  {/* Floating light spots */}
                  <div className="absolute inset-0 z-30 pointer-events-none">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-8 h-8 rounded-full"
                        style={{
                          background: 'radial-gradient(circle, rgba(255, 215, 0, 0.4) 0%, transparent 70%)',
                          left: `${30 + i * 20}%`,
                          top: `${25 + i * 15}%`,
                          animation: `float ${4 + i}s ease-in-out infinite`,
                          animationDelay: `${i * 1.2}s`
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Reflection effect */}
              <div 
                className="absolute top-full left-0 right-0 h-32 opacity-20 pointer-events-none"
                style={{
                  background: 'linear-gradient(to bottom, var(--cream-base), transparent)',
                  transform: 'scaleY(-1) translateY(-10px)',
                  filter: 'blur(2px)'
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes orbit {
          0% { transform: translateX(0) translateY(0) scale(1); }
          25% { transform: translateX(20px) translateY(-15px) scale(1.2); }
          50% { transform: translateX(0) translateY(-30px) scale(0.8); }
          75% { transform: translateX(-20px) translateY(-15px) scale(1.1); }
          100% { transform: translateX(0) translateY(0) scale(1); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); opacity: 0.4; }
          50% { transform: translateY(-20px) scale(1.1); opacity: 0.8; }
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  )
}
