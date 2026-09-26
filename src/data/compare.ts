import type { CompareRow, CompareTopic, CompareTopicId } from './types'

// Every figure below was read in the official text linked in `sources` on 26 September 2026.
// Rows are included only where the figure was verified. Omission does not mean a rule is silent.

const CERTIN = 'https://www.cert-in.org.in/PDF/CERT-In_Directions_70B_28.04.2022.pdf'
const CERTIN_FAQ = 'https://www.cert-in.org.in/PDF/FAQs_on_CyberSecurityDirections_May2022.pdf'
const CSCRF = 'https://www.sebi.gov.in/sebi_data/attachdocs/aug-2024/1724326790365.pdf'
const RBI_CB = 'https://rbi.org.in/Scripts/NotificationUser.aspx?Id=13643&Mode=0'
const RBI_NBFC = 'https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx?id=13592'
const RBI_UCB = 'https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx?id=13616'
const IRDAI_2023 =
  'https://irdai.gov.in/documents/37343/366029/%E0%A4%86%E0%A4%88%E0%A4%86%E0%A4%B0%E0%A4%A1%E0%A5%80%E0%A4%8F%E0%A4%86%E0%A4%88+%E0%A4%B8%E0%A5%82%E0%A4%9A%E0%A4%A8%E0%A4%BE+%E0%A4%94%E0%A4%B0+%E0%A4%B8%E0%A4%BE%E0%A4%87%E0%A4%AC%E0%A4%B0+%E0%A4%B8%E0%A5%81%E0%A4%B0%E0%A4%95%E0%A5%8D%E0%A4%B7%E0%A4%BE+%E0%A4%A6%E0%A4%BF%E0%A4%B6%E0%A4%BE%E0%A4%A8%E0%A4%BF%E0%A4%B0%E0%A5%8D%E0%A4%A6%E0%A5%87%E0%A4%B6+2023+_+IRDAI+Information+and+Cyber+Security+Guidelines%2C+2023.pdf/81730785-1f51-977b-5a92-d9cfd7eb2cd6?version=2.0&t=1740997153060&download=true'
const PFRDA = 'https://pfrda.org.in/documents/33652/198544/18+PFRDA202414ICS01.pdf'
const DPDP_RULES = 'https://egazette.gov.in/WriteReadData/2025/267650.pdf'
const GDPR = 'https://eur-lex.europa.eu/eli/reg/2016/679/oj'
const DORA = 'https://eur-lex.europa.eu/eli/reg/2022/2554/oj'
const DORA_RTS_REPORTING = 'https://eur-lex.europa.eu/eli/reg_del/2025/301/oj'
const NIS2 = 'https://eur-lex.europa.eu/eli/dir/2022/2555/oj'
const CRA = 'https://eur-lex.europa.eu/eli/reg/2024/2847/oj'
const NYDFS = 'https://www.dfs.ny.gov/cybersecurity/23-NYCRR-Part-500'
const SEC_PR = 'https://www.sec.gov/newsroom/press-releases/2023-139'
const SEC_RULE = 'https://www.sec.gov/rules-regulations/2023/07/s7-09-22'
const TIBER_FW = 'https://www.ecb.europa.eu/pub/pdf/other/ecb.tiber_eu_framework_2025~b32eff9a10.en.pdf'
const TIBER_PAGE = 'https://www.ecb.europa.eu/paym/cyber-resilience/tiber-eu/html/index.en.html'
const CBEST =
  'https://www.bankofengland.co.uk/financial-stability/operational-resilience-of-the-financial-sector/cbest-threat-intelligence-led-assessments-implementation-guide'

const MAS_TRM =
  'https://www.mas.gov.sg/-/media/mas/regulations-and-financial-stability/regulatory-and-supervisory-framework/risk-management/trm-guidelines-18-january-2021.pdf'
const APRA_CPS234 = 'https://www.apra.gov.au/sites/default/files/cps_234_july_2019_for_public_release.pdf'
const HKMA_CFI2 = 'https://brdr.hkma.gov.hk/eng/doc-ldg/docId/getPdf/20201103-1-EN/20201103-1-EN.pdf'
const HKMA_CFI2_ANNEX = 'https://brdr.hkma.gov.hk/eng/doc-ldg/docId/getPdf/20201103-2-EN/20201103-2-EN.pdf'

const IRDAI_NOTE =
  'Figure taken from the 2023 Guidelines. IRDAI revised them by the Information and Cyber Security Guidelines, 2026 (6 April 2026), but the full 2026 text (Annexure B) was not available on irdai.gov.in to verify, so check the 2026 version before relying on this.'
const DPDP_NOTE =
  'Rules 6, 7 and 8 come into force eighteen months after the Rules were published in the Gazette (Rule 1(4)).'
const NYDFS_NOTE =
  'Read on DFS’s own page, which DFS describes as an unofficial version of the Second Amendment text.'

