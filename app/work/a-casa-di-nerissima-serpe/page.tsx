import { getDirection, type PageProps } from "../../variants";
import type { Metadata } from "next";
import { publishedWork, socialImage } from "../../site-data";
import { ProjectPage } from "../project-page";

const entry = publishedWork[0];

export const metadata: Metadata = {
  title: entry.title,
  description: `${entry.credit} by DWIZ for a published ${entry.outlet} video.`,
  alternates: { canonical: `/work/${entry.slug}` },
  openGraph: {
    title: `${entry.title} | DWIZ`,
    description: `${entry.credit} by DWIZ for a published ${entry.outlet} video.`,
    url: `/work/${entry.slug}`,
    images: [socialImage],
  },
};

export default async function EsseProjectPage({ searchParams }: PageProps) {
  const direction = await getDirection(searchParams);
  return <ProjectPage direction={direction} entry={entry} next={publishedWork[1]} />;
}
