import { Link } from 'react-router-dom'
import { DISCLAIMER, LAST_VERIFIED } from '../disclaimer'

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/60">
      <div className="mx-auto max-w-6xl space-y-3 px-4 py-8 text-sm text-slate-600 dark:text-slate-400">
        <p className="font-medium text-slate-800 dark:text-slate-200">{DISCLAIMER}</p>
        <p>
          Summaries are plain-language paraphrases written for learning. They are not legal advice and may omit
          conditions, exceptions and later amendments. Every outbound link points to an official government or
          regulator website. Details last checked {LAST_VERIFIED}.
        </p>
        <p className="flex flex-wrap gap-x-4 gap-y-1">
          <Link to="/directions" className="underline-offset-2 hover:underline">Directions</Link>
          <Link to="/about" className="underline-offset-2 hover:underline">About &amp; sources policy</Link>
          <a href="https://github.com/manaskhanger/india-cyber-regs" className="underline-offset-2 hover:underline" rel="noopener noreferrer" target="_blank">
            Source code on GitHub
          </a>
        </p>
      </div>
    </footer>
  )
}
