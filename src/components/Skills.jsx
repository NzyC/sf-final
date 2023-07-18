import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Skill from "./Skill";

function Skills() {
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
      className="flex relative flex-col text-center md:text-left xl:flex-row
      max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="pl-[20px] absolute top-12 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        hover over for proficiency
      </h3>

      <div className="grid grid-cols-3 gap-4 sm:grid-cols-5">
        <Skill img={`https://img.icons8.com/?size=512&id=21278&format=png`} proficiency={"100%"} />
        <Skill img={`https://img.icons8.com/?size=512&id=20909&format=png`} proficiency={"100%"} />
        <Skill img={`https://img.icons8.com/?size=512&id=108784&format=png`} proficiency={"100%"} />
        <Skill img={`https://img.icons8.com/?size=512&id=NfbyHexzVEDk&format=png`} proficiency={"95%"} />
        <Skill img={`https://img.icons8.com/?size=512&id=uJM6fQYqDaZK&format=png`} proficiency={"70%"} />
        <Skill img={`https://img.icons8.com/?size=512&id=62452&format=png`} proficiency={"90%"} />
        <Skill img={`https://w7.pngwing.com/pngs/87/586/png-transparent-next-js-hd-logo.png`} proficiency={"80%"} />
        <Skill img={`https://w7.pngwing.com/pngs/413/852/png-transparent-redux-react-logo-javascript-dq-purple-violet-text.png`} proficiency={"80%"} />
        <Skill img={`https://img.icons8.com/?size=512&id=13441&format=png`} proficiency={"75%"} />
        <Skill img={`https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png`} proficiency={"80%"} />
        <Skill img={`https://img.icons8.com/?size=512&id=12599&format=png`} proficiency={"100%"} />
        <Skill img={`https://img.icons8.com/?size=512&id=x2g9nPCwQPOn&format=png`} proficiency={"100%"} />
        <Skill img={`https://pic.clubic.com/v1/images/1928820/raw?fit=max&width=1200&hash=87e3d104dd6b1134d14f4f536cf8e7673504d69f`} proficiency={"100%"} />
        <Skill img={`https://mui.com/static/logo.png`} proficiency={"100%"} />
        <Skill img={`https://img.icons8.com/?size=512&id=24895&format=png`} proficiency={"90%"} />
      </div>
    </motion.div>
  );
}

export default Skills;
