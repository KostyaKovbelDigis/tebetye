import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Sidebar from '../components/Sidebar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next.js + Core UI App',
  description: 'Created with Next.js and Core UI',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="d-flex">
          <Sidebar />
          <main className="page-container flex-grow-1">{children}</main>
        </div>
      </body>
    </html>
  );
}