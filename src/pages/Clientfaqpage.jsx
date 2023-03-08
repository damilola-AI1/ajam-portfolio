import React from "react";
import  { useState, useEffect } from 'react';
import Testimonialcard from "../components/Testimonialcard";
import { resources } from "../Resourse";

const Clientfaqpage = () => {

  
useEffect(()=>{
 

  let count = 0

  function slides(){
   let list = ["fst-image", "sec-image", "third-image"]

   let client = [...document.getElementsByClassName("moving-card")]

   client[count].classList.add(list[count])
  
    count++
  }
 let myInterval = setInterval(slides,5000)  
})


  return (
    <div className="w-full min-w-[1600px]   max-w-[1600px] h-full ">
      <div className=" bg-white min-w-[1210px] max-w-[1210px] flex flex-col  mx-auto  relative pt-[100px] flex flex-col ">
        <div className="w-[60px] h-[5px] flex justify-center items-center rounded-md flex-shrink-0 bg-[#F02248]"></div>
        <h1 className="text-[32px] font-bold text-[#09025e]">What our clients say</h1>
        <div className="relative flex  top-[70px] w-full justify-center items-center">
          <div className="w-full h-[400px]">
          <div className="absolute flex w-[120px] h-[40px]">
            <div className="bg-[#F02248] cursor-pointer  transition-color duration-500 text-white hover:bg-[#09025e] hover:text-white flex justify-center items-center transform rotate-[180deg] rounded-md w-full">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 18L12.6 16.55L16.15 13H4V11H16.15L12.6 7.45L14 6L20 12L14 18Z" fill="currentColor"/>
                </svg>
            </div>
            <div className="fst_image w-full text-[#F02248] transition-color duration-500 hover:text-[#09025e] cursor-pointer  bg-none flex justify-center items-center rounded-md">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 18L12.6 16.55L16.15 13H4V11H16.15L12.6 7.45L14 6L20 12L14 18Z" fill="currentColor"/>
                </svg>
            </div>
          </div>
          </div>
          <div id="container" className="w-full flex relative items-center ">
          <div className="moving-card  border-y rounded-lg  w-[400px] h-[340px]  py-10 bg-white z-[3] border-[#F02248] absolute   shadow-xl px-5 flex flex-col gap-y-5">
                <p className="">
                They took the time to understand my business goals and created a
                stunning website design that truly reflected my brand. Their
                attention to detail was ensured they incorporated all the features
                to make my website stand out.
                </p>
                <div className="flex items-center w-[220px] justify-between" >
                    <img src="assets/faqassets/Ellipse 2.png" alt="" />
                    <div>
                        <h1>Floyd Miles</h1>
                        <h2>SpaceY Cohort 1</h2>
                    </div>
                </div>
            </div>
            <div className="transform  moving-card  z-[2] border-y rounded-lg py-10 bg-white border-[#F02248] absolute   w-[400px] h-[340px] flex flex-col gap-y-5">
                <p className="">
                I have to say that I was thoroughly impressed
                 with their service and designs. From start to 
                 finish, their team was highly professional and 
                 attentive to my needs.
                </p>
                <div className="flex items-center" >
                    <img src="assets/faqassets/Ellipse3.png" alt="" />
                    <div>
                        <h1>Floyd Miles</h1>
                        <h2>SpaceY Cohort 1</h2>
                    </div>
                </div>
            </div>
            <div className="moving-card  transform border-y  h-[340px] z-[1] rounded-lg  py-10 bg-white border-[#F02248] absolute w-[400px]  flex flex-col gap-y-5">
                <p className="">
                The development process was seamless, 
                and their team was able to complete the 
                project on time and within budget. They kept 
                me informed every step of the way and 
                made sure that my feedback was 
                incorporated into the final product.
                </p>
                <div className="flex items-center" >
                    <img src="assets/faqassets/Ellipse 4.png" alt="" />
                    <div>
                        <h1>Floyd Miles</h1>
                        <h2>SpaceY Cohort 1</h2>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clientfaqpage;
