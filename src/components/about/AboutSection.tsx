"use client";

import { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

const interests = [
  { emoji: "🧠", label: "Machine Learning" },
  { emoji: "👁️", label: "Computer Vision" },
  { emoji: "💬", label: "NLP" },
  { emoji: "🐍", label: "Python" },
  { emoji: "🚀", label: "Open Source" },
  { emoji: "📚", label: "Deep Learning" },
  { emoji: "🎨", label: "UI Design" },
  { emoji: "☁️", label: "Cloud" },
];

export default function AboutSection() {
  const { ref, inView } = useInView();

  return (
    <section
      id="about"
      ref={ref}
      style={{
        padding: "8rem 0",
        background: "var(--bg-secondary)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle grid pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(26,26,26,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(26,26,26,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />

      <div className="container-wide" style={{ position: "relative" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5rem",
            alignItems: "center",
          }}
          className="grid-cols-about"
        >
          {/* Left: Text */}
          <div>
            <div
              className="section-label"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateX(0)" : "translateX(-20px)",
                transition: "all 0.7s ease 0.1s",
              }}
            >
              About Me
            </div>

            <h2
              style={{
                fontFamily: "'ClashDisplay', sans-serif",
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                fontWeight: 700,
                letterSpacing: "-0.025em",
                lineHeight: 1.1,
                color: "var(--text-primary)",
                marginBottom: "1.5rem",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(25px)",
                transition: "all 0.8s cubic-bezier(0.19,1,0.22,1) 0.2s",
              }}
            >
              Passionate about
              <br />
              <span style={{ color: "var(--accent-coral)" }}>intelligent systems</span>
              <br />& creative code.
            </h2>

            <div
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.8s ease 0.35s",
              }}
            >
              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.8,
                  color: "var(--text-secondary)",
                  marginBottom: "1.25rem",
                }}
              >
                Hi! I&apos;m Shreya — a Computer Science Engineering student at SRMCEM, Lucknow,
                currently in my 2nd year and deeply passionate about Artificial Intelligence
                and Python development. I love turning complex problems into elegant, working solutions.
              </p>
              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.8,
                  color: "var(--text-secondary)",
                  marginBottom: "1.5rem",
                }}
              >
                From building NLP-powered tools to training CNNs for agricultural impact,
                I believe technology should be purposeful. When I&apos;m not coding, I&apos;m exploring
                research papers, contributing to communities, or sketching out the next big idea.
              </p>

              {/* Fun facts */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                }}
              >
                {[
                  { icon: "🎓", text: "B.Tech CSE at SRMCEM — Class of 2029" },
                  { icon: "⭐", text: "CGPA 7.5 — Consistently top performer" },
                  { icon: "🌱", text: "Currently learning: Deep Learning & LLMs" },
                  { icon: "🎯", text: "Goal: Full Stack AI Engineer at a top tech company" },
                ].map((fact, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      padding: "0.625rem 1rem",
                      background: "var(--bg-primary)",
                      borderRadius: "10px",
                      border: "1px solid var(--border-light)",
                      opacity: inView ? 1 : 0,
                      transform: inView ? "translateX(0)" : "translateX(-15px)",
                      transition: `all 0.6s ease ${0.4 + i * 0.1}s`,
                    }}
                  >
                    <span style={{ fontSize: "1.1rem" }}>{fact.icon}</span>
                    <span style={{ fontSize: "0.875rem", color: "var(--text-secondary)", fontWeight: 500 }}>
                      {fact.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Visual card */}
          <div
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0) scale(1)" : "translateY(30px) scale(0.97)",
              transition: "all 0.9s cubic-bezier(0.19,1,0.22,1) 0.3s",
            }}
          >
            {/* Profile card */}
            <div
              style={{
                background: "var(--bg-primary)",
                borderRadius: "28px",
                border: "1px solid var(--border-light)",
                overflow: "hidden",
                boxShadow: "0 20px 80px rgba(0,0,0,0.06)",
              }}
            >
              {/* Card header with gradient */}
              <div
                style={{
                  height: "180px",
                  background: "linear-gradient(135deg, rgba(232,117,90,0.15) 0%, rgba(45,138,123,0.12) 50%, rgba(201,168,76,0.1) 100%)",
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* Avatar placeholder */}
                <div
                  style={{
                    width: "90px",
                    height: "90px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    border: "4px solid var(--bg-primary)",
                    boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
                    position: "absolute",
                    bottom: "-45px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
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
                    }}
                  />
                </div>
              </div>

              <div style={{ padding: "3.5rem 2rem 2rem", textAlign: "center" }}>
                <h3
                  style={{
                    fontFamily: "'ClashDisplay', sans-serif",
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    letterSpacing: "-0.02em",
                    color: "var(--text-primary)",
                    marginBottom: "0.25rem",
                  }}
                >
                  Shreya Srivastava
                </h3>
                <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", marginBottom: "1.25rem" }}>
                  CS Engineer · Python Dev · AI Enthusiast
                </p>

                {/* Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", justifyContent: "center", marginBottom: "1.5rem" }}>
                  {["Python", "Machine Learning", "AI", "OpenCV", "Flask"].map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>

                {/* Quick info */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "0.75rem",
                    borderTop: "1px solid var(--border-light)",
                    paddingTop: "1.25rem",
                  }}
                >
                  {[
                    { label: "Location", value: "Lucknow, India" },
                    { label: "College", value: "SRMCEM" },
                    { label: "Year", value: "2nd Year B.Tech" },
                    { label: "CGPA", value: "7.5 / 10" },
                  ].map((item) => (
                    <div key={item.label} style={{ textAlign: "left" }}>
                      <div style={{ fontSize: "0.7rem", fontWeight: 600, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.15rem" }}>
                        {item.label}
                      </div>
                      <div style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--text-primary)" }}>
                        {item.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Interests floating tags */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.5rem",
                marginTop: "1.25rem",
              }}
            >
              {interests.map((item, i) => (
                <div
                  key={item.label}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.375rem",
                    padding: "0.4rem 0.875rem",
                    background: "var(--bg-primary)",
                    border: "1px solid var(--border-light)",
                    borderRadius: "100px",
                    fontSize: "0.8rem",
                    fontWeight: 500,
                    color: "var(--text-secondary)",
                    opacity: inView ? 1 : 0,
                    transform: inView ? "translateY(0)" : "translateY(15px)",
                    transition: `all 0.5s ease ${0.5 + i * 0.06}s`,
                    cursor: "default",
                  }}
                >
                  <span>{item.emoji}</span>
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .grid-cols-about { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  );
}
