import { useMemo, useState } from 'react'
import { calculateWinner, isDraw, nextTurnLabel } from '../utils/gameLogic'

const emptyBoard = Array(9).fill(null)
//tic tac toe hook to manage game state and logic it makes the board state, 
// determine the winner, track scores, and provide functions to play 
// moves and reset the game. It uses React's useState and useMemo hooks 
// to manage state and optimize performance.
function useTicTacToe() {
  const [squares, setSquares] = useState(emptyBoard)
  const [xIsNext, setXIsNext] = useState(true)
  const [scores, setScores] = useState({ X: 0, O: 0, ties: 0 })

  const winner = useMemo(() => calculateWinner(squares), [squares])
  const draw = useMemo(() => isDraw(squares, winner), [squares, winner])
  const gameOver = Boolean(winner || draw)
  const turn = nextTurnLabel(xIsNext)
//watches for the current state of the board and determines if 
// there's a winner or if the game is a draw.
  function playMove(index) {
    if (gameOver || squares[index]) {
      return
    }

    const next = [...squares]
    next[index] = turn

    const nextWinner = calculateWinner(next)
    const nextDraw = isDraw(next, nextWinner)

    setSquares(next)

    if (nextWinner) {
      setScores((prevScores) => ({
        ...prevScores,
        [nextWinner.player]: prevScores[nextWinner.player] + 1,
      }))
      return
    }

    if (nextDraw) {
      setScores((prevScores) => ({
        ...prevScores,
        ties: prevScores.ties + 1,
      }))
      return
    }

    setXIsNext((prevTurn) => !prevTurn)
  }
//reset the board for a new round and reset the scores for a new match.
  function resetRound() {
    setSquares(emptyBoard)
    setXIsNext(true)
  }

  function resetMatch() {
    resetRound()
    setScores({ X: 0, O: 0, ties: 0 })
  }

  const status = winner
    ? `Player ${winner.player} wins!`
    : draw
      ? 'Round is a draw.'
      : `Player ${turn}'s turn`
//return for all the functions and variables that are needed in the components
  return {
    squares,
    winner,
    draw,
    gameOver,
    scores,
    status,
    playMove,
    resetRound,
    resetMatch,
  }
}

export default useTicTacToe
