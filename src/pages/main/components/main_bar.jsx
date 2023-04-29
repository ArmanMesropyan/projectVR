import React from "react";
import { forwardRef } from "react";
import { motion } from "framer-motion";
const MainBar = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="w-full py-5 px-6 flex justify-between text-white items-center mt-14 rounded-full bg-gradient-radial-to-tr dark:text-white dark:bg-gradient-radial-to-tr-white
        l:flex-col l:rounded-3xl
      "
    >
      <div className="border-r-2 border-grey-transparent  p-5 w-2/6 text-right flex items-center justify-around l:border-b-2 l:border-r-0 l:w-full l:justify-between">
        <div className="text-pink-02 dark:text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-14 h-10 mt:w-8 mt:h-8 m:w-6 m:h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>
        </div>
        <div>
          <h3 className="text-2xl my-3 ll:text-xl m:text-xs">Pay Us a Visit</h3>
          <p className="mt:text-xs">
            Union St, Seattle, WA 98101, United States
          </p>
        </div>
      </div>
      <div className="border-r-2 border-grey-transparent p-5 w-2/6 text-right flex items-center justify-around l:border-b-2 l:border-r-0 l:w-full l:justify-between ">
        <div className="text-pink-02 dark:text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-14 h-10 mt:w-8 mt:h-8 m:w-6 m:h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0l-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
            />
          </svg>
        </div>
        <div>
          <h3 className="text-2xl my-3 ll:text-xl  m:text-xs">
            Give Us a Call
          </h3>
          <p className="mt:text-xs">(110) 1111-1010</p>
        </div>
      </div>
      <div className=" p-5 w-2/6 text-right flex items-center justify-around l:w-full l:justify-between ">
        <div className="text-pink-02 dark:text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-14 h-10 mt:w-8 mt:h-8 m:w-6 m:h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>
        </div>
        <div>
          <h3 className="text-2xl my-3 ll:text-xl  m:text-xs">
            Send Us a Message
          </h3>
          <p className="mt:text-xs">Contact@HydraVTech.com</p>
        </div>
      </div>
    </div>
  );
});

export default MainBar;
export const MotionMainBar = motion(MainBar);
