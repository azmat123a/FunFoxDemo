import React, { useEffect } from "react";

import right_img from "../assets/slide-2/right-img.svg";
import left_img from "../assets/slide-2/left-img.svg";
import hint_icon from "../assets/slide-2/hint-icon.svg";
import time_icon from "../assets/slide-2/time.svg";
import place_icon from "../assets/slide-2/home.svg";
const Slide2 = ({ sendHintIconToMain}) => {

  useEffect(() => {
    // /
    sendHintIconToMain(true); // Call the callback function to send data to MainSlider
  }, []); 
  return (
    <>
      <div className=" w-full ">
        <div className="font-sans font-thin tracking-normal leading-[39px] text-[32px]  text-black m-auto  border-dashed  pl-2 pr-2 text-wrap text-left">
          <p>
            Can you figure out the definition of setting from the following
            examples?
          </p>
        </div>
      </div>
      <div className=" w-full ">
        <div className="font-sans font-thin tracking-normal leading-[39px] text-[24px]  text-black m-auto  border-dashed  pl-2 pr-2 text-wrap text-left">
          <p>(take a minute to think about this)</p>
        </div>
      </div>

      <div className="flex gap-28 w-full md:gap-10">
        <div className="flex  flex-1 flex-col  items-end text-wrap text-center ">
          <div className="flex flex-col font-thin tracking-normal leading-[24px] text-[20px]  items-center gap-2 ">
            <img src={left_img} alt="icon" className="w-[235px] h-[168px]" />
            <p className="  text-wrap w-[294px]">Sunny day at a beach</p>
          </div>
        </div>
        <div className="flex  flex-1 flex-col  items-start text-wrap text-center ">
          <div className="flex flex-col font-thin tracking-normal leading-[24px] text-[20px]  items-center gap-2 ">
            <img src={right_img} alt="icon" className="w-[235px] h-[168px]" />
            <p className="  text-wrap w-[294px]">
              A cold rainy night in a haunted house in October
            </p>
          </div>
        </div>
      </div>

      <div className=" w-full ">
        <div className="font-sans font-thin tracking-tighter leading-[29px] text-[20px]  text-black m-auto  border-dashed  pl-2 pr-2 text-wrap text-left">
          <p>So, what do you think the definition of setting is?</p>
        </div>
      </div>

      <div className=" w-full ">
        <div className="font-sans font-thin tracking-tighter leading-[29px] text-[20px]  text-black m-auto  border-dashed  pl-2 pr-2 text-wrap text-left flex flex-row">
          <div className="flex max-w-max items-center">Any guesses?</div>
          <div className="flex flex-1 bg-white border-dashed border-[#CCCCCC] border-[3px] p-4 rounded-lg ml-2 ">
            <hr className="border-b-[0.5px] border-red-[#B6B6B6] w-full mt-auto" />
          </div>
          <div className="flex max-w-max items-center pl-4">
            Hint:
            <img src={hint_icon} alt="hint" className="ml-4" />
          </div>
        </div>
      </div>
      {/* paragragp 2 */}
      <div className=" w-full  ">
        <div className="flex flex-row font-sans font-thin bg-[#25A3A1] text-[24px] border-[3px]  text-white m-auto border-[#A4FDFB] border-dashed  p-2 text-wrap text-left ">
          <div className="">
            Setting is the time{" "}
            <span>
              <img src={time_icon} alt="Time Icon" className="inline-block " />
            </span>{" "}
            and place{" "}
            <span>
              <img
                src={place_icon}
                alt="Place Icon"
                className="inline-block "
              />
            </span>{" "}
            of a story. It often answers the questions: when? and where?
          </div>
        </div>
      </div>

      <div className=" w-full ">
        <div className="font-sans font-thin tracking-tighter leading-[29px] text-[20px]  text-black m-auto  border-dashed  pl-2 pr-2 text-wrap text-left">
          <p>
            The time of the story could be in the past, future, day, night,
            summer or winter. A story may take place in a school, a mall, a
            desert, an airplane or in a variety of other places.
          </p>
        </div>
      </div>
     
    </>
  );
};

export default Slide2;
