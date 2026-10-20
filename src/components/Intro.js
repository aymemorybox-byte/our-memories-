
const Intro = ({ onStart }) => {
  return (
    <section
      id="intro"
      className="
        relative min-h-[100svh] w-full
        overflow-hidden flex items-center justify-center
        px-5 py-20
        bg-[radial-gradient(circle_at_top,#4A1C32_0%,#160B14_45%,#0D070C_100%)]
      "
    >
      {/* Floating heart animations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {Array.from({ length: 22 }).map((_, index) => (
          <span
            key={index}
            className="floating-heart absolute bottom-[-40px]"
            style={{
              left: `${(index * 37 + 8) % 100}%`,
              fontSize: `${14 + (index % 4) * 7}px`,
              animationDuration: `${7 + (index % 5) * 2}s`,
              animationDelay: `${(index % 7) * 1.1}s`,
            }}
          >
            {["❤️", "💕", "💗", "♡", "💖"][index % 5]}
          </span>
        ))}
      </div>

      {/* Background glow */}
      <div
        className="
          absolute -top-32 -left-32
          h-72 w-72 sm:h-96 sm:w-96
          rounded-full bg-[#B84A6B]/20
          blur-[100px] pointer-events-none
        "
      />

      <div
        className="
          absolute -bottom-32 -right-32
          h-72 w-72 sm:h-96 sm:w-96
          rounded-full bg-[#E6A0B5]/15
          blur-[100px] pointer-events-none
        "
      />

      {/* Content */}
      <div
        className="
          relative z-10 w-full max-w-4xl
          mx-auto text-center animate-fade-up
        "
      >
        {/* Top label */}
        <p
          className="
            mb-5 text-[10px] sm:text-xs
            font-semibold uppercase
            tracking-[0.25em] sm:tracking-[0.45em]
            text-rose-200
            drop-shadow-[0_0_10px_rgba(230,160,181,0.45)]
          "
        >
          A little surprise for you
        </p>

        {/* Main heading */}
        <h1 className="font-display font-medium leading-tight">
         <span
  className="
    block whitespace-nowrap
    text-[clamp(2rem,7.5vw,4.8rem)]
    text-white/80
  "
>
  Aravind garu...
</span>

          <span
            className="
              mt-3 block
              text-[clamp(1.5rem,6vw,3.8rem)]
              text-rose-300
              drop-shadow-[0_0_20px_rgba(230,160,181,0.55)]
            "
          >
            Sorry, Sorry Srivaru...
            <span className="ml-2">❤️</span>
          </span>
        </h1>

        {/* Description */}
        <p
          className="
            mx-auto mt-7 sm:mt-8 max-w-2xl
            text-sm sm:text-base md:text-lg
            leading-7 sm:leading-8 text-white/60
          "
        >
          Before we reach our forever,
          I want to take you back to the
          little moments that became the
          most beautiful parts of my life.
        </p>

        {/* Start button */}
        <button
          type="button"
          onClick={onStart}
          className="
            mt-9 rounded-full
            border border-rose-200/40
            bg-rose-300/10
            px-7 sm:px-9 py-3.5
            text-sm text-rose-100
            backdrop-blur-md
            shadow-[0_0_20px_rgba(230,160,181,0.25)]
            transition-all duration-300
            hover:bg-white hover:text-black
            hover:border-white
            hover:shadow-[0_0_30px_rgba(255,255,255,0.35)]
            hover:-translate-y-1
          "
        >
          ✨ Start Our Story
        </button>
      </div>
    </section>
  );
};

export default Intro;
