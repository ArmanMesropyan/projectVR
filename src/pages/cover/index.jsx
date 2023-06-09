import React from "react";
import coverImg from "../../assets/images/cover.jpeg";
import ico1 from "../../assets/images/ico1.png";
import ico2 from "../../assets/images/ico2.png";
import ico3 from "../../assets/images/ico3.png";
import ico4 from "../../assets/images/ico4.png";

function Cover() {
  return (
    <>
      <div  className="default-container mt-10 ">
        <div
          className="relative w-full h-80 rounded-full bg-cover bg-no-repeat bg-top"
          style={{ backgroundImage: `url('${coverImg}')` }}
        >
          <div className="rounded-full w-full h-full flex justify-center items-center flex-col text-white absolute top-0 left-0 z-10 bg  bg-custom-purple/50 ">
            <h2 className="font-bold text-3xl t:text-2xl mt:text-xl m:text-sm">
              TECHNOLOGIES & HARDWARE
            </h2>
            <h3 className="mt-3 text-xl m:text-sm">USED BY HYDRA VR.</h3>
          </div>
        </div>
      </div>

      <div className="default-container mt-10 justify-around">
        <div
          className="w-32 h-32 bg-cover bg-no-repeat bg-center opacity-50 dark:invert mt:w-16 mt:h-16 m:w-12 m:h-12"
          style={{ backgroundImage: `url('${ico1}')` }}
        />
        <div
          className="w-32 h-32 bg-cover bg-no-repeat bg-center opacity-50 dark:invert mt:w-16 mt:h-16 m:w-12 m:h-12"
          style={{ backgroundImage: `url('${ico2}')` }}
        />
        <div
          className="w-32 h-32 bg-cover bg-no-repeat bg-center opacity-50 dark:invert mt:w-16 mt:h-16 m:w-12 m:h-12"
          style={{ backgroundImage: `url('${ico3}')` }}
        />
        <div
          className="w-32 h-32 bg-cover bg-no-repeat bg-center opacity-50 dark:invert mt:w-16 mt:h-16 m:w-12 m:h-12"
          style={{ backgroundImage: `url('${ico4}')` }}
        />
      </div>
    </>
  );
}

export default Cover;
