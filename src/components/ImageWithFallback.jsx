import { useEffect, useState } from "react";

function ImageWithFallback({
  src,
  fallbackSrc,
  alt,
  className = "",
  overlayClassName = "",
  label,
}) {
  const [currentSrc, setCurrentSrc] = useState(src || fallbackSrc);
  const [showPlaceholder, setShowPlaceholder] = useState(!src && !fallbackSrc);

  useEffect(() => {
    setCurrentSrc(src || fallbackSrc);
    setShowPlaceholder(!src && !fallbackSrc);
  }, [src, fallbackSrc]);

  if (showPlaceholder) {
    return (
      <div
        className={`flex items-center justify-center bg-[radial-gradient(circle_at_top_left,rgba(201,168,76,0.35),transparent_35%),linear-gradient(135deg,#1a1a1a,#090909)] ${className}`}
      >
        <span className="px-6 text-center font-bebas text-3xl tracking-[0.16em] text-silver-light/80">
          {label || alt}
        </span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        src={currentSrc}
        alt={alt}
        className="h-full w-full object-cover"
        onError={() => {
          if (currentSrc !== fallbackSrc && fallbackSrc) {
            setCurrentSrc(fallbackSrc);
            return;
          }

          setShowPlaceholder(true);
        }}
      />
      {overlayClassName ? <div className={overlayClassName} /> : null}
    </div>
  );
}

export default ImageWithFallback;
