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

const skillCategories = [
  {
    id: "languages",
    label: "Languages",
    icon: "💻",
    color: "var(--accent-coral)",
    skills: [
      { name: "Python", level: 90 },
      { name: "C++", level: 72 },
      { name: "Java", level: 65 },
      { name: "JavaScript", level: 60 },
      { name: "SQL", level: 75 },
      { name: "HTML/CSS", level: 78 },
    ],
  },
  {
    id: "ai",
    label: "AI & ML",
    icon: "🧠",
    color: "var(--accent-teal)",
    skills: [
      { name: "TensorFlow", level: 70 },
      { name: "scikit-learn", level: 78 },
      { name: "OpenCV", level: 82 },
      { name: "NLTK", level: 75 },
      { name: "NumPy", level: 85 },
      { name: "Pandas", level: 88 },
      { name: "Matplotlib", level: 80 },
    ],
  },
  {
    id: "frameworks",
    label: "Frameworks",
    icon: "⚙️",
    color: "var(--accent-royal)",
    skills: [
      { name: "Flask", level: 80 },
      { name: "Streamlit", level: 85 },
      { name: "React", level: 55 },
      { name: "FastAPI", level: 62 },
    ],
  },
  {
    id: "tools",
    label: "Tools & Cloud",
    icon: "🛠️",
    color: "var(--accent-gold)",
    skills: [
      { name: "Git & GitHub", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "Jupyter", level: 88 },
      { name: "Google Colab", level: 90 },
      { name: "MySQL", level: 72 },
      { name: "MongoDB", level: 60 },
      { name: "Linux", level: 65 },
    ],
  },
];

export default function SkillsSection() {
  const { ref, inView } = useInView();
  const [activeCategory, setActiveCategory] = useState("languages");
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const active = skillCategories.find((c) => c.id === activeCategory)!;

  return (
    <section
      id="skills"
      ref={ref}
      style={{
        padding: "8rem 0",
        background: "var(--bg-secondary)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decoration */}
      <div
        style={{
          position: "absolute",
          left: "-150px",
          bottom: "-100px",
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(232,117,90,0.05) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />

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
            Skills
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
            Technical{" "}
            <span style={{ color: "var(--accent-coral)" }}>Arsenal</span>
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: "var(--text-muted)",
              marginTop: "0.75rem",
              maxWidth: "500px",
              margin: "0.75rem auto 0",
            }}
          >
            Tools and technologies I use to build intelligent systems
          </p>
        </div>

        {/* Category tabs */}
        <div
          style={{
            display: "flex",
            gap: "0.5rem",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "3rem",
            opacity: inView ? 1 : 0,
            transition: "opacity 0.6s ease 0.2s",
          }}
        >
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.625rem 1.25rem",
                borderRadius: "100px",
                border: `1.5px solid ${activeCategory === cat.id ? cat.color : "var(--border-light)"}`,
                background: activeCategory === cat.id ? `${cat.color}12` : "var(--bg-primary)",
                color: activeCategory === cat.id ? cat.color : "var(--text-secondary)",
                fontWeight: 600,
                fontSize: "0.85rem",
                cursor: "pointer",
                transition: "all 0.3s cubic-bezier(0.175,0.885,0.32,1.275)",
              }}
            >
              <span>{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills display */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "3rem",
            alignItems: "start",
          }}
          className="skills-grid"
        >
          {/* Left: Skill bars */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
              opacity: inView ? 1 : 0,
              transform: inView ? "translateX(0)" : "translateX(-25px)",
              transition: "all 0.7s ease 0.3s",
            }}
          >
            {active.skills.map((skill, i) => (
              <div
                key={skill.name}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
                style={{ cursor: "default" }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "0.5rem",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      color: hoveredSkill === skill.name ? active.color : "var(--text-primary)",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {skill.name}
                  </span>
                  <span
                    style={{
                      fontSize: "0.8rem",
                      fontWeight: 700,
                      color: active.color,
                      opacity: hoveredSkill === skill.name ? 1 : 0,
                      transition: "opacity 0.3s ease",
                    }}
                  >
                    {skill.level}%
                  </span>
                </div>
                <div
                  style={{
                    height: "6px",
                    background: "var(--bg-tertiary)",
                    borderRadius: "3px",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      width: inView ? `${skill.level}%` : "0%",
                      background: `linear-gradient(90deg, ${active.color}, ${active.color}88)`,
                      borderRadius: "3px",
                      transition: `width 1s cubic-bezier(0.19,1,0.22,1) ${0.4 + i * 0.08}s`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Right: Galaxy visualization */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.75rem",
              alignContent: "flex-start",
              padding: "2rem",
              background: "var(--bg-primary)",
              borderRadius: "24px",
              border: "1px solid var(--border-light)",
              minHeight: "320px",
              opacity: inView ? 1 : 0,
              transform: inView ? "translateX(0)" : "translateX(25px)",
              transition: "all 0.7s ease 0.3s",
            }}
          >
            {/* All skills from all categories */}
            {skillCategories.flatMap((cat) =>
              cat.skills.map((skill, idx) => {
                const size = skill.level > 80 ? "lg" : skill.level > 70 ? "md" : "sm";
                const isActive = cat.id === activeCategory;
                return (
                  <div
                    key={`${cat.id}-${skill.name}`}
                    style={{
                      padding:
                        size === "lg"
                          ? "0.625rem 1.125rem"
                          : size === "md"
                          ? "0.5rem 0.875rem"
                          : "0.375rem 0.75rem",
                      borderRadius: "100px",
                      border: `1.5px solid ${isActive ? cat.color + "40" : "var(--border-light)"}`,
                      background: isActive ? `${cat.color}10` : "transparent",
                      fontSize:
                        size === "lg"
                          ? "0.875rem"
                          : size === "md"
                          ? "0.8rem"
                          : "0.75rem",
                      fontWeight: isActive ? 600 : 500,
                      color: isActive ? cat.color : "var(--text-muted)",
                      transition: "all 0.4s cubic-bezier(0.175,0.885,0.32,1.275)",
                      cursor: "default",
                      transform: isActive ? "scale(1.05)" : "scale(1)",
                      opacity: inView ? 1 : 0,
                      transitionDelay: `${0.4 + idx * 0.04}s`,
                    }}
                  >
                    {skill.name}
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Bottom: All categories overview */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1rem",
            marginTop: "3rem",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.7s ease 0.5s",
          }}
          className="skill-cards"
        >
          {skillCategories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              style={{
                padding: "1.25rem",
                background: activeCategory === cat.id ? `${cat.color}10` : "var(--bg-primary)",
                borderRadius: "16px",
                border: `1.5px solid ${activeCategory === cat.id ? cat.color + "30" : "var(--border-light)"}`,
                cursor: "pointer",
                transition: "all 0.3s ease",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{cat.icon}</div>
              <div
                style={{
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  color: activeCategory === cat.id ? cat.color : "var(--text-primary)",
                  marginBottom: "0.25rem",
                }}
              >
                {cat.label}
              </div>
              <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
                {cat.skills.length} skills
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .skills-grid { grid-template-columns: 1fr !important; }
          .skill-cards { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}
