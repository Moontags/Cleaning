"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function CustomQuote() {
  const { t } = useLanguage();

  return (
    <section className="section-container section-padding">
      <div className="relative bg-white/6 rounded-2xl text-[#003580] text-center overflow-hidden" style={{ padding: '3rem 2rem' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-48 h-48 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-blue-300 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold" style={{ marginBottom: '1rem' }}>{t('pricing.custom_cta.title')}</h2>
          <p className="text-lg text-blue-50 mx-auto" style={{ marginBottom: '2rem' }}>{t('pricing.custom_cta.desc')}</p>
          <div className="flex flex-col sm:flex-row justify-center" style={{ gap: '1rem' }}>
            <Link href="/order" className="inline-block bg-white text-[#003580] rounded-full px-6 py-3 font-semibold shadow-md">
              {t('pricing.contact.cta')}
            </Link>
            <a href="tel:+358402183270" className="inline-block bg-white/20 text-white rounded-full px-6 py-3 font-medium border border-white/25">
              Soita: +358 40 218 3270
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
