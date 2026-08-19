import type { Metadata } from "next";
import Link from "next/link";
import { Shell, VideoPoster } from "./components";
import { directionRows, publishedWork, socialImage } from "./site-data";

export const metadata: Metadata = {
  title: { absolute: "DWIZ — Producer & Music for Picture" },
  description:
    "DWIZ is Davide Zonta, a producer with roots in rap and trap beatmaking, developing original music for picture.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "DWIZ — Producer & Music for Picture",
    description:
      "Rap and trap beatmaking roots, moving into original music for picture.",
    url: "/",
    type: "website",
    images: [socialImage],
  },
};

export default function Home() {
  return (
    <Shell>
      <main id="main-content" tabIndex={-1}>
        <section className="hero page-pad" aria-labelledby="home-title">
          <div className="hero-copy">
            <p className="eyebrow">DWIZ / PRODUCER / MUSIC FOR PICTURE</p>
            <h1 id="home-title">
              MUSIC FOR THE
              <br />
              MOMENT BEFORE
              <br />
              <em>IMPACT.</em>
            </h1>
            <div className="hero-bottom">
              <p>
                Rap and trap beatmaking roots. Developing original music for
                picture, with a future focus on sport, action, crime and tension.
              </p>
              <Link className="text-link" href="/work">
                VIEW PUBLISHED WORK <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <div className="visual-code">DWIZ — SIGNAL ACTIVE</div>
            <div className="impact-ring impact-ring-one" />
            <div className="impact-ring impact-ring-two" />
            <div className="impact-core">808</div>
            <div className="visual-meter">
              {Array.from({ length: 22 }).map((_, index) => (
                <i key={index} style={{ height: `${20 + ((index * 17) % 78)}%` }} />
              ))}
            </div>
            <div className="visual-caption">RHYTHM / WEIGHT / SPACE</div>
          </div>
        </section>

        <section className="selected-section page-pad" aria-labelledby="selected-title">
          <div className="section-heading">
            <p className="eyebrow">01 / PUBLISHED WORK</p>
            <p id="selected-title">Two public music contributions.</p>
          </div>
          <div className="placement-grid">
            {publishedWork.map((entry) => (
              <Link
                className="placement-card"
                href={`/work/${entry.slug}`}
                key={entry.slug}
              >
                <VideoPoster entry={entry} label={`VIEW ${entry.index}`} compact />
                <div className="placement-meta">
                  <span>{entry.title}</span>
                  <span>{entry.credit}</span>
                  <span>{entry.outlet}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="manifesto page-pad" aria-labelledby="position-title">
          <p className="eyebrow">02 / POSITION</p>
          <div>
            <h2 id="position-title">BUILT IN BEATS.<br />MOVING INTO PICTURE.</h2>
            <p className="large-copy">
              DWIZ is Davide Zonta, a producer translating a rap and trap
              beatmaking foundation into music made to work with images.
            </p>
            <Link className="text-link" href="/about">
              ABOUT DWIZ <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>

        <section className="sound-section page-pad" aria-labelledby="direction-title">
          <div className="section-heading">
            <p className="eyebrow">03 / DIRECTION</p>
            <p id="direction-title">Where the work starts, and where it is going.</p>
          </div>
          <div className="sound-list">
            {directionRows.map((row) => (
              <div className="sound-row" key={row.number}>
                <span>{row.number}</span>
                <strong>{row.name}</strong>
                <p>{row.detail}</p>
              </div>
            ))}
          </div>
          <p className="sound-note">
            Music is shared privately with supervisors, exclusive libraries,
            collaborators and representatives on request.
          </p>
        </section>
      </main>
    </Shell>
  );
}
