"use client";

const investments = [
  {
    company: "Company Name",
    url: "https://example.com",
    description: "Brief description of what the company does",
    stage: "Seed",
    coInvestors: "Notable Fund, Another VC",
    date: "2024",
  },
  {
    company: "Another Company",
    url: "https://example.com",
    description: "What this startup is building",
    stage: "Pre-Seed",
    date: "2024",
  },
  {
    company: "Third Investment",
    url: "https://example.com",
    description: "Description of the business",
    stage: "Seed",
    coInvestors: "Top Tier VC",
    date: "2023",
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
        I angel invest in early-stage startups. Here are some of the companies
        I've backed.
      </p>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "4px",
        }}
      >
        {investments.map((investment) => (
          <a
            key={investment.company}
            href={investment.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block",
              padding: "16px",
              margin: "0 -16px",
              borderRadius: "8px",
              textDecoration: "none",
              color: "inherit",
              transition: "background-color 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.03)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                marginBottom: "4px",
              }}
            >
              <span
                style={{
                  fontWeight: 500,
                  fontSize: "15px",
                  color: "#111",
                }}
              >
                {investment.company}
              </span>
              <span
                style={{
                  fontSize: "13px",
                  color: "#999",
                }}
              >
                {investment.stage}
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
              {investment.coInvestors && (
                <span style={{ color: "#999" }}>
                  {" "}
                  · with {investment.coInvestors}
                </span>
              )}
            </p>
          </a>
        ))}
      </div>
    </main>
  );
}
