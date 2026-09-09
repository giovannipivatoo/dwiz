import type { Metadata } from "next";
import { socialImage, publishedWork } from "../../site-data";
import { QueryBoundary } from "../../query-parameters";
import PageContent from "./page-content";

const entry = publishedWork[1];

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

export default function Page() {
  return <QueryBoundary><PageContent /></QueryBoundary>;
}
