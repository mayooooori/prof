import type { Metadata } from 'next';
import { Homemade_Apple } from 'next/font/google';
import './globals.css';
import StarrySky from '@/components/StarrySky';

const homemadeApple = Homemade_Apple({
  weight: '400',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'mayooooo',
  description: 'Mayuri Portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${homemadeApple.className} antialiased`}>
        {/* Global twinkling starfield, fixed behind all content. */}
        <StarrySky />
        {children}
      </body>
    </html>
  );
}
