"use client";

import { useQueryParameters } from "../../query-parameters";
import { publishedWork } from "../../site-data";
import { ProjectPage } from "../project-page";

const entry = publishedWork[0];

export default function EsseProjectPage() {
  const { direction } = useQueryParameters();
  return <ProjectPage direction={direction} entry={entry} next={publishedWork[1]} />;
}
