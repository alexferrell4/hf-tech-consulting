"use client";

import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";

export default function BlogGallery({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Standard client-mount detection so createPortal only runs once
    // `document` exists (SSR has no DOM to portal into).
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const goTo = useCallback(
    (i: number) => setIndex(((i % images.length) + images.length) % images.length),
    [images.length]
  );
  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    if (paused || lightboxOpen || images.length <= 1) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % images.length), 5000);
    return () => clearInterval(id);
  }, [paused, lightboxOpen, images.length]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "Escape") setLightboxOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [next, prev]);

  // Lock background scroll while the lightbox is open
  useEffect(() => {
    if (!lightboxOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [lightboxOpen]);

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="w-full"
    >
      {/* Main viewer */}
      <div className="relative gradient-border p-2">
        <button
          type="button"
          onClick={() => setLightboxOpen(true)}
          aria-label="Open full-screen view"
          className="relative w-full h-[65vh] max-h-180 min-h-80 rounded-[calc(var(--radius)-6px)] overflow-hidden bg-muted block cursor-zoom-in group"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={images[index]}
                alt={`${alt} — photo ${index + 1} of ${images.length}`}
                fill
                sizes="(max-width: 768px) 100vw, 900px"
                className="object-contain"
                priority={index === 0}
              />
            </motion.div>
          </AnimatePresence>

          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200 flex items-center justify-center">
            <Maximize2 className="w-8 h-8 text-white opacity-0 group-hover:opacity-90 transition-opacity duration-200" strokeWidth={1.5} />
          </div>
        </button>

        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Previous photo"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 hover:bg-background text-foreground flex items-center justify-center shadow-lg transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Next photo"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 hover:bg-background text-foreground flex items-center justify-center shadow-lg transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-background/80 text-xs font-medium text-foreground pointer-events-none">
              {index + 1} / {images.length}
            </div>
          </>
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to photo ${i + 1}`}
              aria-current={i === index}
              className={`relative shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                i === index ? "border-accent" : "border-transparent opacity-60 hover:opacity-100"
              }`}
            >
              <Image src={src} alt="" fill sizes="64px" className="object-cover" />
            </button>
          ))}
        </div>
      )}

      {/* Lightbox
          Note: the backdrop is a plain (non-motion) element on purpose. A
          framer-motion-animated `opacity` on a full-viewport semi-transparent
          layer gets GPU-layer-promoted and can render as an unflattened/
          see-through layer in some capture paths — not worth the risk on an
          element whose whole job is dimming everything behind it. The inner
          content (image + controls) is plain too, for the same reason — no
          framer-motion anywhere inside this overlay. */}
      {mounted &&
        lightboxOpen &&
        createPortal(
          <div
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
            onClick={() => setLightboxOpen(false)}
          >
            <div className="relative w-full h-full">
              <button
                type="button"
                onClick={() => setLightboxOpen(false)}
                aria-label="Close full-screen view"
                className="absolute top-4 right-4 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative w-full h-full max-w-6xl max-h-[90vh] m-auto p-6 flex items-center justify-center">
                {/* Plain <img>, not next/image: Next's Image component inside
                    this full-viewport semi-transparent overlay was somehow
                    preventing the backdrop from dimming the rest of the page
                    behind it (confirmed by isolation testing) — a plain img
                    sidesteps whatever that was. The file is already a
                    pre-sized static asset, so there's no optimization lost. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={images[index]}
                  alt={`${alt} — photo ${index + 1} of ${images.length}`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              {images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      prev();
                    }}
                    aria-label="Previous photo"
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      next();
                    }}
                    aria-label="Next photo"
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-white/10 text-xs font-medium text-white">
                    {index + 1} / {images.length}
                  </div>
                </>
              )}
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}
