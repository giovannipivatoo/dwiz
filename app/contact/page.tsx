import type { Metadata } from "next";
import { socialImage } from "../site-data";
import { QueryBoundary } from "../query-parameters";
import PageContent from "./page-content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact DWIZ for music supervision, exclusive library, collaboration and representation enquiries.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | DWIZ",
    description:
      "Music is shared privately with supervisors, libraries, collaborators and representatives on request.",
    url: "/contact",
    images: [socialImage],
  },
};

export default function Page() {
  return <QueryBoundary><PageContent /></QueryBoundary>;
}
