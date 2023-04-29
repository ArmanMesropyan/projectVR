import React from "react";
import { motion } from "framer-motion";
import {
  blockAnimation,
  textAnimation,
} from "../../utils/utils";
function Info() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="default-container text-white my-16 l:flex-col dark:text-custom-purple">
        <div className="w-2/5 l:w-full">
          <motion.h2
            variants={textAnimation}
            custom={1}
            className="font-bold text-3xl l:text-xl"
          >
            HOW WE BUILD
          </motion.h2>
          <motion.div
            variants={textAnimation}
            custom={2}
            className="flex items-center"
          >
            <h2 className="text-3xl mr-5 l:text-xl ">WITH HYDRA VR?</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={0.5}
              stroke="currentColor"
              className="w-24 h-20 text-pink-02 l:w-16 l:h-14  dark:text-custom-purple"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </motion.div>
        </div>
        <motion.div
          variants={textAnimation}
          custom={3}
          className="w-3/5 l:w-full"
        >
          <p className="text-sm leading-6 text-justify">
            Vitae sapien pellentesque habitant morbi tristique senectus et netus
            et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit
            amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra
            aliquet eget sit amet tellus. Ornare lectus sit amet est placerat
            in. Lectus magna fringilla urna porttitor rhoncus vitae.
          </p>
        </motion.div>
      </div>
      <div className="default-container justify-around flex-wrap t:justify-center">
        <motion.div variants={blockAnimation} custom={1} className="t:w-1/2 t:my-3 m:w-full">
          <div className="text-custom-purple w-40 h-40 flex items-center justify-center bg-gradient-to-br gradient-primary text-5xl font-bold rounded-full border-8 border-black/70 dark:text-white t:m-auto">
            01
          </div>
          <div className="flex items-center mt-5 t:justify-center">
            <div className="mr-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-pink-01 dark:text-custom-purple"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </div>
            <p className="text-white w-32 font-bold leading-6 dark:text-custom-purple ">
              3D Conception & Design
            </p>
          </div>
        </motion.div>
        <motion.div variants={blockAnimation} custom={2} className="t:w-1/2 t:my-3 m:w-full">
          <div className="text-custom-purple w-40 h-40 flex items-center justify-center bg-gradient-to-br gradient-primary text-5xl font-bold rounded-full border-8 border-black/70 dark:text-white t:m-auto">
            02
          </div>
          <div className="flex items-center mt-5 t:justify-center">
            <div className="mr-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-pink-01  dark:text-custom-purple"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </div>
            <p className="text-white w-32 font-bold leading-6 dark:text-custom-purple">
              Interaction Design
            </p>
          </div>
        </motion.div>
        <motion.div variants={blockAnimation} custom={3} className="t:w-1/2 t:my-3 m:w-full">
          <div className="text-custom-purple w-40 h-40 flex items-center justify-center bg-gradient-to-br gradient-primary text-5xl font-bold rounded-full border-8 border-black/70 dark:text-white t:m-auto">
            03
          </div>
          <div className="flex items-center mt-5 t:justify-center">
            <div className="mr-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-pink-01  dark:text-custom-purple"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </div>
            <p className="text-white w-32 font-bold leading-6 dark:text-custom-purple">
              VR World User Testing
            </p>
          </div>
        </motion.div>
        <motion.div variants={blockAnimation} custom={4} className="t:w-1/2 t:my-3 m:w-full">
          <div className="text-custom-purple w-40 h-40 flex items-center justify-center bg-gradient-to-br gradient-primary text-5xl font-bold rounded-full border-8 border-black/70 dark:text-white t:m-auto">
            04
          </div>
          <div className="flex items-center mt-5 t:justify-center">
            <div className="mr-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-pink-01  dark:text-custom-purple"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </div>
            <p className="text-white w-32 font-bold leading-6 dark:text-custom-purple">
              Hydra VR Deploy
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Info;
