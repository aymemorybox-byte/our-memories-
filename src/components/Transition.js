const Transition = ({ onNext }) => {

  return (

    <section
      className="
        min-h-[100svh]

        flex
        items-center
        justify-center

        px-5

        bg-[#070508]

        text-center
      "
    >

      <div
        className="
          w-full
          max-w-4xl
        "
      >

        <p
          className="
            font-display

            text-3xl
            xs:text-4xl
            sm:text-5xl
            md:text-6xl

            leading-tight

            text-white/75
          "
        >
          We've travelled through our past...
        </p>


        <p
          className="
            mt-7

            font-display

            text-3xl
            xs:text-4xl
            sm:text-5xl
            md:text-6xl

            leading-tight

            text-white/75
          "
        >
          We've remembered every little moment...
        </p>


        <p
          className="
            mt-7

            font-display

            text-3xl
            xs:text-4xl
            sm:text-5xl
            md:text-6xl

            leading-tight

            text-rose-200
          "
        >
          But our story isn't ending here.
        </p>


        <button
          type="button"
          onClick={onNext}

          className="
            mt-12

            rounded-full

            border
            border-white/20

            px-8

            py-3.5

            text-sm

            transition-all

            hover:bg-white
            hover:text-black
          "
        >
          Now let's count... ❤️
        </button>

      </div>

    </section>

  );

};


export default Transition;