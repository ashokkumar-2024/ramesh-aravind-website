"use client"

export function UpcomingMovies() {
  const movies = [
    { title: "Yours Sincerely Raam", image: "/upcoming/1.jpg" },
    { title: "KD: The Devil", image: "/upcoming/2.jpg" },
    { title: "Daiji", image: "/upcoming/3.jpg" },
  ]

  return (
    <section className="-mt-8 pb-4 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-background" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-sm text-primary tracking-[0.3em] uppercase mb-3 font-[var(--font-inter)]">
            Exciting new projects on the horizon
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold gold-text mb-4">Coming Soon</h3>
        </div>

        {/* Static Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {movies.map((movie) => (
            <div key={movie.title} className="group relative">
              <div className="aspect-[2/3] overflow-hidden rounded-2xl transition-all duration-500 group-hover:-translate-y-2">
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    // Fallback placeholder if image missing
                    e.currentTarget.src = "/placeholder-movie.jpg" // Using a generic placeholder name, or could use the one from before
                    e.currentTarget.style.backgroundColor = "#1a1a1a" // Dark bg fallback
                    e.currentTarget.style.display = "grid" // Center text/icon if we were using one, but for img tag this is basic. 
                    // Better fallback visual potentially:
                    e.currentTarget.onerror = null; // prevent loop
                    e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 1200'%3E%3Crect fill='%231a1a1a' width='800' height='1200'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='48' fill='%23333'%3EUpcoming%3C/text%3E%3C/svg%3E";
                  }}
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0" />
              </div>
              <div
                className="mt-3 text-center text-lg font-semibold text-[#0E2A3F]"
                style={{ textShadow: "none" }}
              >
                {movie.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
