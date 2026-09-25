export type RegulatorId = 'rbi' | 'sebi' | 'certin' | 'irdai' | 'dpdp' | 'others'

export type Regulator = {
  id: RegulatorId
  /** Short label used on chips and tiles */
  short: string
  /** Full name of the issuing body / area */
  name: string
  blurb: string
  homeUrl: string
}

export type LinkKind = 'pdf' | 'page'

export type Direction = {
  id: string
  regulator: RegulatorId
  title: string
  /** Issuing body exactly as it appears on the source */
  issuer: string
  /** ISO date (YYYY-MM-DD) used for sorting */
  date: string
  /** Human-readable date as printed on the document */
  dateLabel: string
  /** Circular / reference number, only when verified on the official source */
  refNo?: string
  appliesTo: string
  /** One hand-written, plain-language sentence on what the document covers */
  summary: string
  /** Optional status note (e.g. repealed / superseded), only when verified */
  status?: string
  /** Primary outbound link: official PDF where verified, otherwise the official page */
  link: { url: string; kind: LinkKind }
  /** Optional official listing / landing page */
  listingUrl?: string
  /** Official URLs used to verify the fields above */
  sources: string[]
}
