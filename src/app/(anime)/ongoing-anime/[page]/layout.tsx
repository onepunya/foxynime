import BaseLayout from "@/components/layout/base-layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ongoing Anime | Foxynime",
  description:
    "Watch ongoing anime updates on Foxynime. Follow currently airing anime series and never miss a new episode.",
  openGraph: {
    title: "Ongoing Anime | Foxynime",
    description:
      "Watch ongoing anime updates on Foxynime.",
    siteName: "Foxynime",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ongoing Anime | Foxynime",
    description:
      "Watch ongoing anime updates on Foxynime.",
  },
};

export default function OngoingAnimeLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <BaseLayout>{children}</BaseLayout>;
}