import type { Metadata } from "next";
import "./globals.css";

import { Manrope, Inter } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Pentodoors & Frames",
  description:
    "Premium WPC Doors, Windows and Frames for Modern Living",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${inter.variable}`}
      >
        {children}
      </body>
    </html>
  );
}