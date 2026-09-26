import { Link } from 'react-router-dom'
import { ArrowRight, ExternalLink, Globe } from 'lucide-react'
import type { IntlFramework } from '../data/types'
import { INTL_REGIONS } from '../data/international'
import { DIRECTIONS } from '../data/directions'

const regionLabel = Object.fromEntries(INTL_REGIONS.map((r) => [r.id, r.label])) as Record<string, string>
const directionById = new Map(DIRECTIONS.map((d) => [d.id, d]))

function hostOf(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, '')
  } catch {
    return url
  }
}

export default function InternationalCard({ f }: { f: IntlFramework }) {
  const [primary, ...otherLinks] = f.links
  const related = (f.related ?? []).flatMap((r) => {
    const d = directionById.get(r.directionId)
    return d ? [{ ...r, regulator: d.regulator }] : []
  })

  return (
    <article
      id={f.id}
      className="min-w-0 scroll-mt-24 rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
    >
      <div className="mb-2 flex flex-wrap items-center gap-2 text-xs">
        <span className="rounded-full bg-teal-50 px-2.5 py-0.5 font-semibold text-teal-800 dark:bg-teal-900/40 dark:text-teal-200">
          {f.shortName}
        </span>
        <span className="rounded-full border border-slate-300 px-2.5 py-0.5 text-slate-600 dark:border-slate-700 dark:text-slate-300">
          {regionLabel[f.region]}
        </span>
        <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
          {f.type}
        </span>
      </div>

      <h3 className="font-serif text-lg font-semibold leading-snug text-slate-900 dark:text-slate-50">{f.name}</h3>

      <dl className="mt-3 grid gap-x-4 gap-y-1.5 text-sm sm:grid-cols-[8rem_1fr]">
        <dt className="text-slate-500 dark:text-slate-400">Issued by</dt>
        <dd className="text-slate-800 dark:text-slate-200">{f.issuer}</dd>
        <dt className="text-slate-500 dark:text-slate-400">Jurisdiction</dt>
        <dd className="text-slate-800 dark:text-slate-200">{f.jurisdiction}</dd>
        <dt className="text-slate-500 dark:text-slate-400">Version / date</dt>
        <dd className="text-slate-800 dark:text-slate-200">{f.version}</dd>
        {f.appliesFrom && (
          <>
            <dt className="text-slate-500 dark:text-slate-400">Applies from</dt>
            <dd className="text-slate-800 dark:text-slate-200">{f.appliesFrom}</dd>
          </>
        )}
        <dt className="text-slate-500 dark:text-slate-400">Applies to</dt>
        <dd className="text-slate-800 dark:text-slate-200">{f.appliesTo}</dd>
      </dl>

      <p className="mt-3 text-[0.95rem] leading-relaxed text-slate-700 dark:text-slate-300">{f.summary}</p>

      {f.status && (
        <p className="mt-3 rounded-md border-l-4 border-amber-400 bg-amber-50 px-3 py-2 text-sm text-amber-950 dark:border-amber-500 dark:bg-amber-950/30 dark:text-amber-100">
          <span className="font-medium">Status: </span>
          {f.status}
        </p>
      )}

      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
        <a
          href={primary.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-md bg-teal-700 px-3 py-1.5 font-medium text-white hover:bg-teal-800 dark:bg-teal-600 dark:hover:bg-teal-500"
        >
          <Globe className="size-4" aria-hidden="true" />
          {primary.label}
          <span className="sr-only"> (opens {hostOf(primary.url)} in a new tab)</span>
          <ExternalLink className="size-3.5" aria-hidden="true" />
        </a>
        {otherLinks.map((l) => (
          <a
            key={l.url}
            href={l.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-teal-800 underline-offset-2 hover:underline dark:text-teal-300"
          >
            {l.label}
            <span className="sr-only"> (opens {hostOf(l.url)} in a new tab)</span>
            <ExternalLink className="size-3.5" aria-hidden="true" />
          </a>
        ))}
      </div>

      {related.length > 0 && (
        <div className="mt-4 border-t border-slate-100 pt-3 text-sm dark:border-slate-800">
          <p className="font-medium text-slate-700 dark:text-slate-300">Related on this site</p>
          <ul className="mt-1.5 space-y-1">
            {related.map((r) => (
              <li key={r.directionId}>
                <Link
                  to={`/directions?regulator=${r.regulator}`}
                  className="inline-flex items-center gap-1 text-teal-800 underline-offset-2 hover:underline dark:text-teal-300"
                >
                  {r.label}
                  <ArrowRight className="size-3.5" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  )
}
