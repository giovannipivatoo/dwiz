import Link from "next/link";
import { Shell } from "../components";
import type { WorkEntry } from "../site-data";
import { YouTubeVideo } from "../youtube-video";

export function ProjectPage({
  entry,
  next,
}: {
  entry: WorkEntry;
  next: WorkEntry;
}) {
  return (
    <Shell>
      <main id="main-content" tabIndex={-1} className="project-page">
        <section className="project-head page-pad" aria-labelledby="project-title">
          <p className="eyebrow">PUBLISHED WORK / {entry.index}</p>
          <h1 id="project-title">{entry.title}</h1>
          <div className="project-meta-grid">
            <div><span>OUTLET</span><strong>{entry.outlet}</strong></div>
            <div><span>CREDIT</span><strong>{entry.credit}</strong></div>
            <div><span>STATUS</span><strong>PUBLISHED VIDEO</strong></div>
          </div>
        </section>
        <section className="project-video page-pad" aria-label={`${entry.title} video`}>
          <YouTubeVideo
            videoId={entry.videoId}
            title={entry.title}
            outlet={entry.outlet}
            youtubeUrl={entry.youtubeUrl}
          />
        </section>
        <section className="project-story page-pad" aria-labelledby="credit-title">
          <p className="eyebrow">CREDIT</p>
          <div>
            <h2 id="credit-title" className="visually-hidden">Project credit</h2>
            <p className="large-copy">{entry.summary}</p>
          </div>
        </section>
        <Link className="next-project page-pad" href={`/work/${next.slug}`}>
          <span>NEXT PROJECT</span>
          <strong>{next.title} <span aria-hidden="true">↗</span></strong>
        </Link>
      </main>
    </Shell>
  );
}
