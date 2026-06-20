import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "TaxSorted — Understand your taxes in plain words",
  description:
    "Free, open UK tax guides, spending transparency, tax comparisons, and instant calculators. No account needed.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <nav className="nav">
          <div className="nav-inner">
            <Link href="/" className="nav-brand">
              Tax<span>Sorted</span>
            </Link>
            <div className="nav-links">
              <Link href="/learn">Learn</Link>
              <Link href="/transparency">Transparency</Link>
              <Link href="/compare">Compare</Link>
              <Link href="/tools">Tools</Link>
            </div>
          </div>
        </nav>
        {children}
        <footer className="footer">
          <div className="footer-inner">
            <p>
              TaxSorted — free, open, honest. Built from love, not extraction.
            </p>
            <div className="footer-links">
              <Link href="/learn">Learn</Link>
              <Link href="/transparency">Transparency</Link>
              <Link href="/compare">Compare</Link>
              <Link href="/tools">Tools</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}