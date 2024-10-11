import React from "react";
//These are Third party packages for smooth slideshow
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

import image1 from "../public/assets/windsolar.jpg";
import image2 from "../public/assets/solar2.jpg";

import image3 from "../public/assets/wind2.jpg";

import image4 from "../public/assets/wind10.jpg";
import image5 from "../public/assets/wind11.jpg";

import image6 from "../public/assets/wind12.jpg";

const data = [image1, image2, image3];
const data2 = [image4, image5, image6];

const scrollTo = (e, id) => {
  const element = document.getElementById(id);
  e.preventDefault();
  element?.scrollIntoView({ behavior: "smooth" });
};

const Trending = () => {
  //These are custom properties for zoom effect while slide-show
  const zoomInProperties = {
    autoPlay: true,
    scale: 1,
    duration: 3000,
    transitionDuration: 500,
    infinite: true,
    prevArrow: (
      <div
        style={{
          width: "30px",

          marginLeft: "7px",
          cursor: "pointer",
        }}
        className="hidden"
      >
        <button
          aria-label="left-arrow-slider-button"
          className="w-9 h-9 relative     text-white flex justify-center items-center"
        >
          <FaChevronLeft className="scale-125 group-hover:text-white text-white w-7 h-7" />
        </button>
      </div>
    ),
    nextArrow: (
      <div
        style={{
          width: "30px",

          marginRight: "7px",
          cursor: "pointer",
        }}
        className="hidden"
      >
        <button
          aria-label="right-arrow-slider-button"
          className="w-9 h-9 relative     text-white flex justify-center items-center"
        >
          <FaChevronRight className="scale-125 group-hover:text-white text-white w-7 h-7" />
        </button>
      </div>
    ),
  };

  return (
    <section className="w-full flex justify-center mt-[-5.3rem] sm:mt-[-6.9rem] 2xl:mt-[-6.7rem] relative z-0 ">
      <div className=" w-full relative visible sm:hidden  max-w-[1900px]  ">
        <Zoom {...zoomInProperties}>
          {data2.map((item, index) => (
            <div className="w-full flex h-[600px] justify-center">
              <div
                key={index}
                className="relative flex justify-center w-full h-auto object-scale-down sm:h-[430px] md:h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h-[750px] 3xl:h-[840px] 4xl:h-[930px]"
              >
                <Image
                  fill
                  src={item}
                  className="   "
                  alt="listing-image-slider"
                  placeholder="blur"
                  blurDataURL="../public/assets/windsolar.jpg"
                />
              </div>
            </div>
          ))}
        </Zoom>
        <div className="flex justify-center absolute left-2/4 right-2/4 bottom-6 2xl:bottom-10 z-20 2xl:left-10">
          <div
            id="hero"
            className="flex items-center  lg:items-start  lg:px-16 2xl:px-28 3xl:px-10 2xl:pb-7  pb-10 xs:pb-0 flex-col lg:pt-10  w-full xs:mb-5 4xl:mb-20 max-w-[1400px]"
          >
            <section
              data-aos="zoom-in"
              data-aos-duration="300"
              className="flex flex-col items-center w-72 xs:w-96 lg:items-start lg:text-start text-center  3xl:max-w-[800px] gap-6 xs:gap-12 lg:gap-8 3xl:gap-12 pt-[10px] lg:pt-[60px] pb-16 px-1 xs:px-8 sm:px-12"
            >
              <h1 className="font-[700] max-w-[335px] w-full sm:max-w-[500px] 3xl:max-w-[550px] lg:font-semibold text-[2rem] xs:text-4xl 2xl:text-6xl leading-[2.7rem] lg:leading-[4.5rem] text-white 3xl:pb-7">
                Empowering Your Investments
              </h1>
              <h2 className="max-w-[331px] w-full sm:max-w-[500px] font-[400] xs:text-[18px] text-sm  3xl:max-w-[610px] text-gray-100 leading-7 lg:leading-9 3xl:leading-[2.5rem]">
                {/*  Look no further than our top-quality web development and services! */}{" "}
                Energy, Acquisitions, and Real Estate Projects Tailored for
                Success.Explore the Future of Sustainable Development and
                Profitable Investments in the Western Balkan.”
              </h2>
              <button
                onClick={(e) => scrollTo(e, "contact")}
                className="text-white bg-secondary rounded-[30px] border-2 py-2 sm:py-3 px-8 sm:px-12 hover:bg-transparent hover:text-white hover:border-white border-secondary ease-in duration-300"
              >
                Get Started
              </button>
            </section>
          </div>
        </div>
      </div>
      <div className=" w-full hidden sm:inline-block relative max-w-[1900px] ">
        <Zoom {...zoomInProperties}>
          {data.map((item, index) => (
            <div key={index} className="w-full flex   justify-center">
              <div
                key={index}
                className="relative flex justify-center w-full   sm:h-[430px] md:h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h-[750px] 3xl:h-[840px] 4xl:h-[930px] bg-gray-600/90"
              >
                <Image
                  fill
                  src={item}
                  className="  mix-blend-overlay "
                  alt="image"
                  placeholder="blur"
                  blurDataURL="../public/assets/windsolar.jpg"
                />
              </div>
            </div>
          ))}
        </Zoom>
        <div className="flex justify-center absolute -bottom-12 md:-bottom-8 left-2/4 right-2/4 lg:bottom-5 lg:left-5 2xl:bottom-10 z-20 2xl:left-10">
          <div
            id="hero"
            className="flex items-center  lg:items-start  lg:px-16 2xl:px-28 3xl:px-10 2xl:pb-7  pb-10 xs:pb-0 flex-col lg:pt-10  w-full xs:mb-5 4xl:mb-20 max-w-[1400px]"
          >
            <section
              data-aos="zoom-in"
              data-aos-duration="300"
              className="flex flex-col items-center lg:items-start lg:text-start text-center max-w-[700px] 3xl:max-w-[800px] gap-8 lg:gap-8 3xl:gap-12 pt-[60px] lg:pt-[60px] pb-16 px-4 xs:px-8 sm:px-0"
            >
              <h1 className="font-[700] w-[600px] 3xl:max-w-[550px] lg:font-semibold text-[2.5rem] sm:text-4xl 2xl:text-6xl leading-[2.7rem] lg:leading-[4.5rem] text-white 3xl:pb-7">
                Empowering Your Investments
              </h1>
              <h2 className="max-w-[331px] w-full sm:max-w-[600px] font-[400] xs:text-[18px] 3xl:text-xl  3xl:max-w-[610px] text-gray-100 leading-7 lg:leading-9 3xl:leading-[2.5rem]">
                {/*  Look no further than our top-quality web development and services! */}{" "}
                Energy, Acquisitions, and Real Estate Projects Tailored for
                Success.Explore the Future of Sustainable Development and
                Profitable Investments in the Western Balkan.”
              </h2>
              <button
                onClick={(e) => scrollTo(e, "contact")}
                className="text-white bg-secondary rounded-[30px] border-2 py-2 sm:py-3 px-8 sm:px-12 hover:bg-transparent hover:text-white hover:border-white border-secondary ease-in duration-300"
              >
                Get Started
              </button>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Trending;
