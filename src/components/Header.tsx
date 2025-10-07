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
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="section-container">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
            <div className="text-2xl md:text-3xl font-bold text-[#003580]">
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
                  className={`text-base font-medium transition-colors whitespace-nowrap ${
                    isActive(item.href)
                      ? 'text-[#003580] border-b-2 border-[#003580]'
                      : 'text-gray-700 hover:text-[#003580]'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Right side: CTA Button + Language Switcher */}
          <div className="hidden lg:flex items-center flex-shrink-0" style={{ gap: '1.5rem' }}>
            {/* CTA Button */}
            <Link href="/order" className="btn-primary whitespace-nowrap">
              {t('nav.order')}
            </Link>

            {/* Language Switcher */}
            <div className="flex items-center border-l" style={{ gap: '0.75rem', paddingLeft: '1.5rem', marginLeft: '0.5rem' }}>
              <button
                onClick={() => setLanguage('fi')}
                className={`flex items-center rounded transition-colors ${
                  language === 'fi'
                    ? 'bg-[#003580] text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                style={{ gap: '0.25rem', padding: '0.375rem 0.75rem' }}
              >
                <span className="text-xl">🇫🇮</span>
                <span className="text-sm font-medium">FI</span>
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`flex items-center rounded transition-colors ${
                  language === 'en'
                    ? 'bg-[#003580] text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                style={{ gap: '0.25rem', padding: '0.375rem 0.75rem' }}
              >
                <span className="text-xl">🇬🇧</span>
                <span className="text-sm font-medium">EN</span>
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-[#003580]" />
            ) : (
              <Menu className="h-6 w-6 text-[#003580]" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t" style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-base font-medium transition-colors ${
                    isActive(item.href)
                      ? 'text-[#003580] font-semibold bg-blue-50'
                      : 'text-gray-700 hover:text-[#003580] hover:bg-gray-50'
                  }`}
                  style={{ padding: '0.75rem 1rem', borderRadius: '0.5rem' }}
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile CTA Button */}
              <Link
                href="/order"
                onClick={() => setIsMenuOpen(false)}
                className="btn-primary text-center"
                style={{ marginTop: '1rem' }}
              >
                {t('nav.order')}
              </Link>

              {/* Mobile Language Switcher */}
              <div className="flex items-center border-t" style={{ gap: '0.5rem', paddingTop: '1rem', marginTop: '1rem' }}>
                <button
                  onClick={() => setLanguage('fi')}
                  className={`flex items-center rounded transition-colors flex-1 justify-center ${
                    language === 'fi'
                      ? 'bg-[#003580] text-white'
                      : 'text-gray-700 hover:bg-gray-100 border border-gray-300'
                  }`}
                  style={{ gap: '0.25rem', padding: '0.75rem 1rem' }}
                >
                  <span className="text-xl">🇫🇮</span>
                  <span className="text-sm font-medium">FI</span>
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`flex items-center rounded transition-colors flex-1 justify-center ${
                    language === 'en'
                      ? 'bg-[#003580] text-white'
                      : 'text-gray-700 hover:bg-gray-100 border border-gray-300'
                  }`}
                  style={{ gap: '0.25rem', padding: '0.75rem 1rem' }}
                >
                  <span className="text-xl">🇬🇧</span>
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