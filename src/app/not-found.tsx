import Link from "next/link";

export default function NotFound() {
  return (
    <main className="app-shell">
      <section className="hero">
        <p className="eyebrow">Not found</p>
        <h1>That page is gone.</h1>
        <p>This project was reduced to a single dashboard route for fast demos.</p>
        <div className="hero-actions">
          <Link className="button button-primary" href="/">
            Back to dashboard
          </Link>
        </div>
      </section>
    </main>
  );
}
