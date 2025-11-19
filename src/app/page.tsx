'use client';

import Link from 'next/link';
// Päivitetyt kuvakkeet: Lisätty Home ja Construction
import { Building2, Store, Factory, Sparkles, CheckCircle, Users, Leaf, Clock, Home, Construction } from 'lucide-react'; 
import { useLanguage } from '@/contexts/LanguageContext';

export default function HomePage() {
  const { t } = useLanguage();

  const services = [
    {
      icon: Building2,
      title: t('services.office.title'),
      description: t('services.office.desc'),
    },
    {
      icon: Store,
      title: t('services.business.title'),
      description: t('services.business.desc'),
    },
    {
      icon: Factory,
      title: t('services.industrial.title'),
      description: t('services.industrial.desc'),
    },
    {
      // UUSI: Kotisiivous
      icon: Home, 
      title: t('services.home_cleaning.title'),
      description: t('services.home_cleaning.desc'),
    },
    {
      // Rakennusten loppusiivous
      icon: Construction, 
      title: t('services.construction_end.title'),
      description: t('services.construction_end.desc'),
    },
  ];

  const benefits = [
    {
      icon: Users,
      title: t('why.professional.title'),
      description: t('why.professional.desc'),
    },
    {
      icon: CheckCircle,
      title: t('why.reliable.title'),
      description: t('why.reliable.desc'),
    },
    {
      icon: Leaf,
      title: t('why.eco.title'),
      description: t('why.eco.desc'),
    },
    {
      icon: Clock,
      title: t('why.flexible.title'),
      description: t('why.flexible.desc'),
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#003580] to-[#0047ab] text-white">
        <div className="section-container section-padding">
          <div className="text-center" style={{ maxWidth: '64rem', margin: '0 auto' }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold" style={{ marginBottom: '1.5rem' }}>
              {t('home.hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 leading-relaxed" style={{ marginBottom: '2rem' }}>
              {t('home.hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row justify-center" style={{ gap: '1rem' }}>
            </div>
          </div>
        </div>
        
        {/* Decorative wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 80C1200 80 1320 70 1380 65L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-container section-padding">
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <h2 className="heading-2">{t('services.title')}</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5" style={{ gap: '2rem' }}> {/* Muutettu lg:grid-cols-5 */}
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              style={{ padding: '1.5rem' }}
            >
              <div className="bg-[#003580] w-16 h-16 rounded-lg flex items-center justify-center" style={{ marginBottom: '1rem' }}>
                <service.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#003580]" style={{ marginBottom: '0.75rem' }}>
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-50 section-padding">
        <div className="section-container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h2 className="heading-2">{t('why.title')}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4" style={{ gap: '2rem' }}>
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="text-center"
              >
                <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto shadow-md" style={{ marginBottom: '1rem' }}>
                  <benefit.icon className="h-10 w-10 text-[#003580]" />
                </div>
                <h3 className="text-xl font-semibold text-[#003580]" style={{ marginBottom: '0.75rem' }}>
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#003580] text-white section-padding">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold" style={{ marginBottom: '1.5rem' }}>
            {t('home.hero.cta')}
          </h2>
          <p className="text-xl text-gray-100 mx-auto" style={{ marginBottom: '2rem' }}>
            {t('contact.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center" style={{ gap: '1rem' }}>
            <Link href="/order" className="btn-primary bg-white text-[#003580] hover:bg-gray-100">
              {t('nav.order')}
            </Link>
            <Link href="/contact" className="btn-secondary border-white text-white hover:bg-white/10">
              {t('nav.contact')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}