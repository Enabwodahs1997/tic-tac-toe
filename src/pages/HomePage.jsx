import HomeButton from '../components/layout/HomeButton'
import TicTacToeGame from '../features/ticTacToe/TicTacToeGame'

function HomePage() {
  return (
    <section className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
      <TicTacToeGame />

      <aside className="grid gap-4">
        <article className="rounded-2xl border border-[var(--color-line)] bg-white p-5">
          <h2 className="text-lg font-bold">Tic-Tac-Toe Why People Love It</h2>
          <p className="mt-2 text-sm text-[var(--color-ink-soft)]">
            This simple yet engaging game has captivated players for decades, offering a perfect balance of strategy and accessibility.
            Whether you're a casual gamer or a seasoned strategist, tic-tac-toe provides endless fun and friendly competition. 
            Its timeless appeal lies in its simplicity, making it a beloved pastime for people of all ages.
          </p>
        </article>
        <article className="rounded-2xl border border-[var(--color-line)] bg-white p-5">
          <h2 className="text-lg font-bold">Love of Strategy</h2>
          <p className="mt-2 text-sm text-[var(--color-ink-soft)]">
             We love <span className="font-mono">Strategy</span> and <span className="font-mono">Tic-Tac-Toe</span>.
                The game is a great way to exercise your strategic thinking skills and have fun at the same time.
          </p>
          <div className="mt-4">
            <HomeButton to="/explore">Home Button to Explore Page</HomeButton>
          </div>
        </article>
      </aside>
    </section>
  )
}

export default HomePage
