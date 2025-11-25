import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Siivousote - Ammattitaitoista siivousta yrityksille',
  description: 'Luotettava kumppanisi puhtauden ylläpidossa. Keskitymme yritysten, toimistojen ja yhteisöjen siivouspalveluihin.',
  keywords: 'siivous, yrityssiivous, toimistosiivoukset, liiketilat, teollisuussiivous',
 
  icons: {
    icon: '/logo.svg', 
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fi">
      <body>
        <LanguageProvider>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}