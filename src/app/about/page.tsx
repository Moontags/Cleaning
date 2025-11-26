'use client';

import { Award, Heart, Shield, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Hero from '@/components/Hero';

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
      <Hero
        variant="main"
        title={t('about.title')}
        subtitle={t('about.subtitle')}
        maxWidth="48rem"
      />

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
    </div>
  );
}