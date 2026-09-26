import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { INTERNATIONAL, INTL_REGIONS } from '../data/international'
import type { IntlRegionId } from '../data/types'
import InternationalCard from '../components/InternationalCard'
import { DISCLAIMER, LAST_VERIFIED } from '../disclaimer'

const VALID = new Set<string>(INTL_REGIONS.map((r) => r.id))
const regionLabel = Object.fromEntries(INTL_REGIONS.map((r) => [r.id, r.label])) as Record<string, string>

export default function International() {
  const [params, setParams] = useSearchParams()
  const raw = params.get('region')
  const active: IntlRegionId | 'all' = raw && VALID.has(raw) ? (raw as IntlRegionId) : 'all'

  const items = useMemo(
    () => (active === 'all' ? INTERNATIONAL : INTERNATIONAL.filter((f) => f.region === active)),
    [active],
  )

  const select = (id: IntlRegionId | 'all') => {
    if (id === 'all') setParams({}, { replace: true })
    else setParams({ region: id }, { replace: true })
  }

  const chips: { id: IntlRegionId | 'all'; label: string; count: number }[] = [
    { id: 'all', label: 'All', count: INTERNATIONAL.length },
    ...INTL_REGIONS.map((r) => ({
      id: r.id,
      label: r.label,
      count: INTERNATIONAL.filter((f) => f.region === r.id).length,
    })),
  ]

  const activeRegion = INTL_REGIONS.find((r) => r.id === active)

  return (
    <div>
      <header className="max-w-3xl">
        <h1 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">International frameworks</h1>
        <p className="mt-3 text-slate-600 dark:text-slate-300">
          Key cybersecurity and data-protection laws, regulations, supervisory frameworks and standards from the EU, the
          UK, the US and global bodies that often come up alongside Indian rules in GRC work and interviews. Names,
          versions and dates were checked against the issuing body’s own website on {LAST_VERIFIED}; details that could
          not be confirmed are left out.
        </p>
        <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
          Links go to the issuer’s own site (EUR-Lex, central banks, regulators and standard-setters). Standards that are
          sold, such as ISO/IEC 27001, are linked to the publisher’s page only. {DISCLAIMER} Summaries are simplified and
          are not legal or compliance advice.
        </p>
      </header>

      <div role="group" aria-label="Filter by region" className="mt-6 flex flex-wrap gap-2">
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
        {activeRegion ? ` from ${activeRegion.name}` : ''}.
      </p>

      <section aria-labelledby="glance-heading" className="mt-6">
        <h2 id="glance-heading" className="font-serif text-xl font-semibold">
          At a glance
        </h2>
        <div className="mt-3 overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">
          <table className="w-full min-w-[36rem] text-left text-sm">
            <thead className="bg-slate-50 text-slate-600 dark:bg-slate-900 dark:text-slate-400">
              <tr>
                <th scope="col" className="px-3 py-2 font-medium">Name</th>
                <th scope="col" className="px-3 py-2 font-medium">Region</th>
                <th scope="col" className="px-3 py-2 font-medium">Type</th>
                <th scope="col" className="px-3 py-2 font-medium">Version / date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {items.map((f) => (
                <tr key={f.id} className="text-slate-800 dark:text-slate-200">
                  <th scope="row" className="px-3 py-2 font-medium">
                    <a href={`#${f.id}`} className="text-teal-800 underline-offset-2 hover:underline dark:text-teal-300">
                      {f.shortName}
                    </a>
                  </th>
                  <td className="px-3 py-2">{regionLabel[f.region]}</td>
                  <td className="px-3 py-2">{f.type}</td>
                  <td className="px-3 py-2">{f.glance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <h2 className="sr-only">Details</h2>
      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        {items.map((f) => (
          <InternationalCard key={f.id} f={f} />
        ))}
      </div>
    </div>
  )
}
