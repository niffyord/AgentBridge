import type { Metadata } from "next";
import "@fontsource/space-grotesk";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

/* ─── Code / mono font (Geist Mono) ───────────────────────────────────────── */
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AgentBridge",
  description: "Bespoke AI-agent automation for ambitious businesses",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`font-primary ${geistMono.variable}`}>
      <head>
        <link rel="icon" href="/AgentBridge.ico" sizes="any" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#A463FF" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#A463FF" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
        <title>AgentBridge</title>
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
