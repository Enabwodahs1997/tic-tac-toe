import HomeButton from '../components/layout/HomeButton'
import TicTacToeLink from '../components/layout/Tic-Tac-ToeLink'

function ExplorePage() {
  return (
    <section className="mx-auto grid w-full max-w-3xl gap-6 rounded-3xl border border-[var(--color-line)] bg-white p-6 shadow-[0_24px_60px_-40px_rgba(9,15,38,0.45)] sm:p-8">
      <header>
        <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-ink-soft)]">
          Ta-da I do something!
        </p>
        <h1 className="mt-2 text-3xl font-black sm:text-4xl">Explore Ideas</h1>
      </header>

      <p className="text-[var(--color-ink-soft)]">
        This is a page for distracting you from the game. 
        I am putting a link to the React document for your
        education here: <a className="text-[var(--color-accent)] underline" href="https://react.dev/" target="_blank" rel="noopener noreferrer">React Documentation</a>.
      </p>

      <div className="flex flex-wrap gap-3">
        <HomeButton to="/">Back to Game</HomeButton>
        <TicTacToeLink />
      </div>
    </section>
  )
}

export default ExplorePage
