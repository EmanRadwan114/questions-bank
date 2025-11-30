import React from "react";
import img from "../assets/male-designer-using-laptop.png";

const SiteHeader: React.FC = () => {
  return (
    <div className="text-center lg:text-start">
      <img
        src={img}
        alt="male designer using laptop"
        className="w-2/3 md:w-full mx-auto lg:m-0 lg:w-[60%]"
      />
      <h1 className="capitalize text-3xl md:text-4xl font-bold leading-snug xl:ps-12">
        write down your questions
      </h1>
    </div>
  );
};

export default SiteHeader;
