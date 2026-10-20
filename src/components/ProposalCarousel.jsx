
import { useState } from "react";

const ProposalCarousel = ({ images = [] }) => {
  const [current, setCurrent] = useState(0);

  if (!images.length) return null;

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative mx-auto mt-8 w-full max-w-3xl px-10 sm:px-14">
      {/* Carousel image */}
      <div className="overflow-hidden rounded-2xl border border-white/15 bg-white/5 shadow-2xl shadow-black/30">
        <img
          key={images[current]}
          src={images[current]}
          alt={`Proposal memory ${current + 1}`}
          className="
            h-[280px] sm:h-[400px] md:h-[480px]
            w-full object-cover
            transition-all duration-500
          "
        />
      </div>

      {/* Previous button */}
      <button
        type="button"
        onClick={prevSlide}
        aria-label="Previous photo"
        className="
          absolute left-0 top-1/2 -translate-y-1/2
          flex h-9 w-9 sm:h-12 sm:w-12
          items-center justify-center rounded-full
          border border-white/20 bg-black/60
          text-2xl sm:text-3xl text-white
          transition hover:bg-white hover:text-black
        "
      >
        ‹
      </button>

      {/* Next button */}
      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next photo"
        className="
          absolute right-0 top-1/2 -translate-y-1/2
          flex h-9 w-9 sm:h-12 sm:w-12
          items-center justify-center rounded-full
          border border-white/20 bg-black/60
          text-2xl sm:text-3xl text-white
          transition hover:bg-white hover:text-black
        "
      >
        ›
      </button>

      {/* Photo counter */}
      <p className="mt-4 text-center text-sm text-white/60">
        {current + 1} / {images.length} ❤️
      </p>

      {/* Slide indicators */}
      <div className="mt-3 flex justify-center gap-2">
        {images.map((src, index) => (
          <button
            key={src}
            type="button"
            onClick={() => setCurrent(index)}
            aria-label={`Show photo ${index + 1}`}
            className={`
              h-2.5 rounded-full transition-all duration-300
              ${
                current === index
                  ? "w-7 bg-rose-200"
                  : "w-2.5 bg-white/30 hover:bg-white/60"
              }
            `}
          />
        ))}
      </div>
    </div>
  );
};

export default ProposalCarousel;
