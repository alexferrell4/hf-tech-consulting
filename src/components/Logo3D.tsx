"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

const EMBLEM_SRC = "/logo-emblem.png";

const Logo3DCanvas = dynamic(() => import("@/components/Logo3DCanvas"), { ssr: false });

function useReducedMotion() {
  const [reduced, setReduced] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    query.addEventListener("change", handler);
    return () => query.removeEventListener("change", handler);
  }, []);
  return reduced;
}

// Delays fetching/mounting the three.js canvas chunk until the browser is idle
// (or a short timeout elapses) so its JS cost doesn't block first paint or
// inflate Total Blocking Time on the hero's critical render path. A static
// 2D crop of the emblem renders immediately in its place.
function useDeferredMount() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const win = window as Window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
      cancelIdleCallback?: (handle: number) => void;
    };
    if (win.requestIdleCallback) {
      const handle = win.requestIdleCallback(() => setReady(true), { timeout: 1500 });
      return () => win.cancelIdleCallback?.(handle);
    }
    const timer = setTimeout(() => setReady(true), 200);
    return () => clearTimeout(timer);
  }, []);
  return ready;
}

export default function Logo3D() {
  const reducedMotion = useReducedMotion();
  const ready = useDeferredMount();

  return (
    <div className="w-full h-full" aria-hidden="true">
      {!ready && (
        <div className="relative w-full h-full">
          <Image src={EMBLEM_SRC} alt="" fill sizes="224px" className="object-contain" priority />
        </div>
      )}
      {ready && <Logo3DCanvas reducedMotion={reducedMotion} />}
    </div>
  );
}
