export default function WeeklyRevenuePage() {
  const revenue = [
    { day: "Mon", value: 42 },
    { day: "Tue", value: 48 },
    { day: "Wed", value: 58 },
    { day: "Thu", value: 64 },
    { day: "Fri", value: 72 },
    { day: "Sat", value: 69 },
    { day: "Sun", value: 81 },
  ];

  return (
    <main className="app-shell">
      <section className="section">
        <article className="card">
          <div className="section-title">
            <div>
              <h2>Weekly revenue</h2>
              <p>Trailing seven-day performance.</p>
            </div>
            <span className="pill">$92.8k collected</span>
          </div>
          <div style={{ marginTop: "22px", width: "100%", overflowX: "auto" }}>
            <svg
              width="100%"
              height="220"
              viewBox="0 0 700 220"
              style={{ minWidth: "500px" }}
              aria-label="Weekly revenue trend"
            >
              <defs>
                <linearGradient id="bar-gradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#2a9d66" />
                  <stop offset="100%" stopColor="#146c43" />
                </linearGradient>
              </defs>
              {revenue.map((point, i) => {
                const barWidth = 48;
                const spacing = 100;
                const x = i * spacing + (spacing - barWidth) / 2;
                const barHeight = point.value * 2;
                const y = 190 - barHeight;

                return (
                  <g key={point.day}>
                    <rect
                      x={x}
                      y={y}
                      width={barWidth}
                      height={barHeight}
                      fill="url(#bar-gradient)"
                      rx="8"
                    />
                    <text
                      x={x + barWidth / 2}
                      y="210"
                      fill="var(--text-soft, #617068)"
                      fontSize="14"
                      textAnchor="middle"
                      fontFamily="inherit"
                    >
                      {point.day}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
        </article>
      </section>
    </main>
  );
}
