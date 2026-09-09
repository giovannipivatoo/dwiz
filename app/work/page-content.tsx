"use client";

import { useQueryParameters } from "../query-parameters";
import { Shell, ProjectCard } from "../components";
import { publishedWork } from "../site-data";
import { WorkNavigation } from "./work-navigation";

export default function WorkPage() {
  const { direction, layout } = useQueryParameters();
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
