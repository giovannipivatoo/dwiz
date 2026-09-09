"use client";
import { assetPath } from "../../asset-path";

import { useState } from "react";
import type { Release } from "./releases";
import type { ProductionLayout } from "../work-navigation";

function Artwork({ entry, priority = false }: { entry: Release; priority?: boolean }) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={assetPath(entry.cover)} alt={"Artwork for " + entry.title} width={1000} height={1000} loading={priority ? "eager" : "lazy"} />;
}

function ListenLink({ entry }: { entry: Release }) {
  return <a className="text-link" href={entry.spotifyUrl ?? entry.youtubeUrl} target="_blank" rel="noreferrer">Listen on {entry.spotifyUrl ? "Spotify" : "YouTube"} <span aria-hidden="true">↗</span></a>;
}

function ReleaseCredit({ entry, className }: { entry: Release; className?: string }) {
  return entry.geniusUrl
    ? <a className={className} href={entry.geniusUrl} target="_blank" rel="noreferrer" aria-label={entry.role + " credits for " + entry.title}>{entry.role} <span aria-hidden="true">↗</span></a>
    : <span className={className}>{entry.role}</span>;
}

export function ProductionCatalog({ releases, layout }: { releases: readonly Release[]; layout: ProductionLayout }) {
  const [selected, setSelected] = useState(0);
  const entry = releases[selected];

  if (layout === "index") {
    return (
      <section className="record-index page-pad" aria-label="Production discography">
        <aside className="index-preview">
          <div className="index-artwork"><Artwork entry={entry} priority /></div>
          <div className="index-preview-caption"><p>{entry.title}</p><span>{entry.artist}</span></div>
          <ListenLink entry={entry} />
        </aside>
        <div className="record-list">
          <div className="record-list-heading"><span>Release / artist</span><span>Year</span></div>
          {releases.map((record, index) => (
            <article className={"record-row" + (selected === index ? " is-selected" : "")} key={record.id} onMouseEnter={() => setSelected(index)} onFocus={() => setSelected(index)}>
              <a className="record-row-main" href={record.spotifyUrl ?? record.youtubeUrl} target="_blank" rel="noreferrer" aria-label={"Listen to " + record.title + " by " + record.artist}>
                <span className="record-row-number">{String(index + 1).padStart(2, "0")}</span>
                <div className="record-row-cover"><Artwork entry={record} /></div>
                <div className="record-row-title"><h2>{record.title}</h2><p>{record.artist}</p></div>
                <span className="record-row-year">{record.year}</span>
                <span className="record-row-arrow" aria-hidden="true">↗</span>
              </a>
              <ReleaseCredit entry={record} className="record-row-credit" />
            </article>
          ))}
        </div>
      </section>
    );
  }

  if (layout === "spotlight") {
    return (
      <section className="record-spotlight" aria-label="Featured production and releases">
        <div className="spotlight-stage page-pad">
          <div className="spotlight-artwork"><Artwork entry={entry} priority /></div>
          <div className="spotlight-copy">
            <div className="spotlight-kicker"><span>{entry.year} — {entry.role}</span><span>{String(selected + 1).padStart(2, "0")} / {releases.length}</span></div>
            <div aria-live="polite"><p className="spotlight-artist">{entry.artist}</p><h2 className={entry.title.length > 28 ? "long-title" : ""}>{entry.title}</h2></div>
            <div className="spotlight-actions"><ListenLink entry={entry} />{entry.geniusUrl && <a href={entry.geniusUrl} target="_blank" rel="noreferrer">View credits ↗</a>}</div>
            <div className="spotlight-controls"><span>Select a release below</span><div><button type="button" onClick={() => setSelected((selected + releases.length - 1) % releases.length)} aria-label="Previous release">←</button><button type="button" onClick={() => setSelected((selected + 1) % releases.length)} aria-label="Next release">→</button></div></div>
          </div>
        </div>
        <div className="record-selector page-pad" aria-label="Select a release">
          {releases.map((record, index) => (
            <button className="record-selector-item" key={record.id} type="button" aria-pressed={selected === index} aria-label={"Feature " + record.title + " by " + record.artist} onClick={() => setSelected(index)}>
              <div className="record-selector-art"><Artwork entry={record} /></div><span>{record.title}</span><small>{record.artist}</small>
            </button>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="record-sleeves page-pad" aria-label="Selected production releases">
      {releases.map((record, index) => (
        <article className="record-sleeve" key={record.id}>
          <a className="sleeve-main" href={record.spotifyUrl ?? record.youtubeUrl} target="_blank" rel="noreferrer" aria-label={"Listen to " + record.title + " by " + record.artist}>
            <div className="sleeve-artwork"><Artwork entry={record} priority={index < 4} /><span className="sleeve-listen" aria-hidden="true">Listen <span>↗</span></span></div>
            <h2>{record.title}</h2>
            <p>{record.artist}</p>
          </a>
          <div className="sleeve-meta"><ReleaseCredit entry={record} /><span>{record.year}</span></div>
        </article>
      ))}
    </section>
  );
}
