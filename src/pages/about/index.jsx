import React from "react";
import { motion } from "framer-motion";
import { imageAnimation, textAnimation, textAnimationY } from "../../utils/utils";
import vrImage from "../../assets/images/vr-images-2.jpeg";
function About() {
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
            INTRODUCTION
          </motion.h2>
          <motion.div
            variants={textAnimation}
            custom={2}
            className="flex items-center"
          >
            <h2 className="text-3xl mr-5 l:text-xl ">TO HYDRA VR</h2>
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

      <div className="default-container  text-white  dark:text-custom-purple l:flex-col">
        <div className="w-2/5 mr-10 l:my-10 l:mr-0 l:w-full ">
          <div
            className="m-auto w-96 h-80 bg-cover bg-top bg-no-repeat rounded-custom-rounded-02 l:w-full l:h-96  "
            style={{ backgroundImage: `url('${vrImage}')` }}
          />
        </div>
        <div className="w-3/5 l:w-full">
          <motion.h2
            variants={textAnimation}
            custom={1}
            className="font-bold text-3xl"
          >
            ABOUT
          </motion.h2>
          <motion.h2
            variants={textAnimation}
            custom={2}
            className="text-3xl my-5 "
          >
            HYDRA VR
          </motion.h2>
          <motion.p
            variants={textAnimation}
            custom={3}
            className="text-sm leading-6 text-justify"
          >
            Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus
            mattis rhoncus urna neque viverra justo. Vivamus at augue eget arcu
            dictum. Ultrices gravida dictum fusce ut placerat orci. Aenean et
            tortor at risus viverra adipiscing at in. Mattis aliquam faucibus
            purus in massa. Est placerat in egestas erat imperdiet sed.
            Consequat semper viverra nam libero justo laoreet sit amet. Aliquam
            etiam erat velit scelerisque in dictum non consectetur a. Laoreet
            sit amet cursus sit amet. Vel eros donec ac odio tempor orci
            dapibus. Sem nulla pha retra diam sit amet nisl suscipit adipiscing
            bibendum. Leo a diam sollicitudi n tempor.
          </motion.p>
          <motion.button
            variants={textAnimationY}
            custom={1}
            className="button-02 px-5 py-4 my-10 t:py-3 t:px-2 "
          >
            LET’S GET IN TOUCH
          </motion.button>
        </div>
      </div>

      <div className="default-container text-white my-16 l:flex-col  dark:text-custom-purple">
        <div className="w-2/5 l:w-full">
          <motion.h2
            variants={textAnimation}
            custom={1}
            className="font-bold text-3xl l:text-xl"
          >
            WHY BUILD
          </motion.h2>
          <motion.div
            variants={textAnimation}
            custom={2}
            className="flex items-center"
          >
            <h2 className="text-3xl mr-5 l:text-xl">WITH HYDRA?</h2>
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
    </motion.div>
  );
}

export default About;
