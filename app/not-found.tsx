import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold font-heading text-accent mb-4">404</h1>
        <p className="text-lg text-text-muted mb-8">
          Page not found.
        </p>
        <Link
          href="/"
          className="inline-flex px-6 py-3 bg-accent text-white rounded-lg text-sm font-medium hover:bg-accent-hover transition-colors"
        >
          Go home
        </Link>
      </div>
    </div>
  )
}
