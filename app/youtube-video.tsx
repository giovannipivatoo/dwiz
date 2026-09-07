"use client";

import { useState } from "react";

export function YouTubeVideo({ videoId, title, outlet, youtubeUrl, poster }: {
  videoId: string; title: string; outlet: string; youtubeUrl: string; poster: string;
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <div className="video-embed">
      <div className="video-frame">
        {isLoaded ? (
          <iframe
            src={"https://www.youtube-nocookie.com/embed/" + videoId + "?rel=0&autoplay=1"}
            title={title + " — " + outlet}
            allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        ) : (
          <button className="video-load-button" type="button" onClick={() => setIsLoaded(true)} aria-label={"Play " + title + " on YouTube"}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={poster} alt="" width={1280} height={720} />
            <span className="play-disc" aria-hidden="true">▶</span>
            <span className="video-load-label">Watch film</span>
          </button>
        )}
      </div>
      <a className="video-fallback text-link" href={youtubeUrl} target="_blank" rel="noreferrer">Watch on YouTube <span aria-hidden="true">↗</span></a>
    </div>
  );
}
