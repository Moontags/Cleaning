import type { Metadata } from "next";

const title = "Lattioiden koneellinen pesu | Siivousote";
const description = "Kovien, pesunkestävien lattioiden koneellinen pesu toimistoihin, myymälöihin ja toimitiloihin. Alkaen 195 € + alv, vähimmäisveloitus 3 h. Pyydä tarjous.";
const url = "https://siivousote.fi/services/machine-floor-cleaning";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url, languages: { "fi-FI": url } },
  openGraph: { title, description, url, locale: "fi_FI", type: "website" },
  twitter: { card: "summary", title, description },
};

export default function MachineFloorCleaningLayout({ children }: { children: React.ReactNode }) {
  return children;
}
