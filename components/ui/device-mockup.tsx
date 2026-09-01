"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function DeviceMockup({ image, alt }: { image: string; alt: string }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion || !frameRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        frameRef.current,
        { rotateX: 28, rotateZ: -4, y: 60, opacity: 0.4 },
        {
          rotateX: 0,
          rotateZ: 0,
          y: 0,
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: wrapRef.current,
            start: "top 85%",
            end: "top 35%",
            scrub: 0.6,
          },
        }
      );
    }, wrapRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapRef} className="mx-auto w-full max-w-4xl px-6" style={{ perspective: "1600px" }}>
      <div ref={frameRef} className="origin-bottom" style={{ transformStyle: "preserve-3d" }}>
        <div className="rounded-t-xl border-x-8 border-t-8 border-[#1a1a1a] bg-[#1a1a1a] shadow-2xl">
          <div className="flex items-center gap-1.5 rounded-t-md bg-[#1a1a1a] px-3 py-2">
            <span className="h-2 w-2 rounded-full bg-white/20" />
            <span className="h-2 w-2 rounded-full bg-white/20" />
            <span className="h-2 w-2 rounded-full bg-white/20" />
          </div>
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-secondary">
            <Image src={image} alt={alt} fill sizes="56rem" className="object-cover object-top" />
          </div>
        </div>
        <div className="h-3 rounded-b-2xl border-x-8 border-b-8 border-[#1a1a1a] bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a]" />
        <div className="mx-auto h-1.5 w-1/3 rounded-b-xl bg-[#0a0a0a]" />
      </div>
    </div>
  );
}
