import { Link, useSearchParams } from 'react-router-dom'
import { ExternalLink, Info, ArrowRight } from 'lucide-react'
import { COMPARE, COMPARE_TOPICS } from '../data/compare'
import type { CompareRow, CompareTopicId } from '../data/types'
import { DISCLAIMER, LAST_VERIFIED } from '../disclaimer'

const VALID = new Set<string>(COMPARE_TOPICS.map((t) => t.id))

function ScopeBadge({ scope }: { scope: CompareRow['scope'] }) {
  return scope === 'indian' ? (
    <span className="inline-block rounded-full bg-teal-50 px-2 py-0.5 text-xs font-medium text-teal-800 dark:bg-teal-900/40 dark:text-teal-200">
      Indian
    </span>
  ) : (
    <span className="inline-block rounded-full bg-indigo-50 px-2 py-0.5 text-xs font-medium text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-200">
      International
    </span>
  )
}

function Points({ row }: { row: CompareRow }) {
  return (
    <div className="space-y-2">
      <ul className="space-y-2">
        {row.points.map((p) => (
          <li key={p.clause + p.text.slice(0, 24)}>
            {p.text}{' '}
            <span className="whitespace-normal text-xs font-medium text-slate-500 dark:text-slate-400">[{p.clause}]</span>
          </li>
        ))}
      </ul>
      {row.note && (
        <p className="rounded-md border-l-4 border-amber-400 bg-amber-50 px-2.5 py-1.5 text-xs text-amber-950 dark:border-amber-500 dark:bg-amber-950/30 dark:text-amber-100">
          <span className="font-medium">Note: </span>
          {row.note}
        </p>
      )}
    </div>
  )
}

function Sources({ row }: { row: CompareRow }) {
  return (
    <ul className="space-y-1.5">
      {row.sources.map((s) => (
        <li key={s.url}>
          <a
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-start gap-1 text-teal-800 underline-offset-2 hover:underline dark:text-teal-300"
          >
            <span>{s.label}</span>
            <ExternalLink className="mt-1 size-3 shrink-0" aria-hidden="true" />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </li>
      ))}
      <li>
        <Link
          to={row.card.to}
          className="inline-flex items-start gap-1 text-slate-700 underline underline-offset-2 hover:text-teal-800 dark:text-slate-300 dark:hover:text-teal-300"
        >
          <span>{row.card.label} on this site</span>
          <ArrowRight className="mt-1 size-3 shrink-0" aria-hidden="true" />
        </Link>
      </li>
    </ul>
  )
}

