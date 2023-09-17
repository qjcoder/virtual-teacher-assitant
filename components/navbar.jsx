import React from "react";
import { ButtonBlue, ButtonWhite } from "../components/index";

const Navbar = () => {
  return (
    <div className="mt-3 md:mt-2 ml-2 md:ml-12 font-roboto flex  justify-between ">
      {/* Text */}
      <div className="flex flex-col md:flex-row items-end ">
        <span className="font-bold text-[20px] md:text-3xl text-[#171063] ">
          Virtual
        </span>
        <span className="font-bold text-[18px] md:text-2xl text-[#1FA3F1]   ">
          Teacher Assistant
        </span>
      </div>
      {/* Button */}
      <div>
        <div className="flex gap-2 mr-6">
          <ButtonWhite />
          <ButtonBlue />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
