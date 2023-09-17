import React from "react";
import { ButtonBlue, ButtonWhite } from "./index";
import Link from "next/link";

const Header = () => {
  return (
    <div className="mt-3 md:mt-2 ml-3 md:ml-12 font-roboto flex  justify-between">
      {/* Text */}
      <div className="flex flex-col md:flex-row  md:items-end items-center ">
        <span className="font-bold text-[16px] md:text-3xl text-[#171063] ">
          Virtual
        </span>
        <span className="font-bold text-[12px] md:text-2xl text-[#1FA3F1]   ">
          Teacher Assistant
        </span>
      </div>
    </div>
  );
};

export default Header;
