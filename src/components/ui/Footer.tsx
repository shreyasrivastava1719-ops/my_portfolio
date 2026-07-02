"use client";

export default function Footer() {
  return (
    <footer
      style={{
        padding: "3rem 0",
        background: "var(--bg-primary)",
        borderTop: "1px solid var(--border-light)",
      }}
    >
      <div
        className="container-wide"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1.5rem",
        }}
      >
        {/* Logo */}
        <div>
          <div
            style={{
              fontFamily: "'ClashDisplay', sans-serif",
              fontSize: "1.25rem",
              fontWeight: 700,
              color: "var(--text-primary)",
              letterSpacing: "-0.02em",
              marginBottom: "0.25rem",
            }}
          >
            SS<span style={{ color: "var(--accent-coral)" }}>.</span>
          </div>
          <p style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
            Built with ❤️ by Shreya Srivastava
          </p>
        </div>

        {/* Center: links */}
        <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
          {["About", "Skills", "Projects", "Roadmap", "Contact"].map((item) => (
            <button
              key={item}
              onClick={() =>
                document
                  .querySelector(`#${item.toLowerCase()}`)
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: "0.85rem",
                fontWeight: 500,
                color: "var(--text-muted)",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--accent-coral)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-muted)")}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Right: copyright */}
        <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
          © 2024 Shreya Srivastava
        </div>
      </div>
    </footer>
  );
}