export default function Compare() {
  const [params, setParams] = useSearchParams()
  const raw = params.get('topic')
  const active: CompareTopicId = raw && VALID.has(raw) ? (raw as CompareTopicId) : 'incident'
  const topic = COMPARE_TOPICS.find((t) => t.id === active) ?? COMPARE_TOPICS[0]
  const rows = COMPARE[topic.id]
  const nIndian = rows.filter((r) => r.scope === 'indian').length
  const nIntl = rows.length - nIndian

  const select = (id: CompareTopicId) => {
    if (id === 'incident') setParams({}, { replace: true })
    else setParams({ topic: id }, { replace: true })
  }

  return (
    <div className="min-w-0">
      <header className="max-w-3xl">
        <h1 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Compare Indian and international rules</h1>
        <p className="mt-3 text-slate-600 dark:text-slate-300">
          Side-by-side tables for four topics that come up in almost every cyber regulation: incident reporting, log
          retention, audits, and red-team or penetration testing. Each row gives the figure, the clause it comes from, who
          it applies to, and a link to the official text and to the matching card on this site.
        </p>
      </header>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <section
          aria-labelledby="legend-heading"
          className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700 dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-300"
        >
          <h2 id="legend-heading" className="font-semibold text-slate-900 dark:text-slate-100">
            How to read these tables
          </h2>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>
              <strong>Inclusion means verified.</strong> A row appears only if its figure was read in the official text
              linked in that row, on {LAST_VERIFIED}.
            </li>
            <li>
              <strong>Omission is not absence.</strong> If an instrument is missing from a table, it may still deal with the
              topic. It is left out because the text doesn’t set a figure, or because the figure could not be verified.
            </li>
            <li>
              <ScopeBadge scope="indian" /> marks an Indian instrument and <ScopeBadge scope="international" /> marks an
              international one. Clause or article numbers are shown in [square brackets].
            </li>
          </ul>
        </section>
        <section
          aria-labelledby="caveat-heading"
          className="rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-950 dark:border-amber-500/40 dark:bg-amber-950/30 dark:text-amber-100"
        >
          <h2 id="caveat-heading" className="flex items-center gap-2 font-semibold">
            <Info className="size-4 shrink-0" aria-hidden="true" /> Caveat
          </h2>
          <p className="mt-2">
            This is an educational summary, not legal or compliance advice. Always read the official text before relying on
            any figure. Rules may have been amended since they were checked on {LAST_VERIFIED}, and each figure may carry
            conditions and exceptions that are not shown here.
          </p>
          <p className="mt-2 font-medium">{DISCLAIMER}</p>
        </section>
      </div>

      <div role="tablist" aria-label="Topic" className="mt-8 flex flex-wrap gap-2">
        {COMPARE_TOPICS.map((t) => {
          const on = t.id === topic.id
          return (
            <button
              key={t.id}
              id={`tab-${t.id}`}
              type="button"
              role="tab"
              aria-selected={on}
              aria-controls={`panel-${t.id}`}
              tabIndex={on ? 0 : -1}
              onClick={() => select(t.id)}
              onKeyDown={(e) => {
                if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return
                const i = COMPARE_TOPICS.findIndex((x) => x.id === topic.id)
                const next = COMPARE_TOPICS[(i + (e.key === 'ArrowRight' ? 1 : COMPARE_TOPICS.length - 1)) % COMPARE_TOPICS.length]
                select(next.id)
                document.getElementById(`tab-${next.id}`)?.focus()
              }}
              className={`rounded-full border px-3.5 py-1.5 text-sm transition-colors ${
                on
                  ? 'border-teal-700 bg-teal-700 text-white dark:border-teal-500 dark:bg-teal-600'
                  : 'border-slate-300 bg-white text-slate-700 hover:border-teal-500 hover:text-teal-800 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-teal-500 dark:hover:text-teal-300'
              }`}
            >
              {t.label} <span className={on ? 'text-teal-100' : 'text-slate-400'}>({COMPARE[t.id].length})</span>
            </button>
          )
        })}
      </div>

      <section id={`panel-${topic.id}`} role="tabpanel" aria-labelledby={`tab-${topic.id}`} className="mt-6 min-w-0">
        <h2 className="font-serif text-2xl font-semibold">{topic.title}</h2>
        <p className="mt-1 text-slate-600 dark:text-slate-300">{topic.description}</p>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400" aria-live="polite">
          {rows.length} verified rows: {nIndian} Indian and {nIntl} international.
        </p>

        {/* Wide screens: a real table that scrolls inside its own box if needed */}
        <div className="mt-4 hidden overflow-x-auto rounded-xl border border-slate-200 md:block dark:border-slate-800">
          <table className="w-full min-w-[58rem] table-fixed text-left text-sm">
            <caption className="sr-only">{topic.title}</caption>
            <colgroup>
              <col className="w-[17%]" />
              <col className="w-[9%]" />
              <col className="w-[40%]" />
              <col className="w-[16%]" />
              <col className="w-[18%]" />
            </colgroup>
            <thead className="bg-slate-50 text-slate-600 dark:bg-slate-900 dark:text-slate-400">
              <tr>
                <th scope="col" className="px-3 py-2 font-medium">Instrument</th>
                <th scope="col" className="px-3 py-2 font-medium">Jurisdiction</th>
                <th scope="col" className="px-3 py-2 font-medium">Requirement [clause]</th>
                <th scope="col" className="px-3 py-2 font-medium">Applies to</th>
                <th scope="col" className="px-3 py-2 font-medium">Source</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 align-top dark:divide-slate-800">
              {rows.map((r) => (
                <tr key={r.id} className="text-slate-800 dark:text-slate-200">
                  <th scope="row" className="px-3 py-3 font-medium">
                    <ScopeBadge scope={r.scope} />
                    <span className="mt-1.5 block">{r.instrument}</span>
                  </th>
                  <td className="px-3 py-3">{r.jurisdiction}</td>
                  <td className="px-3 py-3">
                    <Points row={r} />
                  </td>
                  <td className="px-3 py-3 text-slate-700 dark:text-slate-300">{r.appliesTo}</td>
                  <td className="px-3 py-3">
                    <Sources row={r} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Small screens: each row stacks into a card */}
        <ol className="mt-4 space-y-4 md:hidden" aria-label={`${topic.title} (stacked)`}>
          {rows.map((r) => (
            <li
              key={r.id}
              className="min-w-0 rounded-xl border border-slate-200 bg-white p-4 text-sm [overflow-wrap:anywhere] dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="flex flex-wrap items-center gap-2">
                <ScopeBadge scope={r.scope} />
                <span className="text-xs text-slate-500 dark:text-slate-400">{r.jurisdiction}</span>
              </div>
              <h3 className="mt-1.5 font-semibold text-slate-900 dark:text-slate-50">{r.instrument}</h3>
              <dl className="mt-2 space-y-2">
                <div>
                  <dt className="text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">Requirement</dt>
                  <dd className="mt-0.5 text-slate-800 dark:text-slate-200">
                    <Points row={r} />
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">Applies to</dt>
                  <dd className="mt-0.5 text-slate-700 dark:text-slate-300">{r.appliesTo}</dd>
                </div>
                <div>
                  <dt className="text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">Source</dt>
                  <dd className="mt-0.5">
                    <Sources row={r} />
                  </dd>
                </div>
              </dl>
            </li>
          ))}
        </ol>
      </section>
    </div>
  )
}
