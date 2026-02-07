import dynamic from 'next/dynamic'
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
const TimelineSection = dynamic(() => import("@/components/timeline-section").then(mod => ({ default: mod.TimelineSection })))
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const CareerHighlights = dynamic(() => import("@/components/career-highlights").then(mod => ({ default: mod.CareerHighlights })))
const FilmographySection = dynamic(() => import("@/components/filmography-section").then(mod => ({ default: mod.FilmographySection })))
const SpeakingSection = dynamic(() => import("@/components/speaking-section").then(mod => ({ default: mod.SpeakingSection })))
const BooksSection = dynamic(() => import("@/components/books-section").then(mod => ({ default: mod.BooksSection })))
const KDSongsSection = dynamic(() => import("@/components/kd-songs-section").then(mod => ({ default: mod.KDSongsSection })))
const TVShowsSection = dynamic(() => import("@/components/tv-shows-section").then(mod => ({ default: mod.TVShowsSection })))
const AwardsSection = dynamic(() => import("@/components/awards-section").then(mod => ({ default: mod.AwardsSection })))
const MotivationalVideosSection = dynamic(() => import("@/components/motivational-videos-section").then(mod => ({ default: mod.MotivationalVideosSection })))
const UpcomingMovies = dynamic(() => import("@/components/upcoming-movies").then(mod => ({ default: mod.UpcomingMovies })))
const GallerySection = dynamic(() => import("@/components/gallery-section").then(mod => ({ default: mod.GallerySection })))
const EndorsementsSection = dynamic(() => import("@/components/endorsements-section").then(mod => ({ default: mod.EndorsementsSection })))
const ContactSection = dynamic(() => import("@/components/contact-section").then(mod => ({ default: mod.ContactSection })))

export default function Home() {
  return (
    <main className="bg-background film-grain dolly-container">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <TimelineSection />
      <CareerHighlights />
      <FilmographySection />
      <SpeakingSection />
      <BooksSection />
      <KDSongsSection />
      <TVShowsSection />
      <AwardsSection />
      <MotivationalVideosSection />
      <UpcomingMovies />
      <GallerySection />
      <EndorsementsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
