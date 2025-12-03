// components/Analytics.tsx
"use client";

import { GA_ID } from "@/config/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { useEffect, useState } from "react";

export function Analytics() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const enableGA = () => setEnabled(true);
    const disableGA = () => setEnabled(false);

    window.addEventListener("consent-granted-analytics", enableGA);
    window.addEventListener("consent-denied-analytics", disableGA);

    return () => {
      window.removeEventListener("consent-granted-analytics", enableGA);
      window.removeEventListener("consent-denied-analytics", disableGA);
    };
  }, []);

  if (!enabled) return null;
  return <GoogleAnalytics gaId={GA_ID} />;
}
