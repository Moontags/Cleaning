"use client";

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const headingClass =
    "text-[11px] font-medium text-[#9c9182] uppercase tracking-[0.8px]";
  const linkClass =
    "text-xs text-[#6e6557] hover:text-[#36302a] transition-colors duration-200 inline-block";

  return (
    <footer className="bg-[#faf8f3] border-t border-[#e7ded0] text-[#6e6557]">
      <div className="section-container" style={{ paddingTop: '2rem', paddingBottom: '1.5rem' }}>
        <div className="grid grid-cols-1 md:grid-cols-4" style={{ gap: '2.5rem' }}>
          {/* Service Areas */}
          <div>
            <h4 className={headingClass} style={{ marginBottom: '0.75rem' }}>
              {t('footer.service_areas')}
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
              <li>
                <span className="text-xs text-[#6e6557]">
                  {t('footer.area.riihimaki')}
                </span>
              </li>
              <li>
                <span className="text-xs text-[#6e6557]">
                  {t('footer.area.hyvinkaa')}
                </span>
              </li>
              <li>
                <span className="text-xs text-[#6e6557]">
                  {t('footer.area.nurmijärvi')}
                </span>
              </li>
              <li>
                <span className="text-xs text-[#6e6557]">
                  {t('footer.area.jarvenpaa')}
                </span>
              </li>
              <li>
                <span className="text-xs text-[#6e6557]">
                  {t('footer.area.tuusula')}
                </span>
              </li>
              <li>
                <span className="text-xs text-[#6e6557]">
                  {t('footer.area.kanta_hame')}
                </span>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className={headingClass} style={{ marginBottom: '0.75rem' }}>
              {t('footer.company')}
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
              <li>
                <Link href="/about" className={linkClass}>
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link href="/pricing" className={linkClass}>
                  {t('nav.pricing')}
                </Link>
              </li>
              <li>
                <Link href="/contact" className={linkClass}>
                  {t('nav.contact')}
                </Link>
              </li>
              <li>
                <Link href="/terms" className={linkClass}>
                  {t('nav.terms')}
                </Link>
              </li>
              <li>
                <Link href="/vastuu" className={linkClass}>
                  {t('nav.responsibility')}
                </Link>
              </li>
              <li>
                <span className="text-xs text-[#6e6557]">
                  Y-tunnus: 2166541-5
                </span>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className={headingClass} style={{ marginBottom: '0.75rem' }}>
              {t('footer.services')}
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
              <li>
                <Link href="/services/office-cleaning" className={linkClass}>
                  {t('services.office.title')}
                </Link>
              </li>
              <li>
                <Link href="/services/commercial-cleaning" className={linkClass}>
                  {t("services.business.title")}
                </Link>
              </li>
              <li>
                <Link href="/services/industrial-cleaning" className={linkClass}>
                  {t("services.industrial.title")}
                </Link>
              </li>
              <li>
                <Link href="/services/post-construction-cleaning" className={linkClass}>
                  {t('services.construction_end.title')}
                </Link>
              </li>
              <li>
                <Link href="/services/home-cleaning" className={linkClass}>
                  {t("services.home_cleaning.title")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className={headingClass} style={{ marginBottom: '0.75rem' }}>
              {t('footer.contact.title')}
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              <li className="flex items-center" style={{ gap: '0.5rem' }}>
                <Mail className="h-4 w-4 text-[#36302a] shrink-0" />
                <a href="mailto:info@siivousote.fi" className={linkClass}>
                  info@siivousote.fi
                </a>
              </li>
              <li className="flex items-center" style={{ gap: '0.5rem' }}>
                <Phone className="h-4 w-4 text-[#36302a] shrink-0" />
                <a href="tel:+358402183270" className={linkClass}>
                  +358 40 218 3270
                </a>
              </li>
              <li className="flex items-start" style={{ gap: '0.5rem' }}>
                <MapPin className="h-4 w-4 text-[#36302a] shrink-0" style={{ marginTop: '2px' }} />
                <span className="text-xs text-[#6e6557]">
                  Petsamonkatu
                  <br />
                  11120 Riihimäki
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="border-t border-[#e7ded0] flex justify-between text-[11px] text-[#a89e8f]"
          style={{ marginTop: '2rem', paddingTop: '0.875rem' }}
        >
          <span>© {currentYear} Siivousote</span>
          <span>{t('footer.rights')}</span>
        </div>
      </div>
    </footer>
  );
}
