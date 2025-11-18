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
    
    'services.construction_end.title': 'Rakennusten loppusiivous',
    'services.construction_end.desc': 'Perusteellinen siivous rakennusprojektien jälkeen, valmiina luovutukseen.',
    
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
    'contact.address.line1': 'Petsamonkatu',
    'contact.address.line2': '11120 Riihimäki, Suomi',
    
    
    'contact.methods.title': 'Tavat ottaa yhteyttä',
    'contact.phone_card.title': 'Soita meille',
    'contact.phone_card.desc': 'Nopein tapa saada vastaus kysymyksiisi',
    'contact.email_card.title': 'Lähetä sähköpostia',
    'contact.email_card.desc': 'Vastaamme 24 tunnin sisällä',
    'contact.form_card.title': 'Täytä tarjouslomake',
    'contact.form_card.desc': 'Saat räätälöidyn tarjouksen tarpeisiisi',
    'contact.form_card.button': 'Pyydä tarjous →',
    'contact.youtube_card.title': 'Katso videoitamme',
    'contact.youtube_card.desc': 'Tutustu palveluihimme YouTube-kanavaltamme',
    'contact.youtube_card.button': 'YouTube-kanava →',
    'contact.map.title': 'Toimistomme sijainti',
    'contact.map.location': 'Riihimäki',
    'contact.map.address1': 'Petsamonkatu',
    'contact.map.address2': '11120 Riihimäki, Suomi',
    'contact.map.button': 'Avaa Google Mapsissa →',
    'contact.map.hours_title': 'Aukioloajat',
    'contact.map.hours_period': 'Maanantai - Perjantai',
    'contact.faq.title': 'Usein kysytyt kysymykset',
    'contact.faq1.title': 'Kuinka nopeasti voitte aloittaa?',
    'contact.faq1.desc': 'Voimme yleensä aloittaa palvelun 1-2 viikon sisällä yhteydenotosta. Kiireellisissä tapauksissa pystymme usein järjestämään nopeammankin aloituksen.',
    'contact.faq2.title': 'Onko henkilökuntanne vakuutettu?',
    'contact.faq2.desc': 'Kyllä, kaikki työntekijämme ovat täysin vakuutettuja ja taustaltaan tarkastettuja. Voit luottaa siihen, että tilasi ovat turvallisissa käsissä.',
    'contact.faq3.title': 'Mitä siivousvälineitä käytätte?',
    'contact.faq3.desc': 'Käytämme ympäristöystävällisiä ja tehokkaita puhdistusaineita sekä ammattitason siivousvälineitä. Kaikki välineet ja aineet sisältyvät palvelun hintaan.',
    'contact.faq4.title': 'Voitteko tulla myös viikonloppuisin?',
    'contact.faq4.desc': 'Kyllä, tarjoamme myös viikonloppu- ja iltapalveluja erikseen sovittaessa. Räätälöimme aikataulut teidän tarpeittenne mukaan.',
    'contact.cta.title': 'Valmis aloittamaan yhteistyön?',
    'contact.cta.desc': 'Ota yhteyttä jo tänään ja saat ilmaisen tarjouksen 24 tunnin sisällä!',
    'contact.cta.phone_number': 'Soita: +358 40 123 4567',
    
    // Hinnasto (PricingPage) - LISÄTTY (VANHAT + UUDET AVAIMET)
    'pricing.title': 'Hinnasto',
    'pricing.subtitle': 'Läpinäkyvät hinnat ja joustavat paketit yrityksille',
    'pricing.contact.cta': 'Pyydä räätälöity tarjous',
    'pricing.quote': 'Tarjous',
    'pricing.popular': 'SUOSITUIN',
    'pricing.starting_from': 'Alkaen',
    'pricing.unit_hourly': '€/tunti', 
    
    // Hinnastokortit
    'pricing.office.desc': 'Toimistojen säännöllinen siivous',
    'pricing.office.feature1': 'Päivittäinen tai viikoittainen siivous',
    'pricing.office.feature2': 'Pöytäpintojen puhdistus',
    'pricing.office.feature3': 'Lattioiden imurointi ja pesu',
    'pricing.office.feature4': 'WC-tilojen huolto',
    'pricing.office.feature5': 'Keittiötilojen siivous',
    'pricing.office.feature6': 'Roskapönttöjen tyhjennys',
    'pricing.office.feature7': 'Yleisten tilojen puhdistus',
    
    'pricing.business.desc': 'Kauppojen ja ravintoloiden siivous',
    'pricing.business.feature1': 'Myyntitilan siivous',
    'pricing.business.feature2': 'Ikkunoiden pesu sisältä',
    'pricing.business.feature3': 'Lattioiden hoito ja kiillotus',
    'pricing.business.feature4': 'Erityishuomio asiakastiloihin',
    'pricing.business.feature5': 'Saniteettitilojen huolto',
    'pricing.business.feature6': 'Räätälöity aikataulu',
    'pricing.business.feature7': 'Säännöllinen laadunvalvonta',
    
    'pricing.industrial.desc': 'Teollisuusympäristöjen siivous',
    'pricing.industrial.feature1': 'Tuotantotilojen siivous',
    'pricing.industrial.feature2': 'Erikoispuhdistukset',
    'pricing.industrial.feature3': 'Turvallisuusvaatimukset huomioitu',
    'pricing.industrial.feature4': 'Kokenut henkilökunta',
    'pricing.industrial.feature5': 'Räätälöidyt ratkaisut',
    'pricing.industrial.feature6': 'Sopimushinta',
    'pricing.industrial.feature7': 'Säännölliset tarkastukset',

    'pricing.construction.desc': 'Rakennusprojektien viimeistelysiivous',
    'pricing.construction.feature1': 'Rakennusjätteen poisto',
    'pricing.construction.feature2': 'Pölyn ja lian perusteellinen poisto',
    'pricing.construction.feature3': 'Ikkunoiden ja karmien pesu',
    'pricing.construction.feature4': 'Lattioiden ja pintojen puhdistus',
    'pricing.construction.feature5': 'Viimeistely ja kiillotus',
    'pricing.construction.feature6': 'Nopea reagointi aikatauluihin',
    'pricing.construction.feature7': 'Kattava laaduntarkastus',

    'pricing.info_text': '* Hinnat ovat alkaen-hintoja ja voivat vaihdella kohteen koon, sijainnin ja palvelun laajuuden mukaan.',
    
    // Edut
    'pricing.benefits.title': 'Hintaan sisältyy aina',
    'pricing.benefit1.title': 'Laatutakuu',
    'pricing.benefit1.desc': 'Jos et ole tyytyväinen, korjaamme asian välittömästi.',
    'pricing.benefit2.title': 'Ammattilaiset',
    'pricing.benefit2.desc': 'Koulutettu ja kokenut henkilökunta palveluksessasi.',
    'pricing.benefit3.title': 'Joustavuus',
    'pricing.benefit3.desc': 'Räätälöimme aikataulut juuri teidän tarpeisiinne.',

    // Sisältyvyydet
    'pricing.inclusions.title': 'Mitä hintaan sisältyy?',
    'pricing.inclusions1.title': 'Ammattilaisvälineet',
    'pricing.inclusions1.desc': 'Kaikki tarvittavat siivousvälineet ja -aineet sisältyvät hintaan.',
    'pricing.inclusions2.title': 'Vakuutettu henkilöstö',
    'pricing.inclusions2.desc': 'Kaikki työntekijämme ovat vakuutettuja ja taustaltaan tarkastettuja.',
    'pricing.inclusions3.title': 'Ympäristöystävälliset aineet',
    'pricing.inclusions3.desc': 'Käytämme ekologisia ja tehokkaita puhdistusaineita.',
    'pricing.inclusions4.title': 'Laadunvalvonta',
    'pricing.inclusions4.desc': 'Säännölliset tarkastukset ja laadun seuranta.',
    'pricing.inclusions5.title': 'Joustavat sopimukset',
    'pricing.inclusions5.desc': 'Ei pitkiä sitoumusaikoja, räätälöimme palvelun tarpeisiisi.',
    'pricing.inclusions6.title': 'Asiakastuki',
    'pricing.inclusions6.desc': 'Aina tavoitettavissa, jos tarvitset apua tai muutoksia.',
    
    // Räätälöity tarjous CTA
    'pricing.custom_cta.title': 'Tarvitsetko räätälöidyn ratkaisun?',
    'pricing.custom_cta.desc': 'Jokainen yritys on erilainen, ja ymmärrämme että tarpeesi saattavat olla ainutlaatuisia. Ota yhteyttä, niin suunnitellaan juuri sinun yrityksellesi sopiva siivousratkaisu ja hinnoittelu.',
    
    // Vertaile taulukko
    'pricing.compare.title': 'Vertaile palveluitamme',
    'pricing.compare.feature': 'Ominaisuus',
    'pricing.compare.office': 'Toimisto',
    'pricing.compare.business': 'Liiketilat',
    'pricing.compare.industrial': 'Teollisuus',
    'pricing.compare.construction_end': 'Loppusiivous',
    'pricing.compare.regular': 'Säännöllinen siivous',
    'pricing.compare.special': 'Erikoispuhdistukset',
    'pricing.compare.height_work': 'Korkeatyöt',
    'pricing.compare.weekend': 'Viikonloppupalvelu',
    'pricing.compare.eco': 'Ympäristöystävälliset aineet',
    'pricing.compare.quality_control': 'Laadunvalvonta',

    // FAQ
    'pricing.faq.title': 'Usein kysytyt kysymykset hinnoittelusta',
    'pricing.faq1.title': 'Miten hinnoittelu toimii?',
    'pricing.faq1.desc': 'Hinnoittelumme perustuu työtunteihin tai pinta-alaan riippuen palvelusta. Teemme aina ilmaisen kartoituksen ja tarjouksen ennen sopimuksen tekoa. Säännöllisissä sopimuksissa saat usein paremman hinnan.',
    'pricing.faq2.title': 'Onko hinnoissa lisämaksuja?',
    'pricing.faq2.desc': 'Ei, hinnat sisältävät kaikki normaalit siivousaineet ja -välineet. Lisämaksuja voi tulla vain erikoispalveluista tai erityisvälineistä, jotka sovitaan aina etukäteen.',
    'pricing.faq3.title': 'Millaisia maksumahdollisuuksia on?',
    'pricing.faq3.desc': 'Tarjoamme joustavia maksuehtoja: kuukausilaskutus, laskutusjakso 14-30 päivää, ja hyväksymme kaikki yleiset maksutavat. Säännöllisille asiakkaille tarjoamme myös kuukausiveloituksen.',
    'pricing.faq4.title': 'Voiko hintaa neuvotella?',
    'pricing.faq4.desc': 'Kyllä! Erityisesti pitkäaikaisille sopimuksille ja suuremmille kohteille voimme räätälöidä hinnoittelun. Ota yhteyttä, niin keskustellaan yhdessä sinulle sopivasta ratkaisusta.',

    // Loppu CTA
    'pricing.final_cta.title': 'Aloita puhtaampi työympäristö tänään',
    'pricing.final_cta.desc': 'Pyydä ilmainen tarjous ja saat vastauksen 24 tunnin sisällä!',
    'pricing.final_cta.button': 'Pyydä ilmainen tarjous →',

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
    'order.form.service.construction_end': 'Rakennusten loppusiivous', 
    'order.form.service.other': 'Muu palvelu',
    'order.form.message': 'Lisätietoja',
    'order.form.submit': 'Lähetä tarjouspyyntö',
    
    // Tietoja MEISTÄ - PÄIVITETTY
    'about.title': 'Tietoja meistä',
    'about.subtitle': 'Luotettava kumppunisi puhtauden ylläpidossa',
    'about.story.title': 'Tarinamme', 
    'about.story.p1': 'Olemme uusi kotimainen siivousyritys, jonka tiimillä on jo kuitenkin pitkä ja monipuolinen kokemus siivousalalta.',
    'about.story.p2': 'Vaikka yrityksemme on nuori, tiimimme koostuu koulutetuista ammattilaisista, jotka ovat vuosien varrella hankkineet laajan osaamisen ja ovat sitoutuneet tarjoamaan korkeinta laatua jokaisessa työkohteessa. Käytämme ympäristöystävällisiä puhdistusaineita ja moderneja menetelmiä varmistaaksemme sekä tehokkuuden että turvallisuuden.',
    'about.story.p3': 'Uskomme pitkäaikaisiin asiakassuhteisiin ja räätälöimme palvelumme jokaisen asiakkaan yksilöllisten tarpeiden mukaan. Tavoitteemme on olla luotettava kumppanisi puhtauden ylläpidossa.',
    'about.values.title': 'Arvomme', 
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
    
    // NEW SERVICE ADDED: POST-CONSTRUCTION CLEANING
    'services.construction_end.title': 'Post-Construction Cleaning',
    'services.construction_end.desc': 'Thorough cleaning after construction projects, ready for handover.',
    
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
    
    // Contact (OLD + NEW KEYS)
    'contact.title': 'Contact Us',
    'contact.subtitle': 'We are ready to serve you. Get in touch and let\'s discuss your needs.',
    'contact.info.title': 'Contact Information',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.address': 'Address',
    'contact.hours': 'Business Hours',
    'contact.hours.value': 'Mon-Fri 8:00-16:00',
    'contact.address.line1': 'Petsamonkatu',
    'contact.address.line2': '11120 Riihimäki, Finland',

    // NEW KEYS for ContactPage.js
    'contact.methods.title': 'Ways to contact us',
    'contact.phone_card.title': 'Call us',
    'contact.phone_card.desc': 'The fastest way to get answers to your questions',
    'contact.email_card.title': 'Send an email',
    'contact.email_card.desc': 'We will respond within 24 hours',
    'contact.form_card.title': 'Fill out the quote form',
    'contact.form_card.desc': 'Get a customized quote for your needs',
    'contact.form_card.button': 'Request quote →',
    'contact.youtube_card.title': 'Watch our videos',
    'contact.youtube_card.desc': 'Learn about our services on our YouTube channel',
    'contact.youtube_card.button': 'YouTube Channel →',
    'contact.map.title': 'Our office location',
    'contact.map.location': 'Riihimäki',
    'contact.map.address1': 'Petsamonkatu',
    'contact.map.address2': '11120 Riihimäki, Finland',
    'contact.map.button': 'Open in Google Maps →',
    'contact.map.hours_title': 'Business Hours',
    'contact.map.hours_period': 'Monday - Friday',
    'contact.faq.title': 'Frequently Asked Questions',
    'contact.faq1.title': 'How soon can you start?',
    'contact.faq1.desc': 'We can usually start the service within 1-2 weeks of contact. In urgent cases, we can often arrange a quicker start.',
    'contact.faq2.title': 'Is your staff insured?',
    'contact.faq2.desc': 'Yes, all our employees are fully insured and background-checked. You can trust that your premises are in safe hands.',
    'contact.faq3.title': 'What cleaning equipment do you use?',
    'contact.faq3.desc': 'We use eco-friendly and effective cleaning agents as well as professional-grade equipment. All equipment and agents are included in the service price.',
    'contact.faq4.title': 'Can you also come on weekends?',
    'contact.faq4.desc': 'Yes, we also offer weekend and evening services by separate arrangement. We tailor the schedules to your needs.',
    'contact.cta.title': 'Ready to start cooperation?',
    'contact.cta.desc': 'Contact us today and get a free quote within 24 hours!',
    'contact.cta.phone_number': 'Call: +358 40 123 4567',
    
    // Pricing (PricingPage) - ADDED (OLD + NEW KEYS)
    'pricing.title': 'Pricing',
    'pricing.subtitle': 'Transparent prices and flexible packages for businesses',
    'pricing.contact.cta': 'Request Custom Quote',
    'pricing.quote': 'Quote',
    'pricing.popular': 'MOST POPULAR',
    'pricing.starting_from': 'Starting from',
    'pricing.unit_hourly': '€/hour', // NEW ADDITION
    
    // Pricing Cards
    'pricing.office.desc': 'Regular cleaning for offices',
    'pricing.office.feature1': 'Daily or weekly cleaning',
    'pricing.office.feature2': 'Wiping and dusting of surfaces',
    'pricing.office.feature3': 'Vacuuming and washing of floors',
    'pricing.office.feature4': 'Restroom maintenance',
    'pricing.office.feature5': 'Kitchen area cleaning',
    'pricing.office.feature6': 'Emptying of trash bins',
    'pricing.office.feature7': 'Cleaning of common areas',
    
    'pricing.business.desc': 'Cleaning for shops and restaurants',
    'pricing.business.feature1': 'Sales area cleaning',
    'pricing.business.feature2': 'Interior window washing',
    'pricing.business.feature3': 'Floor care and polishing',
    'pricing.business.feature4': 'Special attention to customer spaces',
    'pricing.business.feature5': 'Sanitary facility maintenance',
    'pricing.business.feature6': 'Customized schedule',
    'pricing.business.feature7': 'Regular quality control',
    
    'pricing.industrial.desc': 'Cleaning for industrial environments',
    'pricing.industrial.feature1': 'Production facility cleaning',
    'pricing.industrial.feature2': 'Specialized cleaning services',
    'pricing.industrial.feature3': 'Safety requirements considered',
    'pricing.industrial.feature4': 'Experienced staff',
    'pricing.industrial.feature5': 'Tailored solutions',
    'pricing.industrial.feature6': 'Contract price',
    'pricing.industrial.feature7': 'Regular inspections',

    'pricing.construction.desc': 'Final cleaning for construction projects',
    'pricing.construction.feature1': 'Removal of construction debris',
    'pricing.construction.feature2': 'Thorough removal of dust and dirt',
    'pricing.construction.feature3': 'Washing of windows and frames',
    'pricing.construction.feature4': 'Cleaning of floors and surfaces',
    'pricing.construction.feature5': 'Finishing and polishing',
    'pricing.construction.feature6': 'Quick response to schedules',
    'pricing.construction.feature7': 'Comprehensive quality check',
    
    'pricing.info_text': '* Prices are "starting from" prices and may vary based on the size, location, and scope of the service.',
    
    // Benefits
    'pricing.benefits.title': 'Always included in the price',
    'pricing.benefit1.title': 'Quality Guarantee',
    'pricing.benefit1.desc': 'If you are not satisfied, we will rectify the matter immediately.',
    'pricing.benefit2.title': 'Professionals',
    'pricing.benefit2.desc': 'Trained and experienced staff at your service.',
    'pricing.benefit3.title': 'Flexibility',
    'pricing.benefit3.desc': 'We tailor the schedules exactly to your needs.',

    // Inclusions
    'pricing.inclusions.title': 'What is included in the price?',
    'pricing.inclusions1.title': 'Professional equipment',
    'pricing.inclusions1.desc': 'All necessary cleaning equipment and agents are included in the price.',
    'pricing.inclusions2.title': 'Insured personnel',
    'pricing.inclusions2.desc': 'All our employees are insured and background-checked.',
    'pricing.inclusions3.title': 'Eco-friendly agents',
    'pricing.inclusions3.desc': 'We use ecological and effective cleaning products.',
    'pricing.inclusions4.title': 'Quality control',
    'pricing.inclusions4.desc': 'Regular inspections and quality monitoring.',
    'pricing.inclusions5.title': 'Flexible contracts',
    'pricing.inclusions5.desc': 'No long commitment periods, we tailor the service to your needs.',
    'pricing.inclusions6.title': 'Customer support',
    'pricing.inclusions6.desc': 'Always reachable if you need assistance or changes.',
    
    // Custom Quote CTA
    'pricing.custom_cta.title': 'Need a tailored solution?',
    'pricing.custom_cta.desc': 'Every company is different, and we understand that your needs may be unique. Contact us, and we will plan a cleaning solution and pricing that suits your business.',
    
    // Compare table
    'pricing.compare.title': 'Compare our services',
    'pricing.compare.feature': 'Feature',
    'pricing.compare.office': 'Office',
    'pricing.compare.business': 'Commercial Spaces',
    'pricing.compare.industrial': 'Industrial',
    'pricing.compare.construction_end': 'Post-Construction',
    'pricing.compare.regular': 'Regular cleaning',
    'pricing.compare.special': 'Specialized cleaning',
    'pricing.compare.height_work': 'Height work',
    'pricing.compare.weekend': 'Weekend service',
    'pricing.compare.eco': 'Eco-friendly agents',
    'pricing.compare.quality_control': 'Quality control',

    // FAQ
    'pricing.faq.title': 'Frequently Asked Questions about Pricing',
    'pricing.faq1.title': 'How does pricing work?',
    'pricing.faq1.desc': 'Our pricing is based on working hours or area, depending on the service. We always perform a free survey and offer before entering into a contract. Regular contracts often give you a better price.',
    'pricing.faq2.title': 'Are there any extra charges in the prices?',
    'pricing.faq2.desc': 'No, prices include all normal cleaning agents and equipment. Extra charges may only arise from special services or specialized equipment, which are always agreed upon in advance.',
    'pricing.faq3.title': 'What payment options are available?',
    'pricing.faq3.desc': 'We offer flexible payment terms: monthly invoicing, billing period 14-30 days, and we accept all common payment methods. We also offer monthly billing for regular customers.',
    'pricing.faq4.title': 'Can the price be negotiated?',
    'pricing.faq4.desc': 'Yes! Especially for long-term contracts and larger sites, we can tailor the pricing. Contact us, and let\'s discuss a solution that works for you.',

    // Final CTA
    'pricing.final_cta.title': 'Start a cleaner work environment today',
    'pricing.final_cta.desc': 'Request a free quote and receive a response within 24 hours!',
    'pricing.final_cta.button': 'Request a free quote →',
    
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
    'order.form.service.construction_end': 'Post-Construction Cleaning', // NEW ADDED
    'order.form.service.other': 'Other Service',
    'order.form.message': 'Additional Information',
    'order.form.submit': 'Send Quote Request',
    
    // About - UPDATED
    'about.title': 'About Us',
    'about.subtitle': 'Your reliable partner in maintaining cleanliness',
    'about.story.title': 'Our Story', 
    'about.story.p1': 'We are a new domestic cleaning company with a team that has long and diverse experience in the cleaning industry.', 
    'about.story.p2': 'Although our company is young, our team consists of trained professionals who have gained extensive expertise over the years and are committed to providing the highest quality in every workplace. We use eco-friendly cleaning agents and modern methods to ensure both efficiency and safety.',
    'about.story.p3': 'We believe in long-term customer relationships and tailor our services to the individual needs of each client. Our goal is to be more than just a service provider – we want to be your trusted partner in maintaining cleanliness.', 
    'about.values.title': 'Our Values',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('fi');

  const t = (key: string): string => {
    const currentTranslations = translations[language];
   
    return (currentTranslations as Record<string, string>)[key] || key;
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