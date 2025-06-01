import React from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

import PrivacyHeader from "../../components/PrivacyHeader";
import Footer from "../../components/Footer";

import data2 from "../../data/infocus.json";

const index = () => {
  return (
    <>
      <Head>
        <title>ProjectPro </title>
        <meta
          name="description"
          content="Empowering Your Investments
Energy, Acquisitions, and Real Estate Projects Tailored for Success.Explore the Future of Sustainable Development and Profitable Investments in the Western Balkan"
        />
        <meta
          name="keywords"
          content="Empowering Your Investments
Energy, Acquisitions, and Real Estate Projects Tailored for Success.Explore the Future of Sustainable Development and Profitable Investments in the Western Balkan"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo2.png" />
        {/* share image */}
        <meta property="og:url" content="https://www.investinbalkan.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="ProProject" />
        <meta
          property="og:description"
          content="Empowering Your Investments
Energy, Acquisitions, and Real Estate Projects Tailored for Success.Explore the Future of Sustainable Development and Profitable Investments in the Western Balkan"
        />
        <meta property="og:image" content="/social.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:domain"
          content="https://www.investinbalkan.com/"
        />
        <meta
          property="twitter:url"
          content="https://www.investinbalkan.com/"
        />
        <meta name="twitter:title" content="ProProject" />
        <meta
          name="twitter:description"
          content="Empowering Your Investments
Energy, Acquisitions, and Real Estate Projects Tailored for Success.Explore the Future of Sustainable Development and Profitable Investments in the Western Balkan"
        />
        <meta name="twitter:image" content="/social.jpg" />
      </Head>
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
            )).reverse()}
          </ul>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default index;
