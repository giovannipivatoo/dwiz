import type { Metadata } from "next";
import Link from "next/link";
import { Shell, ProjectCard } from "./components";
import { CinemaHero } from "./cinema-hero";
import { publishedWork, socialImage } from "./site-data";
import { getDirection, directionHref, type PageProps } from "./variants";

export const metadata: Metadata = {
  title: { absolute: "DWIZ — Producer & Music for Picture" },
  description: "DWIZ is Davide Zonta, a producer with roots in rap and trap beatmaking, developing original music for picture.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "DWIZ — Producer & Music for Picture",
    description: "Rap and trap beatmaking roots, moving into original music for picture.",
    url: "/", type: "website", images: [socialImage],
  },
};

export default async function Home({ searchParams }: PageProps) {
  const direction = await getDirection(searchParams);
  return (
    <Shell direction={direction}>
      <main id="main-content" tabIndex={-1}>
        {direction === "cinema" ? <CinemaHero /> : direction === "editorial" ? (
          <section className="editorial-intro page-pad" aria-labelledby="home-title">
            <div className="editorial-intro-top"><p>Independent music production</p><p>Davide Zonta</p></div>
            <h1 id="home-title">SOUND<br /><span>IN PICTURE.</span></h1>
            <div className="editorial-intro-bottom"><p>Rap & trap roots.<br />A new direction in music for picture.</p><a href="#selected-work">Explore the work <span aria-hidden="true">↓</span></a></div>
          </section>
        ) : (
          <section className="studio-intro page-pad" aria-labelledby="home-title">
            <div><p className="eyebrow">DWIZ — Davide Zonta</p><h1 id="home-title">Music,<br /><em>for picture.</em></h1></div>
            <p>Independent producer. <br />Rooted in rap and trap. <br />Moving with the image.</p>
          </section>
        )}

        <section id="selected-work" className="home-work page-pad" aria-labelledby="selected-title">
          <div className="section-heading"><h2 id="selected-title">Sync <sup>02</sup></h2><div className="home-work-links"><Link className="text-link" href={directionHref("/work", direction)}>All sync <span aria-hidden="true">↗</span></Link><Link className="text-link" href="/work/production">Production <span aria-hidden="true">↗</span></Link></div></div>
          <div className="project-grid">{publishedWork.map((entry) => <ProjectCard entry={entry} direction={direction} key={entry.slug} priority={direction === "studio"} />)}</div>
        </section>

        <section className="home-about page-pad" aria-labelledby="about-heading">
          <p className="eyebrow">About DWIZ</p>
          <div><h2 id="about-heading">Davide Zonta.<br />The producer behind DWIZ.</h2><p>DWIZ is Davide Zonta. A producer translating a rap and trap beatmaking foundation into original music for picture.</p><Link className="text-link" href={directionHref("/about", direction)}>Meet DWIZ <span aria-hidden="true">↗</span></Link></div>
        </section>
      </main>
    </Shell>
  );
}
