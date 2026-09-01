"use client";

import { forwardRef, useImperativeHandle, useRef } from "react";
import styles from "./preloader.module.css";

export interface DigitRollerHandle {
  setOffset: (index: number) => void;
}

const DigitRoller = forwardRef<DigitRollerHandle, { digits: number[] }>(function DigitRoller(
  { digits },
  ref
) {
  const stripRef = useRef<HTMLDivElement>(null);
  const maxIndex = Math.max(0, digits.length - 1);

  useImperativeHandle(ref, () => ({
    setOffset(index: number) {
      const strip = stripRef.current;
      if (!strip) return;
      const clamped = Math.max(0, Math.min(maxIndex, index));
      strip.style.transform = `translateY(${-(0.9 * clamped)}em)`;
    },
  }));

  return (
    <div className={styles.digitViewport}>
      <div ref={stripRef} className={styles.digitStrip}>
        {digits.map((digit, i) => (
          <span key={i} className={styles.digitSlot}>
            {digit}
          </span>
        ))}
      </div>
    </div>
  );
});

export interface RollingPercentHandle {
  setProgress: (value: number) => void;
}

const HUNDREDS_DIGITS = [0, 1];
const TENS_DIGITS = Array.from({ length: 11 }, (_, i) => i % 10);
const ONES_DIGITS = Array.from({ length: 101 }, (_, i) => i % 10);

export const RollingPercent = forwardRef<RollingPercentHandle>(function RollingPercent(_props, ref) {
  const hundredsRef = useRef<DigitRollerHandle>(null);
  const tensRef = useRef<DigitRollerHandle>(null);
  const onesRef = useRef<DigitRollerHandle>(null);

  useImperativeHandle(ref, () => ({
    setProgress(value: number) {
      const t = Math.max(0, Math.min(100, value));
      const hundreds = t < 95 ? 0 : (t - 95) / 5;
      const tens = t / 10;
      const ones = t;
      hundredsRef.current?.setOffset(hundreds);
      tensRef.current?.setOffset(tens);
      onesRef.current?.setOffset(ones);
    },
  }));

  return (
    <div className={styles.rollingPercent} aria-hidden="true">
      <DigitRoller ref={hundredsRef} digits={HUNDREDS_DIGITS} />
      <DigitRoller ref={tensRef} digits={TENS_DIGITS} />
      <DigitRoller ref={onesRef} digits={ONES_DIGITS} />
      <span className={styles.percentSymbol}>%</span>
    </div>
  );
});
