"use client";
import { assetPath } from "./asset-path";

import { useState } from "react";
import Link from "next/link";
import { publishedWork } from "./site-data";
import { directionHref } from "./variants";

export function CinemaHero() {
  const [selected, setSelected] = useState(0);
  const entry = publishedWork[selected];

  return (
    <section className="cinema-hero" aria-label="Featured projects">
      <div className="cinema-images" aria-hidden="true">
        {publishedWork.map((work, index) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img key={work.slug} src={assetPath(work.still)} alt="" className={selected === index ? "is-active" : ""} width={1280} height={720} fetchPriority={index === 0 ? "high" : "auto"} />
        ))}
      </div>
      <div className="cinema-intro"><span>Independent producer</span><span>Music for picture</span></div>
      <div className="cinema-caption" aria-live="polite">
        <p className="eyebrow">{entry.outlet} <span>— {entry.credit}</span></p>
        <Link href={directionHref("/work/" + entry.slug, "cinema")}>
          <h1>{entry.title}</h1>
          <span className="text-link">Explore project <span aria-hidden="true">↗</span></span>
        </Link>
      </div>
      <div className="cinema-selector" aria-label="Select featured project">
        {publishedWork.map((work, index) => (
          <button key={work.slug} type="button" aria-pressed={selected === index} onClick={() => setSelected(index)}>
            <span>{work.index}</span><span>{work.outlet}</span>
          </button>
        ))}
      </div>
      <a className="cinema-scroll" href="#selected-work">Selected work <span aria-hidden="true">↓</span></a>
    </section>
  );
}
