"use client"

import { useState, useEffect, useRef } from "react"
import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"
import { Navigation } from "@/components/navigation"

const movies = [
  {
    title: "Rama Shama Bhama",
    image: "/Rama-Shama-Bhama-Kannada-2006-500x500.jpg",
    description: "A heartwarming comedy that explores the complexities of love and marriage. Rama's simple life takes an unexpected turn when he falls for Priya during a house-hunting trip, leading to a cascade of troubles that test his relationships.",
    director: "Ramesh Aravind",
    writers: ["Ramesh Aravind", "Rajendra Karanth", "Balu Mahendra"],
    stars: ["Kamal Haasan", "Ramesh Aravind", "Urvashi"]
  },
  {
    title: "Pushpaka Vimana",
    image: "/PV.jpg",
    description: "An inspiring tale of determination and paternal love. A father refuses to let his disabilities define him, proving that the strength of the human spirit knows no bounds in his journey to be the best father to his daughter.",
    director: "S. Ravindranath",
    writers: ["A.R. Vikhyath", "S. Ravindranath", "Guruprasad K.N."],
    stars: ["Ramesh Aravind", "Yuvina Parthavi", "Rachita Ram"]
  },
  {
    title: "Shivaji Surathkal",
    image: "/SS.jpg",
    description: "A gripping detective thriller that delves into the mind of a brilliant investigator. Detective Shivaji must unravel the mysteries of Ranagiri while battling his own internal demons, creating a masterpiece of psychological storytelling.",
    director: "Akash Srivatsa",
    writers: ["Akash Srivatsa"],
    stars: ["Ramesh Aravind", "Radhika Narayan", "Aarohi Narayan"]
  },
  {
    title: "Amrutha Varshini",
    image: "/Amruthavarshini_poster.jpg",
    description: "A haunting exploration of obsession and memory. When a man becomes romantically fixated on his friend's wife, seeing in her the ghost of his lost love, the boundaries between past and present blur in this emotionally charged drama.",
    director: "Dinesh Babu",
    writers: ["Dinesh Babu"],
    stars: ["Sarath Babu", "Suhasini", "Ramesh Aravind"]
  },
  {
    title: "America America",
    image: "/America_America_.jpg",
    description: "A poignant tale of friendship, dreams, and the price of ambition. Three childhood friends from a small Karnataka village see their lives forever changed when one pursues the American dream, testing the bonds that once seemed unbreakable.",
    director: "Nagathihalli Chandrashekar",
    writers: ["Nagathihalli Chandrashekar"],
    stars: ["Akshay Anand", "Anitharani", "Annapurnamma"]
  }
]

export default function BestMoviesPage() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeMovie, setActiveMovie] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = scrollTop / scrollHeight
      setScrollProgress(progress)
      
      const movieIndex = Math.floor(progress * movies.length)
      setActiveMovie(Math.min(movieIndex, movies.length - 1))
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className="min-h-screen text-white overflow-x-hidden film-grain" style={{backgroundColor: 'lab(12.6155% 12.4569 6.947)'}}>
      <Navigation />
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        <div className="text-center z-10 max-w-4xl mx-auto px-6">
          <h1 className="text-7xl md:text-9xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-yellow-600 to-yellow-400 bg-clip-text text-transparent">
            Best Movies
          </h1>
          <p className="text-2xl text-gray-300 mb-8">A Journey Through Iconic Performances</p>
          <div className="w-1 h-16 bg-gradient-to-b from-yellow-400 to-transparent mx-auto animate-bounce" />
        </div>

        <button
          onClick={() => router.back()}
          className="absolute top-8 left-8 p-3 rounded-full bg-black/50 hover:bg-black/70 transition-all duration-300 backdrop-blur-sm"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
      </section>

      {/* Movies Sections */}
      {movies.map((movie, index) => (
        <section key={movie.title} className="h-screen flex items-center relative">
          <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
            <div className={`relative ${index % 2 === 0 ? 'order-1' : 'order-2'}`}>
              <img
                src={movie.image}
                alt={movie.title}
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
            </div>

            <div className={`space-y-6 ${index % 2 === 0 ? 'order-2' : 'order-1'}`}>
              <h2 className="text-5xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                {movie.title}
              </h2>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                {movie.description}
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-yellow-400 font-semibold">Director:</span>
                  <span className="text-gray-300">{movie.director}</span>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 font-semibold">Writers:</span>
                  <span className="text-gray-300">{movie.writers.join(', ')}</span>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 font-semibold">Stars:</span>
                  <span className="text-gray-300">{movie.stars.join(', ')}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  )
}
