"use client";
import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { achievements } from "../constants";
import externellink from "../assets/externellink.png";
import Image from "next/image";

const Achievements = () => {
  return (
    <section>
      <motion.div>
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
          My Achievements
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Achievements
        </h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Following achievements showcases my dedication, commitment, and
          mastery of the subject matter or skills covered in different
          program.These achievement of a certificate represents a significant
          milestone in a person's professional or academic journey
        </motion.p>
      </div>

      {/* -------- */}
      <div className="mt-20 flex flex-wrap gap-7">
        {achievements.map((project, index) => {
          return (
            <div key={index}>
              <motion.div
                data-aos="zoom-in"
                
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
                  </div>
                  <div className="flex justify-center mx-auto mt-5">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="bg-black hover:bg-slate-600 border-2 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer ">
                        <Image
                          src={externellink}
                          alt="source code"
                          className="w-1/2 h-1/2 object-contain"
                        />
                      </div>
                    </a>
                  </div>
                </Tilt>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SectionWrapper(Achievements, "achievements");
