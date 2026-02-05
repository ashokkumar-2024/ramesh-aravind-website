export default function Loading() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-[oklch(0.58_0.11_50)] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-[oklch(0.58_0.11_50)] text-lg font-medium">Loading...</p>
      </div>
    </div>
  )
}