import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const formattedTitle = params.slug
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    title: `${formattedTitle} | Foxynime`,
    description: `Watch ${formattedTitle} anime online on Foxynime. Fast, clean, and community-powered anime streaming platform.`,
    openGraph: {
      title: `${formattedTitle} | Foxynime`,
      description: `Watch ${formattedTitle} anime online on Foxynime.`,
      siteName: "Foxynime",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${formattedTitle} | Foxynime`,
      description: `Watch ${formattedTitle} anime online on Foxynime.`,
    },
  };
}

export default function AnimeSlug({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}