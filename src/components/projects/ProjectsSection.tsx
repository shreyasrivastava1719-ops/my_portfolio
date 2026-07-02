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

const projects = [
  {
    id: 1,
    title: "MoodSense",
    subtitle: "Real-time Emotion Sentiment Analyzer",
    description:
      "An NLP-powered web app that analyzes text in real-time to detect emotions — joy, sadness, anger, fear, surprise — and visualizes them with beautiful charts. Built during a college hackathon to help people better understand emotional patterns in text.",
    problem: "Understanding emotional context in text is hard for humans at scale.",
    solution: "Combining TextBlob + custom NLTK models with an interactive Streamlit dashboard.",
    tech: ["Python", "NLTK", "TextBlob", "Streamlit", "Matplotlib", "Pandas"],
    github: "https://github.com/shreya-srivastava/moodsense",
    color: "var(--accent-coral)",
    emoji: "🎭",
    badge: "NLP",
    gradient: "linear-gradient(135deg, rgba(232,117,90,0.15) 0%, rgba(244,168,125,0.08) 100%)",
  },
  {
    id: 2,
    title: "FaceAttend",
    subtitle: "AI-Powered Attendance System",
    description:
      "Automated class attendance system using facial recognition. Students are registered once; thereafter the system marks attendance by recognizing faces from a live webcam feed and logs records to SQLite. Reduced manual marking time by 90%.",
    problem: "Manual attendance is time-consuming and prone to proxy fraud.",
    solution: "OpenCV + face_recognition library with real-time detection pipeline.",
    tech: ["Python", "OpenCV", "face_recognition", "SQLite", "Tkinter", "NumPy"],
    github: "https://github.com/shreya-srivastava/faceattend",
    color: "var(--accent-teal)",
    emoji: "👁️",
    badge: "Computer Vision",
    gradient: "linear-gradient(135deg, rgba(45,138,123,0.15) 0%, rgba(78,205,196,0.08) 100%)",
  },
  {
    id: 3,
    title: "CropGuard",
    subtitle: "Plant Disease Detection CNN",
    description:
      "A deep learning-powered web app that identifies plant diseases from leaf images with 87% accuracy on a 38-class dataset. Farmers can upload a photo and receive disease diagnosis + treatment recommendations instantly.",
    problem: "Crop diseases cause 20-40% yield loss; early detection is critical.",
    solution: "Transfer learning with MobileNetV2 fine-tuned on PlantVillage dataset.",
    tech: ["Python", "TensorFlow", "Keras", "OpenCV", "Flask", "MobileNetV2"],
    github: "https://github.com/shreya-srivastava/cropguard",
    color: "var(--accent-emerald)",
    emoji: "🌱",
    badge: "Deep Learning",
    gradient: "linear-gradient(135deg, rgba(46,125,82,0.15) 0%, rgba(75,180,121,0.08) 100%)",
    featured: true,
  },
  {
    id: 4,
    title: "QuizMind",
    subtitle: "AI Quiz Generator from PDFs",
    description:
      "Upload any PDF — a textbook chapter, research paper, or article — and QuizMind automatically generates multiple-choice questions using the Gemini API. Track your performance and get personalized weak-area recommendations.",
    problem: "Creating practice quizzes from study material is tedious and time-consuming.",
    solution: "PDF parsing + Gemini Pro API for question generation with React frontend.",
    tech: ["Python", "Flask", "Gemini API", "PyPDF2", "React", "SQLite"],
    github: "https://github.com/shreya-srivastava/quizmind",
    color: "var(--accent-royal)",
    emoji: "📝",
    badge: "Gen AI",
    gradient: "linear-gradient(135deg, rgba(27,94,142,0.15) 0%, rgba(75,135,207,0.08) 100%)",
  },
  {
    id: 5,
    title: "StockSense",
    subtitle: "ML-Powered Stock Price Predictor",
    description:
      "A stock price prediction dashboard using LSTM neural networks trained on historical market data. Features interactive candlestick charts, moving averages, RSI indicators, and next-day price forecasts for any NSE/BSE listed company.",
    problem: "Retail investors lack accessible tools to understand market trends.",
    solution: "LSTM model on yfinance data + Streamlit dashboard with Plotly charts.",
    tech: ["Python", "LSTM", "scikit-learn", "yfinance", "Streamlit", "Plotly"],
    github: "https://github.com/shreya-srivastava/stocksense",
    color: "var(--accent-gold)",
    emoji: "📈",
    badge: "Finance AI",
    gradient: "linear-gradient(135deg, rgba(201,168,76,0.15) 0%, rgba(232,197,106,0.08) 100%)",
  },
];

