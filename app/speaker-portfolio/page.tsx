"use client"

import { useEffect, useRef, useState } from "react"
import { Play } from "lucide-react"
import { Navigation } from "@/components/navigation"

const speeches = [
  {
    title: "ನಿಮ್ಮ ಹವ್ಯಾಸಗಳು ನಿಮಗೆ ಶಾಪವಾಗಬಹುದು!",
    context: "Personal Development Talk",
    videoId: "WgQBA-eAn6Y"
  },
  {
    title: "ಕನ್ನಡದ ಶಕ್ತಿ ಕನ್ನಡಿಗ ಕನ್ನಡಿಗನ ಶಕ್ತಿ ಕನ್ನಡ",
    context: "Cultural Pride & Identity",
    videoId: "n77ZxT2ix8c"
  },
  {
    title: "Think Reverse to Make a Difference",
    context: "Innovation & Leadership",
    videoId: "niXNOep0Jh0"
  },
  {
    title: "ಶ್ರೀಮಂತರ ಗುಟ್ಟುಗಳು",
    context: "Success & Wealth Mindset",
    videoId: "3BnNFlTFWLo"
  },
  {
    title: "Dr Ramesh Aravind's Best Speech at Sawanna Akshara Aradhane 2024",
    context: "Literary Excellence & Education",
    videoId: "BIpgoy0S3eY"
  },
  {
    title: "Empowering Bengaluru: Dr Ramesh Aravind Inspires Bengalurians",
    context: "Community Leadership",
    videoId: "vtP5gLkOu5o"
  },
  {
    title: "ವೀಕೆಂಡ್ ವಿತ್ ರಮೇಶ್ ಕುರ್ಚಿಯ ಮೇಲೆ ಡಿ.ವಿ.ಜಿಯವರು ಕುಳಿತಿದ್ದರೆ..",
    context: "Television & Media Insights",
    videoId: "suhTeCt4ZWo"
  },
  {
    title: "Bengaluru Literature Festival Series",
    context: "Literature & Arts",
    videoId: "CsgEiP11a6c"
  },
  {
    title: "Priya Shreya with Ramesh Aravind",
    context: "Interview & Conversation",
    videoId: "IFf5Jih3-zk"
  },
  {
    title: "Ramesh Aravind reveals how to make 2018 the best year of your life",
    context: "Life Transformation",
    videoId: "46aMbOiwkh0"
  }
]

export default function SpeakerPortfolio() {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set())
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0')
            setVisibleItems(prev => new Set([...prev, index]))
          }
        })
      },
      { threshold: 0.3 }
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navigation />

      {/* Header */}
      <div className="container mx-auto px-8 pt-24 pb-16">
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">Motivational Speaker</h1>
          <p className="text-lg text-gray-600">
            Inspiring audiences through meaningful conversations and transformative insights.
          </p>
        </div>
      </div>

      {/* Video Rows */}
      <div className="container mx-auto px-8 pb-24">
        <div className="max-w-6xl space-y-8">
          {speeches.map((speech, index) => {
            const isVisible = visibleItems.has(index)
            const isHovered = hoveredItem === index
            
            return (
              <div
                key={speech.videoId}
                ref={(el) => { itemRefs.current[index] = el }}
                data-index={index}
                className="transition-all duration-1000 ease-out"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: `translateY(${isVisible ? '0px' : '40px'}) translateZ(${isHovered ? '4px' : '0px'}) scale(${isVisible ? 1 : 0.95})`,
                  transformStyle: 'preserve-3d',
                  transitionDelay: isVisible ? `${index * 150}ms` : '0ms'
                }}
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {/* Video Row */}
                <div 
                  className="bg-white rounded-lg overflow-hidden transition-all duration-500 hover:scale-[1.02]"
                  style={{
                    boxShadow: isHovered 
                      ? '0 20px 40px rgba(0, 0, 0, 0.15), 0 8px 16px rgba(0, 0, 0, 0.1)'
                      : '0 8px 25px rgba(0, 0, 0, 0.08), 0 3px 10px rgba(0, 0, 0, 0.04)',
                    transform: `translateY(${isHovered ? '-2px' : '0px'})`
                  }}
                >
                  <div className="grid md:grid-cols-5 gap-0">
                    {/* Video */}
                    <div className="md:col-span-3 relative group">
                      <div className="aspect-video">
                        <iframe
                          src={`https://www.youtube.com/embed/${speech.videoId}?autoplay=1&mute=1&loop=1&playlist=${speech.videoId}&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1`}
                          className="w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                        
                        {/* Play Overlay */}
                        <div 
                          className="absolute inset-0 flex items-center justify-center bg-black/10 opacity-0 group-hover:opacity-100 transition-all duration-500 cursor-pointer"
                          onClick={() => window.open(`https://www.youtube.com/watch?v=${speech.videoId}`, '_blank')}
                        >
                          <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg transform transition-transform duration-300 hover:scale-110 animate-pulse">
                            <Play className="w-5 h-5 text-gray-900 ml-0.5" fill="currentColor" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Text Content */}
                    <div className="md:col-span-2 p-6 flex flex-col justify-center">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 leading-tight transition-colors duration-300 hover:text-blue-600">
                        {speech.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed transition-colors duration-300">
                        {speech.context}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Closing */}
      <div className="container mx-auto px-8 py-16">
        <div className="text-center max-w-2xl mx-auto">
          <div className="w-16 h-px bg-gray-300 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 font-light">
            "Messages that inspire everyday thinking."
          </p>
          <div className="w-16 h-px bg-gray-300 mx-auto mt-6"></div>
        </div>
      </div>
    </div>
  )
}
