import Image from "next/image";
import React from "react";
import aboutImg from "../public/assets/about1.jpg";
import aboutImg2 from "../public/assets/about2.jpg";
import aboutImg3 from "../public/assets/about3.jpg";
import Link from "next/link";

import PrivacyHeader from "../components/PrivacyHeader";
import Footer from "../components/Footer";

import { AiFillSecurityScan } from "react-icons/ai";
import { SiDatabricks } from "react-icons/si";

import coreImg from "../public/assets/aboutus.jpg";
import serviceImg from "../public/assets/erer.jpg";

const scrollTo = (e, id) => {
  const element = document.getElementById(id);
  e.preventDefault();
  element?.scrollIntoView({ behavior: "smooth" });
};

const about = () => {
  return (
    <>
      <PrivacyHeader />
      <main className="flex flex-col items-center">
        {/*   <header className="text-5xl my-8 text-bold text-headings">About Us</header> */}

        <div className="w-full max-w-[1200px]  flex flex-col items-center">
          <section
            data-aos="fade-down"
            data-aos-duration="600"
            className="w-full gap-6 flex flex-col-reverse md:flex-row md:justify-center md:gap-12  lg:gap-10 xl:gap-24    py-12"
          >
            <div className="w-full md:max-w-[370px] lg:max-w-[30rem] grow flex flex-col gap-4  items-center ">
              <div className=" w-[95%] xs:max-w-[480px] h-[18rem] xs:h-[20rem] sm:w-[30rem] sm:h-[25rem]  md:w-[370px] md:h-[332px] lg:w-[30rem] lg:h-[25rem]  relative rounded-lg overflow-hidden ">
                <Image
                  src={aboutImg}
                  fill
                  className="rounded-2xl"
                  alt="house1"
                  placeholder="blur"
                  blurDataURL="/logo1.jpg"
                />
              </div>
            </div>
            <div className="w-[95%] max-w-[30rem] md:max-w-[340px] lg:max-w-[30rem] grow flex flex-col  mx-auto md:mx-0 2xl:mx-0  items-start gap-4  ">
              <div className="mb-2  lg:my-0  w-full ">
                <h2 className=" text-3xl md:text-lg lg:text-2xl italic text-secondary font-bold xs:w-[350px] md:w-[300px]">
                  About Us
                </h2>
              </div>
              <div className="max-w-[30rem] text-sm xs:text-base md:text-sm lg:text-base ">
                <p className="leading-7">
                  At Project Pro, we are dedicated to establishing long-term
                  trust in the Balkan market by offering the most extensive
                  portfolio of high-value investments, ranging from renewable
                  energy projects to real estate developments and strategic
                  acquisitions. We specialize in connecting international
                  investors with premium opportunities across the region,
                  providing seamless end-to-end support throughout the
                  investment process.Whether it's energy, real estate, or
                  corporate acquisitions, our team ensures that every
                  transaction is handled with precision and professionalism.{" "}
                </p>
                <div className=" mt-8 md:mt-7 lg:mt-4">
                  <Link href={`tel:`} passHref>
                    <button
                      aria-label="contact us"
                      className="max-w-[12rem] text-[14px]   py-3  px-2 xs:px-4 relative   rounded-xl group overflow-hidden font-bold border-2 border-secondary bg-secondary text-white inline-block"
                    >
                      <span className="absolute bottom-0 left-0 flex w-full h-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#f5f5f5]   group-hover:h-full "></span>
                      <span className="relative group-hover:text-secondary">
                        Call Now
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section
            data-aos="fade-up"
            data-aos-duration="600"
            className="w-full gap-6 flex flex-col md:flex-row md:justify-center md:gap-12 lg:gap-10 xl:gap-24   py-12"
          >
            <div className="w-[95%] max-w-[30rem] md:max-w-[340px] lg:max-w-[30rem] grow flex flex-col  mx-auto md:mx-0 2xl:mx-0  items-start  ">
              <div className="max-w-[30rem] text-sm xs:text-base md:text-sm lg:text-base leading-7">
                <p className="leading-7">
                  {" "}
                  Backed by our robust network of tax, legal, and financial
                  advisors, we guarantee thorough due diligence, reducing risks
                  and maximizing returns for our clients. We continuously update
                  our portfolio to reflect the most current and lucrative
                  investment options, ensuring clients always have access to the
                  best opportunities available.With deep roots in the local
                  market, we provide hands-on guidance for international
                  investors, simplifying entry into new markets and ensuring
                  they can proceed with confidence.{" "}
                </p>
                <div className=" mt-8 md:mt-7 lg:mt-4">
                  <Link href="/contact">
                    <button
                      aria-label="contact us"
                      className="max-w-[12rem] text-[14px]   py-3  px-2 xs:px-4 relative   rounded-xl group overflow-hidden font-bold border-2 border-secondary bg-secondary text-white inline-block"
                    >
                      <span className="absolute bottom-0 left-0 flex w-full h-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#f5f5f5]   group-hover:h-full "></span>
                      <span className="relative group-hover:text-secondary">
                        Contact Us
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full md:max-w-[370px] lg:max-w-[30rem] grow flex flex-col gap-4  items-center ">
              <div className=" w-[95%] xs:max-w-[480px] h-[18rem] xs:h-[20rem] sm:w-[30rem] sm:h-[25rem]  md:w-[370px] md:h-[332px] lg:w-[30rem] lg:h-[25rem]  relative rounded-lg overflow-hidden ">
                <Image
                  src={aboutImg2}
                  fill
                  className="rounded-2xl"
                  alt="house1"
                  placeholder="blur"
                  blurDataURL="/logo1.jpg"
                />
              </div>
            </div>
          </section>

          <section
            data-aos="fade-down"
            data-aos-duration="600"
            className="w-full gap-6 flex flex-col-reverse md:flex-row md:justify-center md:gap-12  lg:gap-10 xl:gap-24    py-12"
          >
            <div className="w-full md:max-w-[370px] lg:max-w-[30rem] grow flex flex-col gap-4  items-center ">
              <div className=" w-[95%] xs:max-w-[480px] h-[18rem] xs:h-[20rem] sm:w-[30rem] sm:h-[25rem]  md:w-[370px] md:h-[332px] lg:w-[30rem] lg:h-[25rem]  relative rounded-lg overflow-hidden ">
                <Image
                  src={aboutImg3}
                  fill
                  className="rounded-2xl"
                  alt="house1"
                  placeholder="blur"
                  blurDataURL="/assets/logo1.jpg"
                />
              </div>
            </div>
            <div className="w-[95%] max-w-[30rem] md:max-w-[340px] lg:max-w-[30rem] grow flex flex-col  mx-auto md:mx-0 2xl:mx-0  items-start  ">
              <div className="max-w-[30rem] text-sm xs:text-base md:text-sm lg:text-base">
                <p className="leading-7">
                  Your trusted partner for successful investments in the
                  Balkans, Project Pro is committed to turning opportunities
                  into reality, whether through strategic energy projects, key
                  real estate developments, or corporate acquisitions. We're
                  always ready to assist in transforming your vision into
                  lasting success. We are currently advising on approximately
                  1057 MW of renewable energy projects in collaboration with our
                  external business partner—a law firm—some of which are listed
                  below. Additionally, we have served as the primary advisors
                  for over 400 MW of projects that have already been built and
                  commissioned.
                </p>
                <div className=" mt-8 md:mt-7 lg:mt-4">
                  <Link href={`tel:`} passHref>
                    <button
                      aria-label="contact us"
                      className="max-w-[12rem] text-[14px]   py-3  px-2 xs:px-4 relative   rounded-xl group overflow-hidden font-bold border-2 border-secondary bg-secondary text-white inline-block"
                    >
                      <span className="absolute bottom-0 left-0 flex w-full h-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#f5f5f5]   group-hover:h-full "></span>
                      <span className="relative group-hover:text-secondary">
                        More Info
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* <section className="flex flex-col items-center">
      <header className="text-xl ">Nasi najpoznatiji brandovi</header>
      <figure
        data-aos="fade"
        data-aos-duration="500"
        className=" justify-center w-[16rem] xs:w-[20rem] sm:w-[35rem] lg:w-[55rem] h-[17px]   xs:h-[30px] sm:h-[42px] relative hidden md:flex mb-6 "
      >
        <Image
          src={brandlogos}
          alt="brand-logos"
          className=""
          fill
          loading="lazy"
          placeholder="blur"
        />
      </figure>
    </section> */}
        </div>
        <section className="flex flex-col gap-3 md:gap-0 items-center md:flex-row md:justify-center pt-6 w-full max-w-[780px] lg:max-w-[1124px]  px-2 2xl:max-w-[1250px] 2xl:px-0">
          <article
            data-aos="fade-down"
            data-aos-duration="600"
            className="flex flex-col lg:px-2 2xl:px-4 items-center text-center md:items-start md:text-start max-w-[480px] gap-6  lg:gap-8 pt-[60px] lg:pt-[60px] pb-12  "
          >
            <header className="    md:px-3 2xl:px-3  flex flex-col items-start text-start  md:items-start md:text-start gap-4 lg:gap-2 ">
              <h3 className=" uppercase text-[12px] font-semibold sm:text-base text-secondary py-2  max-w-[24rem] ">
                Why Choose Us
              </h3>
              <h4 className=" text-2xl 2xl:leading-[3.2rem] sm:text-4xl md:text-2xl lg:text-3xl font-semibold  text-headings  md:text-start">
                Years of Experience in Solar & Renewable Energy
              </h4>
              <h4 className="font-[400] text-xs  md:text-sm lg:text-base  max-w-[504px] text-primary leading-7 lg:leading-9">
                At Project Pro, our strong local presence and deep understanding
                of the Balkan market are key reasons investors trust us to
                manage their projects. With years of experience operating in the
                region, we have cultivated extensive networks and developed
                insider knowledge that is essential for navigating the unique
                legal, regulatory, and business environments in the Balkans.
              </h4>
            </header>
            <button
              onClick={(e) => scrollTo(e, "contact")}
              className="text-white bg-secondary rounded-[30px] border-2 py-2 sm:py-3 px-8 sm:px-12 md:mx-3 w-full max-w-lg md:max-w-64 hover:bg-white hover:text-secondary border-secondary ease-in duration-300"
            >
              Get Started
            </button>
          </article>
          <article
            data-aos="fade-up"
            data-aos-duration="600"
            className="w-full  mt-2 flex justify-center"
          >
            <div className="md:mt-8 z-20 relative w-full h-[430px] xs:h-[550px] sm:h-[600px] md:h-[400px] md:w-[400px] lg:w-[540px] lg:h-[633px] 2xl:w-[620px] rounded-lg max-w-[480px]  md:max-w-[710px]">
              <Image
                src={coreImg}
                alt="core-features-img"
                fill
                placeholder="blur"
                blurDataURL="/logo1.jpg"
                className="rounded-lg"
              />
            </div>
          </article>
        </section>
        <section className="w-full max-w-[480px] sm:max-w-[1250px] mx-2">
          <header
            data-aos="fade"
            className="  sm:px-16 xl:px-6 2xl:px-16 flex flex-col sm:items-center md:hidden"
          >
            <h3 className=" uppercase text-[12px]  font-semibold sm:text-base text-secondary py-2  max-w-[24rem] ">
              Our team
            </h3>
            <p className=" text-2xl 3xl:text-4xl font-semibold  text-headings sm:text-center ">
              Embedded in the economy and culture
            </p>
          </header>

          <main className="flex flex-col-reverse md:flex-row gap-12 md:justify-center md:gap-12 lg:gap-16 xl:gap-16 2xl:gap-20 mt-12">
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
                  sizes=""
                  className="rounded-lg"
                  placeholder="blur"
                  blurDataURL="/assets/erer.jpg"
                />
              </div>
            </div>

            {/* right services side */}
            <div className="flex flex-col items-center md:items-start gap-5">
              <header className=" md:flex flex-col items-start hidden">
                <h3 className=" uppercase text-[12px] font-semibold sm:text-base text-secondary py-2 max-w-[24rem] ">
                  Our team
                </h3>
                <p className=" text-2xl 2xl:text-4xl font-semibold  text-headings  max-w-[315px] 2xl:max-w-[450px]">
                  Embedded in the economy and culture
                </p>
              </header>
              <div className="flex flex-col sm:items-center gap-8 ">
                <article
                  data-aos="fade-up"
                  data-aos-duration="500"
                  className="w-full   sm:max-w-[420px] md:max-w-[315px] lg:max-w-[360px] xl:max-w-[380px] 3xl:max-w-[430px] flex  gap-4 
            cursor-pointer "
                >
                  <div className=" relative flex items-center justify-center bg-[#ff4840] rounded-2xl w-10 h-10 mt-2 ">
                    <SiDatabricks className=" text-[#fff] w-10 h-10 relative mx-2 " />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h4 className="font-bold text-[#303030] text-base lg:text-lg">
                      Powerfull Strategy
                    </h4>
                    <p
                      className="text-base text-[#303030]   sm:w-[360px] md:w-[255px]
            lg:w-[285px] xl:max-w-[305px] 3xl:w-[355px] md:text-sm md:leading-7  "
                    >
                      Giving us unparalleled access to opportunities and
                      allowing us to anticipate potential challenges before they
                      arise.We offer seamless support that is tailored to each
                      client's needs.
                    </p>
                  </div>
                </article>
                <article
                  data-aos="fade-up"
                  data-aos-duration="500"
                  className="w-full   sm:max-w-[420px] md:max-w-[315px] lg:max-w-[360px] xl:max-w-[380px] 3xl:max-w-[430px] flex  gap-4 
            cursor-pointer "
                >
                  <div className=" relative flex items-center justify-center bg-secondary rounded-2xl w-10 h-10 mt-2">
                    <AiFillSecurityScan className=" text-[#fff] w-10 h-10 relative mx-2" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h4 className="font-bold text-[#303030]  text-base lg:text-lg">
                      Save Money
                    </h4>
                    <p
                      className="text-base  text-[#303030]   sm:w-[360px] md:w-[255px]
            lg:w-[285px] xl:max-w-[305px] 3xl:w-[355px] md:text-sm md:leading-7"
                    >
                      Investors choose us because we provide not just guidance
                      but a true partnership — helping them navigate new markets
                      with confidence.
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </main>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default about;
