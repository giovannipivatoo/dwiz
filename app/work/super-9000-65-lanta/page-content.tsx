"use client";

import { useQueryParameters } from "../../query-parameters";
import { publishedWork } from "../../site-data";
import { ProjectPage } from "../project-page";

const entry = publishedWork[1];

export default function SolidStateLogicProjectPage() {
  const { direction } = useQueryParameters();
  return <ProjectPage direction={direction} entry={entry} next={publishedWork[0]} />;
}
