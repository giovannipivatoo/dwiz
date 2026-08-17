import { ProjectPage } from "../project-page";
import { placements } from "../../site-data";

export default function PlacementOnePage() {
  return <ProjectPage placement={placements[0]} next={placements[1]} />;
}

