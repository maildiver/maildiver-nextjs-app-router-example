import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Maildiver Next.js Example',
  description: 'Maildiver Next.js App Router Example',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
