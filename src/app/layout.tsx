import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dra. Ana Pierin - Ortopedista e Traumatologista",
  description: "Especialista em Ortopedia e Traumatologia oferecendo tratamentos minimamente invasivos para tratamento da dor. Atendimento em Curitiba e Lapa.",
  keywords: ["ortopedista", "traumatologista", "curitiba", "lapa", "tratamento da dor", "infiltração articular", "terapia por ondas de choque"],
  authors: [{ name: "Dra. Ana Pierin" }],
  openGraph: {
    title: "Dra. Ana Pierin - Ortopedista e Traumatologista",
    description: "Especialista em Ortopedia e Traumatologia oferecendo tratamentos minimamente invasivos para tratamento da dor.",
    type: "website",
    locale: "pt_BR",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-brand-50 text-text-primary`}
      >
        {children}
      </body>
    </html>
  );
}
