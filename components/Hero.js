import Image from "next/image";
import React from "react";

import bg from "../public/assets/herobg.webp";
import mobilebg from "../public/assets/mobileb.webp";

const Hero = () => {
  const scrollTo = (e, id) => {
    const element = document.getElementById(id);
    e.preventDefault();
    element?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="flex justify-center">
      <div
        id="hero"
        className="bg-gradient-to-b from-[#1c2956] via-[#4d6ecf]  to-[#1c2956]  sm:bg-none  flex items-center  lg:items-start  lg:px-16 2xl:px-28 3xl:px-10 2xl:pb-7  pb-10 xs:pb-0 flex-col lg:pt-10  w-full xs:mb-5 4xl:mb-20 max-w-[1400px]"
      >
        <section
          data-aos="zoom-in"
          data-aos-duration="300"
          className="flex flex-col items-center lg:items-start lg:text-start text-center max-w-[700px] 3xl:max-w-[800px] gap-12 lg:gap-8 3xl:gap-12 pt-[60px] lg:pt-[60px] pb-16 px-4 xs:px-8 sm:px-12"
        >
          <h1 className="font-[700] max-w-[335px] sm:max-w-[500px] 3xl:max-w-[550px] lg:font-semibold text-[2.5rem] sm:text-5xl 2xl:text-6xl leading-[2.7rem] lg:leading-[4.5rem] text-white 3xl:pb-7">
            Take your business to the next level
          </h1>
          <h2 className="max-w-[331px] sm:max-w-[500px] font-[400] xs:text-[18px] 3xl:text-xl  3xl:max-w-[610px] text-gray-100 leading-7 lg:leading-9 3xl:leading-[2.5rem]">
            {/*  Look no further than our top-quality web development and services! */}{" "}
            Our team of experienced professionals can help you build everything
            you need. From design and development to deployment and ongoing
            maintenance, we are committed to delivering exceptional results that
            exceed your expectations.
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
  );
};

export default Hero;