const card = {
  certin: { to: '/directions?regulator=certin#certin-70b-2022', label: 'CERT-In Directions card' },
  cscrf: { to: '/directions?regulator=sebi#sebi-cscrf-2024', label: 'SEBI CSCRF card' },
  rbiCb: { to: '/directions?regulator=rbi#rbi-cb-cyber-2026', label: 'RBI Commercial Banks card' },
  rbiNbfc: { to: '/directions?regulator=rbi#rbi-nbfc-cyber-2026', label: 'RBI NBFCs card' },
  rbiUcb: { to: '/directions?regulator=rbi#rbi-ucb-cyber-2026', label: 'RBI UCBs card' },
  irdai: { to: '/directions?regulator=irdai#irdai-ics-2023', label: 'IRDAI 2023 card' },
  pfrda: { to: '/directions?regulator=pfrda#pfrda-ics-2024', label: 'PFRDA card' },
  dpdp: { to: '/directions?regulator=dpdp#dpdp-rules-2025', label: 'DPDP Rules card' },
  gdpr: { to: '/international?region=eu#eu-gdpr', label: 'GDPR card' },
  dora: { to: '/international?region=eu#eu-dora', label: 'DORA card' },
  nis2: { to: '/international?region=eu#eu-nis2', label: 'NIS2 card' },
  cra: { to: '/international?region=eu#eu-cra', label: 'Cyber Resilience Act card' },
  tiber: { to: '/international?region=eu#eu-tiber', label: 'TIBER-EU card' },
  cbest: { to: '/international?region=uk#uk-cbest', label: 'CBEST card' },
  nydfs: { to: '/international?region=us#us-nydfs-500', label: 'NYDFS Part 500 card' },
  sec: { to: '/international?region=us#us-sec-cyber-2023', label: 'SEC cyber disclosure card' },
  mas: { to: '/international?region=apac#apac-mas-trm', label: 'MAS TRM Guidelines card' },
  apra: { to: '/international?region=apac#apac-apra-cps234', label: 'APRA CPS 234 card' },
  hkma: { to: '/international?region=apac#apac-hkma-craf', label: 'HKMA C-RAF 2.0 / iCAST card' },
}

export const COMPARE_TOPICS: CompareTopic[] = [
  {
    id: 'incident',
    label: 'Incident reporting',
    title: 'Incident reporting: deadline and recipient',
    description: 'How quickly an incident or breach must be reported, and to whom.',
  },
  {
    id: 'logs',
    label: 'Log retention',
    title: 'Log retention: period and location',
    description: 'How long logs or audit trails must be kept, and where, when the text says so.',
  },
  {
    id: 'audit',
    label: 'Audit',
    title: 'Audit or assessment: frequency and who performs it',
    description: 'How often a cyber or IS audit is required, and who may carry it out.',
  },
  {
    id: 'testing',
    label: 'Testing',
    title: 'Red-team, threat-led and penetration testing',
    description: 'How often VA/PT, red-team or threat-led tests are required, and by whom.',
  },
]

