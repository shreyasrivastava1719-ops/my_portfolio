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
        <div
          style={{
            fontFamily: "'ClashDisplay', sans-serif",
            fontSize: "3rem",
            fontWeight: 700,
            color: "var(--text-primary)",
            letterSpacing: "-0.04em",
            lineHeight: 1,
          }}
        >
          SS<span style={{ color: "var(--accent-coral)" }}>.</span>
        </div>
        <div
          style={{
            fontSize: "0.75rem",
            fontWeight: 500,
            letterSpacing: "0.15em",
            color: "var(--text-muted)",
            textTransform: "uppercase",
            marginTop: "0.5rem",
            opacity: progress > 20 ? 1 : 0,
            transition: "opacity 0.5s ease",
          }}
        >
          Portfolio
        </div>
      </div>

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
