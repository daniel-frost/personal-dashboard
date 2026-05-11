import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Caveat, Pixelify_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const hand = Caveat({
  variable: "--font-hand",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const pixel = Pixelify_Sans({
  variable: "--font-pixel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Personal Cottage",
  description: "Your cozy command-center. The wizard sleeps when you sleep.",
  applicationName: "Personal Cottage",
  appleWebApp: {
    capable: true,
    title: "Cottage",
    statusBarStyle: "default",
  },
};

export const viewport: Viewport = {
  themeColor: "#f5efe0",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${mono.variable} ${hand.variable} ${pixel.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
