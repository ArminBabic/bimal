import React from "react";
import { BiSupport } from "react-icons/bi";
import { HiCode } from "react-icons/hi";
import { GiCheckMark, GiProgression } from "react-icons/gi";
import { MdOutlineDesignServices } from "react-icons/md";
import { GiSolarPower } from "react-icons/gi";
import Image from "next/image";
import Link from "next/link";

import data2 from "../data/infocus.json";


const InFocus = () => {

  return (
    <div
      id="infocus"
      className="w-full flex justify-center  pt-12 xs:pt-12 pb-4 xl:pb-16 "
    >
      <section className="w-full max-w-[1250px]">
        <header className="w-full flex flex-col lg:flex-row lg:justify-between items-center lg:items-end lg:mb-8  px-2 xs:px-6 sm:px-16 lg:px-4  ">
          <div className="my-4 lg:my-0 flex flex-col items-center lg:items-start ">
            <h3 className=" uppercase text-[12px] font-semibold sm:text-base text-secondary py-2 px-2 max-w-[24rem] ">
              in focus
            </h3>
            <p className=" text-2xl sm:text-4xl font-semibold  text-headings text-center">
              Latest news and tips
            </p>
          </div>
          <div className="w-[16rem]   hidden lg:block ">
            <Link href="/infocus">
              <button
                aria-label="infocus"
                className="w-[16rem]  text-[14px]   py-3  px-2 xs:px-4 relative   rounded-xl group overflow-hidden font-bold border-2 border-secondary bg-[#f5f5f5] text-secondary inline-block"
              >
                <span className="absolute bottom-0 left-0 flex w-full h-0 transition-all duration-200 ease-out transform translate-y-0 bg-secondary   group-hover:h-full "></span>
                <span className="relative group-hover:text-white">
                  Read More
                </span>
              </button>
            </Link>
          </div>
        </header>

        <div className="main">
          <ul className="cards ">
            {data2.infocus.map((item, index) => (
              <Link
                key={item.id}
                href={`/infocus/${item.id}`}
                data-aos="fade-up"
                data-aos-duration="200"
                className="cards_item  duration-200 ease-in"
              >
                <div className="card">
                  <div className="card_image">
                    <Image
                      width={640}
                      height={700}
                      className="img"
                      src={item.attributes.mainImage}
                      alt="image"
                      loading="lazy"
                    />
                  </div>
                  <div className="card_content">
                    <h2 className="card_title pb-2">
                      {" "}
                      {item.attributes.title.slice(0, 43)}...
                    </h2>

                    <button className="btn card_btn">View More</button>
                  </div>
                </div>
              </Link>
            )).reverse().slice(0,3)}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default InFocus;
