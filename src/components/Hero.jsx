import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

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
        src="https://media.licdn.com/dms/image/D4D03AQFV33BzJaRoTA/profile-displayphoto-shrink_800_800/0/1687884708073?e=1693440000&v=beta&t=X8HEG-JFO0cWhqz-X90GNBG_vON7E0cvRQ49NZo8M0Y"
        alt="Profile Pic"
      />

      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Software Engineer
        </h2>
        <h1 className="text-5xl lg:6xl font-semibold scroll-px-10">
          <span className="mr-3">{
          text
          }</span>
          <Cursor cursorColor="#98F5E1" />
        </h1>

        <div className="pt-5">
          <a href="#about">
            <button className="heroButton">About</button>
          </a>
          <a href="#experience">
            <button className="heroButton">Experience</button>
          </a>
          <a href="#skills">
            <button className="heroButton">Skills</button>
          </a>
          <a href="#projects">
            <button className="heroButton">Projects</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
