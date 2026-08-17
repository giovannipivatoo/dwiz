import { Shell } from "../components";

export default function ContactPage() {
  return (
    <Shell>
      <main className="contact-page page-pad">
        <p className="eyebrow">CONTACT / SELECTED PROJECTS</p>
        <h1>LET&apos;S MAKE<br />THE IMAGE<br /><em>HIT.</em></h1>
        <div className="contact-grid">
          <div>
            <span>DIRECT</span>
            <a href="mailto:artist@email.com">ARTIST@EMAIL.COM ↗</a>
          </div>
          <div>
            <span>PRIVATE REEL</span>
            <p>AVAILABLE TO MUSIC SUPERVISORS<br />AND EXCLUSIVE LIBRARIES</p>
          </div>
          <div>
            <span>SOCIAL</span>
            <a href="#">INSTAGRAM ↗</a>
            <a href="#">YOUTUBE ↗</a>
          </div>
        </div>
        <p className="contact-footnote">
          Selected work, the person behind it and a direct line for the right
          collaboration.
        </p>
      </main>
    </Shell>
  );
}
