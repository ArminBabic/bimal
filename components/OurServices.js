import React from "react";
import { AiFillSecurityScan } from "react-icons/ai";
import { SiDatabricks } from "react-icons/si";
import Image from "next/image";
import serviceImg from "../public/assets/videoposter.webp";
const OurServices = () => {
  return (
    <div id="ourservices" className="w-full flex justify-center  py-12">
      <section className="w-full max-w-[1250px] px-5">
        <header
          data-aos="fade"
          className=" px-2 xs:px-6 sm:px-16 xl:px-6 2xl:px-16 flex flex-col items-center md:hidden"
        >
          <h3 className=" uppercase text-[12px] font-semibold sm:text-base text-secondary py-2 px-2 max-w-[24rem] ">
            Online Presence Services
          </h3>
          <p className=" text-2xl 3xl:text-4xl font-semibold  text-headings text-center ">
            Strategic Design for Business Growth
          </p>
        </header>

        <main className="flex flex-col-reverse md:flex-row gap-12 md:justify-center md:gap-4 lg:gap-10 xl:gap-16 2xl:gap-20 mt-12">
          {/* left video side */}
          <div
            data-aos="fade-down"
            data-aos-duration="600"
            className="flex flex-col items-center mt-12 xl:mt-12"
          >
            <div className="relative w-full h-[300px] xs:h-[350px] sm:h-[400px] md:h-[400px] md:w-[400px] lg:w-[500px] xl:w-[600px]  max-w-[560px] sm:max-w-[620px] md:max-w-[710px] xl:max-w-[605px] ">
              {/*     <video
                width="full"
                height={550}
                controls
                className="rounded-lg"
                poster="/assets/videoposter.jpg"
              >
                <source src="/" type="video/mp4"></source>
              </video> */}
              <Image
                src={serviceImg}
                alt="our service team img"
                fill
                className="rounded-lg"
                placeholder="blur"
                blurDataURL="/assets/videoposter.webp"
              />
            </div>
          </div>

          {/* right services side */}
          <div className="flex flex-col items-center md:items-start gap-5">
            <header className="px-3 md:flex flex-col items-start hidden">
              <h3 className=" uppercase text-[12px] font-semibold sm:text-base text-secondary py-2 max-w-[24rem] ">
                Online Presence Services
              </h3>
              <p className=" text-2xl 2xl:text-4xl font-semibold  text-headings  max-w-[315px] 2xl:max-w-[450px]">
                Strategic Design for Business Growth
              </p>
            </header>
            <div className="flex flex-col items-center gap-8 ">
              <article
                data-aos="fade-up"
                data-aos-duration="500"
                className="w-full px-3 max-w-[370px] sm:max-w-[420px] md:max-w-[315px] lg:max-w-[360px] xl:max-w-[380px] 3xl:max-w-[430px] flex  gap-4 
            cursor-pointer "
              >
                <div className=" relative flex items-center justify-center bg-[#ff4840] rounded-2xl w-10 h-10 mt-2 ">
                  <SiDatabricks className=" text-[#fff] w-10 h-10 relative mx-2 " />
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="font-bold text-[#303030] text-base lg:text-lg">
                    Advanced Features
                  </h4>
                  <p
                    className="text-base text-[#303030] max-w-[310px]  sm:w-[360px] md:w-[255px]
            lg:w-[285px] xl:max-w-[305px] 3xl:w-[355px] md:text-sm md:leading-7  "
                  >
                    Our platform offers a range of advanced features that are
                    specifically designed to enhance user experience and
                    increase productivity.
                  </p>
                </div>
              </article>
              <article
                data-aos="fade-up"
                data-aos-duration="500"
                className="w-full px-3 max-w-[370px] sm:max-w-[420px] md:max-w-[315px] lg:max-w-[360px] xl:max-w-[380px] 3xl:max-w-[430px] flex  gap-4 
            cursor-pointer "
              >
                <div className=" relative flex items-center justify-center bg-secondary rounded-2xl w-10 h-10 mt-2">
                  <AiFillSecurityScan className=" text-[#fff] w-10 h-10 relative mx-2" />
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="font-bold text-[#303030]  text-base lg:text-lg">
                    Private Data
                  </h4>
                  <p
                    className="text-base  text-[#303030]  max-w-[310px]  sm:w-[360px] md:w-[255px]
            lg:w-[285px] xl:max-w-[305px] 3xl:w-[355px] md:text-sm md:leading-7"
                  >
                    We take the security and privacy of your data very seriously
                    and that keeping it safe and secure is essential to your
                    success.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
};

export default OurServices;
