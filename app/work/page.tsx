import type { Metadata } from "next";
import Link from "next/link";
import { Shell, VideoPoster } from "../components";
import { publishedWork, socialImage } from "../site-data";

export const metadata: Metadata = {
  title: "Published Work",
  description: "Published videos featuring music contributions by DWIZ.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Published Work | DWIZ",
    description: "Published videos featuring music contributions by DWIZ.",
    url: "/work",
    images: [socialImage],
  },
};

export default function WorkPage() {
  return (
    <Shell>
      <main id="main-content" tabIndex={-1} className="inner-page page-pad">
        <section className="page-intro" aria-labelledby="work-title">
          <p className="eyebrow">SELECTED / PUBLISHED WORK</p>
          <h1 id="work-title">TWO PUBLIC<br /><em>CONTRIBUTIONS.</em></h1>
          <p className="intro-copy">
            A concise record of published videos featuring music by DWIZ. Full
            music is shared privately rather than through a public catalogue.
          </p>
        </section>
        <section className="work-stack" aria-label="Published work">
          {publishedWork.map((entry) => (
            <Link
              className="work-feature"
              href={`/work/${entry.slug}`}
              key={entry.slug}
            >
              <VideoPoster entry={entry} label="OPEN PROJECT" />
              <div className="work-feature-copy">
                <span>{entry.index}</span>
                <h2>{entry.title}</h2>
                <p>{entry.summary}</p>
                <div className="credit-line">
                  <i>{entry.credit}</i>
                  <i>{entry.outlet}</i>
                </div>
              </div>
            </Link>
          ))}
        </section>
      </main>
    </Shell>
  );
}
