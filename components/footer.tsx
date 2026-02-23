import { Film, Mail, Instagram, Twitter, Youtube, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-3 border-t border-border/50 relative z-50 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src="/Black BG_RA.png.png"
              alt="Ramesh Aravind"
              className="h-24 sm:h-28 md:h-32 w-auto object-contain"
            />
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
              <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Twitter">
              <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="YouTube">
              <Youtube className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook">
              <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
            <a
              href="mailto:enquiry@ramesharavind.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
          </div>

          <p className="text-muted-foreground text-xs sm:text-sm font-[var(--font-inter)] text-center md:text-right">
            © {new Date().getFullYear()} Dr Ramesh Aravind. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
