import { ProjectPage } from "../project-page";
import { placements } from "../../site-data";

export default function PlacementTwoPage() {
  return <ProjectPage placement={placements[1]} next={placements[0]} />;
}

