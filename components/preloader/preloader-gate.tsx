"use client";

import { useEffect, useState } from "react";
import { Preloader } from "./preloader";

const SESSION_KEY = "portfolio-preloader-shown";

export function PreloaderGate({ children }: { children: React.ReactNode }) {
  const [showPreloader, setShowPreloader] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let alreadyShown = false;
    try {
      alreadyShown = window.sessionStorage.getItem(SESSION_KEY) === "1";
    } catch {
      // sessionStorage unavailable, treat as not shown
    }
    setShowPreloader(!alreadyShown);
    setReady(true);
  }, []);

  function handleComplete() {
    try {
      window.sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      // ignore
    }
    setShowPreloader(false);
  }

  return (
    <>
      {children}
      {ready && showPreloader && <Preloader onComplete={handleComplete} />}
    </>
  );
}
