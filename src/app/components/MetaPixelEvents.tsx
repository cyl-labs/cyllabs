"use client";

import { useEffect } from "react";

type FBMeta = Record<string, unknown>;

export default function MetaPixelEvents() {
  useEffect(() => {
    const handleClick = (eventName: string, metadata: FBMeta = {}) => {
        if (typeof window !== "undefined") {
                const fbq = (window as unknown as { fbq?: (...args: unknown[]) => void }).fbq;
                if (fbq) {
                fbq("trackCustom", eventName, metadata);
            }
        }
    };

    // Map CTA types to Meta Pixel event names
    const EVENT_MAP: Record<string, string> = {
      "pdf": "PdfClick",
      "quiz-start": "QuizStart",
      "quiz-end": "QuizEnd",
    };

    // One delegated listener for all clicks
    const onClick = (e: MouseEvent) => {
      const target = e.target as Element | null;
      if (!target) return;

      // Find the nearest element with a data-cta attribute
      const el = target.closest<HTMLElement>('[data-cta]');
      if (!el) return;

      const ctaType = el.getAttribute('data-cta'); // e.g. "pdf"
      if (!ctaType) return;

      const eventName = EVENT_MAP[ctaType];
      if (!eventName) return; // ignore unknown types

      // Optional metadata:
      // - data-fb-source for a human label
      // - data-fb-meta as JSON for arbitrary fields
      const source = el.getAttribute('data-fb-source') || el.id || undefined;

      let extra: FBMeta = {};
      const raw = el.getAttribute('data-fb-meta');
      if (raw) {
        try { extra = JSON.parse(raw); } catch { /* ignore bad JSON */ }
      }

      handleClick(eventName, { source, ...extra });
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
