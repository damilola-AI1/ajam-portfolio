import React from "react";

const Aboutpage = () => {
  return (
    <div className="w-full min-w-[1600px]   max-w-[1600px] ">
      <div className="flex gap-10 min-w-[1210px] max-w-[1210px] mx-auto pt-[100px] relative">
        <div className=" w-full h-[319px] flex flex-col justify-between">
          <div className="w-[70px] h-[5px] rounded-md  bg-[#F02248]"></div>
          <h1 className="text-[32px] font-bold text-[#09025e]">
            Why you should work with us
          </h1>
          <p className="text-start text-[18px] text-[#060047]">
            We at Ajam have taken it upon ourselves to help you create a strong
            brand identity, improve user experience, and increase customer
            engagement, all while saving you time and <br /> resources.
          </p>
          <div className="flex gap-2 transition-color duration-500 cursor-pointer hover:text-[#09025e]  text-[#F02248]">
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
        <div className="w-full h-full grid gap-y-36 gap-x-10 grid-cols-2 gap-0">
          <div className="w-[220px] flex gap-4 flex-col justify-between h-[300px] flex-shrink-0 ">
            <div className="w-[100px] flex justify-center items-center h-[100px] bg-[#F02248] drop-shadow-shadowOrange  rounded-[50%] flex-shrink-0">
                <svg width="56" height="42" viewBox="0 0 56 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M52.5 42C52.5 42 56 42 56 38.5C56 35 52.5 24.5 38.5 24.5C24.5 24.5 21 35 21 38.5C21 42 24.5 42 24.5 42H52.5ZM24.577 38.5C24.5511 38.4964 24.5255 38.4918 24.5 38.486C24.5035 37.562 25.0845 34.881 27.16 32.466C29.092 30.2015 32.487 28 38.5 28C44.5095 28 47.9045 30.205 49.84 32.466C51.9155 34.881 52.493 37.5655 52.5 38.486L52.472 38.493C52.4557 38.4958 52.4394 38.4981 52.423 38.5H24.577ZM38.5 17.5C40.3565 17.5 42.137 16.7625 43.4497 15.4497C44.7625 14.137 45.5 12.3565 45.5 10.5C45.5 8.64348 44.7625 6.86301 43.4497 5.55025C42.137 4.2375 40.3565 3.5 38.5 3.5C36.6435 3.5 34.863 4.2375 33.5503 5.55025C32.2375 6.86301 31.5 8.64348 31.5 10.5C31.5 12.3565 32.2375 14.137 33.5503 15.4497C34.863 16.7625 36.6435 17.5 38.5 17.5ZM49 10.5C49 11.8789 48.7284 13.2443 48.2007 14.5182C47.6731 15.7921 46.8996 16.9496 45.9246 17.9246C44.9496 18.8996 43.7921 19.6731 42.5182 20.2007C41.2443 20.7284 39.8789 21 38.5 21C37.1211 21 35.7557 20.7284 34.4818 20.2007C33.2079 19.6731 32.0504 18.8996 31.0754 17.9246C30.1004 16.9496 29.3269 15.7921 28.7993 14.5182C28.2716 13.2443 28 11.8789 28 10.5C28 7.71523 29.1062 5.04451 31.0754 3.07538C33.0445 1.10625 35.7152 0 38.5 0C41.2848 0 43.9555 1.10625 45.9246 3.07538C47.8938 5.04451 49 7.71523 49 10.5ZM24.276 25.48C22.8759 25.0391 21.4327 24.7493 19.971 24.6155C19.1497 24.5374 18.325 24.4989 17.5 24.5C3.5 24.5 0 35 0 38.5C0 40.8345 1.1655 42 3.5 42H18.256C17.7371 40.9074 17.4784 39.7094 17.5 38.5C17.5 34.965 18.8195 31.353 21.315 28.336C22.1655 27.307 23.156 26.3445 24.276 25.48ZM17.22 28C15.1485 31.1125 14.0295 34.7614 14 38.5H3.5C3.5 37.59 4.074 34.895 6.16 32.466C8.0675 30.24 11.382 28.07 17.22 28.0035V28ZM5.25 12.25C5.25 9.46523 6.35625 6.79451 8.32538 4.82538C10.2945 2.85625 12.9652 1.75 15.75 1.75C18.5348 1.75 21.2055 2.85625 23.1746 4.82538C25.1438 6.79451 26.25 9.46523 26.25 12.25C26.25 15.0348 25.1438 17.7055 23.1746 19.6746C21.2055 21.6438 18.5348 22.75 15.75 22.75C12.9652 22.75 10.2945 21.6438 8.32538 19.6746C6.35625 17.7055 5.25 15.0348 5.25 12.25ZM15.75 5.25C13.8935 5.25 12.113 5.9875 10.8003 7.30025C9.4875 8.61301 8.75 10.3935 8.75 12.25C8.75 14.1065 9.4875 15.887 10.8003 17.1997C12.113 18.5125 13.8935 19.25 15.75 19.25C17.6065 19.25 19.387 18.5125 20.6997 17.1997C22.0125 15.887 22.75 14.1065 22.75 12.25C22.75 10.3935 22.0125 8.61301 20.6997 7.30025C19.387 5.9875 17.6065 5.25 15.75 5.25Z" fill="white"/>
                </svg>
            </div>
            <h1 className="text-[24px] text-[#09025e] font-semibold  flex-shrink-0">Brand Identity</h1>
            <div className="w-[60px] h-[5px] flex justify-center items-center rounded-md flex-shrink-0 bg-[#F02248]"></div>
            <p className="text-[18px] text-[#060047] flex-shrink-0 ">
              We help our clients develop a strong brand identity that reflects
              their values, vision, and goals.
            </p>
          </div>
          <div className="w-[220px] flex flex-col gap-4 justify-between flex-shrink-0 h-[347px] ">
            <div className="w-[100px] h-[100px] flex justify-center items-center bg-[#F95362] drop-shadow-shadowOrange  flex-shrink-0 rounded-[50%]">
                <svg width="48" height="45" viewBox="0 0 48 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M47.3337 17.5601L30.557 16.1134L24.0003 0.666748L17.4437 16.1367L0.666992 17.5601L13.407 28.5967L9.58033 45.0001L24.0003 36.2967L38.4203 45.0001L34.617 28.5967L47.3337 17.5601ZM24.0003 31.9334L15.227 37.2301L17.5603 27.2434L9.81366 20.5234L20.0337 19.6367L24.0003 10.2334L27.9903 19.6601L38.2103 20.5467L30.4637 27.2667L32.797 37.2534L24.0003 31.9334Z" fill="white"/>
                </svg>
            </div>
            <h1 className="text-[24px] text-[#09025e] flex-shrink-0 font-semibold ">User experience</h1>
            <div className="w-[60px] h-[5px] rounded-md flex justify-center items-center flex-shrink-0 bg-[#F95362]">
            </div>
            <p className="text-[18px] text-[#060047]">
              We prioritize creating designs that are intuitive, user-friendly,
              and aesthetically pleasing which increase customer satisfaction
              and drive conversions.
            </p>
          </div>
          <div className="w-[220px] flex flex-col gap-4 justify-between h-[350px] ">
            <div className="w-[100px] h-[100px] bg-[#060047] flex justify-center items-center drop-shadow-shadowPurple  rounded-[50%] flex-shrink-0">
                <svg width="48" height="52" viewBox="0 0 48 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.9999 0V4.30769C10.9799 4.30769 0.307617 14.98 0.307617 28C0.307617 41.02 10.9799 51.6923 23.9999 51.6923C37.0199 51.6923 47.6922 41.02 47.6922 28C47.6922 21.6526 45.3015 15.9169 41.0282 11.6437L37.9999 14.6742C41.4827 18.1526 43.3845 22.7145 43.3845 28C43.3845 38.6723 34.6722 47.3846 23.9999 47.3846C13.3276 47.3846 4.61531 38.6723 4.61531 28C4.61531 17.3277 13.3276 8.61538 23.9999 8.61538V12.9231L34.7692 6.46154L23.9999 0ZM28.5101 14.1357L23.1255 24.9049C22.4467 25.0894 21.8479 25.4928 21.4218 26.0524C20.9958 26.612 20.7663 27.2966 20.7692 28C20.7692 28.8569 21.1095 29.6786 21.7154 30.2845C22.3213 30.8904 23.1431 31.2308 23.9999 31.2308H24.1356L31.0667 38.164L34.1639 35.0668L27.2307 28.1357V28C27.2307 27.5757 27.1101 27.16 26.9615 26.7874L32.4128 16.0182L28.5101 14.1335V14.1357Z" fill="white"/>
                </svg>
            </div>
            <h1 className="text-[24px] text-[#09025e] font-semibold  ">Time saving</h1>
            <div className="w-[60px] h-[5px] rounded-md  bg-[#060047] flex-shrink-0"></div>
            <p className="text-[18px] text-[#060047]">
              We save you time and resources because you can rely on us to
              handle all aspects of the design process, from concept development
              to final delivery.
            </p>
          </div>
          <div className="w-[220px] flex flex-col gap-4 justify-between h-[320px] ">
            <div className="w-[100px] flex-shrink-0 h-[100px] flex justify-center items-center drop-shadow-shadowOrange  bg-[#FF5F9E] rounded-[50%]">
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M28.0004 33.1264C30.8316 33.1264 33.1267 30.8313 33.1267 28.0001C33.1267 25.1689 30.8316 22.8738 28.0004 22.8738C25.1692 22.8738 22.874 25.1689 22.874 28.0001C22.874 30.8313 25.1692 33.1264 28.0004 33.1264Z" fill="white"/>
            <path d="M50.4806 15.0189C48.826 12.1554 44.8536 10.9789 39.2893 11.6973C38.5832 11.7893 37.8577 11.9162 37.121 12.0653C35.0203 6.11092 31.749 2.33325 28.0003 2.33325C24.2457 2.33325 20.9703 6.12354 18.87 12.0945C12.4804 10.8283 7.4213 11.7289 5.51895 15.0189C3.62293 18.302 5.3546 23.1145 9.61813 27.9999C5.3546 32.8853 3.62293 37.6978 5.51886 40.9809C6.87553 43.3313 9.83553 44.4702 13.7428 44.4702C15.4658 44.4466 17.1825 44.2567 18.8691 43.9031C20.9693 49.8753 24.2452 53.6666 28.0003 53.6666C31.749 53.6666 35.0202 49.8889 37.1209 43.9346C37.8576 44.0837 38.5832 44.2105 39.2892 44.3025C40.2926 44.4354 41.3034 44.5039 42.3156 44.5079C46.293 44.5079 49.144 43.2939 50.4806 40.981C52.3766 37.698 50.6452 32.8854 46.3823 28C50.6452 23.1145 52.3766 18.302 50.4806 15.0189ZM39.6322 14.3256C40.5292 14.2053 41.433 14.1425 42.338 14.1378C45.2792 14.1378 47.3542 14.9038 48.1877 16.3455C49.3643 18.3834 48.0327 22.0421 44.5667 26.0703C42.8911 24.4216 41.0962 22.8987 39.1968 21.5138C38.9428 19.2015 38.5161 16.9114 37.9202 14.6628C38.4895 14.5539 39.0843 14.3969 39.6322 14.3256ZM32.4634 35.732C30.9549 36.603 29.4672 37.3734 28.0138 38.0501C26.522 37.3558 25.0243 36.591 23.5361 35.732C22.0221 34.8579 20.6072 33.951 19.2904 33.0272C19.1451 31.4263 19.0644 29.7489 19.0644 27.9999C19.0644 26.2509 19.1451 24.5735 19.2904 22.9726C20.6072 22.0488 22.0221 21.1419 23.5361 20.2679C25.0175 19.4128 26.5084 18.6501 27.9934 17.9583C29.4556 18.6381 30.9453 19.3912 32.4634 20.2679C33.9779 21.1422 35.3934 22.0493 36.7105 22.9736C36.8557 24.5742 36.9364 26.2514 36.9364 27.9999C36.9364 29.7485 36.8557 31.4256 36.7105 33.0263C35.3934 33.9506 33.9779 34.8576 32.4634 35.732ZM36.262 36.5139C36.0319 37.9475 35.7271 39.3682 35.3488 40.77C33.958 40.386 32.5873 39.9323 31.2419 39.4107C32.0887 38.9741 32.9385 38.5162 33.7899 38.0247C34.6403 37.5339 35.4615 37.0282 36.262 36.5139ZM24.7725 39.4159C23.4229 39.9372 22.0479 40.39 20.6526 40.7726C20.2739 39.3697 19.9688 37.9479 19.7385 36.5131C20.5395 37.0278 21.3611 37.5336 22.2119 38.0248C23.0619 38.5157 23.9166 38.9747 24.7725 39.4159ZM16.5069 30.9174C15.3701 30.0011 14.2807 29.0273 13.2431 27.9999C14.2807 26.9725 15.3701 25.9986 16.5069 25.0822C16.4602 26.0397 16.4311 27.0104 16.4311 27.9999C16.4311 28.9894 16.4602 29.9602 16.5069 30.9174ZM19.7386 19.4868C19.9685 18.0545 20.2731 16.6353 20.6509 15.2348C22.0491 15.6128 23.4271 16.062 24.7795 16.5807C23.9214 17.0228 23.0645 17.4827 22.2121 17.9751C21.3612 18.4663 20.5396 18.9721 19.7386 19.4868ZM31.2433 16.5888C32.5883 16.0674 33.9585 15.6139 35.349 15.2299C35.7272 16.6318 36.032 18.0524 36.2621 19.4861C35.4616 18.9717 34.6403 18.4661 33.79 17.9751C32.9391 17.4838 32.0898 17.0252 31.2433 16.5888ZM39.4938 25.0833C40.6301 25.9994 41.7191 26.9729 42.7563 27.9999C41.7191 29.027 40.6301 30.0005 39.4937 30.9166C39.5404 29.9596 39.5695 28.9893 39.5695 27.9999C39.5695 27.0106 39.5405 26.0402 39.4938 25.0833ZM28.0003 4.96651C30.3283 4.96651 32.7979 7.84662 34.551 12.6909C32.3122 13.3195 30.1215 14.1082 27.9958 15.0508C25.8719 14.1109 23.6825 13.3267 21.4449 12.7045C23.1985 7.85177 25.6708 4.96651 28.0003 4.96651ZM7.81169 16.3455C8.63146 14.9263 10.7328 14.1654 13.6927 14.1654C15.1691 14.1862 16.6404 14.3436 18.0878 14.6355C17.4879 16.893 17.0587 19.1925 16.8037 21.5144C14.9039 22.8992 13.1089 24.4223 11.4332 26.0711C7.96657 22.0427 6.63492 18.3835 7.81169 16.3455ZM7.81169 39.6543C6.63492 37.6163 7.96657 33.9571 11.4332 29.9287C13.109 31.5775 14.904 33.1005 16.8037 34.4854C17.059 36.8117 17.4894 39.1155 18.0913 41.3771C12.8471 42.3779 8.99455 41.7023 7.81169 39.6543ZM28.0003 51.0333C25.6701 51.0333 23.1972 48.1468 21.4435 43.2919C23.6843 42.673 25.8769 41.8912 28.0037 40.9526C30.127 41.8936 32.3151 42.6811 34.5511 43.3088C32.798 48.1531 30.3284 51.0333 28.0003 51.0333ZM48.1877 39.6543C47.1164 41.5041 44.005 42.2425 39.6321 41.6743C39.0843 41.6029 38.4895 41.4459 37.9202 41.337C38.5161 39.0884 38.9428 36.7982 39.1968 34.4859C41.0963 33.1011 42.8911 31.5782 44.5667 29.9296C48.0327 33.9577 49.3643 37.6165 48.1877 39.6543Z" fill="white"/>
            </svg>
            </div>
            <h1 className="text-[24px] flex-shrink-0 text-[#09025e] font-semibold ">Innovative</h1>
            <div className="w-[60px] flex-shrink-0 h-[5px] rounded-md  bg-[#FF5F9E]"></div>
            <p className="text-[18px] text-[#060047]">
              We are at the forefront of design trends and techniques, thus
              providing innovative and creative solutions for your design needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutpage;
