import { useState } from "react";
import Slider from "react-slick";

import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";
import { AiFillStar } from "react-icons/ai";
import Image from "next/image";
// import images
import test1 from "../public/assets/testimonials/avatar1.png";
import test2 from "../public/assets/testimonials/avatar2.png";
import test3 from "../public/assets/testimonials/avatar3.png";
import test4 from "../public/assets/testimonials/avatar4.png";

function SampleNextArrow({ onClick }) {
  return (
    <>
      <button
        aria-label="arrow-right-image-slider"
        onClick={onClick}
        className="w-[3rem] md:w-[4rem] h-[3rem] md:h-[4rem]   my-4  py-2  px-2 absolute -bottom-20 md:-bottom-28 left-[50%]   rounded-full   hover:border-primary group overflow-hidden font-medium  ease-in duration-300 flex justify-center items-center"
      >
        <HiOutlineArrowNarrowRight className=" w-9 h-10 relative text-[#bbc7d7] group-hover:text-primary ease-in duration-300" />
      </button>
    </>
  );
}

function SamplePrevArrow({ onClick }) {
  return (
    <>
      <button
        aria-label="arrow-left-image-slider"
        onClick={onClick}
        className=" absolute z-20 -bottom-20 md:-bottom-28 right-[50%]  w-[3rem] md:w-[4rem] h-[3rem] md:h-[4rem]  my-4  py-2 px-2   rounded-full  hover:border-primary  group overflow-hidden font-medium  ease-in duration-300  flex justify-center items-center"
      >
        <HiOutlineArrowNarrowLeft className="w-9 h-10 relative text-[#bbc7d7] group-hover:text-primary ease-in duration-300" />
      </button>
    </>
  );
}
function EmptyArrow({ onClick }) {
  return <div></div>;
}

