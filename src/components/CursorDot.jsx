import { useEffect, useRef } from "react";

export default function CursorDot() {
  const dotRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const dot = dotRef.current;
    if (!dot) return;

    let rafId = null;

    const onMove = (e) => {
      pos.current.x = e.clientX;
      pos.current.y = e.clientY;
      dot.style.opacity = "1";
    };

    const onLeave = () => {
      dot.style.opacity = "0";
    };

    const update = () => {
      const x = pos.current.x - dot.offsetWidth / 2;
      const y = pos.current.y - dot.offsetHeight / 2;
      dot.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      rafId = requestAnimationFrame(update);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseenter", onMove);
    window.addEventListener("mouseleave", onLeave);

    // kick off loop
    update();

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseenter", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      aria-hidden
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: 10,
        height: 10,
        borderRadius: "9999px",
        background: "#111111",
        pointerEvents: "none",
        transform: "translate3d(-50%,-50%,0)",
        transition: "opacity 180ms ease, background-color 120ms ease",
        zIndex: 9999,
        opacity: 0,
      }}
    />
  );
}
