import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from '@vercel/analytics/react';

const clashDisplay = localFont({
  src: [
    {
      path: "../../public/fonts/clash-display/ClashDisplay-Semibold.ttf",
      weight: "600",
    },
  ],
  variable: "--font-clash-display",
});

const archivo = localFont({
  src: [
    { path: "../../public/fonts/archivo/Archivo-Regular.ttf", weight: "500" },
  ],
  variable: '--font-archivo'
});

export const metadata: Metadata = {
  title: "Seb",
  description: "Sebastian King",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${clashDisplay.variable} ${archivo.variable} ${archivo.className}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
