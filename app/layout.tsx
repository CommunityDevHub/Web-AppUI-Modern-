import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import { Navbar, Footer } from '@/components';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TravelTemplateApp',
  description: 'Example Travel App for dev',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
          <main className='relative overflow-hidden'>
            {children}  
          </main>
        <Footer />
      </body>
    </html>
  )
}
