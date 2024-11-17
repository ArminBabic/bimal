import Image from 'next/image'
import React from 'react'
import aboutImg from "../public/assets/about1.jpg";
import aboutImg2 from "../public/assets/about2.jpg";
import aboutImg3 from "../public/assets/about3.jpg";
import Link from 'next/link';

const AboutUs = () => {
  return (
    <main className="flex flex-col items-center">
   
  {/*   <header className="text-5xl my-8 text-bold text-headings">About Us</header> */}

    <div className="w-full max-w-[1200px]  flex flex-col items-center">
      <section  data-aos="fade-down"
          data-aos-duration="600"
          className="w-full gap-6 flex flex-col-reverse md:flex-row md:justify-center md:gap-12  lg:gap-10 xl:gap-24    py-12">
        <div className="w-full md:max-w-[370px] lg:max-w-[30rem] grow flex flex-col gap-4  items-center ">
          <div className=" w-[95%] xs:max-w-[480px] h-[18rem] xs:h-[20rem] sm:w-[30rem] sm:h-[25rem]  md:w-[370px] md:h-[332px] lg:w-[30rem] lg:h-[25rem]  relative rounded-tl-lg rounded-br-lg rounded-tr-[4rem] rounded-bl-[4rem] overflow-hidden ">
            <Image
              src={aboutImg}
              fill
              className="rounded-2xl"
              alt="house1"
              placeholder="blur"
                blurDataURL="/assets/alizino.jpg"
            />
          </div>
        </div>
        <div className="w-[95%] max-w-[30rem] md:max-w-[340px] lg:max-w-[30rem] grow flex flex-col  mx-auto md:mx-0 2xl:mx-0  items-start gap-4  ">
          <div className="mb-2  lg:my-0  w-full ">
            <h2 className=" text-3xl md:text-lg lg:text-3xl italic text-secondary font-bold xs:w-[350px] md:w-[300px]">
           About Us
            </h2>
          </div>
          <div className="max-w-[30rem] text-sm xs:text-base md:text-sm lg:text-base ">
            <p className="leading-7">At Project Pro, we are dedicated to establishing long-term trust in the Balkan market by offering the most extensive portfolio of high-value investments, ranging from renewable energy projects to real estate developments and strategic acquisitions. We specialize in connecting international investors with premium opportunities across the region, providing seamless end-to-end support throughout the investment process.Whether it's energy, real estate, or corporate acquisitions, our team ensures that every transaction is handled with precision and professionalism. </p>
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

      <section  data-aos="fade-up"
          data-aos-duration="600" className="w-full gap-6 flex flex-col md:flex-row md:justify-center md:gap-12 lg:gap-10 xl:gap-24   py-12">
        <div className="w-[95%] max-w-[30rem] md:max-w-[340px] lg:max-w-[30rem] grow flex flex-col  mx-auto md:mx-0 2xl:mx-0  items-start  ">
          <div className="max-w-[30rem] text-sm xs:text-base md:text-sm lg:text-base leading-7">
            <p className="leading-7"> Backed by our robust network of tax, legal, and financial advisors, we guarantee thorough due diligence, reducing risks and maximizing returns for our clients.
            We continuously update our portfolio to reflect the most current and lucrative investment options, ensuring clients always have access to the best opportunities available.With deep roots in the local market, we provide hands-on guidance for international investors, simplifying entry into new markets and ensuring they can proceed with confidence. </p>
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
          <div className=" w-[95%] xs:max-w-[480px] h-[18rem] xs:h-[20rem] sm:w-[30rem] sm:h-[25rem]  md:w-[370px] md:h-[332px] lg:w-[30rem] lg:h-[25rem]  relative rounded-tl-lg rounded-br-lg rounded-tr-[4rem] rounded-bl-[4rem] overflow-hidden ">
            <Image
              src={aboutImg2}
              fill
              className="rounded-2xl"
              alt="house1"
              placeholder="blur"
              blurDataURL="/assets/alizino.jpg"
            />
          </div>
        </div>
      </section>

      <section  data-aos="fade-down"
          data-aos-duration="600"
           className="w-full gap-6 flex flex-col-reverse md:flex-row md:justify-center md:gap-12  lg:gap-10 xl:gap-24    py-12">
        <div className="w-full md:max-w-[370px] lg:max-w-[30rem] grow flex flex-col gap-4  items-center ">
          <div className=" w-[95%] xs:max-w-[480px] h-[18rem] xs:h-[20rem] sm:w-[30rem] sm:h-[25rem]  md:w-[370px] md:h-[332px] lg:w-[30rem] lg:h-[25rem]  relative rounded-tl-lg rounded-br-lg rounded-tr-[4rem] rounded-bl-[4rem] overflow-hidden ">
            <Image
              src={aboutImg3}
              fill
              className="rounded-2xl"
              alt="house1"
              placeholder="blur"
                blurDataURL="/assets/alizino.jpg"
            />
          </div>
        </div>
        <div className="w-[95%] max-w-[30rem] md:max-w-[340px] lg:max-w-[30rem] grow flex flex-col  mx-auto md:mx-0 2xl:mx-0  items-start  ">
          <div className="max-w-[30rem] text-sm xs:text-base md:text-sm lg:text-base">
            <p className="leading-7">
Your trusted partner for successful investments in the Balkans, Project Pro is committed to turning opportunities into reality, whether through strategic energy projects, key real estate developments, or corporate acquisitions. We're always ready to assist in transforming your vision into lasting success.
We are currently advising on approximately 1057 MW of renewable energy projects in collaboration with our external business partner—a law firm—some of which are listed below. Additionally, we have served as the primary advisors for over 400 MW of projects that have already been built and commissioned.
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
    {/* <ContactBanner contactbanner={contactbanner} /> */}

 
  </main>
  )
}

export default AboutUs