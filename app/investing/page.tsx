"use client";

import Image from "next/image";

const investments = [
  {
    company: "Sharpe",
    url: "https://sharpe.com",
    description: "Wealth management",
    stage: "Seed",
    coInvestors: "Unannounced",
    date: "Apr 2026",
    logo: "/images/logos/stealth_startup_logo.jpeg",
  },
  {
    company: "Applied Compute",
    url: "https://appliedcompute.com",
    description:
      "Building 'specific intelligence' for enterprises, unlocking the knowledge inside a company to train custom models and deploy an in-house agent workforce.",
    stage: "Series B",
    coInvestors: "Unannounced",
    date: "Jan 2026",
    logo: "/images/logos/applied_compute_logo.jpeg",
  },
  {
    company: "Recursive Superintelligence",
    url: "https://www.recursive.com",
    description:
      "New AI lab focused on building recursively self-improving superintelligence that is maximally knowledge-seeking.",
    stage: "Series A",
    coInvestors: "Unannounced",
    date: "Jan 2026",
    logo: "/images/logos/recursive_logo.jpeg",
  },
  {
    company: "Hillclimb",
    url: "https://hillclimb.com",
    description: "Math-focused RL environments for research labs",
    stage: "Seed",
    coInvestors: "Unannounced",
    date: "Dec 2025",
    logo: "/images/logos/hillclimb_logo.jpeg",
  },
  {
    company: "Trajectory",
    url: "https://trajectory.ai",
    description: "AI infra for continual learning",
    stage: "Seed",
    coInvestors: "Unannounced",
    date: "Dec 2025",
    logo: "/images/logos/stealth_startup_logo.jpeg",
  },
  {
    company: "Sail Research",
    url: "https://www.sailresearch.com/",
    description: "AI inference provider designed for background agents",
    stage: "Seed",
    coInvestors: "Unannounced",
    date: "Dec 2025",
    logo: "/images/logos/sail_logo.jpeg",
  },
  {
    company: "Factor Labs",
    url: "https://factor-labs.com",
    description: "Computer use agents",
    stage: "Seed",
    coInvestors: "Unannounced",
    date: "Dec 2025",
    logo: "/images/logos/factor_labs_logo.jpeg",
  },
  {
    company: "Corridor",
    url: "https://corridor.dev",
    description: "Security layer for AI coding",
    stage: "Series A",
    coInvestors: "Unannounced",
    date: "Oct 2025",
    logo: "/images/logos/corridor_logo.jpeg",
  },
  {
    company: "Modal",
    url: "https://modal.com",
    description: "Serverless platform for AI, data, and ML teams",
    stage: "Series B",
    coInvestors: "Lux, Redpoint",
    date: "Sep 2025",
    logo: "/images/logos/modal_labs_logo.jpeg",
  },
  {
    company: "Listen Labs",
    url: "https://listenlabs.ai",
    description: "Autonomous researcher for user insights",
    stage: "Series A",
    coInvestors: "Sequoia",
    date: "Jul 2025",
    logo: "/images/logos/listen_labs_logo.jpeg",
  },
  {
    company: "YouLearn",
    url: "https://youlearn.ai",
    description: "Personalized AI tutor for every student",
    stage: "Seed",
    coInvestors: "Unannounced",
    date: "Jun 2025",
    logo: "/images/logos/youlearn_logo.jpeg",
  },
  {
    company: "Supermemory",
    url: "https://supermemory.ai",
    description: "Universal memory API for the AI era",
    stage: "Pre-Seed",
    coInvestors: "Susa Ventures",
    date: "Jun 2025",
    logo: "/images/logos/supermemory_logo.jpeg",
  },
  {
    company: "Sherpa Labs",
    url: "https://sherpalabs.ai",
    description: "Agentic data team for ETL, modeling, and discovery",
    stage: "Seed",
    coInvestors: "Unannounced",
    date: "Mar 2025",
    logo: "/images/logos/sherpa_labs_ai_logo.jpeg",
  },
  {
    company: "Odyssey",
    url: "https://odyssey.systems",
    description: "Research lab building generative worlds",
    stage: "Series A",
    coInvestors: "GV, EQT Ventures",
    date: "Dec 2024",
    logo: "/images/logos/odyssey_logo.jpeg",
  },
  {
    company: "Mastra",
    url: "https://mastra.ai",
    description: "Framework for AI features with JS/TS",
    stage: "Pre-Seed",
    coInvestors: "Unannounced",
    date: "Dec 2024",
    logo: "/images/logos/mastra_ai_logo.jpeg",
  },
  {
    company: "Vendora",
    url: "https://vendora.com",
    description: "All-in-one grocery business management software",
    stage: "Pre-Seed",
    coInvestors: "Unannounced",
    date: "Oct 2023",
    logo: "/images/logos/vendora_logo.jpeg",
  },
  {
    company: "Tandem",
    url: "https://usetandem.com",
    description: "AI for prior authorizations and pharmacy coordination",
    stage: "Seed",
    coInvestors: "Thrive, General Catalyst, Bain",
    date: "Jun 2023",
    logo: "/images/logos/tandem_logo.jpeg",
  },
  {
    company: "Uprise",
    url: "https://uprise.us",
    description: "Embedded financial advisory for SMB platforms",
    stage: "Pre-Seed",
    coInvestors: "Blank Ventures, Dash Fund, Hustle Fund",
    date: "Jun 2023",
    logo: "/images/logos/uprise_logo.jpeg",
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
        Primarily interested in early-stage startups working on AI/ML/Data
        infrastructure, the domain in which I work, but always flexible on
        industry and stage for exceptional teams! Here are some of the companies
        I've backed.
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
                alignItems: "center",
                marginBottom: "4px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                {investment.logo && (
                  <Image
                    src={investment.logo}
                    alt={`${investment.company} logo`}
                    width={20}
                    height={20}
                    style={{
                      borderRadius: "4px",
                    }}
                  />
                )}
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
              </div>
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
              <span style={{ color: "#999" }}>
                {" "}
                · partnered at {investment.stage}
              </span>
              {investment.coInvestors && (
                <span style={{ color: "#999" }}>
                  {" "}
                  · alongside {investment.coInvestors}
                </span>
              )}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
