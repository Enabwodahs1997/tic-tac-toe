import TicTacToeLink from '../components/layout/Tic-Tac-ToeLink'

function TicTacToeFactsPage() {
	return (
		<section className="mx-auto grid w-full max-w-3xl gap-6 rounded-3xl border border-[var(--color-line)] bg-white p-6 shadow-[0_24px_60px_-40px_rgba(9,15,38,0.45)] sm:p-8">
			<header>
				<p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-ink-soft)]">
					Facts Corner
				</p>
				<h1 className="mt-2 text-3xl font-black sm:text-4xl">Tic-Tac-Toe Facts</h1>
			</header>

			<ul className="grid gap-3 text-[var(--color-ink-soft)]">
				<li>Tic-tac-toe, with roots as an ancient 3-in-a-row game, dates back to 1300 BC Egypt. Known as terni lapilli in Rome (1st century BC), it evolved into "noughts and crosses" in 19th-century Britain. It became a popular children’s pencil-and-paper game in the US before becoming one of the first computerized games in 1952.</li>
                <li>I am going to link a fun article about Tic-Tac-Toe!</li>
                <button className="text-[var(--color-accent)] underline" onClick={() => window.open('https://gamescrafters.berkeley.edu/games.php?game=tictactoe', '_blank')}>
                  Read More
                </button>
            </ul>

			<div className="flex flex-wrap gap-3">
				<TicTacToeLink to="/">Back to Game</TicTacToeLink>
			</div>
		</section>
	)
}

export default TicTacToeFactsPage