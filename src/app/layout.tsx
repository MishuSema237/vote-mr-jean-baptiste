import type { Metadata } from "next";
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
  title: {
    default: "Vote for Jean Baptiste Toche - Mister Tourism Africa Cameroon",
    template: "%s | Jean Baptiste Toche Campaign"
  },
  description: "Support Jean Baptiste Toche in his journey to become Mister Tourism Africa Cameroon. Vote now with MTN Mobile Money or Orange Money! Help him represent Cameroon on the international stage.",
  keywords: ["Jean Baptiste Toche", "Mister Tourism Africa", "Cameroon", "voting", "MTN Mobile Money", "Orange Money", "pageant", "tourism ambassador"],
  authors: [{ name: "Jean Baptiste Toche Campaign" }],
  creator: "Jean Baptiste Toche Campaign",
  publisher: "Jean Baptiste Toche Campaign",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://vote-jeanbaptiste.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vote-jeanbaptiste.com',
    title: 'Vote for Jean Baptiste Toche - Mister Tourism Africa Cameroon',
    description: 'Support Jean Baptiste Toche in his journey to become Mister Tourism Africa Cameroon. Vote now with MTN Mobile Money or Orange Money!',
    siteName: 'Jean Baptiste Toche Campaign',
    images: [
      {
        url: '/jean_baptiste.jpg',
        width: 1200,
        height: 630,
        alt: 'Jean Baptiste Toche - Mister Tourism Africa Cameroon Candidate',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vote for Jean Baptiste Toche - Mister Tourism Africa Cameroon',
    description: 'Support Jean Baptiste Toche in his journey to become Mister Tourism Africa Cameroon. Vote now with MTN Mobile Money or Orange Money!',
    images: ['/jean_baptiste.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
