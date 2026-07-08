import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <section className="grid min-h-[70svh] place-items-center px-6 pt-32 text-center">
      <div className="flex flex-col items-center gap-6">
        <p className="text-xs font-mono uppercase tracking-[0.3em] text-muted">404</p>
        <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">
          Page not found
        </h1>
        <p className="max-w-md text-muted">
          The page you're looking for has moved or no longer exists.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full bg-text px-6 py-3 text-sm font-medium text-bg transition-transform hover:scale-105"
        >
          ← Back home
        </Link>
      </div>
    </section>
  )
}
