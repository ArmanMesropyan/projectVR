import React from "react";
import usePreloader from "../hook/index";
import { PropagateLoader } from "react-spinners";

const Preloader = () => {
  const { isLoading } = usePreloader();

  return (
    isLoading && (
      <div className="w-full h-screen flex justify-center items-center absolute top-0 left-0 bg-custom-purple">
         <PropagateLoader size={18} color={'#C0B7E8'} loading={isLoading}/>
      </div>
    )
  );
};

export default Preloader;
