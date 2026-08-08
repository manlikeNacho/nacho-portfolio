"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";

function subscribe(callback: () => void) {
  const mql = window.matchMedia("(pointer: fine)");
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

function getSnapshot() {
  return window.matchMedia("(pointer: fine)").matches;
}

function getServerSnapshot() {
  return false;
}

const BASE_SIZE = 32;
const HOVER_SIZE = 72;
// Lower = smoother/laggier trail, higher = snappier. Applied per animation frame.
const EASE = 0.2;

export function CustomCursor() {
  const enabled = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const dotRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const size = useRef(BASE_SIZE);
  const targetSize = useRef(BASE_SIZE);
  const primed = useRef(false);

  useEffect(() => {
    if (!enabled) return;

    document.body.classList.add("cursor-hidden");

    const handleMove = (event: MouseEvent) => {
      target.current.x = event.clientX;
      target.current.y = event.clientY;
      if (!primed.current) {
        // Snap to the first known position instead of tweening in from the corner.
        current.current.x = event.clientX;
        current.current.y = event.clientY;
        primed.current = true;
      }
    };
    const handleOver = (event: MouseEvent) => {
      const el = event.target as HTMLElement | null;
      targetSize.current = el?.closest?.("a,button") ? HOVER_SIZE : BASE_SIZE;
    };

    let frame = requestAnimationFrame(function tick() {
      current.current.x += (target.current.x - current.current.x) * EASE;
      current.current.y += (target.current.y - current.current.y) * EASE;
      size.current += (targetSize.current - size.current) * EASE;

      const node = dotRef.current;
      if (node) {
        const s = size.current;
        node.style.width = `${s}px`;
        node.style.height = `${s}px`;
        node.style.transform = `translate(${current.current.x - s / 2}px, ${current.current.y - s / 2}px)`;
      }
      frame = requestAnimationFrame(tick);
    });

    window.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseover", handleOver);

    return () => {
      document.body.classList.remove("cursor-hidden");
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseover", handleOver);
      cancelAnimationFrame(frame);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={dotRef}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full bg-foreground mix-blend-difference"
      style={{ width: BASE_SIZE, height: BASE_SIZE }}
    />
  );
}
