
import BaseLayout from "@/components/layout/base-layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anime Schedule | Foxynime",
  description:
    "Check the latest anime release schedule on Foxynime. Stay updated with airing times and upcoming episodes.",
  openGraph: {
    title: "Anime Schedule | Foxynime",
    description:
      "Check the latest anime release schedule on Foxynime.",
    siteName: "Foxynime",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anime Schedule | Foxynime",
    description:
      "Check the latest anime release schedule on Foxynime.",
  },
};

export default function SchedulesLayout({
  children,
}: Readonly<{
    children: React.ReactNode;
  }>) {
  return <BaseLayout>{children}</BaseLayout>;
}