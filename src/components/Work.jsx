"use client";
import React, { useEffect, useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

//images
import github from "../assets/github.png";
import links from "../assets/links.png";
import userlock from "../assets/userlock.png";

import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
//portfolio
import PortfolioItem from "./PortfolioItem";
import Image from "next/image";

const Works = () => {
  const [selected, setSelected] = useState("frontend");
  const [projectList, setProjectList] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    let tempList = [];
    projects.map(({ category }) => {
      if (!tempList.includes(category)) {
        tempList.push(category);
      }

      return null;
    });
    setProjectList(tempList);
  }, []);

  useEffect(() => {
    projectList.map((list) => {
      if (selected === list) {
        setData(projects.filter((project) => project.category === list));
      }

      return null;
    });
  }, [selected, projectList]);

  //console.log(data);
  const boxVariants = {
    hover: {
      scale: 1.04,
      transition: {
        type: "spring",
      },
    },
  };

  return (
    <>
      {/* variants={textVariant(0.2)} */}
      <motion.div>
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
          My work
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Projects.
        </h2>
      </motion.div>

      <div className="w-full flex">
        {/* variants={fadeIn("", "", 0.1, 1)} */}
        <motion.p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>
      {/* --------- */}

      <div className="sm:grid sm:grid-cols-2 lg:flex justify-center mx-auto mt-6">
        {projectList &&
          projectList.map((list, index) => (
            <motion.div key={index} data-aos="fade-right" name="portfolio">
              <PortfolioItem
                title={list}
                active={selected === list}
                setSelected={setSelected}
                id={list}
              />
            </motion.div>
          ))}
      </div>
      {/* --------- */}
      <div className="mt-20 flex flex-wrap gap-7">
        {data.map((project, index) => {
          return (
            <motion.div
              key={index}
              data-aos="fade-right"
              name="portfolio"
              variants={boxVariants}
              whileHover="hover"
            >
              <Tilt
                options={{
                  max: 45,
                  scale: 1,
                  speed: 450,
                }}
                className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
              >
                <div className="relative w-full h-[230px]">
                  <Image
                    src={project.image}
                    alt="project_image"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>

                <div className="mt-5">
                  <h3 className="text-white font-bold text-[24px]">
                    {project.name}
                  </h3>
                  <p className="mt-2 text-secondary text-[14px]">
                    {project.description}
                  </p>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <p
                      key={`${tag.name}-${tag.name}`}
                      className={`text-[14px] ${tag.color}`}
                    >
                      #{tag.name}
                    </p>
                  ))}
                </div>
                <div className="flex justify-end">
                  {project.source_code_link !== "private" ? (
                    <a href={project.source_code_link}>
                      <div className="bg-black hover:bg-slate-600 border-2 mx-2 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
                        <Image
                          src={github}
                          alt="source code"
                          className="w-1/2 h-1/2 object-contain"
                        />
                      </div>
                    </a>
                  ) : (
                    <a href="#_">
                      <div className="bg-black hover:bg-slate-600 border-2 mx-2 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
                        <Image
                          src={userlock}
                          alt="source code"
                          className="w-1/2 h-1/2 object-contain"
                        />
                      </div>
                    </a>
                  )}

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="bg-black hover:bg-slate-600 border-2 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
                      <Image
                        src={links}
                        alt="source code"
                        className="w-1/2 h-1/2 object-contain"
                      />
                    </div>
                  </a>
                </div>
              </Tilt>
            </motion.div>
          );
        })}
      </div>

      {/* <div className="mt-20 flex flex-wrap gap-7">
        {data.map((project, index) => {
          return (
            <motion.div
              key={index}
              data-aos="fade-right"
              name="portfolio"
              variants={boxVariants}
              whileHover="hover"
            >
              <Tilt
                options={{
                  max: 45,
                  scale: 1,
                  speed: 450,
                }}
                className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
              >
                <div className="relative w-full h-[230px]">
                  <Image
                    src={project.image}
                    alt="project_image"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>

                <div className="mt-5">
                  <h3 className="text-white font-bold text-[24px]">
                    {project.name}
                  </h3>
                  <p className="mt-2 text-secondary text-[14px]">
                    {project.description}
                  </p>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <p
                      key={`${tag.name}-${tag.name}`}
                      className={`text-[14px] ${tag.color}`}
                    >
                      #{tag.name}
                    </p>
                  ))}
                </div>
                <div className="flex justify-end">
                  {project.source_code_link !== "private" ? (
                    <a href={project.source_code_link}>
                      <div className="bg-black hover:bg-slate-600 border-2 mx-2 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
                        <Image
                          src={github}
                          alt="source code"
                          className="w-1/2 h-1/2 object-contain"
                        />
                      </div>
                    </a>
                  ) : (
                    <a href="#_">
                      <div className="bg-black hover:bg-slate-600 border-2 mx-2 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
                        <Image
                          src={userlock}
                          alt="source code"
                          className="w-1/2 h-1/2 object-contain"
                        />
                      </div>
                    </a>
                  )}

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="bg-black hover:bg-slate-600 border-2 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
                      <Image
                        src={links}
                        alt="source code"
                        className="w-1/2 h-1/2 object-contain"
                      />
                    </div>
                  </a>
                </div>
              </Tilt>
            </motion.div>
          );
        })}
      </div> */}
    </>
  );
};

export default SectionWrapper(Works, "projects");
