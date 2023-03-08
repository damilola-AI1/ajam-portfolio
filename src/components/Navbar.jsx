import React from 'react'

const Navbar = () => {
  return (
    <div className="w-full font-light flex items-center h-[100px] justify-between ">
      <div className="">
        <svg width="131" height="42" viewBox="0 0 131 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M33.0178 24.4115H21.5189L19.6162 29.9128H13.5358L23.9179 1H30.6601L41.0422 29.9128H34.9205L33.0178 24.4115ZM31.446 19.7788L27.2683 7.70082L23.0907 19.7788H31.446Z" fill="white"/>
        <path d="M61.7577 1.04137V21.3093C61.7577 24.122 60.9442 26.3142 59.3173 27.886C57.6903 29.4302 55.5119 30.2023 52.7819 30.2023C50.0244 30.2023 47.7908 29.4026 46.0811 27.8033C44.399 26.2039 43.5579 23.9703 43.5579 21.1025H49.3488C49.3764 22.3433 49.6659 23.3085 50.2174 23.9979C50.7965 24.6873 51.6237 25.0319 52.6992 25.0319C53.7471 25.0319 54.5467 24.701 55.0982 24.0392C55.6497 23.3774 55.9255 22.4674 55.9255 21.3093V1.04137H61.7577Z" fill="white"/>
        <path d="M86.2162 24.4115H74.7173L72.8146 29.9128H66.7342L77.1163 1H83.8585L94.2406 29.9128H88.1189L86.2162 24.4115ZM84.6444 19.7788L80.4667 7.70082L76.2891 19.7788H84.6444Z" fill="white"/>
        <path d="M129.599 1.04137V29.9128H123.808V11.134L116.073 29.9128H111.688L103.912 11.134V29.9128H98.1213V1.04137H104.698L113.881 22.5088L123.063 1.04137H129.599Z" fill="white"/>
        <path d="M10.4572 21.3124C-27.6804 47.3264 66.518 41.9538 118.384 36.0157M33.0178 24.4115H21.5189L19.6162 29.9128H13.5358L23.9179 1H30.6601L41.0422 29.9128H34.9205L33.0178 24.4115ZM31.446 19.7788L27.2683 7.70082L23.0907 19.7788H31.446ZM61.7577 1.04137V21.3093C61.7577 24.122 60.9442 26.3142 59.3173 27.886C57.6903 29.4302 55.5119 30.2023 52.7819 30.2023C50.0244 30.2023 47.7908 29.4026 46.0811 27.8033C44.399 26.2039 43.5579 23.9703 43.5579 21.1025H49.3488C49.3764 22.3433 49.6659 23.3085 50.2174 23.9979C50.7965 24.6873 51.6237 25.0319 52.6992 25.0319C53.7471 25.0319 54.5467 24.701 55.0982 24.0392C55.6497 23.3774 55.9255 22.4674 55.9255 21.3093V1.04137H61.7577ZM86.2162 24.4115H74.7173L72.8146 29.9128H66.7342L77.1163 1H83.8585L94.2406 29.9128H88.1189L86.2162 24.4115ZM84.6444 19.7788L80.4667 7.70082L76.2891 19.7788H84.6444ZM129.599 1.04137V29.9128H123.808V11.134L116.073 29.9128H111.688L103.912 11.134V29.9128H98.1213V1.04137H104.698L113.881 22.5088L123.063 1.04137H129.599Z" stroke="white" stroke-width="1.54329"/>
        </svg>
      </div>
      <ul className="gap-[3.5rem] h-full flex justify-between  items-center text-white font-thin ">
          <li className="cursor-pointer hover:text-[#09025e]   transition-color duration-500">About Us</li>
          <li className="cursor-pointer hover:text-[#09025e] transition-color duration-500">Services</li>
          <li className="cursor-pointer hover:text-[#09025e] transition-color duration-500">Portfolio</li>
          <li className="cursor-pointer hover:text-[#09025e] transition-color duration-500">FAQs</li>
      </ul>
      <div className="text-white gap-5  flex justify-evenly items-center h-full">
        <div className="w-[100px] transition-color duration-500 hover:text-[#09025e] cursor-pointer border border-[#E90038] rounded-md flex justify-center items-center text-[#E90038] h-[40px]">Sign Up</div>
        <div className="w-[130px] transition-color duration-500 cursor-pointer rounded-md h-[40px] hover:bg-[#09025e] flex justify-evenly items-center bg-[#E90038]">
          Log In
          <div className=" flex items-center mt-1">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 18L12.6 16.55L16.15 13H4V11H16.15L12.6 7.45L14 6L20 12L14 18Z" fill="currentColor"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar 