import BaseLayout from "@/components/layout/base-layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Completed Anime | Foxynime",
  description:
    "Browse completed anime series on Foxynime. Watch finished anime with full episodes in one place.",
  openGraph: {
    title: "Completed Anime | Foxynime",
    description:
      "Browse completed anime series on Foxynime.",
    siteName: "Foxynime",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Completed Anime | Foxynime",
    description:
      "Browse completed anime series on Foxynime.",
  },
};

export default function CompletedAnimeLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <BaseLayout>{children}</BaseLayout>;
}