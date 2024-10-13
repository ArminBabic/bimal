import React from "react";
import Image from "next/image";
import upArrow from "../public/assets/arrowEven.svg";
import downArrow from "../public/assets/arrowOdd.svg";

const HowItWorks = () => {
  return (
    <div
      id="howitworks"
      className="bg-secondary mt-36 2xl:mt-48 bg-cover bg-center h-auto  flex justify-center items-center"
      style={{ backgroundImage: "url('/assets/pattern.webp')" }}
    >
      <section className="w-full max-w-[780px] lg:max-w-[960px] 2xl:max-w-[1250px] 2xl:px-12 pt-16 pb-24">
        <header className="my-8 pb-4 px-2 xs:px-6 sm:px-16 xl:px-6 2xl:px-16 flex flex-col items-center ">
          <h3 className=" uppercase text-[12px] font-semibold sm:text-base text-white py-2 px-2 max-w-[24rem] opacity-75 ">
            What is its utility
          </h3>
          <p className=" text-2xl sm:text-4xl font-semibold  text-white text-center">
            Let’s see how it works
          </p>
        </header>
        <main className="pt-1  px-2 xs:px-6 sm:px-16 xl:px-2 2xl:px-16  gap-16 xl:gap-44 2xl:gap-48 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4  place-items-center">
          <article
            data-aos="fade-up"
            data-aos-duration="200"
            className="max-w-[250px] xs:w-[380px] sm:w-[256px] md:w-[310px]
            xl:w-[250px] h-[256px] 2xl:w-[17.5rem]  flex flex-col gap-4 items-center text-center sm:items-start sm:text-start justify-center
            cursor-pointer "
          >
            <figure className="flex items-center">
              <div className=" relative flex items-center justify-center bg-white rounded-3xl w-16 h-16">
                <div className=" text-primary text-2xl font-serif w-9 h-9 flex items-center justify-center font-[500]">
                  I
                </div>
              </div>
              <div className="relative w-[200px] h-[40px] hidden xl:block">
                <Image src={downArrow} alt="upArrow" fill />{" "}
              </div>
            </figure>
            <h4 className="font-[500] text-[#fff]  text-lg xs:text-xl">
            Make Appointment
            </h4>
            <p className="text-base text-[#fff]  opacity-75 ">
              Consultation with the client to determine their needs, goals, and
              budget. This may involve discussing the project scope, timeline,
              design preferences, and any other important details.
            </p>
          </article>
          <article
            data-aos="fade-up"
            data-aos-duration="400"
            className="max-w-[250px] xs:w-[380px] sm:w-[256px] md:w-[310px]
            xl:w-[250px] h-[256px] 2xl:w-[17.5rem]  flex flex-col gap-4 items-center text-center sm:items-start sm:text-start justify-center
            cursor-pointer "
          >
            <figure className="flex items-center">
              <div className=" relative flex items-center justify-center bg-white rounded-3xl w-16 h-16">
                <div className=" text-primary text-2xl font-serif w-9 h-9 flex items-center justify-center font-[500]">
                  II
                </div>
              </div>
              <div className="relative w-[200px] h-[40px] hidden xl:block">
                <Image src={upArrow} alt="upArrow" fill />{" "}
              </div>
            </figure>
            <h4 className="font-[500] text-[#fff]  text-lg xs:text-xl">
            Consultation
            </h4>
            <p className="text-base text-[#fff]  opacity-75 ">
            Consultation with the client to determine their needs, goals, and
              budget. This may involve discussing the project scope, timeline,
              design preferences, and any other important details.
            </p>
          </article>{" "}
          <article
            data-aos="fade-up"
            data-aos-duration="600"
            className="max-w-[250px] xs:w-[380px] sm:w-[256px] md:w-[310px]
            xl:w-[250px] h-[256px] 2xl:w-[17.5rem]  flex flex-col gap-4 items-center text-center sm:items-start sm:text-start justify-center
            cursor-pointer "
          >
            <figure className="flex items-center">
              <div className=" relative flex items-center justify-center bg-white rounded-3xl w-16 h-16">
                <div className=" text-primary text-2xl font-serif w-9 h-9 flex items-center justify-center font-[500]">
                  III
                </div>
              </div>
              <div className="relative w-[200px] h-[40px] hidden xl:block">
                <Image src={downArrow} alt="upArrow" fill />{" "}
              </div>
            </figure>
            <h4 className="font-[500] text-[#fff]  text-lg xs:text-xl">
            Installation System
            </h4>
            <p className="text-base text-[#fff]  opacity-75 ">
            Consultation with the client to determine their needs, goals, and
              budget. This may involve discussing the project scope, timeline,
              design preferences, and any other important details.
            </p>
          </article>
          <article
            data-aos="fade-up"
            data-aos-duration="800"
            className="max-w-[250px] xs:w-[380px] sm:w-[256px] md:w-[310px]
            xl:w-[250px] h-[256px] 2xl:w-[17.5rem]  flex flex-col gap-4 items-center text-center sm:items-start sm:text-start justify-center
            cursor-pointer "
          >
            <figure className="flex items-center">
              <div className=" relative flex items-center justify-center bg-white rounded-3xl w-16 h-16">
                <div className=" text-primary text-2xl font-serif w-9 h-9 flex items-center justify-center font-[500]">
                  IV
                </div>
              </div>
              <div className="relative w-[200px] h-[40px] hidden ">
                <Image src={downArrow} alt="upArrow" fill />{" "}
              </div>
            </figure>
            <h4 className="font-[500] text-[#fff]  text-lg xs:text-xl">
            Execution Project
            </h4>
            <p className="text-base text-[#fff]  opacity-75 ">
            Consultation with the client to determine their needs, goals, and
              budget. This may involve discussing the project scope, timeline,
              design preferences, and any other important details.
            </p>
          </article>
        </main>
      </section>
    </div>
  );
};

export default HowItWorks;
