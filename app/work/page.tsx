import type { Metadata } from "next";
import { socialImage } from "../site-data";
import { QueryBoundary } from "../query-parameters";
import PageContent from "./page-content";

export const metadata: Metadata = {
  title: "Work — Sync & Production",
  description: "Music for picture and released records. Sync and production work by DWIZ.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Work — Sync & Production | DWIZ",
    description: "Music for picture and released records. Sync and production work by DWIZ.",
    url: "/work",
    images: [socialImage],
  },
};

export default function Page() {
  return <QueryBoundary><PageContent /></QueryBoundary>;
}
