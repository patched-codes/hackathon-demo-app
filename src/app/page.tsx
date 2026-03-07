"use client";

const metrics = [
  { label: "Net revenue", value: "$128.4k", trend: "+12.8%" },
  { label: "Active users", value: "8,492", trend: "+6.2%" },
  { label: "Renewal rate", value: "94.1%", trend: "+1.4%" },
  { label: "Support SLA", value: "98.6%", trend: "+0.9%" },
];

const revenue = [
  { day: "Mon", value: 42 },
  { day: "Tue", value: 48 },
  { day: "Wed", value: 58 },
  { day: "Thu", value: 64 },
  { day: "Fri", value: 72 },
  { day: "Sat", value: 69 },
  { day: "Sun", value: 81 },
];

const pipeline = [
  { name: "Qualified", value: 64, amount: "$410k" },
  { name: "Proposal", value: 38, amount: "$244k" },
  { name: "Negotiation", value: 21, amount: "$132k" },
];

const activity = [
  { title: "Enterprise plan expanded", detail: "Northwind added 184 seats across three teams." },
  { title: "Payment recovery completed", detail: "14 accounts returned to active after retry logic update." },
  { title: "Risk alert resolved", detail: "EU region latency normalized after edge cache purge." },
];

export default function HomePage() {
  return (
    <main className="app-shell">
      <section className="hero">
        <div className="topbar">
          <div>
            <p className="eyebrow">Opsboard</p>
            <span className="topbar-subtle">Executive overview</span>
          </div>
          <div className="topbar-actions">
            <span className="pill">Mar 7 snapshot</span>
            <button className="button button-secondary" onClick={() => window.print()}>
              Print
            </button>
            <a className="button button-secondary" href="#activity">
              Export report
            </a>
          </div>
        </div>

        <div className="hero-grid">
          <div className="hero-copy">
            <h1>Revenue is pacing ahead of forecast this week.</h1>
            <p>Expansion revenue led growth while churn stayed below plan across core accounts.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#metrics">
                View metrics
              </a>
              <a className="button button-secondary" href="#pipeline">
                Open pipeline
              </a>
            </div>
          </div>

          <aside className="hero-highlight">
            <p className="eyebrow">Forecast</p>
            <span className="stat">$1.24m</span>
            <p>Projected monthly close based on current run rate and weighted pipeline coverage.</p>
            <div className="highlight-meta">
              <div>
                <strong>+9.4%</strong>
                <span>vs target</span>
              </div>
              <div>
                <strong>31</strong>
                <span>days left</span>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="section" id="metrics">
        <div className="section-title">
          <div>
            <h2>Performance summary</h2>
            <p>Core commercial and customer health metrics.</p>
          </div>
          <span className="pill pill-positive">All systems healthy</span>
        </div>

        <div className="metrics-grid">
          {metrics.map((metric) => (
            <article className="metric-card" key={metric.label}>
              <p>{metric.label}</p>
              <strong>{metric.value}</strong>
              <span className="trend">{metric.trend} vs last week</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="details-grid">
          <article className="card">
            <div className="section-title">
              <div>
                <h2>Weekly revenue</h2>
                <p>Trailing seven-day performance.</p>
              </div>
              <span className="pill">$92.8k collected</span>
            </div>
            <div className="chart" aria-label="Weekly revenue trend">
              {revenue.map((point) => (
                <div className="bar" key={point.day}>
                  <div className="bar-fill" style={{ height: `${point.value}%` }} />
                  <span className="bar-label">{point.day}</span>
                </div>
              ))}
            </div>
          </article>

          <article className="card" id="pipeline">
            <div className="section-title">
              <div>
                <h2>Pipeline stages</h2>
                <p>Weighted opportunities expected this month.</p>
              </div>
            </div>
            <div className="pipeline-list">
              {pipeline.map((item) => (
                <div className="pipeline-row" key={item.name}>
                  <div>
                    <strong>{item.name}</strong>
                    <p>{item.value} deals</p>
                  </div>
                  <span>{item.amount}</span>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="section" id="activity">
        <div className="section-title">
          <div>
            <h2>Recent activity</h2>
            <p>High-signal events across sales, billing, and platform operations.</p>
          </div>
          <span className="pill">Last 24 hours</span>
        </div>
        <div className="activity-list">
          {activity.map((item) => (
            <div className="activity-item" key={item.title}>
              <div className="activity-dot" />
              <div>
                <strong>{item.title}</strong>
                <p>{item.detail}</p>
              </div>
              <span className="activity-time">Just now</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
