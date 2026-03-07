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
      className="relative flex flex-col items-center justify-center gap-2 border-b-2 px-4 py-4 text-center sm:flex-row sm:gap-4 sm:px-16"
      style={{
        background:
          "linear-gradient(135deg, #eef5ff 0%, #e5f0ff 50%, #d8e9ff 100%)",
        borderBottomColor: "#c6daf8",
      }}
    >
      <span className="text-xl sm:text-2xl" aria-hidden="true">
        🌿
      </span>

      <div className="max-w-3xl">
        <span
          className="block font-bold tracking-wide"
          style={{
            fontSize: "1.05rem",
            color: "#003580",
            letterSpacing: "0.01em",
          }}
        >
          {t("home.spring_banner.title")}
        </span>
        <span
          className="mt-1 block text-sm sm:text-[0.88rem]"
          style={{ color: "#002b66" }}
        >
          {t("home.spring_banner.description")}
        </span>
      </div>

      <Link
        href="/order"
        className="mt-1 inline-flex w-full items-center justify-center rounded-full px-5 py-2 text-sm font-semibold text-white no-underline sm:mt-0 sm:w-auto"
        style={{ background: "#003580" }}
      >
        {t("home.spring_banner.cta")}
      </Link>

      <span className="hidden text-xl sm:inline sm:text-2xl" aria-hidden="true">
        🌸
      </span>

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