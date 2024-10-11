import React from "react";
import { BiSupport } from "react-icons/bi";
import { AiFillThunderbolt } from "react-icons/ai";
import { GiProgression } from "react-icons/gi";
import { FaHandshake } from "react-icons/fa";

const QualityFeatures = () => {
  return (
    <div
      id="qualityfeatures"
      className="w-full flex justify-center  pt-12  pb-4 xl:pb-16 "
    >
      <section className="w-full max-w-[780px] lg:max-w-[960px] 2xl:max-w-[1250px] 2xl:px-12">
        <header className="my-8 pb-4 px-2 xs:px-6 sm:px-16 xl:px-6 2xl:px-16 flex flex-col items-center ">
          <h3 className=" uppercase text-[12px] font-semibold sm:text-base text-secondary py-2 px-2 max-w-[24rem] ">
            Premium Features
          </h3>
          <p className=" text-2xl sm:text-4xl font-semibold  text-headings text-center">
            Next-Generation Performance
          </p>
        </header>
        <main className="pt-1  px-2 xs:px-6 sm:px-3 xl:px-2 2xl:px-16  gap-8 md:gap-10 lg:gap-12 grid grid-cols-1 sm:grid-cols-2   place-items-center">
          <article
            data-aos="fade-up"
            data-aos-duration="200"
            className="w-full px-3 max-w-[310px] xs:max-w-[490px] sm:max-w-[310px] md:max-w-[345px] lg:max-w-[405px] xl:max-w-[465px] 2xl:max-w-[495px] 3xl:max-w-[530px] justify-center flex  gap-4 
            cursor-pointer "
          >
            <div className=" relative flex items-center justify-center bg-secondary rounded-2xl w-10 h-10 xs:w-[3.5rem] xs:h-[3.5rem] md:w-16 md:h-16 md:rounded-3xl mt-2">
              <AiFillThunderbolt className=" text-[#fff] w-9 h-9  relative mx-2 " />
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="font-bold text-[#303030] text-base  lg:text-lg">
                Great performance
              </h4>
              <p
                className="w-full text-base text-[#343D48] max-w-[240px] xs:max-w-[440px]  sm:max-w-[240px] 
            lg:max-w-[305px] xl:max-w-[355px] 2xl:maw-[385px] 3xl:w-[420px] leading-[1.7rem]  md:leading-7  "
              >
                Great performance requires a combination of skills, knowledge,
                and attitude.It is associated with productivity, efficient
                processes, and strong financial results.
              </p>
            </div>
          </article>
          <article
            data-aos="fade-up"
            data-aos-duration="400"
            className="w-full px-3 max-w-[310px] xs:max-w-[490px] sm:max-w-[310px] md:max-w-[345px] lg:max-w-[405px] xl:max-w-[465px] 2xl:max-w-[495px] 3xl:max-w-[530px] justify-center flex  gap-4 
            cursor-pointer "
          >
            <div className=" relative flex items-center justify-center bg-[#ff4840] rounded-2xl w-10 h-10 xs:w-[3.5rem] xs:h-[3.5rem] md:w-16 md:h-16 md:rounded-3xl mt-2">
              <GiProgression className=" text-[#fff] w-9 h-9  relative mx-2 " />
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="font-bold text-[#303030] text-base  lg:text-lg">
                Advanced level
              </h4>
              <p
                className="w-full text-base text-[#343D48] max-w-[240px] xs:max-w-[440px]  sm:max-w-[240px] 
            lg:max-w-[305px] xl:max-w-[355px] 2xl:maw-[385px] 3xl:w-[420px] leading-[1.7rem]  md:leading-7  "
              >
                Service that is designed to meet the needs of our most
                discerning customers who demand the highest standards of
                quality, performance, and reliability.
              </p>
            </div>
          </article>
          <article
            data-aos="fade-up"
            data-aos-duration="600"
            className="w-full px-3 max-w-[310px] xs:max-w-[490px] sm:max-w-[310px] md:max-w-[345px] lg:max-w-[405px] xl:max-w-[465px] 2xl:max-w-[495px] 3xl:max-w-[530px] justify-center flex  gap-4 
            cursor-pointer "
          >
            <div className=" relative flex items-center justify-center bg-[#faae1b] rounded-2xl w-10 h-10 xs:w-[3.5rem] xs:h-[3.5rem] md:w-16 md:h-16 md:rounded-3xl mt-2">
              <FaHandshake className=" text-[#fff] w-9 h-9  relative mx-2 " />
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="font-bold text-[#303030] text-base  lg:text-lg">
                Shared enterprise
              </h4>
              <p
                className="w-full text-base text-[#343D48] max-w-[240px] xs:max-w-[440px]  sm:max-w-[240px] 
            lg:max-w-[305px] xl:max-w-[355px] 2xl:maw-[385px] 3xl:w-[420px] leading-[1.7rem]  md:leading-7  "
              >
                We believe in the power of shared enterprise to achieve
                success.Our shared enterprises are built on a foundation of
                trust, transparency, and mutual benefit.
              </p>
            </div>
          </article>
          <article
            data-aos="fade-up"
            data-aos-duration="800"
            className="w-full px-3 max-w-[310px] xs:max-w-[490px] sm:max-w-[310px] md:max-w-[345px] lg:max-w-[405px] xl:max-w-[465px] 2xl:max-w-[495px] 3xl:max-w-[530px] justify-center flex  gap-4 
            cursor-pointer "
          >
            <div className=" relative flex items-center justify-center bg-secondary rounded-2xl w-10 h-10 xs:w-[3.5rem] xs:h-[3.5rem] md:w-16 md:h-16 md:rounded-3xl mt-2">
              <BiSupport className=" text-[#fff] w-9 h-9  relative mx-2 " />
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="font-bold text-[#343D48] text-base  lg:text-lg">
                Support Team
              </h4>
              <p
                className="w-full text-base text-[#303030] max-w-[240px] xs:max-w-[440px]  sm:max-w-[240px] 
            lg:max-w-[305px] xl:max-w-[355px] 2xl:maw-[385px] 3xl:w-[420px] leading-[1.7rem]  md:leading-7  "
              >
                In order to provide excellent customer support, our support team
                is responsive, empathetic, and proactive in addressing customer
                needs, while also being clear and informative.
              </p>
            </div>
          </article>
        </main>
      </section>
    </div>
  );
};

export default QualityFeatures;
