import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Skill({ img, proficiency }) {
  const { ref, inView } = useInView({ triggerOnce: true });

  const imageVariants = {
    hidden: { opacity: 0, x: -200 },
    visible: { opacity: 1, x: 0 },
    title: { opacity: 0 },
  };
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        ref={ref}
        variants={imageVariants}
        initial={{
          opacity: 0,
        }}
        animate={
          inView
            ? { opacity: 1, x: 0 }
            : {
                opacity: 0,
              }
        }
        transition={{ duration: 1.0 }}
        src={img}
        className='rounded-full border border-gray-500 object-cover w-16 h-16 md:h-18 md:w-18 xl:h-16 xl:w-16 filter 
        group-hover:grayscale transition duration-300 ease-in-out'
      />
      <div
      className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out
      group-hover:bg-white w-16 h-16 md:h-18 md:w-18 xl:h-16 xl:w-16 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-1xl font-bold text-black opacity-100">{proficiency}%</p>
          
        </div>
      </div>
    </div>
  );
}

export default Skill;
