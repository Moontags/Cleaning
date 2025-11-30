"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Language = "fi" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

// Käännökset
const translations = {
  fi: {
    // Navigaatio
    "nav.home": "Palvelumme",
    "nav.about": "Tarinamme",
    "nav.pricing": "Hinnasto",
    "nav.contact": "Yhteystiedot",
    "nav.order": "Tilaa siivous",

    // Etusivu
    "home.hero.title": "Siivouspalvelua reippaalla otteella",
    "home.hero.subtitle":
      "Pääkaupunkiseudun ja Kanta-Hämeen alueella",
    "home.hero.cta": "Tilaa siivous",
    "home.hero.contact": "Ota yhteyttä",

    // Palvelut
    "services.title": "Palvelumme",
    "services.office.title": "Toimistosiivoukset",
    "services.office.desc":
      "Säännölliset ja kertaluonteiset toimistosiivoukset ammattilaisilta.",
    "services.business.title": "Liiketilojen siivous",
    "services.business.desc":
      "Kauppojen, ravintoloiden ja muiden liiketilojen puhtaanapito.",
    "services.industrial.title": "Teollisuussiivoukset",
    "services.industrial.desc":
      "Vaativat teollisuusympäristöjen siivoukset turvallisesti.",
    "services.home_cleaning.title": "Kotisiivous",
    "services.home_cleaning.desc":
      "Laadukkaat kotisiivouspalvelut säännöllisesti tai kertaluontoisesti.",

    "services.construction_end.title": "Loppusiivoukset",
    "services.construction_end.desc":
      "Perusteellinen siivous rakennusprojektien jälkeen, valmiina luovutukseen.",

    // Miksi valita meidät
    "why.title": "Miksi valita Siivousote?",
    "why.professional.title": "Ammattitaito",
    "why.professional.desc":
      "Koulutettu henkilökunta ja vuosien kokemus alalta.",
    "why.reliable.title": "Luotettavuus",
    "why.reliable.desc": "Sovitut aikataulut pitävät ja laatu on taattua.",
    "why.eco.title": "Vastuullinen valinta",
    "why.eco.desc":
      "Käytämme ensisijaisesti luontoa kunnioittavia puhdistusaineita.",
    "why.flexible.title": "Joustavuus",
    "why.flexible.desc": "Räätälöimme palvelumme asiakkaan tarpeiden mukaan.",

    "footer.rights": "Kaikki oikeudet pidätetään.",
    "footer.company": "Yritys",
    "footer.services": "Palvelut",
    "footer.contact.title": "Yhteystiedot",
    "footer.service_areas": "Palvelualueet:",
    "footer.area.metropolitan": "Pääkaupunkiseutu",
    "footer.area.kanta_hame": "Kanta-Häme",
    "footer.area.hyvinkaa": "Hyvinkää",
    "footer.area.nurmijärvi": "Nurmijärvi",
    "footer.area.jarvenpaa": "Järvenpää",
    "footer.area.tuusula": "Tuusula",

    // Yhteystiedot
    "contact.title": "Ota yhteyttä",
    "contact.subtitle": "Olemme valmiina palvelemaan sinua.",
    "contact.info.title": "Yhteystiedot",
    "contact.email": "Sähköposti",
    "contact.phone": "Puhelin",
    "contact.address": "Osoite",
    "contact.hours": "Aukioloajat",
    "contact.hours.value": "Ma-Pe 8:00-16:00",
    "contact.address.line1": "Petsamonkatu",
    "contact.address.line2": "11120 Riihimäki",

    "contact.methods.title": "Tavat ottaa yhteyttä",
    "contact.phone_card.title": "Soita meille",
    "contact.phone_card.desc": "Nopein tapa saada vastaus kysymyksiisi",
    "contact.email_card.title": "Lähetä sähköpostia",
    "contact.email_card.desc": "Vastaamme 24 tunnin sisällä",
    "contact.form_card.title": "Täytä tarjouslomake",
    "contact.form_card.desc": "Saat räätälöidyn tarjouksen tarpeisiisi",
    "contact.form_card.button": "Pyydä tarjous →",
    "contact.youtube_card.title": "Katso videoitamme",
    "contact.youtube_card.desc": "Tutustu palveluihimme YouTube-kanavaltamme",
    "contact.youtube_card.button": "YouTube-kanava →",
    "contact.map.title": "Toimistomme sijainti",
    "contact.map.location": "Riihimäki",
    "contact.map.address1": "Petsamonkatu",
    "contact.map.address2": "11120 Riihimäki, Suomi",
    "contact.map.button": "Avaa Google Mapsissa →",
    "contact.map.hours_title": "Aukioloajat",
    "contact.map.hours_period": "Maanantai - Perjantai",
    "contact.faq.title": "Usein kysytyt kysymykset",
    "contact.faq1.title": "Kuinka nopeasti voitte aloittaa?",
    "contact.faq1.desc":
      "Voimme yleensä aloittaa palvelun 1-2 viikon sisällä yhteydenotosta. Kiireellisissä tapauksissa pystymme usein järjestämään nopeammankin aloituksen.",
    "contact.faq2.title": "Onko henkilökuntanne vakuutettu?",
    "contact.faq2.desc":
      "Kyllä, kaikki työntekijämme ovat täysin vakuutettuja ja taustaltaan tarkastettuja. Voit luottaa siihen, että tilasi ovat turvallisissa käsissä.",
    "contact.faq3.title": "Mitä siivousvälineitä käytätte?",
    "contact.faq3.desc":
      "Käytämme ensisijaisesti luontoa kunnioittavia, tehokkaita puhdistusaineita sekä ammattitason siivousvälineitä. Kaikki välineet ja aineet sisältyvät palvelun hintaan.",
    "contact.faq4.title": "Voitteko tulla myös viikonloppuisin?",
    "contact.faq4.desc":
      "Kyllä, tarjoamme myös viikonloppu- ja iltapalveluja erikseen sovittaessa. Räätälöimme aikataulut teidän tarpeittenne mukaan.",
    "contact.cta.title": "Valmis aloittamaan yhteistyön?",
    "contact.cta.desc":
      "Ota yhteyttä jo tänään ja saat ilmaisen tarjouksen 24 tunnin sisällä!",
    "contact.cta.phone_number": "Soita: +358 40 218 3270",

    // Hinnasto (PricingPage) - LISÄTTY (VANHAT + UUDET AVAIMET)
    "pricing.title": "Hinnasto",
    "pricing.subtitle": "Läpinäkyvät hinnat ja joustavat paketit yrityksille",
    "pricing.contact.cta": "Pyydä räätälöity tarjous",
    "pricing.quote": "Tarjous",
    "pricing.popular": "SUOSITUIN",
    "pricing.starting_from": "Alkaen",
    "pricing.unit_hourly": "€/tunti",

    // Hinnastokortit
    "pricing.office.desc": "Toimistojen säännöllinen siivous",
    "pricing.office.feature1": "Päivittäinen tai viikoittainen siivous",
    "pricing.office.feature2": "Pöytäpintojen puhdistus",
    "pricing.office.feature3": "Lattioiden imurointi ja pesu",
    "pricing.office.feature4": "WC-tilojen huolto",
    "pricing.office.feature5": "Keittiötilojen siivous",
    "pricing.office.feature6": "Roskapönttöjen tyhjennys",
    "pricing.office.feature7": "Yleisten tilojen puhdistus",

    "pricing.business.desc": "Kauppojen ja ravintoloiden siivous",
    "pricing.business.feature1": "Myyntitilan siivous",
    "pricing.business.feature2": "Ikkunoiden pesu sisältä",
    "pricing.business.feature3": "Lattioiden hoito ja kiillotus",
    "pricing.business.feature4": "Erityishuomio asiakastiloihin",
    "pricing.business.feature5": "Saniteettitilojen huolto",
    "pricing.business.feature6": "Räätälöity aikataulu",
    "pricing.business.feature7": "Säännöllinen laadunvalvonta",

    "pricing.industrial.desc": "Teollisuusympäristöjen siivous",
    "pricing.industrial.feature1": "Tuotantotilojen siivous",
    "pricing.industrial.feature2": "Erikoispuhdistukset",
    "pricing.industrial.feature3": "Turvallisuusvaatimukset huomioitu",
    "pricing.industrial.feature4": "Kokenut henkilökunta",
    "pricing.industrial.feature5": "Räätälöidyt ratkaisut",
    "pricing.industrial.feature6": "Sopimushinta",
    "pricing.industrial.feature7": "Säännölliset tarkastukset",

    "pricing.construction.desc": "Rakennusprojektien viimeistelysiivous",
    "pricing.construction.feature1": "Rakennusjätteen poisto",
    "pricing.construction.feature2": "Pölyn ja lian perusteellinen poisto",
    "pricing.construction.feature3": "Ikkunoiden ja karmien pesu",
    "pricing.construction.feature4": "Lattioiden ja pintojen puhdistus",
    "pricing.construction.feature5": "Viimeistely ja kiillotus",
    "pricing.construction.feature6": "Nopea reagointi aikatauluihin",
    "pricing.construction.feature7": "Kattava laaduntarkastus",

    // HOME CLEANING (Kotisiivous) pricing texts
    "pricing.home.desc": "Kotisiivoukset ja kertaluontoiset kotipalvelut",
    "pricing.home.feature1": "Keittiön ja pintojen perusteellinen puhdistus",
    "pricing.home.feature2": "Kylpyhuoneen ja WC:n desinfiointi",
    "pricing.home.feature3": "Lattioiden imurointi ja pesu",
    "pricing.home.min_charge": "Minimiveloitus 2 tuntia!",

    "pricing.info_text":
      "* Hinnat ovat alkaen-hintoja ja voivat vaihdella kohteen koon, sijainnin ja palvelun laajuuden mukaan.",

    "pricing.window_cleaning_info":
      "* Ikkunan pesu 60€/h tunti minimiveloitus 2 tuntia!",

    // Edut
    "pricing.benefits.title": "Hintaan sisältyy aina",
    "pricing.benefit1.title": "Laatutakuu",
    "pricing.benefit1.desc":
      "Jos et ole tyytyväinen, korjaamme asian välittömästi.",
    "pricing.benefit2.title": "Ammattilaiset",
    "pricing.benefit2.desc":
      "Koulutettu ja kokenut henkilökunta palveluksessasi.",
    "pricing.benefit3.title": "Joustavuus",
    "pricing.benefit3.desc":
      "Räätälöimme aikataulut juuri teidän tarpeisiinne.",

    // Sisältyvyydet
    "pricing.inclusions.title": "Mitä hintaan sisältyy?",
    "pricing.inclusions1.title": "Ammattilaisvälineet",
    "pricing.inclusions1.desc":
      "Kaikki tarvittavat siivousvälineet ja -aineet sisältyvät hintaan.",
    "pricing.inclusions2.title": "Vakuutettu henkilöstö",
    "pricing.inclusions2.desc":
      "Kaikki työntekijämme ovat vakuutettuja ja taustaltaan tarkastettuja.",
    "pricing.inclusions3.title": "Vastuulliset aineet",
    "pricing.inclusions3.desc":
      "Käytämme ensisijaisesti luontoa kunnioittavia puhdistusaineita.",
    "pricing.inclusions4.title": "Laadunvalvonta",
    "pricing.inclusions4.desc": "Säännölliset tarkastukset ja laadun seuranta.",
    "pricing.inclusions5.title": "Joustavat sopimukset",
    "pricing.inclusions5.desc":
      "Ei pitkiä sitoumusaikoja, räätälöimme palvelun tarpeisiisi.",
    "pricing.inclusions6.title": "Asiakastuki",
    "pricing.inclusions6.desc":
      "Aina tavoitettavissa, jos tarvitset apua tai muutoksia.",

    // Räätälöity tarjous CTA
    "pricing.custom_cta.title": "Tarvitsetko räätälöidyn ratkaisun?",
    "pricing.custom_cta.desc":
      "Jokainen yritys on erilainen, ja ymmärrämme että tarpeesi saattavat olla ainutlaatuisia. Ota yhteyttä, niin suunnitellaan juuri sinun yrityksellesi sopiva siivousratkaisu ja hinnoittelu.",

    // Vertaile taulukko
    "pricing.compare.title": "Vertaile palveluitamme",
    "pricing.compare.feature": "Ominaisuus",
    "pricing.compare.office": "Toimisto",
    "pricing.compare.business": "Liiketilat",
    "pricing.compare.industrial": "Teollisuus",
    "pricing.compare.construction_end": "Loppusiivous",
    "pricing.compare.regular": "Säännöllinen siivous",
    "pricing.compare.special": "Erikoispuhdistukset",
    "pricing.compare.height_work": "Korkeatyöt",
    "pricing.compare.weekend": "Viikonloppupalvelu",
    "pricing.compare.eco": "Ympäristöystävälliset aineet",
    "pricing.compare.quality_control": "Laadunvalvonta",

    // FAQ
    "pricing.faq.title": "Usein kysytyt kysymykset hinnoittelusta",
    "pricing.faq1.title": "Miten hinnoittelu toimii?",
    "pricing.faq1.desc":
      "Hinnoittelumme perustuu työtunteihin tai pinta-alaan riippuen palvelusta. Teemme aina ilmaisen kartoituksen ja tarjouksen ennen sopimuksen tekoa. Säännöllisissä sopimuksissa saat usein paremman hinnan.",
    "pricing.faq2.title": "Onko hinnoissa lisämaksuja?",
    "pricing.faq2.desc":
      "Ei, hinnat sisältävät kaikki normaalit siivousaineet ja -välineet. Lisämaksuja voi tulla vain erikoispalveluista tai erityisvälineistä, jotka sovitaan aina etukäteen.",
    "pricing.faq3.title": "Millaisia maksumahdollisuuksia on?",
    "pricing.faq3.desc":
      "Tarjoamme joustavia maksuehtoja: kuukausilaskutus, laskutusjakso 14-30 päivää, ja hyväksymme kaikki yleiset maksutavat. Säännöllisille asiakkaille tarjoamme myös kuukausiveloituksen.",
    "pricing.faq4.title": "Voiko hintaa neuvotella?",
    "pricing.faq4.desc":
      "Kyllä! Erityisesti pitkäaikaisille sopimuksille ja suuremmille kohteille voimme räätälöidä hinnoittelun. Ota yhteyttä, niin keskustellaan yhdessä sinulle sopivasta ratkaisusta.",

    // Loppu CTA
    "pricing.final_cta.title": "Aloita puhtaampi työympäristö tänään",
    "pricing.final_cta.desc":
      "Pyydä ilmainen tarjous ja saat vastauksen 24 tunnin sisällä!",
    "pricing.final_cta.button": "Pyydä ilmainen tarjous →",

    // Tilaa siivous
    "order.title": "Tilaa siivouspalvelu",
    "order.subtitle":
      "Täytä lomake, niin otamme sinuun yhteyttä mahdollisimman pian.",
    "order.form.company": "Yrityksen nimi tai organisaatio",
    "order.form.contact": "Yhteyshenkilö",
    "order.form.email": "Sähköposti",
    "order.form.phone": "Puhelinnumero",
    "order.form.service": "Palvelu",
    "order.form.service.office": "Toimistosiivoukset",
    "order.form.service.business": "Liiketilojen siivous",
    "order.form.service.industrial": "Teollisuussiivoukset",
    "order.form.service.home_cleaning": "Kotisiivous",
    "order.form.service.construction_end": "Rakennusten loppusiivous",
    "order.form.service.other": "Muu palvelu",
    "order.form.message": "Lisätietoja",
    "order.form.submit": "Lähetä ",
    "order.form.sending": "Lähetetään...",
    "order.form.required_fields": "* Pakolliset kentät",
    "order.success.title": "Kiitos yhteydenotostasi!",
    "order.success.message":
      "Käsittelemme tarjouspyyntösi 24 tunnin sisällä ja otamme sinuun yhteyttä.",

    // UUSI: Paikkamerkkien käännökset
    "order.form.placeholder.company": "Yrityksen nimi tai organisaatio",
    "order.form.placeholder.contact": "Nimi",
    "order.form.placeholder.email": "sähköposti@esimerkki.fi",
    "order.form.placeholder.phone": "+358 40 123 4567",
    "order.form.placeholder.service_select": "Valitse palvelu",
    "order.form.placeholder.message": "Kerro meille tarkemmin tarpeistasi...",

    // UUSI: Jatkotoimenpiteet (Mitä tapahtuu seuraavaksi?)
    "order.next.title": "Mitä tapahtuu seuraavaksi?",
    "order.next.step1": "Käsittelemme tarjouspyyntösi 24 tunnin sisällä",
    "order.next.step2":
      "Otamme sinuun yhteyttä ja tarvittaessa sovimme tapaamisen",
    "order.next.step3": "Lähetämme räätälöidyn tarjouksen yrityksellesi",
    "order.next.step4": "Aloitamme palvelun sopimuksen mukaisesti",

    // Tietoja MEISTÄ
    "about.title": "Tietoja meistä",
    "about.subtitle": "Luotettava kumppanisi puhtauden ylläpidossa",
    "about.story.title": "Tarinamme",
    "about.story.p1":
      "Olemme innolla liikkeelle lähtenyt kotimainen siivousyritys, jonka tiimillä on jo pitkä ja monipuolinen kokemus siivousalalta. Yhdistämällä vuosien asiantuntemuksen ja modernin, reippaan otteen luomme palvelun, joka ylittää perinteisen siivouksen raamit.",
    "about.story.p2":
      "Vaikka yrityksemme on nuori, tiimimme koostuu koulutetuista ammattilaisista, jotka ovat vuosien varrella hankkineet laajan osaamisen ja ovat sitoutuneet tarjoamaan korkeinta laatua jokaisessa työkohteessa. Käytämme ensisijaisesti ympäristöystävällisiä puhdistusaineita ja moderneja menetelmiä varmistaaksemme sekä tehokkuuden että turvallisuuden tiloissasi. Me uskomme, että puhdas ympäristö on tuottavan työn ja hyvän elämän perusta.",
    "about.story.p3":
      "Uskomme pitkäaikaisiin asiakassuhteisiin ja räätälöimme palvelumme jokaisen asiakkaan yksilöllisten tarpeiden mukaan. Asiakastyytyväisyys on toimintamme ydin. Tavoitteemme on olla se luotettava kumppanisi, joka takaa puhtauden ylläpidon ilman, että sinun tarvitsee murehtia siitä.",
    "about.values.title": "Arvomme",
    // UUSI: Arvot (jatkoa "about.values.title":n alle)
    "about.values.reliability.title": "Luotettavuus",
    "about.values.reliability.desc": "Teemme sen, mitä lupaamme. Aikataulut pitävät, ja jälki on aina taatusti laadukasta.",
    "about.values.professionalism.title": "Ammattitaito",
    "about.values.professionalism.desc": "Koulutettu, kokenut ja motivoitunut henkilökuntamme on alan huippua. ",
    "about.values.responsibility.title": "Vastuullisuus",
    "about.values.responsibility.desc": "Välitämme ympäristöstä. Käytämme ekologisia tuotteita ja minimoimme ympäristövaikutukset.",
    "about.values.flexibility.title": "Joustavuus",
    "about.values.flexibility.desc": "Palvelumme muotoutuvat asiakkaan tarpeiden mukaan – tarjoamme ratkaisuja, emme vain palveluita.",


    // OFFICE CLEANING PAGE
    "service.office.hero.title": "Toimistosiivoukset",
    "service.office.hero.subtitle":
      "Puhdas ja viihtyisä toimistoympäristö parantaa työtehoa ja työhyvinvointia",
    "service.office.intro":
      "Tarjoamme kattavat toimistosiivoukset yrityksille kaikenkokoisissa toimitiloissa. Ammattitaitoinen tiimimme huolehtii, että työympäristönne pysyy puhtaana ja terveellisenä päivästä toiseen.",
    "service.office.why.title": "Miksi valita meidän toimistosiivouksemme?",
    "service.office.why.benefit1.title": "Säännöllinen laatu",
    "service.office.why.benefit1.desc":
      "Koulutettu henkilökunta varmistaa tasaisen laadun jokaisella siivouskäynnillä.",
    "service.office.why.benefit2.title": "Joustavat aikataulut",
    "service.office.why.benefit2.desc":
      "Siivoukset aamulla, illalla tai viikonloppuisin – sopii teidän aikatauluunne.",
    "service.office.why.benefit3.title": "Kustannustehokas",
    "service.office.why.benefit3.desc":
      "Pitkäaikaiset sopimukset ja kilpailukykyinen hinnoittelu.",
    "service.office.what.title": "Mitä palveluumme sisältyy?",
    "service.office.what.item1": "Pöytäpintojen ja näyttöpäätteiden pyyhintä",
    "service.office.what.item2": "Lattioiden imurointi ja märkäpesu",
    "service.office.what.item3":
      "WC-tilojen ja sosiaalitilojen perusteellinen puhdistus",
    "service.office.what.item4": "Keittiön ja kahvihuoneen siivous",
    "service.office.what.item5": "Roskapönttöjen tyhjennys ja pussien vaihto",
    "service.office.what.item6": "Kokoussalien ja neuvottelutilojen siivous",
    "service.office.what.item7": "Käytävien ja aula-alueiden puhdistus",
    "service.office.what.item8":
      "Ikkunoiden sisäpuolinen pesu (erikseen sovittaessa)",
    "service.office.frequency.title": "Siivouksen tiheys",
    "service.office.frequency.daily.title": "Päivittäinen siivous",
    "service.office.frequency.daily.desc":
      "Suurille toimistoille, joissa työskentelee paljon henkilökuntaa",
    "service.office.frequency.weekly.title": "Viikoittainen siivous",
    "service.office.frequency.weekly.desc":
      "Keskikokoisille toimistoille, sopii useimpien yritysten tarpeisiin",
    "service.office.frequency.biweekly.title": "Kahden viikon välein",
    "service.office.frequency.biweekly.desc":
      "Pienille toimistoille tai vähemmän käytetyille tiloille",
    "service.office.frequency.custom.title": "Räätälöity aikataulu",
    "service.office.frequency.custom.desc":
      "Suunnitellaan yhdessä juuri teidän tarpeisiinne sopiva ratkaisu",
    "service.office.cta.title": "Aloita puhtaampi työympäristö tänään",
    "service.office.cta.subtitle": "Pyydä ilmainen tarjous toimistosiivoukseen",
    "service.office.cta.button": "Tilaa siivous",

    // COMMERCIAL CLEANING PAGE
    "service.business.hero.title": "Liiketilojen siivous",
    "service.business.hero.subtitle":
      "Puhtaat ja houkuttelevat liiketilat luovat positiivisen ensivaikutelman asiakkaillesi",
    "service.business.intro":
      "Erikoistumme kauppojen, ravintoloiden, myymälöiden ja muiden asiakastilojen siivoukseen. Ymmärrämme, että puhtaus on osa brändiänne ja asiakaskokemusta.",
    "service.business.why.title":
      "Miksi valita ammattilaiset liiketilojen siivoukseen?",
    "service.business.why.benefit1.title": "Ensivaikutelma ratkaisee",
    "service.business.why.benefit1.desc":
      "Puhtaat tilat houkuttelevat asiakkaita ja lisäävät myyntiä.",
    "service.business.why.benefit2.title": "Erikoisosaaminen",
    "service.business.why.benefit2.desc":
      "Kokenut tiimimme tuntee eri liiketilatyyppien erityisvaatimukset.",
    "service.business.why.benefit3.title": "Minimoitu häiriö",
    "service.business.why.benefit3.desc":
      "Siivoamme aukioloaikojen ulkopuolella, jotta liiketoimintanne jatkuu sujuvasti.",
    "service.business.what.title": "Palvelumme liiketiloille",
    "service.business.what.item1": "Myyntitilan lattioiden hoito ja kiillotus",
    "service.business.what.item2": "Ikkunoiden ja ovien pesu säännöllisesti",
    "service.business.what.item3":
      "Asiakastilojen pintojen pyyhintä ja desinfiointi",
    "service.business.what.item4":
      "Pukuhuoneiden ja saniteettistilojen puhdistus",
    "service.business.what.item5": "Henkilökunnan tilojen siivous",
    "service.business.what.item6":
      "Ravintoloiden keittiöiden ja ruokailutilojen erikoissiivous",
    "service.business.what.item7":
      "Myymälähyllyjen ja esittelytilojen puhtaanapito",
    "service.business.what.item8": "Sisäänkäyntien ja kuistien siivous",
    "service.business.types.title": "Palvelemme erityyppisiä liiketiloja",
    "service.business.types.retail": "Vähittäiskaupat ja myymälät",
    "service.business.types.restaurant": "Ravintolat ja kahvilat",
    "service.business.types.salon": "Kauneussalongit ja kampaamot",
    "service.business.types.gym": "Kuntosalit ja liikuntakeskukset",
    "service.business.types.showroom": "Showroomit ja näyttelytilat",
    "service.business.types.clinic": "Klinikat ja vastaanotot",
    "service.business.cta.title": "Tee liiketiloistasi kilpailuvaltti",
    "service.business.cta.subtitle":
      "Pyydä räätälöity tarjous liiketilojen siivoukseen",
    "service.business.cta.button": "Tilaa siivous",

    // INDUSTRIAL CLEANING PAGE
    "service.industrial.hero.title": "Teollisuussiivoukset",
    "service.industrial.hero.subtitle":
      "Vaativat puhdistusratkaisut teollisuusympäristöihin turvallisesti ja tehokkaasti",
    "service.industrial.intro":
      "Teollisuusympäristöt vaativat erikoisosaamista ja -välineitä. Tiimimme on koulutettu käsittelemään vaativia puhdistustehtäviä tuotanto-, varasto- ja teollisuustiloissa noudattaen tiukkoja turvallisuusvaatimuksia.",
    "service.industrial.why.title":
      "Miksi valita ammattilaiset teollisuussiivoukseen?",
    "service.industrial.why.benefit1.title": "Turvallisuus ensin",
    "service.industrial.why.benefit1.desc":
      "Henkilökuntamme on koulutettu työturvallisuuteen ja käyttää asianmukaisia suojavarusteita.",
    "service.industrial.why.benefit2.title": "Erikoisvälineet",
    "service.industrial.why.benefit2.desc":
      "Käytämme teollisuustason puhdistuslaitteita ja -aineita.",
    "service.industrial.why.benefit3.title": "Tuotannon jatkuvuus",
    "service.industrial.why.benefit3.desc":
      "Suunnittelemme siivoukset häiritsemättä tuotantoa, esim. vuoronvaihtojen aikana.",
    "service.industrial.what.title": "Teollisuussiivouksemme sisältää",
    "service.industrial.what.item1":
      "Tuotantotilojen lattioiden pesu ja rasvanpoisto",
    "service.industrial.what.item2":
      "Koneiden ja laitteiden ympäristön puhdistus",
    "service.industrial.what.item3": "Varastotilojen siivous ja järjestely",
    "service.industrial.what.item4": "Pölyn ja lian poisto korkeilta pinnoilta",
    "service.industrial.what.item5": "Toimistojen ja sosiaalitilojen siivous",
    "service.industrial.what.item6":
      "Jätteiden ja kierrätysmateriaalin käsittely",
    "service.industrial.what.item7":
      "Erikoispuhdistukset kemikaaleille ja öljyille",
    "service.industrial.what.item8":
      "Ulkoalueiden ja lastauslaiturien puhdistus",
    "service.industrial.industries.title": "Palvelemme mm. näitä toimialoja",
    "service.industrial.industries.manufacturing": "Valmistava teollisuus",
    "service.industrial.industries.food": "Elintarviketeollisuus",
    "service.industrial.industries.pharma": "Lääketeollisuus",
    "service.industrial.industries.logistics": "Logistiikka ja varastointi",
    "service.industrial.industries.automotive": "Autoteollisuus",
    "service.industrial.industries.chemical": "Kemianteollisuus",
    "service.industrial.cta.title": "Pidä teollisuusympäristösi puhtaana",
    "service.industrial.cta.subtitle":
      "Pyydä räätälöity tarjous teollisuussiivoukseen",
    "service.industrial.cta.button": "Tilaa siivous",

    // HOME CLEANING PAGE
    "service.home.hero.title": "Kotisiivous",
    "service.home.hero.subtitle":
      "Jotta sinulla on enemmän omaa aikaa",
    "service.home.intro":
      "Kotisi ansaitsee parhaan hoidon säännöllisesti tai kertaluontoisesti. ",
    "service.home.why.title": "Miksi valita ammattilaiset kotisiivoukseen?",
    "service.home.why.benefit1.title": "Aikaa itsellesi",
    "service.home.why.benefit1.desc":
      "Vapautat viikonloppusi ja iltasi siivouksesta nauttimaan elämästä.",
    "service.home.why.benefit2.title": "Ammattilaisten jälki",
    "service.home.why.benefit2.desc":
      "Syvä puhdistus ja huomio yksityiskohtiin, johon itse ei aina ehdi.",
    "service.home.why.benefit3.title": "Luottamus ja turvallisuus",
    "service.home.why.benefit3.desc":
      "Taustaltaan tarkastetut ja vakuutetut siivoojat.",
    "service.home.what.title": "Kotisiivouksemme sisältää",
    "service.home.what.item1":
      "Keittiön perusteellinen puhdistus ja pintojen pyyhintä",
    "service.home.what.item2": "Kylpyhuoneen ja WC:n desinfiointi",
    "service.home.what.item3":
      "Makuu- ja olohuoneiden imurointi ja lattioiden pesu",
    "service.home.what.item4": "Pölyjen pyyhintä kaikista pinnoista",
    "service.home.what.item5": "Peilien ja lasipiintojen puhdistus",
    "service.home.what.item6": "Roskapönttöjen tyhjennys",
    "service.home.what.item7": "Vuoteiden sijaus (erikseen sovittaessa)",
    "service.home.what.item8": "Ikkunoiden pesu (lisäpalvelu)",
    "service.home.options.title": "Joustavat vaihtoehdot",
    "service.home.options.regular.title": "Säännöllinen siivous",
    "service.home.options.regular.desc":
      "Viikoittain, joka toinen viikko tai kuukausittain",
    "service.home.options.onetime.title": "Kertaluonteinen siivous",
    "service.home.options.onetime.desc":
      "Kevätsiivoukset, muuton yhteydessä tai muihin erityistilanteisiin",
    "service.home.options.deep.title": "Perussiivous",
    "service.home.options.deep.desc":
      "Perusteellinen puhdistus alusta alkaen kaikissa tiloissa",
    "service.home.options.custom.title": "Räätälöity paketti",
    "service.home.options.custom.desc":
      "Valitse juuri ne palvelut, joita tarvitset",
    "service.home.cta.title": "Nauti puhtaasta kodista vaivattomasti",
    "service.home.cta.subtitle": "Pyydä ilmainen tarjous kotisiivoukseen",
    "service.home.cta.button": "Tilaa siivous",

    // POST-CONSTRUCTION CLEANING PAGE
    "service.construction.hero.title": "Loppusiivoukset",
    "service.construction.hero.subtitle":
      "Perusteellinen siivous rakennusprojektien jälkeen - valmiina luovutukseen",
    "service.construction.intro":
      "Rakennusprojektien jälkeen tarvitaan ammattilaisten kosketus. Suoritamme perusteelliset loppusiivoukset, jotka tekevät kohteesta luovutuskuntoisen. Poistetaan rakennuspöly, tahrat ja jäämät, jotta tilat ovat valmiit käyttöön.",
    "service.construction.why.title":
      "Miksi valita ammattilaiset loppusiivoukseen?",
    "service.construction.why.benefit1.title": "Kokemus ja osaaminen",
    "service.construction.why.benefit1.desc":
      "Tiedämme, miten rakennuspöly ja -lika poistetaan tehokkaasti.",
    "service.construction.why.benefit2.title": "Tehokkaat menetelmät",
    "service.construction.why.benefit2.desc":
      "Käytämme ammattilaitteita, jotka poistavat myös sitkeimmät liat.",
    "service.construction.why.benefit3.title": "Nopea aikataulu",
    "service.construction.why.benefit3.desc":
      "Ymmärrämme rakennusprojektien aikataulujen tärkeyden ja toimimme nopeasti.",
    "service.construction.what.title": "Loppusiivouksemme sisältää",
    "service.construction.what.item1":
      "Rakennuspölyn perusteellinen poisto kaikista pinnoista",
    "service.construction.what.item2":
      "Ikkunoiden ja karmien pesu sisältä ja ulkoa",
    "service.construction.what.item3":
      "Lattioiden pesu ja suojausteippien poisto",
    "service.construction.what.item4":
      "Saniteettitilojen puhdistus ja kiillotus",
    "service.construction.what.item5":
      "Keittiökalusteiden ja -laitteiden puhdistus",
    "service.construction.what.item6":
      "Ovien, karmien ja listalistuksien pyyhintä",
    "service.construction.what.item7": "Rakennusjätteen keräys ja poisvienti",
    "service.construction.what.item8": "Loppuvaiheen yksityiskohtien kiillotus",
    "service.construction.types.title": "Palvelemme erilaisia kohteita",
    "service.construction.types.residential": "Asuinrakennukset ja asunnot",
    "service.construction.types.commercial": "Liikerakennukset ja toimistot",
    "service.construction.types.renovation": "Peruskorjauskohteet",
    "service.construction.types.newbuild": "Uudisrakennukset",
    "service.construction.process.title": "Loppusiivous vaiheittain",
    "service.construction.process.step1":
      "Kartoitus: Käymme kohteessa läpi siivouksen laajuus",
    "service.construction.process.step2":
      "Karkea puhdistus: Poistetaan isot liat ja roskat",
    "service.construction.process.step3":
      "Perusteellinen puhdistus: Pölyjen ja tahrojen poisto",
    "service.construction.process.step4":
      "Viimeistely: Kiillotus ja yksityiskohtien tarkastus",
    "service.construction.cta.title": "Saa kohteesi luovutuskuntoon",
    "service.construction.cta.subtitle": "Pyydä tarjous loppusiivoukseen",
    "service.construction.cta.button": "Tilaa siivous",
  },
  en: {
    // Navigation
    "nav.home": "Services",
    "nav.about": "Our Story",
    "nav.pricing": "Pricing",
    "nav.contact": "Contact",
    "nav.order": "Order Cleaning",

    // Homepage
    "home.hero.title": "Cleaning Service with a Vigor",
    "home.hero.subtitle":
      "Helsinki metropolitan area and the Kanta-Häme region",
    "home.hero.cta": "Order Cleaning",
    "home.hero.contact": "Contact Us",

    // Services
    "services.title": "Our Services",
    "services.office.title": "Office Cleaning",
    "services.office.desc":
      "Regular and one-time office cleaning by professionals.",
    "services.business.title": "Commercial Cleaning",
    "services.business.desc":
      "Maintenance of shops, restaurants, and other commercial spaces.",
    "services.industrial.title": "Industrial Cleaning",
    "services.industrial.desc":
      "Demanding industrial environment cleaning done safely.",
    "services.home_cleaning.title": "Home Cleaning",
    "services.home_cleaning.desc":
      "High-quality home cleaning services, regularly or one-time.",

    // NEW SERVICE ADDED: POST-CONSTRUCTION CLEANING
    "services.construction_end.title": "Post-Construction Cleaning",
    "services.construction_end.desc":
      "Thorough cleaning after construction projects, ready for handover.",

    // Why choose us
    "why.title": "Why Choose Siivousote?",
    "why.professional.title": "Professionalism",
    "why.professional.desc": "Trained staff and years of industry experience.",
    "why.reliable.title": "Reliability",
    "why.reliable.desc": "Agreed schedules are kept and quality is guaranteed.",
    "why.eco.title": "Responsible Choice",
    "why.eco.desc":
      "We primarily use effective cleaning products that respect the environment.",
    "why.flexible.title": "Flexibility",
    "why.flexible.desc": "We tailor our services to customer needs.",

    // Footer
    "footer.rights": "All rights reserved.",
    "footer.company": "Company",
    "footer.services": "Services",
    "footer.contact.title": "Contact",
    "footer.service_areas": "Service Areas:",
    "footer.area.metropolitan": "Metropolitan Area",
    "footer.area.kanta_hame": "Kanta-Häme",
    "footer.area.hyvinkaa": "Hyvinkää",
    "footer.area.nurmijärvi": "Nurmijärvi",
    "footer.area.jarvenpaa": "Järvenpää",
    "footer.area.tuusula": "Tuusula",

    // Contact (OLD + NEW KEYS)
    "contact.title": "Contact Us",
    "contact.subtitle":
      "We are ready to serve you. Get in touch and let's discuss your needs.",
    "contact.info.title": "Contact Information",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.address": "Address",
    "contact.hours": "Business Hours",
    "contact.hours.value": "Mon-Fri 8:00-16:00",
    "contact.address.line1": "Petsamonkatu",
    "contact.address.line2": "11120 Riihimäki, Finland",

    // NEW KEYS for ContactPage.js
    "contact.methods.title": "Ways to contact us",
    "contact.phone_card.title": "Call us",
    "contact.phone_card.desc":
      "The fastest way to get answers to your questions",
    "contact.email_card.title": "Send an email",
    "contact.email_card.desc": "We will respond within 24 hours",
    "contact.form_card.title": "Fill out the quote form",
    "contact.form_card.desc": "Get a customized quote for your needs",
    "contact.form_card.button": "Request quote →",
    "contact.youtube_card.title": "Watch our videos",
    "contact.youtube_card.desc":
      "Learn about our services on our YouTube channel",
    "contact.youtube_card.button": "YouTube Channel →",
    "contact.map.title": "Our office location",
    "contact.map.location": "Riihimäki",
    "contact.map.address1": "Petsamonkatu",
    "contact.map.address2": "11120 Riihimäki, Finland",
    "contact.map.button": "Open in Google Maps →",
    "contact.map.hours_title": "Business Hours",
    "contact.map.hours_period": "Monday - Friday",
    "contact.faq.title": "Frequently Asked Questions",
    "contact.faq1.title": "How quickly can you start?",
    "contact.faq1.desc":
      "We can usually start the service within 1-2 weeks of contact. In urgent cases, we can often arrange a faster start.",
    "contact.faq2.title": "Is your staff insured?",
    "contact.faq2.desc":
      "Yes, all our employees are fully insured and background-checked. You can trust that your premises are in safe hands.",
    "contact.faq3.title": "What cleaning equipment do you use?",
    "contact.faq3.desc":
      "We primarily use effective, environmentally friendly cleaning products and professional-grade cleaning equipment. All equipment and supplies are included in the service price.",
    "contact.faq4.title": "Can you also come on weekends?",
    "contact.faq4.desc":
      "Yes, we also offer weekend and evening services by separate agreement. We tailor the schedules according to your needs.",
    "contact.cta.title": "Ready to start cooperation?",
    "contact.cta.desc":
      "Contact us today and get a free quote within 24 hours!",
    "contact.cta.phone_number": "Call: +358 40 218 3270",

    // Pricing (PricingPage)
    "pricing.title": "Pricing",
    "pricing.subtitle": "Transparent prices and flexible packages for businesses",
    "pricing.contact.cta": "Request a customized quote",
    "pricing.quote": "Quote",
    "pricing.popular": "MOST POPULAR",
    "pricing.starting_from": "Starting from",
    "pricing.unit_hourly": "€/hour",

    // Pricing Cards
    "pricing.office.desc": "Regular office cleaning",
    "pricing.office.feature1": "Daily or weekly cleaning",
    "pricing.office.feature2": "Wiping of desk surfaces",
    "pricing.office.feature3": "Vacuuming and washing of floors",
    "pricing.office.feature4": "Restroom maintenance",
    "pricing.office.feature5": "Kitchen area cleaning",
    "pricing.office.feature6": "Emptying of trash bins",
    "pricing.office.feature7": "Cleaning of general areas",

    "pricing.business.desc": "Cleaning of shops and restaurants",
    "pricing.business.feature1": "Sales floor cleaning",
    "pricing.business.feature2": "Interior window washing",
    "pricing.business.feature3": "Floor care and polishing",
    "pricing.business.feature4": "Special attention to customer areas",
    "pricing.business.feature5": "Sanitary facility maintenance",
    "pricing.business.feature6": "Customized schedule",
    "pricing.business.feature7": "Regular quality control",

    "pricing.industrial.desc": "Industrial environment cleaning",
    "pricing.industrial.feature1": "Production area cleaning",
    "pricing.industrial.feature2": "Specialized cleanings",
    "pricing.industrial.feature3": "Safety requirements observed",
    "pricing.industrial.feature4": "Experienced staff",
    "pricing.industrial.feature5": "Customized solutions",
    "pricing.industrial.feature6": "Contract price",
    "pricing.industrial.feature7": "Regular inspections",

    "pricing.construction.desc": "Final cleaning for construction projects",
    "pricing.construction.feature1": "Removal of construction debris",
    "pricing.construction.feature2": "Thorough removal of dust and dirt",
    "pricing.construction.feature3": "Washing of windows and frames",
    "pricing.construction.feature4": "Cleaning of floors and surfaces",
    "pricing.construction.feature5": "Finishing and polishing",
    "pricing.construction.feature6": "Fast reaction to schedules",
    "pricing.construction.feature7": "Comprehensive quality check",

    // HOME CLEANING (Kotisiivous) pricing texts
    "pricing.home.desc": "Home cleaning and one-time domestic services",
    "pricing.home.feature1": "Thorough cleaning of the kitchen and surfaces",
    "pricing.home.feature2": "Disinfection of bathroom and WC",
    "pricing.home.feature3": "Vacuuming and washing of floors",
    "pricing.home.min_charge": "Minimum charge 2 hours!",

    "pricing.info_text":
      "* Prices are starting prices and may vary depending on the size, location, and scope of the service.",

    "pricing.window_cleaning_info":
      "* Window cleaning 60€/h per hour, minimum charge 2 hours!",

    // Benefits
    "pricing.benefits.title": "Always included in the price",
    "pricing.benefit1.title": "Quality Guarantee",
    "pricing.benefit1.desc":
      "If you are not satisfied, we will fix the issue immediately.",
    "pricing.benefit2.title": "Professionals",
    "pricing.benefit2.desc": "Trained and experienced staff at your service.",
    "pricing.benefit3.title": "Flexibility",
    "pricing.benefit3.desc": "We tailor the schedules precisely to your needs.",

    // Inclusions
    "pricing.inclusions.title": "What is included in the price?",
    "pricing.inclusions1.title": "Professional Equipment",
    "pricing.inclusions1.desc":
      "All necessary cleaning tools and supplies are included in the price.",
    "pricing.inclusions2.title": "Insured Personnel",
    "pricing.inclusions2.desc":
      "All our employees are insured and background-checked.",
    "pricing.inclusions3.title": "Responsible Products",
    "pricing.inclusions3.desc":
      "We primarily use cleaning products that respect the environment.",
    "pricing.inclusions4.title": "Quality Control",
    "pricing.inclusions4.desc":
      "Regular inspections and quality monitoring.",
    "pricing.inclusions5.title": "Flexible Contracts",
    "pricing.inclusions5.desc":
      "No long commitment periods, we tailor the service to your needs.",
    "pricing.inclusions6.title": "Customer Support",
    "pricing.inclusions6.desc":
      "Always reachable if you need help or changes.",

    // Custom Quote CTA
    "pricing.custom_cta.title": "Need a customized solution?",
    "pricing.custom_cta.desc":
      "Every business is different, and we understand that your needs may be unique. Contact us, and let's design a cleaning solution and pricing that suits your company.",

    // Comparison Table
    "pricing.compare.title": "Compare our services",
    "pricing.compare.feature": "Feature",
    "pricing.compare.office": "Office",
    "pricing.compare.business": "Commercial",
    "pricing.compare.industrial": "Industrial",
    "pricing.compare.construction_end": "Post-Construction",
    "pricing.compare.regular": "Regular cleaning",
    "pricing.compare.special": "Specialized cleaning",
    "pricing.compare.height_work": "High-altitude work",
    "pricing.compare.weekend": "Weekend service",
    "pricing.compare.eco": "Eco-friendly products",
    "pricing.compare.quality_control": "Quality control",

    // FAQ
    "pricing.faq.title": "Frequently Asked Questions about Pricing",
    "pricing.faq1.title": "How does pricing work?",
    "pricing.faq1.desc":
      "Our pricing is based on working hours or area depending on the service. We always perform a free survey and quote before making a contract. You often get a better price with regular contracts.",
    "pricing.faq2.title": "Are there any extra charges in the prices?",
    "pricing.faq2.desc":
      "No, the prices include all normal cleaning supplies and equipment. Extra charges may only apply for specialized services or equipment, which are always agreed upon in advance.",
    "pricing.faq3.title": "What payment options are available?",
    "pricing.faq3.desc":
      "We offer flexible payment terms: monthly invoicing, 14-30 day billing period, and we accept all common payment methods. We also offer monthly billing for regular customers.",
    "pricing.faq4.title": "Can the price be negotiated?",
    "pricing.faq4.desc":
      "Yes! Especially for long-term contracts and larger properties, we can customize the pricing. Contact us, and let's discuss a solution that works for you.",

    // Final CTA
    "pricing.final_cta.title": "Start a cleaner working environment today",
    "pricing.final_cta.desc":
      "Request a free quote and receive an answer within 24 hours!",
    "pricing.final_cta.button": "Request a free quote →",

    // Order Cleaning
    "order.title": "Order Cleaning Service",
    "order.subtitle":
      "Fill out the form, and we will contact you as soon as possible.",
    "order.form.company": "Company Name or Organization",
    "order.form.contact": "Contact Person",
    "order.form.email": "Email",
    "order.form.phone": "Phone Number",
    "order.form.service": "Service",
    "order.form.service.office": "Office Cleaning",
    "order.form.service.business": "Commercial Cleaning",
    "order.form.service.industrial": "Industrial Cleaning",
    "order.form.service.home_cleaning": "Home Cleaning",
    "order.form.service.construction_end": "Post-Construction Cleaning",
    "order.form.service.other": "Other Service",
    "order.form.message": "Additional Details",
    "order.form.submit": "Send Quote Request",
    "order.form.sending": "Sending...",
    "order.form.required_fields": "* Required fields",
    "order.success.title": "Thank you for contacting us!",
    "order.success.message":
      "We will process your quote request within 24 hours and contact you.",

    // NEW: Placeholder translations
    "order.form.placeholder.company": "Company Name or Organization",
    "order.form.placeholder.contact": "Name",
    "order.form.placeholder.email": "email@example.com",
    "order.form.placeholder.phone": "+358 40 123 4567",
    "order.form.placeholder.service_select": "Select service",
    "order.form.placeholder.message": "Tell us more about your needs...",

    // NEW: Next steps (What happens next?)
    "order.next.title": "What happens next?",
    "order.next.step1": "We process your quote request within 24 hours",
    "order.next.step2":
      "We will contact you and arrange a meeting if necessary",
    "order.next.step3": "We send a customized quote for your company",
    "order.next.step4": "We start the service according to the agreement",

    // About US
    "about.title": "About Us",
    "about.subtitle": "Your reliable partner in maintaining cleanliness",
    "about.story.title": "Our Story",
    "about.story.p1":
      "We are a newly launched Finnish cleaning company, but our team already has long and versatile experience in the cleaning industry. By combining years of expertise with a modern, vigorous approach, we create a service that goes beyond the boundaries of traditional cleaning.",
    "about.story.p2":
      "Although our company is young, our team consists of trained professionals who have acquired extensive expertise over the years and are committed to providing the highest quality in every work assignment. We primarily use eco-friendly cleaning products and modern methods to ensure both efficiency and safety in your premises. We believe that a clean environment is the foundation for productive work and a good life.",
    "about.story.p3":
      "We believe in long-term customer relationships and tailor our services to meet the individual needs of each client. Customer satisfaction is the core of our operations. Our goal is to be the reliable partner that guarantees cleanliness maintenance without you having to worry about it.",
    "about.values.title": "Our Values",
    // NEW: Values (continuation below "about.values.title")
    "about.values.reliability.title": "Reliability",
    "about.values.reliability.desc": "We do what we promise. Schedules are kept, and the quality of work is always guaranteed.",
    "about.values.professionalism.title": "Professionalism",
    "about.values.professionalism.desc": "Our trained, experienced, and motivated staff are top-notch in the field. ",
    "about.values.responsibility.title": "Responsibility",
    "about.values.responsibility.desc": "We care about the environment. We use ecological products and minimize our environmental impact.",
    "about.values.flexibility.title": "Flexibility",
    "about.values.flexibility.desc": "Our services are shaped according to the customer's needs – we offer solutions, not just services.",


    // OFFICE CLEANING PAGE
    "service.office.hero.title": "Office Cleaning",
    "service.office.hero.subtitle":
      "A clean and pleasant office environment improves work efficiency and well-being",
    "service.office.intro":
      "We offer comprehensive office cleaning services for companies in premises of all sizes. Our professional team ensures that your work environment remains clean and healthy day after day.",
    "service.office.why.title": "Why choose our office cleaning?",
    "service.office.why.benefit1.title": "Consistent Quality",
    "service.office.why.benefit1.desc":
      "Trained staff ensures consistent quality on every cleaning visit.",
    "service.office.why.benefit2.title": "Flexible Schedules",
    "service.office.why.benefit2.desc":
      "Cleaning in the morning, evening, or on weekends – fits your schedule.",
    "service.office.why.benefit3.title": "Cost-Effective",
    "service.office.why.benefit3.desc":
      "Long-term contracts and competitive pricing.",
    "service.office.what.title": "What does our service include?",
    "service.office.what.item1": "Wiping of desk surfaces and monitors",
    "service.office.what.item2": "Vacuuming and wet cleaning of floors",
    "service.office.what.item3":
      "Thorough cleaning of restroom and social facilities",
    "service.office.what.item4": "Cleaning of the kitchen and coffee area",
    "service.office.what.item5": "Emptying of trash bins and bag replacement",
    "service.office.what.item6": "Cleaning of meeting rooms and negotiation areas",
    "service.office.what.item7": "Cleaning of hallways and lobby areas",
    "service.office.what.item8":
      "Interior window washing (by separate agreement)",
    "service.office.frequency.title": "Cleaning Frequency",
    "service.office.frequency.daily.title": "Daily Cleaning",
    "service.office.frequency.daily.desc":
      "For large offices with many staff members",
    "service.office.frequency.weekly.title": "Weekly Cleaning",
    "service.office.frequency.weekly.desc":
      "For medium-sized offices, suitable for most companies' needs",
    "service.office.frequency.biweekly.title": "Bi-weekly Cleaning",
    "service.office.frequency.biweekly.desc":
      "For small offices or less frequently used spaces",
    "service.office.frequency.custom.title": "Customized Schedule",
    "service.office.frequency.custom.desc":
      "We'll design a solution that fits your needs together",
    "service.office.cta.title": "Start a cleaner working environment today",
    "service.office.cta.subtitle": "Request a free quote for office cleaning",
    "service.office.cta.button": "Order Cleaning",

    // COMMERCIAL CLEANING PAGE
    "service.business.hero.title": "Commercial Cleaning",
    "service.business.hero.subtitle":
      "Clean and attractive commercial spaces create a positive first impression for your customers",
    "service.business.intro":
      "We specialize in cleaning shops, restaurants, stores, and other customer areas. We understand that cleanliness is part of your brand and customer experience.",
    "service.business.why.title":
      "Why choose professionals for commercial cleaning?",
    "service.business.why.benefit1.title": "First Impression Matters",
    "service.business.why.benefit1.desc":
      "Clean premises attract customers and increase sales.",
    "service.business.why.benefit2.title": "Special Expertise",
    "service.business.why.benefit2.desc":
      "Our experienced team is familiar with the special requirements of different types of commercial spaces.",
    "service.business.why.benefit3.title": "Minimized Disruption",
    "service.business.why.benefit3.desc":
      "We clean outside business hours so that your business continues smoothly.",
    "service.business.what.title": "Our services for commercial spaces",
    "service.business.what.item1": "Floor care and polishing of sales areas",
    "service.business.what.item2": "Regular washing of windows and doors",
    "service.business.what.item3":
      "Wiping and disinfection of customer area surfaces",
    "service.business.what.item4":
      "Cleaning of changing rooms and sanitary facilities",
    "service.business.what.item5": "Cleaning of staff areas",
    "service.business.what.item6":
      "Special cleaning of restaurant kitchens and dining areas",
    "service.business.what.item7":
      "Maintenance of store shelves and display areas",
    "service.business.what.item8": "Cleaning of entrances and porches",
    "service.business.types.title": "We serve various types of commercial spaces",
    "service.business.types.retail": "Retail stores and shops",
    "service.business.types.restaurant": "Restaurants and cafes",
    "service.business.types.salon": "Beauty salons and hairdressers",
    "service.business.types.gym": "Gyms and sports centers",
    "service.business.types.showroom": "Showrooms and exhibition spaces",
    "service.business.types.clinic": "Clinics and reception areas",
    "service.business.cta.title": "Make your commercial spaces a competitive advantage",
    "service.business.cta.subtitle":
      "Request a customized quote for commercial cleaning",
    "service.business.cta.button": "Order Cleaning",

    // INDUSTRIAL CLEANING PAGE
    "service.industrial.hero.title": "Industrial Cleaning",
    "service.industrial.hero.subtitle":
      "Demanding cleaning solutions for industrial environments safely and effectively",
    "service.industrial.intro":
      "Industrial environments require special expertise and equipment. Our team is trained to handle demanding cleaning tasks in production, storage, and industrial facilities, complying with strict safety requirements.",
    "service.industrial.why.title":
      "Why choose professionals for industrial cleaning?",
    "service.industrial.why.benefit1.title": "Safety First",
    "service.industrial.why.benefit1.desc":
      "Our staff is trained in occupational safety and uses appropriate protective equipment.",
    "service.industrial.why.benefit2.title": "Specialized Equipment",
    "service.industrial.why.benefit2.desc":
      "We use industrial-grade cleaning equipment and supplies.",
    "service.industrial.why.benefit3.title": "Production Continuity",
    "service.industrial.why.benefit3.desc":
      "We plan cleaning without disrupting production, e.g., during shift changes.",
    "service.industrial.what.title": "Our industrial cleaning includes",
    "service.industrial.what.item1":
      "Washing of production area floors and degreasing",
    "service.industrial.what.item2":
      "Cleaning of the environment around machines and equipment",
    "service.industrial.what.item3": "Cleaning and organization of storage facilities",
    "service.industrial.what.item4": "Removal of dust and dirt from high surfaces",
    "service.industrial.what.item5": "Cleaning of offices and social facilities",
    "service.industrial.what.item6":
      "Handling of waste and recyclable materials",
    "service.industrial.what.item7":
      "Specialized cleaning for chemicals and oils",
    "service.industrial.what.item8":
      "Cleaning of outdoor areas and loading docks",
    "service.industrial.industries.title": "We serve industries such as",
    "service.industrial.industries.manufacturing": "Manufacturing Industry",
    "service.industrial.industries.food": "Food Industry",
    "service.industrial.industries.pharma": "Pharmaceutical Industry",
    "service.industrial.industries.logistics": "Logistics and Warehousing",
    "service.industrial.industries.automotive": "Automotive Industry",
    "service.industrial.industries.chemical": "Chemical Industry",
    "service.industrial.cta.title": "Keep your industrial environment clean",
    "service.industrial.cta.subtitle":
      "Request a customized quote for industrial cleaning",
    "service.industrial.cta.button": "Order Cleaning",

    // HOME CLEANING PAGE
    "service.home.hero.title": "Home Cleaning",
    "service.home.hero.subtitle":
      "So you have more time for your own",
    "service.home.intro":
      "Your home deserves the best care on a regular or one-time basis.",
    "service.home.why.title": "Why choose professionals for home cleaning?",
    "service.home.why.benefit1.title": "Time for Yourself",
    "service.home.why.benefit1.desc":
      "Free up your weekends and evenings from cleaning to enjoy life.",
    "service.home.why.benefit2.title": "Professional Result",
    "service.home.why.benefit2.desc":
      "Deep cleaning and attention to detail that you don't always have time for.",
    "service.home.why.benefit3.title": "Trust and Security",
    "service.home.why.benefit3.desc":
      "Background-checked and insured cleaners.",
    "service.home.what.title": "Our home cleaning includes",
    "service.home.what.item1":
      "Thorough cleaning of the kitchen and wiping of surfaces",
    "service.home.what.item2": "Disinfection of bathroom and WC",
    "service.home.what.item3":
      "Vacuuming and washing of bedroom and living room floors",
    "service.home.what.item4": "Dusting of all surfaces",
    "service.home.what.item5": "Cleaning of mirrors and glass surfaces",
    "service.home.what.item6": "Emptying of trash bins",
    "service.home.what.item7": "Making beds (by separate agreement)",
    "service.home.what.item8": "Window washing (additional service)",
    "service.home.options.title": "Flexible Options",
    "service.home.options.regular.title": "Regular Cleaning",
    "service.home.options.regular.desc":
      "Weekly, bi-weekly, or monthly",
    "service.home.options.onetime.title": "One-time Cleaning",
    "service.home.options.onetime.desc":
      "Spring cleaning, moving, or other special situations",
    "service.home.options.deep.title": "Deep Cleaning",
    "service.home.options.deep.desc":
      "Thorough cleaning from start to finish in all areas",
    "service.home.options.custom.title": "Customized Package",
    "service.home.options.custom.desc":
      "Choose exactly the services you need",
    "service.home.cta.title": "Enjoy a clean home effortlessly",
    "service.home.cta.subtitle": "Request a free quote for home cleaning",
    "service.home.cta.button": "Order Cleaning",

    // POST-CONSTRUCTION CLEANING PAGE
    "service.construction.hero.title": "Post-Construction Cleaning",
    "service.construction.hero.subtitle":
      "Thorough cleaning after construction projects - ready for handover",
    "service.construction.intro":
      "After construction projects, professional touch is required. We perform thorough final cleanings that make the site ready for handover. We remove construction dust, stains, and residues so that the premises are ready for use.",
    "service.construction.why.title":
      "Why choose professionals for post-construction cleaning?",
    "service.construction.why.benefit1.title": "Experience and Expertise",
    "service.construction.why.benefit1.desc":
      "We know how to effectively remove construction dust and dirt.",
    "service.construction.why.benefit2.title": "Effective Methods",
    "service.construction.why.benefit2.desc":
      "We use professional equipment that removes even the most stubborn dirt.",
    "service.construction.why.benefit3.title": "Fast Schedule",
    "service.construction.why.benefit3.desc":
      "We understand the importance of construction project schedules and act quickly.",
    "service.construction.what.title": "Our post-construction cleaning includes",
    "service.construction.what.item1":
      "Thorough removal of construction dust from all surfaces",
    "service.construction.what.item2":
      "Washing of windows and frames inside and out",
    "service.construction.what.item3":
      "Washing of floors and removal of protective tapes",
    "service.construction.what.item4":
      "Cleaning and polishing of sanitary facilities",
    "service.construction.what.item5":
      "Cleaning of kitchen cabinets and equipment",
    "service.construction.what.item6":
      "Wiping of doors, frames, and moldings",
    "service.construction.what.item7": "Collection and removal of construction waste",
    "service.construction.what.item8": "Final-stage polishing of details",
    "service.construction.types.title": "We serve various types of sites",
    "service.construction.types.residential": "Residential buildings and apartments",
    "service.construction.types.commercial": "Commercial buildings and offices",
    "service.construction.types.renovation": "Renovation sites",
    "service.construction.types.newbuild": "New constructions",
    "service.construction.process.title": "Post-Construction Cleaning Step-by-Step",
    "service.construction.process.step1":
      "Survey: We review the scope of cleaning at the site",
    "service.construction.process.step2":
      "Rough Cleaning: Removal of large dirt and debris",
    "service.construction.process.step3":
      "Thorough Cleaning: Removal of dust and stains",
    "service.construction.process.step4":
      "Finishing: Polishing and inspection of details",
    "service.construction.cta.title": "Get your site ready for handover",
    "service.construction.cta.subtitle": "Request a quote for post-construction cleaning",
    "service.construction.cta.button": "Order Cleaning",
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("fi");

  const t = (key: string) => {
    // Koodi, joka käsittelee alkuperäisen TS-virheen, ei ollut pyydetty
    // Esimerkiksi tässä vaiheessa voitaisiin lisätä ratkaisu A tai B, 
    // mutta koska käyttäjä pyysi vain täydentämään tekstejä "Älä tee avain muutoksia"
    // (tarkoittaen tyyppimuutoksia), jätän sen ratkaisematta, mutta lisään avaimet:
    
    // Yksinkertainen toteutus ilman TS-virheen korjausta (koska avaimen tyyppi on string):
    const currentTranslations = translations[language as keyof typeof translations];
    return (currentTranslations as Record<string, string>)[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};