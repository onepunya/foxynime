import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { slug: string; episodes: string };
}): Promise<Metadata> {
  const formattedTitle = params.slug
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    title: `Watch ${formattedTitle} Episode ${params.episodes} | Foxynime`,
    description: `Watch ${formattedTitle} Episode ${params.episodes} online on Foxynime. Fast, clean, and community-powered anime streaming platform.`,
    openGraph: {
      title: `Watch ${formattedTitle} Episode ${params.episodes} | Foxynime`,
      description: `Watch ${formattedTitle} Episode ${params.episodes} online on Foxynime.`,
      siteName: "Foxynime",
      type: "video.episode",
    },
    twitter: {
      card: "summary_large_image",
      title: `Watch ${formattedTitle} Episode ${params.episodes} | Foxynime`,
      description: `Watch ${formattedTitle} Episode ${params.episodes} online on Foxynime.`,
    },
  };
}

export default function AnimeEpisodeLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}