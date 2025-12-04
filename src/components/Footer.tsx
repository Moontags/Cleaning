"use client";

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-[#01263a] via-[#003580] to-[#0047ab] text-white overflow-hidden">
      {/* Dekoratiiviset tausta-elementit */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-16 left-8 w-80 h-80 bg-white/6 rounded-full blur-3xl transform -translate-x-4 -translate-y-4"></div>
        <div className="absolute bottom-16 right-8 w-96 h-96 bg-blue-300/6 rounded-full blur-3xl transform translate-x-4 translate-y-4"></div>
      </div>

      <div className="section-container relative z-10" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
        <div className="grid grid-cols-1 md:grid-cols-4" style={{ gap: '2.5rem' }}>
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white" style={{ marginBottom: '1rem' }}>
              Siivousote
            </h3>
            <div className="text-blue-100 leading-relaxed" style={{ marginBottom: '1rem' }}>
              <p className="font-semibold mb-2">{t('footer.service_areas')}</p>
              <ul className="space-y-1 text-sm">
                <li>{t('footer.area.metropolitan')}</li>
                <li>{t('footer.area.kanta_hame')}</li>
                <li>{t('footer.area.hyvinkaa')}</li>
                <li>{t('footer.area.nurmijärvi')}</li>
                <li>{t('footer.area.jarvenpaa')}</li>
                <li>{t('footer.area.tuusula')}</li>
              </ul>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold text-blue-100" style={{ marginBottom: '1.25rem' }}>
              {t('footer.company')}
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li>
                <Link href="/about" className="text-blue-200 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-blue-200 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block">
                  {t('nav.pricing')}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-blue-200 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block">
                  {t('nav.contact')}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-blue-200 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block">
                  {t('nav.terms')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-blue-100" style={{ marginBottom: '1.25rem' }}>
              {t('footer.services')}
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li>
                <Link href="/services/office-cleaning" className="text-blue-200 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block">
                  {t('services.office.title')}
                </Link>
              </li>
              <li>
                <Link
                  href="/services/commercial-cleaning"
                  className="text-blue-200 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  {t("services.business.title")}
                </Link>
              </li>
              <li>
                <Link
                  href="/services/industrial-cleaning"
                  className="text-blue-200 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  {t("services.industrial.title")}
                </Link>
              </li>
              <li>
                <Link href="/services/post-construction-cleaning" className="text-blue-200 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block">
                  {t('services.construction_end.title')}
                </Link>
              </li>
              <li>
                <Link
                  href="/services/home-cleaning"
                  className="text-blue-200 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  {t("services.home_cleaning.title")}
                </Link>
              </li>
              
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-blue-100" style={{ marginBottom: '1.25rem' }}>
              {t('footer.contact.title')}
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li className="flex items-start group" style={{ gap: '0.75rem' }}>
                <div className="w-10 h-10 bg-white/12 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300">
                  <Mail className="h-5 w-5 text-blue-100" />
                </div>
                <div className="flex-1">
                  <a href="mailto:info@siivousote.fi" className="text-blue-200 hover:text-white transition-colors duration-300 break-all">
                    info@siivousote.fi
                  </a>
                </div>
              </li>
              <li className="flex items-start group" style={{ gap: '0.75rem' }}>
                <div className="w-10 h-10 bg-white/12 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300">
                  <Phone className="h-5 w-5 text-blue-100" />
                </div>
                <div className="flex-1">
                  <a href="tel:+358401234567" className="text-blue-200 hover:text-white transition-colors duration-300">
                    +358 40 218 3270
                  </a>
                </div>
              </li>
              <li className="flex items-start group" style={{ gap: '0.75rem' }}>
                <div className="w-10 h-10 bg-white/12 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300">
                  <MapPin className="h-5 w-5 text-blue-100" />
                </div>
                <div className="flex-1">
                  <span className="text-blue-200">
                    Petsamonkatu
                    <br />
                    11120 Riihimäki
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="border-t border-white/10 text-center backdrop-blur-sm" style={{ marginTop: '3rem', paddingTop: '2rem' }}>
          <p className="text-blue-100">
            © {currentYear} Siivousote. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}