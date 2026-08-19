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

export default function EsseProjectPage() {
  return <ProjectPage entry={entry} next={publishedWork[1]} />;
}
