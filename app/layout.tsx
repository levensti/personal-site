import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Your Name",
  description: "Personal website",
};

const navLinkStyle = {
  color: "#555",
  textDecoration: "none",
  paddingBottom: "2px",
  borderBottom: "1.5px solid transparent",
  transition: "all 0.2s ease",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={GeistSans.className}
        style={{ backgroundColor: "#fafaf9" }}
      >
        <div
          style={{
            maxWidth: "650px",
            margin: "0 auto",
            padding: "48px 24px",
          }}
        >
          <nav
            style={{
              display: "flex",
              gap: "28px",
              marginBottom: "56px",
              fontSize: "15px",
            }}
          >
            <Link
              href="/"
              className="nav-link"
              style={navLinkStyle}
            >
              About
            </Link>
            <Link
              href="/investing"
              className="nav-link"
              style={navLinkStyle}
            >
              Investing
            </Link>
          </nav>
          {children}
        </div>
      </body>
    </html>
  );
}
