function ScoreBoard({ scores }) {
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      <article className="rounded-2xl border border-[var(--color-line)] bg-white p-4 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-ink-soft)]">
          Player X
        </p>
        <p className="mt-1 text-3xl font-black text-[var(--color-accent)]">{scores.X}</p>
      </article>
      <article className="rounded-2xl border border-[var(--color-line)] bg-white p-4 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-ink-soft)]">
          Player O
        </p>
        <p className="mt-1 text-3xl font-black text-sky-700">{scores.O}</p>
      </article>
      <article className="rounded-2xl border border-[var(--color-line)] bg-white p-4 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-ink-soft)]">
          Draws
        </p>
        <p className="mt-1 text-3xl font-black text-[var(--color-ink)]">{scores.ties}</p>
      </article>
    </div>
  )
}

export default ScoreBoard
