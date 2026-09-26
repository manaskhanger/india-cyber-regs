import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, GraduationCap, ClipboardCheck, Globe2, Scale } from 'lucide-react'
import { REGULATORS } from '../data/regulators'
import { DIRECTIONS } from '../data/directions'
import { INTERNATIONAL, INTL_REGIONS } from '../data/international'
import { COMPARE, COMPARE_TOPICS } from '../data/compare'
import { DISCLAIMER } from '../disclaimer'

const countFor = (id: string) => DIRECTIONS.filter((d) => d.regulator === id).length

const AUDIENCES = [
  {
    icon: GraduationCap,
    title: 'Students',
    text: 'See which regulator issued what, when, and for whom, before reading the full text.',
  },
  {
    icon: ClipboardCheck,
    title: 'GRC and compliance analysts',
    text: 'A quick map of reference numbers and applicability, with a link to the official source every time.',
  },
  {
    icon: BookOpen,
    title: 'Interview prep',
    text: 'Short, specific summaries of the frameworks that come up most in Indian cyber and GRC interviews.',
  },
]

export default function Home() {
  return (
    <div className="space-y-14">
      <section className="max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-wider text-teal-700 dark:text-teal-400">
          Unofficial study guide
        </p>
        <h1 className="mt-2 font-serif text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          Indian cybersecurity regulations, in one clean place
        </h1>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
          India Cyber Regs lists the main cybersecurity and IT-risk directions issued by Indian regulators, including RBI, SEBI,
          CERT-In, IRDAI, MeitY (DPDP) and PFRDA. Each entry shows the title, issuing body, date, reference number and
          applicability as printed on the official document, plus one plain-language sentence on what it covers.
        </p>
        <p className="mt-3 text-slate-600 dark:text-slate-300">
          It is a reading companion, not a replacement for the source. Every entry links to the regulator’s own
          website.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to="/directions"
            className="inline-flex items-center gap-2 rounded-lg bg-teal-700 px-4 py-2.5 font-medium text-white hover:bg-teal-800 dark:bg-teal-600 dark:hover:bg-teal-500"
          >
            Browse {DIRECTIONS.length} directions <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-4 py-2.5 font-medium text-slate-800 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-900"
          >
            How entries are verified
          </Link>
        </div>
      </section>

      <section aria-labelledby="regulators-heading">
        <h2 id="regulators-heading" className="font-serif text-2xl font-semibold">
          Browse by regulator
        </h2>
        <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {REGULATORS.map((r) => {
            const n = countFor(r.id)
            return (
              <li key={r.id}>
                <Link
                  to={`/directions?regulator=${r.id}`}
                  className="group flex h-full flex-col rounded-xl border border-slate-200 bg-white p-5 transition hover:border-teal-400 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-teal-600"
                >
                  <span className="text-xl font-semibold text-slate-900 dark:text-slate-50">{r.short}</span>
                  <span className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">{r.name}</span>
                  <span className="mt-3 flex-1 text-sm text-slate-700 dark:text-slate-300">{r.blurb}</span>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-teal-800 dark:text-teal-300">
                    {n} {n === 1 ? 'entry' : 'entries'}
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                  </span>
                </Link>
              </li>
            )
          })}
        </ul>
      </section>

      <section
        aria-labelledby="intl-heading"
        className="rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900/60"
      >
        <div className="flex items-start gap-3">
          <Globe2 className="mt-1 size-5 shrink-0 text-teal-700 dark:text-teal-400" aria-hidden="true" />
          <div>
            <h2 id="intl-heading" className="font-serif text-2xl font-semibold">
              International frameworks
            </h2>
            <p className="mt-2 max-w-3xl text-slate-700 dark:text-slate-300">
              Compare Indian rules with {INTERNATIONAL.length} international laws, frameworks and standards, including
              GDPR, DORA, NIS2, the NIST CSF, APRA CPS 234, the MAS TRM Guidelines, ISO/IEC 27001 and MITRE ATT&amp;CK, with filters for{' '}
              {INTL_REGIONS.map((r) => r.label).join(', ').replace(/, ([^,]*)$/, ' and $1')}.
            </p>
            <Link
              to="/international"
              className="mt-4 inline-flex items-center gap-2 rounded-lg border border-teal-700 px-4 py-2 font-medium text-teal-800 hover:bg-teal-50 dark:border-teal-500 dark:text-teal-300 dark:hover:bg-teal-900/30"
            >
              Browse {INTERNATIONAL.length} international frameworks <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="compare-heading"
        className="rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900/60"
      >
        <div className="flex items-start gap-3">
          <Scale className="mt-1 size-5 shrink-0 text-teal-700 dark:text-teal-400" aria-hidden="true" />
          <div>
            <h2 id="compare-heading" className="font-serif text-2xl font-semibold">
              Compare side by side
            </h2>
            <p className="mt-2 max-w-3xl text-slate-700 dark:text-slate-300">
              Tables that put Indian and international rules next to each other on{' '}
              {COMPARE_TOPICS.map((t) => t.label.toLowerCase()).join(', ').replace(/, ([^,]*)$/, ' and $1')}, for
              example CERT-In’s 6-hour reporting window next to GDPR’s 72 hours. Every row cites the clause and links to
              the official text; only figures verified in that text are shown.
            </p>
            <Link
              to="/compare"
              className="mt-4 inline-flex items-center gap-2 rounded-lg border border-teal-700 px-4 py-2 font-medium text-teal-800 hover:bg-teal-50 dark:border-teal-500 dark:text-teal-300 dark:hover:bg-teal-900/30"
            >
              Open the {Object.values(COMPARE).reduce((n, rows) => n + rows.length, 0)}-row comparison{' '}
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section aria-labelledby="who-heading">
        <h2 id="who-heading" className="font-serif text-2xl font-semibold">
          Who it is for
        </h2>
        <ul className="mt-5 grid gap-4 md:grid-cols-3">
          {AUDIENCES.map(({ icon: Icon, title, text }) => (
            <li key={title} className="rounded-xl bg-slate-50 p-5 dark:bg-slate-900/60">
              <Icon className="size-5 text-teal-700 dark:text-teal-400" aria-hidden="true" />
              <h3 className="mt-2 font-semibold">{title}</h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section
        aria-labelledby="disclaimer-heading"
        className="rounded-xl border border-amber-300 bg-amber-50 p-5 text-amber-950 dark:border-amber-500/40 dark:bg-amber-950/30 dark:text-amber-100"
      >
        <h2 id="disclaimer-heading" className="font-semibold">
          Disclaimer
        </h2>
        <p className="mt-1">{DISCLAIMER}</p>
        <p className="mt-2 text-sm">
          Summaries are simplified for learning and may leave out conditions, exceptions or later amendments. Nothing
          here is legal or compliance advice.
        </p>
      </section>
    </div>
  )
}
