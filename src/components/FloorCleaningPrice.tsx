"use client";

import Link from "next/link";
import { Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function FloorCleaningPrice({ showDetails = false }: { showDetails?: boolean }) {
  const { t } = useLanguage();

  return (
    <article className="flex flex-col gap-4 rounded-xl border border-gray-200 bg-[#fbf8f2] p-6">
      <Sparkles className="h-7 w-7 text-primary" aria-hidden="true" />
      <h3 className="text-xl font-semibold text-gray-800">{t("services.floor.title")}</h3>
      <p className="text-2xl font-bold text-primary-dark">{t("pricing.floor.from")}</p>
      <p className="text-sm text-gray-700">{t("pricing.floor.consumer")}</p>
      <ul className="space-y-2 text-gray-700">
        <li>{t("pricing.floor.minimum")}</li>
        <li>{t("pricing.floor.extra")}</li>
      </ul>
      <p className="text-sm leading-relaxed text-gray-700">{t("service.floor.scope.desc")}</p>
      <Link href="/order" className="btn-primary mt-auto text-center">{t("service.floor.cta")}</Link>
      {showDetails && (
        <Link href="/services/machine-floor-cleaning" className="text-center text-primary-dark underline underline-offset-4">
          {t("pricing.floor.details")}
        </Link>
      )}
    </article>
  );
}
