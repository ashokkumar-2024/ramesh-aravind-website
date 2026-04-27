"use client"

const movies = [
  { title: "Yours Sincerely Raam", image: "/upcoming/1.jpg" },
  { title: "KD: The Devil", image: "/upcoming/2.jpg" },
  { title: "Daiji", image: "/upcoming/3.jpg" },
]

export function UpcomingMovies() {
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-[1400px] mx-auto">
          {movies.map((movie) => (
            <div key={movie.title} className="relative">
              <div className="aspect-[2/3] overflow-hidden rounded-2xl flex justify-center items-center bg-gray-900">
                <img
                  src={movie.image}
                  alt={movie.title}
                  loading="lazy"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="mt-3 text-center text-lg font-semibold text-[#0E2A3F]">
                {movie.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
