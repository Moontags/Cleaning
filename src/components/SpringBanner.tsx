"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function SpringBanner() {
  const [visible, setVisible] = useState(true);
  const { t } = useLanguage();

  if (!visible) return null;

  return (
    <div
      className="relative flex flex-col items-center justify-center gap-2 border-b border-emerald-200 bg-emerald-100 px-4 py-4 text-center sm:flex-row sm:gap-4 sm:px-16"
    >
      {/* <span className="text-xl sm:text-2xl" aria-hidden="true">🌿</span> */}

      <div className="max-w-3xl">
        <span
          className="block font-bold tracking-wide text-emerald-900"
          style={{ fontSize: "1.05rem", letterSpacing: "0.01em" }}
        >
          {t("home.spring_banner.title")}
        </span>
        <span
          className="mt-1 block text-sm sm:text-[0.88rem] text-emerald-900"
        >
          {t("home.spring_banner.description")}
        </span>
      </div>

      <Link
        href="/order"
        className="mt-1 inline-flex w-full items-center justify-center rounded-full px-5 py-2 text-sm font-semibold text-white no-underline bg-emerald-700 hover:bg-emerald-800 transition-colors sm:mt-0 sm:w-auto"
      >
        {t("home.spring_banner.cta")}
      </Link>

      {/* <span className="hidden text-xl sm:inline sm:text-2xl" aria-hidden="true">🌸</span> */}

      <button
        type="button"
        onClick={() => setVisible(false)}
        aria-label={t("home.spring_banner.close")}
        className="absolute right-2 top-2 cursor-pointer border-0 bg-transparent p-1 text-lg leading-none sm:right-3 sm:top-1/2 sm:-translate-y-1/2"
        style={{ color: "#0047ab" }}
      >
        ✕
      </button>
    </div>
  );
}