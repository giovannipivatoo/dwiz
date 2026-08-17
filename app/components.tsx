import Link from "next/link";

export function ReviewBar() {
  return (
    <div className="review-bar">
      <span>CONCEPT PROTOTYPE / CONTENT TO BE REPLACED</span>
      <Link href="/wireframes">VIEW WIREFRAMES ↗</Link>
    </div>
  );
}

export function Header() {
  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="Artist Name home">
        <span className="wordmark-mark">A/01</span>
        <span>ARTIST NAME</span>
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
        <p className="eyebrow">AVAILABLE FOR SELECTED PROJECTS</p>
        <Link className="footer-cta" href="/contact">
          LET&apos;S MAKE IT HIT <span>↗</span>
        </Link>
      </div>
      <div className="footer-meta">
        <span>SYNC COMPOSER / PRODUCER</span>
        <span>SPORT · ACTION · CRIME · TENSION</span>
        <span>© 2026</span>
      </div>
    </footer>
  );
}

export function Shell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ReviewBar />
      <Header />
      {children}
      <Footer />
    </>
  );
}

export function VideoPoster({
  videoId,
  label,
  compact = false,
}: {
  videoId: string;
  label: string;
  compact?: boolean;
}) {
  return (
    <div className={`video-poster ${compact ? "video-poster-compact" : ""}`}>
      <img
        src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
        alt=""
      />
      <div className="poster-scrim" />
      <span className="poster-index">SYNC / SELECTED WORK</span>
      <span className="play-disc" aria-hidden="true">
        ▶
      </span>
      <span className="poster-label">{label}</span>
    </div>
  );
}
