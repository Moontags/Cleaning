"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

export const LAATUTAKUU_URL = "https://laatutakuu.fi/siivousote/";

// Valkoinen logo säilyy alkuperäisenä sivuston neutraalilla taustalla.
const LOGO_ASPECT = 283.5 / 99;

// Logo saa noin 56 % badgen korkeudesta, loput on pystypaddingia. Kokoa
// säädetään paddingilla eikä logoa venytetä: width pysyy aina automaattisena,
// joten mittasuhteet säilyvät.
const PADDING_Y_RATIO = 0.22;
const PADDING_X_RATIO = 0.6;

type LaatutakuuBadgeProps = {
  /**
   * Koko badge-elementin korkeus pikseleinä (ei pelkän logon korkeus).
   * Aseta samaksi kuin viereisillä kontrolleilla.
   */
  height?: number;
  className?: string;
};

export default function LaatutakuuBadge({
  height = 40,
  className = "",
}: LaatutakuuBadgeProps) {
  const { t } = useLanguage();
  const alt = t("laatutakuu.alt");

  const paddingY = Math.round(height * PADDING_Y_RATIO);
  const logoHeight = height - 2 * paddingY;
  const paddingX = Math.round(logoHeight * PADDING_X_RATIO);

  return (
    <a
      href={LAATUTAKUU_URL}
      target="_blank"
      rel="noopener noreferrer"
      title={alt}
      className={`inline-flex items-center justify-center rounded-lg transition-opacity duration-200 hover:opacity-85 ${className}`}
      style={{
        height,
        padding: `${paddingY}px ${paddingX}px`,
        backgroundColor: "var(--color-primary-dark)",
      }}
    >
      <Image
        src="/laatutakuu-logo-white.svg"
        alt={alt}
        width={Math.round(logoHeight * LOGO_ASPECT)}
        height={logoHeight}
        style={{ height: logoHeight, width: "auto" }}
      />
    </a>
  );
}
