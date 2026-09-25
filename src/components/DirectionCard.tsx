import { ExternalLink, FileText, Globe } from 'lucide-react'
import type { Direction } from '../data/types'
import { regulatorById } from '../data/regulators'

function hostOf(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, '')
  } catch {
    return url
  }
}

export default function DirectionCard({ d }: { d: Direction }) {
  const reg = regulatorById[d.regulator]
  const isPdf = d.link.kind === 'pdf'
  const extraSources = d.sources.filter((s) => s !== d.link.url && s !== d.listingUrl)

  return (
    <article
      id={d.id}
      className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
    >
      <div className="mb-2 flex flex-wrap items-center gap-2 text-xs">
        <span className="rounded-full bg-teal-50 px-2.5 py-0.5 font-medium text-teal-800 dark:bg-teal-900/40 dark:text-teal-200">
          {reg.short}
        </span>
        <time dateTime={d.date} className="text-slate-500 dark:text-slate-400">
          {d.dateLabel}
        </time>
      </div>

      <h3 className="font-serif text-lg font-semibold leading-snug text-slate-900 dark:text-slate-50">{d.title}</h3>

      <dl className="mt-3 grid gap-x-4 gap-y-1.5 text-sm sm:grid-cols-[8rem_1fr]">
        <dt className="text-slate-500 dark:text-slate-400">Issued by</dt>
        <dd className="text-slate-800 dark:text-slate-200">{d.issuer}</dd>
        {d.refNo && (
          <>
            <dt className="text-slate-500 dark:text-slate-400">Reference no.</dt>
            <dd className="break-words font-mono text-[0.8rem] text-slate-800 dark:text-slate-200">{d.refNo}</dd>
          </>
        )}
        <dt className="text-slate-500 dark:text-slate-400">Applies to</dt>
        <dd className="text-slate-800 dark:text-slate-200">{d.appliesTo}</dd>
      </dl>

      <p className="mt-3 text-[0.95rem] leading-relaxed text-slate-700 dark:text-slate-300">{d.summary}</p>

      {d.status && (
        <p className="mt-3 rounded-md border-l-4 border-amber-400 bg-amber-50 px-3 py-2 text-sm text-amber-950 dark:border-amber-500 dark:bg-amber-950/30 dark:text-amber-100">
          <span className="font-medium">Status: </span>
          {d.status}
        </p>
      )}

      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
        <a
          href={d.link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-md bg-teal-700 px-3 py-1.5 font-medium text-white hover:bg-teal-800 dark:bg-teal-600 dark:hover:bg-teal-500"
        >
          {isPdf ? <FileText className="size-4" aria-hidden="true" /> : <Globe className="size-4" aria-hidden="true" />}
          {isPdf ? 'Official PDF' : 'Official page'}
          <span className="sr-only"> (opens {hostOf(d.link.url)} in a new tab)</span>
          <ExternalLink className="size-3.5" aria-hidden="true" />
        </a>
        {d.listingUrl && (
          <a
            href={d.listingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-teal-800 underline-offset-2 hover:underline dark:text-teal-300"
          >
            Official listing on {hostOf(d.listingUrl)}
            <ExternalLink className="size-3.5" aria-hidden="true" />
          </a>
        )}
      </div>

      {extraSources.length > 0 && (
        <details className="mt-3 text-xs text-slate-500 dark:text-slate-400">
          <summary className="cursor-pointer select-none">Other official sources used to verify this entry</summary>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            {extraSources.map((s) => (
              <li key={s} className="break-all">
                <a href={s} target="_blank" rel="noopener noreferrer" className="underline-offset-2 hover:underline">
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </details>
      )}
    </article>
  )
}
