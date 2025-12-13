import BaseLayout from "@/components/layout/base-layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anime Genres | Foxynime",
  description:
    "Explore all anime genres on Foxynime. Discover anime by genre and find your next favorite series.",
  openGraph: {
    title: "Anime Genres | Foxynime",
    description:
      "Explore all anime genres on Foxynime.",
    siteName: "Foxynime",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anime Genres | Foxynime",
    description:
      "Explore all anime genres on Foxynime.",
  },
};

export default function GenreLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <BaseLayout>{children}</BaseLayout>;
}