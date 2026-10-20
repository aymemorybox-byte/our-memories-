
import { useState } from "react";

const Engagement = ({ onNext }) => {
  const images = [
    "/images/engagement/eng1.jpeg",
    "/images/engagement/eng2.jpeg",
    "/images/engagement/eng3.jpeg",
    "/images/engagement/eng4.jpeg",
    "/images/engagement/eng5.jpeg",
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === 0 ? 3 : 0));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? 3 : 0));
  };

  const visibleImages = [0, 1, 2].map(
    (offset) => images[(current + offset) % images.length]
  );

  return (
    <section
      className="
        relative min-h-[100svh]
        flex items-center justify-center
        overflow-hidden px-4 sm:px-6
        py-20 sm:py-24 text-center
        bg-[radial-gradient(circle_at_center,#6B2945_0%,#321326_45%,#10070D_85%)]
      "
    >
      <div className="w-full max-w-6xl mx-auto">
        {/* Heading label */}
        <p className="text-[9px] sm:text-xs uppercase tracking-[0.3em] text-white/45">
          Memory 07 · The Main Moment
        </p>

        {/* Ring and heading on the same line */}
        <h1
          className="
            mt-8 font-display
            flex items-center justify-center
            gap-2 sm:gap-4
            text-3xl
            xs:text-4xl
            sm:text-5xl
            md:text-7xl
            lg:text-8xl
            leading-tight
            font-medium
            text-rose-100
            whitespace-nowrap
          "
        >
          <span className="text-3xl sm:text-5xl md:text-6xl">
            💍
          </span>
          <span>Our Engagement</span>
        </h1>

        {/* Introductory text */}
        <p className="mx-auto mt-8 max-w-2xl text-sm sm:text-base md:text-lg leading-8 text-white/60">
          And then came the moment
          <br />
          when our story became official.
        </p>

        {/* Three-image carousel */}
        <div className="relative mx-auto mt-10 max-w-6xl px-8 sm:px-12">
          <div className="grid grid-cols-3 gap-2 sm:gap-5">
            {visibleImages.map((src) => (
              <div
                key={src}
                className="
                  overflow-hidden rounded-xl sm:rounded-2xl
                  border border-white/15 bg-white/5
                  shadow-xl shadow-black/30
                "
              >
                <img
                  src={src}
                  alt={`Engagement memory ${images.indexOf(src) + 1}`}
                  className="
                    h-[180px] w-full object-cover
                    sm:h-[280px] md:h-[380px]
                    transition-transform duration-500
                    hover:scale-105
                  "
                />
              </div>
            ))}
          </div>

          {/* Previous button */}
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous photos"
            className="
              absolute left-0 top-1/2 -translate-y-1/2
              flex h-9 w-9 sm:h-11 sm:w-11
              items-center justify-center rounded-full
              border border-white/20 bg-black/60
              text-2xl text-white
              transition hover:bg-white hover:text-black
            "
          >
            ‹
          </button>

          {/* Next button */}
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next photos"
            className="
              absolute right-0 top-1/2 -translate-y-1/2
              flex h-9 w-9 sm:h-11 sm:w-11
              items-center justify-center rounded-full
              border border-white/20 bg-black/60
              text-2xl text-white
              transition hover:bg-white hover:text-black
            "
          >
            ›
          </button>

          {/* Slide indicators */}
          <div className="mt-5 flex justify-center gap-2">
            {[0, 3].map((slide) => (
              <button
                key={slide}
                type="button"
                onClick={() => setCurrent(slide)}
                aria-label={`Show photo set ${slide === 0 ? 1 : 2}`}
                className={`
                  h-2.5 rounded-full transition-all
                  ${
                    current === slide
                      ? "w-7 bg-rose-200"
                      : "w-2.5 bg-white/30"
                  }
                `}
              />
            ))}
          </div>
        </div>

        {/* Romantic message */}
        <p
          className="
            mt-9 font-display
            text-2xl sm:text-3xl md:text-4xl
            leading-relaxed text-white/80
          "
        >
          From memories...
          <br />
          to promises...
          <br />
          to forever. ❤️
        </p>

        {/* Continue button */}
        <button
          type="button"
          onClick={onNext}
          className="
            mt-9 rounded-full
            border border-white/20
            px-7 sm:px-9 py-3.5
            text-sm transition-all
            hover:bg-white hover:text-black
          "
        >
          Continue to our forever →
        </button>
      </div>
    </section>
  );
};

export default Engagement;
