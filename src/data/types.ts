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

// ---------------------------------------------------------------- International frameworks

export type IntlRegionId = 'eu' | 'uk' | 'us' | 'global'

export type IntlRegion = {
  id: IntlRegionId
  /** Short label used on filter buttons */
  label: string
  /** Longer name used in the "Showing…" line */
  name: string
}

export type IntlFrameworkType =
  | 'Law/Regulation'
  | 'Directive'
  | 'Supervisory framework'
  | 'Voluntary framework'
  | 'Standard'

export type OfficialLink = {
  /** Short label for the link, e.g. "EUR-Lex (official text)" */
  label: string
  url: string
}

export type IntlFramework = {
  id: string
  region: IntlRegionId
  /** Full name / official title */
  name: string
  /** Short name used in the card badge */
  shortName: string
  /** Issuing body as shown on the official source */
  issuer: string
  /** Jurisdiction or region the item applies in */
  jurisdiction: string
  type: IntlFrameworkType
  /** Current version or adoption date, as verified on the official source */
  version: string
  /** Very short version/date label for the "At a glance" table */
  glance: string
  /** Date(s) it applies from, where relevant and verified */
  appliesFrom?: string
  appliesTo: string
  /** Hand-written, plain-language 1–2 sentence summary */
  summary: string
  /** Optional status note (superseded, amended, etc.), only when verified */
  status?: string
  /** Official outbound links (first one is the primary link) */
  links: OfficialLink[]
  /** Optional "Related on this site" links to Indian directions (ids from directions.ts) */
  related?: { directionId: string; label: string }[]
  /** Official URLs used to verify the fields above */
  sources: string[]
}
