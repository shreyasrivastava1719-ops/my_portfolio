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

const certifications = [
  {
    title: "Python for Everybody",
    platform: "Coursera / University of Michigan",
    year: "2023",
    icon: "🐍",
    color: "var(--accent-coral)",
    desc: "Completed 5-course specialization covering Python basics, data structures, and database access.",
  },
  {
    title: "Machine Learning Foundations",
    platform: "Google AI / Kaggle",
    year: "2024",
    icon: "🤖",
    color: "var(--accent-teal)",
    desc: "Hands-on ML with scikit-learn, feature engineering, and model evaluation on real datasets.",
  },
  {
    title: "Introduction to TensorFlow",
    platform: "Coursera / deeplearning.ai",
    year: "2024",
    icon: "🔥",
    color: "var(--accent-royal)",
    desc: "Built CNNs for image classification, RNNs for NLP, and deployed models with TF Serving.",
  },
  {
    title: "Data Analysis with Python",
    platform: "IBM / Cognitive Class",
    year: "2023",
    icon: "📊",
    color: "var(--accent-gold)",
    desc: "NumPy, Pandas, Matplotlib, Seaborn for exploratory data analysis and visualization.",
  },
  {
    title: "Open Source Contribution",
    platform: "HacktoberFest 2023",
    year: "2023",
    icon: "🌐",
    color: "var(--accent-emerald)",
    desc: "4 accepted pull requests to open-source Python and ML repositories on GitHub.",
  },
  {
    title: "Web Development Bootcamp",
    platform: "Udemy / Angela Yu",
    year: "2024",
    icon: "💻",
    color: "var(--accent-coral)",
    desc: "Full stack fundamentals: HTML, CSS, JavaScript, React, Node.js, and REST APIs.",
  },
];

export default function CertificationsSection() {
  const { ref, inView } = useInView();

  return (
    <section
      id="certifications"
      ref={ref}
      style={{
        padding: "8rem 0",
        background: "var(--bg-primary)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="container-wide">
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
            Certifications
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
            Learning{" "}
            <span style={{ color: "var(--accent-gold)" }}>Never Stops</span>
          </h2>
        </div>

        {/* Cert grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: "1.25rem",
          }}
          className="cert-grid"
        >
          {certifications.map((cert, i) => (
            <div
              key={i}
              style={{
                padding: "1.75rem",
                background: "var(--bg-secondary)",
                borderRadius: "20px",
                border: "1px solid var(--border-light)",
                transition: "all 0.4s cubic-bezier(0.175,0.885,0.32,1.275)",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(30px)",
                transitionDelay: `${0.1 + i * 0.08}s`,
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = cert.color + "40";
                el.style.background = `${cert.color}06`;
                el.style.transform = "translateY(-6px)";
                el.style.boxShadow = `0 20px 60px ${cert.color}15`;
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "var(--border-light)";
                el.style.background = "var(--bg-secondary)";
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "none";
              }}
            >
              <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                {/* Icon */}
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    background: `${cert.color}15`,
                    border: `1px solid ${cert.color}25`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.25rem",
                    flexShrink: 0,
                  }}
                >
                  {cert.icon}
                </div>

                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      gap: "0.5rem",
                      marginBottom: "0.25rem",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "0.95rem",
                        fontWeight: 700,
                        color: "var(--text-primary)",
                        letterSpacing: "-0.01em",
                        lineHeight: 1.3,
                      }}
                    >
                      {cert.title}
                    </h3>
                    <span
                      style={{
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        color: cert.color,
                        background: `${cert.color}15`,
                        padding: "0.15rem 0.5rem",
                        borderRadius: "100px",
                        whiteSpace: "nowrap",
                        flexShrink: 0,
                      }}
                    >
                      {cert.year}
                    </span>
                  </div>

                  <p
                    style={{
                      fontSize: "0.78rem",
                      color: cert.color,
                      fontWeight: 600,
                      marginBottom: "0.625rem",
                    }}
                  >
                    {cert.platform}
                  </p>

                  <p
                    style={{
                      fontSize: "0.8rem",
                      color: "var(--text-muted)",
                      lineHeight: 1.6,
                    }}
                  >
                    {cert.desc}
                  </p>
                </div>
              </div>

              {/* Bottom verified badge */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  marginTop: "1rem",
                  paddingTop: "0.875rem",
                  borderTop: "1px solid var(--border-light)",
                  fontSize: "0.72rem",
                  fontWeight: 600,
                  color: "var(--text-muted)",
                }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={cert.color} strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span style={{ color: cert.color }}>Certificate earned</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .cert-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
