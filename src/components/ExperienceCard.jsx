import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function ExperienceCard({
  jobTitle,
  company,
  dateEnded,
  dateStarted,
  imageUrl,
  isTypeScript,
  summary1,
  summary2,
  summary3,
}) {
  const { ref, inView } = useInView({ triggerOnce: true });

  const imageVariants = {
    hidden: { opacity: 0, x: -200 },
    visible: { opacity: 1, x: 0 },
    title: { opacity: 0 },
  };

  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 
    w-[300px] sm:h-[500px] h-[400px] md:w-[400px] xl:w-[900px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer
    transition-opacity duration-200 overflow-hidden"
    >
      <div className="px-0 md:px-10 ">
        <div style={{ display: "flex", justifyContent: "space-between"}}>
          <div>
            <h4 className="text-4xl font-light">{jobTitle}</h4>
            <p className="font-bold text-2xl mt-1">{company}</p>
            <div className="flex space-x-2 my-2">
              <img
                className="h-10 w-10 rounded-full"
                src="https://img.icons8.com/?size=512&id=108784&format=png"
                alt=""
              />
              <img
                className="h-10 w-10 rounded-full"
                src="https://img.icons8.com/?size=512&id=NfbyHexzVEDk&format=png"
                alt=""
              />
              <img
                className="h-10 w-10 rounded-full"
                src="https://img.icons8.com/?size=512&id=21278&format=png"
                alt=""
              />
              <img
                className="h-10 w-10 rounded-full"
                src="https://img.icons8.com/?size=512&id=20909&format=png"
                alt=""
              />
              {isTypeScript && (
                <img
                  className="h-10 w-10 rounded-full"
                  src="https://img.icons8.com/?size=512&id=uJM6fQYqDaZK&format=png"
                  alt=""
                />
              )}
            </div>
          </div>

          <motion.img
            ref={ref}
            initial={{
              scale: 0,
              opacity: 0,
            }}
            animate={
              inView
                ? { opacity: 1, scale: 1 }
                : {
                    scale: 0,
                    opacity: 0,
                  }
            }
            variants={imageVariants}
            transition={{ duration: 1.2 }}
            className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center hidden md:block"
            src={imageUrl}
            alt=""
          />
        </div>
        <p className="uppercase py-5 text-gray-300">
          {dateStarted} - {dateEnded}
        </p>
        <ul className="list-disc space-y-4 ml-5 text-sm hidden md:block">
          <li>{summary1}</li>
          <li>{summary2}</li>
          <li>{summary3}</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
