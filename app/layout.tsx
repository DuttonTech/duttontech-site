import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Source_Sans_3 } from "next/font/google";
import Script from "next/script";
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

        {/* Google Analytics 4 — DuttonTech marketing */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BQNTKTBZZ7"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-BQNTKTBZZ7');`}
        </Script>

        {/* Microsoft Clarity — DuttonTech marketing */}
        <Script id="clarity-init" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "xofrkgc1x9");`}
        </Script>
      </body>
    </html>
  );
}
