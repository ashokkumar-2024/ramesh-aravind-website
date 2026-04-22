"use client"

import { useEffect } from "react"

export function ScrollToTop() {
  useEffect(() => {
    // Create button element directly on document body
    const btn = document.createElement('button')
    btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>`
    btn.setAttribute('aria-label', 'Scroll to top')
    btn.style.cssText = `
      position: fixed !important;
      bottom: 2rem !important;
      right: 2rem !important;
      width: 3.5rem !important;
      height: 3.5rem !important;
      border-radius: 9999px !important;
      background-color: #bf8843 !important;
      color: white !important;
      border: none !important;
      cursor: pointer !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      box-shadow: 0 10px 25px rgba(0,0,0,0.3) !important;
      opacity: 0 !important;
      transition: opacity 0.3s ease, transform 0.3s ease !important;
      z-index: 2147483647 !important;
      pointer-events: none !important;
      isolation: isolate !important;
    `

    btn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' })
    btn.onmouseenter = () => { btn.style.backgroundColor = '#a67739 !important'; btn.style.transform = 'scale(1.1)' }
    btn.onmouseleave = () => { btn.style.backgroundColor = '#bf8843'; btn.style.transform = 'scale(1)' }

    document.body.appendChild(btn)

    const handleScroll = () => {
      if (window.scrollY > 200) {
        btn.style.opacity = '1'
        btn.style.pointerEvents = 'auto'
      } else {
        btn.style.opacity = '0'
        btn.style.pointerEvents = 'none'
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.body.removeChild(btn)
    }
  }, [])

  return null
}
