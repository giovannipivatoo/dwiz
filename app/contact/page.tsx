import { getDirection, type PageProps } from "../variants";
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

export default async function ContactPage({ searchParams }: PageProps) {
  const direction = await getDirection(searchParams);
  return (
    <Shell direction={direction} path="/contact">
      <main id="main-content" tabIndex={-1} className="contact-page page-pad">
        <p className="eyebrow">Contact</p>
        <h1>Music<br />enquiries.</h1>
        <div className="contact-layout">
          <p className="contact-lead">Music is shared privately with supervisors, exclusive libraries, collaborators and representatives on request.</p>
          <div>
            <div className="contact-grid">
              <div><span>Private music</span><p>Shared directly, outside a public catalogue.</p></div>
              <div><span>Enquiries</span><p>Music supervision<br />Exclusive libraries<br />Collaboration & representation</p></div>
              {siteConfig.email ? <div><span>Direct contact</span><a className="text-link" href={"mailto:" + siteConfig.email + "?subject=Music%20enquiry%20for%20DWIZ"}>{siteConfig.email} ↗</a></div> : null}
              {siteConfig.socials.length > 0 ? <div><span>Elsewhere</span>{siteConfig.socials.map((social) => <a className="text-link" href={social.href} key={social.href} target="_blank" rel="noreferrer">{social.label} ↗</a>)}</div> : null}
            </div>
            {!siteConfig.email && <p className="contact-footnote">Direct contact details coming soon.</p>}
          </div>
        </div>
      </main>
    </Shell>
  );
}
