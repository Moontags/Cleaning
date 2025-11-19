'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const pathname = usePathname();

  const navigation = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.pricing'), href: '/pricing' },
    { name: t('nav.contact'), href: '/contact' },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <header className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <nav className="section-container">
        <div className="flex justify-between items-center h-20">
          {/* Logo - Modernisoidtu */}
          <Link href="/" className="flex items-center space-x-2 flex-shrink-0 group">
            <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#003580] to-[#0047ab] bg-clip-text text-transparent group-hover:from-[#0047ab] group-hover:to-[#0056d6] transition-all duration-300">
              Siivousote
            </div>
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center justify-center flex-1" style={{ marginLeft: '2rem', marginRight: '2rem' }}>
            <div className="flex items-center" style={{ gap: '2rem' }}>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative text-base font-medium transition-all duration-300 whitespace-nowrap group ${
                    isActive(item.href)
                      ? 'text-[#003580]'
                      : 'text-gray-700 hover:text-[#003580]'
                  }`}
                >
                  {item.name}
                  {/* Moderni alakriiva animaatiolla */}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#003580] to-[#0047ab] transition-all duration-300 ${
                    isActive(item.href) 
                      ? 'w-full' 
                      : 'w-0 group-hover:w-full'
                  }`}></span>
                </Link>
              ))}
            </div>
          </div>

          {/* Right side: CTA Button + Language Switcher */}
          <div className="hidden lg:flex items-center flex-shrink-0" style={{ gap: '1.5rem' }}>
            {/* CTA Button - KORJATTU TYYLIT */}
            <Link 
              href="/order" 
              // Korvattu vanhat luokat uusilla, jotka antavat enemmän paddingia ja pyöreämmät kulmat
              className="bg-gradient-to-r from-[#003580] to-[#0047ab] hover:from-[#0047ab] hover:to-[#0056d6] text-white rounded-lg font-medium transition-all duration-300 hover:shadow-md whitespace-nowrap"
              // Lisätty sama padding-tyyli kuin kielivalintanapeissa
              style={{ padding: '0.5rem 0.875rem', fontSize: '0.875rem' }} 
            >
              {t('nav.order')}
            </Link>

            {/* Language Switcher - Modernisoidtu */}
            <div className="flex items-center border-l border-gray-200" style={{ gap: '0.5rem', paddingLeft: '1.5rem', marginLeft: '0.5rem' }}>
              <button
                onClick={() => setLanguage('fi')}
                className={`flex items-center rounded-lg transition-all duration-300 ${
                  language === 'fi'
                    ? 'bg-gradient-to-r from-[#003580] to-[#0047ab] text-white shadow-md'
                    : 'text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
                style={{ gap: '0.25rem', padding: '0.5rem 0.875rem' }}
              >
                <span className="text-lg">🇫🇮</span>
                <span className="text-sm font-medium">FI</span>
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`flex items-center rounded-lg transition-all duration-300 ${
                  language === 'en'
                    ? 'bg-gradient-to-r from-[#003580] to-[#0047ab] text-white shadow-md'
                    : 'text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
                style={{ gap: '0.25rem', padding: '0.5rem 0.875rem' }}
              >
                <span className="text-lg">🇬🇧</span>
                <span className="text-sm font-medium">EN</span>
              </button>
            </div>
          </div>

          {/* Mobile menu button - Modernisoidtu */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl hover:bg-gradient-to-br hover:from-blue-50 hover:to-blue-100 transition-all duration-300 hover:shadow-md"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-[#003580]" />
            ) : (
              <Menu className="h-6 w-6 text-[#003580]" />
            )}
          </button>
        </div>

        {/* Mobile Navigation - Modernisoidtu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white/95 backdrop-blur-sm rounded-b-2xl shadow-lg" style={{ paddingTop: '1rem', paddingBottom: '1rem', marginTop: '0.5rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`relative text-base font-medium transition-all duration-300 overflow-hidden ${
                    isActive(item.href)
                      ? 'text-[#003580] font-semibold bg-gradient-to-r from-blue-50 to-blue-100'
                      : 'text-gray-700 hover:text-[#003580] hover:bg-gray-50'
                  }`}
                  style={{ padding: '0.875rem 1rem', borderRadius: '0.75rem' }}
                >
                  {item.name}
                  {isActive(item.href) && (
                    <span className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#003580] to-[#0047ab] rounded-r"></span>
                  )}
                </Link>
              ))}

              {/* Mobile CTA Button - Modernisoidtu (Tyyli säilytetty ennallaan mobiilissa) */}
              <Link
                href="/order"
                onClick={() => setIsMenuOpen(false)}
                className="bg-[#003580] hover:bg-[#0047ab] text-white text-center rounded-xl font-medium transition-all duration-300 hover:shadow-lg block"
                style={{ marginTop: '1rem', padding: '1.125rem 2rem' }}
              >
                {t('nav.order')}
              </Link>

              {/* Mobile Language Switcher - Modernisoidtu */}
              <div className="flex items-center border-t border-gray-100" style={{ gap: '0.5rem', paddingTop: '1rem', marginTop: '1rem' }}>
                <button
                  onClick={() => setLanguage('fi')}
                  className={`flex items-center rounded-xl transition-all duration-300 flex-1 justify-center ${
                    language === 'fi'
                      ? 'bg-gradient-to-r from-[#003580] to-[#0047ab] text-white shadow-md'
                      : 'text-gray-700 hover:bg-gray-50 border border-gray-200'
                  }`}
                  style={{ gap: '0.25rem', padding: '0.875rem 1rem' }}
                >
                  <span className="text-lg">🇫🇮</span>
                  <span className="text-sm font-medium">FI</span>
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`flex items-center rounded-xl transition-all duration-300 flex-1 justify-center ${
                    language === 'en'
                      ? 'bg-gradient-to-r from-[#003580] to-[#0047ab] text-white shadow-md'
                      : 'text-gray-700 hover:bg-gray-50 border border-gray-200'
                  }`}
                  style={{ gap: '0.25rem', padding: '0.875rem 1rem' }}
                >
                  <span className="text-lg">🇬🇧</span>
                  <span className="text-sm font-medium">EN</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}