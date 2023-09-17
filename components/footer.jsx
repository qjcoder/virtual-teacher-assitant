import React from "react";

const Footer = () => {
  return (
    // Footer
    <div className="flex max-w-full font-roboto bg-[#0A0A0A] ">
      {/* NewsLetter */}
      <div className="mt-1 md:mt-2 mb-1 md:mb-2 ml-2 md:ml-12 flex flex-col gap-2 items-start">
        <h1 className=" text-white font-bold md:text-base">Newsletter</h1>
        <p className="text-[#FCFCFC] md:text-[12px] md:font-normal ">
          Stay updated with our latest trends Seed heaven so said place winged
          over given forth fruit.
        </p>
        <div className="flex justify-between items-center gap-2">
          <div className="border border-[#4FACFE]  bg-transparent w-[370px] md:pl-2">
            <input
              type="text"
              placeholder="Enter your email"
              className="bg-transparent text-xs border-none hover:border-none"
            />
          </div>
          <div className="text-white bg-gradient-to-r from-[#4FACFE] to-[#00F2FE] cursor-pointer md:w-5 md:h-5 "></div>
        </div>
      </div>
      {/* About us */}
      <div className="mt-1 md:mt-2 ml-2 md:ml-12 flex flex-col items-start gap-2">
        <h1 className=" text-white font-bold md:text-base">About us</h1>
        <p className="text-[#FCFCFC] md:text-[12px] md:font-normal ">
          The are likely to focus on the text,disregarding the layout and its
          e,an unacceptable risk in corporate an environments.
        </p>
      </div>
      {/* Contact us */}
      <div className="mt-1 md:mt-2 ml-2 md:ml-12 flex flex-col items-start gap-2 mr-2 md:mr-6">
        <h1 className=" text-white font-bold md:text-base">Contact us</h1>
        <p className="text-[#F5F5F5] md:text-[12px]">
          <span className="text-[#337AB7]">Phone:</span> +569 987 142
        </p>
        <p className="text-[#FFFFFF] text-[12px]  ">
          <span className="text-[#337AB7]">Email: virtualteacherasst</span>
          @email.com
        </p>
        <p className="text-[#FCFCFC] text-[12px] ">
          <span className="text-[#337AB7]">Address:</span> Most of its text is
          made up from sections 1.10.32–3 of Cicero's De finibus
        </p>
      </div>
    </div>
  );
};

export default Footer;
