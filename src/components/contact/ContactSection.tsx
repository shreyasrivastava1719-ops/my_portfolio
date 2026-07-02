"use client";

import { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/shreya-srivastava-2aa255381",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    color: "var(--accent-royal)",
  },
  {
    label: "GitHub",
    href: "https://github.com/shreya-srivastava",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
    color: "var(--text-primary)",
  },
  {
    label: "Email",
    href: "mailto:shreya.srivastava@example.com",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    color: "var(--accent-coral)",
  },
];

export default function ContactSection() {
  const { ref, inView } = useInView();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 1800);
  };

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        padding: "8rem 0",
        background: "var(--bg-secondary)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background gradient */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(232,117,90,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="container-wide" style={{ position: "relative" }}>
        {/* Header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "4rem",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s ease 0.1s",
          }}
        >
          <div className="section-label" style={{ justifyContent: "center" }}>
            Contact
          </div>
          <h2
            style={{
              fontFamily: "'ClashDisplay', sans-serif",
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 700,
              letterSpacing: "-0.025em",
              color: "var(--text-primary)",
              marginBottom: "0.75rem",
            }}
          >
            Let&apos;s Build Something{" "}
            <span style={{ color: "var(--accent-coral)" }}>Together</span>
          </h2>
          <p style={{ fontSize: "1rem", color: "var(--text-muted)", maxWidth: "450px", margin: "0 auto" }}>
            Open to internships, collaborations, and interesting projects. Say hello!
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.5fr",
            gap: "4rem",
            alignItems: "start",
          }}
          className="contact-grid"
        >
          {/* Left: Info */}
          <div
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateX(0)" : "translateX(-25px)",
              transition: "all 0.8s ease 0.2s",
            }}
          >
            <div
              style={{
                fontFamily: "'ClashDisplay', sans-serif",
                fontSize: "1.75rem",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                color: "var(--text-primary)",
                marginBottom: "1rem",
              }}
            >
              Let&apos;s connect!
            </div>
            <p
              style={{
                fontSize: "0.9rem",
                lineHeight: 1.75,
                color: "var(--text-secondary)",
                marginBottom: "2rem",
              }}
            >
              I&apos;m always excited to hear about new opportunities, interesting problems to solve,
              or just to chat about AI and technology. Feel free to reach out!
            </p>

            {/* Info items */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}>
              {[
                {
                  icon: "📍",
                  label: "Location",
                  value: "Lucknow, Uttar Pradesh, India",
                },
                {
                  icon: "🎓",
                  label: "Institution",
                  value: "SRMCEM — B.Tech CSE, 2nd Year",
                },
                {
                  icon: "✅",
                  label: "Availability",
                  value: "Open to internships (Summer 2025)",
                },
                {
                  icon: "📧",
                  label: "Email",
                  value: "shreya.srivastava@example.com",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.875rem",
                    padding: "0.875rem 1.125rem",
                    background: "var(--bg-primary)",
                    borderRadius: "12px",
                    border: "1px solid var(--border-light)",
                  }}
                >
                  <span style={{ fontSize: "1rem", marginTop: "1px" }}>{item.icon}</span>
                  <div>
                    <div
                      style={{
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        color: "var(--text-muted)",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        marginBottom: "0.2rem",
                      }}
                    >
                      {item.label}
                    </div>
                    <div style={{ fontSize: "0.875rem", fontWeight: 500, color: "var(--text-primary)" }}>
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div style={{ display: "flex", gap: "0.75rem" }}>
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    border: "1.5px solid var(--border-light)",
                    background: "var(--bg-primary)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--text-muted)",
                    textDecoration: "none",
                    transition: "all 0.3s cubic-bezier(0.175,0.885,0.32,1.275)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.color = link.color;
                    el.style.borderColor = link.color;
                    el.style.transform = "translateY(-4px)";
                    el.style.background = `${link.color}08`;
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.color = "var(--text-muted)";
                    el.style.borderColor = "var(--border-light)";
                    el.style.transform = "translateY(0)";
                    el.style.background = "var(--bg-primary)";
                  }}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateX(0)" : "translateX(25px)",
              transition: "all 0.8s ease 0.3s",
            }}
          >
            {status === "sent" ? (
              <div
                style={{
                  padding: "4rem 2.5rem",
                  background: "var(--bg-primary)",
                  borderRadius: "24px",
                  border: "1px solid var(--border-light)",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🎉</div>
                <h3
                  style={{
                    fontFamily: "'ClashDisplay', sans-serif",
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    letterSpacing: "-0.02em",
                    color: "var(--text-primary)",
                    marginBottom: "0.75rem",
                  }}
                >
                  Message Sent!
                </h3>
                <p style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>
                  Thanks for reaching out. I&apos;ll get back to you within 24 hours!
                </p>
                <button
                  onClick={() => { setStatus("idle"); setFormData({ name: "", email: "", message: "" }); }}
                  className="btn-secondary"
                  style={{ marginTop: "1.5rem" }}
                >
                  Send another
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{
                  padding: "2.5rem",
                  background: "var(--bg-primary)",
                  borderRadius: "24px",
                  border: "1px solid var(--border-light)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.25rem",
                  boxShadow: "0 10px 60px rgba(0,0,0,0.04)",
                }}
              >
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "1rem",
                  }}
                  className="form-row"
                >
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.78rem",
                        fontWeight: 600,
                        color: "var(--text-secondary)",
                        marginBottom: "0.5rem",
                        letterSpacing: "0.02em",
                      }}
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="Jane Smith"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.78rem",
                        fontWeight: 600,
                        color: "var(--text-secondary)",
                        marginBottom: "0.5rem",
                        letterSpacing: "0.02em",
                      }}
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="jane@company.com"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="input-field"
                    />
                  </div>
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.78rem",
                      fontWeight: 600,
                      color: "var(--text-secondary)",
                      marginBottom: "0.5rem",
                      letterSpacing: "0.02em",
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    placeholder="Hi Shreya, I'd love to discuss..."
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="input-field"
                    style={{ resize: "none" }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.625rem",
                    padding: "1rem 2rem",
                    background: status === "sending"
                      ? "var(--text-muted)"
                      : "var(--text-primary)",
                    color: "var(--bg-primary)",
                    borderRadius: "12px",
                    border: "none",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    cursor: status === "sending" ? "not-allowed" : "pointer",
                    transition: "all 0.3s ease",
                    letterSpacing: "0.01em",
                  }}
                  onMouseEnter={(e) => {
                    if (status !== "sending") {
                      (e.currentTarget as HTMLElement).style.background = "var(--accent-coral)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (status !== "sending") {
                      (e.currentTarget as HTMLElement).style.background = "var(--text-primary)";
                    }
                  }}
                >
                  {status === "sending" ? (
                    <>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        style={{ animation: "spin 1s linear infinite" }}
                      >
                        <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" opacity=".25" />
                        <path d="M21 12a9 9 0 01-9-9" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="22" y1="2" x2="11" y2="13" />
                        <polygon points="22 2 15 22 11 13 2 9 22 2" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
