"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function SmoothScroll({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.12,
      wheelMultiplier: 1.1,
      smoothWheel: true,
      smoothTouch: false,
      syncTouch: false
    });

    // Drive Lenis from GSAP's ticker so ScrollTrigger stays in sync
    const tick = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    // Keep ScrollTrigger updated whenever Lenis scrolls
    lenis.on("scroll", ScrollTrigger.update);

    window.__lenis = lenis;

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
      delete window.__lenis;
    };
  }, []);

  return <>{children}</>;
}
