import React from "react";







const Hero = () => {
  return (
    <div className=" w-full flex mt-[80px] scrollbar-hide relative top-[-30px] ">
      <div className="absolute w-[500px] h-[420px] bg-gradient-to-r from-[#F02248]  to-[#F02248] bottom-[75px] blur-[20px] left-[-220px]  "></div>
      <div className="relative text-white w-full flex flex-col justify-between font-bold  h-[440px]">
        <h1 className="text-[40pt] w-[600px] font-black ">
          Giving your brand an online <span className="text-[#09025e]">Presence</span>
        </h1>
        <p className="max-w-[470px] mb-5 min-w-[470px] text-start font-normal leading-[32px]">
          At AJAM design, we don't just create websites. We create online
          experiences that help your business grow With a focus on user
          experience and conversion optimization, we help you achieve your
          business goals and stand out from the competition.
        </p>
        <div className="transition-color font-thin  duration-700 hover:text-[#09025e] transition-border  hover:border-[#F02248] cursor-pointer flex border w-[140px] justify-evenly  items-center rounded-md h-[51px]  ">
          Login 
          <div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 18L12.6 16.55L16.15 13H4V11H16.15L12.6 7.45L14 6L20 12L14 18Z" fill="currentColor"/>
            </svg>
          </div>
        </div>
      </div>
      <div className=" flex scrollbar-hide relative w-full h-[500px] overflow-scroll">
          <img className="absolute left-[20px] z-[1]" src="assets/heroassets/Hero images.png" alt="/" />
          <img className="absolute left-[280px] top-[20px]" src="assets/heroassets/Hero images2.png" alt="/" />
      </div>
      <div className="absolute justify-between items-center flex bottom-[-170px] w-full ">
        <img className="" src="assets/heroassets/image 16.png" />
        <img className=" flex-grow-0 flex-shrink-0" src="assets/heroassets/image 14.png" />
        <img className="" src="assets/heroassets/image 11.png" />
        <img className="" src="assets/heroassets/image 12.png" />
      </div>
    </div>
  );
};

export default Hero
