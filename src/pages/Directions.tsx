import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { DIRECTIONS } from '../data/directions'
import { REGULATORS } from '../data/regulators'
import type { RegulatorId } from '../data/types'
import DirectionCard from '../components/DirectionCard'
import { LAST_VERIFIED } from '../disclaimer'

const VALID = new Set<string>(REGULATORS.map((r) => r.id))
const sorted = [...DIRECTIONS].sort((a, b) => b.date.localeCompare(a.date) || a.title.localeCompare(b.title))

export default function Directions() {
  const [params, setParams] = useSearchParams()
  const raw = params.get('regulator')
  const active: RegulatorId | 'all' = raw && VALID.has(raw) ? (raw as RegulatorId) : 'all'

  const items = useMemo(() => (active === 'all' ? sorted : sorted.filter((d) => d.regulator === active)), [active])

  const select = (id: RegulatorId | 'all') => {
    if (id === 'all') setParams({}, { replace: true })
    else setParams({ regulator: id }, { replace: true })
  }

  const chips: { id: RegulatorId | 'all'; label: string; count: number }[] = [
    { id: 'all', label: 'All', count: DIRECTIONS.length },
    ...REGULATORS.map((r) => ({ id: r.id, label: r.short, count: DIRECTIONS.filter((d) => d.regulator === r.id).length })),
  ]

  const activeReg = REGULATORS.find((r) => r.id === active)

  return (
    <div>
      <header className="max-w-3xl">
        <h1 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Directions hub</h1>
        <p className="mt-3 text-slate-600 dark:text-slate-300">
          Cybersecurity and IT-risk directions, circulars, guidelines and laws from Indian regulators, newest first.
          Titles, dates, reference numbers and applicability were checked against the official source on{' '}
          {LAST_VERIFIED}; fields that could not be confirmed are left out.
        </p>
      </header>

      <div role="group" aria-label="Filter by regulator" className="mt-6 flex flex-wrap gap-2">
        {chips.map((c) => {
          const on = c.id === active
          return (
            <button
              key={c.id}
              type="button"
              aria-pressed={on}
              onClick={() => select(c.id)}
              className={`rounded-full border px-3.5 py-1.5 text-sm transition-colors ${
                on
                  ? 'border-teal-700 bg-teal-700 text-white dark:border-teal-500 dark:bg-teal-600'
                  : 'border-slate-300 bg-white text-slate-700 hover:border-teal-500 hover:text-teal-800 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-teal-500 dark:hover:text-teal-300'
              }`}
            >
              {c.label} <span className={on ? 'text-teal-100' : 'text-slate-400'}>({c.count})</span>
            </button>
          )
        })}
      </div>

      <p className="mt-4 text-sm text-slate-500 dark:text-slate-400" aria-live="polite">
        Showing {items.length} {items.length === 1 ? 'entry' : 'entries'}
        {activeReg ? ` from ${activeReg.name}` : ''}.
      </p>

      <div className="mt-4 grid gap-5 lg:grid-cols-2">
        {items.map((d) => (
          <DirectionCard key={d.id} d={d} />
        ))}
      </div>
    </div>
  )
}
