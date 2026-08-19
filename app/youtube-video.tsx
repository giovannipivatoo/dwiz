"use client";

import { useState } from "react";

export function YouTubeVideo({
  videoId,
  title,
  outlet,
  youtubeUrl,
}: {
  videoId: string;
  title: string;
  outlet: string;
  youtubeUrl: string;
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="video-embed">
      <div className="video-frame">
        {isLoaded ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0`}
            title={`${title} — ${outlet}`}
            allow="clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        ) : (
          <button
            className="video-load-button"
            type="button"
            onClick={() => setIsLoaded(true)}
            aria-label={`Play ${title} on YouTube`}
          >
            <span className="video-load-grid" aria-hidden="true" />
            <span className="video-load-index">PUBLISHED VIDEO</span>
            <span className="video-load-title">{outlet}</span>
            <span className="play-disc" aria-hidden="true">▶</span>
            <span className="video-load-label">PLAY VIDEO</span>
          </button>
        )}
      </div>
      <a
        className="video-fallback text-link"
        href={youtubeUrl}
        target="_blank"
        rel="noreferrer"
      >
        OPEN ON YOUTUBE <span aria-hidden="true">↗</span>
      </a>
    </div>
  );
}

