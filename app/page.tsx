import Link from "next/link";
import { Shell, VideoPoster } from "./components";
import { placements, soundProfile } from "./site-data";

export default function Home() {
  return (
    <Shell>
      <main>
        <section className="hero page-pad">
          <div className="hero-copy">
            <p className="eyebrow">PRODUCER / SYNC COMPOSER</p>
            <h1>
              MUSIC FOR THE
              <br />
              MOMENT BEFORE
              <br />
              <em>IMPACT.</em>
            </h1>
            <div className="hero-bottom">
              <p>
                Beatmaker DNA shaped for picture. Original music for sport,
                action, crime and tension.
              </p>
              <Link className="text-link" href="/work">
                VIEW SELECTED SYNC <span>↗</span>
              </Link>
            </div>
          </div>
          <div className="hero-visual" aria-label="Abstract audio visualizer">
            <div className="visual-code">A/01 — SIGNAL ACTIVE</div>
            <div className="impact-ring impact-ring-one" />
            <div className="impact-ring impact-ring-two" />
            <div className="impact-core">808</div>
            <div className="visual-meter">
              {Array.from({ length: 22 }).map((_, index) => (
                <i key={index} style={{ height: `${20 + ((index * 17) % 78)}%` }} />
              ))}
            </div>
            <div className="visual-caption">PRESSURE / RHYTHM / RELEASE</div>
          </div>
        </section>

        <section className="selected-section page-pad">
          <div className="section-heading">
            <p className="eyebrow">01 / SELECTED SYNC</p>
            <p>Two placements. One clear direction.</p>
          </div>
          <div className="placement-grid">
            {placements.map((placement) => (
              <Link
                className="placement-card"
                href={`/work/${placement.slug}`}
                key={placement.slug}
              >
                <VideoPoster
                  videoId={placement.videoId}
                  label={`VIEW ${placement.index}`}
                  compact
                />
                <div className="placement-meta">
                  <span>{placement.title}</span>
                  <span>{placement.category}</span>
                  <span>{placement.year}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="manifesto page-pad">
          <p className="eyebrow">02 / POSITION</p>
          <div>
            <h2>BUILT IN BEATS.<br />MOVING INTO PICTURE.</h2>
            <p className="large-copy">
              A young producer translating the weight, space and urgency of
              hip-hop into music that makes images move harder.
            </p>
            <Link className="text-link" href="/about">
              ABOUT THE PROCESS <span>↗</span>
            </Link>
          </div>
        </section>

        <section className="sound-section page-pad">
          <div className="section-heading">
            <p className="eyebrow">03 / SOUND PROFILE</p>
            <p>Three cues currently in development.</p>
          </div>
          <div className="sound-list">
            {soundProfile.map((sound) => (
              <div className="sound-row" key={sound.number}>
                <span>{sound.number}</span>
                <strong>{sound.name}</strong>
                <p>{sound.detail}</p>
                <span className="sound-status">PRIVATE REEL ↗</span>
              </div>
            ))}
          </div>
          <p className="sound-note">
            Full private reel available to music supervisors and exclusive
            libraries on request.
          </p>
        </section>
      </main>
    </Shell>
  );
}
