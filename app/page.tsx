import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>Tax, in plain words.</h1>
          <p>
            Free, open, honest UK tax guides. Understand what you pay, why you
            pay it, and where it goes. No account, no paywall, no jargon.
          </p>
          <div className="hero-grid">
            <Link href="/learn" className="hero-card" style={{ textDecoration: "none" }}>
              <h3>Learn</h3>
              <p>VAT, Income Tax, Corporation Tax, PAYE, CGT — explained simply.</p>
              <span className="arrow">Read the guides →</span>
            </Link>
            <Link href="/transparency" className="hero-card" style={{ textDecoration: "none" }}>
              <h3>Transparency</h3>
              <p>See where every £1 of your tax goes. NHS, education, defense, welfare.</p>
              <span className="arrow">See the breakdown →</span>
            </Link>
            <Link href="/compare" className="hero-card" style={{ textDecoration: "none" }}>
              <h3>Compare</h3>
              <p>Sole trader vs LTD, salary vs dividend, UK vs Ireland, sensible vs risky.</p>
              <span className="arrow">Compare side by side →</span>
            </Link>
            <Link href="/tools" className="hero-card" style={{ textDecoration: "none" }}>
              <h3>Tools</h3>
              <p>VAT, take-home pay, and dividend calculators. Type and see.</p>
              <span className="arrow">Use the calculators →</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}