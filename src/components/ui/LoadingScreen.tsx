"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState(0); // 0=loading, 1=reveal

  useEffect(() => {
    const steps = [
      { delay: 100, value: 20 },
      { delay: 400, value: 50 },
      { delay: 800, value: 75 },
      { delay: 1200, value: 90 },
      { delay: 1700, value: 100 },
      { delay: 2000, value: 100, reveal: true },
    ];

    steps.forEach(({ delay, value, reveal }) => {
      setTimeout(() => {
        setProgress(value);
        if (reveal) setPhase(1);
      }, delay);
    });
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "var(--bg-primary)",
        zIndex: 99999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "2rem",
        opacity: phase === 1 ? 0 : 1,
        pointerEvents: phase === 1 ? "none" : "all",
        transition: "opacity 0.6s cubic-bezier(0.19, 1, 0.22, 1)",
      }}
    >
      {/* Logo mark */}
      <div style={{ textAlign: "center" }}>
        {/* Monogram badge */}
        <div
          style={{
            width: "84px",
            height: "84px",
            borderRadius: "24px",
            background: "linear-gradient(135deg, var(--accent-coral) 0%, var(--accent-royal) 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto",
            position: "relative",
            boxShadow: "0 0 40px rgba(255,107,74,0.25), 0 0 80px rgba(27,94,142,0.15)",
            animation: "loading-logo-pulse 2s ease-in-out infinite",
          }}
        >
          {/* Inner frosted square */}
          <div
            style={{
              position: "absolute",
              inset: "3px",
              borderRadius: "21px",
              background: "var(--bg-primary)",
              opacity: 0.12,
            }}
          />
          {/* Letters */}
          <span
            style={{
              fontFamily: "'ClashDisplay', sans-serif",
              fontSize: "2.2rem",
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: "-0.06em",
              lineHeight: 1,
              position: "relative",
              zIndex: 1,
              textShadow: "0 2px 12px rgba(0,0,0,0.3)",
            }}
          >
            SS
          </span>
        </div>

        {/* Name subtitle */}
        <div
          style={{
            fontSize: "0.75rem",
            fontWeight: 500,
            letterSpacing: "0.2em",
            color: "var(--text-muted)",
            textTransform: "uppercase",
            marginTop: "1rem",
            opacity: progress > 20 ? 1 : 0,
            transition: "opacity 0.5s ease",
          }}
        >
          Shreya Srivastava
        </div>
      </div>

      <style>{`
        @keyframes loading-logo-pulse {
          0%, 100% { box-shadow: 0 0 40px rgba(255,107,74,0.25), 0 0 80px rgba(27,94,142,0.15); transform: scale(1); }
          50% { box-shadow: 0 0 55px rgba(255,107,74,0.40), 0 0 100px rgba(27,94,142,0.25); transform: scale(1.04); }
        }
      `}</style>

      {/* Progress bar */}
      <div
        style={{
          width: "180px",
          height: "2px",
          background: "var(--border-light)",
          borderRadius: "1px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            background: "linear-gradient(90deg, var(--accent-coral), var(--accent-teal))",
            borderRadius: "1px",
            width: `${progress}%`,
            transition: "width 0.4s ease",
          }}
        />
      </div>

      {/* Progress number */}
      <div
        style={{
          fontSize: "0.75rem",
          fontWeight: 600,
          color: "var(--text-muted)",
          fontVariantNumeric: "tabular-nums",
          letterSpacing: "0.05em",
        }}
      >
        {progress}%
      </div>
    </div>
  );
}
