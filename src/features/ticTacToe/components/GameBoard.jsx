import Square from './Square'

function GameBoard({ squares, winner, gameOver, onSquareClick }) {
  return (
    <div className="grid grid-cols-3 gap-3" role="grid" aria-label="Tic-tac-toe board">
      {squares.map((value, index) => {
        const isWinningSquare = winner?.line.includes(index)
//this is where square logic is handled it maps over 
// the squares and renders a Square component for each one, 
// passing in the value, whether it's part of a winning line, 
// and a click handler that calls onSquareClick with the index of the square.
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
