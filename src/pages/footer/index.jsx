import React from "react";
import { motion } from "framer-motion";
import logo from "../../assets/images/Hydra-Esport-Mascot-Logo-1.webp";
import {
  blockAnimation,
  imageAnimation,
  textAnimation,
  textAnimationY,
} from "../../utils/utils";
function Footer() {
  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div
        variants={imageAnimation}
        className="default-container text-white dark:text-custom-purple l:flex-col"
      >
        <div className="w-1/4 h-40 border-r-2 border-pink-02/50 flex justify-center items-center l:border-none  l:w-full">
          <img
            src={logo}
            className="w-52 h-34 bg-cover bg-no-repeat bg-center"
            alt="logo"
          />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-1/4  h-40 border-r-2 border-pink-02/50 flex justify-center items-start  l:border-none l:hidden"
        >
          <ul>
            <li className="my-2 cursor-pointer hover:translate-x-2 transition ease-in-out duration-500 text-sm">
              <motion.a variants={textAnimationY} custom={1}>
                ABOUT
              </motion.a>
            </li>
            <li className="my-2 cursor-pointer hover:translate-x-2 transition ease-in-out duration-500 text-sm">
              <motion.a variants={textAnimationY} custom={2}>
                SERVICES
              </motion.a>
            </li>
            <li className="my-2 cursor-pointer hover:translate-x-2 transition ease-in-out duration-500 text-sm">
              <motion.a variants={textAnimationY} custom={3}>
                TECHNOLOGIES
              </motion.a>
            </li>
            <li className="my-2 cursor-pointer hover:translate-x-2 transition ease-in-out duration-500 text-sm">
              <motion.a variants={textAnimationY} custom={4}>
                HOW TO
              </motion.a>
            </li>
            <li className="my-2 cursor-pointer hover:translate-x-2 transition ease-in-out duration-500 text-sm">
              <motion.a variants={textAnimationY} custom={5}>
                JOIN HYDRA
              </motion.a>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-1/4 h-40 border-r-2 border-pink-02/50 flex justify-center items-start l:border-none l:hidden"
        >
          <ul>
            <li className="my-2 cursor-pointer hover:translate-x-2 transition ease-in-out duration-500 text-sm">
              <motion.a variants={textAnimationY} custom={1}>
                F.A.Q
              </motion.a>
            </li>
            <li className="my-2 cursor-pointer hover:translate-x-2 transition ease-in-out duration-500 text-sm">
              <motion.a variants={textAnimationY} custom={2}>
                SITEMAP
              </motion.a>
            </li>
            <li className="my-2 cursor-pointer hover:translate-x-2 transition ease-in-out duration-500 text-sm">
              <motion.a variants={textAnimationY} custom={3}>
                CONDITIONS
              </motion.a>
            </li>
            <li className="my-2 cursor-pointer hover:translate-x-2 transition ease-in-out duration-500 text-sm">
              <motion.a variants={textAnimationY} custom={4}>
                LICENSES
              </motion.a>
            </li>
          </ul>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-1/4 h-40 flex justify-center items-center flex-col l:w-full"
        >
          <motion.h6 variants={textAnimation} custom={1} className="font-bold">
            SOCIALIZE WITH HYDRA
          </motion.h6>
          <div className="flex justify-between mt-5">
            <motion.div variants={blockAnimation} custom={2}>
              <div className="w-8 h-8 flex justify-center items-center bg-gradient-radial-to-tr-white rounded-full mx-1 cursor-pointer hover:translate-y-1 transition ease-in-out duration-500 ">
                <span className="icon-facebook text-custom-purple dark:text-white" />
              </div>
            </motion.div>
            <motion.div variants={blockAnimation} custom={3}>
              <div className="w-8 h-8 flex justify-center items-center bg-gradient-radial-to-tr-white rounded-full mx-1 cursor-pointer hover:translate-y-1 transition ease-in-out duration-500 ">
                <span className="icon-twitter text-custom-purple dark:text-white" />
              </div>
            </motion.div>
            <motion.div variants={blockAnimation} custom={4}>
              <div className="w-8 h-8 flex justify-center items-center bg-gradient-radial-to-tr-white rounded-full mx-1 cursor-pointer hover:translate-y-1 transition ease-in-out duration-500 ">
                <span className="icon-linkedin2 text-custom-purple dark:text-white" />
              </div>
            </motion.div>
            <motion.div variants={blockAnimation} custom={5}>
              <div className="w-8 h-8 flex justify-center items-center bg-gradient-radial-to-tr-white rounded-full mx-1 cursor-pointer hover:translate-y-1 transition ease-in-out duration-500 ">
                <span className="icon-instagram text-custom-purple dark:text-white" />
              </div>
            </motion.div>
            <motion.div variants={blockAnimation} custom={6}>
              <div className="w-8 h-8 flex justify-center items-center bg-gradient-radial-to-tr-white rounded-full mx-1 cursor-pointer hover:translate-y-1 transition ease-in-out duration-500 ">
                <span className="icon-youtube text-custom-purple dark:text-white" />
              </div>
            </motion.div>
            <motion.div variants={blockAnimation} custom={7}>
              <div className="w-8 h-8 flex justify-center items-center bg-gradient-radial-to-tr-white rounded-full mx-1 cursor-pointer hover:translate-y-1 transition ease-in-out duration-500 ">
                <span className="icon-pinterest text-custom-purple dark:text-white" />
              </div>
            </motion.div>
          </div>
          <div>
            <button className="button-02 px-6 py-3 mt-5">
              BUILD YOUR WORLD
            </button>
          </div>
        </motion.div>
      </motion.div>
      <div
        className="text-white text-center text-sm py-8 border-t-2 border-pink-01/30 mx-10 dark:text-custom-purple"
      >
        <h4>
          2023 © HYDRA LANDING PAGE - BY ZINE. E. FALOUTI - ALL RIGHTS RESERVED{" "}
        </h4>
      </div>
    </motion.footer>
  );
}

export default Footer;
