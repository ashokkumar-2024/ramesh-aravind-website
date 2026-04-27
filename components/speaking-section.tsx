"use client"

import { useState } from "react"
import { Building2, GraduationCap, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

const speakingTypes = [
  {
    icon: GraduationCap,
    title: "BBMP Covid-19 Awareness Ambassador (2020)",
    description: "In July 2020, the Bruhat Bengaluru Mahanagara Palike (BBMP) appointed Ramesh Aravind as the awareness ambassador for COVID-19 to help spread official information, dispel myths, and encourage safety measures.",
    image: "/canva-images/panel-5/panel-5-001.png"
  },
  {
    icon: Users,
    title: "7 Wonders of Karnataka - Brand Ambassador",
    description: "Kannada Prabha and Asianet Suvarna News embarked upon the crucial campaign of recognising and saluting the wonders of Karnataka. Ramesh Aravind is the Brand Ambassador for the 7 Wonders of Karnataka campaign jointly done by Suvarna News and the Tourism Dept of Karnataka.",
    image: "/canva-images/panel-7/panel-7-002.png"
  },
  {
    icon: Building2,
    title: "Children's Movement for Civic Awareness - Brand Ambassador",
    description: "Ramesh Aravind is a dedicated supporter and brand ambassador for the Children's Movement for Civic Awareness (CMCA), a Bangalore-based non-profit fostering active citizenship and civic sense in children. He has supported CMCA for over a decade by acting in films, promoting civic education, and attending events, including their 25-year silver jubilee celebration.",
    image: "/canva-images/panel-9/panel-9-002.png"
  },
  {
    icon: GraduationCap,
    title: "Namma Bengaluru Awards",
    description: "Celebrating excellence in Bengaluru",
    image: "/speaking/Namma Bengaluru.png"
  },
  {
    icon: Users,
    title: "Bengaluru Gold Shopping",
    description: "Brand endorsement and community engagement",
    image: "/speaking/Gold.jpg"
  },
]

export function SpeakingSection() {
  const [activeSpeakingIndex, setActiveSpeakingIndex] = useState(0)

  return (
    <section id="speaking" className="relative py-12 md:py-16 lg:py-20 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 50% -15%, oklch(0.58 0.11 50 / 0.08), transparent 55%),
            radial-gradient(ellipse 70% 50% at 50% 120%, oklch(0.94 0.028 68 / 0.4), transparent),
            linear-gradient(180deg, oklch(0.965 0.018 75), oklch(0.94 0.028 68), oklch(0.965 0.018 75))
          `,
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h3 className="text-4xl md:text-5xl lg:text-7xl font-bold gold-text mb-6">Brand Ambassador</h3>

            <div className="space-y-3 mb-6">
              {speakingTypes.map((type, index) => (
                <div
                  key={type.title}
                  onClick={() => setActiveSpeakingIndex(index)}
                  className="group relative cursor-pointer"
                >
                  <div
                    className={`relative p-4 rounded-xl overflow-hidden border ${
                      activeSpeakingIndex === index
                        ? 'border-[oklch(0.58_0.11_50)] bg-[oklch(0.58_0.11_50/0.1)]'
                        : 'border-white/10 bg-white/5'
                    }`}
                    style={{
                      boxShadow: activeSpeakingIndex === index
                        ? '0 4px 20px rgba(212, 175, 55, 0.15)'
                        : '0 4px 20px rgba(0, 0, 0, 0.08)',
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0"
                        style={{
                          background: activeSpeakingIndex === index
                            ? 'linear-gradient(135deg, oklch(0.58 0.11 50), oklch(0.72 0.1 65))'
                            : 'linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(212, 175, 55, 0.05) 100%)',
                        }}
                      >
                        <type.icon className={`h-6 w-6 ${activeSpeakingIndex === index ? 'text-white' : 'text-[oklch(0.58_0.11_50)]'}`} />
                      </div>
                      <div className="flex-1">
                        <h4 className={`font-semibold mb-1 ${activeSpeakingIndex === index ? 'text-[oklch(0.58_0.11_50)]' : 'text-foreground'}`}>
                          {type.title}
                        </h4>
                        <p className="text-sm text-[oklch(0.45_0.04_30)] font-[var(--font-body)] leading-relaxed">
                          {type.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Button
              size="lg"
              className="bg-[#0e2a3f] text-white hover:bg-[#bf8843] hover:text-white font-[var(--font-body)] px-10 py-7 text-lg"
              asChild
            >
              <a href="#contact">Book for Your Event</a>
            </Button>
          </div>

          <div className="relative flex items-center justify-center p-8 min-h-[50vh]">
            <img
              key={activeSpeakingIndex}
              src={speakingTypes[activeSpeakingIndex].image}
              alt={speakingTypes[activeSpeakingIndex].title}
              loading="lazy"
              className="max-w-full max-h-[60vh] w-auto h-auto object-contain drop-shadow-2xl rounded-xl"
              onError={(e) => { e.currentTarget.src = "/brand ambassador .jpg" }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
