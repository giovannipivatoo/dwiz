import Link from "next/link";

export const productionLayouts = [
  { id: "sleeves", number: "01", label: "Sleeves" },
  { id: "index", number: "02", label: "Index" },
  { id: "spotlight", number: "03", label: "Spotlight" },
] as const;

export type ProductionLayout = (typeof productionLayouts)[number]["id"];

export function getProductionLayout(value?: string | string[]): ProductionLayout {
  return value === "index" || value === "spotlight" ? value : "sleeves";
}

export function WorkNavigation({ active, layout = "sleeves" }: { active: "sync" | "production"; layout?: ProductionLayout }) {
  return (
    <nav className="work-navigation" aria-label="Work categories">
      <Link href={"/work?layout=" + layout} aria-current={active === "sync" ? "page" : undefined}>Sync <sup>02</sup></Link>
      <Link href={"/work/production?layout=" + layout} aria-current={active === "production" ? "page" : undefined}>Production</Link>
    </nav>
  );
}

export function ProductionSwitcher({ layout }: { layout: ProductionLayout }) {
  return (
    <nav className="direction-switcher production-switcher" aria-label="Production layouts">
      <span className="switcher-label">Production</span>
      {productionLayouts.map((item) => (
        <Link key={item.id} href={"/work/production?layout=" + item.id} aria-current={layout === item.id ? "true" : undefined}>
          <span>{item.number}</span> {item.label}
        </Link>
      ))}
    </nav>
  );
}
