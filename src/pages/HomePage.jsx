import TicTacToeGame from '../features/ticTacToe/TicTacToeGame'

function HomePage() {
  return (
    <section className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
      <TicTacToeGame />

      <aside className="grid gap-4">
        <article className="rounded-2xl border border-[var(--color-line)] bg-white p-5">
          <h2 className="text-lg font-bold">How this is organized</h2>
          <p className="mt-2 text-sm text-[var(--color-ink-soft)]">
            Feature logic lives in <span className="font-mono">src/features</span>
            with split files for board UI, score UI, and game state.
          </p>
        </article>
        <article className="rounded-2xl border border-[var(--color-line)] bg-white p-5">
          <h2 className="text-lg font-bold">Where to customize first</h2>
          <p className="mt-2 text-sm text-[var(--color-ink-soft)]">
            Update styles in <span className="font-mono">src/styles/theme.css</span>
            and add routes in <span className="font-mono">src/app/router.jsx</span>.
          </p>
        </article>
      </aside>
    </section>
  )
}

export default HomePage
