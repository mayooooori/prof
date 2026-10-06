"use client";
import About from "@/components/about";
import Contact from "@/components/contact";
import EvaporateImage from "@/components/evaporate";
import Hearts from "@/components/Hearts";
import Hello from "@/components/hello";
import Popup from "@/components/Popup";
import ThankYou from "@/components/thankyou";
import Works from "@/components/works";
import ZoomFadeImage from "@/components/zoomFade";
import Image from "next/image";
import LetterWord from "@/components/letter-word";

export default function Home() {
  return (
    <div className="relative">
      {/* First Section */}
      <div className="relative min-h-screen overflow-hidden">
        <Popup />
        <EvaporateImage
          src="/sun.svg"
          alt="Sun"
          width={500}
          height={400}
          className="absolute top-0 right-0 w-48 sm:w-72 lg:w-[500px] h-auto"
        />
        <EvaporateImage
          src="/discoball.png"
          alt="Disco Ball"
          width={300}
          height={300}
          className="absolute top-0 left-0 z-10 w-32 sm:w-48 lg:w-[300px] h-auto"
        />
        <EvaporateImage
          src="/clouds.png"
          alt="Clouds"
          width={400}
          height={400}
          className="absolute top-0 left-4 sm:left-10 z-0 w-48 sm:w-72 lg:w-[400px] h-auto"
        />
        <ZoomFadeImage
          src="/shrek.png"
          alt="Shrek"
          width={200}
          height={200}
          className="absolute bottom-28 left-1/2 w-28 sm:w-40 lg:w-48 h-auto "
        />

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-6 sm:gap-12">
          {/* Works Button */}
          <a href="#works" aria-label="Go to works" className="flex items-center">
            <LetterWord word="WORKS" size="nav" evaporate float={false} />
          </a>

          {/* Contact Button */}
          <a href="#contact" aria-label="Go to contact" className="flex items-center">
            <LetterWord word="CONTACT" size="nav" evaporate float={false} />
          </a>
        </div>

        <div className="flex justify-center items-center min-h-[80vh]">
          <Hello />
        </div>

        <Hearts />
      </div>

      {/* Second Section */}

      <div className="relative min-h-screen overflow-hidden">
        <Image
          src="/lips.svg"
          alt="Lips"
          width={250}
          height={250}
          className="absolute top-10 left-24 w-36 sm:left-40 sm:w-60 transform -translate-x-1/2 h-auto rotate-12"
        />

        <div className="relative">
          <Image
            src="/butterfly.png"
            alt="Butterfly"
            width={80}
            height={80}
            className="absolute top-32 right-4 w-32 sm:right-48 sm:w-60 transform -translate-x-1/2 h-auto rotate-12 float-animation float-delay-4"
          />
          <About />
        </div>
      </div>

      {/* Third Section */}

      <div id="works" className="relative min-h-screen overflow-hidden scroll-mt-4">
        <div className="relative">
          <Works />
        </div>
      </div>

      {/* Thankyou Section (manages its own scroll height + sticky pin) */}
      <ThankYou />

      {/* Contact Section */}
      <div id="contact" className="relative min-h-screen overflow-hidden scroll-mt-4">
        <div className="relative">
          <Contact />
        </div>
      </div>
    </div>
  );
}
