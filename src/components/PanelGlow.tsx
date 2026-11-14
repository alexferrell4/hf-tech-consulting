"use client";

import { useEffect } from "react";

// One document-level listener feeds pointer position to whichever .panel is
// under the cursor; the glow itself is drawn by .panel::after in globals.css.
export default function PanelGlow() {
  useEffect(() => {
    if (!window.matchMedia("(hover: hover)").matches) return;
    const handleMove = (e: PointerEvent) => {
      const panel = (e.target as Element | null)?.closest?.<HTMLElement>(".panel");
      if (!panel) return;
      const rect = panel.getBoundingClientRect();
      panel.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      panel.style.setProperty("--my", `${e.clientY - rect.top}px`);
    };
    document.addEventListener("pointermove", handleMove, { passive: true });
    return () => document.removeEventListener("pointermove", handleMove);
  }, []);

  return null;
}
