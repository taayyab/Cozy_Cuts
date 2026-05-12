"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CursorGlow() {
  const dot = useRef(null);
  const ring = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const xTo = gsap.quickTo(ring.current, "x", { duration: 0.6, ease: "expo.out" });
    const yTo = gsap.quickTo(ring.current, "y", { duration: 0.6, ease: "expo.out" });
    const xToD = gsap.quickTo(dot.current, "x", { duration: 0.15, ease: "power3.out" });
    const yToD = gsap.quickTo(dot.current, "y", { duration: 0.15, ease: "power3.out" });

    const move = (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
      xToD(e.clientX);
      yToD(e.clientY);
    };

    const enter = () => gsap.to(ring.current, { scale: 1.8, duration: 0.4 });
    const leave = () => gsap.to(ring.current, { scale: 1, duration: 0.4 });

    window.addEventListener("pointermove", move);
    document.querySelectorAll("a, button, [data-cursor]").forEach((el) => {
      el.addEventListener("pointerenter", enter);
      el.addEventListener("pointerleave", leave);
    });

    return () => {
      window.removeEventListener("pointermove", move);
      document.querySelectorAll("a, button, [data-cursor]").forEach((el) => {
        el.removeEventListener("pointerenter", enter);
        el.removeEventListener("pointerleave", leave);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={ring}
        className="pointer-events-none fixed top-0 left-0 z-[90] -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-blush-300/60 mix-blend-multiply hidden md:block"
      />
      <div
        ref={dot}
        className="pointer-events-none fixed top-0 left-0 z-[91] -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-blush-500 hidden md:block"
      />
    </>
  );
}
