import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "DuttonTech — Private portfolio tracking",
  description:
    "DuttonTech builds secure, private tools for the modern investor. Track stocks, crypto, cash and watchlists from one private dashboard — without connecting a bank or brokerage.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={sourceSans.className}>
        <div className="bg-glow" />
        <div className="bg-grid" />
        {children}
      </body>
    </html>
  );
}
