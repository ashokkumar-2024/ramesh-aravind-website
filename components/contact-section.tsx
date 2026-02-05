"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { Mail, Send, Calendar, User, Phone, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    enquiryType: "",
    eventDate: "",
    remarks: "",
  })

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" ref={sectionRef} className="relative py-12 md:py-16 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 100% 80% at 50% 100%, oklch(0.22 0.03 25 / 0.4), transparent),
            radial-gradient(ellipse 60% 40% at 30% 30%, oklch(0.68 0.12 55 / 0.05), transparent),
            radial-gradient(ellipse 50% 30% at 70% 60%, oklch(0.35 0.04 15 / 0.04), transparent)
          `,
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-sm text-[oklch(0.68_0.12_55)] tracking-[0.5em] uppercase mb-3 font-[var(--font-body)]">
            Contact
          </h2>
          <h3 className="text-5xl md:text-7xl font-bold gold-text mb-4">Get in Touch</h3>
          <p className="text-[oklch(0.6_0.03_55)] font-[var(--font-body)] max-w-2xl mx-auto text-lg">
            For inquiries about motivational speaking, guest appearances, and brand collaborations
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8">
            {/* Contact Info */}
            <div
              className={`md:col-span-2 space-y-6 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
              }`}
            >
              <div className="p-6 rounded-2xl spatial-panel">
                <div className="flex items-center gap-5 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-[oklch(0.68_0.12_55/0.1)] flex items-center justify-center">
                    <Mail className="h-7 w-7 text-[oklch(0.68_0.12_55)]" />
                  </div>
                  <div>
                    <p className="text-sm text-[oklch(0.6_0.03_55)] font-[var(--font-body)] mb-1">Email</p>
                    <a
                      href="mailto:enquiry@ramesharavind.com"
                      className="text-foreground hover:text-[oklch(0.68_0.12_55)] transition-colors font-medium text-lg"
                    >
                      enquiry@ramesharavind.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl spatial-panel">
                <h4 className="font-bold text-foreground mb-4 text-lg">Enquiry Types</h4>
                <ul className="space-y-3 text-[oklch(0.6_0.03_55)] font-[var(--font-body)]">
                  {[
                    "Motivational Speaking",
                    "Guest Speaker Appearance",
                    "Brand Collaboration",
                    "Media Interview",
                    "Corporate Events",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[oklch(0.68_0.12_55/0.5)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div
              className={`md:col-span-3 transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
              }`}
            >
              <div className="relative">
                {/* Ambient glow behind form */}
                <div
                  className="absolute -inset-6 rounded-3xl blur-2xl gpu-accelerate"
                  style={{
                    background: `radial-gradient(ellipse at center, oklch(0.22 0.03 25 / 0.3), transparent)`,
                  }}
                />

                <form onSubmit={handleSubmit} className="relative spatial-panel rounded-2xl p-6 md:p-8 space-y-5">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="name" className="text-foreground font-[var(--font-body)]">
                        Name
                      </Label>
                      <div className="relative">
                        <User
                          className={`absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 transition-colors duration-300 ${
                            focusedField === "name" ? "text-[oklch(0.68_0.12_55)]" : "text-[oklch(0.6_0.03_55)]"
                          }`}
                        />
                        <Input
                          id="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          onFocus={() => setFocusedField("name")}
                          onBlur={() => setFocusedField(null)}
                          className={`pl-12 py-6 bg-[oklch(0.1_0.015_25/0.5)] border-[oklch(0.24_0.025_30)] font-[var(--font-body)] transition-all duration-300 ${
                            focusedField === "name" ? "field-glow border-[oklch(0.68_0.12_55/0.5)]" : ""
                          }`}
                        />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="email" className="text-foreground font-[var(--font-body)]">
                        Email
                      </Label>
                      <div className="relative">
                        <Mail
                          className={`absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 transition-colors duration-300 ${
                            focusedField === "email" ? "text-[oklch(0.68_0.12_55)]" : "text-[oklch(0.6_0.03_55)]"
                          }`}
                        />
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          onFocus={() => setFocusedField("email")}
                          onBlur={() => setFocusedField(null)}
                          className={`pl-12 py-6 bg-[oklch(0.1_0.015_25/0.5)] border-[oklch(0.24_0.025_30)] font-[var(--font-body)] transition-all duration-300 ${
                            focusedField === "email" ? "field-glow border-[oklch(0.68_0.12_55/0.5)]" : ""
                          }`}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="mobile" className="text-foreground font-[var(--font-body)]">
                        Mobile
                      </Label>
                      <div className="relative">
                        <Phone
                          className={`absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 transition-colors duration-300 ${
                            focusedField === "mobile" ? "text-[oklch(0.68_0.12_55)]" : "text-[oklch(0.6_0.03_55)]"
                          }`}
                        />
                        <Input
                          id="mobile"
                          placeholder="+91 XXXXX XXXXX"
                          value={formData.mobile}
                          onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                          onFocus={() => setFocusedField("mobile")}
                          onBlur={() => setFocusedField(null)}
                          className={`pl-12 py-6 bg-[oklch(0.1_0.015_25/0.5)] border-[oklch(0.24_0.025_30)] font-[var(--font-body)] transition-all duration-300 ${
                            focusedField === "mobile" ? "field-glow border-[oklch(0.68_0.12_55/0.5)]" : ""
                          }`}
                        />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="enquiryType" className="text-foreground font-[var(--font-body)]">
                        Enquiry For?
                      </Label>
                      <Select
                        value={formData.enquiryType}
                        onValueChange={(value) => setFormData({ ...formData, enquiryType: value })}
                      >
                        <SelectTrigger className="py-6 bg-[oklch(0.1_0.015_25/0.5)] border-[oklch(0.24_0.025_30)] font-[var(--font-body)]">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="speaking">Motivational Speaking</SelectItem>
                          <SelectItem value="guest">Guest Appearance</SelectItem>
                          <SelectItem value="brand">Brand Collaboration</SelectItem>
                          <SelectItem value="media">Media Interview</SelectItem>
                          <SelectItem value="corporate">Corporate Event</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="eventDate" className="text-foreground font-[var(--font-body)]">
                      Event Date
                    </Label>
                    <div className="relative">
                      <Calendar
                        className={`absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 transition-colors duration-300 ${
                          focusedField === "eventDate" ? "text-[oklch(0.68_0.12_55)]" : "text-[oklch(0.6_0.03_55)]"
                        }`}
                      />
                      <Input
                        id="eventDate"
                        type="date"
                        value={formData.eventDate}
                        onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                        onFocus={() => setFocusedField("eventDate")}
                        onBlur={() => setFocusedField(null)}
                        className={`pl-12 py-6 bg-[oklch(0.1_0.015_25/0.5)] border-[oklch(0.24_0.025_30)] font-[var(--font-body)] transition-all duration-300 ${
                          focusedField === "eventDate" ? "field-glow border-[oklch(0.68_0.12_55/0.5)]" : ""
                        }`}
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="remarks" className="text-foreground font-[var(--font-body)]">
                      Remarks
                    </Label>
                    <div className="relative">
                      <MessageSquare
                        className={`absolute left-4 top-4 h-5 w-5 transition-colors duration-300 ${
                          focusedField === "remarks" ? "text-[oklch(0.68_0.12_55)]" : "text-[oklch(0.6_0.03_55)]"
                        }`}
                      />
                      <Textarea
                        id="remarks"
                        placeholder="Tell us more about your event or enquiry..."
                        value={formData.remarks}
                        onChange={(e) => setFormData({ ...formData, remarks: e.target.value })}
                        onFocus={() => setFocusedField("remarks")}
                        onBlur={() => setFocusedField(null)}
                        className={`pl-12 min-h-[140px] bg-[oklch(0.1_0.015_25/0.5)] border-[oklch(0.24_0.025_30)] font-[var(--font-body)] transition-all duration-300 ${
                          focusedField === "remarks" ? "field-glow border-[oklch(0.68_0.12_55/0.5)]" : ""
                        }`}
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-[oklch(0.68_0.12_55)] text-[oklch(0.1_0.01_25)] hover:bg-[oklch(0.72_0.12_55)] font-[var(--font-body)] py-7 text-lg group neuro-highlight"
                    style={{ boxShadow: "0 0 40px oklch(0.68 0.12 55 / 0.25)" }}
                  >
                    <Send className="mr-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    Send Enquiry
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
