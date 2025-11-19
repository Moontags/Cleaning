'use client';

import { Award, Heart, Shield, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function AboutPage() {
  const { t } = useLanguage();

  const values = [
    {
      icon: Award,
      title: t('why.professional.title'),
      description: t('why.professional.desc'),
    },
    {
      icon: Shield,
      title: t('why.reliable.title'),
      description: t('why.reliable.desc'),
    },
    {
      icon: Heart,
      title: t('why.eco.title'),
      description: t('why.eco.desc'),
    },
    {
      icon: TrendingUp,
      title: t('why.flexible.title'),
      description: t('why.flexible.desc'),
    },
  ];

  return (
    <div>
      {/* Hero Section - Moderni gradient */}
      <section className="relative bg-gradient-to-br from-[#003580] via-[#0047ab] to-[#0056d6] text-white section-padding overflow-hidden">
        {/* Dekoratiiviset tausta-elementit */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
        </div>

        <div className="section-container text-center relative z-10">
          <div style={{ maxWidth: '48rem', margin: '0 auto' }}>
            <h1 className="text-4xl md:text-5xl font-bold animate-fade-in" style={{ marginBottom: '1.5rem' }}>
              {t('about.title')}
            </h1>
            <p className="text-xl md:text-2xl text-blue-50 leading-relaxed">
              {t('about.subtitle')}
            </p>
          </div>
        </div>

        {/* Aalto-efekti */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 80C1200 80 1320 70 1380 65L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Story Section - Moderni korttiasettelu */}
      <section className="section-container section-padding" style={{ marginTop: '-3rem' }}>
        <div style={{ maxWidth: '56rem', margin: '0 auto' }}>
          <h2 className="heading-2 text-center text-[#003580]" style={{ marginBottom: '3rem' }}>
            {t('about.story.title')}
          </h2>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100" style={{ padding: '2.5rem' }}>
            <div className="text-body" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <p className="text-gray-700 leading-relaxed text-lg">
                {t('about.story.p1')}
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                {t('about.story.p2')}
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                {t('about.story.p3')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - Modernit kortit */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white section-padding">
        <div className="section-container">
          <h2 className="heading-2 text-center text-[#003580]" style={{ marginBottom: '3rem' }}>
            {t('about.values.title')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: '1.5rem' }}>
            {values.map((value, index) => (
              <div 
                key={index}
                className="group relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden transform hover:-translate-y-2"
                style={{ padding: '2rem' }}
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#003580]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="bg-gradient-to-br from-[#003580] to-[#0047ab] w-16 h-16 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg" style={{ marginBottom: '1.25rem' }}>
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#003580] group-hover:text-[#0047ab] transition-colors" style={{ marginBottom: '0.75rem' }}>
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>

                {/* Dekoratiivinen elementti */}
                <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-[#003580]/5 rounded-full blur-2xl group-hover:bg-[#003580]/10 transition-colors"></div>
              </div>
            ))}
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