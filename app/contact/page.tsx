import type { Metadata } from "next";
import { Shell } from "../components";
import { siteConfig, socialImage } from "../site-data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact DWIZ for music supervision, exclusive library, collaboration and representation enquiries.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | DWIZ",
    description:
      "Music is shared privately with supervisors, libraries, collaborators and representatives on request.",
    url: "/contact",
    images: [socialImage],
  },
};

export default function ContactPage() {
  return (
    <Shell>
      <main id="main-content" tabIndex={-1} className="contact-page page-pad">
        <p className="eyebrow">CONTACT / PRIVATE MUSIC</p>
        <h1>LET&apos;S PUT<br />MUSIC TO<br /><em>PICTURE.</em></h1>
        <div className="contact-grid">
          <div>
            <span>PRIVATE MUSIC</span>
            <p>SHARED DIRECTLY<br />NOT THROUGH A PUBLIC CATALOGUE</p>
          </div>
          <div>
            <span>FOR</span>
            <p>MUSIC SUPERVISORS · EXCLUSIVE LIBRARIES<br />COLLABORATORS · REPRESENTATIVES</p>
          </div>
          {siteConfig.email ? (
            <div>
              <span>DIRECT</span>
              <a href={`mailto:${siteConfig.email}?subject=Music%20enquiry%20for%20DWIZ`}>
                {siteConfig.email.toUpperCase()} <span aria-hidden="true">↗</span>
              </a>
            </div>
          ) : null}
        </div>
        <p className="contact-footnote">
          Contact details will be published after final client confirmation.
          Until then, no address or social profile is shown without verification.
        </p>
      </main>
    </Shell>
  );
}
