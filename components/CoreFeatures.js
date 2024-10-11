import React from "react";
import Image from "next/image";
import coreImg from "../public/assets/corefeature.webp";
import shapeImg from "../public/assets/shape-pattern2.webp";
const CoreFeatures = () => {
  const scrollTo = (e, id) => {
    const element = document.getElementById(id);
    e.preventDefault();
    element?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col gap-3 md:gap-0 items-center md:flex-row pt-6 w-full max-w-[780px] lg:max-w-[960px] 2xl:max-w-[1250px] 2xl:px-0">
        <section
          data-aos="fade-down"
          data-aos-duration="600"
          className="flex flex-col items-center 2xl:px-16  text-center md:items-start md:text-start max-w-[700px] gap-6  lg:gap-8 pt-[60px] lg:pt-[60px] pb-12 px-4 xs:px-8 sm:px-3"
        >
          <header className="  px-2 xs:px-6 sm:px-16 md:px-3 2xl:px-3  flex flex-col items-center md:items-start gap-4 lg:gap-6 ">
            <h3 className=" uppercase text-[12px] font-semibold sm:text-base text-secondary py-2 px-2 max-w-[24rem] ">
              KEY FEATURES
            </h3>
            <h4 className=" text-2xl 2xl:leading-[3.2rem] sm:text-4xl md:text-3xl lg:text-4xl 2xl:text-5xl font-semibold  text-headings text-center md:text-start">
              Discover what sets us apart anytime & anywhere
            </h4>
            <h4 className="font-[400] text-base   max-w-[504px] text-primary leading-7 lg:leading-9">
              Our product/service offers a range of powerful features designed
              to help you achieve your goals quickly and easily.Whether you're
              looking to streamline your workflow, improve your productivity, or
              simply get more done in less time.
            </h4>
          </header>
          <button
            onClick={(e) => scrollTo(e, "contact")}
            className="text-white bg-secondary rounded-[30px] border-2 py-2 sm:py-3 px-8 sm:px-12 md:mx-3  hover:bg-white hover:text-secondary border-secondary ease-in duration-300"
          >
            Get Started
          </button>
        </section>
        <section
          data-aos="fade-up"
          data-aos-duration="600"
          className="w-full px-3 mt-2 flex justify-center"
        >
          <div className="md:mt-12 z-20 relative w-full h-[300px] xs:h-[350px] sm:h-[400px] md:h-[400px] md:w-[400px] lg:w-[540px] lg:h-[413px] 2xl:w-[620px] rounded-lg max-w-[560px] sm:max-w-[620px] md:max-w-[710px]">
            <Image
              src={coreImg}
              alt="core-features-img"
              fill
              placeholder="blur"
              blurDataURL="/assets/corefeature.webp"
              className="rounded-lg"
            />
            <div className="z-[-1] absolute -bottom-[4rem] -right-[2.5rem] xl:-right-[5.5rem] 2xl:-right-[2.3rem] 3xl:-right-[6rem] 4xl:-right-[7rem] w-[300px] h-[287px]  hidden lg:block overflow-hidden">
              <Image
                src={shapeImg}
                alt="core-features-img"
                fill
                placeholder="blur"
                blurDataURL="/assets/shape-pattern2.webp"
                className="rounded-lg"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CoreFeatures;
