const PhotoGrid = ({ images = [] }) => {

  if (!images.length) {
    return null;
  }


  let gridClass = "";


  if (images.length === 1) {

    gridClass =
      "grid-cols-1 max-w-xl mx-auto";

  }

  else if (images.length === 2) {

    gridClass =
      "grid-cols-1 sm:grid-cols-2 max-w-3xl mx-auto";

  }

  else {

    gridClass =
      "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";

  }


  return (

    <div
      className={`
        grid
        ${gridClass}

        gap-3
        sm:gap-4

        my-8
        sm:my-10

        w-full
      `}
    >

      {images.map(
        (image, index) => (

          <div
            key={image}
            className="
              group

              relative

              aspect-[4/5]
              sm:aspect-[4/3]

              overflow-hidden

              rounded-xl
              sm:rounded-2xl

              bg-white/5
            "
          >

            {/* <img
              src={image}

              alt={`Our memory ${index + 1}`}

              loading="lazy"

              className="
                absolute
                inset-0

                h-full
                w-full

                object-cover

                transition-transform
                duration-700

                group-hover:scale-105
              "
            /> */}

            <img
  src={image}

  alt={`Our memory ${index + 1}`}

  loading="lazy"

  className="
    absolute
    inset-0

    h-full
    w-full

    object-contain

    transition-transform
    duration-700

    group-hover:scale-105
  "
/>


            <div
              className="
                absolute
                inset-0

                bg-gradient-to-t
                from-black/30
                to-transparent

                opacity-0
                group-hover:opacity-100

                transition-opacity
                duration-300
              "
            />

          </div>

        )
      )}

    </div>

  );

};


export default PhotoGrid;