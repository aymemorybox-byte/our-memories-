const FinalSection = () => {

  return (

    <section
      className="
        min-h-[100svh]

        flex
        items-center
        justify-center

        px-5
        py-20

       bg-[radial-gradient(circle_at_center,#3A1629_0%,#160B14_45%,#090509_100%)]
        text-center
      "
    >

      <div
        className="
          w-full
          max-w-4xl
          mx-auto
        "
      >

        <div
          className="
            text-5xl
            sm:text-6xl

            animate-heartbeat
          "
        >
          ❤️
        </div>


        <p
          className="
            mt-8

            text-[9px]
            sm:text-xs

            uppercase

            tracking-[0.3em]

            text-white/40
          "
        >
          Our Story
        </p>


        <h1
          className="
            mt-5

            font-display

            text-6xl
            xs:text-7xl
            sm:text-8xl
            md:text-9xl
            lg:text-[9rem]

            leading-[0.8]

            font-medium

            text-rose-100
          "
        >
          Forever
          <br />
          Starts Now
        </h1>


        <p
          className="
            mx-auto

            mt-10

            max-w-2xl

            text-sm
            sm:text-base

            leading-8

            text-white/60
          "
        >
          After all the memories,
          all the proposals,
          all the waiting,
          and all the little moments...
        </p>


        <p
          className="
            mt-5

            font-display

            text-3xl
            sm:text-4xl

            text-white/80
          "
        >
          Here we are.
        </p>


        <h2
          className="
            mt-10

            font-display

            text-3xl
            sm:text-4xl
            md:text-5xl

            leading-tight

            font-medium
          "
        >
          See you at the mandapam,
          <br />

          Aravind garu...
        </h2>

      </div>

    </section>

  );

};


export default FinalSection;