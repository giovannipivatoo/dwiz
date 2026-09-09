import type { Metadata } from "next";
import { socialImage } from "../../site-data";
import { QueryBoundary } from "../../query-parameters";
import PageContent from "./page-content";

export const metadata: Metadata = {
  title: "Production",
  description: "Released records featuring production and co-production by DWIZ.",
  alternates: { canonical: "/work/production" },
  openGraph: {
    title: "Production | DWIZ",
    description: "Beatmaking, production and co-production. Selected releases.",
    url: "/work/production",
    images: [socialImage],
  },
};

export default function Page() {
  return <QueryBoundary><PageContent /></QueryBoundary>;
}
