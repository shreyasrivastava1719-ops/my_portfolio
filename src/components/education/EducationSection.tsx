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

const education = [
  {
    id: 1,
    year: "2026",
    degree: "B.Tech — CSE (2nd Year)",
    institution: "Shri Ramswaroop College of Engineering & Management (SRMCEM)",
    location: "Lucknow, Uttar Pradesh",
    cgpa: "7.5 / 10.0",
    status: "Current",
    highlights: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Database Management Systems",
      "Python AI Development",
      "Operating Systems",
    ],
    color: "var(--accent-coral)",
    icon: "📌",
  },
  {
    id: 2,
    year: "2025",
    degree: "Joined B.Tech CSE (1st Year)",
    institution: "Shri Ramswaroop College of Engineering & Management (SRMCEM)",
    location: "Lucknow, Uttar Pradesh",
    cgpa: "7.5 / 10.0",
    status: "Completed",
    highlights: [
      "Computer Programming in C",
      "Engineering Mathematics",
      "Digital Logic & Physics",
      "Basic Electronics",
    ],
    color: "var(--accent-teal)",
    icon: "🎓",
  },
  {
    id: 3,
    year: "2027",
    degree: "B.Tech — CSE (3rd Year Plans)",
    institution: "Shri Ramswaroop College of Engineering & Management (SRMCEM)",
    location: "Lucknow, Uttar Pradesh",
    cgpa: "Target: 7.5+",
    status: "Upcoming",
    highlights: [
      "Advanced AI Projects",
      "Industry Internships",
      "Open Source Contributions",
      "Machine Learning Electives",
    ],
    color: "var(--accent-royal)",
    icon: "🚀",
  },
  {
    id: 4,
    year: "2028",
    degree: "B.Tech — CSE (Final Year Plans)",
    institution: "Shri Ramswaroop College of Engineering & Management (SRMCEM)",
    location: "Lucknow, Uttar Pradesh",
    cgpa: "Target: 7.5+",
    status: "Upcoming",
    highlights: [
      "Major Capstone Project",
      "Campus Placements",
      "AI & ML Research",
      "Portfolio & Network Growth",
    ],
    color: "var(--accent-gold)",
    icon: "💼",
  },
  {
    id: 5,
    year: "2029",
    degree: "Graduation (B.Tech CSE)",
    institution: "Shri Ramswaroop College of Engineering & Management (SRMCEM)",
    location: "Lucknow, Uttar Pradesh",
    cgpa: "B.Tech Degree",
    status: "Upcoming",
    highlights: [
      "Degree Awarded",
      "Transition to Industry / Higher Studies",
      "Alumni Network",
    ],
    color: "var(--accent-emerald)",
    icon: "🎓",
  },
];


