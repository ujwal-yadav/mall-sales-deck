"use client";

import { useRef, useEffect } from "react";

interface VideoBackgroundProps {
  src: string;
  poster?: string;
  overlay?: boolean;
  overlayOpacity?: number;
  className?: string;
}

export default function VideoBackground({
  src,
  poster,
  overlay = true,
  overlayOpacity = 0.5,
  className = "",
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        poster={poster}
        className="h-full w-full object-cover"
      >
        <source src={src} type="video/mp4" />
      </video>
      {overlay && (
        <>
          <div
            className="absolute inset-0"
            style={{ backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})` }}
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/30 via-transparent to-black/60" />
        </>
      )}
    </div>
  );
}
