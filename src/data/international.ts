import type { IntlFramework, IntlRegion } from './types'

/*
 * International cyber and data-protection laws, regulations, frameworks and standards.
 * Every field below was checked against the official source(s) listed in `sources`
 * (last verified 26 Sep 2026). Fields that could not be verified are omitted.
 * Summaries are hand-written plain-language paraphrases, not quotations or legal advice.
 */

export const INTL_REGIONS: IntlRegion[] = [
  { id: 'eu', label: 'EU', name: 'the European Union' },
  { id: 'uk', label: 'UK', name: 'the United Kingdom' },
  { id: 'us', label: 'US', name: 'the United States' },
  { id: 'global', label: 'Global', name: 'global standard-setters and industry bodies' },
]

const RBI_2026_RELATED = [
  { directionId: 'rbi-cb-cyber-2026', label: 'RBI Commercial Banks cyber resilience Directions, 2026' },
  { directionId: 'rbi-nbfc-cyber-2026', label: 'RBI NBFCs cyber resilience Directions, 2026' },
  { directionId: 'rbi-ucb-cyber-2026', label: 'RBI UCBs cyber resilience Directions, 2026' },
]

export const INTERNATIONAL: IntlFramework[] = [
  // ---------------------------------------------------------------- EU
  {
    id: 'eu-gdpr',
    region: 'eu',
    name: 'Regulation (EU) 2016/679 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data (General Data Protection Regulation)',
    shortName: 'GDPR',
    issuer: 'European Parliament and Council of the European Union',
    jurisdiction: 'European Union (directly applicable in all Member States)',
    type: 'Law/Regulation',
    version: 'Adopted 27 April 2016 (OJ L 119, 4.5.2016)',
    glance: '2016 · applies from 25 May 2018',
    appliesFrom: '25 May 2018',
    appliesTo:
      'Controllers and processors established in the EU, and those outside the EU that offer goods or services to, or monitor the behaviour of, people in the EU',
    summary:
      'The EU’s general law on processing personal data and on people’s rights over it. A controller must report a personal data breach to its supervisory authority without undue delay and, where feasible, within 72 hours of becoming aware of it, unless the breach is unlikely to put people’s rights and freedoms at risk.',
    status:
      'Repealed Directive 95/46/EC. EUR-Lex lists Commission proposals to amend the GDPR, but on the date checked it listed only corrections, not an adopted amending act.',
    links: [{ label: 'EUR-Lex (official text)', url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj' }],
    related: [
      { directionId: 'dpdp-act-2023', label: 'Digital Personal Data Protection Act, 2023' },
      { directionId: 'dpdp-rules-2025', label: 'Digital Personal Data Protection Rules, 2025' },
    ],
    sources: [
      'https://eur-lex.europa.eu/eli/reg/2016/679/oj',
      'https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=CELEX:32016R0679',
    ],
  },
  {
    id: 'eu-dora',
    region: 'eu',
    name: 'Regulation (EU) 2022/2554 on digital operational resilience for the financial sector (Digital Operational Resilience Act)',
    shortName: 'DORA',
    issuer: 'European Parliament and Council of the European Union',
    jurisdiction: 'European Union (directly applicable in all Member States)',
    type: 'Law/Regulation',
    version: 'Adopted 14 December 2022 (OJ L 333, 27.12.2022)',
    glance: '2022 · applies from 17 Jan 2025',
    appliesFrom: '17 January 2025',
    appliesTo:
      'Financial entities listed in Article 2, including credit institutions, payment and e-money institutions, investment firms, crypto-asset service providers and insurers, plus ICT third-party service providers',
    summary:
      'Sets uniform EU rules for financial entities on ICT risk management, reporting of major ICT-related incidents, digital operational resilience testing and ICT third-party risk, and creates an oversight framework for critical ICT third-party service providers. Entities identified by their authorities must carry out threat-led penetration testing (TLPT) at least every 3 years.',
    status: 'In force. EUR-Lex lists a series of delegated and implementing acts (technical standards) that supplement it.',
    links: [{ label: 'EUR-Lex (official text)', url: 'https://eur-lex.europa.eu/eli/reg/2022/2554/oj' }],
    related: RBI_2026_RELATED,
    sources: [
      'https://eur-lex.europa.eu/eli/reg/2022/2554/oj',
      'https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=CELEX:32022R2554',
    ],
  },
  {
    id: 'eu-nis2',
    region: 'eu',
    name: 'Directive (EU) 2022/2555 on measures for a high common level of cybersecurity across the Union (NIS 2 Directive)',
    shortName: 'NIS2',
    issuer: 'European Parliament and Council of the European Union',
    jurisdiction: 'European Union (applies through each Member State’s national law)',
    type: 'Directive',
    version: 'Adopted 14 December 2022 (OJ L 333, 27.12.2022)',
    glance: '2022 · national laws from 18 Oct 2024',
    appliesFrom: 'Member States had to adopt national measures by 17 October 2024 and apply them from 18 October 2024',
    appliesTo:
      'Medium-sized and larger public or private entities in the sectors listed in Annexes I and II, plus some entities regardless of size (for example trust service providers, DNS service providers and certain public administration entities)',
    summary:
      'Requires Member States to make essential and important entities take appropriate and proportionate cybersecurity risk-management measures, and notify significant incidents to their CSIRT or competent authority without undue delay.',
    status: 'Repealed the original NIS Directive (EU) 2016/1148 with effect from 18 October 2024.',
    links: [{ label: 'EUR-Lex (official text)', url: 'https://eur-lex.europa.eu/eli/dir/2022/2555/oj' }],
    sources: [
      'https://eur-lex.europa.eu/eli/dir/2022/2555/oj',
      'https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=CELEX:32022L2555',
    ],
  },
  {
    id: 'eu-tiber',
    region: 'eu',
    name: 'TIBER-EU: European framework for Threat Intelligence-Based Ethical Red Teaming',
    shortName: 'TIBER-EU',
    issuer: 'European Central Bank (developed jointly with the EU national central banks)',
    jurisdiction: 'European jurisdictions that adopt it, and ECB Banking Supervision',
    type: 'Supervisory framework',
    version:
      'First published May 2018; updated in 2024 to align with DORA’s technical standards on threat-led penetration testing (current framework document dated January 2025)',
    glance: 'Framework updated 2024 (doc. Jan 2025)',
    appliesTo:
      'Entities that provide core financial infrastructure, and the national or European authorities that run tests; it can also be used in other critical sectors',
    summary:
      'Guidance for controlled red-team tests, based on bespoke threat intelligence, that mimic real attackers’ tactics, techniques and procedures against an entity’s critical functions; the result is not a pass or fail but a picture of strengths and weaknesses. The ECB notes it can help firms and authorities meet DORA’s threat-led penetration testing requirements.',
    links: [
      { label: 'ECB TIBER-EU page', url: 'https://www.ecb.europa.eu/paym/cyber-resilience/tiber-eu/html/index.en.html' },
    ],
    related: [RBI_2026_RELATED[0]],
    sources: [
      'https://www.ecb.europa.eu/paym/cyber-resilience/tiber-eu/html/index.en.html',
      'https://www.ecb.europa.eu/pub/pdf/other/ecb.tiber_eu_framework_2025~b32eff9a10.en.pdf',
    ],
  },
  {
    id: 'eu-cra',
    region: 'eu',
    name: 'Regulation (EU) 2024/2847 on horizontal cybersecurity requirements for products with digital elements (Cyber Resilience Act)',
    shortName: 'CRA',
    issuer: 'European Parliament and Council of the European Union',
    jurisdiction: 'European Union (directly applicable in all Member States)',
    type: 'Law/Regulation',
    version: 'Adopted 23 October 2024 (OJ L, 20.11.2024)',
    glance: '2024 · most rules from 11 Dec 2027',
    appliesFrom:
      '11 December 2027 for most provisions; Chapter IV (conformity assessment bodies) from 11 June 2026; manufacturers’ reporting obligations (Article 14) from 11 September 2026',
    appliesTo:
      'Manufacturers, importers, distributors and other economic operators of hardware and software products with digital elements that connect to a device or network and are made available on the EU market; some products covered by other EU laws are excluded',
    summary:
      'Sets essential cybersecurity requirements for designing, developing and producing products with digital elements, and for how manufacturers handle vulnerabilities while those products are in use. Manufacturers must send an early warning about an actively exploited vulnerability to the designated CSIRT and ENISA within 24 hours of becoming aware of it.',
    links: [{ label: 'EUR-Lex (official text)', url: 'https://eur-lex.europa.eu/eli/reg/2024/2847/oj' }],
    sources: [
      'https://eur-lex.europa.eu/eli/reg/2024/2847/oj',
      'https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=CELEX:32024R2847',
    ],
  },
  {
    id: 'eu-ai-act',
    region: 'eu',
    name: 'Regulation (EU) 2024/1689 laying down harmonised rules on artificial intelligence (Artificial Intelligence Act)',
    shortName: 'EU AI Act',
    issuer: 'European Parliament and Council of the European Union',
    jurisdiction: 'European Union (directly applicable in all Member States)',
    type: 'Law/Regulation',
    version: 'Adopted 13 June 2024 (OJ L, 12.7.2024); in force since 1 August 2024',
    glance: '2024 · amended 2026',
    appliesFrom:
      '2 August 2026 as the general date. Chapters I and II (including prohibited practices) from 2 February 2025; Chapter V on general-purpose AI models from 2 August 2025; high-risk requirements from 2 December 2027 (Annex III systems) or 2 August 2028 (Annex I systems), as amended in 2026',
    appliesTo:
      'Providers, deployers, importers and distributors of AI systems and providers of general-purpose AI models, including providers outside the EU whose systems are placed on the EU market or whose output is used in the EU',
    summary:
      'Harmonised EU rules for placing AI systems on the market, putting them into service and using them: certain AI practices are prohibited, high-risk AI systems and their operators face specific requirements, and there are transparency rules for some AI systems and rules for general-purpose AI models.',
    status:
      'Amended by Regulation (EU) 2026/1744 of 8 July 2026 (Digital Omnibus on AI), in force from 27 July 2026, which moved the high-risk application dates. Read the consolidated text on EUR-Lex.',
    links: [
      { label: 'EUR-Lex (official text)', url: 'https://eur-lex.europa.eu/eli/reg/2024/1689/oj' },
      { label: 'Amending Regulation (EU) 2026/1744', url: 'https://eur-lex.europa.eu/eli/reg/2026/1744/oj' },
    ],
    sources: [
      'https://eur-lex.europa.eu/eli/reg/2024/1689/oj',
      'https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=CELEX:32024R1689',
      'https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=CELEX:32026R1744',
    ],
  },

  // ---------------------------------------------------------------- UK
  {
    id: 'uk-cbest',
    region: 'uk',
    name: 'CBEST Threat Intelligence-Led Assessments',
    shortName: 'CBEST',
    issuer: 'Bank of England, with the PRA and FCA (Implementation Guide developed by the PRA)',
    jurisdiction: 'United Kingdom',
    type: 'Supervisory framework',
    version: '2024 edition of the CBEST Implementation Guide; CBEST has been part of the regulators’ toolkit since 2014',
    glance: 'Implementation Guide 2024',
    appliesTo:
      'UK financial firms and financial market infrastructures (FMIs) asked by the regulators to undergo a CBEST as part of the supervisory cycle, or that request one with the regulator’s agreement',
    summary:
      'A regulator-led, intelligence-led penetration test that mimics attackers going after the important business services of a firm or FMI. It runs in four phases (initiation, threat intelligence, penetration testing and closure) and ends with a remediation plan whose delivery the regulator supervises.',
    links: [
      {
        label: 'Bank of England CBEST guide',
        url: 'https://www.bankofengland.co.uk/financial-stability/operational-resilience-of-the-financial-sector/cbest-threat-intelligence-led-assessments-implementation-guide',
      },
    ],
    sources: [
      'https://www.bankofengland.co.uk/financial-stability/operational-resilience-of-the-financial-sector/cbest-threat-intelligence-led-assessments-implementation-guide',
    ],
  },

  // ---------------------------------------------------------------- US
  {
    id: 'us-nist-csf-2',
    region: 'us',
    name: 'The NIST Cybersecurity Framework (CSF) 2.0 (NIST CSWP 29)',
    shortName: 'NIST CSF 2.0',
    issuer: 'National Institute of Standards and Technology (NIST)',
    jurisdiction: 'United States; written for use by any organisation',
    type: 'Voluntary framework',
    version: 'CSF 2.0, published 26 February 2024',
    glance: 'CSF 2.0 · Feb 2024',
    appliesTo: 'Industry, government agencies and other organisations of any size, sector or maturity',
    summary:
      'A taxonomy of high-level cybersecurity outcomes grouped under six Functions (Govern, Identify, Protect, Detect, Respond and Recover) that organisations use to understand, assess, prioritise and communicate their cybersecurity efforts. It does not prescribe how to achieve the outcomes and links to other resources for that.',
    status: 'NIST keeps the earlier CSF 1.1 in an archive section of its CSF site.',
    links: [
      { label: 'NIST CSF site', url: 'https://www.nist.gov/cyberframework' },
      { label: 'CSWP 29 on CSRC', url: 'https://csrc.nist.gov/pubs/cswp/29/the-nist-cybersecurity-framework-csf-20/final' },
    ],
    sources: [
      'https://www.nist.gov/cyberframework',
      'https://csrc.nist.gov/pubs/cswp/29/the-nist-cybersecurity-framework-csf-20/final',
      'https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf',
    ],
  },
  {
    id: 'us-nist-800-53',
    region: 'us',
    name: 'NIST SP 800-53 Rev. 5: Security and Privacy Controls for Information Systems and Organizations',
    shortName: 'NIST SP 800-53',
    issuer: 'National Institute of Standards and Technology (Joint Task Force)',
    jurisdiction: 'United States',
    type: 'Standard',
    version: 'Rev. 5, September 2020 (updated 10 December 2020); current release 5.2.0, issued 27 August 2025',
    glance: 'Rev. 5 · release 5.2.0 (Aug 2025)',
    appliesTo:
      'Developed under FISMA, including minimum requirements for US federal information systems; nongovernmental organisations may use it voluntarily',
    summary:
      'A catalogue of security and privacy controls that organisations tailor, as part of an organisation-wide risk process, to protect operations, assets and individuals from threats ranging from hostile attacks and human error to natural disasters. Release 5.2.0 focuses on the security and reliability of software updates and patches.',
    status: 'Release 5.2.0 is a minor release: it added SA-15(13), SA-24 and SI-02(07) and revised SI-07(12).',
    links: [{ label: 'SP 800-53 Rev. 5 on CSRC', url: 'https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final' }],
    sources: [
      'https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final',
      'https://csrc.nist.gov/News/2025/nist-releases-revision-to-sp-800-53-controls',
      'https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-53r5.pdf',
    ],
  },
  {
    id: 'us-sec-cyber-2023',
    region: 'us',
    name: 'Cybersecurity Risk Management, Strategy, Governance, and Incident Disclosure (Release No. 33-11216)',
    shortName: 'SEC cyber disclosure rules',
    issuer: 'US Securities and Exchange Commission (SEC)',
    jurisdiction: 'United States',
    type: 'Law/Regulation',
    version: 'Adopted 26 July 2023; published in the Federal Register on 4 August 2023',
    glance: 'Adopted Jul 2023',
    appliesFrom:
      'Annual (Form 10-K / 20-F) disclosures from fiscal years ending on or after 15 December 2023; incident disclosures on Form 8-K / 6-K from 18 December 2023, with 180 more days for smaller reporting companies’ Form 8-K disclosures',
    appliesTo:
      'Public companies subject to the reporting requirements of the Securities Exchange Act of 1934, including foreign private issuers (through Forms 6-K and 20-F)',
    summary:
      'Registrants must disclose a cybersecurity incident they determine to be material under new Item 1.05 of Form 8-K, generally within four business days of that determination. Each Form 10-K must also describe, under Regulation S-K Item 106, how they manage material cyber risk and how the board and management oversee it.',
    status:
      'A petition for rulemaking filed on 22 May 2025 (File No. 4-856) asks the SEC to rescind the Form 8-K Item 1.05 and Form 6-K incident requirements. A petition does not change the rules; check sec.gov for the current position.',
    links: [
      { label: 'SEC rule page (S7-09-22)', url: 'https://www.sec.gov/rules-regulations/2023/07/s7-09-22' },
      { label: 'SEC press release 2023-139', url: 'https://www.sec.gov/newsroom/press-releases/2023-139' },
    ],
    sources: [
      'https://www.sec.gov/rules-regulations/2023/07/s7-09-22',
      'https://www.sec.gov/newsroom/press-releases/2023-139',
      'https://www.sec.gov/rules-regulations/2025/05/joint-petition-rulemaking-amend-sec-cybersecurity-risk-management-strategy-governance-incident',
    ],
  },
  {
    id: 'us-nydfs-500',
    region: 'us',
    name: '23 NYCRR Part 500: Cybersecurity Requirements for Financial Services Companies',
    shortName: 'NYDFS Part 500',
    issuer: 'New York State Department of Financial Services (DFS)',
    jurisdiction: 'New York State, United States',
    type: 'Law/Regulation',
    version: 'Effective 1 March 2017; Second Amendment effective 1 November 2023',
    glance: '2017 · Second Amendment Nov 2023',
    appliesFrom:
      'The Second Amendment was phased in; its last requirements (MFA for all access under 500.12 and the asset inventory under 500.13(a)) had two years from 1 November 2023',
    appliesTo:
      'Anyone operating, or required to operate, under a licence, registration, charter or similar authorisation under New York’s Banking Law, Insurance Law or Financial Services Law (“covered entities”), subject to listed exemptions',
    summary:
      'Covered entities must run a risk-based cybersecurity programme with a CISO, senior-governing-body oversight, annual penetration testing and multi-factor authentication, and notify DFS no later than 72 hours after determining that a cybersecurity incident has occurred. Each April 15 they must certify material compliance, or acknowledge non-compliance, for the previous year.',
    status:
      'The Second Amendment added, among other things, extra duties for larger “Class A” companies and a notice within 24 hours of any extortion payment.',
    links: [
      { label: 'DFS Cybersecurity Resource Center', url: 'https://www.dfs.ny.gov/industry_guidance/cybersecurity' },
      { label: 'DFS page with the amended Part 500 text', url: 'https://www.dfs.ny.gov/cybersecurity/23-NYCRR-Part-500' },
    ],
    sources: [
      'https://www.dfs.ny.gov/industry_guidance/cybersecurity',
      'https://www.dfs.ny.gov/cybersecurity/23-NYCRR-Part-500',
    ],
  },

  // ---------------------------------------------------------------- Global
  {
    id: 'global-iso-27001',
    region: 'global',
    name: 'ISO/IEC 27001:2022 Information security, cybersecurity and privacy protection — Information security management systems — Requirements',
    shortName: 'ISO/IEC 27001',
    issuer: 'ISO and IEC (joint committee ISO/IEC JTC 1/SC 27)',
    jurisdiction: 'Global',
    type: 'Standard',
    version: 'Edition 3, published October 2022; Amendment 1:2024 (climate action changes)',
    glance: '2022 edition (+ Amd 1:2024)',
    appliesTo: 'Organisations of any size and sector; implementing it and getting certified are both optional',
    summary:
      'Sets out the requirements an information security management system (ISMS) must meet, so an organisation can establish, run, maintain and keep improving one that manages risks to the confidentiality, integrity and availability of information. Organisations can choose to be certified against it by a certification body.',
    status:
      'Replaced ISO/IEC 27001:2013, which ISO lists as withdrawn. ISO sells the standard, so this site links only to ISO’s own page.',
    links: [{ label: 'ISO page for ISO/IEC 27001:2022', url: 'https://www.iso.org/standard/27001' }],
    sources: ['https://www.iso.org/standard/27001'],
  },
  {
    id: 'global-pci-dss',
    region: 'global',
    name: 'Payment Card Industry Data Security Standard (PCI DSS)',
    shortName: 'PCI DSS',
    issuer: 'PCI Security Standards Council (PCI SSC)',
    jurisdiction: 'Global',
    type: 'Standard',
    version: 'v4.0.1, published 11 June 2024 (a limited revision of v4.0, published March 2022)',
    glance: 'v4.0.1 · Jun 2024',
    appliesFrom: 'The new requirements introduced in v4.0 became effective on 31 March 2025',
    appliesTo:
      'Entities that store, process or transmit cardholder data or sensitive authentication data, or could affect the security of the cardholder data environment, including merchants, processors, acquirers, issuers and service providers',
    summary:
      'A baseline of technical and operational requirements for protecting payment account data, meant to encourage consistent data security measures worldwide. Version 4.0.1 fixed errors and clarified some requirements and guidance without adding or deleting any requirement.',
    status: 'PCI DSS v4.0 was retired on 31 December 2024, leaving v4.0.1 as the only active version.',
    links: [
      { label: 'PCI SSC PCI DSS page', url: 'https://www.pcisecuritystandards.org/standards/pci-dss/' },
      { label: 'PCI SSC document library', url: 'https://www.pcisecuritystandards.org/document_library/' },
    ],
    sources: [
      'https://www.pcisecuritystandards.org/standards/pci-dss/',
      'https://www.pcisecuritystandards.org/document_library/',
      'https://blog.pcisecuritystandards.org/just-published-pci-dss-v4-0-1',
    ],
  },
  {
    id: 'global-swift-cscf',
    region: 'global',
    name: 'Swift Customer Security Controls Framework (CSCF)',
    shortName: 'Swift CSCF',
    issuer: 'Swift (Customer Security Programme)',
    jurisdiction: 'Global',
    type: 'Standard',
    version:
      'CSCF v2026 sets the controls for 2026. Swift publishes a new version every July, a year before it takes effect',
    glance: 'CSCF v2026',
    appliesTo: 'All Swift users; which controls apply depends on how the user connects to Swift (its architecture type)',
    summary:
      'Swift’s security baseline for its users, made up of mandatory and advisory controls grouped under three objectives: secure your environment, know and limit access, and detect and respond. Users attest every year against at least the mandatory controls through the KYC-Security Attestation application.',
    links: [
      {
        label: 'Swift: Understand the controls',
        url: 'https://www.swift.com/myswift/customer-security-programme-csp/security-controls',
      },
    ],
    sources: [
      'https://www.swift.com/myswift/customer-security-programme-csp/security-controls',
      'https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/swift-customer-security-programme-v2026',
    ],
  },
  {
    id: 'global-bcbs-opres',
    region: 'global',
    name: 'Principles for operational resilience',
    shortName: 'BCBS operational resilience',
    issuer: 'Basel Committee on Banking Supervision (BCBS); published by the Bank for International Settlements (BIS)',
    jurisdiction: 'Global (international banking standard-setter)',
    type: 'Supervisory framework',
    version: 'Published 31 March 2021 (the BIS lists it as current); consultative version August 2020',
    glance: 'Mar 2021',
    appliesTo: 'Banks (published in the Basel Committee’s Guidelines series)',
    summary:
      'A principles-based approach to strengthening banks’ ability to withstand operational risk events, such as pandemics, cyber incidents, technology failures or natural disasters, that could cause significant operational failures or wide-scale disruption in financial markets. It builds on the Committee’s Principles for the sound management of operational risk.',
    links: [
      {
        label: 'BIS publication page',
        url: 'https://www.bis.org/publications/202103-guidelines-principles-operational-resilience',
      },
    ],
    sources: [
      'https://www.bis.org/bcbs/publ/d516.htm',
      'https://www.bis.org/publications/202103-guidelines-principles-operational-resilience',
    ],
  },
  {
    id: 'global-cpmi-iosco-cyber',
    region: 'global',
    name: 'Guidance on cyber resilience for financial market infrastructures',
    shortName: 'CPMI-IOSCO Cyber Guidance',
    issuer: 'Committee on Payments and Market Infrastructures (CPMI) and International Organization of Securities Commissions (IOSCO)',
    jurisdiction: 'Global (international standard-setters)',
    type: 'Supervisory framework',
    version: 'Published 29 June 2016 (CPMI Papers No. 146)',
    glance: 'Jun 2016',
    appliesTo: 'Financial market infrastructures (FMIs), and the authorities that oversee and supervise them',
    summary:
      'Internationally agreed guidance to help FMIs pre-empt cyber attacks, respond to them rapidly and effectively, and recover faster and more safely if an attack succeeds. It supplements the Principles for Financial Market Infrastructures (PFMI) and does not add new standards.',
    links: [
      {
        label: 'BIS publication page',
        url: 'https://www.bis.org/publications/guidance-cyber-resilience-financial-market-infrastructures',
      },
    ],
    sources: [
      'https://www.bis.org/cpmi/publ/d146.htm',
      'https://www.bis.org/publications/guidance-cyber-resilience-financial-market-infrastructures',
    ],
  },
  {
    id: 'global-owasp-top10',
    region: 'global',
    name: 'OWASP Top 10:2025 (web application security risks)',
    shortName: 'OWASP Top 10',
    issuer: 'OWASP Foundation',
    jurisdiction: 'Global',
    type: 'Voluntary framework',
    version: '2025 edition, which the OWASP project page calls the most current released version; the 2021 edition is kept as the previous version',
    glance: '2025 edition',
    appliesTo: 'Developers and web application security teams; use is voluntary',
    summary:
      'A standard awareness document for developers and web application security that reflects a broad consensus on the most critical security risks to web applications. The 2025 list runs from A01 Broken Access Control to A10 Mishandling of Exceptional Conditions and includes Software Supply Chain Failures at A03.',
    links: [
      { label: 'OWASP Top 10 project page', url: 'https://owasp.org/projects/top-ten' },
      { label: 'OWASP Top 10:2025', url: 'https://top10.owasp.org/2025/' },
    ],
    sources: ['https://owasp.org/www-project-top-ten/', 'https://top10.owasp.org/2025/'],
  },
  {
    id: 'global-owasp-asvs',
    region: 'global',
    name: 'OWASP Application Security Verification Standard (ASVS)',
    shortName: 'OWASP ASVS',
    issuer: 'OWASP Foundation',
    jurisdiction: 'Global',
    type: 'Standard',
    version: 'Version 5.0.0, the latest stable version (released on OWASP’s GitHub on 30 May 2025)',
    glance: 'v5.0.0 · May 2025',
    appliesTo: 'Web application developers and security testers; use is voluntary',
    summary:
      'Gives a basis for testing the technical security controls of web applications and a list of requirements for secure development, with the aim of normalising how much coverage and rigour application security verification offers. OWASP asks that requirements be cited with the version, for example v5.0.0-1.2.5.',
    links: [
      { label: 'OWASP ASVS project page', url: 'https://owasp.org/projects/asvs' },
      { label: 'ASVS releases on GitHub', url: 'https://github.com/OWASP/ASVS/releases' },
    ],
    sources: ['https://owasp.org/projects/asvs', 'https://github.com/OWASP/ASVS/releases'],
  },
  {
    id: 'global-owasp-llm-top10',
    region: 'global',
    name: 'OWASP Top 10 for LLM Applications 2025 (OWASP GenAI Security Project)',
    shortName: 'OWASP LLM Top 10',
    issuer: 'OWASP Foundation (OWASP GenAI Security Project)',
    jurisdiction: 'Global',
    type: 'Voluntary framework',
    version: '2025 edition; the earlier list is labelled 2023-24',
    glance: '2025 edition',
    appliesTo: 'Teams that develop, deploy and manage LLM and generative AI applications; use is voluntary',
    summary:
      'Lists the top ten risks, vulnerabilities and mitigations for building and securing generative AI and large language model applications, from LLM01:2025 Prompt Injection to LLM10:2025 Unbounded Consumption.',
    status: 'The project has grown into the wider OWASP GenAI Security Project, whose site (genai.owasp.org) now hosts the list.',
    links: [
      {
        label: 'OWASP project page',
        url: 'https://owasp.org/projects/top-10-for-large-language-model-applications',
      },
      { label: 'LLM Top 10 on genai.owasp.org', url: 'https://genai.owasp.org/llm-top-10/' },
    ],
    sources: [
      'https://owasp.org/www-project-top-10-for-large-language-model-applications/',
      'https://genai.owasp.org/llm-top-10/',
    ],
  },
  {
    id: 'global-open-fair',
    region: 'global',
    name: 'Open FAIR™ (Factor Analysis of Information Risk): Risk Taxonomy (O-RT) and Risk Analysis (O-RA) Standards',
    shortName: 'FAIR / Open FAIR',
    issuer: 'The Open Group (Open FAIR standards); the FAIR Institute promotes the FAIR model',
    jurisdiction: 'Global',
    type: 'Standard',
    version:
      'O-RT Version 3.1 and O-RA Version 2.1, both published 22 May 2025, replacing O-RT 3.0.1 and O-RA 2.0.1 (November 2021)',
    glance: 'O-RT 3.1 / O-RA 2.1 · May 2025',
    appliesTo: 'Any organisation analysing information security or operational risk; use is voluntary',
    summary:
      'A model for analysing and quantifying cyber and operational risk in financial terms. The Open Group’s two companion standards give a standard taxonomy for information security risk (O-RT) and standards for carrying out risk analysis (O-RA), which together make up the Open FAIR Body of Knowledge.',
    status: 'The Open Group offers free PDF editions of both standards after signing in on its site.',
    links: [
      { label: 'Risk Taxonomy (O-RT) 3.1', url: 'https://publications.opengroup.org/c251' },
      { label: 'Risk Analysis (O-RA) 2.1', url: 'https://publications.opengroup.org/c250' },
      { label: 'FAIR Institute: What is FAIR?', url: 'https://www.fairinstitute.org/what-is-fair' },
    ],
    sources: [
      'https://publications.opengroup.org/c251',
      'https://publications.opengroup.org/c250',
      'https://publications.opengroup.org/c20b',
      'https://publications.opengroup.org/c20a',
      'https://www.opengroup.org/certifications/openfair',
      'https://www.fairinstitute.org/what-is-fair',
    ],
  },
]
