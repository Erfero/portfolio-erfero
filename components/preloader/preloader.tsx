"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import styles from "./preloader.module.css";
import { RollingPercent, type RollingPercentHandle } from "./rolling-percent";
import { site } from "@/data/site";
import { useLocale } from "@/lib/locale-context";

function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function Preloader({ onComplete }: { onComplete: () => void }) {
  const { t } = useLocale();
  const rootRef = useRef<HTMLDivElement>(null);
  const progressFillRef = useRef<HTMLDivElement>(null);
  const progressExitRef = useRef<HTMLDivElement>(null);
  const percentRef = useRef<RollingPercentHandle>(null);
  const logoMaskRef = useRef<HTMLSpanElement>(null);
  const quoteRef = useRef<HTMLParagraphElement>(null);
  const authorRef = useRef<HTMLElement>(null);
  const taglineRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const [buildStamp, setBuildStamp] = useState("");

  const taglineWords = t(site.footerTagline)
    .split(".")
    .map((word) => word.trim())
    .filter(Boolean);

  useEffect(() => {
    setBuildStamp(
      new Intl.DateTimeFormat("fr-FR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }).format(new Date())
    );
  }, []);

  useLayoutEffect(() => {
    const setProgress = (value: number) => {
      const clamped = Math.max(0, Math.min(100, value));
      if (progressFillRef.current) {
        progressFillRef.current.style.transform = `scaleX(${clamped / 100})`;
      }
      percentRef.current?.setProgress(clamped);
    };

    if (prefersReducedMotion()) {
      setProgress(100);
      onComplete();
      return;
    }

    const revealTargets = [quoteRef.current, authorRef.current, ...taglineRefs.current].filter(
      (el): el is HTMLElement => Boolean(el)
    );

    gsap.set(revealTargets, { yPercent: 100, opacity: 0 });
    gsap.set(rootRef.current, { clipPath: "inset(0% 0% 0% 0%)" });

    if (logoMaskRef.current) {
      gsap.fromTo(
        logoMaskRef.current,
        { clipPath: "inset(0% 0% 100% 0%)" },
        { clipPath: "inset(0% 0% 0% 0%)", duration: 1.5, ease: "power2.out" }
      );
    }

    gsap.to(revealTargets, {
      yPercent: 0,
      opacity: 1,
      duration: 0.95,
      ease: "power3.out",
      stagger: 0.1,
      delay: 0.15,
    });

    const progressState = { value: 0 };
    const timeline = gsap.timeline({
      onComplete: () => {
        setProgress(100);
        if (!progressExitRef.current) {
          onComplete();
          return;
        }
        gsap.to(progressExitRef.current, {
          scaleX: 1,
          transformOrigin: "left center",
          duration: 1.1,
          ease: "power2.inOut",
          onComplete: () => {
            window.setTimeout(() => {
              gsap.to(revealTargets, {
                yPercent: -100,
                opacity: 0,
                duration: 0.65,
                ease: "power2.inOut",
                stagger: 0.04,
              });
              if (logoMaskRef.current) {
                gsap.to(logoMaskRef.current, {
                  clipPath: "inset(0% 0% 100% 0%)",
                  duration: 0.65,
                  ease: "power2.inOut",
                });
              }
              gsap.to(rootRef.current, {
                clipPath: "inset(0% 0% 100% 0%)",
                duration: 0.9,
                ease: "power2.inOut",
                delay: 0.1,
                onComplete,
              });
            }, 600);
          },
        });
      },
    });

    timeline.to(progressState, {
      value: 100,
      duration: 7.2,
      ease: "power1.inOut",
      onUpdate: () => setProgress(progressState.value),
    });

    return () => {
      timeline.kill();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={rootRef} className={styles.overlayRoot} aria-live="polite">
      <div className={styles.overlayBg} aria-hidden="true" />

      <div className={styles.progressBarWrap} aria-hidden="true">
        <div ref={progressFillRef} className={styles.progressBarFill} />
        <div ref={progressExitRef} className={styles.progressBarExit} />
      </div>

      <div className={styles.logoWrap} aria-hidden="true">
        <div className={styles.logoOffset}>
          <span ref={logoMaskRef} className={styles.logoSplitMask}>
            <Image
              src="/logo.svg"
              alt=""
              width={64}
              height={64}
              className={styles.logoImage}
              priority
              unoptimized
            />
          </span>
        </div>
      </div>

      <div className={styles.percentWrap}>
        <div className={styles.percentMask}>
          <div className={styles.percentExitInner}>
            <RollingPercent ref={percentRef} />
          </div>
        </div>
      </div>

      <div className={styles.quoteWrap}>
        <blockquote className={styles.quote}>
          <p ref={quoteRef} className={styles.quoteText}>
            {t(site.quote)}
          </p>
          <cite ref={authorRef} className={styles.quoteAuthor}>
            {site.quote.author}
          </cite>
        </blockquote>
      </div>

      <p className={styles.tagline} aria-hidden="true">
        {taglineWords.map((word, i) => (
          <span
            key={word}
            ref={(el) => {
              taglineRefs.current[i] = el;
            }}
            className={styles.taglineLine}
          >
            {word}.
          </span>
        ))}
      </p>

      <div className={styles.copyrightWrap}>
        <p className={styles.copyrightText}>
          <span className={styles.splitWrap}>{site.name}</span>
          {buildStamp && <span className={styles.splitWrap}>{buildStamp}</span>}
        </p>
      </div>
    </div>
  );
}
