import React , {useRef} from "react";
import { motion } from "framer-motion";
import vrCover from "../../assets/images/vr-images.jpeg";
import {
  textAnimation,
  buttonAnimation,
  imageAnimation
} from "../../utils/utils";
import { MotionMainBar } from "./components/main_bar";
function Main() {
  const ref = useRef()
  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="default-container mt-14 l:flex-col overflow-hidden"
      >
        <div className="w-2/4 l:w-full my-5">
          <motion.h2
            variants={textAnimation}
            custom={1}
            className="text-4xl font-bold text-white t:text-2xl dark:text-custom-purple"
          >
            <span className="text-pink-02 dark:text-violet-800">Dive</span> Into
            The Depths
          </motion.h2>
          <motion.h2
            variants={textAnimation}
            custom={2}
            className="text-4xl font-bold text-white t:text-2xl dark:text-custom-purple"
          >
            Of{" "}
            <span className="text-pink-02 dark:text-violet-600">
              Virtual Reality
            </span>
          </motion.h2>

          <motion.p
            variants={textAnimation}
            custom={3}
            className="text-white mt-5 mb-10 dark:text-custom-purple"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget.
            Lectus mauris eros in vitae .
          </motion.p>
          <div className="flex  items-center">
            <motion.div variants={buttonAnimation} custom={1}>
              <button className="button-02 px-5 py-4 mr-10 t:py-3 t:px-2 ">
                BUILD YOUR WORLD
              </button>
            </motion.div>

            <motion.div
              variants={textAnimation}
              custom={5}
              className="text-pink-02 dark:text-custom-purple"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-18 h-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </motion.div>
          </div>
        </div>
        <motion.div className="w-2/4 l:w-full " variants={imageAnimation}>
          <div
            className="m-auto w-96 h-80 bg-cover bg-top bg-no-repeat rounded-custom-rounded l:w-full l:bg-center l:h-96 border-8 border-pink-01"
            style={{ backgroundImage: `url('${vrCover}')` }}
          />
        </motion.div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="default-container"
      >
          <MotionMainBar variants={imageAnimation} ref={ref}/>
      </motion.div>
    </>
  );
}

export default Main;
