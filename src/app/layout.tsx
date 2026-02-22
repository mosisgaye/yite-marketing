import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "YITE - Solutions de Livraison pour Entreprises | Transport & Coursiers",
  description:
    "YITE connecte expéditeurs et transporteurs pour des livraisons rapides et fiables. Livrez vos colis à votre prix avec des coursiers vérifiés.",
  keywords: [
    "livraison",
    "transport",
    "coursier",
    "entreprise",
    "expédition",
    "fret",
    "Maroc",
    "Cameroun",
  ],
  authors: [{ name: "YITE" }],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.svg",
  },
  openGraph: {
    title: "YITE - Solutions de Livraison pour Entreprises",
    description: "Livrez vos colis à votre prix avec des coursiers vérifiés",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
