"use client"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold font-heading text-accent mb-4">500</h1>
        <p className="text-lg text-text-muted mb-2">Something went wrong.</p>
        <p className="text-sm text-text-muted/60 mb-8">{error.message}</p>
        <button
          onClick={reset}
          className="inline-flex px-6 py-3 bg-accent text-white rounded-lg text-sm font-medium hover:bg-accent-hover transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  )
}
