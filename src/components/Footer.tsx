'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Youtube } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#003580] text-white">
      <div className="section-container" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
        <div className="grid grid-cols-1 md:grid-cols-4" style={{ gap: '2rem' }}>
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold" style={{ marginBottom: '1rem' }}>Siivousote</h3>
            <p className="text-gray-300" style={{ marginBottom: '1rem' }}>
              {t('home.hero.subtitle')}
            </p>
            <div className="flex" style={{ gap: '1rem' }}>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold" style={{ marginBottom: '1rem' }}>{t('footer.company')}</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors">
                  {t('nav.pricing')}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold" style={{ marginBottom: '1rem' }}>{t('footer.services')}</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li className="text-gray-300">{t('services.office.title')}</li>
              <li className="text-gray-300">{t('services.business.title')}</li>
              <li className="text-gray-300">{t('services.industrial.title')}</li>
              <li className="text-gray-300">{t('services.window.title')}</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold" style={{ marginBottom: '1rem' }}>{t('footer.contact.title')}</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li className="flex items-start" style={{ gap: '0.5rem' }}>
                <Mail className="h-5 w-5 flex-shrink-0" style={{ marginTop: '0.125rem' }} />
                <a 
                  href="mailto:info@siivousote.fi" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  info@siivousote.fi
                </a>
              </li>
              <li className="flex items-start" style={{ gap: '0.5rem' }}>
                <Phone className="h-5 w-5 flex-shrink-0" style={{ marginTop: '0.125rem' }} />
                <a 
                  href="tel:+358401234567" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  +358 40 123 4567
                </a>
              </li>
              <li className="flex items-start" style={{ gap: '0.5rem' }}>
                <MapPin className="h-5 w-5 flex-shrink-0" style={{ marginTop: '0.125rem' }} />
                <span className="text-gray-300">
                  Esimerkkikatu 1<br />
                  00100 Helsinki
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 text-center" style={{ marginTop: '2rem', paddingTop: '2rem' }}>
          <p className="text-gray-300">
            © {currentYear} Siivousote. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}