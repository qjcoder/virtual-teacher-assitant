import React from "react";
import styles from "./button.module.css";
import Link from "next/link";
const Button = () => {
  return (
    <div className="flex justify-between gap-5 mr-16">
      <button className="p-5 rounded-full border border-[#C1C1C1] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] w-36 font-roboto text-black bg-white h-12">
        Sign in
      </button>
      <button className="p-5 rounded-full border-none w-36 font-roboto text-white bg-gradient-to-r from-[#4540E1] to-[#00F2FE] h-12">
        Get Started
      </button>
    </div>
  );
};

export default Button;
