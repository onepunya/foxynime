import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import ProviderLayout from "./provider";
import { Inter } from "next/font/google";

const fontInter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://foxynime.com"),
  title: {
    default: "Foxynime",
    template: "%s | Foxynime",
  },
  description:
    "Foxynime is an anime & comics streaming platform with fast updates, clean UI, and community-powered content.",
  openGraph: {
    title: "Foxynime",
    description:
      "Watch anime and read comics on Foxynime. Fast, clean, and community-powered.",
    siteName: "Foxynime",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Foxynime",
    description:
      "Watch anime and read comics on Foxynime. Fast, clean, and community-powered.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontInter.className
        )}
      >
        <ProviderLayout>{children}</ProviderLayout>
      </body>
    </html>
  );
}