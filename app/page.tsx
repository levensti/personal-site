import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          marginBottom: "32px",
        }}
      >
        <Image
          src="/images/headshot.jpg"
          alt="Steven Li"
          width={56}
          height={56}
          style={{
            borderRadius: "50%",
          }}
        />
        <h1
          style={{
            fontSize: "22px",
            fontWeight: 600,
            letterSpacing: "-0.02em",
          }}
        >
          Steven Li
        </h1>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "18px",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "#444",
        }}
      >
        <p>
          I'm a Staff Software Engineer and Tech Lead at Meta's Superintelligence
          Lab (MSL), where I lead ML infrastructure for aligning multimedia
          generation models. I built and own the Synthetic Data Platform, AutoEval,
          and RedOps — systems used by 20+ teams to support launches across all
          Meta AI media products.
        </p>

        <p>
          I also angel invest in early-stage startups and serve as a Scout at
          Felicis. Previously, I started two companies (one exit), and wrote for
          Forbes interviewing founders of billion-dollar companies like Scale AI,
          Brex, and Webflow.
        </p>

        <p>
          I studied Computer Science and Statistics at the University of Illinois
          Urbana-Champaign. Based in the Bay Area.
        </p>

        <div
          style={{
            display: "flex",
            gap: "20px",
            marginTop: "12px",
            fontSize: "14px",
          }}
        >
          <a
            href="mailto:levensti@gmail.com"
            style={{
              color: "#666",
              textDecoration: "none",
              borderBottom: "1px solid #ddd",
              paddingBottom: "1px",
            }}
          >
            Email
          </a>
          <a
            href="https://twitter.com/levensti"
            style={{
              color: "#666",
              textDecoration: "none",
              borderBottom: "1px solid #ddd",
              paddingBottom: "1px",
            }}
          >
            Twitter
          </a>
          <a
            href="https://linkedin.com/in/levensti"
            style={{
              color: "#666",
              textDecoration: "none",
              borderBottom: "1px solid #ddd",
              paddingBottom: "1px",
            }}
          >
            LinkedIn
          </a>
        </div>
      </div>
    </main>
  );
}
