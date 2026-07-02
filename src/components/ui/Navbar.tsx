"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));

    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);

    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  // Close menu when clicking outside
  useEffect(() => {
    if (!menuOpen) return;
    const close = () => setMenuOpen(false);
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, [menuOpen]);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: scrolled ? "0.6rem 0" : "1.25rem 0",
        transition: "all 0.4s cubic-bezier(0.19, 1, 0.22, 1)",
        background: scrolled || menuOpen ? "var(--bg-glass)" : "transparent",
        backdropFilter: scrolled || menuOpen ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled || menuOpen ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border-light)" : "none",
        boxShadow: scrolled ? "var(--shadow-glass)" : "none",
      }}
    >
      <div
        className="container-wide"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.625rem",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
            flexShrink: 0,
          }}
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="logo-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--accent-coral)" />
                <stop offset="100%" stopColor="var(--accent-gold)" />
              </linearGradient>
              <linearGradient id="logo-grad-2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="var(--accent-teal)" />
                <stop offset="100%" stopColor="var(--accent-royal)" />
              </linearGradient>
            </defs>
            <circle cx="50" cy="50" r="42" stroke="var(--border-medium)" strokeWidth="2" strokeDasharray="4 4" />
            <path
              d="M30 40 C30 25, 45 20, 50 20 C62 20, 70 28, 70 38 C70 52, 30 48, 30 62 C30 72, 38 80, 50 80 C65 80, 70 70, 70 65"
              stroke="url(#logo-grad-1)"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M70 60 C70 75, 55 80, 50 80 C38 80, 30 72, 30 62 C30 48, 70 52, 70 38 C70 28, 62 20, 50 20 C35 20, 30 30, 30 35"
              stroke="url(#logo-grad-2)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.8"
            />
          </svg>
          <span
            style={{
              fontFamily: "'ClashDisplay', sans-serif",
              fontSize: "1.1rem",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "var(--text-primary)",
            }}
          >
            Shreya<span style={{ color: "var(--accent-coral)" }}>.</span>
          </span>
        </button>

        {/* Desktop Nav — hidden on mobile via JS-driven isMobile */}
        {!isMobile && (
          <nav style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                style={{
                  padding: "0.5rem 1rem",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  color: "var(--text-secondary)",
                  borderRadius: "8px",
                  transition: "all 0.2s ease",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "var(--accent-coral)";
                  (e.currentTarget as HTMLElement).style.background = "rgba(232,117,90,0.06)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)";
                  (e.currentTarget as HTMLElement).style.background = "none";
                }}
              >
                {link.label}
              </button>
            ))}
          </nav>
        )}

        {/* Right Actions */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
          {/* Dark mode toggle — always visible */}
          <button
            onClick={() => setIsDark(!isDark)}
            aria-label="Toggle dark mode"
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              border: "1px solid var(--border-light)",
              background: "var(--bg-secondary)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "0.9rem",
              transition: "all 0.3s ease",
              flexShrink: 0,
            }}
          >
            {isDark ? "☀️" : "🌙"}
          </button>

          {/* "Let's Talk" — desktop only */}
          {!isMobile && (
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollTo("#contact"); }}
              className="btn-primary"
              style={{ padding: "0.6rem 1.25rem", fontSize: "0.85rem", textDecoration: "none" }}
            >
              <span>Let&apos;s Talk</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
          )}

          {/* Hamburger — mobile only */}
          {isMobile && (
            <button
              onClick={(e) => { e.stopPropagation(); setMenuOpen(!menuOpen); }}
              aria-label="Toggle menu"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "10px",
                border: "1px solid var(--border-light)",
                background: "var(--bg-secondary)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                gap: "5px",
                flexShrink: 0,
              }}
            >
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  style={{
                    display: "block",
                    width: "18px",
                    height: "2px",
                    background: "var(--text-primary)",
                    borderRadius: "2px",
                    transition: "all 0.3s ease",
                    transformOrigin: "center",
                    transform: menuOpen
                      ? i === 0
                        ? "rotate(45deg) translate(5px, 5px)"
                        : i === 1
                        ? "scaleX(0) opacity(0)"
                        : "rotate(-45deg) translate(5px, -5px)"
                      : "none",
                    opacity: menuOpen && i === 1 ? 0 : 1,
                  }}
                />
              ))}
            </button>
          )}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobile && (
        <div
          onClick={(e) => e.stopPropagation()}
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            background: "var(--bg-glass)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            borderBottom: "1px solid var(--border-light)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.12)",
            // Animate open/close with max-height + opacity
            maxHeight: menuOpen ? "400px" : "0px",
            opacity: menuOpen ? 1 : 0,
            overflow: "hidden",
            transition: "max-height 0.4s cubic-bezier(0.19,1,0.22,1), opacity 0.3s ease",
            pointerEvents: menuOpen ? "all" : "none",
          }}
        >
          <div style={{ padding: "0.75rem 0 1.25rem" }}>
            {navLinks.map((link, i) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  width: "100%",
                  padding: "0.875rem 1.5rem",
                  textAlign: "left",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "1rem",
                  fontWeight: 500,
                  color: "var(--text-secondary)",
                  transition: "all 0.2s ease",
                  borderLeft: "2px solid transparent",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.color = "var(--accent-coral)";
                  el.style.background = "rgba(232,117,90,0.05)";
                  el.style.borderLeftColor = "var(--accent-coral)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.color = "var(--text-secondary)";
                  el.style.background = "none";
                  el.style.borderLeftColor = "transparent";
                }}
              >
                <span style={{
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  color: "var(--text-muted)",
                  letterSpacing: "0.08em",
                  minWidth: "18px",
                }}>
                  0{i + 1}
                </span>
                {link.label}
              </button>
            ))}

            {/* Mobile CTA at bottom of menu */}
            <div style={{ padding: "0.75rem 1.5rem 0", borderTop: "1px solid var(--border-light)", marginTop: "0.5rem" }}>
              <button
                onClick={() => scrollTo("#contact")}
                style={{
                  width: "100%",
                  padding: "0.875rem 1.5rem",
                  background: "linear-gradient(135deg, var(--accent-coral), var(--accent-royal))",
                  color: "white",
                  border: "none",
                  borderRadius: "12px",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  letterSpacing: "0.01em",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                }}
              >
                Let&apos;s Talk
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
