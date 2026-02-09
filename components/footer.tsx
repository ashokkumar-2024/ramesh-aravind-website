import { Film, Mail, Instagram, Twitter, Youtube, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-3 border-t border-border/50 relative z-50 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img 
              src="/Black BG_RA.png.png" 
              alt="Ramesh Aravind" 
              className="h-32 w-auto object-contain"
            />
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Twitter">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="YouTube">
              <Youtube className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook">
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="mailto:enquiry@ramesharavind.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          <p className="text-muted-foreground text-sm font-[var(--font-inter)]">
            © {new Date().getFullYear()} Ramesh Aravind. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
