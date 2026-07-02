"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: scrolled ? "0.75rem 0" : "1.25rem 0",
        transition: "all 0.4s cubic-bezier(0.19, 1, 0.22, 1)",
        background: scrolled
          ? "rgba(250, 250, 248, 0.88)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(26,26,26,0.06)" : "none",
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
            fontFamily: "'ClashDisplay', sans-serif",
            fontSize: "1.15rem",
            fontWeight: 700,
            color: "var(--text-primary)",
            letterSpacing: "-0.02em",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          SS<span style={{ color: "var(--accent-coral)" }}>.</span>
        </button>

        {/* Desktop Nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}
          className="hidden md:flex">
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

        {/* Right Actions */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          {/* Dark mode toggle */}
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
            }}
          >
            {isDark ? "☀️" : "🌙"}
          </button>

          {/* Resume button */}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); scrollTo("#contact"); }}
            className="btn-primary"
            style={{ padding: "0.6rem 1.25rem", fontSize: "0.85rem" }}
          >
            <span>Let&apos;s Talk</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "8px",
              border: "1px solid var(--border-light)",
              background: "var(--bg-secondary)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              gap: "4px",
            }}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  width: "16px",
                  height: "1.5px",
                  background: "var(--text-primary)",
                  borderRadius: "1px",
                  transition: "all 0.3s ease",
                  transformOrigin: "center",
                  transform: menuOpen
                    ? i === 0 ? "rotate(45deg) translate(4px, 4px)"
                    : i === 1 ? "scaleX(0)"
                    : "rotate(-45deg) translate(4px, -4px)"
                    : "none",
                }}
              />
            ))}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            background: "rgba(250,250,248,0.97)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid var(--border-light)",
            padding: "1rem 0 1.5rem",
          }}
        >
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              style={{
                display: "block",
                width: "100%",
                padding: "0.875rem 2rem",
                textAlign: "left",
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: "1rem",
                fontWeight: 500,
                color: "var(--text-secondary)",
                transition: "color 0.2s ease",
              }}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
