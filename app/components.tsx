import Link from "next/link";
import type { WorkEntry } from "./site-data";

export function Header() {
  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="DWIZ home">
        <span className="wordmark-mark" aria-hidden="true">DW</span>
        <span>DWIZ</span>
        <span className="wordmark-name">DAVIDE ZONTA</span>
      </Link>
      <nav aria-label="Primary navigation">
        <Link href="/work">WORK</Link>
        <Link href="/about">ABOUT</Link>
        <Link href="/contact">CONTACT</Link>
      </nav>
    </header>
  );
}
export function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <p className="eyebrow">MUSIC SHARED PRIVATELY ON REQUEST</p>
        <Link className="footer-cta" href="/contact">
          REQUEST MUSIC <span aria-hidden="true">↗</span>
        </Link>
      </div>
      <div className="footer-meta">
        <span>DWIZ / DAVIDE ZONTA</span>
        <span>PRODUCER · MUSIC FOR PICTURE</span>
        <span>© 2026</span>
      </div>
    </footer>
  );
}

export function Shell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a className="skip-link" href="#main-content">SKIP TO CONTENT</a>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export function VideoPoster({
  entry,
  label,
  compact = false,
}: {
  entry: WorkEntry;
  label: string;
  compact?: boolean;
}) {
  return (
    <div
      className={`video-poster ${compact ? "video-poster-compact" : ""}`}
      aria-hidden="true"
    >
      <div className="poster-grid" />
      <div className="poster-orbit" />
      <span className="poster-index">PUBLISHED WORK / {entry.index}</span>
      <strong className="poster-title">{entry.outlet}</strong>
      <span className="play-disc">▶</span>
      <span className="poster-label">{label}</span>
    </div>
  );
}
