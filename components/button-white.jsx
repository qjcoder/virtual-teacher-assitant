import React from "react";

import Link from "next/link";
const ButtonWhite = () => {
  return (
    <button className="p-4 md:p-4 rounded-2xl md:rounded-full border border-[#C1C1C1] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] h-2 md:h-5 w-18 md:w-22 text-black text-[10px] md:text-xs bg-white cursor-pointer flex items-center justify-center">
      Sign in
    </button>
  );
};

export default ButtonWhite;
