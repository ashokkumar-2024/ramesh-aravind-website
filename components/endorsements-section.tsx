"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const brands = [
  { name: "TMT Steel", image: "/tmt.jpg" },
  { name: "Siri", image: "/drinks.png" },
  { name: "Aashirvaad's Chilli", image: "/Masala.png" },
  { name: "Narayanashastra", image: "/nara.jpg" },
  { name: "Vasu Agarbathies", image: "/vasu.png" },
  { name: "Silk Shirts and Dhoti", image: "/Dhoti.jpg" }
]

export function EndorsementsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isArrowHovered, setIsArrowHovered] = useState(false)

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % brands.length)
  }

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + brands.length) % brands.length)
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
          <h3 className="text-5xl md:text-6xl lg:text-8xl font-light text-white tracking-wide">
            Endorsements
          </h3>
        </div>

        {/* 3D Slider Container */}
        <div
          className="relative h-[280px] flex items-center justify-center transition-all duration-700 ease-out"
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
              transform = 'translateX(0px) translateZ(150px) rotateY(0deg) rotateX(0deg) scale(1.1)'
              zIndex = 10
              opacity = 1
            } else if (absOffset === 1) {
              const side = offset > 0 ? 1 : -1
              transform = `translateX(${side * 400}px) translateZ(-100px) rotateY(${-side * 35}deg) rotateX(8deg) scale(0.75)`
              zIndex = 5
              opacity = 0.6
            } else {
              const side = offset > 0 ? 1 : -1
              transform = `translateX(${side * 700}px) translateZ(-250px) rotateY(${-side * 60}deg) rotateX(15deg) scale(0.5)`
              zIndex = 1
              opacity = 0.3
            }

            return (
              <div
                key={brand.name}
                className="absolute transition-all duration-1000 ease-out"
                style={{
                  transform,
                  transformStyle: 'preserve-3d',
                  zIndex,
                  opacity,
                  transitionTimingFunction: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                }}
              >
                <div
                  className="relative cursor-pointer"
                  style={{
                    width: '380px',
                    height: '240px',
                    transformStyle: 'preserve-3d'
                  }}
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
                  </div>
                </div>
              </div>
            )
          })}

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            onMouseEnter={() => setIsArrowHovered(true)}
            onMouseLeave={() => setIsArrowHovered(false)}
            className="absolute left-8 top-1/2 -translate-y-1/2 z-20 w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300"
            style={{
              background: 'rgba(212, 175, 55, 0.2)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(212, 175, 55, 0.3)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)'
            }}
          >
            <span className="text-white text-2xl">‹</span>
          </button>

          <button
            onClick={nextSlide}
            onMouseEnter={() => setIsArrowHovered(true)}
            onMouseLeave={() => setIsArrowHovered(false)}
            className="absolute right-8 top-1/2 -translate-y-1/2 z-20 w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300"
            style={{
              background: 'rgba(212, 175, 55, 0.2)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(212, 175, 55, 0.3)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)'
            }}
          >
            <span className="text-white text-2xl">›</span>
          </button>
        </div>
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
