import { Info } from 'lucide-react'
import { DISCLAIMER } from '../disclaimer'

export default function DisclaimerBanner() {
  return (
    <div
      role="note"
      aria-label="Disclaimer"
      className="border-b border-amber-300/70 bg-amber-50 text-amber-950 dark:border-amber-500/30 dark:bg-amber-950/40 dark:text-amber-100"
    >
      <p className="mx-auto flex max-w-6xl items-start gap-2 px-4 py-2 text-sm sm:items-center">
        <Info className="mt-0.5 size-4 shrink-0 sm:mt-0" aria-hidden="true" />
        <span>{DISCLAIMER}</span>
      </p>
    </div>
  )
}