function ProjectCard({ project, index, inView }: { project: typeof projects[0]; index: number; inView: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "var(--bg-secondary)",
        borderRadius: "24px",
        border: `1.5px solid ${hovered ? project.color + "40" : "var(--border-light)"}`,
        overflow: "hidden",
        transition: "all 0.5s cubic-bezier(0.175,0.885,0.32,1.275)",
        transform: inView
          ? hovered
            ? "translateY(-10px)"
            : "translateY(0)"
          : "translateY(40px)",
        opacity: inView ? 1 : 0,
        transitionDelay: `${0.1 + index * 0.1}s`,
        boxShadow: hovered
          ? `0 30px 80px ${project.color}18, 0 10px 30px rgba(0,0,0,0.06)`
          : "0 4px 20px rgba(0,0,0,0.04)",
      }}
    >
      {/* Card top with gradient */}
      <div
        style={{
          padding: "2rem 2rem 1.5rem",
          background: project.gradient,
          position: "relative",
          borderBottom: "1px solid var(--border-light)",
        }}
      >
        {project.featured && (
          <div
            style={{
              position: "absolute",
              top: "1rem",
              right: "1rem",
              padding: "0.25rem 0.75rem",
              background: project.color,
              color: "white",
              borderRadius: "100px",
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            ⭐ Featured
          </div>
        )}

        <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "14px",
              background: `${project.color}20`,
              border: `1.5px solid ${project.color}30`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.5rem",
              flexShrink: 0,
              transition: "transform 0.3s ease",
              transform: hovered ? "scale(1.1) rotate(-5deg)" : "scale(1) rotate(0deg)",
            }}
          >
            {project.emoji}
          </div>
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "0.2rem 0.625rem",
                background: `${project.color}15`,
                border: `1px solid ${project.color}30`,
                borderRadius: "100px",
                fontSize: "0.7rem",
                fontWeight: 700,
                color: project.color,
                letterSpacing: "0.05em",
                marginBottom: "0.5rem",
              }}
            >
              {project.badge}
            </div>
            <h3
              style={{
                fontFamily: "'ClashDisplay', sans-serif",
                fontSize: "1.25rem",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                color: "var(--text-primary)",
                marginBottom: "0.2rem",
              }}
            >
              {project.title}
            </h3>
            <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", fontWeight: 500 }}>
              {project.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Card body */}
      <div style={{ padding: "1.5rem 2rem 2rem" }}>
        <p
          style={{
            fontSize: "0.875rem",
            lineHeight: 1.75,
            color: "var(--text-secondary)",
            marginBottom: "1.25rem",
          }}
        >
          {project.description}
        </p>

        {/* Problem / Solution */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "0.75rem",
            marginBottom: "1.5rem",
          }}
        >
          {[
            { label: "Problem", text: project.problem, icon: "❓" },
            { label: "Solution", text: project.solution, icon: "✅" },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                padding: "0.875rem",
                background: "var(--bg-primary)",
                borderRadius: "12px",
                border: "1px solid var(--border-light)",
              }}
            >
              <div
                style={{
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  color: "var(--text-muted)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: "0.375rem",
                }}
              >
                {item.icon} {item.label}
              </div>
              <p style={{ fontSize: "0.78rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Tech stack */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.5rem" }}>
          {project.tech.map((t) => (
            <span
              key={t}
              style={{
                padding: "0.25rem 0.625rem",
                background: `${project.color}10`,
                border: `1px solid ${project.color}20`,
                borderRadius: "6px",
                fontSize: "0.72rem",
                fontWeight: 600,
                color: project.color,
                fontFamily: "monospace",
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div style={{ display: "flex", gap: "0.75rem" }}>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
              padding: "0.75rem",
              background: "var(--text-primary)",
              color: "var(--bg-primary)",
              borderRadius: "10px",
              fontSize: "0.85rem",
              fontWeight: 600,
              textDecoration: "none",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = project.color;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--text-primary)";
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub
          </a>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "0.75rem",
              background: "var(--bg-primary)",
              border: "1px solid var(--border-light)",
              borderRadius: "10px",
              color: "var(--text-muted)",
              fontSize: "0.8rem",
              fontWeight: 500,
              cursor: "default",
            }}
            title="Demo coming soon"
          >
            🔗 Demo soon
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const { ref, inView } = useInView();

  return (
    <section
      id="projects"
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
            Projects
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
            Things I&apos;ve{" "}
            <span style={{ color: "var(--accent-coral)" }}>Built</span>
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
            Real projects solving real problems — from NLP to Computer Vision to Generative AI
          </p>
        </div>

        {/* Projects grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))",
            gap: "1.5rem",
          }}
          className="projects-grid"
        >
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} inView={inView} />
          ))}
        </div>

        {/* GitHub CTA */}
        <div
          style={{
            textAlign: "center",
            marginTop: "3rem",
            opacity: inView ? 1 : 0,
            transition: "opacity 0.8s ease 0.6s",
          }}
        >
          <a
            href="https://github.com/shreya-srivastava"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            style={{ textDecoration: "none", display: "inline-flex" }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            View all on GitHub
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .projects-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
