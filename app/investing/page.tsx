"use client";

const investments = [
  {
    company: "Recursive Superintelligence",
    url: "https://www.recursivesuperintelligence.ai",
    description: "AI research",
    stage: "Seed",
    date: "Jan 2026",
  },
  {
    company: "hillclimb",
    url: "https://hillclimb.ai",
    description: "Math-focused RL environments for research labs",
    stage: "Seed",
    date: "Dec 2025",
  },
  {
    company: "Trajectory AI",
    url: "https://trajectoryai.com",
    description: "AI company",
    stage: "Seed",
    date: "Dec 2025",
  },
  {
    company: "Sail Research",
    url: "https://sail.dev",
    description: "AI research",
    stage: "Seed",
    date: "Dec 2025",
  },
  {
    company: "Factor Labs",
    url: "https://factorlabs.ai",
    description: "AI company",
    stage: "Seed",
    date: "Dec 2025",
  },
  {
    company: "Corridor",
    url: "https://corridor.dev",
    description: "Security layer for AI coding",
    stage: "Series A",
    date: "Oct 2025",
  },
  {
    company: "Modal",
    url: "https://modal.com",
    description: "Serverless platform for AI, data, and ML teams",
    stage: "Series B",
    coInvestors: "Lux, Redpoint",
    date: "Sep 2025",
  },
  {
    company: "Listen Labs",
    url: "https://listenlabs.ai",
    description: "Autonomous researcher for user insights",
    stage: "Series A",
    coInvestors: "Sequoia",
    date: "Jul 2025",
  },
  {
    company: "YouLearn",
    url: "https://youlearn.ai",
    description: "Personalized AI tutor for every student",
    stage: "Seed",
    date: "Jun 2025",
  },
  {
    company: "supermemory",
    url: "https://supermemory.ai",
    description: "Universal memory API for the AI era",
    stage: "Pre-Seed",
    date: "Jun 2025",
  },
  {
    company: "Sherpa Labs",
    url: "https://sherpalabs.ai",
    description: "Agentic data team for ETL, modeling, and discovery",
    stage: "Seed",
    date: "Mar 2025",
  },
  {
    company: "Odyssey",
    url: "https://odyssey.systems",
    description: "Research lab building generative worlds",
    stage: "Series A",
    coInvestors: "GV, EQT Ventures",
    date: "Dec 2024",
  },
  {
    company: "Mastra",
    url: "https://mastra.ai",
    description: "Framework for AI features with JS/TS",
    stage: "Pre-Seed",
    date: "Dec 2024",
  },
  {
    company: "Vendora",
    url: "https://vendora.com",
    description: "All-in-one grocery business management software",
    stage: "Pre-Seed",
    date: "Oct 2023",
  },
  {
    company: "Tandem",
    url: "https://usetandem.com",
    description: "AI for prior authorizations and pharmacy coordination",
    stage: "Seed",
    coInvestors: "Thrive, General Catalyst, Bain",
    date: "Jun 2023",
  },
  {
    company: "Uprise",
    url: "https://uprise.us",
    description: "Embedded financial advisory for SMB platforms",
    stage: "Pre-Seed",
    coInvestors: "Blank Ventures, Dash Fund, Hustle Fund",
    date: "Jun 2023",
  },
];

export default function Investing() {
  return (
    <main>
      <h1
        style={{
          fontSize: "22px",
          fontWeight: 600,
          marginBottom: "16px",
          letterSpacing: "-0.02em",
        }}
      >
        Investing
      </h1>

      <p
        style={{
          fontSize: "15px",
          lineHeight: 1.75,
          color: "#444",
          marginBottom: "36px",
        }}
      >
        I angel invest in early-stage startups and serve as a Scout at Felicis.
        Here are some of the companies I've backed.
      </p>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
        }}
      >
        {investments.map((investment) => (
          <div key={investment.company}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                marginBottom: "4px",
              }}
            >
              <a
                href={investment.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontWeight: 500,
                  fontSize: "15px",
                  color: "#111",
                  textDecoration: "none",
                  borderBottom: "1px solid #ccc",
                  paddingBottom: "1px",
                  transition: "border-color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#111";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#ccc";
                }}
              >
                {investment.company}
              </a>
              <span
                style={{
                  fontSize: "13px",
                  color: "#999",
                }}
              >
                {investment.date}
              </span>
            </div>
            <p
              style={{
                fontSize: "14px",
                color: "#666",
                lineHeight: 1.5,
              }}
            >
              {investment.description}
              <span style={{ color: "#999" }}> · {investment.stage}</span>
              {investment.coInvestors && (
                <span style={{ color: "#999" }}>
                  {" "}
                  · with {investment.coInvestors}
                </span>
              )}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
