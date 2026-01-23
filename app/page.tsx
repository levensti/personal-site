export default function Home() {
  return (
    <main>
      <h1
        style={{
          fontSize: "22px",
          fontWeight: 600,
          marginBottom: "28px",
          letterSpacing: "-0.02em",
        }}
      >
        Your Name
      </h1>

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
          Write a paragraph about yourself here. Who you are, what you do, and
          what you're passionate about. This is your introduction to visitors.
        </p>

        <p>
          Add another paragraph about your background, experience, or current
          focus. What projects are you working on? What problems do you care
          about solving?
        </p>

        <p>
          Include any other relevant information - where you're based, what
          you're looking for, or how people can get in touch with you.
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
            href="mailto:your@email.com"
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
            href="https://twitter.com/yourusername"
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
            href="https://linkedin.com/in/yourusername"
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
