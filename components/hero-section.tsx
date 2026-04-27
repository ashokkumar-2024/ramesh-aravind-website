"use client"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <>
      <section className="relative min-h-[70vh] md:min-h-screen flex items-end justify-center overflow-hidden pt-36 sm:pt-40 pb-8 sm:pb-24 md:pb-32">
        <video
          src="/hero.mp4"
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster="/canva-images/panel-1/panel-1-001.jpg"
          style={{ pointerEvents: 'none' }}
        />
        <div className="absolute inset-0 bg-black/30" />
      </section>

      <section className="relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse 120% 80% at 30% 20%, oklch(0.58 0.11 50 / 0.08), transparent 60%),
                radial-gradient(ellipse 100% 70% at 70% 80%, oklch(0.72 0.1 65 / 0.06), transparent 60%),
                radial-gradient(ellipse 80% 50% at 50% 100%, oklch(0.94 0.028 68 / 0.4), transparent)
              `,
            }}
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center pt-4 pb-0 sm:py-16">
          <p className="text-[#0e2a3f] text-xs sm:text-sm md:text-base tracking-[0.5em] uppercase mb-4 font-[var(--font-body)]">
            Actor • Director • Author • Speaker
          </p>

          <h1 className="text-2xl sm:text-lg md:text-4xl lg:text-6xl xl:text-[9rem] font-bold gold-text leading-tight">
            Dr Ramesh Aravind
          </h1>

          <div
            className="text-[#0e2a3f] max-w-4xl mx-auto mt-6 mb-8 px-4 leading-tight text-center"
            style={{ fontSize: "clamp(0.875rem, 3.5vw, 1.75rem)" }}
          >
            "From Silver Screen to Stage: Inspiring Every Step of the Way"
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <Button
              size="lg"
              className="bg-[#0e2a3f] text-white hover:bg-[#bf8843] hover:text-white px-8 py-6 text-base font-[var(--font-body)] shadow-lg"
              asChild
            >
              <a href="#contact">Book for Speaking</a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="text-[#0e2a3f] hover:bg-[#bf8843] hover:text-[#0e2a3f] px-8 py-6 text-base font-[var(--font-body)]"
              style={{ border: '3px solid #bf8843' }}
              asChild
            >
              <a href="#about">Explore His Journey</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
