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
  ],
};
