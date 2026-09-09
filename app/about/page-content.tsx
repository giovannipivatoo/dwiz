"use client";

import { useQueryParameters } from "../query-parameters";
import Link from "next/link";
import { directionHref } from "../variants";
import { Shell } from "../components";

const trajectory = [
  {
    number: "01",
    title: "Foundation",
    copy: "A production language developed through rap and trap beatmaking.",
  },
  {
    number: "02",
    title: "Now",
    copy: "Building original music around edit, movement and the needs of picture.",
  },
  {
    number: "03",
    title: "Direction",
    copy: "Developing toward sport, action, crime, tension and thriller work.",
  },
] as const;

export default function AboutPage() {
  const { direction } = useQueryParameters();
  return (
    <Shell direction={direction} path="/about">
      <main id="main-content" tabIndex={-1} className="inner-page page-pad">
        <section className="about-hero" aria-labelledby="about-title">
          <div className="about-title">
            <p className="eyebrow">About — the producer</p>
            <h1 id="about-title">Davide <br />Zonta.</h1>
          </div>
          <div className="about-copy">
            <p className="large-copy">DWIZ is Davide Zonta, a producer whose foundation comes from rap and trap beatmaking.</p>
            <p>He is developing that language for picture, with a future focus on sport, action, crime, tension and thriller.</p>
            <Link className="text-link" href={directionHref("/work", direction)}>Explore the work <span aria-hidden="true">↗</span></Link>
          </div>
        </section>
        <section className="trajectory-grid" aria-labelledby="trajectory-title">
          <h2 className="eyebrow" id="trajectory-title">Roots & direction</h2>
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
