import type { Metadata } from "next";
import { Playfair_Display, Parisienne, Jost } from "next/font/google";
import { profile } from "@/data/content";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

const parisienne = Parisienne({
  variable: "--font-script",
  weight: "400",
  subsets: ["latin"],
});

const jost = Jost({
  variable: "--font-sans",
  subsets: ["latin"],
});

const title = "Emily Kohler — Desarrolladora Full Stack";
const description =
  "Portafolio de Emily Kohler, desarrolladora full stack en Posadas, Misiones: proyectos con React, Next.js y Node.js, habilidades y contacto.";

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    locale: "es_AR",
    siteName: "Emily Kohler",
    title,
    description,
    images: [
      {
        url: "/emi1.jpg",
        width: 1280,
        height: 959,
        alt: "Emily Kohler, desarrolladora full stack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/emi1.jpg"],
  },
  verification: {
    google: "cK13-mMl6LSZ9J7B6euj-K9cCuvNFWPcGm8arbRz7vM",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${playfair.variable} ${parisienne.variable} ${jost.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden bg-cream font-sans text-forest">
        {children}
      </body>
    </html>
  );
}