export const COMPARE: Record<CompareTopicId, CompareRow[]> = {
  // ------------------------------------------------------------------ 1. Incident reporting
  incident: [
    {
      id: 'inc-certin',
      scope: 'indian',
      instrument: 'CERT-In Directions under Section 70B(6), 28 April 2022',
      jurisdiction: 'India',
      points: [
        {
          text: 'Report the cyber incidents listed in Annexure I to CERT-In within 6 hours of noticing them or being told about them (email, phone or fax).',
          clause: 'Direction (ii)',
        },
      ],
      appliesTo: 'Service providers, intermediaries, data centres, body corporates and Government organisations',
      sources: [{ label: 'CERT-In Directions PDF, p. 2', url: `${CERTIN}#page=2` }],
      card: card.certin,
    },
    {
      id: 'inc-cscrf',
      scope: 'indian',
      instrument: 'SEBI CSCRF, 20 August 2024',
      jurisdiction: 'India',
      points: [
        {
          text: 'Incidents covered by the CERT-In directions: notify SEBI (mkt_incidents@sebi.gov.in) and CERT-In within 6 hours of noticing or detecting them, then file details on the SEBI Incident Reporting Portal within 24 hours. Stock brokers and depository participants also report to the stock exchanges or depositories within 6 hours.',
          clause: 'Standards RS.CO.S1–S3, guideline 1; Annexure-O, Part B, para 1',
        },
        {
          text: 'All other cybersecurity incidents: report to SEBI, CERT-In and NCIIPC (as applicable) within 24 hours.',
          clause: 'RS.CO guideline 1',
        },
      ],
      appliesTo: 'All SEBI regulated entities (mandatory)',
      sources: [
        { label: 'CSCRF PDF, p. 123 (RS.CO)', url: `${CSCRF}#page=123` },
        { label: 'CSCRF PDF, p. 199 (Annexure-O)', url: `${CSCRF}#page=199` },
      ],
      card: card.cscrf,
    },
    {
      id: 'inc-rbi-cb',
      scope: 'indian',
      instrument: 'RBI Commercial Banks cyber resilience Directions, 2026',
      jurisdiction: 'India',
      points: [
        {
          text: 'Report cyber incidents on RBI’s DAKSH platform within six hours of detection, and pro-actively notify CERT-In.',
          clause: 'Para 182',
        },
      ],
      appliesTo: 'Commercial banks (other than Small Finance Banks, Payments Banks and Local Area Banks)',
      sources: [{ label: 'RBI Directions page (para 182)', url: RBI_CB }],
      card: card.rbiCb,
    },
    {
      id: 'inc-rbi-nbfc',
      scope: 'indian',
      instrument: 'RBI NBFCs cyber resilience Directions, 2026',
      jurisdiction: 'India',
      points: [
        {
          text: 'Report cyber incidents to RBI on the DAKSH platform within six hours of detection.',
          clause: 'Para 28 (Chapter IV); para 141 (Chapter V)',
        },
        {
          text: 'Also pro-actively notify CERT-In. Housing Finance Companies keep reporting to NHB instead of RBI.',
          clause: 'Para 141 (Chapter V)',
        },
      ],
      appliesTo: 'NBFCs in the Base Layer with assets of ₹500 crore and above (Chapter IV), and NBFCs in the Middle Layer and above, excluding CICs (Chapter V)',
      sources: [{ label: 'RBI Master Direction page (paras 28, 141)', url: RBI_NBFC }],
      card: card.rbiNbfc,
    },
    {
      id: 'inc-rbi-ucb',
      scope: 'indian',
      instrument: 'RBI UCBs cyber resilience Directions, 2026',
      jurisdiction: 'India',
      points: [
        {
          text: 'Report cyber incidents on the DAKSH platform within six hours of detection, and proactively notify CERT-In.',
          clause: 'Paras 87–88 (Chapter III)',
        },
      ],
      appliesTo: 'All urban co-operative banks (Chapter III applies at every level, I to IV)',
      sources: [{ label: 'RBI Master Direction page (paras 87–88)', url: RBI_UCB }],
      card: card.rbiUcb,
    },
    {
      id: 'inc-irdai',
      scope: 'indian',
      instrument: 'IRDAI Information and Cyber Security Guidelines, 2023',
      jurisdiction: 'India',
      points: [
        {
          text: 'Report cyber incidents to CERT-In within 6 hours of noticing them or being told about them, with a copy to IRDAI and other concerned regulators or authorities.',
          clause: 'Policy 2.10 (Incident and problem management), section 3.5, item 3',
        },
      ],
      appliesTo: 'All insurers, including foreign reinsurance branches, and insurance intermediaries regulated by IRDAI',
      note: IRDAI_NOTE,
      sources: [{ label: 'IRDAI 2023 Guidelines PDF, p. 224', url: `${IRDAI_2023}#page=224` }],
      card: card.irdai,
    },
    {
      id: 'inc-pfrda',
      scope: 'indian',
      instrument: 'PFRDA Information and Cyber Security Policy Guidelines, 2024',
      jurisdiction: 'India',
      points: [
        {
          text: 'Report cyber incidents to CERT-In and PFRDA within 6 hours of noticing them or being told about them. Applies to both Category I and Category II entities.',
          clause: '“Reporting of Cyber incidents”, Reporting to CERT-In',
        },
        {
          text: 'Category I entities also send PFRDA a specific report within 48 hours of the occurrence of an incident that, in the entity’s opinion, affects subscribers and other stakeholders, and a quarterly report of all incidents reported to CERT-In.',
          clause: '“Reporting of Cyber incidents”, Reporting to PFRDA',
        },
      ],
      appliesTo: 'PFRDA intermediaries and regulated entities',
      sources: [
        { label: 'PFRDA Guidelines PDF, p. 28', url: `${PFRDA}#page=28` },
        { label: 'PFRDA Guidelines PDF, p. 30', url: `${PFRDA}#page=30` },
      ],
      card: card.pfrda,
    },
    {
      id: 'inc-dpdp',
      scope: 'indian',
      instrument: 'Digital Personal Data Protection Rules, 2025',
      jurisdiction: 'India',
      points: [
        {
          text: 'On becoming aware of a personal data breach, tell each affected Data Principal without delay.',
          clause: 'Rule 7(1)',
        },
        {
          text: 'Tell the Data Protection Board without delay, then send a detailed report within 72 hours of becoming aware of the breach, or a longer period if the Board allows it on a written request.',
          clause: 'Rule 7(2)(a)–(b)',
        },
      ],
      appliesTo: 'Data Fiduciaries',
      note: DPDP_NOTE,
      sources: [{ label: 'Gazette of India PDF, p. 26 (Rule 7)', url: `${DPDP_RULES}#page=26` }],
      card: card.dpdp,
    },
    {
      id: 'inc-gdpr',
      scope: 'international',
      instrument: 'GDPR (Regulation (EU) 2016/679)',
      jurisdiction: 'EU',
      points: [
        {
          text: 'The controller notifies the competent supervisory authority of a personal data breach without undue delay and, where feasible, within 72 hours of becoming aware of it, unless the breach is unlikely to risk people’s rights and freedoms. Later notifications must give reasons for the delay.',
          clause: 'Art. 33(1)',
        },
        {
          text: 'A processor notifies the controller without undue delay.',
          clause: 'Art. 33(2)',
        },
      ],
      appliesTo: 'Controllers and processors of personal data',
      sources: [{ label: 'EUR-Lex, GDPR Art. 33', url: `${GDPR}#art_33` }],
      card: card.gdpr,
    },
    {
      id: 'inc-dora',
      scope: 'international',
      instrument: 'DORA (Regulation (EU) 2022/2554) and Delegated Regulation (EU) 2025/301',
      jurisdiction: 'EU',
      points: [
        {
          text: 'Report major ICT-related incidents to the relevant competent authority: an initial notification, an intermediate report and a final report.',
          clause: 'DORA Art. 19(1) and 19(4)',
        },
        {
          text: 'Initial notification within 4 hours of classifying the incident as major and no later than 24 hours after becoming aware of it; intermediate report within 72 hours of the initial notification; final report within one month of the latest intermediate report.',
          clause: 'Delegated Regulation (EU) 2025/301, Art. 5(1)',
        },
      ],
      appliesTo: 'Financial entities within DORA’s scope',
      sources: [
        { label: 'EUR-Lex, DORA Art. 19', url: `${DORA}#art_19` },
        { label: 'EUR-Lex, Delegated Reg. 2025/301 Art. 5', url: `${DORA_RTS_REPORTING}#art_5` },
      ],
      card: card.dora,
    },
    {
      id: 'inc-nis2',
      scope: 'international',
      instrument: 'NIS2 Directive (Directive (EU) 2022/2555)',
      jurisdiction: 'EU',
      points: [
        {
          text: 'Notify significant incidents to the national CSIRT or competent authority: an early warning within 24 hours of becoming aware, an incident notification within 72 hours, and a final report within one month of the notification.',
          clause: 'Art. 23(1) and 23(4)(a), (b), (d)',
        },
      ],
      appliesTo: 'Essential and important entities',
      note: 'NIS2 is a directive, so these duties apply through each Member State’s national law.',
      sources: [{ label: 'EUR-Lex, NIS2 Art. 23', url: `${NIS2}#art_23` }],
      card: card.nis2,
    },
    {
      id: 'inc-cra',
      scope: 'international',
      instrument: 'Cyber Resilience Act (Regulation (EU) 2024/2847)',
      jurisdiction: 'EU',
      points: [
        {
          text: 'Actively exploited vulnerabilities: early warning within 24 hours, vulnerability notification within 72 hours, and a final report within 14 days after a fix or mitigation is available. Sent at the same time to the coordinating CSIRT and ENISA via the single reporting platform.',
          clause: 'Art. 14(1)–(2)',
        },
        {
          text: 'Severe incidents affecting product security: early warning within 24 hours, incident notification within 72 hours, and a final report within one month of the notification.',
          clause: 'Art. 14(3)–(4)',
        },
      ],
      appliesTo: 'Manufacturers of products with digital elements',
      note: 'Article 14 applies from 11 September 2026 (Art. 71(2)).',
      sources: [{ label: 'EUR-Lex, CRA Art. 14', url: `${CRA}#art_14` }],
      card: card.cra,
    },
    {
      id: 'inc-nydfs',
      scope: 'international',
      instrument: 'NYDFS 23 NYCRR Part 500 (as amended November 2023)',
      jurisdiction: 'US (New York)',
      points: [
        {
          text: 'Notify the superintendent electronically as promptly as possible and no later than 72 hours after determining that a cybersecurity incident has occurred.',
          clause: '§ 500.17(a)(1)',
        },
        {
          text: 'After an extortion payment: notice within 24 hours and a written explanation within 30 days.',
          clause: '§ 500.17(c)',
        },
      ],
      appliesTo: 'Covered entities licensed or authorised under the New York Banking, Insurance or Financial Services Law',
      note: NYDFS_NOTE,
      sources: [{ label: 'DFS Part 500 page (§ 500.17)', url: NYDFS }],
      card: card.nydfs,
    },
    {
      id: 'inc-sec',
      scope: 'international',
      instrument: 'SEC cybersecurity disclosure rules, 2023',
      jurisdiction: 'US (federal)',
      points: [
        {
          text: 'Disclose a cybersecurity incident the registrant determines to be material on Form 8-K, generally due four business days after that determination. Disclosure may be delayed if the US Attorney General finds a substantial risk to national security or public safety.',
          clause: 'Form 8-K Item 1.05',
        },
      ],
      appliesTo: 'SEC registrants (foreign private issuers use Form 6-K)',
      sources: [
        { label: 'SEC press release 2023-139', url: SEC_PR },
        { label: 'SEC rule page (S7-09-22)', url: SEC_RULE },
      ],
      card: card.sec,
    },
    {
      id: 'inc-apra',
      scope: 'international',
      instrument: 'APRA Prudential Standard CPS 234 Information Security (July 2019)',
      jurisdiction: 'Australia',
      points: [
        {
          text: 'Notify APRA as soon as possible and no later than 72 hours after becoming aware of an information security incident that materially affected, or could have materially affected, the entity or its customers, or that has been notified to other regulators.',
          clause: 'Para 35',
        },
        {
          text: 'Notify APRA as soon as possible and no later than 10 business days after becoming aware of a material information security control weakness the entity expects it cannot remediate in a timely manner.',
          clause: 'Para 36',
        },
      ],
      appliesTo: 'All APRA-regulated entities (ADIs, general insurers, life companies, private health insurers, RSE licensees)',
      sources: [{ label: 'CPS 234 PDF, p. 8 (paras 35–36)', url: `${APRA_CPS234}#page=8` }],
      card: card.apra,
    },
  ],

  // ------------------------------------------------------------------ 2. Log retention
  logs: [
    {
      id: 'log-certin',
      scope: 'indian',
      instrument: 'CERT-In Directions under Section 70B(6), 28 April 2022',
      jurisdiction: 'India',
      points: [
        {
          text: 'Enable logs of all ICT systems and keep them securely for a rolling 180 days, within Indian jurisdiction. Provide them to CERT-In with an incident report or when ordered.',
          clause: 'Direction (iv)',
        },
        {
          text: 'CERT-In’s FAQs say logs may also be stored outside India, as long as they can be produced to CERT-In in a reasonable time.',
          clause: 'FAQ Q35',
        },
      ],
      appliesTo: 'Service providers, intermediaries, data centres, body corporates and Government organisations',
      sources: [
        { label: 'CERT-In Directions PDF, p. 3', url: `${CERTIN}#page=3` },
        { label: 'CERT-In FAQs PDF, p. 16', url: `${CERTIN_FAQ}#page=16` },
      ],
      card: card.certin,
    },
    {
      id: 'log-irdai',
      scope: 'indian',
      instrument: 'IRDAI Information and Cyber Security Guidelines, 2023',
      jurisdiction: 'India',
      points: [
        {
          text: 'Keep ICT infrastructure logs for a rolling 180 days, within Indian jurisdiction, as per CERT-In’s directions.',
          clause: 'Policy 2.16 (Monitoring, Logging and Assessment), section 3.3, item 14',
        },
        {
          text: 'Make logs available to law enforcement agencies, IRDAI, CERT-In and CSIRT-Fin when required.',
          clause: 'Policy 2.16, section 3.3, item 12',
        },
      ],
      appliesTo: 'All insurers, including foreign reinsurance branches, and insurance intermediaries regulated by IRDAI',
      note: IRDAI_NOTE,
      sources: [{ label: 'IRDAI 2023 Guidelines PDF, p. 265', url: `${IRDAI_2023}#page=265` }],
      card: card.irdai,
    },
    {
      id: 'log-pfrda',
      scope: 'indian',
      instrument: 'PFRDA Information and Cyber Security Policy Guidelines, 2024',
      jurisdiction: 'India',
      points: [
        {
          text: 'Keep all types of logs for the systems for a rolling 180 days.',
          clause: 'Section 4.1.4 (Detect), item a, Log Management',
        },
        {
          text: 'Logs of perimeter security devices and the SIEM are also kept for a rolling 180 days.',
          clause: 'Protect controls, network security (doc p. 12)',
        },
      ],
      appliesTo: 'PFRDA intermediaries and regulated entities',
      sources: [
        { label: 'PFRDA Guidelines PDF, p. 25', url: `${PFRDA}#page=25` },
        { label: 'PFRDA Guidelines PDF, p. 14', url: `${PFRDA}#page=14` },
      ],
      card: card.pfrda,
    },
    {
      id: 'log-dpdp',
      scope: 'indian',
      instrument: 'Digital Personal Data Protection Rules, 2025',
      jurisdiction: 'India',
      points: [
        {
          text: 'As a security safeguard, keep logs and personal data for one year to detect and investigate unauthorised access, unless another law requires otherwise.',
          clause: 'Rule 6(1)(e)',
        },
        {
          text: 'Keep personal data, related traffic data and processing logs for at least one year from the date of processing, for the purposes in the Seventh Schedule, then erase them unless another law requires longer.',
          clause: 'Rule 8(3)',
        },
      ],
      appliesTo: 'Data Fiduciaries (including processing done for them by Data Processors)',
      note: DPDP_NOTE,
      sources: [
        { label: 'Gazette of India PDF, p. 26 (Rule 6)', url: `${DPDP_RULES}#page=26` },
        { label: 'Gazette of India PDF, p. 27 (Rule 8)', url: `${DPDP_RULES}#page=27` },
      ],
      card: card.dpdp,
    },
    {
      id: 'log-nydfs',
      scope: 'international',
      instrument: 'NYDFS 23 NYCRR Part 500 (as amended November 2023)',
      jurisdiction: 'US (New York)',
      points: [
        {
          text: 'Keep records designed to reconstruct material financial transactions for at least five years, and audit trails designed to detect and respond to cybersecurity events likely to materially harm normal operations for at least three years.',
          clause: '§ 500.6(a)–(b)',
        },
      ],
      appliesTo: 'Covered entities (entities with the § 500.19(a) limited exemption are exempt from § 500.6)',
      note: NYDFS_NOTE,
      sources: [{ label: 'DFS Part 500 page (§ 500.6)', url: NYDFS }],
      card: card.nydfs,
    },
  ],

  // ------------------------------------------------------------------ 3. Audit or assessment
  audit: [
    {
      id: 'aud-cscrf',
      scope: 'indian',
      instrument: 'SEBI CSCRF, 20 August 2024',
      jurisdiction: 'India',
      points: [
        {
          text: 'Cyber audit at least twice a year for MIIs, Qualified REs, and mid-size and small-size REs that offer IBT or algo trading; at least once a year for all other REs.',
          clause: 'Section 4.4.1, Table 21',
        },
        {
          text: 'Unless the CSCRF says otherwise, audits are done by a CERT-In empanelled IS auditing organisation. The audit covers 100% of critical systems and a 25% sample of non-critical systems.',
          clause: 'Section 4.4 and footnote 17',
        },
        {
          text: 'Submit the report within 1 month of the audit, close findings within 3 months of submission, and finish any follow-on audit within 5 months.',
          clause: 'Section 4.4.2, Table 22',
        },
      ],
      appliesTo: 'SEBI regulated entities, graded by CSCRF category',
      sources: [
        { label: 'CSCRF PDF, p. 50 (section 4.4)', url: `${CSCRF}#page=50` },
        { label: 'CSCRF PDF, p. 51 (Tables 21–22)', url: `${CSCRF}#page=51` },
      ],
      card: card.cscrf,
    },
    {
      id: 'aud-rbi-nbfc',
      scope: 'indian',
      instrument: 'RBI NBFCs cyber resilience Directions, 2026',
      jurisdiction: 'India',
      points: [
        {
          text: 'IS audit periodicity should ideally be based on the NBFC’s size and operations, but it “may be conducted at least once in a year”, preferably before the statutory audit.',
          clause: 'Para 56 (Chapter IV)',
        },
        {
          text: 'Done by an internal team; if internal skills are inadequate, an outside agency with IT/IS audit expertise may be appointed. IS auditors must be independent of management.',
          clause: 'Para 55 (Chapter IV)',
        },
      ],
      appliesTo: 'NBFCs in the Base Layer with assets of ₹500 crore and above (Chapter IV)',
      sources: [{ label: 'RBI Master Direction page (paras 55–56)', url: RBI_NBFC }],
      card: card.rbiNbfc,
    },
    {
      id: 'aud-irdai',
      scope: 'indian',
      instrument: 'IRDAI Information and Cyber Security Guidelines, 2023',
      jurisdiction: 'India',
      points: [
        {
          text: 'An independent Assurance Audit by the Auditor every year. The eligibility criteria for the audit firm are in Annexure IV.',
          clause: 'Section 1.10 (Compliance); Annexure IV',
        },
        {
          text: 'Insurers submit the auditor-signed report (Annexure III), with the Board’s comments, to IRDAI within 90 days of the end of the financial year or within 30 days of completing the audit, whichever is earlier.',
          clause: 'Section 1.10 (Compliance)',
        },
      ],
      appliesTo: 'All insurers, including foreign reinsurance branches, and insurance intermediaries regulated by IRDAI',
      note: IRDAI_NOTE,
      sources: [{ label: 'IRDAI 2023 Guidelines PDF, p. 157', url: `${IRDAI_2023}#page=157` }],
      card: card.irdai,
    },
    {
      id: 'aud-pfrda',
      scope: 'indian',
      instrument: 'PFRDA Information and Cyber Security Policy Guidelines, 2024',
      jurisdiction: 'India',
      points: [
        {
          text: 'Internal and external audit of the entire ICT infrastructure. The external audit is by a CERT-In empanelled cybersecurity auditor at least once a financial year.',
          clause: '“Cyber security audits”',
        },
        {
          text: 'Internal security audit at least once every 6 months (an ISO certification audit in that period may count), plus a security audit whenever the source code changes.',
          clause: '“Cyber security audits”',
        },
      ],
      appliesTo: 'PFRDA intermediaries and regulated entities',
      sources: [{ label: 'PFRDA Guidelines PDF, p. 28', url: `${PFRDA}#page=28` }],
      card: card.pfrda,
    },
    {
      id: 'aud-dora',
      scope: 'international',
      instrument: 'DORA (Regulation (EU) 2022/2554)',
      jurisdiction: 'EU',
      points: [
        {
          text: 'The ICT risk management framework is internally audited on a regular basis in line with the audit plan, at a frequency and focus proportionate to the entity’s ICT risk. Auditors need ICT-risk knowledge, skills and expertise, and appropriate independence.',
          clause: 'Art. 6(6)',
        },
      ],
      appliesTo: 'Financial entities within DORA’s scope, other than microenterprises',
      sources: [{ label: 'EUR-Lex, DORA Art. 6', url: `${DORA}#art_6` }],
      card: card.dora,
    },
    {
      id: 'aud-nydfs',
      scope: 'international',
      instrument: 'NYDFS 23 NYCRR Part 500 (as amended November 2023)',
      jurisdiction: 'US (New York)',
      points: [
        {
          text: 'Class A companies design and conduct independent audits of their cybersecurity programme, based on their risk assessment. An independent audit is one by internal or external auditors free from the entity’s influence.',
          clause: '§ 500.2(c); definition in § 500.1(h)',
        },
        {
          text: 'Every covered entity files a certification of material compliance, or an acknowledgment of non-compliance, by April 15 each year.',
          clause: '§ 500.17(b)',
        },
      ],
      appliesTo: 'Class A companies (independent audit); all covered entities (annual filing)',
      note: NYDFS_NOTE,
      sources: [{ label: 'DFS Part 500 page (§§ 500.2, 500.17)', url: NYDFS }],
      card: card.nydfs,
    },
    {
      id: 'aud-mas-trm',
      scope: 'international',
      instrument: 'MAS Technology Risk Management Guidelines (January 2021)',
      jurisdiction: 'Singapore',
      points: [
        {
          text: 'IT audit should give the board and senior management an independent and objective opinion on the adequacy and effectiveness of risk management, governance and internal controls for technology risk.',
          clause: 'Para 15.1.1',
        },
        {
          text: 'The frequency of IT audits should be commensurate with the criticality of, and risk posed by, the IT asset, function or process; IT auditors need the requisite competency and skills.',
          clause: 'Paras 15.1.3–15.1.4',
        },
      ],
      appliesTo: 'Financial institutions regulated by MAS (guidelines; MAS considers observance in supervision, para 2.2)',
      sources: [{ label: 'MAS TRM Guidelines PDF, p. 53 (section 15.1)', url: `${MAS_TRM}#page=53` }],
      card: card.mas,
    },
    {
      id: 'aud-apra',
      scope: 'international',
      instrument: 'APRA Prudential Standard CPS 234 Information Security (July 2019)',
      jurisdiction: 'Australia',
      points: [
        {
          text: 'Internal audit must review the design and operating effectiveness of information security controls, including those maintained by related parties and third parties. No frequency is set.',
          clause: 'Para 32',
        },
        {
          text: 'Control assurance must be provided by appropriately skilled personnel; internal audit must assess a related or third party’s assurance where an incident could materially affect the entity and internal audit intends to rely on it.',
          clause: 'Paras 33–34',
        },
      ],
      appliesTo: 'All APRA-regulated entities',
      sources: [{ label: 'CPS 234 PDF, pp. 7–8 (paras 32–34)', url: `${APRA_CPS234}#page=7` }],
      card: card.apra,
    },
  ],

  // ------------------------------------------------------------------ 4. Red-team, TLPT and penetration testing
  testing: [
    {
      id: 'tst-cscrf',
      scope: 'indian',
      instrument: 'SEBI CSCRF, 20 August 2024',
      jurisdiction: 'India',
      points: [
        {
          text: 'VAPT at least twice a year (one in each half of the financial year) for REs identified by NCIIPC as “protected systems” or CII; at least once a year for the rest, starting in the first quarter of the financial year. Unless the CSCRF says otherwise, done by a CERT-In empanelled IS auditing organisation.',
          clause: 'Section 4.3.2, Table 18; footnote 16',
        },
        {
          text: 'Red teaming every six months, using red and blue teams, for MIIs and Qualified REs. The red team can be staff or outside experts but must be independent of the function tested; lessons go to SEBI within 3 months.',
          clause: 'Standard DE.DP.S4, guidelines 1–4; Table 15',
        },
      ],
      appliesTo: 'SEBI regulated entities (red teaming: MIIs and Qualified REs)',
      sources: [
        { label: 'CSCRF PDF, p. 48 (Table 18)', url: `${CSCRF}#page=48` },
        { label: 'CSCRF PDF, p. 121 (DE.DP.S4)', url: `${CSCRF}#page=121` },
      ],
      card: card.cscrf,
    },
    {
      id: 'tst-rbi-cb',
      scope: 'indian',
      instrument: 'RBI Commercial Banks cyber resilience Directions, 2026',
      jurisdiction: 'India',
      points: [
        {
          text: 'For critical systems and systems in the DMZ with a customer interface: VA at least once every six months and PT at least once every 12 months. Other systems follow a risk-based approach.',
          clause: 'Para 151',
        },
        {
          text: 'VA/PT is done by appropriately trained, independent information security experts or auditors.',
          clause: 'Para 155',
        },
        {
          text: 'Red teaming exercises are optional (“may conduct”).',
          clause: 'Para 162',
        },
      ],
      appliesTo: 'Commercial banks (other than Small Finance Banks, Payments Banks and Local Area Banks)',
      sources: [{ label: 'RBI Directions page (paras 151–162)', url: RBI_CB }],
      card: card.rbiCb,
    },
    {
      id: 'tst-rbi-nbfc',
      scope: 'indian',
      instrument: 'RBI NBFCs cyber resilience Directions, 2026',
      jurisdiction: 'India',
      points: [
        {
          text: 'For critical systems and systems in the DMZ with a customer interface: VA at least once every six months and PT at least once every 12 months, plus VA/PT through the lifecycle (before and after implementation, and after changes).',
          clause: 'Para 121 (Chapter V)',
        },
      ],
      appliesTo: 'NBFCs in the Middle Layer and above, excluding CICs (Chapter V)',
      sources: [{ label: 'RBI Master Direction page (para 121)', url: RBI_NBFC }],
      card: card.rbiNbfc,
    },
    {
      id: 'tst-rbi-ucb',
      scope: 'indian',
      instrument: 'RBI UCBs cyber resilience Directions, 2026',
      jurisdiction: 'India',
      points: [
        {
          text: 'VA of critical applications and those in the DMZ at least once every six months; PT at least once a year.',
          clause: 'Para 116 (Chapter IV)',
        },
        {
          text: 'PT of public-facing systems and other critical applications is done by professionally qualified teams.',
          clause: 'Para 119 (Chapter IV)',
        },
      ],
      appliesTo: 'Level II, III and IV urban co-operative banks (Chapter IV)',
      sources: [{ label: 'RBI Master Direction page (paras 116, 119)', url: RBI_UCB }],
      card: card.rbiUcb,
    },
    {
      id: 'tst-irdai',
      scope: 'indian',
      instrument: 'IRDAI Information and Cyber Security Guidelines, 2023',
      jurisdiction: 'India',
      points: [
        {
          text: 'VAPT of internet-facing applications or infrastructure at least once a year, and external black-box PT of all internet-facing assets once every six months.',
          clause: 'Policy 2.16, section 3.6.1, items 2 and 5',
        },
        {
          text: 'Periodic red team exercises to test readiness to detect, stop and respond to attacks.',
          clause: 'Policy 2.6 (Information systems maintenance), section 3.6, item 8',
        },
      ],
      appliesTo: 'All insurers, including foreign reinsurance branches, and insurance intermediaries regulated by IRDAI',
      note: IRDAI_NOTE,
      sources: [
        { label: 'IRDAI 2023 Guidelines PDF, p. 266', url: `${IRDAI_2023}#page=266` },
        { label: 'IRDAI 2023 Guidelines PDF, p. 205', url: `${IRDAI_2023}#page=205` },
      ],
      card: card.irdai,
    },
    {
      id: 'tst-pfrda',
      scope: 'indian',
      instrument: 'PFRDA Information and Cyber Security Policy Guidelines, 2024',
      jurisdiction: 'India',
      points: [
        {
          text: 'For critical information assets and assets in the DMZ with a customer interface: VA at least once every six months and PT at least once every 12 months; risk-based for other assets. High-risk gaps are closed within one month.',
          clause: '“Conduct of VA / PT”',
        },
        {
          text: 'VAPT and information security audit of critical servers by CERT-In empanelled auditors, and red-team exercises repeated at regular intervals.',
          clause: '“Strengthening the security of cloud infrastructure”',
        },
      ],
      appliesTo: 'PFRDA intermediaries and regulated entities',
      sources: [
        { label: 'PFRDA Guidelines PDF, p. 19', url: `${PFRDA}#page=19` },
        { label: 'PFRDA Guidelines PDF, p. 24', url: `${PFRDA}#page=24` },
      ],
      card: card.pfrda,
    },
    {
      id: 'tst-dora',
      scope: 'international',
      instrument: 'DORA (Regulation (EU) 2022/2554)',
      jurisdiction: 'EU',
      points: [
        {
          text: 'At least once a year, run appropriate tests (which can include vulnerability scans and penetration tests) on all ICT systems and applications that support critical or important functions.',
          clause: 'Art. 24(6); Art. 25(1)',
        },
        {
          text: 'Threat-led penetration testing (TLPT) at least every 3 years for entities the competent authority identifies; the authority can change the frequency. Tests cover critical or important functions on live production systems.',
          clause: 'Art. 26(1)–(2)',
        },
        {
          text: 'Internal testers are allowed, but external testers must be used every three tests. Significant credit institutions may use only external testers.',
          clause: 'Art. 26(8)',
        },
      ],
      appliesTo: 'Financial entities within DORA’s scope, other than microenterprises (TLPT: entities identified by the competent authority)',
      sources: [
        { label: 'EUR-Lex, DORA Art. 24', url: `${DORA}#art_24` },
        { label: 'EUR-Lex, DORA Art. 26', url: `${DORA}#art_26` },
      ],
      card: card.dora,
    },
    {
      id: 'tst-tiber',
      scope: 'international',
      instrument: 'TIBER-EU framework (ECB, January 2025)',
      jurisdiction: 'EU',
      points: [
        {
          text: 'An intelligence-led red team test run in three mandatory phases: preparation, testing and closure.',
          clause: 'Section 5.1',
        },
        {
          text: 'Threat intelligence providers and red team testers must meet the framework’s minimum requirements and, where feasible, be accredited and certified by a recognised body.',
          clause: 'Section 4.1.3',
        },
        {
          text: 'A test completed under TIBER-EU can make a financial entity DORA TLPT-compliant, provided it meets the formal TLPT requirements set by the competent authorities.',
          clause: 'Introduction (purpose of the framework)',
        },
      ],
      appliesTo: 'Entities and authorities that use TIBER-EU, including for DORA TLPT',
      sources: [
        { label: 'TIBER-EU framework PDF, p. 24 (section 5.1)', url: `${TIBER_FW}#page=24` },
        { label: 'TIBER-EU framework PDF, p. 22 (section 4.1.3)', url: `${TIBER_FW}#page=22` },
        { label: 'ECB TIBER-EU page', url: TIBER_PAGE },
      ],
      card: card.tiber,
    },
    {
      id: 'tst-cbest',
      scope: 'international',
      instrument: 'CBEST Threat Intelligence-Led Assessments (Implementation Guide)',
      jurisdiction: 'UK',
      points: [
        {
          text: 'A regulator-led, intelligence-led assessment run in four phases: initiation, threat intelligence, penetration testing and closure.',
          clause: 'Section 4 (CBEST process)',
        },
        {
          text: 'The threat intelligence provider and the penetration test provider must both be CBEST accredited.',
          clause: 'Sections 3.2.2–3.2.4',
        },
      ],
      appliesTo: 'Firms and financial market infrastructures taking part in CBEST (CBEST is part of the PRA, FCA and FMID supervisory approaches)',
      sources: [{ label: 'Bank of England CBEST Implementation Guide', url: CBEST }],
      card: card.cbest,
    },
    {
      id: 'tst-nydfs',
      scope: 'international',
      instrument: 'NYDFS 23 NYCRR Part 500 (as amended November 2023)',
      jurisdiction: 'US (New York)',
      points: [
        {
          text: 'Penetration testing of information systems from both inside and outside their boundaries, at least once a year, by a qualified internal or external party.',
          clause: '§ 500.5(a)(1)',
        },
        {
          text: 'Automated vulnerability scans, plus manual review of systems the scans miss, at a frequency set by the risk assessment and promptly after material system changes.',
          clause: '§ 500.5(a)(2)',
        },
      ],
      appliesTo: 'Covered entities (entities with the § 500.19(a) limited exemption are exempt from § 500.5)',
      note: NYDFS_NOTE,
      sources: [{ label: 'DFS Part 500 page (§ 500.5)', url: NYDFS }],
      card: card.nydfs,
    },
    {
      id: 'tst-mas-trm',
      scope: 'international',
      instrument: 'MAS Technology Risk Management Guidelines (January 2021)',
      jurisdiction: 'Singapore',
      points: [
        {
          text: 'Penetration testing of systems directly accessible from the Internet at least once a year, or whenever they undergo major changes or updates; otherwise PT frequency depends on system criticality and exposure to cyber risk.',
          clause: 'Para 13.2.4',
        },
        {
          text: 'Regular vulnerability assessment, at a frequency commensurate with the system’s criticality and security risk.',
          clause: 'Para 13.1.1',
        },
        {
          text: 'Perform an adversarial attack simulation (red team) exercise to test the cyber defence and response plan. No frequency is set.',
          clause: 'Para 13.4.1',
        },
      ],
      appliesTo: 'Financial institutions regulated by MAS (guidelines; MAS considers observance in supervision, para 2.2)',
      sources: [
        { label: 'MAS TRM Guidelines PDF, p. 45 (13.1–13.2)', url: `${MAS_TRM}#page=45` },
        { label: 'p. 47 (13.4)', url: `${MAS_TRM}#page=47` },
      ],
      card: card.mas,
    },
    {
      id: 'tst-apra',
      scope: 'international',
      instrument: 'APRA Prudential Standard CPS 234 Information Security (July 2019)',
      jurisdiction: 'Australia',
      points: [
        {
          text: 'Review and test information security response plans every year.',
          clause: 'Para 26',
        },
        {
          text: 'Test control effectiveness through a systematic testing program whose nature and frequency match factors such as how fast threats change and the criticality of the asset.',
          clause: 'Para 27',
        },
        {
          text: 'Testing must be done by appropriately skilled and functionally independent specialists, and the testing program reviewed at least annually or after a material change.',
          clause: 'Paras 30–31',
        },
      ],
      appliesTo: 'All APRA-regulated entities',
      sources: [{ label: 'CPS 234 PDF, p. 7 (paras 26–31)', url: `${APRA_CPS234}#page=7` }],
      card: card.apra,
    },
    {
      id: 'tst-hkma',
      scope: 'international',
      instrument: 'HKMA C-RAF 2.0: iCAST (Cybersecurity Fortification Initiative 2.0)',
      jurisdiction: 'Hong Kong',
      points: [
        {
          text: 'iCAST applies to Authorized Institutions whose inherent risk is assessed as “medium” or “high”; the circular set deadlines to complete it of end-June 2022 (Group 1), end-March 2023 (Group 2) and end-December 2023 (Group 3).',
          clause: 'CFI 2.0 circular, 3 Nov 2020, para (ii)',
        },
        {
          text: 'CFI 2.0 added Blue team requirements to iCAST, to measure how well an AI detects, responds and recovers; the Annex lists the CREST certifications and equivalent qualifications accepted for each iCAST role.',
          clause: 'Annex to the circular',
        },
      ],
      appliesTo: 'Hong Kong Authorized Institutions with medium or high inherent risk',
      note: 'The public circular does not set a repeat frequency for iCAST. The C-RAF 2.0 document itself is on the HKMA’s non-public Supervisory Communication Website.',
      sources: [
        { label: 'HKMA CFI 2.0 circular (PDF)', url: HKMA_CFI2 },
        { label: 'Annex (PDF)', url: HKMA_CFI2_ANNEX },
      ],
      card: card.hkma,
    },
  ],
}
