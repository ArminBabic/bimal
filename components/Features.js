import React from "react";
import { BiSupport } from "react-icons/bi";
import { HiCode } from "react-icons/hi";
import { GiCheckMark, GiProgression } from "react-icons/gi";
import { MdOutlineDesignServices } from "react-icons/md";
import { GiSolarPower } from "react-icons/gi";
import Image from "next/image";
import Link from "next/link";
import image1 from "../public/assets/solar5.jpg";

import image2 from "../public/assets/hotel.jpg";

import image3 from "../public/assets/wind2.jpg";
import data2 from "../data/services.json";

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

        <div className="main">
          <ul className="cards ">
            {data2.services.map((item, index) => (
              <Link
                key={item.id}
                href={`/services/${item.id}`}
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
                    <h2 className="card_title"> {item.attributes.title}</h2>
                    <p className="card_text">
                      {item.attributes.subtitle.slice(0, 70)}...
                    </p>
                    <button className="btn card_btn">Read More</button>
                  </div>
                </div>
              </Link>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Features;
