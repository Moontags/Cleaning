"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

const LAATUTAKUU_URL = "https://laatutakuu.fi/siivousote/";

// Laatutakuu-ketjun virallinen logo on valkoinen, joten se asetetaan ketjun
// brändivärisen (#009549) pillerin päälle. Näin logoa ei tarvitse värittää
// uudelleen ja se toimii sivuston vaaleilla taustoilla.
const LOGO_ASPECT = 283.5 / 99;

type LaatutakuuBadgeProps = {
  /** Logon korkeus pikseleinä. Leveys skaalautuu automaattisesti. */
  height?: number;
  className?: string;
};

export default function LaatutakuuBadge({
  height = 14,
  className = "",
}: LaatutakuuBadgeProps) {
  const { t } = useLanguage();
  const alt = t("laatutakuu.alt");

  return (
    <a
      href={LAATUTAKUU_URL}
      target="_blank"
      rel="noopener noreferrer"
      title={alt}
      className={`inline-flex items-center bg-[#009549] rounded-md transition-opacity duration-200 hover:opacity-85 ${className}`}
      style={{ padding: `${Math.round(height * 0.45)}px ${Math.round(height * 0.6)}px` }}
    >
      <Image
        src="/laatutakuu-logo-white.svg"
        alt={alt}
        width={Math.round(height * LOGO_ASPECT)}
        height={height}
        style={{ height, width: "auto" }}
      />
    </a>
  );
}
