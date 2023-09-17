import React from "react";

const Footer = () => {
  return (
    // Footer
    <div className="flex md:flex-row flex-col max-w-full font-roboto bg-[#0A0A0A] ">
      {/* NewsLetter */}
      <div className="mt-1 md:mt-2 mb-1 md:mb-2 ml-2 md:ml-12 flex flex-col gap-2 md:items-start items-center">
        <h1 className=" text-white font-bold md:text-base  text-[12px]">
          Newsletter
        </h1>
        <p className="text-[#FCFCFC] md:text-[12px] text-[9px] md:font-normal ">
          Stay updated with our latest trends Seed heaven so said place winged
          over given forth fruit.
        </p>
        <div className="flex justify-between items-center gap-2">
          <div className="border border-[#4FACFE]  bg-transparent md:w-[180px] md:pl-2">
            <input
              type="text"
              placeholder="Enter your email"
              className="bg-transparent md:text-xs text-[8px] outline-none text-white border:none"
            />
          </div>
          <div className="text-white bg-gradient-to-r from-[#4FACFE] to-[#00F2FE] rounded-[4px] cursor-pointer md:w-5 md:h-5 items-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </div>
      </div>
      {/* About us */}
      <div className="mt-1 md:mt-2 ml-2 md:ml-12 flex flex-col md:items-start items-center gap-2">
        <h1 className=" text-white font-bold md:text-base  text-[12px]">
          About us
        </h1>
        <p className="text-[#FCFCFC] md:text-[12px] text-[9px] md:font-normal ">
          The are likely to focus on the text,disregarding the layout and its
          e,an unacceptable risk in corporate an environments.
        </p>
      </div>
      {/* Contact us */}
      <div className="mt-1 md:mt-2 ml-2 md:ml-12 flex flex-col md:items-start items-center gap-2 mr-2 md:mr-6">
        <h1 className=" text-white font-bold md:text-base  text-[12px]">
          Contact us
        </h1>
        <p className="text-[#F5F5F5] md:text-[12px] text-[9px]">
          <span className="text-[#337AB7]">Phone:</span> +569 987 142
        </p>
        <p className="text-[#FFFFFF] md:text-[12px] text-[9px]  ">
          <span className="text-[#337AB7]">Email: virtualteacherasst</span>
          @email.com
        </p>
        <p className="text-[#FCFCFC] md:text-[12px] text-[9px] ">
          <span className="text-[#337AB7]">Address:</span> Most of its text is
          made up from sections 1.10.32–3 of Cicero's De finibus
        </p>
      </div>
    </div>
  );
};

export default Footer;
