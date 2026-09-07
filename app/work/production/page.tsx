import type { Metadata } from "next";
import { Shell } from "../../components";
import type { PageProps } from "../../variants";
import { socialImage } from "../../site-data";
import { WorkNavigation, ProductionSwitcher, getProductionLayout } from "../work-navigation";
import { ProductionCatalog } from "./production-catalog";
import { releases } from "./releases";

export const metadata: Metadata = {
  title: "Production",
  description: "Released records featuring production and co-production by DWIZ.",
  alternates: { canonical: "/work/production" },
  openGraph: {
    title: "Production | DWIZ",
    description: "Beatmaking, production and co-production. Selected releases.",
    url: "/work/production",
    images: [socialImage],
  },
};

export default async function ProductionPage({ searchParams }: PageProps) {
  const layout = getProductionLayout((await searchParams).layout);
  return (
    <Shell direction="cinema" path="/work/production">
      <main id="main-content" tabIndex={-1} className={"production-page layout-" + layout}>
        <div className="page-pad">
          <WorkNavigation active="production" layout={layout} />
          <header className="production-heading">
            <div><p className="eyebrow">Beatmaking & records</p><h1>Production.</h1></div>
            <p>Selected releases.<br />Co-production by DWIZ.</p>
          </header>
        </div>
        <ProductionCatalog key={layout} releases={releases} layout={layout} />
        <div className="catalog-end page-pad"><span>{releases.length} selected releases</span><a href="https://genius.com/artists/Dwiz-ita" target="_blank" rel="noreferrer">Credits on Genius <span aria-hidden="true">↗</span></a></div>
      </main>
      <ProductionSwitcher layout={layout} />
    </Shell>
  );
}
