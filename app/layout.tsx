import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Imobiliária Jardim Ingá",
  description:
    "Compra, venda e avaliação de imóveis no Jardim Ingá, Luziânia e região.",
  keywords: [
    "Imobiliária Jardim Ingá",
    "Casas à venda",
    "Apartamentos",
    "Luziânia",
    "Jardim Ingá",
    "Imóveis",
    "Corretor de imóveis",
  ],
  authors: [{ name: "Imobiliária Jardim Ingá" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-screen bg-[#FAF8F2] text-[#1F1F1F]">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WGLZXVT2JN"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WGLZXVT2JN');
          `}
        </Script>

        {children}
      </body>
    </html>
  );
}