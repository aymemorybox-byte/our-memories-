import Intro from "./components/Intro";
import MemorySection from "./components/MemorySection";
import EmailLetter from "./components/EmailLetter";
import Engagement from "./components/Engagement";
import Transition from "./components/Transition";
import Countdown from "./components/Countdown";
import FinalSection from "./components/FinalSection";

import memories from "./data/memories";


function App() {



 const weddingDate =
  new Date(
    "2026-11-26T20:32:00"
  ).getTime();


  /*
  ==================================================
  SMOOTH SCROLL
  ==================================================
  */


  const scrollTo = (id) => {

    const element =
      document.getElementById(id);


    if (element) {

      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

    }

  };


  return (

    <main
      className="
        w-full
        min-h-screen
        overflow-x-hidden
        bg-[#090609]
      "
    >


      {/* =========================================
          INTRO
      ========================================== */}

      <Intro
        onStart={() =>
          scrollTo("memory-1")
        }
      />


      {/* =========================================
          MEMORY 01

          First time both went to
          Pedhamma Thalli Temple
      ========================================== */}

      <div id="memory-1">

        <MemorySection
          memory={memories[0]}

          onNext={() =>
            scrollTo("memory-2")
          }
        />

      </div>


      {/* =========================================
          MEMORY 02

          Marriage fixed date
      ========================================== */}

      <div id="memory-2">

        <MemorySection
          memory={memories[1]}

          onNext={() =>
            scrollTo("memory-3")
          }
        />

      </div>


      {/* =========================================
          MEMORY 03

          First proposal:
          Let's recreate it together
      ========================================== */}

      <div id="memory-3">

        <MemorySection
          memory={memories[2]}

          onNext={() =>
            scrollTo("memory-4")
          }
        />

      </div>


      {/* =========================================
          MEMORY 04

          First video call
      ========================================== */}

      <div id="memory-4">

        <MemorySection
          memory={memories[3]}

          onNext={() =>
            scrollTo("memory-5")
          }
        />

      </div>


      {/* =========================================
          MEMORY 05

          First direct proposal
      ========================================== */}

      <div id="memory-5">

        <MemorySection
          memory={memories[4]}

          onNext={() =>
            scrollTo("memory-6")
          }
        />

      </div>


      {/* =========================================
          MEMORY 06

          Letter sent through email
      ========================================== */}

      <div id="memory-6">

        <EmailLetter
          onNext={() =>
            scrollTo("engagement")
          }
        />

      </div>


      {/* =========================================
          MEMORY 07

          ENGAGEMENT
      ========================================== */}

      <div id="engagement">

        <Engagement
          onNext={() =>
            scrollTo("transition")
          }
        />

      </div>


      {/* =========================================
          TRANSITION
      ========================================== */}

      <div id="transition">

        <Transition
          onNext={() =>
            scrollTo("countdown")
          }
        />

      </div>


      {/* =========================================
          WEDDING COUNTDOWN
      ========================================== */}

      <div id="countdown">

        <Countdown
          weddingDate={weddingDate}

          onNext={() =>
            scrollTo("final")
          }
        />

      </div>


      {/* =========================================
          FINAL
      ========================================== */}

      <div id="final">

        <FinalSection />

      </div>


    </main>

  );

}


export default App;
