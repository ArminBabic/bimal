import React from "react";

import Image from "next/image";
import Link from "next/link";

import data2 from "../data/projects.json";
import {
  FaLeaves,
  FaSolarPanel,
  FaBatteryFull,
  FaDollarSign,
  FaMapMarkerAlt,
} from "react-icons/fa";
import image1 from "../public/assets/solar5.jpg";

const Projects = () => {
  return (
    <div
      id="projects"
      className="w-full flex justify-center  pt-12 xs:pt-12 pb-4 xl:pb-16 "
    >
      <section className="w-full max-w-[1250px] flex flex-col items-center">
        <header className="w-full flex flex-col lg:flex-row lg:justify-between items-center lg:items-end lg:mb-8  px-2 xs:px-6 sm:px-16 lg:px-4  ">
          <div className="my-4 lg:my-0 flex flex-col items-center lg:items-start ">
            <h3 className=" uppercase text-[12px] font-semibold sm:text-base text-secondary py-2 px-2 max-w-[24rem] ">
              AVAILABLE PROJECTS
            </h3>
            <p className=" text-2xl sm:text-4xl font-semibold  text-headings text-center">
              Investment and RES Projects
            </p>
          </div>
          <div className="w-[16rem]   hidden lg:block ">
            <Link href="/projects">
              <button
                aria-label="contact us"
                className="w-[16rem]  text-[14px]   py-3  px-2 xs:px-4 relative   rounded-xl group overflow-hidden font-bold border-2 border-secondary bg-secondary text-white inline-block"
              >
                <span className="absolute bottom-0 left-0 flex w-full h-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#f5f5f5]   group-hover:h-full "></span>
                <span className="relative group-hover:text-secondary">
                  All Projects
                </span>
              </button>
            </Link>
          </div>
        </header>
        {/*   <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
          <Image
            src={image1}
            alt="Solar Plant"
            width={400}
            height={250}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <FaSolarPanel className="text-yellow-500" /> Solar Plant
            </h2>
            <p className="text-gray-600 flex items-center gap-2 mt-2">
              <FaBatteryFull className="text-green-500" /> CAPACITY OF 52 MW
              (AC)
            </p>
            <p className="text-gray-600 flex items-center gap-2 mt-2">
              <FaMapMarkerAlt className="text-red-500" /> FEDERATION OF BOSNIA
              AND HERZEGOVINA
            </p>
            <p className="text-gray-800 font-bold flex items-center gap-2 mt-2">
              <FaDollarSign className="text-blue-500" /> 142.000 EUR per MW (AC)
            </p>
            <button className="mt-4 w-full bg-secondary text-white py-2 rounded-lg hover:bg-blue-600 transition">
              Read More
            </button>
          </div>
        </div> */}

        <main className="main-p">
          <ul className="cards-p ">
            {data2.projects
              .map((item, index) => (
                <Link
                  key={item.id}
                  href={`/projects/${item.id}`}
                  data-aos="fade-up"
                  data-aos-duration="200"
                  className="cards_item-p  duration-200 ease-in"
                >
                  <div className="card-p">
                    <div className="card_image-p">
                      <Image
                        width={640}
                        height={500}
                        className="img"
                        src={item.attributes.mainImage}
                        alt="image"
                        loading="lazy"
                      />
                    </div>
                    <div className="card_content-p">
                      <p className="card_text-p  flex items-center gap-2">
                        <FaSolarPanel className="text-yellow-500" />{" "}
                        {item.attributes.titleA}
                      </p>
                      <p className="card_text-p flex items-center gap-2">
                        <FaBatteryFull className="text-secondary" />
                        {item.attributes.capacityA}
                      </p>
                      <p className="card_text-p flex items-center gap-2">
                        <FaMapMarkerAlt className="text-red-500" />
                        {item.attributes.locationA}
                      </p>
                      <p className="card_text-p flex items-center gap-2">
                        <FaDollarSign className="text-blue-500" />
                        {item.attributes.priceA}
                      </p>
                      <button className="btn-p card_btn-p">Read More</button>
                    </div>
                  </div>
                </Link>
              ))
              .slice(0, 3)}
          </ul>
        </main>
        <div className="w-full px-4 mt-6 lg:hidden  flex flex-col md:items-center">
          <Link href="/projects">
            <button
              aria-label="contact us"
              className="md:w-[14rem]  lg:max-w-[12rem] w-full text-[14px]   py-3  px-2 xs:px-4 relative   rounded-xl group overflow-hidden font-bold border-2 border-secondary bg-secondary text-white inline-block"
            >
              <span className="absolute bottom-0 left-0 flex w-full h-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#f5f5f5]   group-hover:h-full "></span>
              <span className="relative group-hover:text-secondary">
                All Projects
              </span>
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Projects;
