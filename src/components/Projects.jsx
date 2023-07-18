import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SocialIcon } from "react-social-icons";
import LaunchIcon from "@mui/icons-material/Launch";

function Projects() {
  const { ref, inView } = useInView({ triggerOnce: true });

  const projects = [
    {
      title: "Digital Maketing Agency",
      img: "https://hulm-studios.vercel.app/assets/img/logo-light.png",
      description:
        "The website for Hulm Studios, a digital marketing agency, was meticulously developed using HTML, CSS, and JavaScript. Designed to provide a seamless user experience, the website successfully attracted and generated a substantial number of clients for the business. Throughout the development process, close collaboration with the client was maintained, ensuring their vision and objectives were met effectively. The outstanding outcome of the project led to a recognition of my skills and expertise, and I was offered a position as a web developer within the company. ",
      github: "hulm-studios",
      url: "https://hulm-studios.vercel.app/",
    },
    {
      title: "Netflix Clone",
      img: "https://loodibee.com/wp-content/uploads/Netflix-N-Symbol-logo.png",
      description:
        "The Netflix clone app is a highly responsive application developed using React JS, Firebase v9, and Redux. It showcases expertise in front-end development and state management, resulting in a seamless user experience. The app features a multi-page user interface driven by APIs, allowing users to browse and explore a diverse range of movies and TV shows. Firebase Authentication ensures secure user authentication and protection. The app was deployed by using Firebase Deployment, showcasing efficient backend integration for enhanced functionality.",
      github: "netflix-clone-final",
      url: "https://netflix-clone-final-riw3dbt7n-nzyc.vercel.app/?vercelToolbarCode=qI6cTZLxPjvEKs1",
    },
    {
      title: "Twitter Clone",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png",
      description:
        "A single-page Twitter clone website was successfully developed using Firebase v9 and React, replicating the core functionality of posting content onto a functional feed. This project involved the integration of a Firebase v9 Database, Twitter Embed, and deployment capabilities, enabling users to store their content while fetching feeds from Firebase. The implementation of these backend services highlights expertise in integrating and leveraging powerful backend technologies. By emulating the functionality of a well-known social media platform, this Twitter clone demonstrates proficiency in frontend development and showcases the ability to create interactive and dynamic web applications.",
      github: "twitter-clone-final",
      url: "https://twitter-clone-final.web.app/",
    },
  ];

  const imageVariants = {
    hidden: { opacity: 0, x: -200 },
    visible: { opacity: 1, x: 0 },
    title: { opacity: 0 },
  };
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      variants={imageVariants}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly
    mx-auto items-center z-0"
    >
      <h3 className="pl-[20px] absolute top-12 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-track-gray-400/20 scrollbar-thumb-[#023020]/80 scrollbar-thin">
        {projects.map((project, i) => (
          <div
            key={i}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center
          p-20 md:p-44 h-screen"
          >
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
              alt=""
              src={project.img}
              className="h-[25%]"
            />

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                {project.title + " "}
                <span className="underline decoration-[#023020]/50">
                  Project
                </span>
              </h4>

              <p className="text-lg text-center hidden lg:block ">
                {project.description}
              </p>
            </div>

            <div className="px-0 md:px-10 max-w-6xl">
              <SocialIcon
                url={`https://github.com/NzyC/` + project.github}
                fgColor="white"
                bgColor="transparent"
                target="_blank"
              />
              <a href={project.url} target="_blank">
                <LaunchIcon
                  className="cursor-pointer"
                  style={{ transform: "scale(1.2)" }}
                />
              </a>
            </div>
          </div>
        ))}
      </div>

      <h3 className="absolute bottom-[17vh] sm:bottom-[14vh] uppercase tracking-[3px] text-gray-500 text-sm">
        swipe for more
      </h3>

      <div className="w-full absolute top-[25%] bg-[#023020]/30 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}

export default Projects;
