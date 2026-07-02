"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const cursor = cursorRef.current;
    const ring = ringRef.current;
    if (!cursor || !ring) return;

    const onMouseMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    // Lerp ring to cursor
    let animId: number;
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      ringPos.current.x = lerp(ringPos.current.x, pos.current.x, 0.12);
      ringPos.current.y = lerp(ringPos.current.y, pos.current.y, 0.12);
      ring.style.left = `${ringPos.current.x}px`;
      ring.style.top = `${ringPos.current.y}px`;
      animId = requestAnimationFrame(animate);
    };
    animate();

    // Hover interactions
    const addHover = () => {
      document.querySelectorAll("a, button, .cursor-target").forEach((el) => {
        el.addEventListener("mouseenter", () => {
          cursor.classList.add("scale-150");
          cursor.style.background = "var(--accent-teal)";
          ring.style.width = "60px";
          ring.style.height = "60px";
          ring.style.borderColor = "rgba(45, 138, 123, 0.4)";
        });
        el.addEventListener("mouseleave", () => {
          cursor.classList.remove("scale-150");
          cursor.style.background = "var(--accent-coral)";
          ring.style.width = "40px";
          ring.style.height = "40px";
          ring.style.borderColor = "rgba(232, 117, 90, 0.5)";
        });
      });
    };

    document.addEventListener("mousemove", onMouseMove);
    addHover();

    // Re-run on DOM changes
    const observer = new MutationObserver(addHover);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animId);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="custom-cursor"
        style={{
          position: "fixed",
          width: "12px",
          height: "12px",
          background: "var(--accent-coral)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9999,
          transform: "translate(-50%, -50%)",
          transition: "background 0.3s ease, transform 0.2s ease",
          mixBlendMode: "multiply",
        }}
      />
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          width: "40px",
          height: "40px",
          border: "1.5px solid rgba(232, 117, 90, 0.5)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9998,
          transform: "translate(-50%, -50%)",
          transition: "width 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), height 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), border-color 0.3s ease",
        }}
      />
    </>
  );
}
