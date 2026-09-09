import type { Metadata } from "next";
import { socialImage } from "./site-data";
import { QueryBoundary } from "./query-parameters";
import PageContent from "./page-content";

export const metadata: Metadata = {
  title: { absolute: "DWIZ — Producer & Music for Picture" },
  description: "DWIZ is Davide Zonta, a producer with roots in rap and trap beatmaking, developing original music for picture.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "DWIZ — Producer & Music for Picture",
    description: "Rap and trap beatmaking roots, moving into original music for picture.",
    url: "/", type: "website", images: [socialImage],
  },
};

export default function Page() {
  return <QueryBoundary><PageContent /></QueryBoundary>;
}
