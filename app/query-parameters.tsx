"use client";

import { createContext, Suspense, useContext } from "react";
import { useSearchParams } from "next/navigation";
import type { Direction } from "./variants";
import { getProductionLayout, type ProductionLayout } from "./work/work-navigation";

const QueryContext = createContext<{ direction: Direction; layout: ProductionLayout }>({
  direction: "cinema",
  layout: "sleeves",
});

function QueryProvider({ children }: { children: React.ReactNode }) {
  const params = useSearchParams();
  const variant = params.get("v");
  const direction = variant === "editorial" || variant === "studio" ? variant : "cinema";
  const layout = getProductionLayout(params.get("layout") ?? undefined);
  return <QueryContext.Provider value={{ direction, layout }}>{children}</QueryContext.Provider>;
}

export function QueryBoundary({ children }: { children: React.ReactNode }) {
  // The static HTML contains the default design; URL choices activate on hydration.
  return <Suspense fallback={children}><QueryProvider>{children}</QueryProvider></Suspense>;
}

export function useQueryParameters() {
  return useContext(QueryContext);
}
