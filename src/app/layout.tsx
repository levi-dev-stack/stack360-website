import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Script from 'next/script';
import Providers from '@/providers';
import type { ReactComponentChildren } from '@/types/component';
import '@/styles/globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Stack360 | Software Engineering & Consulting',
    template: '%s | Stack360',
  },
  description: 'Architecting complex software ecosystems for enterprise scale.',
};

export default function RootLayout({ children }: Readonly<ReactComponentChildren>) {
  return (
    // suppressHydrationWarning: beforeInteractive script may add `js` before React hydrates
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <Script id="enhance-js" strategy="beforeInteractive">
          {`document.documentElement.classList.add('js');`}
        </Script>
        <noscript>
          <style>{`
            .js-only { display: none !important; }
            main [style*="opacity"], header [style*="opacity"], footer [style*="opacity"],
            main [style*="transform"], header [style*="transform"] {
              opacity: 1 !important;
              transform: none !important;
              filter: none !important;
            }
          `}</style>
        </noscript>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
