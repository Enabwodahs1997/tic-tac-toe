//game logic for tic tac toe it defines the winning combinations, 
// checks for a winner or a draw,

const winningLines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]

export function calculateWinner(squares) {
  for (const [a, b, c] of winningLines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return {
        player: squares[a],
        line: [a, b, c],
      }
    }
  }

  return null
}

export function isDraw(squares, winner) {
  return !winner && squares.every(Boolean)
}

export function nextTurnLabel(xIsNext) {
  return xIsNext ? 'X' : 'O'
}
