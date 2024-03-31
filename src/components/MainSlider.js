import React, { useState } from "react";

import logo from "../assets/logo.svg";
import pencil from "../assets/pencil.svg";
import bag from "../assets/bag.svg";
import book from "../assets/book.svg";
import left_line from "../assets/leftline.png";
import right_line from "../assets/rightline.png";
import footer_left_icon from "../assets/footer-icons/footer-left-icon.svg";
import footer_right_icon from "../assets/footer-icons/footer-right-icon.svg";
import previous_slide_button from "../assets/footer-icons/footer-previous-btn.svg";
import next_slide_button from "../assets/footer-icons/footer-next-btn.svg";
import slide_counter from "../assets/footer-icons/footer-slide-count.svg";
import week1_icon from "../assets/week1-icon.svg";
import ruler_icon from "../assets/Right-side-Main-icon/ruler.svg";
import cap_icon from "../assets/Right-side-Main-icon/cap.svg";
import hint_icon from "../assets/Right-side-Main-icon/hint.svg"
import book_icon from "../assets/Right-side-Main-icon/book.svg"
import down_arrow_icon from "../assets/down-arrow.svg"
import Modal from "./Modal";
import Slide1 from "./Slide1";
import Slide2 from "./Slide2";
const MainSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hintIcon, sethintIcon] = useState(false);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => {
      if (prevSlide === totalSlides) return prevSlide;
      return prevSlide === totalSlides - 1 ? 1 : prevSlide + 1;
    });
  };

  // Function to handle "previous" button click
  const handlePreviousSlide = () => {
    setCurrentSlide((prevSlide) => {
      if (prevSlide === 0) return prevSlide;
      return prevSlide === 0 ? totalSlides - 1 : prevSlide - 1;
    });
  };
  const handleOpenModal = () => {
    console.log("open modal")
    // setIsModalOpen(true);
  };

  const handleCloseModal = (data) => {
    setIsModalOpen(data);
  };

  const updateHintIcon = (data) => {
    console.log("hello",data)
    sethintIcon(data);
  };
  // Total number of slides (replace with actual value)
  const totalSlides = 2; // Change this to the total number of slides

  // Array of slide components
  const slideComponents = [
    <Slide1 sendHintIconToMain={updateHintIcon}/>,
    <Slide2 sendHintIconToMain={updateHintIcon} />,
  ];

  return (
    <div className="main-slider max-w-[1194px] w-full lg:h-[834px] max-h-max  bg-[#ffd4e4] pt m-auto flex flex-col">
      <div className="header w-full h-[70px] bg-transparent flex relative">
        <img src={logo} alt="Logo" className="w-[160px] h-[130px] relative" />
        {currentSlide == 0 && (
          <img
            src={week1_icon}
            alt="Logo"
            className="w-[160px] h-[130px]  absolute -top-8 left-40"
          />
        )}
      </div>
      <div className="body w-full lg:h-[694px] max-h-screen flex flex-row">
        <div className="left bg-transparent relative flex flex-col justify-between pt-12 pb-12">
          <img
            src={left_line}
            alt="Line"
            className="absolute inset-0 w-full h-full z-0"
          />
          <img src={pencil} alt="Pencil" className="z-10 " />
          <img src={bag} alt="Bag" className="z-10 " />
          <img src={book} alt="Book" className="z-10 " />
        </div>
        {/* center body start */}
        <div className="center bg-[#F7F9FE] basis-full rounded-3xl p-5 flex flex-col gap-4 relative">
          {slideComponents[currentSlide]}
          {isModalOpen && <Modal handleCloseModal={handleCloseModal} />}
        </div>
        {/* center body end */}
        <div className="relative right bg-transparent  flex flex-col justify-between pt-12 pb-12">
          <img
            src={right_line}
            alt="Lineicon"
            className="absolute inset-0 w-[881px] h-full z-0 top-0 "
          />
          <img src={ruler_icon} alt="Pencil" className="z-10 " />
          {/* <> */}
            {/* Conditional rendering based on hintIcon */}
            {hintIcon ? (
              <img
                src={hint_icon}
                alt="Hint Icon"
                className="z-10"
                onClick={handleOpenModal}
              />
            ) : (
              <img
                src={book_icon}
                alt="Ruler"
                className="z-10"
                
              />
            )}
          {/* </> */}
          <img src={cap_icon} alt="Book" className="z-10 " />
        </div>
      </div>
      <div className="footer bg-transparent w-full flex-grow flex flex-row h-[70px]">
        <div className="left flex  flex-1 pl-16  items-center">
          <img
            src={footer_left_icon}
            alt="Line"
            className="w-[48px] h-[48px] "
          />
        </div>
        <div className="nav-button flex  flex-1 justify-center items-center">
          <div className="btns flex gap-1 justify-center items-center">
            <button onClick={handlePreviousSlide}>
              <img
                src={previous_slide_button}
                alt="Previous"
                className="w-[41px] h-[45px]"
              />
            </button>
            <div className="flex w-[75px] h-[37px] bg-[#CD3F97] rounded-md text white">
              <div className="text-white border-r-[1px] border-r-[#AA1070] flex basis-4/6 items-center justify-center text-[20px] font-light">{currentSlide+1}</div>
              <div className="w-4 h-4 flex basis-2/6 items-center justify-center mt-auto mb-auto">
                <img src={down_arrow_icon} alt="icon"/>
              </div>
            </div>
            {/* <img src={slide_counter} alt="Line" className=" " /> */}
            <button onClick={handleNextSlide}>
              <img
                src={next_slide_button}
                alt="Next"
                className="w-[41px] h-[45px]"
              />
            </button>
          </div>
        </div>
        <div className="right flex  flex-1 items-center justify-end pr-16">
          <img
            src={footer_right_icon}
            alt="Line"
            className="w-[48px] h-[48px] "
          />
        </div>
        {/* <button>open modal</button> */}
      </div>
    </div>
  );
};

export default MainSlider;
