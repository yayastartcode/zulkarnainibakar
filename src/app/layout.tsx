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
  title: "Pembekal Ketam Hidup - Ketam Nipah Super Saiz Premium | Kuala Lumpur",
  description: "Pembekal ketam nipah hidup segar berkualiti premium di Kuala Lumpur. Ketam nipah super saiz 500gram dengan daging tebal dan manis. Penghantaran pantas dan boleh dipercayai.",
  keywords: "ketam nipah, ketam hidup, pembekal ketam, ketam segar, ketam kuala lumpur, ketam premium, ketam super saiz, seafood malaysia",
  authors: [{ name: "Pembekal Ketam Hidup" }],
  creator: "Pembekal Ketam Hidup",
  publisher: "Pembekal Ketam Hidup",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.ketamnipah.my.id'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Pembekal Ketam Hidup - Ketam Nipah Super Saiz Premium",
    description: "Pembekal ketam nipah hidup segar berkualiti premium di Kuala Lumpur. Ketam nipah super saiz 500gram dengan daging tebal dan manis.",
    url: 'https://www.ketamnipah.my.id',
    siteName: 'Pembekal Ketam Hidup',
    images: [
      {
        url: '/ketam.jpeg',
        width: 1200,
        height: 630,
        alt: 'Ketam Nipah Super Saiz Premium - Pembekal Ketam Hidup',
      },
    ],
    locale: 'ms_MY',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Pembekal Ketam Hidup - Ketam Nipah Super Saiz Premium",
    description: "Pembekal ketam nipah hidup segar berkualiti premium di Kuala Lumpur. Ketam nipah super saiz 500gram dengan daging tebal dan manis.",
    images: ['/ketam.jpeg'],
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
    google: 'google-site-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ms">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >c
        {children}
      </body>
    </html>
  );
}
