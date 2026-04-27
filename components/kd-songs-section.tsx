"use client"

import { useState } from "react"

const songs = [
  { title: "Yaare Koogadali", videoId: "CAEF7OOsEYc" },
  { title: "Cheluve Ondu Keloke", videoId: "Kf1ffhQejBY" },
  { title: "Ee Bhoomi Bannada Buguri", videoId: "djVbiwLVmw0" },
]

function LazyYouTube({ id, title }: { id: string; title: string }) {
  const [active, setActive] = useState(false)

  if (active) {
    return (
      <iframe
        src={`https://www.youtube.com/embed/${id}?autoplay=1&controls=1&modestbranding=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      />
    )
  }

  return (
    <button
      className="w-full h-full relative block"
      onClick={() => setActive(true)}
      aria-label={`Play: ${title}`}
    >
      <img
        src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`}
        alt={title}
        loading="lazy"
        className="w-full h-full object-cover"
      />
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center shadow-lg">
          <svg className="w-6 h-6 text-white ml-1" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </span>
    </button>
  )
}

export function KDSongsSection() {
  return (
    <section id="kd-songs" className="relative py-6 sm:py-8 md:py-12 lg:py-16 overflow-hidden">
      <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse 60% 40% at 30% 50%, oklch(0.58 0.11 50 / 0.05), transparent), radial-gradient(ellipse 50% 30% at 70% 70%, oklch(0.78 0.045 25 / 0.04), transparent)` }} />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          <h2 className="text-sm text-[oklch(0.58_0.11_50)] tracking-[0.5em] uppercase mb-3 font-[var(--font-body)]">Music</h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold gold-text mb-3 sm:mb-4">KD Songs</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
          {songs.map((song) => (
            <div key={song.videoId}>
              <div className="relative rounded-xl overflow-hidden aspect-video bg-black">
                <LazyYouTube id={song.videoId} title={song.title} />
              </div>
              <div className="mt-2 text-center">
                <h4 className="text-base sm:text-lg font-semibold text-foreground">{song.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
