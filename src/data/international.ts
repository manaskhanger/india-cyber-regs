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
  { id: 'apac', label: 'APAC', name: 'the Asia-Pacific region' },
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
    scope: 'Controllers and processors of personal data, including non-EU ones targeting people in the EU',
    enforcedBy: 'National data protection supervisory authorities (Art. 51)',
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
    scope: 'EU financial entities and their ICT third-party service providers',
    enforcedBy: 'National competent authorities, and the ECB for significant banks (Art. 46); an ESA acts as Lead Overseer of critical ICT providers',
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
    scope: 'Essential and important entities in the sectors in Annexes I and II',
    enforcedBy: 'Competent authorities designated by each Member State (Art. 8)',
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
    scope: 'Core financial infrastructure entities (usable in other critical sectors)',
    enforcedBy: 'The TIBER authority that adopts the framework oversees each test; adoption is voluntary',
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
    scope: 'Manufacturers, importers and distributors of products with digital elements',
    enforcedBy: 'National market surveillance authorities (Art. 52)',
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
    scope: 'Providers and deployers of AI systems; providers of general-purpose AI models',
    enforcedBy: 'National market surveillance authorities (Art. 70); the Commission, through the AI Office, for general-purpose AI models (Art. 88)',
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
    scope: 'UK financial firms and FMIs asked (or agreed) to undergo a CBEST',
    enforcedBy: 'Bank of England (FMID), PRA and FCA, as part of their supervisory approaches',
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
    scope: 'Organisations of any size or sector',
    enforcedBy: 'Voluntary / no enforcing body (governments may also adopt it through policies and mandates)',
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
    scope: 'US federal information systems; others may use it voluntarily',
    enforcedBy: 'No enforcing body named in the text: NIST guidance under FISMA, consistent with OMB Circular A-130',
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
    scope: 'Public companies reporting under the Securities Exchange Act of 1934',
    enforcedBy: 'US Securities and Exchange Commission (SEC)',
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
    scope: 'DFS-licensed banking, insurance and financial services entities',
    enforcedBy: 'New York Superintendent of Financial Services (§ 500.20)',
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

  // ---------------------------------------------------------------- APAC
  {
    id: 'apac-mas-trm',
    region: 'apac',
    name: 'Technology Risk Management Guidelines (listed on the MAS website as “Guidelines on Risk Management Practices – Technology Risk”)',
    shortName: 'MAS TRM Guidelines',
    issuer: 'Monetary Authority of Singapore (MAS)',
    jurisdiction: 'Singapore',
    type: 'Supervisory framework',
    version: 'January 2021 edition (published 18 January 2021)',
    glance: 'Jan 2021',
    appliesTo:
      'Financial institutions regulated by MAS, which lists among others banks, insurers and insurance brokers, capital markets intermediaries, exchanges and clearing houses, payment institutions and financial advisers',
    scope: 'MAS-regulated financial institutions (banks, insurers, capital markets, payments)',
    enforcedBy: 'Monetary Authority of Singapore, which considers how far an FI observes the Guidelines when supervising it (para 2.2)',
    summary:
      'Technology risk management principles and best practices for the financial sector, covering technology risk governance and oversight, IT and cyber resilience, and chapters such as software application development, access control, cyber security assessment and IT audit. For systems directly reachable from the Internet, the FI is expected to run penetration tests at least once a year or whenever the systems undergo major changes (para 13.2.4).',
    status:
      'MAS cancelled its separate Technology Risk Management Notices (for example Notice 644) with effect from 10 May 2024; the MAS page now points to separate instructions on incident notification and reporting, which this site has not reviewed.',
    links: [
      {
        label: 'MAS page',
        url: 'https://www.mas.gov.sg/regulation/guidelines/technology-risk-management-guidelines',
      },
      {
        label: 'Guidelines PDF (January 2021)',
        url: 'https://www.mas.gov.sg/-/media/mas/regulations-and-financial-stability/regulatory-and-supervisory-framework/risk-management/trm-guidelines-18-january-2021.pdf',
      },
    ],
    related: RBI_2026_RELATED,
    sources: [
      'https://www.mas.gov.sg/regulation/guidelines/technology-risk-management-guidelines',
      'https://www.mas.gov.sg/-/media/mas/regulations-and-financial-stability/regulatory-and-supervisory-framework/risk-management/trm-guidelines-18-january-2021.pdf',
    ],
  },
  {
    id: 'apac-apra-cps234',
    region: 'apac',
    name: 'Prudential Standard CPS 234 Information Security',
    shortName: 'APRA CPS 234',
    issuer: 'Australian Prudential Regulation Authority (APRA)',
    jurisdiction: 'Australia',
    type: 'Law/Regulation',
    version: 'July 2019 version, made under the Banking Act 1959 and four other Acts (para 1); in force from 1 July 2019',
    glance: 'Jul 2019 · in force 1 Jul 2019',
    appliesFrom:
      '1 July 2019; for information assets managed by third parties, from the earlier of the next contract renewal or 1 July 2020 (paras 5–6)',
    appliesTo:
      'All APRA-regulated entities: authorised deposit-taking institutions (ADIs), general insurers, life companies, private health insurers and RSE licensees, including certain holding companies (para 2)',
    scope: 'APRA-regulated banks (ADIs), insurers and superannuation (RSE) licensees',
    enforcedBy: 'Australian Prudential Regulation Authority (APRA)',
    summary:
      'Requires each APRA-regulated entity to keep an information security capability that matches its threats and vulnerabilities, test its controls systematically, have internal audit review them, and notify APRA of material information security incidents no later than 72 hours after becoming aware of them (para 35). The Board is ultimately responsible for the entity’s information security.',
    links: [
      {
        label: 'CPS 234 PDF on apra.gov.au',
        url: 'https://www.apra.gov.au/sites/default/files/cps_234_july_2019_for_public_release.pdf',
      },
      { label: 'APRA Handbook: CPS 234', url: 'https://handbook.apra.gov.au/standard/cps-234' },
    ],
    related: RBI_2026_RELATED,
    sources: [
      'https://www.apra.gov.au/sites/default/files/cps_234_july_2019_for_public_release.pdf',
      'https://handbook.apra.gov.au/standard/cps-234',
    ],
  },
  {
    id: 'apac-hkma-craf',
    region: 'apac',
    name: 'Cyber Resilience Assessment Framework (C-RAF 2.0) and Intelligence-led Cyber Attack Simulation Testing (iCAST), under the Cybersecurity Fortification Initiative (CFI) 2.0',
    shortName: 'HKMA C-RAF 2.0 / iCAST',
    issuer: 'Hong Kong Monetary Authority (HKMA)',
    jurisdiction: 'Hong Kong',
    type: 'Supervisory framework',
    version: 'C-RAF 2.0, introduced with CFI 2.0 by HKMA circular of 3 November 2020 and effective from 1 January 2021 (the CFI was first launched in 2016)',
    glance: 'C-RAF 2.0 · from 1 Jan 2021',
    appliesTo:
      'Authorized Institutions (AIs); iCAST applies to AIs whose inherent risk is assessed as “medium” or “high”',
    scope: 'Hong Kong Authorized Institutions (banks); iCAST for medium- or high-risk AIs',
    enforcedBy: 'Hong Kong Monetary Authority (circulars addressed to all Authorized Institutions)',
    summary:
      'A risk-based framework for AIs to assess their own cyber risk profile (inherent risk assessment) and benchmark the level of defence and resilience they need (maturity assessment). iCAST is intelligence-led cyber attack simulation testing, applied on top of traditional penetration testing, and CFI 2.0 added Blue team requirements to it. C-RAF is one of three CFI pillars, alongside the Professional Development Programme and the Cyber Intelligence Sharing Platform.',
    status:
      'The C-RAF 2.0 document itself is on the HKMA’s Supervisory Communication Website, which is not public, so this entry relies on the HKMA’s public circulars and web page.',
    links: [
      {
        label: 'HKMA CFI page',
        url: 'https://www.hkma.gov.hk/eng/key-functions/international-financial-centre/fintech/research-and-applications/cybersecurity-fortification-initiative-cfi/',
      },
      { label: 'CFI 2.0 circular (3 Nov 2020)', url: 'https://brdr.hkma.gov.hk/eng/doc-ldg/docId/20201103-1-EN' },
    ],
    related: [RBI_2026_RELATED[0], RBI_2026_RELATED[2]],
    sources: [
      'https://www.hkma.gov.hk/eng/key-functions/international-financial-centre/fintech/research-and-applications/cybersecurity-fortification-initiative-cfi/',
      'https://brdr.hkma.gov.hk/eng/doc-ldg/docId/getPdf/20201103-1-EN/20201103-1-EN.pdf',
      'https://brdr.hkma.gov.hk/eng/doc-ldg/docId/getPdf/20201103-2-EN/20201103-2-EN.pdf',
      'https://brdr.hkma.gov.hk/eng/doc-ldg/docId/getPdf/20160524-1-EN/20160524-1-EN.pdf',
      'https://brdr.hkma.gov.hk/eng/doc-ldg/docId/getPdf/20180612-1-EN/20180612-1-EN.pdf',
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
    scope: 'Any organisation that chooses to use it',
    enforcedBy: 'Voluntary / no enforcing body; optional certification by accredited certification bodies',
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
    scope: 'Entities that store, process or transmit payment card data',
    enforcedBy: 'Compliance programmes run by payment brands, acquirers or others (PCI SSC says they decide who must comply)',
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
    scope: 'All Swift users (controls depend on architecture type)',
    enforcedBy: 'Swift’s own programme: users attest every year through the KYC-SA application',
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
    scope: 'Banks',
    enforcedBy: 'No legal force of its own (BCBS Charter); relies on BCBS members, which are banking supervisors and central banks',
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
      'https://www.bis.org/bcbs/charter.htm',
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
    scope: 'Financial market infrastructures (FMIs)',
    enforcedBy: 'FMI oversight and supervisory authorities (the guidance adds no new standards)',
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
    scope: 'Developers and web application security teams',
    enforcedBy: 'Voluntary / no enforcing body',
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
    scope: 'Web application developers and security testers',
    enforcedBy: 'Voluntary / no enforcing body',
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
    scope: 'Teams building LLM and generative AI applications',
    enforcedBy: 'Voluntary / no enforcing body',
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
    scope: 'Any organisation analysing information or operational risk',
    enforcedBy: 'Voluntary / no enforcing body; The Open Group runs the Open FAIR Certification Program',
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
  {
    id: 'global-mitre-attack',
    region: 'global',
    name: 'MITRE ATT&CK® knowledge base of adversary tactics and techniques',
    shortName: 'MITRE ATT&CK',
    issuer: 'The MITRE Corporation',
    jurisdiction: 'Global',
    type: 'Voluntary framework',
    version: 'ATT&CK v19.2, the current version since 28 April 2026 (previous: v18.1)',
    glance: 'v19.2 · Apr 2026',
    appliesTo:
      'Anyone: MITRE says ATT&CK is open and available to any person or organisation at no charge, and is used in the private sector, government and the security product and service community',
    scope: 'Anyone modelling threats (Enterprise, Mobile and ICS matrices)',
    enforcedBy: 'Voluntary / no enforcing body',
    summary:
      'A globally accessible knowledge base of adversary tactics and techniques based on real-world observations, with Enterprise, Mobile and ICS matrices. It is used as a foundation for building threat models and methodologies. Releases listed on ATT&CK’s updates pages raise the major version number; minor versions are smaller releases such as typo and data corrections.',
    links: [
      { label: 'attack.mitre.org', url: 'https://attack.mitre.org/' },
      { label: 'ATT&CK version history', url: 'https://attack.mitre.org/resources/versions/' },
    ],
    sources: ['https://attack.mitre.org/', 'https://attack.mitre.org/resources/versions/'],
  },
  {
    id: 'global-cis-controls',
    region: 'global',
    name: 'CIS Critical Security Controls® (CIS Controls)',
    shortName: 'CIS Controls',
    issuer: 'Center for Internet Security (CIS)',
    jurisdiction: 'Global',
    type: 'Voluntary framework',
    version: 'Version 8.1, an iterative update to v8 and the latest version offered on cisecurity.org',
    glance: 'v8.1',
    appliesTo: 'Organisations using them to strengthen their cybersecurity posture; CIS describes them as a prescriptive, prioritised and simplified set of best practices',
    scope: 'Any organisation wanting prioritised security safeguards',
    enforcedBy: 'Voluntary / no enforcing body',
    summary:
      'A prescriptive, prioritised set of CIS Safeguards to defend against the most prevalent cyber attacks, where each Safeguard asks you to do one thing. Version 8.1 realigned its mappings to NIST CSF 2.0, added the “Govern” security function, revised asset classes and Safeguard descriptions, and expanded the glossary.',
    links: [
      { label: 'CIS Controls v8.1 page', url: 'https://www.cisecurity.org/controls/v8-1' },
      { label: 'CIS Controls overview', url: 'https://www.cisecurity.org/controls' },
    ],
    sources: ['https://www.cisecurity.org/controls', 'https://www.cisecurity.org/controls/v8-1'],
  },
  {
    id: 'global-cobit-2019',
    region: 'global',
    name: 'COBIT® 2019 framework for the governance and management of enterprise information and technology',
    shortName: 'COBIT 2019',
    issuer: 'ISACA',
    jurisdiction: 'Global',
    type: 'Voluntary framework',
    version: 'COBIT 2019, an evolution of COBIT 5',
    glance: 'COBIT 2019',
    appliesTo: 'Enterprises governing and managing information and technology (I&T) across the enterprise',
    scope: 'Enterprises governing and managing I&T',
    enforcedBy: 'Voluntary / no enforcing body',
    summary:
      'A framework for enterprise governance of information and technology. Its core model sets out 40 governance and management objectives, each linked to processes and to alignment and enterprise goals, with design and implementation guides to tailor a governance system to the enterprise.',
    status:
      'In April 2026 ISACA said an update to COBIT is planned for later in 2026, with much of the content delivered digitally. Check isaca.org for the current release.',
    links: [{ label: 'ISACA COBIT page', url: 'https://www.isaca.org/resources/cobit' }],
    sources: [
      'https://www.isaca.org/resources/cobit',
      'https://www.isaca.org/resources/news-and-trends/newsletters/atisaca/2026/volume-8/celebrating-three-decades-of-cobit',
    ],
  },
  {
    id: 'global-aicpa-soc2-tsc',
    region: 'global',
    name: 'SOC 2® examinations and the 2017 Trust Services Criteria for Security, Availability, Processing Integrity, Confidentiality, and Privacy (With Revised Points of Focus – 2022)',
    shortName: 'SOC 2 / AICPA TSC',
    issuer: 'AICPA (criteria set by its Assurance Services Executive Committee, ASEC)',
    jurisdiction: 'Global (issued by the American Institute of CPAs)',
    type: 'Standard',
    version: '2017 Trust Services Criteria, with revised points of focus (2022)',
    glance: '2017 TSC (points of focus 2022)',
    appliesTo:
      'Service organisations that engage a CPA to examine and report on their controls over security, availability, processing integrity, confidentiality or privacy',
    scope: 'Service organisations reporting on their controls to customers',
    enforcedBy: 'No regulator: SOC 2 reports are issued by CPAs, and the AICPA sets the professional standards for SOC engagements',
    summary:
      'The Trust Services Criteria are control criteria for attestation or consulting engagements that evaluate and report on controls over the security, availability, processing integrity, confidentiality or privacy of information and systems. A SOC 2 report is a CPA’s examination of a service organisation’s controls relevant to those five categories, giving users information to assess the risks of outsourcing services to it.',
    status: 'AICPA’s download of the criteria requires a free AICPA & CIMA account; the resource page itself is public.',
    links: [
      {
        label: 'AICPA: 2017 Trust Services Criteria',
        url: 'https://www.aicpa-cima.com/resources/download/2017-trust-services-criteria-with-revised-points-of-focus-2022',
      },
      {
        label: 'AICPA: SOC suite of services',
        url: 'https://www.aicpa-cima.com/resources/landing/system-and-organization-controls-soc-suite-of-services',
      },
    ],
    sources: [
      'https://www.aicpa-cima.com/resources/download/2017-trust-services-criteria-with-revised-points-of-focus-2022',
      'https://www.aicpa-cima.com/resources/landing/system-and-organization-controls-soc-suite-of-services',
    ],
  },
]
