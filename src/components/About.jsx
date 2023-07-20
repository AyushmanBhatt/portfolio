import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div options={{
          max: 45,
          scale: 1,
          speed: 450,
        }} className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img
          src={icon}
          alt={title}
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <div className="flex flex-col md:flex-row mt-4">
        <div className="md:w-1/2">
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            I am a fourth-year student at Graphic Era Deemed to be University, pursuing a Bachelor's degree in Computer Science and Engineering. My primary focus lies in software development, and I have gained valuable experience working with languages such as C++, Python, and JavaScript. Additionally, I possess expertise in utilizing frameworks like React, Node.js, Express.js, and Tensorflow. Throughout my academic journey, I have thrived in a dynamic environment and embraced the challenges presented in the competitive university life. These experiences have shaped me into a well-rounded professional, equipped with the necessary skills to excel in the field of software development. I am now eager to apply and further refine my abilities in any career opportunity that comes my way.
          </motion.p>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <img
            src="./src/components/DSCN6834.JPG"
            alt="Image can't be loaded"
            className="w-80 h-80 rounded-full object-cover"
          />
        </div>
      </div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
