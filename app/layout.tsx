import type { Metadata } from "next";
import { headers } from "next/headers";
import { siteConfig, socialImage } from "./site-data";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = process.env.GITHUB_PAGES === "true" ? new Headers() : await headers();
  const forwardedHost = requestHeaders
    .get("x-forwarded-host")
    ?.split(",")[0]
    ?.trim();
  const host = forwardedHost ?? requestHeaders.get("host");
  const forwardedProtocol = requestHeaders
    .get("x-forwarded-proto")
    ?.split(",")[0]
    ?.trim();
  const protocol =
    forwardedProtocol ?? (host?.startsWith("localhost") ? "http" : "https");
  const metadataBase = host
    ? new URL(`${protocol}://${host}`)
    : new URL(siteConfig.url);

  return {
    metadataBase,
    applicationName: siteConfig.name,
    title: {
      default: "DWIZ — Producer & Music for Picture",
      template: "%s | DWIZ",
    },
    description:
      "Official portfolio of DWIZ, Davide Zonta: a producer with roots in rap and trap beatmaking, developing original music for picture.",
    openGraph: {
      siteName: siteConfig.name,
      locale: "en_US",
      type: "website",
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      images: ["/og.png"],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
