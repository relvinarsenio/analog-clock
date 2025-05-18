
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/contexts/theme-context';
import { LocalizationProvider } from '@/contexts/localization-context';
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const appTitle = 'Analog Clock';
const appDescription = 'An elegant and interactive neumorphic analog clock. Experience time with a clean, modern design, featuring both analog and digital displays.';
const appUrl = 'https://clock.noteapp.icu/'; // Replace with your actual app URL
const appImage = 'https://github.com/relvinarsenio/analog-clock/blob/main/screenshots/preview.png?raw=true'; // Replace with your actual preview image URL

export const metadata: Metadata = {
  title: appTitle,
  description: appDescription,
  keywords: ['neumorphic clock', 'analog clock', 'digital clock', 'time', 'watch', 'elegant clock', 'interactive clock', 'neumorphic timepiece', 'modern clock', 'light theme', 'dark theme', 'orion clock', 'orionglow'],
  authors: [{ name: 'Orion Dev', url: 'https://noteapp.icu' }], // Replace with your details
  applicationName: 'Analog Clock',
  // Open Graph Metadata
  openGraph: {
    title: appTitle,
    description: appDescription,
    url: appUrl,
    type: 'website',
    images: [
      {
        url: appImage,
        width: 1200,
        height: 630,
        alt: 'Analog Clock Neumorphic Preview',
      },
    ],
    locale: 'en_US', // Default locale, can be dynamic if needed
    siteName: appTitle,
  },
  // Twitter Card Metadata
  twitter: {
    card: 'summary_large_image',
    title: appTitle,
    description: appDescription,
    images: [appImage],
    // creator: '@yourtwitterhandle', // Optional: your Twitter handle
  },
  // Robots
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
  // Viewport
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  Favicon (Next.js handles favicon.ico in /app by default, but for other icons)
  icons: {
    icon: '/favicon.ico', // or '/icon.png'
    // shortcut: '/shortcut-icon.png',
    // apple: '/apple-icon.png',
    // other: {
    //   rel: 'apple-touch-icon-precomposed',
    //   url: '/apple-touch-icon-precomposed.png',
    // },
  },
  // Verification tags (if you need to verify with Google Search Console, Bing, etc.)
  // verification: {
  //   google: 'YOUR_GOOGLE_SITE_VERIFICATION_CODE',
  //   other: {
  //     me: ['your-email@example.com', 'your-link-to-social-profile'],
  //   },
  // },
  // Alternates (for different languages if you have multiple language versions of pages)
  // alternates: {
  //   canonical: appUrl, // Base URL
  //   languages: {
  //     'en-US': `${appUrl}/en`,
  //     'es-ES': `${appUrl}/es`,
  //     'id-ID': `${appUrl}/id`,
  //   },
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}>
        <ThemeProvider>
          <LocalizationProvider>
            {children}
            <Toaster />
          </LocalizationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
