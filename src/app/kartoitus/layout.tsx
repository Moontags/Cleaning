import type { Metadata } from "next";

// Sisäinen työkalusivu: ei markkinointisisältöä, joten pidetään se pois
// hakukoneista myös siinä tapauksessa, että suora osoite vuotaa julkiseksi.
export const metadata: Metadata = {
  title: "Kartoituslomake — Siivousote",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function KartoitusLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
