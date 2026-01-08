import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://itswap.fun'),
  title: {
    default: 'itSwap.fun | Non-Custodial Crypto Exchange | 500+ Coins',
    template: '%s | itSwap.fun'
  },
  description: 'Secure, non-custodial cryptocurrency exchange. Swap 500+ coins with zero platform fees. No KYC required. Buy $ITSWAP tokens on Solana.',
  keywords: [
    'crypto exchange',
    'non-custodial',
    'Solana',
    'DeFi',
    'cryptocurrency swap',
    'ITSWAP token',
    'no KYC',
    'Bitcoin',
    'Ethereum',
    'meme coins',
    'pump.fun'
  ],
  authors: [{ name: 'itSwap.fun Team' }],
  creator: 'itSwap.fun',
  publisher: 'itSwap.fun',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://itswap.fun',
    title: 'itSwap.fun | Non-Custodial Crypto Exchange',
    description: 'Swap 500+ cryptocurrencies with zero platform fees. Non-custodial, no KYC required. Buy $ITSWAP on Solana.',
    siteName: 'itSwap.fun',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'itSwap.fun - Non-Custodial Crypto Exchange',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'itSwap.fun | Non-Custodial Crypto Exchange',
    description: 'Swap 500+ cryptocurrencies with zero platform fees. Non-custodial, no KYC required.',
    creator: '@itswapfun',
    images: ['/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
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
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
