"use client"

import { useEffect, useState } from "react"
import { Navigation } from "@/components/navigation"

const shows = [
  {
    title: "Supernatural Fiction",
    image: "/N-2.jpg",
    genre: "Supernatural Fiction",
    channel: "Udaya TV",
    years: "2019–2020",
    description: "A compelling supernatural narrative that captivated audiences with its mysterious storytelling and engaging characters."
  },
  {
    title: "Sundari",
    image: "/sundari.jpg",
    genre: "Family Drama",
    channel: "Udaya TV", 
    years: "2021–2023",
    description: "A heartwarming family drama that explored relationships, values, and the complexities of modern family life."
  },
  {
    title: "Neenadena",
    image: "/neenadena.jpg",
    genre: "Drama Series",
    channel: "Star Suvarna",
    years: "2023–present",
    description: "An ongoing drama series that continues to engage viewers with its compelling narrative and strong character development."
  },
  {
    title: "Aase",
    image: "/aase.jpg",
    genre: "Drama Series", 
    channel: "Star Suvarna",
    years: "2023–present",
    description: "A contemporary drama series exploring modern relationships and societal themes with depth and authenticity."
  }
]

export default function ProducerPortfolio() {
  const [scrollY, setScrollY] = useState(0)
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 })
  const [activeShow, setActiveShow] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
      
      // Calculate active show based on scroll position
      const showHeight = 300
      const headerHeight = 250
      const currentShow = Math.floor((scrollY - headerHeight) / showHeight)
      setActiveShow(Math.max(0, Math.min(shows.length - 1, currentShow)))
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
    <div className="min-h-screen bg-gradient-to-br from-gray-700 via-slate-800 to-gray-900 text-white overflow-x-hidden">
      <Navigation />
      {/* Studio Lighting */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-15"
        style={{
          background: `radial-gradient(ellipse at ${30 + mousePos.x * 20}% ${20 + mousePos.y * 20}%, rgba(255, 255, 255, 0.1) 0%, transparent 70%)`
        }}
      />

      {/* Header Section */}
      <div className="container mx-auto px-8 pt-24 pb-16">
        <div className="max-w-4xl">
          <div className="mb-8">
            <h1 className="text-5xl font-bold mb-4 tracking-tight">Ramesh Aravind</h1>
            <p className="text-2xl text-slate-300 font-medium">Producer</p>
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-slate-500 mb-8"></div>
          <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
            "Television is about creating stories that become part of people's daily lives, building connections that last beyond a single viewing."
          </p>
        </div>
      </div>

      {/* Broadcast Timeline */}
      <div className="relative">
        {shows.map((show, index) => {
          const isActive = activeShow === index
          const isPrevious = index < activeShow
          const isNext = index > activeShow
          const lightShift = (mousePos.x - 0.5) * 15
          
          return (
            <div
              key={show.title}
              className="relative transition-all duration-700 ease-out"
              style={{
                transform: `translateZ(${isActive ? '20px' : isPrevious ? '-10px' : '0px'}) translateY(${isActive ? '-8px' : '0px'})`,
                transformStyle: 'preserve-3d',
                opacity: isPrevious ? 0.6 : isNext ? 0.8 : 1,
                filter: `blur(${isActive ? '0px' : isPrevious ? '1px' : '0px'})`
              }}
            >
              {/* Show Band */}
              <div 
                className="relative h-80 overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, rgba(51, 65, 85, 0.4) 0%, rgba(30, 41, 59, 0.6) 100%)`,
                  boxShadow: isActive 
                    ? `0 20px 40px rgba(0, 0, 0, 0.3), ${lightShift}px ${lightShift * 0.3}px 20px rgba(255, 255, 255, 0.03)`
                    : '0 8px 20px rgba(0, 0, 0, 0.2)',
                  backdropFilter: 'blur(8px)',
                  borderTop: index === 0 ? 'none' : '1px solid rgba(148, 163, 184, 0.1)',
                  borderBottom: '1px solid rgba(148, 163, 184, 0.1)'
                }}
              >
                {/* Background Poster Blend */}
                <div 
                  className="absolute inset-0 opacity-20"
                  style={{
                    background: `url(${show.image}) right center/cover`,
                    filter: 'blur(2px) brightness(0.7)',
                    transform: `translateX(${isActive ? '0px' : '20px'}) scale(${isActive ? '1.05' : '1'})`,
                    transition: 'all 0.7s ease-out'
                  }}
                />

                <div className="relative h-full flex items-center">
                  <div className="container mx-auto px-8">
                    <div className="grid md:grid-cols-5 gap-12 items-center">
                      {/* Poster with Depth */}
                      <div className="md:col-span-2">
                        <div 
                          className="relative max-w-sm"
                          style={{
                            transform: `perspective(1000px) translateZ(${isActive ? '25px' : '10px'}) rotateY(${isActive ? '1deg' : '0deg'})`,
                            transition: 'transform 0.7s ease-out'
                          }}
                        >
                          <img
                            src={show.image}
                            alt={show.title}
                            className="w-full h-auto rounded-lg shadow-2xl transition-all duration-700"
                            style={{
                              filter: `brightness(${isActive ? '1.1' : '0.9'}) contrast(${isActive ? '1.1' : '1'})`,
                              boxShadow: isActive 
                                ? '0 25px 50px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1)'
                                : '0 15px 30px rgba(0, 0, 0, 0.3)'
                            }}
                          />
                        </div>
                      </div>

                      {/* Content Layer */}
                      <div 
                        className="md:col-span-3 space-y-6"
                        style={{
                          transform: `translateZ(${isActive ? '15px' : '5px'})`,
                          transition: 'transform 0.7s ease-out'
                        }}
                      >
                        <div>
                          <h2 className="text-4xl font-bold mb-4 text-white transition-all duration-500">
                            {show.title}
                          </h2>
                          
                          {/* Broadcast Info */}
                          <div className="flex flex-wrap items-center gap-4 mb-6">
                            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium border border-blue-400/30">
                              {show.genre}
                            </span>
                            <span className="text-slate-300 font-medium">
                              {show.channel}
                            </span>
                            <span className="text-slate-400">
                              {show.years}
                            </span>
                          </div>
                          
                          <p className="text-lg text-slate-200 leading-relaxed">
                            {show.description}
                          </p>
                        </div>

                        {/* Production Details */}
                        <div className="pt-6 border-t border-slate-600/30">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-1">
                                Producer
                              </h4>
                              <p className="text-white font-medium">Ramesh Aravind</p>
                            </div>
                            <div>
                              <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-1">
                                Network
                              </h4>
                              <p className="text-white font-medium">{show.channel}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Subtle Overlay for Depth */}
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: isActive 
                      ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, transparent 50%, rgba(148, 163, 184, 0.05) 100%)'
                      : 'transparent',
                    transition: 'background 0.7s ease-out'
                  }}
                />
              </div>
            </div>
          )
        })}
      </div>

      {/* Closing Section */}
      <div className="container mx-auto px-8 py-32">
        <div className="text-center max-w-3xl mx-auto">
          <div className="w-40 h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent mx-auto mb-12"></div>
          <h3 className="text-3xl font-light text-slate-200 leading-relaxed mb-8">
            "Producing stories that live with audiences every day."
          </h3>
          <p className="text-lg text-slate-400 leading-relaxed">
            Television production is about consistency, trust, and understanding that every episode becomes part of someone's routine. 
            It's the art of long-form storytelling that builds lasting connections.
          </p>
          <div className="w-40 h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent mx-auto mt-12"></div>
        </div>
      </div>
    </div>
  )
}
