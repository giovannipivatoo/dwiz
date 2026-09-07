import { getDirection, type PageProps } from "../variants";
import type { Metadata } from "next";
import { Shell, ProjectCard } from "../components";
import { publishedWork, socialImage } from "../site-data";
import { WorkNavigation, getProductionLayout } from "./work-navigation";

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

export default async function WorkPage({ searchParams }: PageProps) {
  const direction = await getDirection(searchParams);
  const layout = getProductionLayout((await searchParams).layout);
  return (
    <Shell direction={direction} path="/work">
      <main id="main-content" tabIndex={-1} className="inner-page work-page page-pad">
        <WorkNavigation active="sync" layout={layout} />
        <section className="page-intro" aria-labelledby="work-title">
          <div><p className="eyebrow">Music for picture</p><h1 id="work-title">Sync.</h1></div>
          <p className="intro-copy">Selected projects.<br />Music contributions by DWIZ.</p>
        </section>
        <section className="project-grid work-grid" aria-label="Sync projects">
          {publishedWork.map((entry) => <ProjectCard key={entry.slug} entry={entry} direction={direction} priority />)}
        </section>
      </main>
    </Shell>
  );
}
