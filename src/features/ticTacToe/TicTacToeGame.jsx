import GameBoard from './components/GameBoard'
import ScoreBoard from './components/ScoreBoard'
import useTicTacToe from './hooks/useTicTacToe'

function TicTacToeGame() {
  const {
    squares,
    winner,
    gameOver,
    scores,
    status,
    playMove,
    resetRound,
    resetMatch,
  } = useTicTacToe()

  return (
    <section className="grid gap-5 rounded-3xl border border-line bg-white p-6 shadow-[0_24px_60px_-40px_rgba(9,15,38,0.45)] sm:p-8">
      <header className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-ink-soft">
            Now playing
          </p>
          <h1 className="mt-2 text-3xl font-black sm:text-4xl">Tic-Tac-Toe</h1>
        </div>
        <p className="rounded-full bg-paper-soft px-3 py-1 text-sm font-semibold text-ink">
          {status}
        </p>
      </header>

      <ScoreBoard scores={scores} />

      <div className="mx-auto w-full max-w-sm">
        <GameBoard
          squares={squares}
          winner={winner}
          gameOver={gameOver}
          onSquareClick={playMove}
        />
      </div>

      <div className="flex flex-wrap gap-3">
        <button
          className="rounded-xl bg-accent px-4 py-2.5 font-bold text-paper transition hover:opacity-90"
          onClick={resetRound}
        >
          New round
        </button>
        <button
          className="rounded-xl border border-line-strong px-4 py-2.5 font-bold text-ink transition hover:bg-paper-soft"
          onClick={resetMatch}
        >
          Reset scores
        </button>
      </div>
    </section>
  )
}

export default TicTacToeGame
