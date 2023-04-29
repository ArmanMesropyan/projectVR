import React from "react";
import { motion } from "framer-motion";
import image1 from "../../assets/images/course-1.jpeg";
import image2 from "../../assets/images/course-2.jpeg";
import image3 from "../../assets/images/course-3.jpeg";
import image4 from "../../assets/images/course-4.jpeg";
import { blockAnimation } from "../../utils/utils";
function Application() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="default-container text-white dark:text-custom-purple ll:flex-wrap ll:justify-around">
        <motion.div
          variants={blockAnimation}
          custom={1}
          className="w-1/4 text-center bg-gradient-radial-to-tr rounded-3xl p-6 mx-3 dark:bg-gradient-radial-to-tr-white ll:m-5 l:w-2/6 l:mx-2 l:my-5 t:w-2/5 mt:w-full"
        >
          <div
            className="bg-center bg-cover bg-no-repet w-48 h-48 rounded-full m-auto border-8 border-custom-purple"
            style={{ backgroundImage: `url('${image1}')` }}
          />
          <h5 className="font-bold text-xl my-4">SIMULATION</h5>
          <p className="text-sm text-left my-3">
            Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
            porttitor rhoncus libero justo laoreet sit amet vitae.
          </p>
          <button className="button-02 py-3 px-6">TRY IT NOW</button>
        </motion.div>
        <motion.div
          variants={blockAnimation}
          custom={2}
          className="w-1/4 text-center bg-gradient-radial-to-tr rounded-3xl p-6 mx-3 dark:bg-gradient-radial-to-tr-white ll:m-5 l:w-2/6 l:mx-2 l:my-5 t:w-2/5 mt:w-full"
        >
          <div
            className="bg-center bg-cover bg-no-repet w-48 h-48 rounded-full m-auto border-8 border-custom-purple"
            style={{ backgroundImage: `url('${image2}')` }}
          />
          <h5 className="font-bold text-xl my-4">EDUCATION</h5>
          <p className="text-sm text-left my-3">
            Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
            porttitor rhoncus libero justo laoreet sit amet vitae.
          </p>
          <button className="button-02 py-3 px-6">TRY IT NOW</button>
        </motion.div>
        <motion.div
          variants={blockAnimation}
          custom={3}
          className="w-1/4 text-center bg-gradient-radial-to-tr rounded-3xl p-6 mx-3 dark:bg-gradient-radial-to-tr-white ll:m-5 l:w-2/6 l:mx-2 l:my-5 t:w-2/5 mt:w-full"
        >
          <div
            className="bg-center bg-cover bg-no-repet w-48 h-48 rounded-full m-auto border-8 border-custom-purple"
            style={{ backgroundImage: `url('${image3}')` }}
          />
          <h5 className="font-bold text-xl my-4">SELF-CARE</h5>
          <p className="text-sm text-left my-3">
            Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
            porttitor rhoncus libero justo laoreet sit amet vitae.
          </p>
          <button className="button-02 py-3 px-6">TRY IT NOW</button>
        </motion.div>
        <motion.div
          variants={blockAnimation}
          custom={4}
          className="w-1/4 text-center bg-gradient-radial-to-tr rounded-3xl p-6 mx-3 dark:bg-gradient-radial-to-tr-white ll:m-5 l:w-2/6 l:mx-2 l:my-5 t:w-2/5 mt:w-full"
        >
          <div
            className="bg-center bg-cover bg-no-repet w-48 h-48 rounded-full m-auto border-8 border-custom-purple"
            style={{ backgroundImage: `url('${image4}')` }}
          />
          <h5 className="font-bold text-xl my-4">OUTDOOR</h5>
          <p className="text-sm text-left my-3">
            Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
            porttitor rhoncus libero justo laoreet sit amet vitae.
          </p>
          <button className="button-02 py-3 px-6">TRY IT NOW</button>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Application;
