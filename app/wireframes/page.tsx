import Link from "next/link";

const Block = ({ className = "" }: { className?: string }) => (
  <div className={`wf-block ${className}`} />
);

function BrowserFrame({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <article className="wf-frame">
      <div className="wf-frame-head"><strong>{title}</strong><span>1440 × AUTO</span></div>
      <div className="wf-browser">
        <div className="wf-nav"><b>A/01</b><span>WORK　 ABOUT　 CONTACT</span></div>
        {children}
      </div>
    </article>
  );
}

export default function WireframesPage() {
  return (
    <main className="wireframes-page">
      <header className="wireframes-header">
        <div>
          <p>SYNC COMPOSER PORTFOLIO / UX BLUEPRINT</p>
          <h1>WIREFRAMES</h1>
        </div>
        <Link href="/">VIEW HIGH-FIDELITY MOCKUP ↗</Link>
      </header>
      <section className="wireframe-notes">
        <div><span>PRIMARY AUDIENCE</span><strong>MUSIC SUPERVISORS<br />EXCLUSIVE LIBRARIES</strong></div>
        <div><span>PRIMARY JOB</span><strong>ESTABLISH TASTE<br />AND CREDIBILITY</strong></div>
        <div><span>PRIMARY ACTION</span><strong>VIEW SYNC<br />CONTACT DIRECTLY</strong></div>
        <div><span>REMOVED</span><strong>SHOP · PRICES<br />PUBLIC CATALOGUE</strong></div>
      </section>
      <section className="wireframe-grid">
        <BrowserFrame title="01 / HOME">
          <div className="wf-hero"><div><Block className="wf-kicker" /><Block className="wf-title" /><Block className="wf-title short" /><Block className="wf-copy" /></div><Block className="wf-visual" /></div>
          <div className="wf-section-title"><Block /><Block /></div>
          <div className="wf-two-col"><Block className="wf-media" /><Block className="wf-media" /></div>
          <div className="wf-manifest"><Block className="wf-copy" /><Block className="wf-title" /></div>
        </BrowserFrame>
        <BrowserFrame title="02 / WORK INDEX">
          <div className="wf-page-title"><Block className="wf-kicker" /><Block className="wf-title" /><Block className="wf-copy" /></div>
          <div className="wf-work-row"><Block className="wf-wide-media" /><div><Block /><Block className="wf-copy" /></div></div>
          <div className="wf-work-row"><Block className="wf-wide-media" /><div><Block /><Block className="wf-copy" /></div></div>
        </BrowserFrame>
        <BrowserFrame title="03 / CASE STUDY">
          <div className="wf-page-title compact"><Block className="wf-kicker" /><Block className="wf-title" /></div>
          <Block className="wf-video" />
          <div className="wf-detail"><Block className="wf-kicker" /><div><Block className="wf-title short" /><Block className="wf-copy" /></div></div>
        </BrowserFrame>
        <BrowserFrame title="04 / ABOUT + CONTACT">
          <div className="wf-about"><Block className="wf-portrait" /><div><Block className="wf-kicker" /><Block className="wf-title" /><Block className="wf-copy" /></div></div>
          <div className="wf-process"><Block /><Block /><Block /></div>
          <div className="wf-contact"><Block className="wf-title" /><Block className="wf-copy" /></div>
        </BrowserFrame>
      </section>
      <section className="mobile-wireframe">
        <div>
          <p>RESPONSIVE PRINCIPLE</p>
          <h2>ONE STORY.<br />NO DEAD ENDS.</h2>
          <ul>
            <li>Hero becomes one clear vertical statement.</li>
            <li>Video remains tap-to-play and never autoplays with sound.</li>
            <li>Credits stay visible without opening extra overlays.</li>
            <li>Contact is always one tap away.</li>
          </ul>
        </div>
        <div className="phone-frame">
          <div className="wf-nav"><b>A/01</b><span>MENU</span></div>
          <Block className="wf-kicker" /><Block className="wf-title" /><Block className="wf-title" /><Block className="wf-copy" /><Block className="wf-portrait" /><Block className="wf-copy" />
        </div>
      </section>
    </main>
  );
}
