import type { Metadata } from "next";
import { Literata, Joan } from "next/font/google";
import "./globals.css";

const literata = Literata({
  variable: "--font-literata",
  subsets: ["latin"],
});

const joan = Joan({
  variable: "--font-joan",
  weight: ["400"]
})

export const metadata: Metadata = {
  title: "FELICES 10 MESES AMOR",
  description: "Repaso por los 10 meses que pasamos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${joan.variable} ${literata.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
