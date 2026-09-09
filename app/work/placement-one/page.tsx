import { redirect } from "next/navigation";

export default function LegacyPlacementOnePage() {
  if (process.env.GITHUB_PAGES === "true") {
    const destination = "/dwiz/work/a-casa-di-nerissima-serpe/";
    return <><meta httpEquiv="refresh" content={"0;url=" + destination} /><a href={destination}>Continue to project</a></>;
  }
  redirect("/work/a-casa-di-nerissima-serpe");
}

