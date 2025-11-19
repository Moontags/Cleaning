'use client';

import Link from 'next/link';
import { Building2, Store, Factory, CheckCircle, Users, Leaf, Clock, Home, Construction } from 'lucide-react'; 
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
      icon: Home, 
      title: t('services.home_cleaning.title'),
      description: t('services.home_cleaning.desc'),
    },
    {
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
      {/* Hero Section - Moderni gradient tausta */}
      <section className="relative bg-gradient-to-br from-[#003580] via-[#0047ab] to-[#0056d6] text-white overflow-hidden">
        {/* Dekoratiiviset tausta-elementit */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
        </div>

        <div className="section-container section-padding relative z-10">
          <div className="text-center" style={{ maxWidth: '64rem', margin: '0 auto' }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold animate-fade-in" style={{ marginBottom: '1.5rem' }}>
              {t('home.hero.title')} {/* UUSI OTSIKKO */}
            </h1>
            <p className="text-xl md:text-2xl text-blue-50 leading-relaxed" style={{ marginBottom: '2rem' }}>
              {t('home.hero.subtitle')} {/* UUSI ALAOTSIKKO */}
            </p>
            <div className="flex flex-col sm:flex-row justify-center" style={{ gap: '1rem' }}>
            </div>
          </div>
        </div>
        
        {/* Moderni aalto-efekti */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 80C1200 80 1320 70 1380 65L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Services Section - Glassmorphism kortit - MARGIN KORJATTU */}
      <section className="section-container section-padding" style={{ marginTop: '-3rem' }}>
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <h2 className="heading-2 text-[#003580]">{t('services.title')}</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5" style={{ gap: '1.5rem' }}>
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
              style={{ padding: '1.75rem' }}
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#003580]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-[#003580] to-[#0047ab] w-14 h-14 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg" style={{ marginBottom: '1.25rem' }}>
                  <service.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#003580] group-hover:text-[#0047ab] transition-colors" style={{ marginBottom: '0.75rem' }}>
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>

              {/* Dekoratiivinen elementti */}
              <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-[#003580]/5 rounded-full blur-2xl group-hover:bg-[#003580]/10 transition-colors"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section - Modernit kortit */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white section-padding">
        <div className="section-container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h2 className="heading-2 text-[#003580]">{t('why.title')}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4" style={{ gap: '2rem' }}>
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="group text-center transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="relative bg-white w-20 h-20 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-shadow" style={{ marginBottom: '1.25rem' }}>
                  {/* Gradient border effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#003580] to-[#0047ab] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" style={{ padding: '2px' }}>
                    <div className="bg-white w-full h-full rounded-2xl"></div>
                  </div>
                  <benefit.icon className="relative z-10 h-10 w-10 text-[#003580] group-hover:text-[#0047ab] transition-colors" />
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

      {/* CTA Section - Moderni gradient */}
      <section className="relative bg-gradient-to-br from-[#003580] via-[#0047ab] to-[#0056d6] text-white section-padding overflow-hidden">
        {/* Dekoratiiviset elementit */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-20 w-80 h-80 bg-blue-300 rounded-full blur-3xl"></div>
        </div>

        <div className="section-container text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold" style={{ marginBottom: '1.5rem' }}>
            {t('home.hero.cta')}
          </h2>
          {/* KORJATTU: Varmistettu text-center toiminta */}
          <p className="text-xl text-blue-50 mx-auto text-center" style={{ marginBottom: '2rem' }}>
            {t('contact.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center" style={{ gap: '1rem' }}>
            <Link href="/order" className="btn-primary bg-white text-[#003580] hover:bg-blue-50 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              {t('nav.order')}
            </Link>
            <Link href="/contact" className="btn-secondary border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm transform hover:-translate-y-1 transition-all duration-300">
              {t('nav.contact')}
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </div>
  );
}