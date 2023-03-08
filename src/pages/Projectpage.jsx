import React from "react";

const Projectpage = () => {
  return (
    <div className="w-full min-w-[1600px]   max-w-[1600px] ">
      <div className=" min-w-[1210px] max-w-[1210px] flex flex-col  mx-auto  relative pt-[100px] flex flex-col ">
        <div className="w-[700px] h-[700px] self-center absolute rounded-[50%] bg-black/10 blur-[100px] "></div>
        <div className="relative z-[1] w-full flex gap-y-10 top-[-60px] flex-col">
          <div className="w-full flex ">
            <div className="w-full flex flex-col gap-y-5 relative z-[1]">
              <div className="w-[60px] h-[5px] flex justify-center items-center rounded-md flex-shrink-0 bg-[#F02248]"></div>
              <h1 className="text-[32px] font-bold text-[#09025e] ">Recent Projects</h1>
              <p className="text-[18px] text-[#060047] w-[650px] text-start font-thin leading-[32px]">
                Take a look at some of our best works, they will give you a
                glimpse into our design process. We're proud to have worked with
                a variety of clients across different industries, from startups
                to large corporations, and we're always excited to take on new
                challenges and help our clients achieve their goals.<br/> You'll find
                examples of our web design, mobile app development, branding and
                identity designs, social media campaigns, and other digital
                solutions. Each project represents a unique set of challenges
                and opportunities, and we're proud of the results we've achieved
                for our clients.
              </p>
              <div className="flex  mt-[40px] cursor-pointer transition-color duration-500 hover:text-[#09025e] gap-2 text-[#F02248]">
                <div>See more</div>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 18L12.6 16.55L16.15 13H4V11H16.15L12.6 7.45L14 6L20 12L14 18Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
            <div className="w-full flex justify-end">
              <div className="w-[450px] bg-white h-[600px] rounded-xl  flex flex-col justify-between overflow-hidden shadow-cardshadow p-1">
                <img src="assets/projectassets/Desktop Ajam NFT.png" alt="" />
                <h1 className="ml-2 text-[24px] font-bold  text-[#09025e] ">Project Title</h1>
                <p className="ml-2  text-start text-[18px] text-[#060047]">
                  Lorem ipsum dolor sit amet consectetur. Turpis duis
                  scelerisque pharetra vehicula urna. Eu tortor lorem id ipsum
                  duis nisl. At
                </p>
                <div className="flex  mb-5 ml-2  cursor-pointer duration-500 text-[#09025e] gap-2">
                <div>Visit site</div> 
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 18L12.6 16.55L16.15 13H4V11H16.15L12.6 7.45L14 6L20 12L14 18Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              </div>
            </div>
          </div>
          <div className="w-full flex relative">
            <div className="w-full flex justify-start items-start">
                <img className="absolute top-[-200px] left-[-100px]" src="assets/projectassets/Vectary texture2.png"/>
                <img className="absolute bottom-[90px] left-[30px]" src="assets/projectassets/Vectary texture.png"/>
            </div>
            <div className="w-full flex justify-end">
            <div className="w-[450px] bg-white h-[600px] rounded-xl   flex flex-col justify-between overflow-hidden shadow-cardshadow p-1">
                <img src="assets/projectassets/Desktop Ajam blockchain2.png" alt="" />
                <h1 className="ml-2 text-[24px] font-bold  text-[#09025e] ">Project Title</h1>
                <p className="ml-2  text-start text-[18px] text-[#060047]">
                  Lorem ipsum dolor sit amet consectetur. Turpis duis
                  scelerisque pharetra vehicula urna. Eu tortor lorem id ipsum
                  duis nisl. At
                </p>
                <div className="flex  mb-5 ml-2  cursor-pointer duration-500 text-[#09025e] gap-2">
                <div>Visit site</div> 
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 18L12.6 16.55L16.15 13H4V11H16.15L12.6 7.45L14 6L20 12L14 18Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projectpage;
