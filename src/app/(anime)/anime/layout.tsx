import BaseLayout from "@/components/layout/base-layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Search Anime | Foxynime",
  description:
    "Search and discover anime easily on Foxynime. Fast, clean, and community-powered anime streaming platform.",
  openGraph: {
    title: "Search Anime | Foxynime",
    description:
      "Search and discover anime easily on Foxynime.",
    siteName: "Foxynime",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Search Anime | Foxynime",
    description:
      "Search and discover anime easily on Foxynime.",
  },
};

export default function AnimeSearchLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <BaseLayout>{children}</BaseLayout>;
}