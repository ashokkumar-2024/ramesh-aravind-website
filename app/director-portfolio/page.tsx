"use client"

import { useEffect, useState } from "react"
import { Navigation } from "@/components/navigation"

const films = [
  {
    title: "Uttama Villain",
    image: "/vw1.jpg",
    synopsis: "A superstar's final wish to create a comedy film with his mentor becomes a profound journey of artistic legacy and personal redemption.",
    director: "Ramesh Aravind",
    writers: ["Kamal Haasan", "Crazy Mohan"],
    stars: ["Kamal Haasan", "K. Balachander", "K. Viswanath"]
  },
  {
    title: "Rama Shama Bhama",
    image: "/rama shama bhama.avif",
    synopsis: "A married man's life takes an unexpected turn when he falls for another woman during a house-hunting trip, leading to comedic complications.",
    director: "Ramesh Aravind",
    writers: ["Ramesh Aravind", "Rajendra Karanth", "Balu Mahendra"],
    stars: ["Kamal Haasan", "Ramesh Aravind", "Urvashi"]
  },
  {
    title: "Accident",
    image: "/Acc.jpg",
    synopsis: "A man grapples with the mysterious circumstances surrounding his activist wife's death, questioning whether it was truly an accident.",
    director: "Ramesh Aravind",
    writers: ["Ramesh Aravind", "Rajendra Karanth", "ShiJa"],
    stars: ["Aporup Acharya", "Ramesh Aravind", "Dinesh Babu"]
  },
  {
    title: "100",
    image: "/100.jpg",
    synopsis: "A tense cat-and-mouse thriller between a determined police officer and a dangerous cyberstalker in the digital age.",
    director: "Ramesh Aravind",
    writers: ["Ramesh Aravind"],
    stars: ["Ramesh Aravind", "Shamna Kasim", "Rachita Ram"]
  },
  {
    title: "Enge Enathu Kavithai",
    image: "/Enge-Enathu-Kavithai-.jpg",
    synopsis: "A poetic exploration of love and relationships, delving deep into the complexities of human emotions and connections.",
    director: "Ramesh Aravind",
    writers: ["Ramesh Aravind"],
    stars: ["Krushna Abhishek", "Ashwini", "Dhamu"]
  },
  {
    title: "Shivaji Surathkal",
    image: "/SS.jpg",
    synopsis: "Detective Shivaji Surathkal faces his greatest challenge unraveling mysteries in Ranagiri while battling his own internal conflicts.",
    director: "Akash Srivatsa",
    writers: ["Akash Srivatsa"],
    stars: ["Ramesh Aravind", "Radhika Narayan", "Aarohi Narayan"]
  },
  {
    title: "Bhairadevi",
    image: "/Bhairadevi-Movie-2024-09-b3416bb2100155f6ddb413cc640ab220.webp",
    synopsis: "A mystical narrative that weaves together ancient legends with contemporary conflicts in a compelling dramatic tale.",
    director: "Shreeji",
    writers: ["Shreeji"],
    stars: ["Ramesh Aravind", "Skanda Ashok", "Malavika Avinash"]
  },
  {
    title: "Bisi Bisi",
    image: "/bisi.jpg",
    synopsis: "A heartwarming story that captures the essence of family bonds, relationships, and the warmth of human connections.",
    director: "Ramesh Aravind",
    writers: ["Ramesh Aravind"],
    stars: ["Ramesh Aravind", "Dodanna", "V. Manohar"]
  }
]

