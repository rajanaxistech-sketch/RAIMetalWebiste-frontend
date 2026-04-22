import { useEffect, useRef, useState } from "react";

function ImageCarousel({
  images = [],
  fallbackImage,
  alt = "image",
  autoPlay = true,
  interval = 3000,
  className = "", // ✅ allow external height control
}) {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const hasImages = images && images.length > 0;

  // ---- Navigation ----
  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const goToSlide = (index) => {
    setCurrent(index);
  };

  // ---- Autoplay ----
  useEffect(() => {
    if (!autoPlay || isHovered || images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrent((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, interval);

    return () => clearInterval(timer);
  }, [isHovered, autoPlay, interval, images.length]);

  // ---- Swipe ----
  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].screenX;
    const distance = touchStartX.current - touchEndX.current;

    if (distance > 50) nextSlide();
    else if (distance < -50) prevSlide();
  };

  // ---- Fallback ----
  if (!hasImages) {
    return (
      <img
        src={fallbackImage}
        alt={alt}
        className="w-full h-full object-cover"
      />
    );
  }

  return (
    <div
      className={`relative w-full h-full overflow-hidden group ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Images */}
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={alt}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${index === current ? "opacity-100" : "opacity-0"
            }`}
        />
      ))}

      {/* Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 px-3 py-1 text-white opacity-0 transition group-hover:opacity-100"
          >
            ‹
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 px-3 py-1 text-white opacity-0 transition group-hover:opacity-100"
          >
            ›
          </button>
        </>
      )}

      {/* Dots */}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 w-2 rounded-full transition ${index === current
                  ? "bg-white scale-125"
                  : "bg-gray-400"
                }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ImageCarousel;