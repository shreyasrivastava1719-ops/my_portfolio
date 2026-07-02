"use client";

import { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.05) {
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

const milestones = [
  {
    label: "Now",
    title: "2nd Year B.Tech CSE",
    desc: "Building projects, learning fundamentals, CGPA 8.5",
    icon: "📍",
    color: "var(--accent-coral)",
    status: "current",
  },
  {
    label: "2024",
    title: "Master DSA",
    desc: "Arrays, Trees, Graphs, DP — LeetCode 200+ problems",
    icon: "🧩",
    color: "var(--accent-teal)",
    status: "upcoming",
  },
  {
    label: "2024",
    title: "Advanced Python & Backend",
    desc: "Django, FastAPI, system design, async programming",
    icon: "🐍",
    color: "var(--accent-royal)",
    status: "upcoming",
  },
  {
    label: "2025",
    title: "Machine Learning Mastery",
    desc: "Regression to advanced ensemble methods, Kaggle competitions",
    icon: "🤖",
    color: "var(--accent-gold)",
    status: "upcoming",
  },
  {
    label: "2025",
    title: "Deep Learning & CV",
    desc: "CNNs, RNNs, Transformers, computer vision pipelines",
    icon: "👁️",
    color: "var(--accent-emerald)",
    status: "upcoming",
  },
  {
    label: "2025",
    title: "LLMs & Generative AI",
    desc: "Fine-tuning, RAG systems, agents, prompt engineering",
    icon: "✨",
    color: "var(--accent-coral)",
    status: "upcoming",
  },
  {
    label: "2026",
    title: "Open Source Contributor",
    desc: "Contribute to major AI libraries and research tools",
    icon: "🌐",
    color: "var(--accent-teal)",
    status: "future",
  },
  {
    label: "2026",
    title: "AI Research & Internship",
    desc: "Research publication + internship at top tech company",
    icon: "🔬",
    color: "var(--accent-royal)",
    status: "future",
  },
  {
    label: "2027",
    title: "Software Engineer",
    desc: "Graduate, land SWE role at a product company",
    icon: "💼",
    color: "var(--accent-gold)",
    status: "future",
  },
  {
    label: "2028+",
    title: "AI Engineer & Founder",
    desc: "Build AI products that create real-world impact",
    icon: "🚀",
    color: "var(--accent-coral)",
    status: "future",
  },
];

export default function RoadmapSection() {
  const { ref, inView } = useInView();
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section
      id="roadmap"
      ref={ref}
      style={{
        padding: "8rem 0",
        background: "var(--bg-secondary)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Space-like background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse 80% 50% at 50% 100%, rgba(27,94,142,0.06) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      {/* Decorative stars */}
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            background: "var(--text-muted)",
            borderRadius: "50%",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.2 + 0.05,
            pointerEvents: "none",
          }}
        />
      ))}

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
            Future Roadmap
          </div>
          <h2
            style={{
              fontFamily: "'ClashDisplay', sans-serif",
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 700,
              letterSpacing: "-0.025em",
              color: "var(--text-primary)",
            }}
          >
            The{" "}
            <span style={{ color: "var(--accent-royal)" }}>Journey</span>{" "}
            Ahead
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: "var(--text-muted)",
              marginTop: "0.75rem",
              maxWidth: "480px",
              margin: "0.75rem auto 0",
            }}
          >
            From sophomore student to AI engineer — every step mapped out with intention.
          </p>
        </div>

        {/* Timeline */}
        <div
          style={{
            position: "relative",
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          {/* Center line */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: 0,
              bottom: 0,
              width: "2px",
              background: "linear-gradient(to bottom, var(--accent-coral) 0%, var(--accent-teal) 40%, var(--accent-royal) 70%, rgba(27,94,142,0.1) 100%)",
              transform: "translateX(-50%)",
              zIndex: 0,
            }}
            className="roadmap-center-line"
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {milestones.map((m, i) => {
              const isLeft = i % 2 === 0;
              const isActive = m.status === "current";
              const isFuture = m.status === "future";

              return (
                <div
                  key={i}
                  onClick={() => setActiveIdx(i)}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr auto 1fr",
                    gap: "2rem",
                    alignItems: "center",
                    cursor: "pointer",
                    paddingBottom: i < milestones.length - 1 ? "2.5rem" : "0",
                    opacity: inView ? 1 : 0,
                    transform: inView ? "translateY(0)" : "translateY(20px)",
                    transition: `all 0.6s ease ${0.1 + i * 0.07}s`,
                  }}
                  className="roadmap-row"
                >
                  {/* Left content */}
                  <div style={{ textAlign: "right" }}>
                    {isLeft ? (
                      <div
                        style={{
                          padding: "1.25rem 1.5rem",
                          background: activeIdx === i ? `${m.color}12` : "var(--bg-primary)",
                          border: `1.5px solid ${activeIdx === i ? m.color + "40" : "var(--border-light)"}`,
                          borderRadius: "16px",
                          transition: "all 0.3s ease",
                          display: "inline-block",
                          textAlign: "left",
                          maxWidth: "280px",
                        }}
                      >
                        <div
                          style={{
                            fontSize: "0.7rem",
                            fontWeight: 700,
                            color: m.color,
                            letterSpacing: "0.1em",
                            marginBottom: "0.375rem",
                            textTransform: "uppercase",
                          }}
                        >
                          {m.label}
                        </div>
                        <div
                          style={{
                            fontFamily: "'ClashDisplay', sans-serif",
                            fontSize: "1rem",
                            fontWeight: 700,
                            color: "var(--text-primary)",
                            marginBottom: "0.375rem",
                            letterSpacing: "-0.015em",
                          }}
                        >
                          {m.title}
                        </div>
                        <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", lineHeight: 1.5 }}>
                          {m.desc}
                        </div>
                      </div>
                    ) : (
                      <div />
                    )}
                  </div>

                  {/* Center node */}
                  <div style={{ display: "flex", justifyContent: "center", position: "relative", zIndex: 1 }}>
                    <div
                      style={{
                        width: isActive ? "52px" : "44px",
                        height: isActive ? "52px" : "44px",
                        borderRadius: "50%",
                        background: isActive
                          ? m.color
                          : isFuture
                          ? "var(--bg-secondary)"
                          : `${m.color}20`,
                        border: `2px solid ${isActive ? m.color : isFuture ? "var(--border-light)" : m.color + "50"}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.2rem",
                        transition: "all 0.4s ease",
                        boxShadow: isActive
                          ? `0 0 24px ${m.color}50, 0 0 8px ${m.color}30`
                          : "none",
                      }}
                    >
                      {m.icon}
                    </div>
                  </div>

                  {/* Right content */}
                  <div style={{ textAlign: "left" }}>
                    {!isLeft ? (
                      <div
                        style={{
                          padding: "1.25rem 1.5rem",
                          background: activeIdx === i ? `${m.color}12` : "var(--bg-primary)",
                          border: `1.5px solid ${activeIdx === i ? m.color + "40" : "var(--border-light)"}`,
                          borderRadius: "16px",
                          transition: "all 0.3s ease",
                          display: "inline-block",
                          maxWidth: "280px",
                        }}
                      >
                        <div
                          style={{
                            fontSize: "0.7rem",
                            fontWeight: 700,
                            color: m.color,
                            letterSpacing: "0.1em",
                            marginBottom: "0.375rem",
                            textTransform: "uppercase",
                          }}
                        >
                          {m.label}
                        </div>
                        <div
                          style={{
                            fontFamily: "'ClashDisplay', sans-serif",
                            fontSize: "1rem",
                            fontWeight: 700,
                            color: "var(--text-primary)",
                            marginBottom: "0.375rem",
                            letterSpacing: "-0.015em",
                          }}
                        >
                          {m.title}
                        </div>
                        <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", lineHeight: 1.5 }}>
                          {m.desc}
                        </div>
                      </div>
                    ) : (
                      <div />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .roadmap-center-line { left: 24px !important; }
          .roadmap-row { grid-template-columns: auto 1fr !important; }
        }
      `}</style>
    </section>
  );
}
