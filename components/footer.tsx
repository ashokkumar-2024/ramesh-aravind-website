import { Instagram, Twitter, Facebook, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-3 border-t border-border/50 bg-background">
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
            <a 
              href="https://www.instagram.com/ramesh.aravind.official/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-all duration-300 rounded-full p-1 hover:text-white hover:bg-[#E4405F] hover:scale-125" 
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
            <a 
              href="https://x.com/Ramesh_aravind" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-all duration-300 rounded-full p-1 hover:text-white hover:bg-[#1DA1F2] hover:scale-125" 
              aria-label="Twitter"
            >
              <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
            <a 
              href="https://www.youtube.com/c/RameshAravindOfficial" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-all duration-300 rounded-full p-1 hover:text-white hover:bg-[#FF0000] hover:scale-125" 
              aria-label="YouTube"
            >
              <Youtube className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
            <a 
              href="https://www.facebook.com/actor.ramesh.aravind/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-all duration-300 rounded-full p-1 hover:text-white hover:bg-[#1877F2] hover:scale-125" 
              aria-label="Facebook"
            >
              <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
          </div>

          <p className="text-muted-foreground text-xs sm:text-sm font-[var(--font-inter)] text-center md:text-right">
            <span className="gold-text">© {new Date().getFullYear()} Dr Ramesh Aravind. All rights reserved.</span> <span className="mx-3">|</span> Designed & Developed by <a href="https://sripadastudios.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 transition-colors">Sripadastudios.com</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
