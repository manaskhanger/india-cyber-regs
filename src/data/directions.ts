import type { Direction } from './types'

/*
 * Every field below was checked against the official source(s) listed in `sources`
 * (last verified 26 Sep 2026). Fields that could not be verified are omitted.
 * Summaries are hand-written plain-language paraphrases, not quotations.
 */

const RBI_REPEAL_2026 =
  'https://rbi.org.in/Scripts/NotificationUser.aspx?Id=13663&Mode=0'

export const DIRECTIONS: Direction[] = [
  // ---------------------------------------------------------------- RBI (current, 2026)
  {
    id: 'rbi-cb-cyber-2026',
    regulator: 'rbi',
    title:
      'Reserve Bank of India (Commercial Banks – Cybersecurity, Technology: Risk, Resilience and Assurance Framework) Directions, 2026',
    issuer: 'Reserve Bank of India (Department of Supervision)',
    date: '2026-07-31',
    dateLabel: '31 July 2026',
    refNo: 'RBI/DoS/2026-27/410 DoS.CO.CSITEG.4/31.01.015/2026-27',
    appliesTo:
      'Commercial banks: banking companies (other than small finance, payments and local area banks), corresponding new banks and SBI',
    summary:
      'Rolls the bank cyber framework and IT-governance rules into one document: a 24x7 Cyber Security Operations Centre, vulnerability assessment every six months and penetration testing every 12 months for critical or customer-facing DMZ systems, and reporting of cyber incidents on RBI’s DAKSH portal within six hours of detection.',
    status: 'In force from issue. Repeals earlier cybersecurity-framework and IT-governance instructions for commercial banks.',
    link: { url: 'https://rbi.org.in/Scripts/NotificationUser.aspx?Id=13643&Mode=0', kind: 'page' },
    sources: ['https://rbi.org.in/Scripts/NotificationUser.aspx?Id=13643&Mode=0'],
  },
  {
    id: 'rbi-nbfc-cyber-2026',
    regulator: 'rbi',
    title:
      'Reserve Bank of India (Non-Banking Financial Companies – Cybersecurity, Technology: Risk, Resilience and Assurance Framework) Directions, 2026',
    issuer: 'Reserve Bank of India (Department of Supervision)',
    date: '2026-07-31',
    dateLabel: '31 July 2026',
    refNo: 'RBI/DoS/2026-27/461 DoS.CO.CSITEG.55/31.01.015/2026-27',
    appliesTo:
      'All RBI-registered NBFCs, with separate chapters for Base Layer NBFCs below ₹500 crore and CICs, Base Layer NBFCs of ₹500 crore and above, and Middle/Upper/Top Layer NBFCs',
    summary:
      'Scales obligations by NBFC layer: small Base Layer NBFCs and CICs get a short baseline (Board-approved IT/IS policy, maker-checker, tested backups), larger Base Layer NBFCs add IT governance, IS audit and BCP chapters, and Middle Layer and above also need a CISO, half-yearly DR drills and VA/PT; the latter two groups report cyber incidents on DAKSH within six hours.',
    status: 'In force from issue. Repeals the earlier IT Framework and IT-governance instructions for NBFCs.',
    link: { url: 'https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx?id=13592', kind: 'page' },
    sources: ['https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx?id=13592'],
  },
  {
    id: 'rbi-ucb-cyber-2026',
    regulator: 'rbi',
    title:
      'Reserve Bank of India (Urban Co-operative Banks – Cybersecurity, Technology: Risk, Resilience and Assurance Framework) Directions, 2026',
    issuer: 'Reserve Bank of India (Department of Supervision)',
    date: '2026-07-31',
    dateLabel: '31 July 2026',
    refNo: 'RBI/DoS/2026-27/437 DoS.CO.CSITEG.31/31.01.015/2026-27',
    appliesTo:
      'All urban co-operative banks (primary co-operative banks), placed in Levels I–IV by digital depth and payment-system connectivity',
    summary:
      'Keeps the four-level graded model for UCBs: every bank meets Level I basics such as a bank-specific email domain with DMARC and a dynamic second factor for core-banking access, Level IV banks must run a Cyber Security Operations Centre, and all report incidents on DAKSH within six hours.',
    status: 'In force from issue. Repeals the earlier cybersecurity framework for UCBs.',
    link: { url: 'https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx?id=13616', kind: 'page' },
    sources: ['https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx?id=13616'],
  },
  {
    id: 'rbi-repeal-2026',
    regulator: 'rbi',
    title: 'Consolidation of Supervisory Instructions – Repeal of Circulars',
    issuer: 'Reserve Bank of India (Department of Supervision)',
    date: '2026-07-31',
    dateLabel: '31 July 2026',
    refNo: 'RBI/DoS/2026-27/221 DoS.CO.PPG.66/11.01.005/2026-27',
    appliesTo: 'Entities supervised by RBI’s Department of Supervision',
    summary:
      'The housekeeping circular issued alongside RBI’s 64 consolidated supervisory Directions: it repeals 628 older circulars with immediate effect, so check its Annex before relying on any pre-2026 RBI cyber circular.',
    link: { url: RBI_REPEAL_2026, kind: 'page' },
    sources: [RBI_REPEAL_2026],
  },

  // ---------------------------------------------------------------- RBI (earlier instruments)
  {
    id: 'rbi-md-itgrcap-2023',
    regulator: 'rbi',
    title: 'Master Direction on Information Technology Governance, Risk, Controls and Assurance Practices',
    issuer: 'Reserve Bank of India',
    date: '2023-11-07',
    dateLabel: '7 November 2023',
    refNo: 'RBI/2023-24/107 DoS.CO.CSITEG/SEC.7/31.01.015/2023-24',
    appliesTo:
      'Scheduled commercial banks (excl. RRBs), small finance banks, payments banks, NBFCs in the Top/Upper/Middle Layers, credit information companies, and EXIM Bank, NABARD, NaBFID, NHB and SIDBI',
    summary:
      'Effective 1 April 2024, it required a Board IT Strategy Committee chaired by an independent director with IT expertise, a CISO with no reporting line to the Head of IT, VA every six months and PT every year for critical systems, and DR drills for critical systems at least half-yearly.',
    status:
      'Superseded for commercial banks and NBFCs by RBI’s 31 July 2026 Directions; check RBI for other entity types.',
    link: { url: 'https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=12562&Mode=0', kind: 'page' },
    sources: [
      'https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=12562&Mode=0',
      'https://rbi.org.in/Scripts/NotificationUser.aspx?Id=13643&Mode=0',
      'https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx?id=13592',
    ],
  },
  {
    id: 'rbi-dpsc-2021',
    regulator: 'rbi',
    title: 'Master Direction on Digital Payment Security Controls',
    issuer: 'Reserve Bank of India',
    date: '2021-02-18',
    dateLabel: '18 February 2021',
    refNo: 'RBI/2020-21/74 DoS.CO.CSITE.SEC.No.1852/31.01.015/2020-21',
    appliesTo:
      'Scheduled commercial banks (excl. RRBs), small finance banks, payments banks and credit-card-issuing NBFCs',
    summary:
      'Sets minimum security controls for internet banking, mobile payment apps and cards, including multi-factor authentication for payments, device binding for mobile apps, a WAF with DDoS mitigation, and reconciliation of digital payments within 24 hours of receiving settlement files.',
    status:
      'Its status after RBI’s July 2026 consolidation was not verified here; check the repeal circular’s Annex on rbi.org.in.',
    link: { url: 'https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx?id=12032', kind: 'page' },
    sources: ['https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx?id=12032'],
  },
  {
    id: 'rbi-ucb-graded-2019',
    regulator: 'rbi',
    title:
      'Comprehensive Cyber Security Framework for Primary (Urban) Cooperative Banks (UCBs) – A Graded Approach',
    issuer: 'Reserve Bank of India',
    date: '2019-12-31',
    dateLabel: '31 December 2019',
    refNo: 'RBI/2019-20/129 DoS.CO/CSITE/BC.4083/31.01.052/2019-20',
    appliesTo: 'All primary (urban) co-operative banks',
    summary:
      'Introduced the four-level model for UCBs and asked each bank to self-assess its level and report it to its RBI Regional Office within 45 days, with Level I controls due within three months and a C-SOC required only at Level IV.',
    status: 'Repealed; replaced by the UCB Cybersecurity Directions of 31 July 2026.',
    link: { url: 'https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=11772', kind: 'page' },
    sources: [
      'https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=11772',
      'https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx?id=13616',
    ],
  },
  {
    id: 'rbi-nbfc-it-2017',
    regulator: 'rbi',
    title: 'Master Direction - Information Technology Framework for the NBFC Sector',
    issuer: 'Reserve Bank of India',
    date: '2017-06-08',
    dateLabel: '8 June 2017',
    refNo: 'RBI/DNBS/2016-17/53 Master Direction DNBS.PPD.No.04/66.15.001/2016-17',
    appliesTo:
      'NBFCs: Section A for asset size above ₹500 crore, Section B (basic IT policy) for those below ₹500 crore',
    summary:
      'RBI’s first IT rulebook for NBFCs, asking for an IT Strategy Committee meeting at least every six months, a Board-approved IS and cyber-security policy, annual IS audit and BCP testing, with compliance due by 30 June 2018 for systemically important NBFCs and 30 September 2018 for smaller ones.',
    status:
      'Repealed for Middle/Upper/Top Layer NBFCs from 1 April 2024 by the 2023 IT Governance MD, and for NBFCs generally by the 31 July 2026 NBFC Directions.',
    link: { url: 'https://www.rbi.org.in/scripts/BS_ViewMasDirections.aspx?id=10999', kind: 'page' },
    sources: [
      'https://www.rbi.org.in/scripts/BS_ViewMasDirections.aspx?id=10999',
      'https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=12562&Mode=0',
      'https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx?id=13592',
    ],
  },
  {
    id: 'rbi-csf-banks-2016',
    regulator: 'rbi',
    title: 'Cyber Security Framework in Banks',
    issuer: 'Reserve Bank of India',
    date: '2016-06-02',
    dateLabel: '2 June 2016',
    refNo: 'RBI/2015-16/418 DBS.CO/CSITE/BC.11/33.01.001/2015-16',
    appliesTo: 'All scheduled commercial banks (excluding regional rural banks)',
    summary:
      'Required banks to adopt a Board-approved cyber-security policy kept separate from the wider IT/IS policy, set up a Security Operations Centre for continuous surveillance, prepare a Cyber Crisis Management Plan, and report all unusual cyber incidents to RBI, including attempts that failed.',
    status: 'Repealed for commercial banks by RBI’s 31 July 2026 Directions.',
    link: { url: 'https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=10435&Mode=0', kind: 'page' },
    sources: [
      'https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=10435&Mode=0',
      'https://rbi.org.in/Scripts/NotificationUser.aspx?Id=13643&Mode=0',
    ],
  },

  // ---------------------------------------------------------------- SEBI
  {
    id: 'sebi-cscrf-2024',
    regulator: 'sebi',
    title: 'Cybersecurity and Cyber Resilience Framework (CSCRF) for SEBI Regulated Entities (REs)',
    issuer: 'Securities and Exchange Board of India',
    date: '2024-08-20',
    dateLabel: '20 August 2024',
    refNo: 'SEBI/HO/ITD-1/ITD_CSC_EXT/P/CIR/2024/113',
    appliesTo:
      'SEBI regulated entities, including MIIs, stock brokers, depository participants, mutual funds/AMCs, KRAs, RTAs, portfolio managers, AIFs, custodians and others',
    summary:
      'Replaces SEBI’s entity-by-entity cyber circulars with one graded framework that sorts REs into MIIs, Qualified, Mid-size, Small-size and Self-certification categories, with adoption due by 1 January 2025 for the six categories that already had a cyber circular and 1 April 2025 for the rest.',
    link: {
      url: 'https://www.sebi.gov.in/sebi_data/attachdocs/aug-2024/1724326790365.pdf',
      kind: 'pdf',
    },
    listingUrl:
      'https://www.sebi.gov.in/legal/circulars/aug-2024/cybersecurity-and-cyber-resilience-framework-cscrf-for-sebi-regulated-entities-res-_85964.html',
    sources: [
      'https://www.sebi.gov.in/legal/circulars/aug-2024/cybersecurity-and-cyber-resilience-framework-cscrf-for-sebi-regulated-entities-res-_85964.html',
      'https://www.sebi.gov.in/sebi_data/attachdocs/aug-2024/1724326790365.pdf',
    ],
  },
  {
    id: 'sebi-cscrf-clarifications-2025',
    regulator: 'sebi',
    title:
      'Clarifications to Cybersecurity and Cyber Resilience Framework (CSCRF) for SEBI Regulated Entities (REs)',
    issuer: 'Securities and Exchange Board of India',
    date: '2025-04-30',
    dateLabel: '30 April 2025',
    refNo: 'SEBI/HO/ITD-1/ITD_CSC_EXT/P/CIR/2025/60',
    appliesTo: 'SEBI regulated entities covered by the CSCRF',
    summary:
      'Revises CSCRF category thresholds, fixes an RE’s category for the whole financial year based on the previous year’s data, and makes a dedicated Hardware Security Module mandatory for MIIs and Qualified REs while letting smaller categories use a risk-assessed alternative.',
    link: {
      url: 'https://www.sebi.gov.in/sebi_data/attachdocs/apr-2025/1746016112057.pdf',
      kind: 'pdf',
    },
    listingUrl:
      'https://www.sebi.gov.in/legal/circulars/apr-2025/clarifications-to-cybersecurity-and-cyber-resilience-framework-cscrf-for-sebi-regulated-entities-res-_93734.html',
    sources: [
      'https://www.sebi.gov.in/legal/circulars/apr-2025/clarifications-to-cybersecurity-and-cyber-resilience-framework-cscrf-for-sebi-regulated-entities-res-_93734.html',
      'https://www.sebi.gov.in/sebi_data/attachdocs/apr-2025/1746016112057.pdf',
    ],
  },
  {
    id: 'sebi-cscrf-tech-clarifications-2025',
    regulator: 'sebi',
    title:
      'Technical Clarifications to Cybersecurity and Cyber Resilience Framework (CSCRF) for SEBI Regulated Entities (REs)',
    issuer: 'Securities and Exchange Board of India',
    date: '2025-08-28',
    dateLabel: '28 August 2025',
    refNo: 'SEBI/HO/ITD-1/ITD_CSC_EXT/P/CIR/2025/119',
    appliesTo: 'SEBI regulated entities covered by the CSCRF, with a specific part on portfolio managers and merchant bankers',
    summary:
      'Answers REs’ implementation queries in two parts, a set of technical clarifications on CSCRF controls and a re-categorisation of portfolio managers and merchant bankers into CSCRF categories.',
    link: {
      url: 'https://www.sebi.gov.in/sebi_data/attachdocs/aug-2025/1756380695925.pdf',
      kind: 'pdf',
    },
    listingUrl:
      'https://www.sebi.gov.in/legal/circulars/aug-2025/technical-clarifications-to-cybersecurity-and-cyber-resilience-framework-cscrf-for-sebi-regulated-entities-res-_96329.html',
    sources: [
      'https://www.sebi.gov.in/legal/circulars/aug-2025/technical-clarifications-to-cybersecurity-and-cyber-resilience-framework-cscrf-for-sebi-regulated-entities-res-_96329.html',
      'https://www.sebi.gov.in/sebi_data/attachdocs/aug-2025/1756380695925.pdf',
    ],
  },
  {
    id: 'sebi-mf-amc-2019',
    regulator: 'sebi',
    title: 'Cyber Security and Cyber Resilience framework for Mutual Funds / Asset Management Companies (AMCs)',
    issuer: 'Securities and Exchange Board of India',
    date: '2019-01-10',
    dateLabel: '10 January 2019',
    refNo: 'SEBI/HO/IMD/DF2/CIR/P/2019/12',
    appliesTo: 'Mutual funds, AMCs, trustee companies / boards of trustees, and AMFI',
    summary:
      'Asked each AMC to appoint a CISO, have a Board-constituted Technology Committee review the cyber policy every quarter, and get an annual systems audit by an independent CISA/CISM-qualified or CERT-In empanelled auditor, with the report sent to SEBI within three months of year-end.',
    status: 'Superseded by the CSCRF (listed in its Annexure-1).',
    link: {
      url: 'https://www.sebi.gov.in/sebi_data/attachdocs/jan-2019/1547119904977.pdf',
      kind: 'pdf',
    },
    listingUrl:
      'https://www.sebi.gov.in/legal/circulars/jan-2019/cyber-security-and-cyber-resilience-framework-for-mutual-funds-asset-management-companies-amcs-_41589.html',
    sources: [
      'https://www.sebi.gov.in/legal/circulars/jan-2019/cyber-security-and-cyber-resilience-framework-for-mutual-funds-asset-management-companies-amcs-_41589.html',
      'https://www.sebi.gov.in/sebi_data/attachdocs/jan-2019/1547119904977.pdf',
      'https://www.sebi.gov.in/sebi_data/attachdocs/aug-2024/1724326790365.pdf',
    ],
  },
  {
    id: 'sebi-brokers-dp-2018',
    regulator: 'sebi',
    title: 'Cyber Security & Cyber Resilience framework for Stock Brokers / Depository Participants',
    issuer: 'Securities and Exchange Board of India',
    date: '2018-12-03',
    dateLabel: '3 December 2018',
    refNo: 'SEBI/HO/MIRSD/CIR/PB/2018/147',
    appliesTo: 'Stock brokers and depository participants (issued via stock exchanges and depositories)',
    summary:
      'Required brokers and DPs to name a Designated Officer, form an internal Technology Committee, send quarterly reports on cyber-attacks faced, and have systems audited every year by a CERT-In empanelled or CISA/CISM auditor, filing the report with the exchange or depository within three months of year-end.',
    status: 'Superseded by the CSCRF (listed in its Annexure-1).',
    link: {
      url: 'https://www.sebi.gov.in/sebi_data/attachdocs/dec-2018/1543839622652.pdf',
      kind: 'pdf',
    },
    listingUrl:
      'https://www.sebi.gov.in/legal/circulars/dec-2018/cyber-security-and-cyber-resilience-framework-for-stock-brokers-depository-participants_41215.html',
    sources: [
      'https://www.sebi.gov.in/legal/circulars/dec-2018/cyber-security-and-cyber-resilience-framework-for-stock-brokers-depository-participants_41215.html',
      'https://www.sebi.gov.in/sebi_data/attachdocs/dec-2018/1543839622652.pdf',
      'https://www.sebi.gov.in/sebi_data/attachdocs/aug-2024/1724326790365.pdf',
    ],
  },
  {
    id: 'sebi-mii-2015',
    regulator: 'sebi',
    title: 'Cyber Security and Cyber Resilience framework of Stock Exchanges, Clearing Corporation and Depositories',
    issuer: 'Securities and Exchange Board of India',
    date: '2015-07-06',
    dateLabel: '6 July 2015',
    refNo: 'CIR/MRD/DP/13/2015',
    appliesTo: 'Stock exchanges, clearing corporations and depositories (market infrastructure institutions)',
    summary:
      'SEBI’s first cyber framework, grounded in Principle 17 (operational risk) of the CPMI-IOSCO PFMIs: MIIs needed a Board-approved policy reviewed at least annually, a CISO, and a quarterly review of its implementation by the Oversight Standing Committee on Technology (exchanges and clearing corporations) or the IT Strategy Committee (depositories).',
    status: 'Superseded by the CSCRF (listed in its Annexure-1).',
    link: { url: 'https://www.sebi.gov.in/sebi_data/attachdocs/1436179654531.pdf', kind: 'pdf' },
    listingUrl:
      'https://www.sebi.gov.in/legal/circulars/jul-2015/cyber-security-and-cyber-resilience-framework-of-stock-exchanges-clearing-corporation-and-depositories_30221.html',
    sources: [
      'https://www.sebi.gov.in/legal/circulars/jul-2015/cyber-security-and-cyber-resilience-framework-of-stock-exchanges-clearing-corporation-and-depositories_30221.html',
      'https://www.sebi.gov.in/sebi_data/attachdocs/1436179654531.pdf',
      'https://www.sebi.gov.in/sebi_data/attachdocs/aug-2024/1724326790365.pdf',
    ],
  },

  // ---------------------------------------------------------------- CERT-In
  {
    id: 'certin-70b-2022',
    regulator: 'certin',
    title:
      'Directions under sub-section (6) of section 70B of the Information Technology Act, 2000 relating to information security practices, procedure, prevention, response and reporting of cyber incidents for Safe & Trusted Internet',
    issuer: 'Indian Computer Emergency Response Team (CERT-In), MeitY',
    date: '2022-04-28',
    dateLabel: '28 April 2022',
    refNo: 'No. 20(3)/2022-CERT-In',
    appliesTo:
      'Service providers, intermediaries, data centres, body corporates and Government organisations (with extra duties for VPS, cloud, VPN and virtual-asset providers)',
    summary:
      'Requires reporting of listed cyber incidents to CERT-In within 6 hours of noticing them, keeping ICT system logs for a rolling 180 days within Indian jurisdiction, syncing clocks to NIC or NPL NTP servers, and 5-year subscriber records for data centres, VPS, cloud and VPN providers.',
    link: { url: 'https://www.cert-in.org.in/PDF/CERT-In_Directions_70B_28.04.2022.pdf', kind: 'pdf' },
    listingUrl: 'https://www.cert-in.org.in/Directions70B.jsp',
    sources: [
      'https://www.cert-in.org.in/Directions70B.jsp',
      'https://www.cert-in.org.in/PDF/CERT-In_Directions_70B_28.04.2022.pdf',
    ],
  },
  {
    id: 'certin-faqs-2022',
    regulator: 'certin',
    title: 'FAQs on Cyber Security Directions of 28.04.2022',
    issuer: 'Indian Computer Emergency Response Team (CERT-In), MeitY',
    date: '2022-05-01',
    dateLabel: 'May 2022',
    appliesTo: 'Anyone interpreting the 28 April 2022 directions',
    summary:
      'CERT-In’s own Q&A on the directions, covering scope, reporting format and log storage, and clarifying for example that logs may be kept outside India as long as they can be produced to CERT-In in reasonable time.',
    link: { url: 'https://www.cert-in.org.in/PDF/FAQs_on_CyberSecurityDirections_May2022.pdf', kind: 'pdf' },
    listingUrl: 'https://www.cert-in.org.in/Directions70B.jsp',
    sources: [
      'https://www.cert-in.org.in/Directions70B.jsp',
      'https://www.cert-in.org.in/PDF/FAQs_on_CyberSecurityDirections_May2022.pdf',
    ],
  },
  {
    id: 'certin-extension-2022',
    regulator: 'certin',
    title:
      'Extension of timelines for enforcement of Cyber Security Directions of 28th April, 2022 for MSMEs and for implementation of mechanism for validation of subscribers/customers details',
    issuer: 'Indian Computer Emergency Response Team (CERT-In), MeitY',
    date: '2022-06-27',
    dateLabel: '27 June 2022',
    refNo: 'No. 20(3)/2022-CERT-In',
    appliesTo: 'MSMEs, and data centres, VPS, cloud and VPN service providers (subscriber validation)',
    summary:
      'Pushed the effective date of the April 2022 directions to 25 September 2022 for MSMEs and for the subscriber-validation requirement on data centres, VPS, cloud and VPN providers.',
    link: {
      url: 'https://www.cert-in.org.in/PDF/CERT-In_directions_extension_MSMEs_and_validation_27.06.2022.pdf',
      kind: 'pdf',
    },
    listingUrl: 'https://www.cert-in.org.in/Directions70B.jsp',
    sources: [
      'https://www.cert-in.org.in/Directions70B.jsp',
      'https://www.cert-in.org.in/PDF/CERT-In_directions_extension_MSMEs_and_validation_27.06.2022.pdf',
    ],
  },

  // ---------------------------------------------------------------- IRDAI
  {
    id: 'irdai-ics-2026',
    regulator: 'irdai',
    title: 'IRDAI Information and Cyber Security Guidelines, 2026',
    issuer: 'Insurance Regulatory and Development Authority of India',
    date: '2026-04-06',
    dateLabel: '6 April 2026',
    refNo: 'IRDAI/GA&HR/CIR/MISC/51/4/2026',
    appliesTo:
      'All insurers incl. FRBs; intermediaries such as brokers, corporate agents, web aggregators, TPAs, IMFs, insurance repositories, ISNPs, corporate surveyors, MISPs and CSCs; and IIB',
    summary:
      'Revised version of the 2023 guidelines, issued citing the changing threat landscape, industry feedback and IRDAI committee recommendations; it sets minimum standards and governance mechanisms for all regulated entities, who must comply from the current financial year.',
    link: { url: 'https://irdai.gov.in/documents/37343/366029/%E0%A4%86%E0%A4%88%E0%A4%86%E0%A4%B0%E0%A4%A1%E0%A5%80%E0%A4%8F%E0%A4%86%E0%A4%88+%E0%A4%B8%E0%A5%82%E0%A4%9A%E0%A4%A8%E0%A4%BE+%E0%A4%94%E0%A4%B0+%E0%A4%B8%E0%A4%BE%E0%A4%87%E0%A4%AC%E0%A4%B0+%E0%A4%B8%E0%A5%81%E0%A4%B0%E0%A4%95%E0%A5%8D%E0%A4%B7%E0%A4%BE+%E0%A4%A6%E0%A4%BF%E0%A4%B6%E0%A4%BE%E0%A4%A8%E0%A4%BF%E0%A4%B0%E0%A5%8D%E0%A4%A6%E0%A5%87%E0%A4%B6%2C+2026+_+IRDAI+Information+and+Cybersecurity+Guidelines%2C+2026.pdf/9714979d-6006-3809-297f-91a4593ac072?download=true&t=1775624389414&version=1.1', kind: 'pdf' },
    sources: ['https://irdai.gov.in/documents/37343/366029/%E0%A4%86%E0%A4%88%E0%A4%86%E0%A4%B0%E0%A4%A1%E0%A5%80%E0%A4%8F%E0%A4%86%E0%A4%88+%E0%A4%B8%E0%A5%82%E0%A4%9A%E0%A4%A8%E0%A4%BE+%E0%A4%94%E0%A4%B0+%E0%A4%B8%E0%A4%BE%E0%A4%87%E0%A4%AC%E0%A4%B0+%E0%A4%B8%E0%A5%81%E0%A4%B0%E0%A4%95%E0%A5%8D%E0%A4%B7%E0%A4%BE+%E0%A4%A6%E0%A4%BF%E0%A4%B6%E0%A4%BE%E0%A4%A8%E0%A4%BF%E0%A4%B0%E0%A5%8D%E0%A4%A6%E0%A5%87%E0%A4%B6%2C+2026+_+IRDAI+Information+and+Cybersecurity+Guidelines%2C+2026.pdf/9714979d-6006-3809-297f-91a4593ac072?download=true&t=1775624389414&version=1.1'],
  },
  {
    id: 'irdai-ics-2023',
    regulator: 'irdai',
    title: 'IRDAI Information and Cyber Security Guidelines, 2023',
    issuer: 'Insurance Regulatory and Development Authority of India',
    date: '2023-04-24',
    dateLabel: '24 April 2023',
    refNo: 'IRDAI/GA&HR/GDL/MISC/88/04/2023',
    appliesTo:
      'All insurers incl. FRBs, insurance intermediaries (brokers, corporate agents, web aggregators, TPAs, IMFs, IRs, ISNPs, corporate surveyors, MISPs, CSCs) and IIB',
    summary:
      'A 175-page policy set that replaced IRDAI’s 2017, 2020 and 2022 cyber circulars, maps controls to the NIST framework by entity type (Annexure I), and scales intermediaries’ obligations by their gross insurance revenue (Annexure II).',
    status: 'Revised by the IRDAI Information and Cyber Security Guidelines, 2026.',
    link: { url: 'https://irdai.gov.in/documents/37343/366029/%E0%A4%86%E0%A4%88%E0%A4%86%E0%A4%B0%E0%A4%A1%E0%A5%80%E0%A4%8F%E0%A4%86%E0%A4%88+%E0%A4%B8%E0%A5%82%E0%A4%9A%E0%A4%A8%E0%A4%BE+%E0%A4%94%E0%A4%B0+%E0%A4%B8%E0%A4%BE%E0%A4%87%E0%A4%AC%E0%A4%B0+%E0%A4%B8%E0%A5%81%E0%A4%B0%E0%A4%95%E0%A5%8D%E0%A4%B7%E0%A4%BE+%E0%A4%B8%E0%A4%82%E0%A4%AC%E0%A4%82%E0%A4%A7%E0%A5%80+%E0%A4%A6%E0%A4%BF%E0%A4%B6%E0%A4%BE%E0%A4%A8%E0%A4%BF%E0%A4%B0%E0%A5%8D%E0%A4%A6%E0%A5%87%E0%A4%B6%2C+2023++_+IRDAI+Information+and+Cyber+Security+Guidelines%2C+2023.pdf/755d6b0e-8729-6499-80f3-38117149cc9b?version=1.3&t=1682511070828&download=true', kind: 'pdf' },
    listingUrl: 'https://irdai.gov.in/en/document-detail?documentId=3314780',
    sources: [
      'https://irdai.gov.in/en/document-detail?documentId=3314780',
      'https://irdai.gov.in/documents/37343/366029/%E0%A4%86%E0%A4%88%E0%A4%86%E0%A4%B0%E0%A4%A1%E0%A5%80%E0%A4%8F%E0%A4%86%E0%A4%88+%E0%A4%B8%E0%A5%82%E0%A4%9A%E0%A4%A8%E0%A4%BE+%E0%A4%94%E0%A4%B0+%E0%A4%B8%E0%A4%BE%E0%A4%87%E0%A4%AC%E0%A4%B0+%E0%A4%B8%E0%A5%81%E0%A4%B0%E0%A4%95%E0%A5%8D%E0%A4%B7%E0%A4%BE+%E0%A4%B8%E0%A4%82%E0%A4%AC%E0%A4%82%E0%A4%A7%E0%A5%80+%E0%A4%A6%E0%A4%BF%E0%A4%B6%E0%A4%BE%E0%A4%A8%E0%A4%BF%E0%A4%B0%E0%A5%8D%E0%A4%A6%E0%A5%87%E0%A4%B6%2C+2023++_+IRDAI+Information+and+Cyber+Security+Guidelines%2C+2023.pdf/755d6b0e-8729-6499-80f3-38117149cc9b?version=1.3&t=1682511070828&download=true',
      'https://irdai.gov.in/documents/37343/366029/%E0%A4%86%E0%A4%88%E0%A4%86%E0%A4%B0%E0%A4%A1%E0%A5%80%E0%A4%8F%E0%A4%86%E0%A4%88+%E0%A4%B8%E0%A5%82%E0%A4%9A%E0%A4%A8%E0%A4%BE+%E0%A4%94%E0%A4%B0+%E0%A4%B8%E0%A4%BE%E0%A4%87%E0%A4%AC%E0%A4%B0+%E0%A4%B8%E0%A5%81%E0%A4%B0%E0%A4%95%E0%A5%8D%E0%A4%B7%E0%A4%BE+%E0%A4%A6%E0%A4%BF%E0%A4%B6%E0%A4%BE%E0%A4%A8%E0%A4%BF%E0%A4%B0%E0%A5%8D%E0%A4%A6%E0%A5%87%E0%A4%B6%2C+2026+_+IRDAI+Information+and+Cybersecurity+Guidelines%2C+2026.pdf/9714979d-6006-3809-297f-91a4593ac072?download=true&t=1775624389414&version=1.1',
    ],
  },

  // ---------------------------------------------------------------- DPDP / MeitY
  {
    id: 'dpdp-rules-2025',
    regulator: 'dpdp',
    title: 'Digital Personal Data Protection Rules, 2025',
    issuer: 'Ministry of Electronics and Information Technology',
    date: '2025-11-13',
    dateLabel: '13 November 2025 (published on MeitY 14 November 2025)',
    refNo: 'G.S.R. 846(E)',
    appliesTo: 'Data Fiduciaries, Consent Managers and the Data Protection Board under the DPDP Act',
    summary:
      'Operational rules under the DPDP Act, brought in by phases (Rules 1, 2 and 17–21 at once, Rule 4 after one year, most others after eighteen months), including a detailed personal-data-breach report to the Board within 72 hours of becoming aware of it, unless the Board allows longer.',
    link: {
      url: 'https://www.meity.gov.in/documents/act-and-policies/digital-personal-data-protection-rules-2025-gDOxUjMtQWa?pageTitle=Digital-Personal-Data-Protection-Rules-2025.pdf',
      kind: 'page',
    },
    sources: [
      'https://www.meity.gov.in/documents/act-and-policies/digital-personal-data-protection-rules-2025-gDOxUjMtQWa?pageTitle=Digital-Personal-Data-Protection-Rules-2025.pdf',
      'https://egazette.gov.in/WriteReadData/2025/267650.pdf',
    ],
  },
  {
    id: 'dpdp-act-2023',
    regulator: 'dpdp',
    title: 'The Digital Personal Data Protection Act, 2023',
    issuer: 'Parliament of India (published by the Ministry of Law and Justice; administered by MeitY)',
    date: '2023-08-11',
    dateLabel: '11 August 2023',
    refNo: 'Act No. 22 of 2023',
    appliesTo: 'Processing of digital personal data by Data Fiduciaries and their Data Processors',
    summary:
      'India’s data-protection law: Data Fiduciaries must take reasonable security safeguards and notify the Data Protection Board and each affected person of a breach, with penalties of up to ₹250 crore for failing to safeguard data; its provisions are commenced in phases by G.S.R. 843(E) of 13 November 2025.',
    link: {
      url: 'https://www.meity.gov.in/static/uploads/2024/02/Digital-Personal-Data-Protection-Act-2023.pdf',
      kind: 'pdf',
    },
    sources: [
      'https://www.meity.gov.in/static/uploads/2024/02/Digital-Personal-Data-Protection-Act-2023.pdf',
      'https://egazette.gov.in/WriteReadData/2025/267647.pdf',
    ],
  },

  // ---------------------------------------------------------------- PFRDA & others
  {
    id: 'pfrda-ics-2024',
    regulator: 'others',
    title: 'Information and Cyber Security Policy Guidelines - 2024 For Intermediaries / Regulated Entities',
    issuer: 'Pension Fund Regulatory and Development Authority',
    date: '2024-08-01',
    dateLabel: '1 August 2024',
    refNo: 'PFRDA/2024/14/ICS/01',
    appliesTo:
      'PFRDA intermediaries: retirement advisers, CRAs, custodian, NPS Trust, pension funds, points of presence and the trustee bank',
    summary:
      'Organises the required cyber policy around Governance, Identify, Protect, Detect, Respond and Recover, requires incidents to be reported to both CERT-In and PFRDA within 6 hours, and mandates an external audit of the entire ICT infrastructure by a CERT-In empanelled auditor at least once a financial year.',
    link: { url: 'https://pfrda.org.in/documents/33652/198544/18+PFRDA202414ICS01.pdf', kind: 'pdf' },
    listingUrl:
      'https://pfrda.org.in/w/regulatory-framework/guidelines/information-and-cyber-security-policy-guidelines-2024-for-intermediaries-/-regulated-entities',
    sources: [
      'https://pfrda.org.in/w/regulatory-framework/guidelines/information-and-cyber-security-policy-guidelines-2024-for-intermediaries-/-regulated-entities',
      'https://pfrda.org.in/documents/33652/153406/Information+and+Cyber+Security+Policy+Guidelines+-+2024+For+Intermediaries++Regulated+Entities.pdf',
    ],
  },
]
