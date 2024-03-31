import React, { useEffect } from "react";
import female_icon from "../assets/female-icon.svg";
import setting_icon from "../assets/text-icons/setting-icon.svg";
import character_icon from "../assets/text-icons/character-icon.svg";
import plot_icon from "../assets/text-icons/plot-icon.svg";
import prob_conf_icon from "../assets/text-icons/prob&conf-icon.svg";
import resolution_icon from "../assets/text-icons/resolution-icon.svg";
import bg_banner from "../assets/bg-banner-2.svg";
const Slide1 = ({ sendHintIconToMain }) => {
  useEffect(() => {
    // /
    sendHintIconToMain(false); // Call the callback function to send data to MainSlider
  }, []); 

  const sectionStyle1 = {
    backgroundImage: `url(${bg_banner})`,
  };
  const shadowStyle = {
    boxShadow: "0 8px 4px rgba(0, 0, 0, 0.3)", // black shadow with blur 2
  };

  return (
    <>
      {/* heading */}
      <div className=" w-full ">
        <div className="font-sans font-thin bg-[#FE6784] text-[32px] border-[3px] w-max text-white m-auto border-[#FFAEBE] border-dashed rounded-full pl-5 pr-5 ">
          Elements of Story Writing
        </div>
      </div>
      {/* paragragp 1 */}
      <div className=" w-full ">
        <div className="font-sans font-thin tracking-tighter leading-[30px] text-[24px]  text-black m-auto  border-dashed  pl-2 pr-2 text-wrap text-left">
          <p>
            Welcome to term 2 of Writers Club. Are you excited for this amazing
            journey? Over the next week, we will be practicing the different
            elements of story writing. Our aim is to make stories more
            interesting and exciting.
          </p>
        </div>
      </div>
      {/* paragragp 2 */}
      <div className=" w-full  ">
        <div className="relative flex flex-row font-sans font-thin bg-[#25A3A1] text-[20px] border-[3px]  text-white m-auto border-[#A4FDFB] border-dashed  p-2 text-wrap text-left">
          <div className="basis-11/12">
            <p>
              There are elements which make the foundation for story writing. An
              element is an essential part of something and every fiction story
              has the same key elements:
            </p>
          </div>
          <div className="Icon ">
            <img
              src={female_icon}
              alt="icon"
              className="w-[110px] h-[131px] object-fill absolute top-[-1px] right-0"
            />
          </div>
        </div>
      </div>

      {/* text icons */}
      <div className=" w-full ">
        <div className="font-sans font-thin tracking-tighter leading-[30px]  text-[24px]  text-black m-auto  border-dashed  pl-2 pr-2 text-wrap text-left">
          <div className="icons flex justify-between">
            <div>
              <img src={setting_icon} alt="icon" className="" />
            </div>
            <div>
              <img src={character_icon} alt="icon" className="" />
            </div>
            <div>
              <img src={plot_icon} alt="icon" className="" />
            </div>
            <div>
              <img src={prob_conf_icon} alt="icon" className="" />
            </div>
            <div>
              <img src={resolution_icon} alt="icon" className="" />
            </div>
          </div>
          <div className="pl-3">
            <p className="font-sans font-normal tracking-normal text-[24px]  text-black text-left">
              You must be familiar with some of these. If not, do not worry! we
              will cover all these elements as we go along.
            </p>
          </div>
        </div>
      </div>
      <div
        className="w-full bg-[#FE6784] pl-6 pr-6 pt-1 pb-1 rounded-[20px] shadow-custom"
        style={shadowStyle}
      >
        <div
          class="bg-center leading-[30px]  p-4 bg-no-repeat bg-cover  tracking-tighter font-sans font-thin  text-[24px]  text-left "
          style={sectionStyle1}
        >
          <p className="pl-5">
            For today’s lesson, we will try to understand and practice writing
            the setting for our stories.
            <br></br>The setting is an important element of every fiction story.
          </p>
        </div>
      </div>
    </>
  );
};

export default Slide1;
