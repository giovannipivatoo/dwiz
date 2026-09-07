import Link from "next/link";
import { Shell } from "../components";
import type { WorkEntry } from "../site-data";
import { YouTubeVideo } from "../youtube-video";
import { directionHref, type Direction } from "../variants";

export function ProjectPage({ entry, next, direction }: { entry: WorkEntry; next: WorkEntry; direction: Direction }) {
  const heading = (
    <section className="project-head page-pad" aria-labelledby="project-title">
      <Link className="project-back" href={directionHref("/work", direction)}><span aria-hidden="true">←</span> All work</Link>
      <div className="project-heading-row"><h1 id="project-title">{entry.title}</h1><span className="project-number">{entry.index} / 02</span></div>
    </section>
  );
  const video = (
    <section className="project-video page-pad" aria-label={entry.title + " video"}>
      <YouTubeVideo key={entry.videoId} videoId={entry.videoId} title={entry.title} outlet={entry.outlet} youtubeUrl={entry.youtubeUrl} poster={entry.still} />
    </section>
  );
  return (
    <Shell direction={direction} path={"/work/" + entry.slug}>
      <main id="main-content" tabIndex={-1} className="project-page">
        {direction === "editorial" ? <>{video}{heading}</> : <>{heading}{video}</>}
        <section className="project-story page-pad" aria-labelledby="credit-title">
          <dl className="project-meta-grid">
            <div><dt>Publisher</dt><dd>{entry.outlet}</dd></div>
            <div><dt>Credit</dt><dd>{entry.credit}</dd></div>
            <div><dt>Contributor</dt><dd>DWIZ</dd></div>
          </dl>
          <div><h2 id="credit-title" className="visually-hidden">Project credit</h2><p className="large-copy">{entry.summary}</p></div>
        </section>
        <Link className="next-project page-pad" href={directionHref("/work/" + next.slug, direction)}>
          <span>Next project</span><strong>{next.title}</strong><span aria-hidden="true">↗</span>
        </Link>
      </main>
    </Shell>
  );
}