function Testimonials() {
  const [slideIndex, setSlideIndex] = useState(0);

  const settings = {
    dots: true,

    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    beforeChange: (current, next) => setSlideIndex(next),

    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: (dots) => (
      <div>
        <ul style={{ margin: "px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (current, next) => (
      <div className={current === slideIndex ? "dot dot-active" : "dot"}></div>
    ),

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
      {
        breakpoint: 639,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
    ],
  };

  return (
    <section className="w-full  pt-2 py-20 ">
      <div className="w-full mx-auto  max-w-[1420px] flex flex-col items-center gap-8 px-3 py-16 ">
        <header className="my-12 px-2 xs:px-6 sm:px-16 xl:px-6 2xl:px-16 flex flex-col items-center ">
          <h3 className=" uppercase text-[12px] font-semibold sm:text-base text-secondary py-2 px-2 max-w-[24rem] ">
            TESTIMONIAL
          </h3>
          <p className=" text-2xl sm:text-4xl font-semibold  text-headings text-center max-w-[540px]">
            Build trust with loyal clients
          </p>
        </header>
        <div
          data-aos="fade-up"
          data-aos-duration="600"
          className=" text-center  w-full max-w-[440px]  sm:max-w-[650px] lg:max-w-[1060px] 2xl:max-w-[1100px] 3xl:max-w-[1220px] "
        >
          <Slider {...settings}>
            <article className=" text-start w-full max-w-[340px] xs:max-w-[550px] sm:max-w-[300px] md:max-w-[310px] lg:max-w-[282] 2xl:max-w-[350px] 3xl:max-w-[380px] h-auto  hover:shadow-lg mb-4 border-[1px] border-[#f5f5f5] shadow-gray-500 rounded-xl flex   justify-center items-center cursor-pointer  ease-in duration-300  ">
              <div className="flex flex-col gap-2 py-10 sm:py-8">
                <div className="px-4 flex item-center gap-[1px]">
                  <AiFillStar className="text-secondary w-5 h-5 relative" />
                  <AiFillStar className="text-secondary w-5 h-5 relative" />
                  <AiFillStar className="text-secondary w-5 h-5 relative" />
                  <AiFillStar className="text-secondary w-5 h-5 relative" />
                  <AiFillStar className="text-secondary w-5 h-5 relative" />
                </div>

                <h4 className="px-4 font-bold text-[#343D48]">
                  Latest design trends and styles
                </h4>

                <p className=" text-[#303030] px-4  py-3">
                  Gain valuable experience by collaborating with this
                  exceptional team, and look forward to future opportunities to
                  work together.
                </p>
                <div className="px-4 flex items-center">
                  <div className="relative h-[55px] w-[55px]">
                    <Image src={test1} fill alt="testimonials" />
                  </div>
                  <div>
                    <p className="font-bold text-[#343D48] px-4  text-base">
                      Dordja Djordjevic
                    </p>
                    <p className="font-semibold italic  text-secondary px-4 text-base">
                      FIT Beograd
                    </p>
                  </div>
                </div>
              </div>
            </article>
            <article className=" text-start w-full max-w-[340px] xs:max-w-[550px] sm:max-w-[300px] md:max-w-[310px] lg:max-w-[282] 2xl:max-w-[350px] 3xl:max-w-[380px] h-auto  hover:shadow-lg mb-4 border-[1px] border-[#f5f5f5] shadow-gray-500 rounded-xl flex   justify-center items-center cursor-pointer  ease-in duration-300  ">
              <div className="flex flex-col gap-2 py-10 sm:py-8">
                <div className="px-4 flex item-center gap-[1px]">
                  <AiFillStar className="text-secondary w-5 h-5 relative" />
                  <AiFillStar className="text-secondary w-5 h-5 relative" />
                  <AiFillStar className="text-secondary w-5 h-5 relative" />
                  <AiFillStar className="text-secondary w-5 h-5 relative" />
                  <AiFillStar className="text-secondary w-5 h-5 relative" />
                </div>

                <h4 className="px-4 font-bold text-[#343D48]">
                  Up-to-date and on-trend look
                </h4>

                <p className=" text-[#303030] px-4  py-3">
                  Work alongside this outstanding team to gain practical
                  experience, and build a strong foundation for future
                  collaboration.
                </p>
                <div className="px-4 flex items-center">
                  <div className="relative h-[55px] w-[55px]">
                    <Image src={test2} fill alt="testimonials" />
                  </div>
                  <div>
                    <p className="font-bold text-[#343D48] px-4  text-base">
                      Petar I.
                    </p>
                    <p className="font-semibold italic  text-secondary px-4 text-base">
                      Freelancer
                    </p>
                  </div>
                </div>
              </div>
            </article>
            <article className=" text-start w-full max-w-[340px] xs:max-w-[550px] sm:max-w-[300px] md:max-w-[310px] lg:max-w-[282] 2xl:max-w-[350px] 3xl:max-w-[380px] h-auto  hover:shadow-lg mb-4 border-[1px] border-[#f5f5f5] shadow-gray-500 rounded-xl flex   justify-center items-center cursor-pointer  ease-in duration-300  ">
              <div className="flex flex-col gap-2 py-10 sm:py-8">
                <div className="px-4 flex item-center gap-[1px]">
                  <AiFillStar className="text-secondary w-5 h-5 relative" />
                  <AiFillStar className="text-secondary w-5 h-5 relative" />
                  <AiFillStar className="text-secondary w-5 h-5 relative" />
                  <AiFillStar className="text-secondary w-5 h-5 relative" />
                  <AiFillStar className="text-secondary w-5 h-5 relative" />
                </div>

                <h4 className="px-4 font-bold text-[#343D48]">
                  Fashion-forward design approach
                </h4>

                <p className=" text-[#303030] px-4  py-3">
                  Partner with this remarkable team to expand your skillset and
                  expertise, and open up new opportunities for joint projects
                  and growth.
                </p>
                <div className="px-4 flex items-center">
                  <div className="relative h-[55px] w-[55px]">
                    <Image src={test3} fill alt="testimonials" />
                  </div>
                  <div>
                    <p className="font-bold text-[#343D48] px-4  text-base">
                      Darko C.
                    </p>
                    <p className="font-semibold italic  text-secondary px-4 text-base">
                      Web Dev
                    </p>
                  </div>
                </div>
              </div>
            </article>
            <article className=" text-start w-full max-w-[340px] xs:max-w-[550px] sm:max-w-[300px] md:max-w-[310px] lg:max-w-[282] 2xl:max-w-[350px] 3xl:max-w-[380px] h-auto  hover:shadow-lg mb-4 border-[1px] border-[#f5f5f5] shadow-gray-500 rounded-xl flex   justify-center items-center cursor-pointer  ease-in duration-300  ">
              <div className="flex flex-col gap-2 py-10 sm:py-8">
                <div className="px-4 flex item-center gap-[1px]">
                  <AiFillStar className="text-secondary w-5 h-5 relative" />
                  <AiFillStar className="text-secondary w-5 h-5 relative" />
                  <AiFillStar className="text-secondary w-5 h-5 relative" />
                  <AiFillStar className="text-secondary w-5 h-5 relative" />
                  <AiFillStar className="text-secondary w-5 h-5 relative" />
                </div>

                <h4 className="px-4 font-bold text-[#343D48]">
                  Modern look & trending design
                </h4>

                <p className=" text-[#303030] px-4  py-3">
                  Team up with this exceptional group to gain practical
                  experience and establish a lasting professional partnership
                  for future endeavors.
                </p>
                <div className="px-4 flex items-center">
                  <div className="relative h-[55px] w-[55px]">
                    <Image src={test4} fill alt="testimonials" />
                  </div>
                  <div>
                    <p className="font-bold text-[#343D48] px-4  text-base">
                      Dordje Mitrovic
                    </p>
                    <p className="font-semibold italic  text-secondary px-4 text-base">
                      Owner of Eco Cop
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