export default function DirectorPortfolio() {
  const [scrollY, setScrollY] = useState(0)
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 })
  const [activeFilm, setActiveFilm] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)

      // Calculate active film based on scroll position
      const filmHeight = 400
      const headerHeight = 200
      const currentFilm = Math.floor((scrollY - headerHeight) / filmHeight)
      setActiveFilm(Math.max(0, Math.min(films.length - 1, currentFilm)))
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [scrollY])

  return (
    <div className="min-h-screen text-white" style={{ backgroundColor: 'lab(12.6155% 12.4569 6.947)' }}>
      <Navigation />
      {/* Studio Lighting */}
      <div
        className="fixed inset-0 pointer-events-none opacity-20"
        style={{
          background: `radial-gradient(ellipse at ${20 + mousePos.x * 10}% ${10 + mousePos.y * 10}%, rgba(255, 255, 255, 0.1) 0%, transparent 60%)`
        }}
      />

      {/* Side Index */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 space-y-2">
        {films.map((film, index) => (
          <button
            key={film.title}
            onClick={() => {
              const filmHeight = 400
              const headerHeight = 200
              const targetScroll = headerHeight + (index * filmHeight)
              window.scrollTo({ top: targetScroll, behavior: 'smooth' })
            }}
            className={`block w-2 h-8 rounded-full transition-all duration-300 ${activeFilm === index
                ? 'bg-white shadow-lg'
                : 'bg-gray-600 hover:bg-gray-500'
              }`}
          />
        ))}
      </div>

      {/* Intro Strip */}
      <div
        className="sticky top-0 z-30 bg-gradient-to-r from-gray-900/95 via-gray-800/95 to-gray-900/95 backdrop-blur-sm border-b border-gray-700/30"
        style={{
          transform: `translateY(${Math.min(0, -scrollY * 0.3)}px)`,
          opacity: Math.max(0.7, 1 - scrollY * 0.002)
        }}
      >
        <div className="container mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Dr Ramesh Aravind</h1>
              <p className="text-gray-400 text-lg font-medium">Director</p>
            </div>
            <div className="text-right">
              <p className="text-gray-300 italic text-lg max-w-md">
                "Cinema is the art of revealing truth through structured storytelling."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Work */}
      <div className="container mx-auto px-8 py-16 space-y-8">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4">Featured Work</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-white to-gray-500"></div>
        </div>

        {films.map((film, index) => {
          const isActive = activeFilm === index
          const lightShift = (mousePos.x - 0.5) * 20

          return (
            <div
              key={film.title}
              className="group cursor-pointer transition-all duration-500 ease-out"
              style={{
                transform: `translateZ(${isActive ? '20px' : '0px'}) translateY(${isActive ? '-4px' : '0px'})`,
                transformStyle: 'preserve-3d'
              }}
              onMouseEnter={() => setActiveFilm(index)}
            >
              <div
                className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-2xl overflow-hidden border border-gray-700/50 transition-all duration-500"
                style={{
                  boxShadow: isActive
                    ? `0 25px 50px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1), ${lightShift}px ${lightShift * 0.5}px 30px rgba(255, 255, 255, 0.05)`
                    : '0 8px 25px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.05)',
                  transform: `translateZ(${isActive ? '10px' : '0px'})`,
                  backdropFilter: 'blur(10px)'
                }}
              >
                <div className="grid md:grid-cols-5 gap-8 p-8">
                  {/* Poster */}
                  <div className="md:col-span-2">
                    <div
                      className="relative overflow-hidden rounded-xl"
                      style={{
                        transform: `perspective(1000px) rotateY(${isActive ? '2deg' : '0deg'}) translateZ(${isActive ? '15px' : '0px'})`,
                        transition: 'transform 0.5s ease-out'
                      }}
                    >
                      <img
                        src={film.image}
                        alt={film.title}
                        className="w-full h-auto object-cover transition-all duration-500"
                        style={{
                          filter: `brightness(${isActive ? '1.1' : '0.95'}) contrast(${isActive ? '1.1' : '1'})`,
                          transform: `scale(${isActive ? '1.02' : '1'})`
                        }}
                      />
                      <div
                        className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20"
                        style={{
                          opacity: isActive ? 0.3 : 0.1
                        }}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="md:col-span-3 space-y-6">
                    <div>
                      <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-gray-100 transition-colors duration-300">
                        {film.title}
                      </h3>
                      <p className="text-gray-300 text-lg leading-relaxed">
                        {film.synopsis}
                      </p>
                    </div>

                    {/* Credits Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-gray-700/50">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
                          Director
                        </h4>
                        <p className="text-white font-medium">{film.director}</p>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
                          Writers
                        </h4>
                        <p className="text-white font-medium">{film.writers.join(', ')}</p>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
                          Stars
                        </h4>
                        <p className="text-white font-medium">{film.stars.join(', ')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Credibility Closer */}
      <div className="container mx-auto px-8 py-24">
        <div className="text-center max-w-2xl mx-auto">
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent mx-auto mb-8"></div>
          <h3 className="text-2xl font-light text-gray-300 leading-relaxed">
            "Direction is not about control—it's about creating the space where stories can breathe and characters can find their truth."
          </h3>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent mx-auto mt-8"></div>
        </div>
      </div>
    </div>
  )
}