export default function EducationSection() {
  const { ref, inView } = useInView();
  const [activeId, setActiveId] = useState(1);

  return (
    <section
      id="education"
      ref={ref}
      style={{
        padding: "8rem 0",
        background: "var(--bg-primary)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative */}
      <div
        style={{
          position: "absolute",
          right: "-100px",
          top: "50%",
          transform: "translateY(-50%)",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(45,138,123,0.05) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />

      <div className="container-wide">
        {/* Section header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "5rem",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s ease 0.1s",
          }}
        >
          <div className="section-label" style={{ justifyContent: "center" }}>
            Education
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
            Academic{" "}
            <span style={{ color: "var(--accent-teal)" }}>Journey</span>
          </h2>
        </div>

        {/* Timeline */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: "3rem",
            alignItems: "start",
          }}
          className="edu-grid"
        >
          {/* Left: Timeline list */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {education.map((item, i) => (
              <button
                key={item.id}
                onClick={() => setActiveId(item.id)}
                style={{
                  textAlign: "left",
                  padding: "1.25rem 1.5rem",
                  borderRadius: "16px",
                  border: `1.5px solid ${activeId === item.id ? item.color : "var(--border-light)"}`,
                  background:
                    activeId === item.id
                      ? `${item.color}08`
                      : "var(--bg-secondary)",
                  cursor: "pointer",
                  transition: "all 0.3s cubic-bezier(0.175,0.885,0.32,1.275)",
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateX(0)" : "translateX(-25px)",
                  transitionDelay: `${0.2 + i * 0.12}s`,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    marginBottom: "0.375rem",
                  }}
                >
                  <span style={{ fontSize: "1.1rem" }}>{item.icon}</span>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      color: item.color,
                      letterSpacing: "0.05em",
                    }}
                  >
                    {item.year}
                  </span>
                </div>
                <div
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    color: "var(--text-primary)",
                    marginBottom: "0.25rem",
                  }}
                >
                  {item.degree.split("—")[0]}
                </div>
                <div
                  style={{
                    fontSize: "0.78rem",
                    color: "var(--text-muted)",
                  }}
                >
                  {item.institution.split("(")[0].trim()}
                </div>
              </button>
            ))}
          </div>

          {/* Right: Detail card */}
          {education
            .filter((e) => e.id === activeId)
            .map((item) => (
              <div
                key={item.id}
                style={{
                  background: "var(--bg-secondary)",
                  borderRadius: "24px",
                  border: "1px solid var(--border-light)",
                  padding: "2.5rem",
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(25px)",
                  transition: "all 0.6s ease 0.3s",
                  boxShadow: "0 10px 60px rgba(0,0,0,0.04)",
                }}
              >
                {/* Header */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "1.75rem",
                    flexWrap: "wrap",
                    gap: "1rem",
                  }}
                >
                  <div>
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        padding: "0.3rem 0.875rem",
                        background: `${item.color}15`,
                        borderRadius: "100px",
                        border: `1px solid ${item.color}30`,
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        color: item.color,
                        marginBottom: "1rem",
                        letterSpacing: "0.05em",
                      }}
                    >
                      <span
                        style={{
                          width: "6px",
                          height: "6px",
                          borderRadius: "50%",
                          background: item.color,
                        }}
                      />
                      {item.status}
                    </div>
                    <h3
                      style={{
                        fontFamily: "'ClashDisplay', sans-serif",
                        fontSize: "1.4rem",
                        fontWeight: 700,
                        letterSpacing: "-0.02em",
                        color: "var(--text-primary)",
                        marginBottom: "0.375rem",
                      }}
                    >
                      {item.degree}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.9rem",
                        color: "var(--text-secondary)",
                        fontWeight: 500,
                      }}
                    >
                      {item.institution}
                    </p>
                    <p
                      style={{
                        fontSize: "0.8rem",
                        color: "var(--text-muted)",
                        marginTop: "0.25rem",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.375rem",
                      }}
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      {item.location}
                    </p>
                  </div>

                  {/* CGPA badge */}
                  <div
                    style={{
                      textAlign: "center",
                      padding: "1rem 1.5rem",
                      background: "var(--bg-primary)",
                      borderRadius: "16px",
                      border: "1px solid var(--border-light)",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "'ClashDisplay', sans-serif",
                        fontSize: "1.75rem",
                        fontWeight: 700,
                        letterSpacing: "-0.03em",
                        color: item.color,
                      }}
                    >
                      {item.cgpa}
                    </div>
                    <div
                      style={{
                        fontSize: "0.65rem",
                        fontWeight: 600,
                        color: "var(--text-muted)",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                      }}
                    >
                      CGPA / Score
                    </div>
                  </div>
                </div>

                {/* Timeline year */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  <div
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      background: item.color,
                    }}
                  />
                  <div
                    style={{
                      flex: 1,
                      height: "1px",
                      background: `linear-gradient(90deg, ${item.color} 0%, transparent 100%)`,
                    }}
                  />
                  <span
                    style={{
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      color: item.color,
                      letterSpacing: "0.05em",
                    }}
                  >
                    {item.year}
                  </span>
                </div>

                {/* Subjects / highlights */}
                <div>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      color: "var(--text-muted)",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      marginBottom: "0.875rem",
                    }}
                  >
                    Key Subjects
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                    {item.highlights.map((h) => (
                      <span
                        key={h}
                        style={{
                          padding: "0.35rem 0.875rem",
                          background: `${item.color}10`,
                          border: `1px solid ${item.color}20`,
                          borderRadius: "100px",
                          fontSize: "0.8rem",
                          fontWeight: 500,
                          color: "var(--text-secondary)",
                        }}
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .edu-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
