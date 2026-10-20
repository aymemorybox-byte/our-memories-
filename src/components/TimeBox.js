const TimeBox = ({
  value,
  label,
  milliseconds = false,
}) => {

  const formatted =
    milliseconds

      ? String(value).padStart(3, "0")

      : String(value).padStart(2, "0");


  return (

    <div
      className="
        min-w-0

        rounded-xl
        sm:rounded-2xl

        border
        border-white/10
        border-rose-200/20

        bg-[#FFFFFF]/[0.06]

        px-2
        sm:px-4

        py-5
        sm:py-7

        backdrop-blur-md
      "
    >

      <div
        className="
          font-display

          text-4xl
          xs:text-5xl
          sm:text-6xl
          md:text-7xl
          lg:text-8xl

          leading-none

          text-rose-100
drop-shadow-[0_0_15px_rgba(230,160,181,0.25)]
        "
      >
        {formatted}
      </div>


      <div
        className="
          mt-3

          truncate

          text-[7px]
          xs:text-[8px]
          sm:text-[10px]

          tracking-[0.15em]
          sm:tracking-[0.3em]

          text-white/40
        "
      >
        {label}
      </div>

    </div>

  );

};


export default TimeBox;