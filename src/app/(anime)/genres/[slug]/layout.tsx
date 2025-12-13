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
    title: `${formattedTitle} Anime | Foxynime`,
    description: `Browse ${formattedTitle} anime on Foxynime. Discover and watch anime by genre on a fast and clean anime streaming platform.`,
    openGraph: {
      title: `${formattedTitle} Anime | Foxynime`,
      description: `Browse ${formattedTitle} anime on Foxynime.`,
      siteName: "Foxynime",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${formattedTitle} Anime | Foxynime`,
      description: `Browse ${formattedTitle} anime on Foxynime.`,
    },
  };
}

export default function GenreSlugLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}