import React from "react";
import { motion } from "framer-motion";
import { imageAnimation } from "../../utils/utils";
function Contact() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="default-container mt-20"
    >
      <motion.div
        variants={imageAnimation}
        className="rounded-3xl w-full text-white  bg-gradient-radial-to-tr pt-10 dark:text-custom-purple  dark:bg-gradient-radial-to-tr-white"
      >
        <div className="text-center">
          <h2 className="font-bold text-3xl my-5 mt:text-xl">JOIN HYDRA</h2>
          <h2 className="text-3xl  mt:text-xl">
            Let’s Build Your VR Experience
          </h2>
        </div>
        <div>
          <div className="flex w-full px-24 mt-10 t:px-10 t:flex-col m:px-3">
            <div className="w-1/2 mr-4 t:w-full t:my-3 t:mr-0">
              <input
                className="rounded-full bg-transparent border-2 py-3 px-5 w-full border-white dark:border-custom-purple placeholder-white"
                type="text"
                placeholder="First Name"
              />
            </div>
            <div className="w-1/2  t:w-full t:my-3 ">
              <input
                className="rounded-full bg-transparent border-2 py-3 px-5 w-full border-white dark:border-custom-purple placeholder-white"
                type="text"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="flex w-full px-24 mt-10 t:px-10 t:flex-col t:mt-3 m:px-3">
            <div className="w-1/2 mr-4 t:w-full t:my-3 t:mr-0">
              <input
                className="rounded-full bg-transparent border-2 py-3 px-5 w-full border-white dark:border-custom-purple placeholder-white"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="w-1/2  t:w-full t:my-3">
              <input
                className="rounded-full bg-transparent border-2 py-3 px-5 w-full border-white dark:border-custom-purple placeholder-white"
                type="text"
                placeholder="Phone Number"
              />
            </div>
          </div>
          <div className=" w-full px-24 mt-10 t:px-10  t:mt-3 m:px-3">
            <input
              className="rounded-full bg-transparent border-2 py-3 px-5 w-full border-white dark:border-custom-purple placeholder-white"
              type="text"
              placeholder="Subject"
            />
          </div>
          <div className=" w-full px-24 mt-10 t:px-10 t:mt-6 m:px-3">
            <textarea
              placeholder="Tell us Something..."
              className="rounded-3xl bg-transparent border-2 py-3 px-5 w-full h-52 border-white dark:border-custom-purple placeholder-white"
            ></textarea>
          </div>
          <div className="mt-5 flex items-center justify-center py-5">
            <button className="button-02 py-2 px-8">Send to Hydra</button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Contact;
