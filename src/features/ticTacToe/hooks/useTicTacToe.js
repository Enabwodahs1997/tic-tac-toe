import { useMemo, useState } from 'react'
import { calculateWinner, isDraw, nextTurnLabel } from '../utils/gameLogic'

const emptyBoard = Array(9).fill(null)

function useTicTacToe() {
  const [squares, setSquares] = useState(emptyBoard)
  const [xIsNext, setXIsNext] = useState(true)
  const [scores, setScores] = useState({ X: 0, O: 0, ties: 0 })

  const winner = useMemo(() => calculateWinner(squares), [squares])
  const draw = useMemo(() => isDraw(squares, winner), [squares, winner])
  const gameOver = Boolean(winner || draw)
  const turn = nextTurnLabel(xIsNext)

  function playMove(index) {
    if (gameOver || squares[index]) {
      return
    }

    const activePlayer = turn

    setSquares((prev) => {
      if (prev[index]) {
        return prev
      }

      const next = [...prev]
      next[index] = activePlayer

      const nextWinner = calculateWinner(next)
      const nextDraw = isDraw(next, nextWinner)

      if (nextWinner) {
        setScores((prevScores) => ({
          ...prevScores,
          [nextWinner.player]: prevScores[nextWinner.player] + 1,
        }))
      } else if (nextDraw) {
        setScores((prevScores) => ({
          ...prevScores,
          ties: prevScores.ties + 1,
        }))
      } else {
        setXIsNext((prevTurn) => !prevTurn)
      }

      return next
    })
  }

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
