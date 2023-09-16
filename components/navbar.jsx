import React from "react";
import { Button } from "../components/index";

const Navbar = () => {
  return (
    <div className="mt-9 ml-14 font-roboto flex justify-between ">
      <div className="left">
        <span className="font-bold text-4xl text-[#171063] ">Virtual</span>
        <span className="font-bold text-3xl text-[#1FA3F1]  ">
          Teacher Assistant
        </span>
      </div>
      <div className="right">
        <Button></Button>
      </div>
    </div>
  );
};

export default Navbar;
