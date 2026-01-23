import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Steven Li",
  description: "Software engineer and angel investor in AI/ML infrastructure",
  metadataBase: new URL("https://stevenli.org"),
  openGraph: {
    title: "Steven Li",
    description: "Software engineer and angel investor in AI/ML infrastructure",
    url: "https://stevenli.org",
    siteName: "Steven Li",
    images: [
      {
        url: "/images/headshot.jpg",
        width: 400,
        height: 400,
        alt: "Steven Li",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Steven Li",
    description: "Software engineer and angel investor in AI/ML infrastructure",
    images: ["/images/headshot.jpg"],
    creator: "@levensti",
  },
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
