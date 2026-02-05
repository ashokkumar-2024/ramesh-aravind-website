"use client"

import { useState, useEffect } from "react"
import { ChevronUp, ChevronDown } from "lucide-react"

const sections = [
  { id: "hero", name: "Home" },
  { id: "about", name: "About" },
  { id: "career", name: "Career" },
  { id: "awards", name: "Awards" },
  { id: "books", name: "Books" },
  { id: "speaking", name: "Brand Ambassador" },
  { id: "endorsements", name: "Endorsements" }
]

export function SectionNavigator() {
  const [currentSection, setCurrentSection] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      
      // Calculate overall scroll progress
      const progress = scrollY / (documentHeight - windowHeight)
      setScrollProgress(Math.min(progress, 1))
      
      // Find current section
      const sectionElements = sections.map(section => 
        document.getElementById(section.id)
      ).filter(Boolean)
      
      let current = 0
      sectionElements.forEach((element, index) => {
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= windowHeight / 2) {
            current = index
          }
        }
      })
      setCurrentSection(current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigateToSection = (direction: 'up' | 'down') => {
    const targetIndex = direction === 'up' 
      ? Math.max(0, currentSection - 1)
      : Math.min(sections.length - 1, currentSection + 1)
    
    const targetElement = document.getElementById(sections[targetIndex].id)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const borderRadius = 20 - (scrollProgress * 15) // Reduce from 20px to 5px

  return (
    <div 
      className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4"
      style={{ perspective: '400px' }}
    >
      {/* Up Arrow */}
      <button
        onClick={() => navigateToSection('up')}
        disabled={currentSection === 0}
        className="group relative w-12 h-12 flex items-center justify-center transition-all duration-500 disabled:opacity-30 disabled:cursor-not-allowed"
        style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(212, 175, 55, 0.05) 100%)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(212, 175, 55, 0.2)',
          borderRadius: `${borderRadius}px`,
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
          transform: 'translateZ(0)',
          transformStyle: 'preserve-3d'
        }}
        onMouseEnter={(e) => {
          if (currentSection > 0) {
            e.currentTarget.style.transform = 'translateZ(8px) translateY(-2px)'
            e.currentTarget.style.boxShadow = '0 8px 30px rgba(212, 175, 55, 0.15)'
          }
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateZ(0) translateY(0)'
          e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)'
        }}
      >
        <ChevronUp className="w-5 h-5 text-white/80 group-hover:text-[oklch(0.58_0.11_50)] transition-colors duration-300" />
      </button>

      {/* Progress Indicator */}
      <div 
        className="w-12 h-32 relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(212, 175, 55, 0.02) 100%)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(212, 175, 55, 0.1)',
          borderRadius: `${borderRadius}px`
        }}
      >
        {/* Progress fill */}
        <div 
          className="absolute bottom-0 left-0 right-0 transition-all duration-300"
          style={{
            height: `${scrollProgress * 100}%`,
            background: 'linear-gradient(to top, oklch(0.58 0.11 50), oklch(0.58 0.11 50 / 0.5))',
            borderRadius: `${borderRadius - 1}px`
          }}
        />
        
        {/* Section dots */}
        <div className="absolute inset-0 flex flex-col justify-between items-center py-2">
          {sections.map((_, index) => (
            <div
              key={index}
              className="w-1.5 h-1.5 rounded-full transition-all duration-300"
              style={{
                background: index === currentSection 
                  ? 'oklch(0.58 0.11 50)' 
                  : 'rgba(255, 255, 255, 0.3)',
                transform: index === currentSection ? 'scale(1.2)' : 'scale(1)'
              }}
            />
          ))}
        </div>
      </div>

      {/* Down Arrow */}
      <button
        onClick={() => navigateToSection('down')}
        disabled={currentSection === sections.length - 1}
        className="group relative w-12 h-12 flex items-center justify-center transition-all duration-500 disabled:opacity-30 disabled:cursor-not-allowed"
        style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(212, 175, 55, 0.05) 100%)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(212, 175, 55, 0.2)',
          borderRadius: `${borderRadius}px`,
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
          transform: 'translateZ(0)',
          transformStyle: 'preserve-3d'
        }}
        onMouseEnter={(e) => {
          if (currentSection < sections.length - 1) {
            e.currentTarget.style.transform = 'translateZ(8px) translateY(2px)'
            e.currentTarget.style.boxShadow = '0 8px 30px rgba(212, 175, 55, 0.15)'
          }
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateZ(0) translateY(0)'
          e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)'
        }}
      >
        <ChevronDown className="w-5 h-5 text-white/80 group-hover:text-[oklch(0.58_0.11_50)] transition-colors duration-300" />
      </button>
    </div>
  )
}