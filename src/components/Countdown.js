import {
  useEffect,
  useState,
} from "react";

import TimeBox from "./TimeBox";


const Countdown = ({
  weddingDate,
  onNext,
}) => {


  const calculateTime = () => {

    const difference =
      weddingDate - Date.now();


    if (difference <= 0) {

      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        milliseconds: 0,
      };

    }


    return {

      days: Math.floor(
        difference /
        (1000 * 60 * 60 * 24)
      ),

      hours: Math.floor(
        (
          difference /
          (1000 * 60 * 60)
        ) % 24
      ),

      minutes: Math.floor(
        (
          difference /
          (1000 * 60)
        ) % 60
      ),

      seconds: Math.floor(
        (
          difference /
          1000
        ) % 60
      ),

      milliseconds:
        difference % 1000,

    };

  };


  const [time, setTime] =
    useState(calculateTime());


  useEffect(() => {

    const timer =
      setInterval(() => {

        setTime(
          calculateTime()
        );

      }, 10);


    return () => {

      clearInterval(timer);

    };

  }, [weddingDate]);


  return (

    <section
      className="
        min-h-[100svh]

        flex
        items-center
        justify-center

        px-4
        sm:px-6

        py-20

        bg-[radial-gradient(circle_at_center,#7A304F_0%,#3B172B_40%,#0D070C_80%)]

        text-center
      "
    >

      <div
        className="
          w-full
          max-w-6xl
          mx-auto
        "
      >

        <p
          className="
            text-[9px]
            sm:text-xs

            uppercase

            tracking-[0.3em]

            text-white/45
          "
        >
          Until our forever
        </p>


        <h2
          className="
            mt-5

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
          Counting Down
          <br className="sm:hidden" />
          {" "}To Our Wedding
        </h2>


        {/* =================================
            RESPONSIVE TIMER

            Mobile:
            2 columns

            Tablet:
            3 columns

            Desktop:
            5 columns
        ================================== */}

        <div
          className="
            mt-10

            grid

            grid-cols-2
            sm:grid-cols-3
            lg:grid-cols-5

            gap-3
            sm:gap-4
            lg:gap-5

            w-full
          "
        >

          <TimeBox
            value={time.days}
            label="DAYS"
          />

          <TimeBox
            value={time.hours}
            label="HOURS"
          />

          <TimeBox
            value={time.minutes}
            label="MINUTES"
          />

          <TimeBox
            value={time.seconds}
            label="SECONDS"
          />

          <TimeBox
            value={time.milliseconds}
            label="MILLISECONDS"
            milliseconds
          />

        </div>


        <p
          className="
            mx-auto

            mt-10

            max-w-2xl

            font-display

            text-xl
            sm:text-2xl
            md:text-3xl

            leading-relaxed

            text-white/70
          "
        >
          Every second from now takes me
          closer to the day I get to call
          you my husband. ❤️
        </p>


        <button
          type="button"
          onClick={onNext}

          className="
            mt-10

            rounded-full

            border
            border-white/20

            px-7
            sm:px-8

            py-3.5

            text-sm

            transition-all

            hover:bg-white
            hover:text-black
          "
        >
          What happens at zero? →
        </button>

      </div>

    </section>

  );

};


export default Countdown;