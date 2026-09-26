import { Link } from 'react-router-dom'
import { DISCLAIMER, LAST_VERIFIED } from '../disclaimer'

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/60">
      <div className="mx-auto max-w-6xl space-y-3 px-4 py-8 text-sm text-slate-600 dark:text-slate-400">
        <p className="font-medium text-slate-800 dark:text-slate-200">{DISCLAIMER}</p>
        <p>
          Summaries are plain-language paraphrases written for learning. They are not legal advice and may omit
          conditions, exceptions and later amendments. Outbound links go to official regulator or government websites,
          or, for standards and frameworks, to the issuing body’s own site (for example ISO, PCI SSC, Swift, OWASP, The
          Open Group and the FAIR Institute). Details last checked {LAST_VERIFIED}.
        </p>
        <p className="flex flex-wrap gap-x-4 gap-y-1">
          <Link to="/directions" className="underline-offset-2 hover:underline">Directions</Link>
          <Link to="/international" className="underline-offset-2 hover:underline">International</Link>
          <Link to="/compare" className="underline-offset-2 hover:underline">Compare</Link>
          <Link to="/about" className="underline-offset-2 hover:underline">About &amp; sources policy</Link>
          <a href="https://github.com/manaskhanger/india-cyber-regs" className="underline-offset-2 hover:underline" rel="noopener noreferrer" target="_blank">
            Source code on GitHub
          </a>
        </p>
      </div>
    </footer>
  )
}
