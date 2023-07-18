import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ExperienceCard from "./ExperienceCard";

function WorkExperience() {
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
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 
      justify-evenly mx-auto items-center"
    >
      <h3 className="pl-[20px] absolute top-12 uppercase tracking-[20px] text-gray-500 text-2xl left-[50%] translate-x-[-50%]">
        Experience
      </h3>

      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory mt-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#023020]/80">
      
        <ExperienceCard
          isTypeScript={true}
          imageUrl={
            "https://static.theright.fit/profile/avatar/cc70bf12-ad4d-4b4d-b9a4-6446407e3b03/zKFMiLDltRuiTb8A1BRjIxIZpzQEYhQbZpsjSCcY.jpg"
          }
          dateStarted={`JUL 2022`}
          dateEnded={`PRESENT`}
          company={`HULM Studios`}
          jobTitle={`Frontend Web Developer`}
          summary1={`Led the development of websites and web applications for businesses within the culinary industry, leveraging new frontend frameworks such as React and TypeScript.`}
          summary2={`Collaborated closely with clients to understand their unique needs and translate them into efficient and modern user interfaces.`}
          summary3={`Applied expertise in React and TypeScript to create responsive, interactive, and scalable frontend solutions, ensuring optimal performance and maintainability.`}
        />
        <ExperienceCard
          isTypeScript={false}
          imageUrl={
            "https://media.licdn.com/dms/image/C560BAQGuzLomDSVnKw/company-logo_200_200/0/1648018204394?e=2147483647&v=beta&t=jsrmskOzT0KRoezTWaHjJIzWANUmXEbvjdNUPXYi44g"
          }
          dateStarted={`MAY 2022`}
          dateEnded={`JUL 2022`}
          company={`Frontend Simplified`}
          jobTitle={`Frontend Developer Internship`}
          summary1={`Transformed a completely static HTML, CSS, JavaScript and React single-page application into an
          interactive user interface using animations, transitions, and carousels.
          `}
          summary2={`Processed API requests with Axios to dynamically represent data from a cloud server and represented it
          through skeleton loading states, pagination, and dynamic routing`}
          summary3={`Utilized Git version control and the GitHub interface to work and thrive in a virtual and collaborative team
          environment`}
        />
        <ExperienceCard
          isTypeScript={false}
          imageUrl={
            "https://www.freeiconspng.com/thumbs/meeting-icon/meeting-icon-png-presentation-icon-board-meeting-icon-meeting-icon--4.png"
          }
          dateStarted={`JAN 2022`}
          dateEnded={`PRESENT`}
          company={``}
          jobTitle={`Freelance Software Engineer `}
          summary1={`Leveraged expertise in E-commerce and Real Estate Developer Pages to design, develop, and enhance customized solutions for clients.`}
          summary2={`Proactively identified and resolved software-related challenges, ensuring the delivery of innovative and efficient solutions.`}
          summary3={`Successfully collaborated with clients, effectively communicating project requirements and managing workload to meet deadlines.`}
        />
      </div>
    </motion.div>
  );
}

export default WorkExperience;
