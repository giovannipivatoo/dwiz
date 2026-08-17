import Link from "next/link";
import { Shell, VideoPoster } from "../components";
import { placements } from "../site-data";

export default function WorkPage() {
  return (
    <Shell>
      <main className="inner-page page-pad">
        <section className="page-intro">
          <p className="eyebrow">SELECTED WORK / 2026</p>
          <h1>TWO SIGNALS.<br /><em>ONE DIRECTION.</em></h1>
          <p className="intro-copy">
            Early sync work built around impact, pace and controlled tension.
            Each placement is shown as a focused case study rather than a large,
            undifferentiated catalogue.
          </p>
        </section>
        <section className="work-stack">
          {placements.map((placement) => (
            <Link
              className="work-feature"
              href={`/work/${placement.slug}`}
              key={placement.slug}
            >
              <VideoPoster videoId={placement.videoId} label="OPEN CASE STUDY" />
              <div className="work-feature-copy">
                <span>{placement.index}</span>
                <h2>{placement.title}</h2>
                <p>{placement.description}</p>
                <div className="tag-row">
                  {placement.palette.map((tag) => <i key={tag}>{tag}</i>)}
                </div>
              </div>
            </Link>
          ))}
        </section>
      </main>
    </Shell>
  );
}

