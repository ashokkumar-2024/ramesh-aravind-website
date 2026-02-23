"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "About", href: "/#about", targetId: "about" },
  { label: "Career", href: "/#career", targetId: "career" },
  { label: "Films", href: "/#filmography", targetId: "filmography" },
  { label: "Speaking", href: "/#speaking", targetId: "speaking" },
  { label: "Books", href: "/#books", targetId: "books" },
  { label: "TV Shows", href: "/#tv-shows", targetId: "tv-shows" },
  { label: "Awards", href: "/#awards", targetId: "awards" },
  { label: "Gallery", href: "/#gallery", targetId: "gallery" },
  { label: "Contact", href: "/#contact", targetId: "contact" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const sections = navItems.map((item) => item.targetId).filter(Boolean)
      for (const section of [...sections].reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-700",
        isScrolled
          ? "bg-[oklch(0.965_0.018_75/0.95)] backdrop-blur-xl border-b border-[oklch(0.25_0.04_25/0.08)] py-0.5 shadow-sm"
          : "bg-[oklch(0.965_0.018_75/0.95)] backdrop-blur-xl border-b border-[oklch(0.25_0.04_25/0.08)] py-0.5",
      )}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          <a
            href="/"
            className="transition-all duration-500"
          >
            <img 
              src="/Black BG_RA.png.png" 
              alt="Ramesh Aravind" 
              className="h-24 sm:h-28 md:h-32 lg:h-36 w-auto object-contain"
            />
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "relative px-3 xl:px-5 py-2.5 text-sm xl:text-base font-semibold transition-all duration-300 font-[var(--font-body)] rounded-full",
                  activeSection === item.targetId
                    ? "text-[oklch(0.58_0.11_50)]"
                    : "text-[oklch(0.45_0.04_30)] hover:text-foreground"
                )}
              >
                {item.label}
                {activeSection === item.targetId && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-[oklch(0.58_0.11_50)] rounded-full" />
                )}
              </a>
            ))}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-foreground p-2 rounded-lg hover:bg-[oklch(0.58_0.11_50/0.08)] transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-[oklch(0.25_0.04_25/0.08)] pt-4 animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 font-[var(--font-body)]",
                    activeSection === item.targetId
                      ? "text-[oklch(0.58_0.11_50)] bg-[oklch(0.58_0.11_50/0.08)]"
                      : "text-[oklch(0.45_0.04_30)] hover:text-foreground hover:bg-[oklch(0.58_0.11_50/0.05)]",
                  )}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
