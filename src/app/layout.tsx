import type { Metadata } from "next";
import { Playfair_Display, Parisienne, Jost } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Emily Kohler — Desarrolladora Full Stack",
  description:
    "Portafolio de Emily Kohler, desarrolladora full stack: proyectos, habilidades y contacto.",
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
