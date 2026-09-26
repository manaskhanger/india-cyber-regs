import { DISCLAIMER, LAST_VERIFIED } from '../disclaimer'

const OFFICIAL_DOMAINS = [
  'rbi.org.in',
  'sebi.gov.in',
  'cert-in.org.in',
  'irdai.gov.in',
  'meity.gov.in',
  'egazette.gov.in',
  'pfrda.org.in',
]

// Issuers of the international laws, frameworks and standards on /international and /compare
const INTERNATIONAL_DOMAINS = [
  'eur-lex.europa.eu',
  'ecb.europa.eu',
  'bankofengland.co.uk',
  'nist.gov',
  'csrc.nist.gov',
  'nvlpubs.nist.gov',
  'sec.gov',
  'dfs.ny.gov',
  'bis.org',
  'iso.org',
  'pcisecuritystandards.org',
  'blog.pcisecuritystandards.org',
  'swift.com',
  'owasp.org',
  'top10.owasp.org',
  'genai.owasp.org',
  'github.com/OWASP',
  'opengroup.org',
  'publications.opengroup.org',
  'fairinstitute.org',
  'mas.gov.sg',
  'apra.gov.au',
  'handbook.apra.gov.au',
  'hkma.gov.hk',
  'brdr.hkma.gov.hk',
  'attack.mitre.org',
  'cisecurity.org',
  'isaca.org',
  'aicpa-cima.com',
]

function DomainList({ domains }: { domains: string[] }) {
  return (
    <>
      {domains.map((d, i) => (
        <span key={d}>
          <code className="rounded bg-slate-100 px-1 py-0.5 text-sm dark:bg-slate-800">{d}</code>
          {i < domains.length - 1 ? ', ' : '.'}
        </span>
      ))}
    </>
  )
}

export default function About() {
  return (
    <article className="max-w-3xl space-y-10">
      <header>
        <h1 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">About this project</h1>
      </header>

      <section aria-labelledby="purpose">
        <h2 id="purpose" className="font-serif text-2xl font-semibold">Purpose</h2>
        <p className="mt-3 text-slate-700 dark:text-slate-300">
          Indian cybersecurity rules are spread across several regulators, each with its own website, numbering style
          and document format. This site puts the key directions side by side so students, GRC and compliance analysts,
          and people preparing for interviews can quickly see who issued what, when, and for whom, and then go to the
          official text.
        </p>
        <p className="mt-3 text-slate-700 dark:text-slate-300">
          It is a personal, non-commercial learning project by Manas Khanger. There are no accounts, forms, trackers or
          analytics. The only thing stored in your browser is your light or dark theme choice.
        </p>
      </section>

      <section aria-labelledby="disclaimer" className="rounded-xl border border-amber-300 bg-amber-50 p-5 text-amber-950 dark:border-amber-500/40 dark:bg-amber-950/30 dark:text-amber-100">
        <h2 id="disclaimer" className="font-serif text-2xl font-semibold">Disclaimer</h2>
        <p className="mt-3 font-medium">{DISCLAIMER}</p>
        <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm">
          <li>This site is not run by, endorsed by, or connected to RBI, SEBI, CERT-In, IRDAI, MeitY, PFRDA, NPCI or any other public body.</li>
          <li>Summaries are simplified paraphrases. They may leave out conditions, exceptions, timelines or later amendments.</li>
          <li>Nothing here is legal, regulatory or compliance advice. The official text published by the regulator or issuing body is the only authoritative version.</li>
          <li>Regulations change. An entry that was accurate on the date it was checked may since have been amended, superseded or repealed.</li>
        </ul>
      </section>

      <section aria-labelledby="sources">
        <h2 id="sources" className="font-serif text-2xl font-semibold">Sources policy</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700 dark:text-slate-300">
          <li>
            <strong>Official sources only.</strong> Every title, issuing body, date, reference number, applicability note and
            figure is taken from the issuer’s own website. For Indian directions that means the regulator’s website or the
            Gazette of India: <DomainList domains={OFFICIAL_DOMAINS} />
          </li>
          <li>
            <strong>International issuers.</strong> International laws and supervisory frameworks link to the official
            publisher (EUR-Lex, central banks and regulators), and standards and frameworks link to the issuing standards
            body’s own site, such as ISO, PCI SSC, Swift, OWASP, The Open Group and the FAIR Institute. Domains used:{' '}
            <DomainList domains={INTERNATIONAL_DOMAINS} />
          </li>
          <li>
            <strong>No guessing.</strong> If a field could not be confirmed on an official source, it is left out rather than
            estimated. Items that could not be verified at all are not listed.
          </li>
          <li>
            <strong>Link, don’t copy.</strong> This site does not host, mirror or copy any regulator PDF. Each entry links to the
            official PDF where that link was confirmed to work, and to the official web page or listing otherwise.
          </li>
          <li>
            <strong>Hand-written summaries.</strong> The one-line summaries are original plain-language paraphrases written for
            this site, not quotations.
          </li>
          <li>
            <strong>No logos or seals.</strong> Regulator names are used only to identify the issuing body.
          </li>
          <li>
            <strong>Last checked:</strong> {LAST_VERIFIED}. Some entries show a status note, for example when a later document
            has repealed or superseded them.
          </li>
        </ul>
      </section>

      <section aria-labelledby="corrections">
        <h2 id="corrections" className="font-serif text-2xl font-semibold">Corrections</h2>
        <p className="mt-3 text-slate-700 dark:text-slate-300">
          Spotted an error or an outdated entry? Please open an issue on the{' '}
          <a
            href="https://github.com/manaskhanger/india-cyber-regs/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-800 underline underline-offset-2 dark:text-teal-300"
          >
            GitHub repository
          </a>{' '}
          with a link to the official source.
        </p>
      </section>
    </article>
  )
}
