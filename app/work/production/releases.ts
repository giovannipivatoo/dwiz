export type Release = {
  readonly id: string;
  readonly title: string;
  readonly artist: string;
  readonly year: string;
  readonly cover: string;
  readonly role: "Co-production";
  readonly geniusUrl: string | null;
  readonly spotifyUrl: string | null;
  readonly youtubeUrl: string;
};

// Seven releases selected and ordered by the artist. This is not a stream ranking.
// All seven co-production credits are confirmed directly by the artist.
// Listening links and other credits verified against official releases and Genius.
export const releases: readonly Release[] = [
  {
    "id": "despedida",
    "title": "Despedida",
    "artist": "BAIXADA, GB Trem, Rei Bxd, Js da Torre, Lyhen & Modern",
    "year": "2026",
    "cover": "/production/despedida.jpg",
    "role": "Co-production",
    "geniusUrl": null,
    "spotifyUrl": "https://open.spotify.com/track/5wjfeD4eDzX9QZUiGeKJBV",
    "youtubeUrl": "https://www.youtube.com/watch?v=uoZeF7clTEg"
  },
  {
    "id": "10716356",
    "title": "ADDERALL",
    "artist": "Glocky & Faneto",
    "year": "2024",
    "cover": "/production/10716356.png",
    "role": "Co-production",
    "geniusUrl": "https://genius.com/Glocky-and-faneto-adderall-lyrics",
    "spotifyUrl": "https://open.spotify.com/track/6F8zgBevIIMk9SMg81dDGx",
    "youtubeUrl": "https://www.youtube.com/watch?v=QxxUDDqSYJM"
  },
  {
    "id": "12900231",
    "title": "LAST KRY",
    "artist": "Stunna Gambino",
    "year": "2025",
    "cover": "/production/12900231.png",
    "role": "Co-production",
    "geniusUrl": "https://genius.com/Stunna-gambino-last-kry-lyrics",
    "spotifyUrl": "https://open.spotify.com/track/5slN3govivpGPP3EJOlJNU",
    "youtubeUrl": "https://www.youtube.com/watch?v=Toly_mudRaU"
  },
  {
    "id": "10257257",
    "title": "Medicine & Fentanyl",
    "artist": "Fashion Forty",
    "year": "2024",
    "cover": "/production/10257257.png",
    "role": "Co-production",
    "geniusUrl": "https://genius.com/Fashion-forty-medicine-and-fentanyl-lyrics",
    "spotifyUrl": "https://open.spotify.com/track/4YhoLYWKFdRPCCqRIHdIFE",
    "youtubeUrl": "https://www.youtube.com/watch?v=j4_dNInVbLk"
  },
  {
    "id": "11004667",
    "title": "Aw Yeah",
    "artist": "Quando Rondo",
    "year": "2024",
    "cover": "/production/11004667.png",
    "role": "Co-production",
    "geniusUrl": "https://genius.com/Quando-rondo-aw-yeah-lyrics",
    "spotifyUrl": "https://open.spotify.com/track/2ngpwrVRd1JBvo22hH9L9w",
    "youtubeUrl": "https://www.youtube.com/watch?v=o2u-PrEqjow"
  },
  {
    "id": "13520495",
    "title": "+TRAP",
    "artist": "TIARA & YP",
    "year": "2026",
    "cover": "/production/13520495.png",
    "role": "Co-production",
    "geniusUrl": "https://genius.com/Tiara-ita-trap-lyrics",
    "spotifyUrl": null,
    "youtubeUrl": "https://www.youtube.com/watch?v=B-f0SSfZKzs"
  },
  {
    "id": "12054110",
    "title": "Don’t Panic",
    "artist": "Jay Montana",
    "year": "2025",
    "cover": "/production/12054110.png",
    "role": "Co-production",
    "geniusUrl": "https://genius.com/Jay-montana-dont-panic-2025-lyrics",
    "spotifyUrl": "https://open.spotify.com/track/5GfvPoh1dEeG70kEbG71eJ",
    "youtubeUrl": "https://www.youtube.com/watch?v=bnIThjvVFJs"
  }
];
