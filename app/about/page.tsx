import { Shell } from "../components";

export default function AboutPage() {
  return (
    <Shell>
      <main className="inner-page page-pad">
        <section className="about-hero">
          <div className="about-photo">
            <div className="photo-placeholder">
              <span>SUPPLIED STUDIO PORTRAIT</span>
              <b>A/01</b>
            </div>
          </div>
          <div className="about-copy">
            <p className="eyebrow">ABOUT / THE PRODUCER</p>
            <h1>BUILT IN<br />BEATS.<br /><em>READY FOR<br />PICTURE.</em></h1>
            <p className="large-copy">
              ARTIST NAME is a producer and sync composer bringing the rhythm,
              weight and negative space of modern hip-hop into sport, action,
              crime and tension-driven visual work.
            </p>
          </div>
        </section>
        <section className="process-grid">
          <p className="eyebrow">PROCESS / 03 STEPS</p>
          <div className="process-list">
            <article><span>01</span><h2>READ THE CUT</h2><p>Find the pressure point, pace and emotional turn before adding sound.</p></article>
            <article><span>02</span><h2>BUILD THE ENGINE</h2><p>Shape drums, 808s and texture around movement rather than genre convention.</p></article>
            <article><span>03</span><h2>MAKE SPACE HIT</h2><p>Use contrast, silence and release so the sync supports edit and story.</p></article>
          </div>
        </section>
        <section className="studio-strip">
          <div><span>STUDIO FRAME / 01</span></div>
          <div><span>STUDIO FRAME / 02</span></div>
          <div><span>DETAIL / PROCESS</span></div>
        </section>
      </main>
    </Shell>
  );
}

