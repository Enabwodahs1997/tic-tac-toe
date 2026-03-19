function Square({ value, isWinningSquare, onClick, disabled }) {
  const visual = value === 'X' ? 'text-[var(--color-accent)]' : 'text-sky-700'
//this is just the square component for the tic tac toe game it takes 
// in the value of the square (X, O, or null), whether it's part of a winning line, 
// and a click handler,
  return (
    <button
      className={[
        'aspect-square rounded-2xl border text-4xl font-black transition-colors sm:text-5xl',
        isWinningSquare
          ? 'border-emerald-400 bg-emerald-50'
          : 'border-[var(--color-line-strong)] bg-white hover:bg-[var(--color-paper-soft)]',
        visual,
        disabled ? 'cursor-not-allowed opacity-70' : 'cursor-pointer',
      ].join(' ')}
      onClick={onClick}
      disabled={disabled}
      aria-label={value ? `Square with ${value}` : 'Empty square'}
    >
      {value}
    </button>
  )
}

export default Square
