import Square from './Square'

function GameBoard({ squares, winner, gameOver, onSquareClick }) {
  return (
    <div className="grid grid-cols-3 gap-3" role="grid" aria-label="Tic-tac-toe board">
      {squares.map((value, index) => {
        const isWinningSquare = winner?.line.includes(index)

        return (
          <Square
            key={index}
            value={value}
            isWinningSquare={isWinningSquare}
            disabled={gameOver || Boolean(value)}
            onClick={() => onSquareClick(index)}
          />
        )
      })}
    </div>
  )
}

export default GameBoard
