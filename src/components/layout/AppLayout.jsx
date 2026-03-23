import { NavLink, Outlet } from 'react-router-dom'

const navItemClass = ({ isActive }) =>
  [
    'rounded-full px-3 py-1.5 text-sm font-semibold transition-colors',
    isActive
      ? 'bg-ink text-paper'
      : 'text-ink-soft hover:bg-paper-soft hover:text-ink',
  ].join(' ')

function AppLayout() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-paper text-ink">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--color-accent-glow),transparent_60%)]" />
      <div className="pointer-events-none absolute -left-32 top-16 h-64 w-64 rounded-full bg-secondary-glow blur-3xl" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-4 py-6 sm:px-8">
        <header className="mb-8 rounded-2xl border border-line bg-white/75 p-4 backdrop-blur-md sm:flex sm:items-center sm:justify-between">
          <span className="text-lg font-black uppercase tracking-[0.14em]">
            Tic Tac Toe
          </span>
          <nav className="mt-4 flex items-center gap-2 sm:mt-0">
            <NavLink className={navItemClass} to="/" end>
              Home
            </NavLink>
            <NavLink className={navItemClass} to="/explore">
              Explore
            </NavLink>
            <NavLink className={navItemClass} to="/facts">
              Facts
            </NavLink>
          </nav>
        </header>

        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default AppLayout
