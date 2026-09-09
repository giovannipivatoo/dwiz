import type { Metadata } from "next";
import { socialImage } from "../site-data";
import { QueryBoundary } from "../query-parameters";
import PageContent from "./page-content";

export const metadata: Metadata = {
  title: "About",
  description:
    "About DWIZ, Davide Zonta: a producer moving from rap and trap beatmaking into original music for picture.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About | DWIZ",
    description:
      "Davide Zonta is the producer behind DWIZ, moving from rap and trap beatmaking into music for picture.",
    url: "/about",
    images: [socialImage],
  },
};

export default function Page() {
  return <QueryBoundary><PageContent /></QueryBoundary>;
}
