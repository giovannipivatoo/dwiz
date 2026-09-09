import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  ...(process.env.GITHUB_PAGES === "true" ? {
    output: "export",
    basePath: "/dwiz",
    trailingSlash: true,
    images: { unoptimized: true },
    typescript: { tsconfigPath: "tsconfig.pages.json" },
    env: { NEXT_PUBLIC_BASE_PATH: "/dwiz" },
  } : {}),
};

export default nextConfig;
