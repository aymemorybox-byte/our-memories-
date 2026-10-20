



import PhotoGrid from "./PhotoGrid";


const MemorySection = ({
  memory,
  onNext,
}) => {

  return (

    <section
      className="
        relative

        min-h-[100svh]

        w-full

        flex
        items-center
        justify-center

        overflow-hidden

        px-4
        sm:px-6
        lg:px-8

        py-20
        sm:py-24

        bg-gradient-to-b
        from-[#160B14]
        via-[#2A1020]
        to-[#160B14]
      "
    >

      {/* Large background number */}

      <div
        aria-hidden="true"

        className="
          absolute

          top-0
          right-1

          sm:right-8
          lg:right-16

          font-display

          text-[100px]
          xs:text-[130px]
          sm:text-[180px]
          md:text-[220px]
          lg:text-[280px]

          font-bold

          leading-none

          text-rose-200/[0.045]

          pointer-events-none
          select-none
        "
      >
        {memory.number}
      </div>


      {/* Content */}

      <div
        className="
          relative
          z-10

          w-full
          max-w-5xl

          mx-auto

          text-center
        "
      >

        {/* Icon */}

        <div
          className="
            mb-4

            text-4xl
            sm:text-5xl
          "
        >
          {memory.icon}
        </div>


        {/* Memory Number */}

        <p
          className="
            text-[9px]
            sm:text-xs

            uppercase

            tracking-[0.3em]

            text-white/40
          "
        >
          Memory {memory.number}
        </p>


        {/* Title */}

        <h2
          className="
            mt-4

            font-display

            text-4xl
            xs:text-5xl
            sm:text-6xl
            md:text-7xl
            lg:text-8xl

            leading-[0.95]

            font-medium
          "
        >
          {memory.title}
        </h2>


        {/* Subtitle */}

        <p
          className="
            mx-auto

            mt-5

            max-w-2xl

            text-base
sm:text-lg
md:text-xl

            leading-7
            sm:leading-8

            text-white/60
          "
        >
          {memory.subtitle}
        </p>


        {/* Date */}

        {memory.date && (

          <div
            className="
              mt-7

              font-display

              text-4xl
              sm:text-5xl
              md:text-6xl

              text-rose-300
            "
          >
            {memory.date}
          </div>

        )}


        {/* =========================================
            STORY BEFORE IMAGES
            Used when storyTop exists
        ========================================= */}

        {memory.storyTop && (

          <p
            className="
              mx-auto

              mt-8
              sm:mt-10

              max-w-2xl

              text-sm
              sm:text-base
              md:text-lg

              leading-7
              sm:leading-8

              text-white/70

              whitespace-pre-line
            "
          >
            {memory.storyTop}
          </p>

        )}


        {/* Images */}

        <PhotoGrid
          images={memory.images}
        />


        {/* =========================================
            STORY AFTER IMAGES
            Used when storyBottom exists
        ========================================= */}

        {memory.storyBottom && (

          <p
            className="
              mx-auto

              mt-8
              sm:mt-10

              max-w-2xl

              text-sm
              sm:text-base
              md:text-lg

              leading-7
              sm:leading-8

              text-white/70

              whitespace-pre-line
            "
          >
            {memory.storyBottom}
          </p>

        )}


        {/* =========================================
            NORMAL STORY
            Used for memories without storyTop/storyBottom
        ========================================= */}

        {memory.story && !memory.storyTop && !memory.storyBottom && (

          <p
            className="
              mx-auto

              mt-8

              max-w-2xl

              text-sm
              sm:text-base
              md:text-lg

              leading-7
              sm:leading-8

              text-white/65

              whitespace-pre-line
            "
          >
            {memory.story}
          </p>

        )}


        {/* Continue Button */}

        <button
          type="button"
          onClick={onNext}

          className="
            mt-8
            sm:mt-10

            rounded-full

            border
            border-rose-200/30

            bg-rose-300/10

            px-6
            sm:px-8

            py-3
            sm:py-3.5

            text-sm

            text-rose-100

            backdrop-blur-md

            shadow-[0_0_20px_rgba(230,160,181,0.12)]

            transition-all
            duration-300

            hover:bg-white
            hover:text-black

            hover:border-white

            hover:shadow-[0_0_30px_rgba(255,255,255,0.25)]

            hover:-translate-y-1
          "
        >
          {memory.button} →
        </button>

      </div>

    </section>

  );

};


export default MemorySection;