"use client";

import { useQueryParameters } from "../../query-parameters";
import { Shell } from "../../components";
import { WorkNavigation, ProductionSwitcher } from "../work-navigation";
import { ProductionCatalog } from "./production-catalog";
import { releases } from "./releases";

export default function ProductionPage() {
  const { layout } = useQueryParameters();
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
