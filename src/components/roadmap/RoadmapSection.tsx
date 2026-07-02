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

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= breakpoint);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [breakpoint]);
  return isMobile;
}

const milestones = [
  {
    label: "Now · 2026",
    title: "2nd Year B.Tech CSE",
    desc: "Building projects, deepening fundamentals — CGPA 7.5/10 at SRMCEM",
    icon: "📍",
    color: "var(--accent-coral)",
    status: "current",
  },
  {
    label: "2026",
    title: "Master DSA & Problem Solving",
    desc: "Arrays, Trees, Graphs, DP — LeetCode 200+ problems, competitive programming",
    icon: "🧩",
    color: "var(--accent-teal)",
    status: "upcoming",
  },
  {
    label: "2026",
    title: "Advanced Python & Backend",
    desc: "Django, FastAPI, REST APIs, system design, async programming",
    icon: "🐍",
    color: "var(--accent-royal)",
    status: "upcoming",
  },
  {
    label: "2026 – 2027",
    title: "Machine Learning Mastery",
    desc: "Core ML algorithms, ensemble methods, Kaggle competitions & real datasets",
    icon: "🤖",
    color: "var(--accent-gold)",
    status: "upcoming",
  },
  {
    label: "2027",
    title: "Deep Learning & Computer Vision",
    desc: "CNNs, RNNs, Transformers, vision pipelines and production model deployment",
    icon: "👁️",
    color: "var(--accent-emerald)",
    status: "upcoming",
  },
  {
    label: "2027",
    title: "LLMs & Generative AI",
    desc: "Fine-tuning, RAG systems, AI agents, prompt engineering, LangChain",
    icon: "✨",
    color: "var(--accent-coral)",
    status: "future",
  },
  {
    label: "2027 – 2028",
    title: "Open Source & Research",
    desc: "Contribute to major AI/ML libraries, publish research, grow GitHub presence",
    icon: "🌐",
    color: "var(--accent-teal)",
    status: "future",
  },
  {
    label: "2028 – 2029",
    title: "AI Internship at Top Company",
    desc: "Land internship at a product-led AI company — Google, Microsoft, or a unicorn startup",
    icon: "🔬",
    color: "var(--accent-royal)",
    status: "future",
  },
  {
    label: "2029",
    title: "Graduation — B.Tech CSE",
    desc: "Graduate with strong AI portfolio, open source presence & research experience",
    icon: "🎓",
    color: "var(--accent-gold)",
    status: "future",
  },
  {
    label: "2030+",
    title: "AI Engineer & Founder",
    desc: "Build AI products that create real-world impact — own company or AI leadership role",
    icon: "🚀",
    color: "var(--accent-emerald)",
    status: "future",
  },
];

function MilestoneCard({
  m,
  i,
  activeIdx,
}: {
  m: (typeof milestones)[0];
  i: number;
  activeIdx: number;
}) {
  return (
    <div
      style={{
        padding: "1.25rem 1.5rem",
        background: activeIdx === i ? `${m.color}12` : "var(--bg-primary)",
        border: `1.5px solid ${activeIdx === i ? m.color + "40" : "var(--border-light)"}`,
        borderRadius: "16px",
        transition: "all 0.3s ease",
        textAlign: "left",
        width: "100%",
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
  );
}

function MilestoneNode({
  m,
  isActive,
  isFuture,
}: {
  m: (typeof milestones)[0];
  isActive: boolean;
  isFuture: boolean;
}) {
  return (
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
          border: `2px solid ${
            isActive ? m.color : isFuture ? "var(--border-light)" : m.color + "50"
          }`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1.2rem",
          transition: "all 0.4s ease",
          flexShrink: 0,
          boxShadow: isActive
            ? `0 0 24px ${m.color}50, 0 0 8px ${m.color}30`
            : "none",
        }}
      >
        {m.icon}
      </div>
    </div>
  );
}

export default function RoadmapSection() {
  const { ref, inView } = useInView();
  const [activeIdx, setActiveIdx] = useState(0);
  const isMobile = useIsMobile();

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
      {/* Background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 50% at 50% 100%, rgba(27,94,142,0.06) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      {/* Stars */}
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
            The <span style={{ color: "var(--accent-royal)" }}>Journey</span> Ahead
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: "var(--text-muted)",
              maxWidth: "480px",
              margin: "0.75rem auto 0",
            }}
          >
            From sophomore student to AI engineer — every step mapped out with intention.
          </p>
        </div>

        {/* Timeline container */}
        <div style={{ position: "relative", maxWidth: "900px", margin: "0 auto" }}>
          {/* Vertical line — centered on desktop, left-aligned on mobile */}
          <div
            style={{
              position: "absolute",
              left: isMobile ? "20px" : "50%",
              top: 0,
              bottom: 0,
              width: "2px",
              background:
                "linear-gradient(to bottom, var(--accent-coral) 0%, var(--accent-teal) 40%, var(--accent-royal) 70%, rgba(27,94,142,0.1) 100%)",
              transform: isMobile ? "none" : "translateX(-50%)",
              zIndex: 0,
            }}
          />

          <div style={{ display: "flex", flexDirection: "column" }}>
            {milestones.map((m, i) => {
              const isLeft = i % 2 === 0;
              const isActive = m.status === "current";
              const isFuture = m.status === "future";

              /* ── MOBILE: node left, card right ── */
              if (isMobile) {
                return (
                  <div
                    key={i}
                    onClick={() => setActiveIdx(i)}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "48px 1fr",
                      gap: "0.875rem",
                      alignItems: "flex-start",
                      cursor: "pointer",
                      paddingBottom: i < milestones.length - 1 ? "1.75rem" : "0",
                      opacity: inView ? 1 : 0,
                      transform: inView ? "translateY(0)" : "translateY(20px)",
                      transition: `all 0.6s ease ${0.1 + i * 0.07}s`,
                    }}
                  >
                    <MilestoneNode m={m} isActive={isActive} isFuture={isFuture} />
                    <div style={{ paddingTop: "4px" }}>
                      <MilestoneCard m={m} i={i} activeIdx={activeIdx} />
                    </div>
                  </div>
                );
              }

              /* ── DESKTOP: alternating left/right ── */
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
                >
                  {/* Left slot */}
                  <div style={{ textAlign: "right" }}>
                    {isLeft ? (
                      <div
                        style={{
                          display: "inline-block",
                          textAlign: "left",
                          maxWidth: "280px",
                          width: "100%",
                        }}
                      >
                        <MilestoneCard m={m} i={i} activeIdx={activeIdx} />
                      </div>
                    ) : (
                      <div />
                    )}
                  </div>

                  {/* Center node */}
                  <MilestoneNode m={m} isActive={isActive} isFuture={isFuture} />

                  {/* Right slot */}
                  <div style={{ textAlign: "left" }}>
                    {!isLeft ? (
                      <div style={{ maxWidth: "280px" }}>
                        <MilestoneCard m={m} i={i} activeIdx={activeIdx} />
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
    </section>
  );
}
