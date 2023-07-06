import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "../assets/1687884708073.jpg"

function Hero() {
  const [text] = useTypewriter({
    words: [
      "Hey there, it's Nidal Chowdhury!",
      "<Frontend Specialist />",
      "Quintillionaire  .  .  .  inshallah",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src={Image}
        alt="Profile Pic"
      />

      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Software Engineer
        </h2>
        <h1 className="text-1xl sm:text-4xl lg:6xl font-semibold scroll-px-10">
          <span className="mr-3">{
          text
          }</span>
          <Cursor cursorColor="#023020" />
        </h1>

        <div className="pt-5">
          <a href="#about">
            <button className="heroButton hover:scale-105 transition duration-300 ease">About</button>
          </a>
          <a href="#experience">
            <button className="heroButton hover:scale-105 transition duration-300 ease">Experience</button>
          </a>
          <a href="#skills">
            <button className="heroButton hover:scale-105 transition duration-300 ease">Skills</button>
          </a>
          <a href="#projects">
            <button className="heroButton hover:scale-105 transition duration-300 ease">Projects</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
