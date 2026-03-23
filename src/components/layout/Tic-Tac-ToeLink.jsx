import { Link } from 'react-router-dom'

function TicTacToeLink({ to = '/facts', children = 'Tic-Tac-Toe Facts', className = '' }) {
	const baseClassName =
		'inline-flex rounded-xl bg-[var(--color-accent)] px-4 py-2.5 font-bold text-[var(--color-paper)] transition hover:opacity-90'

	return (
		<Link className={`${baseClassName} ${className}`.trim()} to={to}>
			{children}
		</Link>
	)
}

export default TicTacToeLink