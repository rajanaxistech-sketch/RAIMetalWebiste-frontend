import { useState } from "react";

function SecondaryMetalPage() {
  const images = [
    "/uploads/SecondaryMaterial/secondarymaterial1.jpg",
    "/uploads/SecondaryMaterial/secondarymaterial2.jpg",
    "/uploads/SecondaryMaterial/secondarymaterial3.jpg",
    "/uploads/SecondaryMaterial/secondarymaterial4.jpg",
  ];

  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  return (
    <div className="pt-[76px] md:pt-[114px]">

      {/* -------- HERO SECTION (CATEGORY STYLE) -------- */}
      <section className="page-section border-b border-gold/10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">

          {/* -------- LEFT CONTENT -------- */}
          <div>
            <span className="section-tag">Secondary Materials</span>

            <h1 className="section-title">
              Secondary <span className="text-gold">Metal Products</span>
            </h1>

            <p className="max-w-2xl text-lg leading-relaxed text-gray-400">
              Beyond primary recycling, metal scrap is transformed into a wide range
              of high-quality secondary products that fuel industrial growth across sectors.
              Through advanced melting, refining, and forming processes, we convert scrap
              materials into usable forms that meet stringent quality and performance standards.
            </p>

            {/* <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary">
                Request Supply
              </Link>

              <a href="#products" className="btn-outline">
                View Products
              </a>
            </div> */}
          </div>

          {/* -------- RIGHT IMAGE CAROUSEL -------- */}
          <div className="relative">
            <img
              src={`${images[current]}?auto=format&fit=crop&w=800&q=80`}
              alt="Secondary metal products"
              className="h-[420px] w-full rounded-lg object-cover"
            />

            {/* Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white"
            >
              ‹
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white"
            >
              ›
            </button>

            {/* Dots */}
            <div className="mt-4 flex justify-center gap-2">
              {images.map((_, i) => (
                <div
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 w-2 cursor-pointer rounded-full ${
                    current === i ? "bg-gold" : "bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SecondaryMetalPage;