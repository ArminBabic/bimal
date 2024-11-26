import React from "react";
import Image from "next/image";
import coreImg from "../public/assets/aboutus.jpg";

const CoreFeatures = () => {
  const scrollTo = (e, id) => {
    const element = document.getElementById(id);
    e.preventDefault();
    element?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <main className="w-full flex flex-col justify-center gap-8 items-center">
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
              of the Balkan market are key reasons investors trust us to manage
              their projects. With years of experience operating in the region,
              we have cultivated extensive networks and developed insider
              knowledge that is essential for navigating the unique legal,
              regulatory, and business environments in the Balkans.
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
              blurDataURL="/assets/corefeature.webp"
              className="rounded-lg"
            />
          </div>
        </article>
      </section>
    </main>
  );
};

export default CoreFeatures;
