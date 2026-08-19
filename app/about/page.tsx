import type { Metadata } from "next";
import { Shell } from "../components";
import { socialImage } from "../site-data";

export const metadata: Metadata = {
  title: "About",
  description:
    "About DWIZ, Davide Zonta: a producer moving from rap and trap beatmaking into original music for picture.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About | DWIZ",
    description:
      "Davide Zonta is the producer behind DWIZ, moving from rap and trap beatmaking into music for picture.",
    url: "/about",
    images: [socialImage],
  },
};

const trajectory = [
  {
    number: "01",
    title: "FOUNDATION",
    copy: "A production language developed through rap and trap beatmaking.",
  },
  {
    number: "02",
    title: "NOW",
    copy: "Building original music around edit, movement and the needs of picture.",
  },
  {
    number: "03",
    title: "DIRECTION",
    copy: "Developing toward sport, action, crime, tension and thriller work.",
  },
] as const;

export default function AboutPage() {
  return (
    <Shell>
      <main id="main-content" tabIndex={-1} className="inner-page page-pad">
        <section className="about-hero" aria-labelledby="about-title">
          <div className="identity-panel" aria-hidden="true">
            <span>DWIZ</span>
            <div className="identity-disc">808</div>
            <small>DAVIDE ZONTA / PRODUCER</small>
          </div>
          <div className="about-copy">
            <p className="eyebrow">ABOUT / DAVIDE ZONTA</p>
            <h1 id="about-title">BUILT IN<br />BEATS.<br /><em>MOVING INTO<br />PICTURE.</em></h1>
            <p className="large-copy">
              DWIZ is Davide Zonta, a producer whose foundation comes from rap
              and trap beatmaking. He is developing that language for picture,
              with a future focus on sport, action, crime, tension and thriller.
            </p>
          </div>
        </section>
        <section className="trajectory-grid" aria-labelledby="trajectory-title">
          <p className="eyebrow" id="trajectory-title">TRAJECTORY</p>
          <div className="trajectory-list">
            {trajectory.map((item) => (
              <article key={item.number}>
                <span>{item.number}</span>
                <h2>{item.title}</h2>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </Shell>
  );
}
