"use client";

import { useEffect, useRef, useState } from "react";

const ROLES = [
  "Python Developer",
  "AI Enthusiast",
  "Problem Solver",
  "CS Engineer",
  "Future AI Engineer",
];

function TypewriterText() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <span
      style={{
        color: "var(--accent-coral)",
        borderRight: "2px solid var(--accent-coral)",
        paddingRight: "2px",
        animation: "blink 1s step-end infinite",
      }}
    >
      {displayed}
      <style>{`
        @keyframes blink { 0%, 100% { border-color: transparent; } 50% { border-color: var(--accent-coral); } }
      `}</style>
    </span>
  );
}

// Floating particles in background
function HeroParticles() {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            width: `${Math.random() * 4 + 1}px`,
            height: `${Math.random() * 4 + 1}px`,
            background:
              i % 3 === 0
                ? "var(--accent-coral)"
                : i % 3 === 1
                ? "var(--accent-teal)"
                : "var(--accent-gold)",
            borderRadius: "50%",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.3 + 0.1,
            animation: `float ${Math.random() * 4 + 4}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 4}s`,
          }}
        />
      ))}
    </div>
  );
}

// Decorative geometric shapes
function GeometricDecoration() {
  return (
    <>
      {/* Top right orbit */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          right: "8%",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          border: "1px solid rgba(232,117,90,0.12)",
          animation: "spin 20s linear infinite",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-4px",
            left: "50%",
            width: "8px",
            height: "8px",
            background: "var(--accent-coral)",
            borderRadius: "50%",
            transform: "translateX(-50%)",
            boxShadow: "0 0 12px var(--accent-coral)",
          }}
        />
      </div>
      {/* Inner orbit */}
      <div
        style={{
          position: "absolute",
          top: "calc(15% + 50px)",
          right: "calc(8% + 50px)",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          border: "1px solid rgba(45,138,123,0.12)",
          animation: "spin 14s linear infinite reverse",
        }}
      >
        <div
          style={{
            position: "absolute",
            bottom: "-4px",
            left: "50%",
            width: "6px",
            height: "6px",
            background: "var(--accent-teal)",
            borderRadius: "50%",
            transform: "translateX(-50%)",
            boxShadow: "0 0 10px var(--accent-teal)",
          }}
        />
      </div>
      {/* Bottom left gradient blob */}
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "-5%",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(45,138,123,0.08) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(40px)",
          animation: "float 8s ease-in-out infinite",
        }}
      />
      {/* Top left gradient blob */}
      <div
        style={{
          position: "absolute",
          top: "5%",
          left: "5%",
          width: "350px",
          height: "350px",
          background: "radial-gradient(circle, rgba(232,117,90,0.06) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(40px)",
          animation: "float 10s ease-in-out infinite reverse",
        }}
      />
    </>
  );
}

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const [mounted, setMounted] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);

    const handleMouse = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      setMousePos({
        x: (e.clientX / innerWidth - 0.5) * 20,
        y: (e.clientY / innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      style={{
        minHeight: "100dvh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        background: "var(--bg-primary)",
        paddingTop: "6rem",
      }}
    >
      {/* Background gradient */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(232,117,90,0.07) 0%, rgba(45,138,123,0.04) 50%, transparent 100%)",
          pointerEvents: "none",
        }}
      />

      <GeometricDecoration />
      {mounted && <HeroParticles />}

      <div className="container-wide" style={{ position: "relative", zIndex: 1, width: "100%" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 0.8fr",
            gap: "4rem",
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* Left Column: Existing content */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "3rem",
              alignItems: "center",
              maxWidth: "900px",
            }}
          >
            {/* Availability badge */}
            <div
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.8s cubic-bezier(0.19,1,0.22,1) 0.2s",
              }}
            >
              <div className="availability-badge" style={{ display: "inline-flex" }}>
                <div className="availability-dot" />
                Open to Internships & Collaborations
              </div>
            </div>

            {/* Main heading */}
            <div
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(30px)",
                transition: "all 0.9s cubic-bezier(0.19,1,0.22,1) 0.35s",
              }}
            >
              <h1
                style={{
                  fontFamily: "'ClashDisplay', sans-serif",
                  fontSize: "clamp(3rem, 8vw, 7rem)",
                  fontWeight: 700,
                  lineHeight: 1.0,
                  letterSpacing: "-0.03em",
                  color: "var(--text-primary)",
                  marginBottom: "0.5rem",
                }}
              >
                Shreya
                <br />
                <span
                  style={{
                    background: "linear-gradient(135deg, var(--accent-coral) 0%, #f4a87d 50%, var(--accent-gold) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Srivastava
                </span>
              </h1>
            </div>

            {/* Role typewriter */}
            <div
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.8s cubic-bezier(0.19,1,0.22,1) 0.5s",
                fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
                fontWeight: 500,
                color: "var(--text-secondary)",
                letterSpacing: "-0.01em",
              }}
            >
              {mounted && <TypewriterText />}
            </div>

            {/* Description */}
            <div
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.8s cubic-bezier(0.19,1,0.22,1) 0.65s",
              }}
            >
              <p
                style={{
                  fontSize: "1.05rem",
                  lineHeight: 1.75,
                  color: "var(--text-muted)",
                  maxWidth: "560px",
                }}
              >
                2nd Year B.Tech CSE student at{" "}
                <strong style={{ color: "var(--text-secondary)" }}>SRMCEM, Lucknow</strong>{" "}
                with a CGPA of{" "}
                <strong style={{ color: "var(--accent-coral)" }}>7.5</strong>. Building intelligent systems
                that solve real problems — from emotion AI to crop disease detection.
                Passionate about the intersection of Python, machine learning, and impactful software.
              </p>
            </div>

            {/* CTAs */}
            <div
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.8s cubic-bezier(0.19,1,0.22,1) 0.8s",
                display: "flex",
                gap: "1rem",
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              <button
                className="btn-primary"
                onClick={() => {
                  document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <span>View Projects</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </button>
              <button
                className="btn-secondary"
                onClick={() => {
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <span>Get in Touch</span>
              </button>

              {/* Social links */}
              <div style={{ display: "flex", gap: "0.5rem", marginLeft: "0.5rem" }}>
                {[
                  {
                    href: "https://github.com/shreya-srivastava",
                    label: "GitHub",
                    icon: (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                    ),
                  },
                  {
                    href: "https://linkedin.com/in/shreya-srivastava-2aa255381",
                    label: "LinkedIn",
                    icon: (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    ),
                  },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      border: "1px solid var(--border-medium)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--text-muted)",
                      transition: "all 0.3s cubic-bezier(0.175,0.885,0.32,1.275)",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.color = "var(--accent-coral)";
                      el.style.borderColor = "var(--accent-coral)";
                      el.style.transform = "translateY(-3px)";
                      el.style.background = "rgba(232,117,90,0.06)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.color = "var(--text-muted)";
                      el.style.borderColor = "var(--border-medium)";
                      el.style.transform = "translateY(0)";
                      el.style.background = "transparent";
                    }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Stats row */}
            <div
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.8s cubic-bezier(0.19,1,0.22,1) 1s",
                display: "flex",
                gap: "2.5rem",
                flexWrap: "wrap",
                paddingTop: "1rem",
                borderTop: "1px solid var(--border-light)",
                marginTop: "0.5rem",
              }}
            >
              {[
                { value: "7.5", label: "CGPA" },
                { value: "5+", label: "Projects Built" },
                { value: "2nd", label: "Year CSE" },
                { value: "AI", label: "Focused" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div
                    style={{
                      fontFamily: "'ClashDisplay', sans-serif",
                      fontSize: "1.75rem",
                      fontWeight: 700,
                      letterSpacing: "-0.03em",
                      color: "var(--text-primary)",
                      lineHeight: 1,
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 500,
                      color: "var(--text-muted)",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      marginTop: "0.25rem",
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Profile Photo */}
          <div
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0) scale(1)" : "translateY(30px) scale(0.95)",
              transition: "all 0.9s cubic-bezier(0.19,1,0.22,1) 0.6s",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
            className="hero-photo-container"
          >
            <div
              style={{
                position: "relative",
                width: "280px",
                height: "360px",
                borderRadius: "24px",
                padding: "8px",
                background: "linear-gradient(135deg, var(--accent-coral) 0%, var(--accent-teal) 50%, var(--accent-gold) 100%)",
                boxShadow: "0 20px 50px rgba(0, 0, 0, 0.08)",
                transition: "transform 0.5s var(--ease-spring)",
              }}
              className="hover:scale-[1.03] transition-transform duration-500"
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "18px",
                  overflow: "hidden",
                  background: "var(--bg-secondary)",
                  position: "relative",
                }}
              >
                <img
                  src="/profile.jpg"
                  alt="Shreya Srivastava"
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center 20%",
                    transition: "transform 0.7s var(--ease-expo)",
                  }}
                  className="hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: "absolute",
            bottom: "-3rem",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
            opacity: mounted ? 0.5 : 0,
            transition: "opacity 0.8s ease 1.2s",
          }}
        >
          <div
            style={{
              fontSize: "0.65rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
              fontWeight: 600,
            }}
          >
            Scroll
          </div>
          <div
            style={{
              width: "1px",
              height: "40px",
              background: "linear-gradient(to bottom, var(--accent-coral), transparent)",
              animation: "scroll-line 2s ease-in-out infinite",
            }}
          />
          <style>{`
            @keyframes scroll-line {
              0% { transform: scaleY(0); transform-origin: top; }
              50% { transform: scaleY(1); transform-origin: top; }
              51% { transform: scaleY(1); transform-origin: bottom; }
              100% { transform: scaleY(0); transform-origin: bottom; }
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}
