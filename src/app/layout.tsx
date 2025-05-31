import type { Metadata } from 'next';
import { Homemade_Apple } from 'next/font/google';
import './globals.css';

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
        {children}
      </body>
    </html>
  );
}
