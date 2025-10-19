'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fi' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Käännökset
const translations = {
  fi: {
    // Navigaatio
    'nav.home': 'Etusivu',
    'nav.about': 'Tietoja',
    'nav.pricing': 'Hinnasto',
    'nav.contact': 'Yhteystiedot',
    'nav.order': 'Tilaa siivous',
    
    // Etusivu
    'home.hero.title': 'Ammattitaitoista siivousta yrityksille',
    'home.hero.subtitle': 'Luotettava kumppanisi puhtauden ylläpidossa. Keskitymme yritysten, toimistojen ja yhteisöjen siivouspalveluihin Pääkaupunkiseudun ja Kanta-Hämeen alueella.',
    'home.hero.cta': 'Pyydä tarjous',
    'home.hero.contact': 'Ota yhteyttä',
    
    // Palvelut
    'services.title': 'Palvelumme',
    'services.office.title': 'Toimistosiivoukset',
    'services.office.desc': 'Säännölliset ja kertaluonteiset toimistosiivoukset ammattilaisilta.',
    'services.business.title': 'Liiketilojen siivous',
    'services.business.desc': 'Kauppojen, ravintoloiden ja muiden liiketilojen puhtaanapito.',
    'services.industrial.title': 'Teollisuussiivoukset',
    'services.industrial.desc': 'Vaativat teollisuusympäristöjen siivoukset turvallisesti.',
    'services.window.title': 'Ikkunanpesu',
    'services.window.desc': 'Ammattitaitoinen ikkunanpesu korkealaatuisilla välineillä.',
    
    // Miksi valita meidät
    'why.title': 'Miksi valita Siivousote?',
    'why.professional.title': 'Ammattitaito',
    'why.professional.desc': 'Koulutettu henkilökunta ja vuosien kokemus alalta.',
    'why.reliable.title': 'Luotettavuus',
    'why.reliable.desc': 'Sovitut aikataulut pitävät ja laatu on taattua.',
    'why.eco.title': 'Ympäristöystävällisyys',
    'why.eco.desc': 'Käytämme ekologisia ja tehokkaita puhdistusaineita.',
    'why.flexible.title': 'Joustavuus',
    'why.flexible.desc': 'Räätälöimme palvelumme asiakkaan tarpeiden mukaan.',
    
    // Footer
    'footer.rights': 'Kaikki oikeudet pidätetään.',
    'footer.company': 'Yritys',
    'footer.services': 'Palvelut',
    'footer.contact.title': 'Yhteystiedot',
    
    // Yhteystiedot
    'contact.title': 'Ota yhteyttä',
    'contact.subtitle': 'Olemme valmiina palvelemaan sinua. Ota yhteyttä, niin keskustellaan tarpeistasi.',
    'contact.info.title': 'Yhteystiedot',
    'contact.email': 'Sähköposti',
    'contact.phone': 'Puhelin',
    'contact.address': 'Osoite',
    'contact.hours': 'Aukioloajat',
    'contact.hours.value': 'Ma-Pe 8:00-16:00',
    
    // Hinnasto
    'pricing.title': 'Hinnasto',
    'pricing.subtitle': 'Läpinäkyvät hinnat ja joustavat paketit yrityksille',
    'pricing.contact.cta': 'Pyydä räätälöity tarjous',
    
    // Tilaa siivous
    'order.title': 'Tilaa siivouspalvelu',
    'order.subtitle': 'Täytä lomake, niin otamme sinuun yhteyttä mahdollisimman pian.',
    'order.form.company': 'Yrityksen nimi',
    'order.form.contact': 'Yhteyshenkilö',
    'order.form.email': 'Sähköposti',
    'order.form.phone': 'Puhelinnumero',
    'order.form.service': 'Palvelu',
    'order.form.service.office': 'Toimistosiivoukset',
    'order.form.service.business': 'Liiketilojen siivous',
    'order.form.service.industrial': 'Teollisuussiivoukset',
    'order.form.service.window': 'Ikkunanpesu',
    'order.form.service.other': 'Muu palvelu',
    'order.form.message': 'Lisätietoja',
    'order.form.submit': 'Lähetä tarjouspyyntö',
    
    // Tietoja
    'about.title': 'Tietoja meistä',
    'about.subtitle': 'Luotettava kumppanisi puhtauden ylläpidossa',
    'about.story.title': 'Tarinamme', // UUSI
    'about.story.p1': 'Olemme pitkän kokemuksen siivousalla omaava yritys ja toimimme Kanta-Hämeen ja Pääkaupunkiseudun alueella.', // UUSI
    'about.story.p2': 'Tiimimme koostuu koulutetuista ammattilaisista, jotka ovat sitoutuneet tarjoamaan korkeinta laatua jokaisessa työkohteessa. Käytämme ympäristöystävällisiä puhdistusaineita ja moderneja menetelmiä varmistaaksemme sekä tehokkuuden että turvallisuuden.', // UUSI
    'about.story.p3': 'Uskomme pitkäaikaisiin asiakassuhteisiin ja räätälöimme palvelumme jokaisen asiakkaan yksilöllisten tarpeiden mukaan. Tavoitteemme on olla enemmän kuin pelkkä palveluntarjoaja – haluamme olla luotettava kumppanisi puhtauden ylläpidossa.', // UUSI
    'about.values.title': 'Arvomme', // UUSI
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.pricing': 'Pricing',
    'nav.contact': 'Contact',
    'nav.order': 'Order Cleaning',
    
    // Homepage
    'home.hero.title': 'Professional Cleaning for Businesses',
    'home.hero.subtitle': 'Your reliable partner in maintaining cleanliness. We focus on cleaning services for companies, offices, and organizations In the Helsinki metropolitan area and the Kanta-Häme region.',
    'home.hero.cta': 'Request Quote',
    'home.hero.contact': 'Contact Us',
    
    // Services
    'services.title': 'Our Services',
    'services.office.title': 'Office Cleaning',
    'services.office.desc': 'Regular and one-time office cleaning by professionals.',
    'services.business.title': 'Commercial Cleaning',
    'services.business.desc': 'Maintenance of shops, restaurants, and other commercial spaces.',
    'services.industrial.title': 'Industrial Cleaning',
    'services.industrial.desc': 'Demanding industrial environment cleaning done safely.',
    'services.window.title': 'Window Cleaning',
    'services.window.desc': 'Professional window cleaning with high-quality equipment.',
    
    // Why choose us
    'why.title': 'Why Choose Siivousote?',
    'why.professional.title': 'Professionalism',
    'why.professional.desc': 'Trained staff and years of industry experience.',
    'why.reliable.title': 'Reliability',
    'why.reliable.desc': 'Agreed schedules are kept and quality is guaranteed.',
    'why.eco.title': 'Eco-Friendly',
    'why.eco.desc': 'We use ecological and effective cleaning products.',
    'why.flexible.title': 'Flexibility',
    'why.flexible.desc': 'We tailor our services to customer needs.',
    
    // Footer
    'footer.rights': 'All rights reserved.',
    'footer.company': 'Company',
    'footer.services': 'Services',
    'footer.contact.title': 'Contact',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'We are ready to serve you. Get in touch and let\'s discuss your needs.',
    'contact.info.title': 'Contact Information',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.address': 'Address',
    'contact.hours': 'Business Hours',
    'contact.hours.value': 'Mon-Fri 8:00-16:00',
    
    // Pricing
    'pricing.title': 'Pricing',
    'pricing.subtitle': 'Transparent prices and flexible packages for businesses',
    'pricing.contact.cta': 'Request Custom Quote',
    
    // Order
    'order.title': 'Order Cleaning Service',
    'order.subtitle': 'Fill out the form and we will contact you as soon as possible.',
    'order.form.company': 'Company Name',
    'order.form.contact': 'Contact Person',
    'order.form.email': 'Email',
    'order.form.phone': 'Phone Number',
    'order.form.service': 'Service',
    'order.form.service.office': 'Office Cleaning',
    'order.form.service.business': 'Commercial Cleaning',
    'order.form.service.industrial': 'Industrial Cleaning',
    'order.form.service.window': 'Window Cleaning',
    'order.form.service.other': 'Other Service',
    'order.form.message': 'Additional Information',
    'order.form.submit': 'Send Quote Request',
    
    // About
    'about.title': 'About Us',
    'about.subtitle': 'Your reliable partner in maintaining cleanliness',
    'about.story.title': 'Our Story', // UUSI
    'about.story.p1': 'We are a company with long experience in the cleaning industry and operate in the Kanta-Häme and Helsinki metropolitan areas.', // UUSI
    'about.story.p2': 'Our team consists of trained professionals committed to providing the highest quality in every workplace. We use eco-friendly cleaning agents and modern methods to ensure both efficiency and safety.', // UUSI
    'about.story.p3': 'We believe in long-term customer relationships and tailor our services to the individual needs of each client. Our goal is to be more than just a service provider – we want to be your trusted partner in maintaining cleanliness.', // UUSI
    'about.values.title': 'Our Values', // UUSI
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('fi');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['fi']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}