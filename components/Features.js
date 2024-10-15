import React from "react";
import { BiSupport } from "react-icons/bi";
import { HiCode } from "react-icons/hi";
import { GiCheckMark, GiProgression } from "react-icons/gi";
import { MdOutlineDesignServices } from "react-icons/md";
import { GiSolarPower } from "react-icons/gi";
import Image from "next/image";
import image1 from "../public/assets/solar5.jpg";

import image2 from "../public/assets/hotel.jpg";

import image3 from "../public/assets/wind2.jpg";

const data = [image1, image2, image3];

const Features = () => {
  return (
    <div
      id="services"
      className="w-full flex justify-center  pt-12 xs:pt-12 pb-4 xl:pb-16 "
    >
      <section className="w-full max-w-[1250px]">
        <header className="my-8 px-2 xs:px-6 sm:px-16 xl:px-6 2xl:px-16 flex flex-col items-center ">
          <h3 className=" uppercase text-[12px] font-semibold sm:text-base text-secondary py-2 px-2 max-w-[24rem] ">
            Professional services
          </h3>
          <p className=" text-2xl sm:text-4xl font-semibold  text-headings text-center">
            Our services are here to help
          </p>
        </header>
        {/*  <main className="flex flex-col items-center md:flex-row gap-8">
          {data.map((item) => (
            <div key={item}>
              <div
                data-aos="fade-down"
                data-aos-duration="500"
                className="relative w-[260px] h-[360px] xs:w-[360px] xs:h-[460px] sm:w-[430px] sm:h-[550px]  md:w-[220px] md:h-[320px]   lg:w-[280px] lg:h-[380px]  3xl:w-[430px] 3xl:h-[550px] flex justify-center mx-auto rounded-lg cursor-pointer"
              >
                <Image
                  src={item}
                  alt="blog-image-1"
                  placeholder="blur"
                  blurDataURL="/assets/blog11.webp"
                  className="rounded-lg w-[260px] h-[235px] "
                  loading="lazy"
                />

                <div className="absolute bottom-6 sm:bottom-12 md:bottom-6 3xl:bottom-12 mx-auto left-0 right-0 text-headings w-[260px] xs:w-[280px] sm:w-[400px] md:w-[180px] lg:w-[220px] 3xl:w-[400px]">
                  <p className="font-bold text-base sm:text-3xl md:text-base 3xl:text-3xl">
                    Service Name
                  </p>
                  <p className="font-md text-sm sm:text-base md:text-sm 3xl:text-base font-sans ">
                    lorem ipsum pipsum sipsum ove simpsum sove
                    asakshakhshkahskah
                  </p>
                </div>
              </div>
            </div>
          ))}
        </main> */}

        <div className="main">
          <ul className="cards">
            <li
              data-aos="fade-up"
              data-aos-duration="200"
              className="cards_item  duration-200 ease-in"
            >
              <div className="card">
                <div className="card_image">
                  <Image className="img" src={image1} alt="image" />
                </div>
                <div className="card_content">
                  <h2 className="card_title">Solar Panels</h2>
                  <p className="card_text">
                    Lorem ipsum dolor sit amet, consectet adipiscing elit, sed
                    do eiusmod tempor
                  </p>
                  <button className="btn card_btn">Read More</button>
                </div>
              </div>
            </li>
            <li
              data-aos="fade-up"
              data-aos-duration="400"
              className="cards_item  duration-200 ease-in"
            >
              <div className="card">
                <div className="card_image">
                  <Image className="img" src={image3} alt="image" />
                </div>
                <div className="card_content">
                  <h2 className="card_title">Wind Turbines</h2>
                  <p className="card_text">
                    Lorem ipsum dolor sit amet, consectet adipiscing elit, sed
                    do eiusmod tempor
                  </p>
                  <button className="btn card_btn">Read More</button>
                </div>
              </div>
            </li>
            <li
              data-aos="fade-up"
              data-aos-duration="600"
              className="cards_item  duration-200 ease-in"
            >
              <div className="card">
                <div className="card_image">
                  <Image className="img" src={image2} alt="image" />
                </div>
                <div className="card_content">
                  <h2 className="card_title">Real Estate Projects</h2>
                  <p className="card_text">
                    Lorem ipsum dolor sit amet, consectet adipiscing elit, sed
                    do eiusmod tempor
                  </p>
                  <button className="btn card_btn">Read More</button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Features;
