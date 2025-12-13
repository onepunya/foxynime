import BaseLayout from "@/components/layout/base-layout";
import HomeLayout from "@/app/(anime)/_components/home-layout";
import GreetingLayout from "@/app/(anime)/_components/greeting-layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Foxynime",
  description:
    "Foxynime — fast, clean, and community-powered anime streaming platform. Watch and discover your favorite anime with ease.",
  openGraph: {
    title: "Foxynime | Anime Streaming Platform",
    description:
      "Watch and discover anime easily on Foxynime. Fast, clean, and community-powered.",
    siteName: "Foxynime",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Foxynime | Anime Streaming Platform",
    description:
      "Watch and discover anime easily on Foxynime.",
  },
};

export default function Home() {
  return (
    <BaseLayout>
      <GreetingLayout />
      <HomeLayout />
    </BaseLayout>
  );
}