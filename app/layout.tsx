import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lsghair.co.uk"),
  title: "LSGHair | Luxury Hair Styling in Colchester",
  description:
    "Book luxury hair appointments with LSGHair, a premium Colchester-based salon specialising in elegant styling, Brazilian, Peruvian, bridal and occasion hair.",
  keywords: [
    "LSGHair",
    "hair stylist Colchester",
    "luxury hair Colchester",
    "Brazilian hair Colchester",
    "Peruvian hair Colchester",
    "bridal hair Colchester",
  ],
  openGraph: {
    title: "LSGHair | Luxury Hair Styling in Colchester",
    description:
      "Premium hairstyling, beautiful finishes and seamless online booking in Colchester, Essex.",
    url: "https://lsghair.co.uk",
    siteName: "LSGHair",
    images: [
      {
        url: "/images/hero.png",
        width: 1200,
        height: 630,
        alt: "LSGHair luxury salon styling",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LSGHair | Luxury Hair Styling in Colchester",
    description: "Premium hairstyling and seamless online booking in Colchester, Essex.",
    images: ["/images/hero.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${montserrat.variable}`}>{children}</body>
    </html>
  );
}
