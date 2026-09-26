import { NavLink, Link } from 'react-router-dom'
import { Moon, Sun, ShieldCheck } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'

const LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/directions', label: 'Directions', end: false },
  { to: '/international', label: 'International', end: false },
  { to: '/compare', label: 'Compare', end: false },
  { to: '/about', label: 'About', end: false },
]

export default function Navbar() {
  const { theme, toggle } = useTheme()
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
      <nav aria-label="Main" className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-4 gap-y-2 px-4 py-3">
        <Link to="/" className="flex items-center gap-2 whitespace-nowrap font-semibold tracking-tight text-slate-900 dark:text-slate-100">
          <ShieldCheck className="size-5 text-teal-700 dark:text-teal-400" aria-hidden="true" />
          <span>India Cyber Regs</span>
        </Link>
        <ul className="order-last -mx-2 flex w-full flex-wrap items-center gap-0.5 text-sm sm:order-none sm:mx-0 sm:ml-auto sm:w-auto sm:gap-1">
          {LINKS.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.end}
                className={({ isActive }) =>
                  `block whitespace-nowrap rounded-md px-2 py-1.5 transition-colors sm:px-3 ${
                    isActive
                      ? 'bg-teal-50 font-medium text-teal-800 dark:bg-teal-900/40 dark:text-teal-200'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white'
                  }`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={toggle}
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          className="ml-auto rounded-md p-2 text-slate-600 hover:bg-slate-100 sm:ml-0 dark:text-slate-300 dark:hover:bg-slate-800"
        >
          {theme === 'dark' ? <Sun className="size-4" aria-hidden="true" /> : <Moon className="size-4" aria-hidden="true" />}
        </button>
      </nav>
    </header>
  )
}
