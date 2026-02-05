"use client"

import { useState, useEffect, useRef } from "react"
import { X, ZoomIn } from "lucide-react"

const galleryImages = [
  { src: "/Ra1.jpg", category: "" },
  { src: "/Ra2.jpg", category: "" },
  { src: "/Ra3.jpg", category: "" },
  { src: "/R8.jpg", category: "" },
  { src: "/Ra4.jpg", category: "" },
  { src: "/Ra5.jpg", category: "" },
  { src: "/Ra6.jpg", category: "" },
  { src: "/Ra7.jpg", category: "" },
  { src: "/Ra9.jpg", category: "" },
  { src: "/Ra11.jpg", category: "" },
  { src: "/Ra10.jpg", category: "" },
  { src: "/Ra12.jpg", category: "" },
  { src: "/Ra13.jpg", category: "" },
  { src: "/Ra14.jpg", category: "" },
  { src: "/Ra15.jpg", category: "" },
  { src: "/Ra16.jpg", category: "" },
  { src: "/Ra17 (1).jpg", category: "" },
  { src: "/Ra18.jpg", category: "" },
  { src: "/Ra19.jpg", category: "" },
]

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [hoveredImage, setHoveredImage] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="gallery" ref={sectionRef} className="py-28 md:py-40 relative">
      <div className="absolute inset-0 spotlight opacity-20" />

      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`text-center mb-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-sm text-primary tracking-[0.4em] uppercase mb-4 font-[var(--font-body)]">Gallery</h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold gold-text mb-6">Capturing Moments</h3>
          <p className="text-muted-foreground font-[var(--font-body)] max-w-2xl mx-auto text-lg">
            A visual journey through memorable moments
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(index)}
              onMouseEnter={() => setHoveredImage(index)}
              onMouseLeave={() => setHoveredImage(null)}
              className={`relative group cursor-pointer break-inside-avoid transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{
                transitionDelay: `${200 + index * 100}ms`,
                transform: hoveredImage === index ? "scale(1.02)" : "scale(1)",
              }}
            >
              {/* Photo frame container */}
              <div
                className={`glass-card rounded-xl overflow-hidden p-2 transition-all duration-500 ${
                  hoveredImage === index ? "shadow-xl shadow-primary/10" : ""
                }`}
              >
                <div className="relative rounded-lg overflow-hidden">
                  <img
                    src={image.src}
                    alt="Gallery Image"
                    loading="lazy"
                    className={`w-full object-cover transition-all duration-700 ${
                      hoveredImage === index ? "scale-110 brightness-110" : "scale-100 brightness-100"
                    }`}
                  />

                  {/* Hover overlay */}
                  <div
                    className={`absolute inset-0 bg-background/60 flex items-center justify-center transition-opacity duration-500 ${
                      hoveredImage === index ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <div className="w-14 h-14 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center border border-primary/30">
                      <ZoomIn className="h-7 w-7 text-primary" />
                    </div>
                  </div>


                </div>
              </div>

              {/* Ambient glow */}
              <div
                className={`absolute -inset-2 rounded-xl bg-primary/5 blur-xl transition-opacity duration-500 -z-10 ${
                  hoveredImage === index ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
          ))}
        </div>

        {selectedImage !== null && (
          <div
            className="fixed inset-0 z-50 bg-black flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 bg-white/20 text-white rounded-full z-10"
            >
              <X className="h-6 w-6" />
            </button>

            <img
              src={galleryImages[selectedImage]?.src}
              alt="Gallery Image"
              className="w-full h-full object-contain"
              onLoad={() => console.log('Image loaded:', galleryImages[selectedImage]?.src)}
              onError={() => console.log('Image error:', galleryImages[selectedImage]?.src)}
            />
          </div>
        )}
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px section-divider" />
    </section>
  )
}
