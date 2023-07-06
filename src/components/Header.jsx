import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

function Header() {
  return (
    <header className="sticky p-5 top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="flex flex-row items-center"
      >
        {/* social icons */}

        <SocialIcon
          url="https://www.facebook.com/nidal.chowdhury.1/"
          fgColor="gray"
          bgColor="transparent"
          target="_blank"
          className="hover:scale-125 transition duration-300 ease"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/nidal-chowdhury-b56b52220/"
          fgColor="gray"
          bgColor="transparent"
          target="_blank"
          className="hover:scale-125 transition duration-300 ease"
        />
        <SocialIcon
          url="https://github.com/NzyC"
          fgColor="gray"
          bgColor="transparent"
          target="_blank"
          className="hover:scale-125 transition duration-300 ease"
        />
        <SocialIcon
          url="https://www.instagram.com/nidal.chowdhury/"
          fgColor="gray"
          bgColor="transparent"
          target="_blank"
          className="hover:scale-125 transition duration-300 ease"
        />
      </motion.div>

      <a
        href="#contact"
        className="hover:scale-105 transition duration-300 ease"
      >
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="flex flex-row items-center text=gray-300"
        >
          <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor="gray"
            bgColor="transparent"
          />
          <p className="uppercase hidden md:inline-flex text-sm text-gray-500">
            Get In Touch
          </p>
        </motion.div>
      </a>
    </header>
  );
}

export default Header;
