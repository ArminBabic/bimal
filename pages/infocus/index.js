import React from "react";
import Image from "next/image";
import Link from "next/link";

import PrivacyHeader from "../../components/PrivacyHeader";
import Footer from "../../components/Footer";

import data2 from "../../data/infocus.json";

const index = () => {
  return (
    <>
      <PrivacyHeader />
      <div className="flex flex-col items-center">
        <header className="w-full flex flex-col  items-center  lg:mb-8  px-2 xs:px-6 sm:px-16 lg:px-4  ">
          <div className="my-4 lg:my-0 flex flex-col items-center  ">
            <h3 className=" uppercase text-[12px] font-semibold sm:text-base text-secondary py-2 px-2 max-w-[24rem] ">
              in focus
            </h3>
            <p className=" text-2xl sm:text-4xl font-semibold  text-headings text-center">
              Latest news and tips
            </p>
          </div>
        </header>

        <main className="main">
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
            ))}
          </ul>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default index;
