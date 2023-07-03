import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "../assets/1687884708073.jpg"

function About() {
  const { ref, inView } = useInView({ triggerOnce: true });

  const imageVariants = {
    hidden: { opacity: 0, x: -200 },
    visible: { opacity: 1, x: 0 },
    title: { opacity: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="title"
      animate={inView ? "visible" : "title"}
      variants={imageVariants}
      transition={{ duration: 0.5 }}
      className="flex flex-col relative text-center h-screen md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={imageVariants}
        transition={{ duration: 0.5 }}
        src={Image}
        alt=""
        className="-mb-20 md:mb-0 flex-shrink-0 w-40 h-40 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[400px] xl:h-[500px] my-10"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-2xl font-semibold">
          Here's a <span className="underline decoration-[#98F5E1]/50">little</span> background
        </h4>
        <p className="text-xs md:text-lg">
          I'm an 18 year-old Australian frontend software engineer with a
          spiking passion for creating performant websites with enjoyable user
          experiences. I am currently a student at the University of New South
          Wales pursuing a degree in Data Science and Decisions with deep drive
          to excell and become a talented and experienced individual within the
          technology industry.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
