export type WorkEntry = {
  readonly slug: string;
  readonly legacySlug: string;
  readonly index: string;
  readonly title: string;
  readonly outlet: string;
  readonly videoId: string;
  readonly youtubeUrl: string;
  readonly poster: string;
  readonly still: string;
  readonly credit: "Music contribution";
  readonly summary: string;
  readonly beatTitle?: string;
  readonly timecode?: string;
  readonly publishedAt?: string;
  readonly coAuthors?: readonly string[];
  readonly masterOwner?: string;
  readonly publishingOwner?: string;
};

export const siteConfig = {
  name: "DWIZ",
  fullName: "Davide Zonta",
  url: "https://sync-composer-concept.giovannipivatoo.chatgpt.site",
  email: null as string | null,
  socials: [] as readonly { readonly label: string; readonly href: string }[],
};

export const socialImage = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: "DWIZ — Music for the moment before impact.",
};

export const publishedWork: readonly WorkEntry[] = [
  {
    slug: "a-casa-di-nerissima-serpe",
    legacySlug: "placement-one",
    index: "01",
    title: "A casa di Nerissima Serpe",
    outlet: "esse Magazine",
    videoId: "aTEkgtKLw5c",
    youtubeUrl: "https://www.youtube.com/watch?v=aTEkgtKLw5c",
    poster: "/work/nerissima-serpe.jpg",
    still: "/work/nerissima-serpe-still.jpg",
    credit: "Music contribution",
    summary:
      "A published esse Magazine video featuring Nerissima Serpe, with a music contribution by DWIZ.",
  },
  {
    slug: "super-9000-65-lanta",
    legacySlug: "placement-two",
    index: "02",
    title: "Super 9000 || The Sound of Hip-Hop with 65 Lanta",
    outlet: "Solid State Logic",
    videoId: "-Zmfm-GoCf8",
    youtubeUrl: "https://www.youtube.com/watch?v=-Zmfm-GoCf8",
    poster: "/work/65-lanta.jpg",
    still: "/work/65-lanta-still.jpg",
    credit: "Music contribution",
    summary:
      "A published Solid State Logic video featuring 65 Lanta, with a music contribution by DWIZ.",
  },
] as const;

export const directionRows = [
  {
    number: "01",
    name: "FOUNDATION",
    detail: "Rap and trap beatmaking",
  },
  {
    number: "02",
    name: "CURRENT MOVE",
    detail: "Original music shaped for picture",
  },
  {
    number: "03",
    name: "FUTURE FOCUS",
    detail: "Sport · action · crime · tension",
  },
] as const;
