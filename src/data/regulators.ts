import type { Regulator } from './types'

export const REGULATORS: Regulator[] = [
  {
    id: 'rbi',
    short: 'RBI',
    name: 'Reserve Bank of India',
    blurb:
      'IT governance and cybersecurity directions for banks, NBFCs, co-operative banks and payment products.',
    homeUrl: 'https://www.rbi.org.in/',
  },
  {
    id: 'sebi',
    short: 'SEBI',
    name: 'Securities and Exchange Board of India',
    blurb:
      'The CSCRF for securities-market entities and the earlier entity-wise cyber circulars it replaced.',
    homeUrl: 'https://www.sebi.gov.in/',
  },
  {
    id: 'certin',
    short: 'CERT-In',
    name: 'Indian Computer Emergency Response Team (MeitY)',
    blurb:
      'Economy-wide directions under Section 70B(6) of the IT Act: incident reporting, logs and clock sync.',
    homeUrl: 'https://www.cert-in.org.in/',
  },
  {
    id: 'irdai',
    short: 'IRDAI',
    name: 'Insurance Regulatory and Development Authority of India',
    blurb: 'Information and cyber security guidelines for insurers, intermediaries and IIB.',
    homeUrl: 'https://irdai.gov.in/',
  },
  {
    id: 'dpdp',
    short: 'DPDP / MeitY',
    name: 'Ministry of Electronics and Information Technology',
    blurb: 'The Digital Personal Data Protection Act, 2023 and the DPDP Rules, 2025.',
    homeUrl: 'https://www.meity.gov.in/',
  },
  {
    id: 'others',
    short: 'PFRDA & others',
    name: 'PFRDA, NPCI and other bodies',
    blurb:
      'Pension-sector cyber guidelines from PFRDA. Other bodies are added only once their text is verified.',
    homeUrl: 'https://www.pfrda.org.in/',
  },
]

export const regulatorById = Object.fromEntries(REGULATORS.map((r) => [r.id, r])) as Record<
  Regulator['id'],
  Regulator
>
