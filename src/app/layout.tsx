import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ConsentDialog } from "@/components/consent-dialog";
import { Open_Sans, Lato } from "next/font/google";
import clsx from "clsx";

export const metadata: Metadata = {
  title: "Siivousote - Ammattitaitoista siivousta reippaalla otteella",
  description:
    "Luotettava kumppanisi puhtauden ylläpidossa. Keskitymme yritysten, toimistojen ja yhteisöjen siivouspalveluihin ammattitaidolla ja luotettavuudella.",
  keywords:
    "siivous, yrityssiivous, toimistosiivoukset, liiketilat, teollisuussiivous, siivouspalvelu, ammattisiivous, siivousyritys",

  // Open Graph -tiedot (Facebook, LinkedIn jne.)
  openGraph: {
    title: "Siivousote - Ammattitaitoista siivousta reippaalla otteella",
    description:
      "Luotettava kumppanisi puhtauden ylläpidossa. Yritys-, toimisto- ja teollisuussiivouspalvelut.",
    url: "https://siivousote.fi",
    siteName: "Siivousote",
    locale: "fi_FI",
    type: "website",
    images: [
      {
        url: "/logo.svg",
        width: 1200,
        height: 630,
        alt: "Siivousote - Ammattitaitoista siivousta",
      },
    ],
  },

  // Twitter Card -tiedot
  twitter: {
    card: "summary_large_image",
    title: "Siivousote - Ammattitaitoista siivousta",
    description:
      "Luotettava kumppanisi puhtauden ylläpidossa. Yritys- ja toimistosiivouspalvelut.",
    images: ["/logo.svg"], // PÄIVITETTY: Käyttää SVG-logoa
  },

  // Robots-ohjeet hakukoneille
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  // Tekijä ja yritystiedot
  authors: [{ name: "Siivousote" }],
  creator: "Siivousote",
  publisher: "Siivousote",

  // Canonical URL ja kieliversiot
  alternates: {
    canonical: "https://siivousote.fi",
    languages: {
      "fi-FI": "https://siivousote.fi",
    },
  },

  // Kategorialuokitus
  category: "Siivouspalvelut",

  // Favicon ja ikonit
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/logo.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },

  // Muut meta-tagit
  other: {
    "format-detection": "telephone=yes",
  },
};

const latoFont = Lato({
  weight: ["300", "400", "900"],
  subsets: ["latin"],
});

const openSans = Open_Sans({
  weight: ["400", "600", "300", "700", "500"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // JSON-LD strukturoitu data hakukoneille
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Siivousote",
    description:
      "Ammattitaitoista siivousta reippaalla otteella. Yrityssiivous, toimistosiivous ja teollisuussiivous Uudenmaan ja Kanta-Hämeen alueella.",
    url: "https://siivousote.fi",
    telephone: "040 218 3270",
    email: "info@siivousote.fi",
    priceRange: "$",
    image: "https://siivousote.fi/logo.svg", // PÄIVITETTY: Käyttää SVG-logoa
    serviceType: [
      "Yrityssiivous",
      "Toimistosiivoukset",
      "Teollisuussiivous",
      "Liiketilojen siivous",
    ],
    // Osoitetiedot
    address: {
      "@type": "PostalAddress",
      streetAddress: "Petsamonkatu",
      addressLocality: "Riihimäki",
      addressRegion: "Kanta-Häme",
      postalCode: "11120",
      addressCountry: "FI",
    },
    // Aukioloajat (Avoinna 24h joka päivä)
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    sameAs: [
      // Lisää sosiaalisen median profiilit
      // "https://www.facebook.com/siivousote",
      // "https://www.linkedin.com/company/siivousote",
      // "https://www.instagram.com/siivousote",
    ],
  };

  return (
    <html
      lang="fi"
      className={clsx(latoFont.className, openSans.className, "cc--darkmode")}
      suppressHydrationWarning
    >
      <head>
        {/* JSON-LD strukturoitu data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <LanguageProvider>
          <ConsentDialog />
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
