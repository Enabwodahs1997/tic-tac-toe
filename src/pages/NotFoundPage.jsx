import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <main className="grid min-h-screen place-items-center bg-[var(--color-paper)] p-6 text-[var(--color-ink)]">
      <div className="w-full max-w-md rounded-3xl border border-[var(--color-line)] bg-white p-8 text-center shadow-[0_24px_60px_-40px_rgba(9,15,38,0.45)]">
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--color-ink-soft)]">
          404
        </p>
        <h1 className="mt-3 text-3xl font-black">Page not found</h1>
        <p className="mt-3 text-[var(--color-ink-soft)]">
          The page you are looking for does not exist.
        </p>
        <Link
          className="mt-6 inline-flex rounded-xl bg-[var(--color-accent)] px-4 py-2.5 font-bold text-[var(--color-paper)] transition hover:opacity-90"
          to="/"
        >
          Go back home
        </Link>
      </div>
    </main>
  )
}

export default NotFoundPage
