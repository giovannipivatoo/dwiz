export const directions = [
  { id: "cinema", number: "01", label: "Cinema" },
  { id: "editorial", number: "02", label: "Editorial" },
  { id: "studio", number: "03", label: "Studio" },
] as const;

export type Direction = (typeof directions)[number]["id"];

export function directionHref(path: string, direction: Direction) {
  return path + "?v=" + direction;
}
