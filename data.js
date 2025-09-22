// Mock data for VeritasNews prototype
window.MockData = {
  stories: [
    {
      id: "grid-resilience-act",
      kicker: "Top Stories",
      title: "Senate Panel Advances Federal Grid Resilience Act",
      nutGraf:
        "The Senate Energy Committee voted 14–7 to advance a bill funding grid hardening and wildfire mitigation. If enacted, utilities would face new resilience standards; opponents warn of higher ratepayer costs.",
      time: new Date().toISOString(),
      coverageBar: [
        { outlet: "NYT", lean: "Left-Center", covered: true },
        { outlet: "Reuters", lean: "Center", covered: true },
        { outlet: "WSJ", lean: "Right-Center", covered: true },
        { outlet: "AP", lean: "Center", covered: true },
        { outlet: "Fox", lean: "Right", covered: false },
        { outlet: "CNN", lean: "Left-Center", covered: false }
      ],
      sourcesSummary: { outlets: 7, primaryDocs: 3 },
      summary:
        "The committee advanced a bipartisan package to fund grid hardening, wildfire mitigation, and baseline reliability upgrades. Supporters argue the bill modernizes aging infrastructure and clarifies resilience standards; critics warn about near-term rate impacts and regulatory burden.",
      blurbs: [
        {
          lean: "Left-Center",
          short:
            "Emphasizes wildfire risk reduction and long-term climate resilience.",
          cites: [
            {
              quote: "Reducing wildfire risk and updating protections for a hotter, drier West",
              outlet: "NYT",
              link: "https://example.com/nyt-grid",
            },
          ],
        },
        {
          lean: "Center",
          short:
            "Focuses on cost/benefit trade-offs and implementation timelines.",
          cites: [
            {
              quote: "The bill's costs would be spread across ratepayers over several years",
              outlet: "Reuters",
              link: "https://example.com/reuters-grid",
            },
          ],
        },
        {
          lean: "Right-Center",
          short:
            "Stresses regulatory burden and near-term rate impacts.",
          cites: [
            {
              quote: "A costly federal mandate that could raise bills in the near term",
              outlet: "WSJ",
              link: "https://example.com/wsj-grid",
            },
          ],
        },
      ],
      primarySources: [
        {
          title: "Bill text (PDF)",
          url: "https://example.com/bill.pdf",
          why: "Exact statutory language defining resilience standards.",
          status: "Available",
        },
        {
          title: "CBO preliminary score",
          url: "https://example.com/cbo",
          why: "Independent estimate of budgetary impact.",
          status: "Pending",
        },
        {
          title: "Majority press release",
          url: "https://example.com/majority",
          why: "Sponsors' stated intent and frame.",
          status: "Available",
        },
        {
          title: "Minority press release",
          url: "https://example.com/minority",
          why: "Opposition's key concerns and frame.",
          status: "Available",
        },
      ],
      coverageCards: [
        {
          outlet: "WSJ",
          lean: "Right-Center",
          angle:
            "Frames the bill as a costly mandate with near-term rate and compliance impacts.",
          pullQuote: "a costly federal mandate",
          url: "https://example.com/wsj-grid",
          partner: true,
        },
        {
          outlet: "NYT",
          lean: "Left-Center",
          angle:
            "Emphasizes wildfire mitigation and climate resilience benefits over decades.",
          pullQuote: "reduce wildfire risk across the West",
          url: "https://example.com/nyt-grid",
          partner: false,
        },
        {
          outlet: "Reuters",
          lean: "Center",
          angle: "Highlights timeline, cost breakdowns, and committee dynamics.",
          pullQuote: "costs spread over several years",
          url: "https://example.com/reuters-grid",
          partner: false,
        },
      ],
      article: {
        outlet: "WSJ",
        title: "Panel Advances Grid Bill as Utilities Brace for Compliance",
        byline: "By Jane Example",
        paragraphs: [
          {
            text:
              "The Senate Energy Committee advanced the Grid Resilience Act on Tuesday in a 14–7 vote, sending the bill to the full Senate.",
            flags: [],
          },
          {
            text:
              "Industry groups warned of a costly federal mandate that could raise bills in the near term, while sponsors said upgrades would curb wildfire risk and reduce outages.",
            flags: [
              {
                phrase: "costly federal mandate",
                reason: "emotionally charged wording / value signaling",
              },
              {
                phrase: "curb wildfire risk",
                reason: "issue emphasis (safety/climate benefit)",
              },
            ],
          },
          {
            text:
              "Regulators would define minimum resilience standards, and utilities would have five years to comply under the current draft.",
            flags: [
              {
                phrase: "minimum resilience standards",
                reason: "policy-alignment indicator",
              },
            ],
          },
        ],
      },
      digest: [
        {
          time: "8:05 AM",
          text: "Committee agenda published; sponsors confirm bipartisan support.",
        },
        {
          time: "10:42 AM",
          text: "Markup begins; two amendments ruled out of order.",
        },
        { time: "1:17 PM", text: "Vote recorded 14–7; bill advanced." },
        { time: "5:55 PM", text: "CBO score pending; expected this week." },
      ],
    },
    {
      id: "ev-charging-accelerator",
      kicker: "Infrastructure",
      title: "DOT Launches EV Charging Accelerator in 12 Corridors",
      nutGraf:
        "The Transportation Department named 12 priority highway corridors for fast-charging buildout, aiming to cut range anxiety and standardize payment. States will compete for grants tied to uptime targets.",
      time: new Date().toISOString(),
      coverageBar: [
        { outlet: "AP", lean: "Center", covered: true },
        { outlet: "Reuters", lean: "Center", covered: true },
        { outlet: "WSJ", lean: "Right-Center", covered: true },
        { outlet: "NYT", lean: "Left-Center", covered: true },
        { outlet: "Fox", lean: "Right", covered: false },
      ],
      sourcesSummary: { outlets: 6, primaryDocs: 2 },
      summary:
        "The initiative focuses on reliable, interoperable charging with card-tap payments and transparent pricing. Backers say it will accelerate EV adoption; skeptics worry about maintenance and rural viability.",
      blurbs: [
        { lean: "Left-Center", short: "Frames as climate and competitiveness milestone.", cites: [{ quote: "Uptime and standardization as adoption catalysts", outlet: "NYT", link: "https://example.com/nyt-ev" }] },
        { lean: "Center", short: "Emphasizes metrics and timelines for grant eligibility.", cites: [{ quote: "95% uptime target set for funded stations", outlet: "Reuters", link: "https://example.com/reu-ev" }] },
        { lean: "Right-Center", short: "Raises concerns over taxpayer costs and charger reliability.", cites: [{ quote: "Public funds backing a still-fragile network", outlet: "WSJ", link: "https://example.com/wsj-ev" }] },
      ],
      primarySources: [
        { title: "Program Notice", url: "https://example.com/dot-notice", why: "Defines eligibility, uptime, and interoperability.", status: "Available" },
        { title: "Grant FAQ", url: "https://example.com/dot-faq", why: "Clarifies state obligations and reporting.", status: "Available" },
      ],
      coverageCards: [
        { outlet: "NYT", lean: "Left-Center", angle: "Highlights EV adoption and manufacturing race.", pullQuote: "standardization lowers friction", url: "https://example.com/nyt-ev", partner: false },
        { outlet: "WSJ", lean: "Right-Center", angle: "Questions cost, demand, and upkeep.", pullQuote: "fragile network", url: "https://example.com/wsj-ev", partner: true },
      ],
      article: {
        outlet: "WSJ",
        title: "U.S. Targets Charger Reliability With New Corridor Plan",
        byline: "By Alex Sample",
        paragraphs: [
          { text: "Federal officials designated 12 corridors for high-speed charging to reduce range anxiety and harmonize access.", flags: [] },
          { text: "Backers say standard payment and 95% uptime will build confidence, while critics call it an expensive bet in thinly traveled stretches.", flags: [ { phrase: "expensive bet", reason: "emotionally charged wording" } ] },
          { text: "States can compete for grants if they adopt open standards, publish prices, and meet maintenance schedules.", flags: [ { phrase: "open standards", reason: "policy-alignment indicator" } ] },
        ],
      },
      digest: [
        { time: "9:10 AM", text: "Corridor list published; RFP window opens." },
        { time: "2:30 PM", text: "Two states announce joint applications." },
      ],
    },
    {
      id: "broadband-maps-revamp",
      kicker: "Connectivity",
      title: "FCC Revamps Broadband Maps to Tighten Grant Targeting",
      nutGraf:
        "The FCC released a new method that blends satellite and crowd-reporting to identify unserved homes with greater accuracy. Providers face deadlines to challenge entries.",
      time: new Date().toISOString(),
      coverageBar: [
        { outlet: "AP", lean: "Center", covered: true },
        { outlet: "Reuters", lean: "Center", covered: true },
        { outlet: "WSJ", lean: "Right-Center", covered: false },
        { outlet: "NYT", lean: "Left-Center", covered: true },
      ],
      sourcesSummary: { outlets: 5, primaryDocs: 2 },
      summary:
        "The update aims to steer funds to genuinely unserved areas. Local officials welcome the clarity; ISPs warn the process could mislabel service.",
      blurbs: [
        { lean: "Left-Center", short: "Focuses on digital equity and rural schools.", cites: [{ quote: "pinpointing gaps in the last mile", outlet: "NYT", link: "https://example.com/nyt-broadband" }] },
        { lean: "Center", short: "Weighs accuracy gains against administrative burden.", cites: [{ quote: "challenge window and new evidence rules", outlet: "Reuters", link: "https://example.com/reu-broadband" }] },
        { lean: "Right-Center", short: "Raises risk of overregulation and litigation.", cites: [{ quote: "liability if maps err", outlet: "Opinion", link: "https://example.com/op-broadband" }] },
      ],
      primarySources: [
        { title: "Methodology Note", url: "https://example.com/fcc-method", why: "Explains data fusion technique.", status: "Available" },
        { title: "Challenge Process Guide", url: "https://example.com/fcc-challenge", why: "Timeline and evidence requirements.", status: "Available" },
      ],
      coverageCards: [
        { outlet: "NYT", lean: "Left-Center", angle: "Targets rural digital divide.", pullQuote: "pinpoint unserved homes", url: "https://example.com/nyt-broadband", partner: false },
        { outlet: "Reuters", lean: "Center", angle: "Zooms in on challenge windows and ISP responses.", pullQuote: "challenge window", url: "https://example.com/reu-broadband", partner: false },
      ],
      article: {
        outlet: "NYT",
        title: "FCC’s New Map Could Reshape Broadband Grants",
        byline: "By Casey Demo",
        paragraphs: [
          { text: "The FCC unveiled an updated mapping method to better identify unserved addresses.", flags: [] },
          { text: "Local leaders say the clarity will help schools and clinics, while providers warn of mislabeling and red tape.", flags: [ { phrase: "red tape", reason: "emotionally charged wording" } ] },
          { text: "A formal challenge window invites evidence from ISPs and the public.", flags: [ { phrase: "challenge window", reason: "policy process" } ] },
        ],
      },
      digest: [
        { time: "11:00 AM", text: "Method note posted; webinar scheduled." },
        { time: "4:15 PM", text: "Providers begin filing challenges." },
      ],
    },
    {
      id: "grid-cyber-framework",
      kicker: "Security",
      title: "DOE Proposes Cyber Resilience Framework for Utilities",
      nutGraf:
        "A draft framework would tie grants to cyber hygiene, incident reporting, and vendor transparency. Utilities welcome clarity; smaller co-ops seek flexibility.",
      time: new Date().toISOString(),
      coverageBar: [
        { outlet: "Reuters", lean: "Center", covered: true },
        { outlet: "AP", lean: "Center", covered: true },
        { outlet: "WSJ", lean: "Right-Center", covered: true },
        { outlet: "Fox", lean: "Right", covered: false },
      ],
      sourcesSummary: { outlets: 4, primaryDocs: 2 },
      summary:
        "Draft rules aim to standardize reporting and procurement scrutiny to reduce systemic risk. Debate centers on cost and vendor certification timelines.",
      blurbs: [
        { lean: "Left-Center", short: "Sees public interest in transparency and resilience.", cites: [{ quote: "vendor bills of materials and patch cadence", outlet: "Policy Brief", link: "https://example.com/pb-cyber" }] },
        { lean: "Center", short: "Weighs reporting thresholds and harmonization with existing rules.", cites: [{ quote: "avoid duplicative requirements", outlet: "Reuters", link: "https://example.com/reu-cyber" }] },
        { lean: "Right-Center", short: "Warns of burdens on smaller providers.", cites: [{ quote: "compliance may strain small co-ops", outlet: "WSJ", link: "https://example.com/wsj-cyber" }] },
      ],
      primarySources: [
        { title: "Draft Framework PDF", url: "https://example.com/doe-draft", why: "Core requirements and timelines.", status: "Available" },
        { title: "Request for Comment", url: "https://example.com/doe-rfc", why: "Outlines questions for stakeholders.", status: "Available" },
      ],
      coverageCards: [
        { outlet: "WSJ", lean: "Right-Center", angle: "Pushes on vendor costs and delays.", pullQuote: "strain small providers", url: "https://example.com/wsj-cyber", partner: true },
        { outlet: "Reuters", lean: "Center", angle: "Details alignment with NERC/FERC rules.", pullQuote: "avoid duplication", url: "https://example.com/reu-cyber", partner: false },
      ],
      article: {
        outlet: "WSJ",
        title: "Utilities Face New Cyber Playbook Under DOE Draft",
        byline: "By Morgan Sample",
        paragraphs: [
          { text: "DOE floated a cyber framework linking grant funds to hygiene and reporting.", flags: [] },
          { text: "Small cooperatives warned compliance may strain budgets and staff.", flags: [ { phrase: "strain budgets", reason: "impact framing" } ] },
          { text: "Vendors would disclose software bills of materials and patch cadence.", flags: [ { phrase: "bills of materials", reason: "policy-alignment indicator" } ] },
        ],
      },
      digest: [
        { time: "10:05 AM", text: "Draft posted; 60-day comment clock starts." },
        { time: "3:45 PM", text: "Trade groups request small-entity flexibility." },
      ],
    },
    {
      id: "wildfire-hardening-grants",
      kicker: "Resilience",
      title: "USDA Opens Wildfire Hardening Grants for Rural Utilities",
      nutGraf:
        "Rural utilities can apply for funds to bury lines, clear vegetation, and upgrade reclosers. The program emphasizes high-risk counties and maintenance plans.",
      time: new Date().toISOString(),
      coverageBar: [
        { outlet: "AP", lean: "Center", covered: true },
        { outlet: "NYT", lean: "Left-Center", covered: true },
        { outlet: "WSJ", lean: "Right-Center", covered: true },
      ],
      sourcesSummary: { outlets: 4, primaryDocs: 2 },
      summary:
        "Proponents see targeted risk reduction; critics question long-term upkeep and rate effects.",
      blurbs: [
        { lean: "Left-Center", short: "Wildfire mitigation saves lives and lowers long-run costs.", cites: [{ quote: "burying lines in the highest-risk corridors", outlet: "NYT", link: "https://example.com/nyt-wildfire" }] },
        { lean: "Center", short: "Looks at maintenance schedules and audit trails.", cites: [{ quote: "maintenance plans as grant condition", outlet: "AP", link: "https://example.com/ap-wildfire" }] },
        { lean: "Right-Center", short: "Asks who pays and how soon bills rise.", cites: [{ quote: "rate impacts in near term", outlet: "WSJ", link: "https://example.com/wsj-wildfire" }] },
      ],
      primarySources: [
        { title: "NOFO", url: "https://example.com/usda-nofo", why: "Eligibility and scoring.", status: "Available" },
        { title: "Risk Map", url: "https://example.com/risk-map", why: "Prioritization by county risk.", status: "Available" },
      ],
      coverageCards: [
        { outlet: "WSJ", lean: "Right-Center", angle: "Raises rate and cost concerns.", pullQuote: "bills could rise", url: "https://example.com/wsj-wildfire", partner: true },
        { outlet: "NYT", lean: "Left-Center", angle: "Mitigation benefits in high-risk zones.", pullQuote: "burying lines", url: "https://example.com/nyt-wildfire", partner: false },
      ],
      article: {
        outlet: "WSJ",
        title: "Rural Utilities Eye Grants to Tame Wildfire Risk",
        byline: "By Riley Demo",
        paragraphs: [
          { text: "USDA opened applications for wildfire hardening in high-risk counties.", flags: [] },
          { text: "Critics say bills could rise as lines are buried and equipment upgraded.", flags: [ { phrase: "bills could rise", reason: "impact framing" } ] },
          { text: "Applicants must submit maintenance plans and audit trails for funded work.", flags: [ { phrase: "maintenance plans", reason: "policy requirement" } ] },
        ],
      },
      digest: [
        { time: "7:55 AM", text: "NOFO posted; webinars scheduled." },
        { time: "6:10 PM", text: "First co-op announces intent to apply." },
      ],
    },
    {
      id: "microgrid-pilots-cities",
      kicker: "Cities",
      title: "Five Cities Launch Microgrid Pilots for Critical Sites",
      nutGraf:
        "A coalition of cities will test microgrids at hospitals, shelters, and water plants to ride through outages. Projects blend solar, storage, and diesel backups.",
      time: new Date().toISOString(),
      coverageBar: [
        { outlet: "AP", lean: "Center", covered: true },
        { outlet: "Reuters", lean: "Center", covered: true },
        { outlet: "NYT", lean: "Left-Center", covered: true },
      ],
      sourcesSummary: { outlets: 5, primaryDocs: 2 },
      summary:
        "Pilots will test configurations and costs before broader rollout. Advocates cite resilience; critics caution about complexity and maintenance.",
      blurbs: [
        { lean: "Left-Center", short: "Resilience for hospitals and shelters.", cites: [{ quote: "keep ICUs powered during storms", outlet: "NYT", link: "https://example.com/nyt-microgrid" }] },
        { lean: "Center", short: "Careful measurement of costs and uptime.", cites: [{ quote: "pilot-first approach", outlet: "Reuters", link: "https://example.com/reu-microgrid" }] },
        { lean: "Right-Center", short: "Warns of integration and procurement risk.", cites: [{ quote: "vendor lock-in concerns", outlet: "Opinion", link: "https://example.com/op-microgrid" }] },
      ],
      primarySources: [
        { title: "Pilot MOUs", url: "https://example.com/mou", why: "Defines roles at critical sites.", status: "Available" },
        { title: "RFP Draft", url: "https://example.com/rfp", why: "Procurement method and milestones.", status: "Available" },
      ],
      coverageCards: [
        { outlet: "Reuters", lean: "Center", angle: "Focuses on costs, reliability, and vendor selection.", pullQuote: "pilot-first", url: "https://example.com/reu-microgrid", partner: false },
        { outlet: "NYT", lean: "Left-Center", angle: "Highlights resilience and climate adaptation.", pullQuote: "keep ICUs powered", url: "https://example.com/nyt-microgrid", partner: false },
      ],
      article: {
        outlet: "Reuters",
        title: "Cities Bet on Microgrids to Keep Critical Sites Online",
        byline: "By Jordan Sample",
        paragraphs: [
          { text: "Five cities launched microgrid pilots at hospitals and water plants.", flags: [] },
          { text: "Backers tout a pilot-first approach to manage risk and measure uptime.", flags: [ { phrase: "pilot-first approach", reason: "frame" } ] },
          { text: "Critics warn integration complexity can delay benefits and raise costs.", flags: [ { phrase: "raise costs", reason: "impact framing" } ] },
        ],
      },
      digest: [
        { time: "12:20 PM", text: "MOUs signed across five cities." },
        { time: "5:05 PM", text: "Draft RFP posted for comment." },
      ],
    },
  ],
};
