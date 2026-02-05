"use client"

export function ScrollIndicator() {
  return (
    <div className="relative w-12 h-12 rounded-full border-2 border-white/60 flex items-center justify-center overflow-hidden bg-black/20 backdrop-blur-sm">
      <div 
        className="absolute w-4 h-4"
        style={{
          animation: 'scrollMove 2s ease-in-out infinite'
        }}
      >
        <svg 
          width="16" 
          height="16" 
          viewBox="0 0 16 16" 
          fill="none"
          className="text-white"
        >
          <path 
            d="M8 2L8 14M8 2L5 5M8 2L11 5" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </div>
      
      <style jsx>{`
        @keyframes scrollMove {
          0% {
            transform: translateY(-8px);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            transform: translateY(8px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}