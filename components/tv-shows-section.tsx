"use client"
import { useRef, useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"

const tvShows = [{title: "Weekend With Ramesh", description: "Celebrity talk show celebrating achievers", seasons: "Season 1", image: "/Weekendwitj=hramesh.jpg", videoUrl: "https://www.youtube.com/watch?v=EhZNxQmTbmA&list=PLuOI2Oe0kP-GYUewox2J25rONExGW4hX4"}, {title: "Weekend With Ramesh 2", description: "Continuing the journey of inspiring stories", seasons: "Season 2", image: "/Season 2.jpg", videoUrl: "https://www.youtube.com/watch?v=SKnsC6owV-Q"}, {title: "Kannadada Kotyadhipati", description: "Kannada version of Who Wants to Be a Millionaire", seasons: "Multiple Seasons", image: "/kk.jpg", videoUrl: "https://www.youtube.com/watch?v=lKPXmNthRfY"}, {title: "Preetyinda Ramesh", description: "Connecting with audiences through stories", seasons: "Season 1", image: "/preethiyinda.webp", videoUrl: "https://www.youtube.com/watch?v=DQmmA-6TaIw"}, {title: "Raja Rani Ramesh", description: "Entertainment game show", seasons: "Season 1", image: "/Rajarani.jpg", videoUrl: "https://www.youtube.com/watch?v=Y9iUH4dTOFM"}, {title: "RJ in Big FM", description: "Radio hosting journey", seasons: "Radio", image: "/Fm.jpg", videoUrl: "https://www.youtube.com/watch?v=eOMA6TGW9Nk"}]

export function TVShowsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {if (entry.isIntersecting) setIsVisible(true)}, { threshold: 0.1 })
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) scrollRef.current.scrollBy({left: direction === "left" ? -360 : 360, behavior: "smooth"})
  }

  return (
    <section id="tv-shows" ref={sectionRef} className="py-6 sm:py-8 md:py-12 lg:py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/15 to-background" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className={`flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div><h2 className="text-sm text-primary tracking-[0.4em] uppercase mb-2 font-[var(--font-body)]">TV Shows</h2><h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold gold-text">On Screen Magic</h3></div>
          <div className="flex gap-3">
            <button onClick={() => scroll("left")} className="p-4 rounded-full bg-secondary/50 hover:bg-secondary/80 border border-primary/10 hover:border-primary/30 transition-all duration-300 group" aria-label="Scroll left"><ChevronLeft className="h-5 w-5 group-hover:text-primary transition-colors" /></button>
            <button onClick={() => scroll("right")} className="p-4 rounded-full bg-secondary/50 hover:bg-secondary/80 border border-primary/10 hover:border-primary/30 transition-all duration-300 group" aria-label="Scroll right"><ChevronRight className="h-5 w-5 group-hover:text-primary transition-colors" /></button>
          </div>
        </div>
        <div ref={scrollRef} className="flex gap-3 sm:gap-4 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory" style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
          {tvShows.map((show, index) => (
            <div key={show.title} onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)} className={`flex-shrink-0 w-64 sm:w-72 snap-start transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`} style={{transitionDelay: `${200 + index * 100}ms`, transform: hoveredIndex === index ? "translateY(-8px) scale(1.02)" : "translateY(0) scale(1)"}}>
              <div className={`glass-card rounded-xl overflow-hidden transition-all duration-500 ${hoveredIndex === index ? "border-primary/50" : ""}`}>
                <div className="h-[300px] sm:h-[400px] relative overflow-hidden">
                  <img src={show.image || `/.jpg?height=200&width=360&query=${encodeURIComponent(show.title + " TV show thumbnail Indian television cinematic")}`} alt={show.title} className={`w-full h-full object-cover transition-all duration-700 ${hoveredIndex === index ? "scale-110 brightness-110" : "scale-100 brightness-100"}`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent" />
                  {hoveredIndex === index && (<div className="absolute inset-0 flex items-center justify-center bg-background/30 animate-in fade-in duration-300"><div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/50 group cursor-pointer hover:scale-110 transition-transform" onClick={() => show.videoUrl && window.open(show.videoUrl, '_blank')}><Play className="h-7 w-7 text-primary-foreground fill-current ml-1" /></div></div>)}
                </div>
                <div className="p-4">
                  <h4 className={`font-bold text-lg mb-1 transition-colors duration-300 ${hoveredIndex === index ? "text-foreground" : "text-foreground/90"}`}>{show.title}</h4>
                  <p className="text-muted-foreground text-sm font-[var(--font-body)] mb-2">{show.description}</p>
                  <span className={`text-xs font-[var(--font-body)] px-3 py-1 rounded-full transition-colors duration-300 ${hoveredIndex === index ? "bg-primary/20 text-primary" : "bg-primary/10 text-primary/70"}`}>{show.seasons}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px section-divider" />
    </section>
  )
}
