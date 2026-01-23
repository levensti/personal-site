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
          I'm currently a Staff Software Engineer leading ML infrastructure for aligning media generation models at Meta Superintelligence
          Labs (MSL). My work encompasses large-scale synthetic data generation and curation, automated model evaluations, and human annotation. These systems are used by ~20 teams to support model development across all Meta AI media products.
          <br />
          <br />
          I'm also an active angel investor, both personally and as a scout at{" "}
          <a
            href="https://felicis.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#111",
              textDecoration: "none",
              borderBottom: "1px solid #ccc",
              paddingBottom: "1px",
            }}
          >
            Felicis
          </a>
          , a venture firm with over $3 billion in assets under management that has made early investments in companies like Notion, Canva, Plaid, Shopify, and many more totaling over $100 billion in market cap.
          <br />
          <br />
          Prior to MSL, I built two companies, including{" "}
          <a
            href="https://brightroom.ai"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#111",
              textDecoration: "none",
              borderBottom: "1px solid #ccc",
              paddingBottom: "1px",
            }}
          >
            Brightroom
          </a>{" "}
          (acquired early 2025), an applied AI copilot to help students put their best foot forward in applying to their dream schools. Before that, I studied Computer Science and Statistics at the University of Illinois Urbana-Champaign.
          <br />
          <br />  
          Broadly, my technical interests lie in building distributed systems that optimize AI research productivity.

          <br />  
          <br />  
          Please feel free to reach out.

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
