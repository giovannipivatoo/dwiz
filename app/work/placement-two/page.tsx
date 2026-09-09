import { redirect } from "next/navigation";

export default function LegacyPlacementTwoPage() {
  if (process.env.GITHUB_PAGES === "true") {
    const destination = "/dwiz/work/super-9000-65-lanta/";
    return <><meta httpEquiv="refresh" content={"0;url=" + destination} /><a href={destination}>Continue to project</a></>;
  }
  redirect("/work/super-9000-65-lanta");
}

