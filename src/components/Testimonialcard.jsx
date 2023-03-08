import React from "react";


const Testimonialcard = () => {

  return (
    <div className="moving-card  border-y rounded-lg  w-[400px] h-[340px]  py-10 bg-white z-[3] border-[#F02248] absolute   shadow-xl px-5 flex flex-col gap-y-5">
      <p className="">
        {}
      </p>
      <div className="flex items-center w-[220px] justify-between">
        <img src="{}" alt="" />
        <div>
          <h1>{}</h1>
          <h2>{}</h2>
        </div>
      </div>
    </div>
  );
};

export default Testimonialcard;
