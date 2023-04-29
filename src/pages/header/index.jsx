import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import hydra from "../../assets/images/Hydra-Esport-Mascot-Logo-1.webp";
import { textAnimationY } from "../../utils/utils";
function Header({ changeTheme, whiteMode }) {
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 776) {
        setIsActive(false);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <motion.header
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="default-container text-white  t:flex-row ll:flex-col dark:text-custom-purple"
    >
      <div className="flex items-center cursor-pointer">
        <motion.div variants={textAnimationY} custom={1}>
          <div
            className="bg-cover w-16 h-14 transition-custom hover:rotate-180"
            style={{ backgroundImage: `url('${hydra}')` }}
          />
        </motion.div>

        <motion.h3
          variants={textAnimationY}
          custom={2}
          className="text-2xl uppercase tracking-tighter"
        >
          Hydra
        </motion.h3>
        <motion.div
          variants={textAnimationY}
          custom={3}
          className="ml-6"
          onClick={changeTheme}
        >
          {!whiteMode ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
              />
            </svg>
          )}
        </motion.div>
      </div>
   
      <div
        className={`my-6 l:my-6  
      ${
        isActive
          ? "t:block t:w-full t:absolute t:top-12 t:left-0 t:bg-custom-purple t:p-5"
          : "t:hidden"
      }`}
      >
        <motion.nav
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <ul className="flex t:flex-col">
            <li className="mr-8 link-style t:hover:translate-y-0">
              <motion.a variants={textAnimationY} custom={1}>
                ABOUT
              </motion.a>
            </li>
            <li className="mr-8 link-style t:hover:translate-y-0">
              <motion.a variants={textAnimationY} custom={2}>
                SERVICES
              </motion.a>
            </li>
            <li className="mr-8 link-style t:hover:translate-y-0">
              <motion.a variants={textAnimationY} custom={3}>
                TECHNOLOGIES
              </motion.a>
            </li>
            <li className="mr-8 link-style t:hover:translate-y-0">
              <motion.a variants={textAnimationY} custom={4}>
                HOW TO
              </motion.a>
            </li>
          </ul>
        </motion.nav>
      </div>
      <div
        className={`flex items-center ${
          isActive
            ? "t:flex t:w-full t:absolute t:top-44  t:left-0 t:bg-custom-purple t:p-5 t:shadow-lg"
            : "t:hidden"
        }`}
      >
        <motion.div variants={textAnimationY} custom={3} className="mr-10">
          <button className="button-01 px-3 py-2">CONTACT US</button>
        </motion.div>
        <motion.div variants={textAnimationY} custom={4}>
          <button className="button-02  px-3 py-2  ">JOIN HYDRA</button>
        </motion.div>
      </div>
      <div
        className="cursor-pointer hidden t:block"
        onClick={() => setIsActive(!isActive)}
      >
        {isActive ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        )}
      </div>
    </motion.header>
  );
}

export default Header;
