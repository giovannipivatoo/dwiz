import Link from "next/link";
import { Shell } from "../components";

type Placement = {
  readonly slug: string;
  readonly index: string;
  readonly title: string;
  readonly category: string;
  readonly year: string;
  readonly videoId: string;
  readonly description: string;
  readonly palette: readonly string[];
};

export function ProjectPage({
  placement,
  next,
}: {
  placement: Placement;
  next: Placement;
}) {
  return (
    <Shell>
      <main className="project-page">
        <section className="project-head page-pad">
          <p className="eyebrow">SYNC CASE STUDY / {placement.index}</p>
          <h1>{placement.title}</h1>
          <div className="project-meta-grid">
            <div><span>WORLD</span><strong>{placement.category}</strong></div>
            <div><span>ROLE</span><strong>PRODUCER / COMPOSER</strong></div>
            <div><span>YEAR</span><strong>{placement.year}</strong></div>
          </div>
        </section>
        <section className="project-video page-pad">
          <div className="video-frame">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${placement.videoId}?rel=0`}
              title={`${placement.title} video`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </section>
        <section className="project-story page-pad">
          <p className="eyebrow">THE SIGNAL</p>
          <div>
            <p className="large-copy">{placement.description}</p>
            <div className="tag-row large-tags">
              {placement.palette.map((tag) => <i key={tag}>{tag}</i>)}
            </div>
          </div>
          <p className="project-note">
            Final credits, client, brief and production notes to be confirmed
            before launch.
          </p>
        </section>
        <Link className="next-project page-pad" href={`/work/${next.slug}`}>
          <span>NEXT CASE STUDY</span>
          <strong>{next.title} ↗</strong>
        </Link>
      </main>
    </Shell>
  );
}

