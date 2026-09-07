import Link from "next/link";
import type { WorkEntry } from "./site-data";
import { directions, directionHref, type Direction } from "./variants";

export function Header({ direction, path }: { direction: Direction; path: string }) {
  return (
    <header className="site-header">
      <Link className="wordmark" href={directionHref("/", direction)} aria-label="DWIZ home">dwiz</Link>
      <span className="header-description">Davide Zonta<br />Producer & music for picture</span>
      <nav aria-label="Primary navigation">
        {[["/work", "Work"], ["/about", "About"], ["/contact", "Contact"]].map(([href, label]) => (
          <Link href={directionHref(href, direction)} key={href} aria-current={path.startsWith(href) ? "page" : undefined}>{label}</Link>
        ))}
      </nav>
    </header>
  );
}

export function Footer({ direction, contact = false }: { direction: Direction; contact?: boolean }) {
  return (
    <footer className="site-footer page-pad">
      <div className="footer-top">
        <Link className="wordmark" href={directionHref("/", direction)} aria-label="DWIZ home">dwiz</Link>
        <p>Rap & trap roots.<br />Original music for picture.</p>
        <Link className="text-link" href={directionHref(contact ? "/work" : "/contact", direction)}>
          {contact ? "Explore the work" : "Music enquiries"}<span aria-hidden="true">↗</span>
        </Link>
      </div>
      <div className="footer-meta"><span>© 2026 DWIZ — Davide Zonta</span><span>Independent music production</span></div>
    </footer>
  );
}

export function Shell({ children, direction, path = "/" }: { children: React.ReactNode; direction: Direction; path?: string }) {
  return (
    <div className={"site direction-" + direction + (path === "/" ? " is-home" : "")}>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header direction={direction} path={path} />
      {children}
      <Footer direction={direction} contact={path === "/contact"} />
      {direction !== "cinema" && <nav className="direction-switcher" aria-label="Design versions">
        <span className="switcher-label">Explore layouts</span>
        {directions.map((item) => (
          <Link key={item.id} href={directionHref(path, item.id)} aria-current={item.id === direction ? "true" : undefined}>
            <span>{item.number}</span> {item.label}
          </Link>
        ))}
      </nav>}
    </div>
  );
}

export function VideoPoster({ entry, priority = false }: { entry: WorkEntry; priority?: boolean }) {
  return (
    <div className="video-poster">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={entry.still} alt={entry.title + " — " + entry.outlet} width={1280} height={720} loading={priority ? "eager" : "lazy"} />
      <span className="poster-action" aria-hidden="true">View project <span>↗</span></span>
    </div>
  );
}

export function ProjectCard({ entry, direction, priority = false }: { entry: WorkEntry; direction: Direction; priority?: boolean }) {
  return (
    <Link className="project-card" href={directionHref("/work/" + entry.slug, direction)}>
      <VideoPoster entry={entry} priority={priority} />
      <div className="card-copy">
        <div className="card-kicker"><span>{entry.outlet}</span><span>{entry.index}</span></div>
        <h2>{entry.title}</h2>
        <p>{entry.credit}<span aria-hidden="true">↗</span></p>
      </div>
    </Link>
  );
}
